"use server";

import { z } from "zod";
import { createSupabaseServerClient } from "@/supabase/server";
import { blogSchema, updateBlogSchema } from "@/schema";
import { slugify, calculateReadTime } from "@/lib/utils";
import { Post } from "@/types/types";
import { logger } from "@/lib/logger";
import { sanitizeHtml, sanitizeText } from "@/lib/sanitize";
import { checkRateLimit } from "@/lib/rate-limit";
import { headers } from "next/headers";

export type BlogFormData = z.infer<typeof blogSchema>;
export type UpdateBlogFormData = z.infer<typeof updateBlogSchema>;

/**
 * Type for Supabase post row (snake_case database columns)
 */
type SupabasePostRow = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  author: string;
  category: string | null;
  content: string;
  featured: boolean | null;
  image_url: string | null;
  imageUrl?: string | null;
  read_time: number | null;
  date: string;
  created_at: string;
  updated_at: string;
};

/**
 * Helper function to transform Supabase row to Post type
 * Converts date strings to Date objects and ensures proper defaults
 */
function transformPost(row: SupabasePostRow): Post {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt || "",
    author: row.author,
    category: row.category || undefined,
    content: row.content,
    featured: row.featured || false,
    imageUrl: row.image_url || row.imageUrl || "",
    readTime: row.read_time || calculateReadTime(row.content || ""),
    date: row.date ? new Date(row.date) : new Date(),
    createdAt: row.created_at ? new Date(row.created_at) : new Date(),
    updatedAt: row.updated_at ? new Date(row.updated_at) : new Date(),
  };
}

export const getBlogPosts = async (): Promise<Post[]> => {
  try {
    const supabase = await createSupabaseServerClient();

    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      logger.errorWithContext("Error fetching posts", error, {
        action: "getBlogPosts",
      });
      return [];
    }

    if (!data) {
      return [];
    }

    return data.map(transformPost);
  } catch (error) {
    logger.errorWithContext("Error fetching posts", error, {
      action: "getBlogPosts",
    });
    return [];
  }
};

export const getBlogPostBySlug = async (slug: string): Promise<Post | null> => {
  try {
    const supabase = await createSupabaseServerClient();

    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .ilike("slug", slug)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        // No rows returned
        console.error(`Post not found for slug: ${slug}`);
        return null;
      }
      console.error(`Error fetching post by slug (${slug}):`, error);
      throw error;
    }

    if (!data) {
      return null;
    }

    return transformPost(data);
  } catch (error) {
    console.error(`Error fetching post by slug (${slug}):`, error);
    throw error;
  }
};

export const getBlogPostById = async (postId: string): Promise<Post | null> => {
  try {
    const supabase = await createSupabaseServerClient();

    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", postId)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        // No rows returned
        return null;
      }
      console.error("Error fetching post by ID:", error);
      return null;
    }

    if (!data) {
      return null;
    }

    return transformPost(data);
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    return null;
  }
};

export async function getRecentBlogPosts(limit: number = 3): Promise<Post[]> {
  try {
    const supabase = await createSupabaseServerClient();

    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(limit);

    if (error) {
      console.error("Error fetching recent blogs:", error);
      return [];
    }

    if (!data) {
      return [];
    }

    return data.map((post: SupabasePostRow) => {
      const transformed = transformPost(post);
      return {
        ...transformed,
        excerpt: transformed.excerpt || "",
        readTime: transformed.readTime || 1,
      };
    });
  } catch (error) {
    console.error("Error fetching recent blogs:", error);
    return [];
  }
}

export async function blogPost(values: BlogFormData) {
  try {
    // Rate limiting - get headers from Next.js
    try {
      const headersList = await headers();
      const forwardedFor = headersList.get("x-forwarded-for");
      const realIP = headersList.get("x-real-ip");
      const clientIP = forwardedFor?.split(",")[0].trim() || realIP || "unknown";

      const rateLimitResult = checkRateLimit(clientIP, {
        windowMs: 60 * 60 * 1000, // 1 hour
        maxRequests: 10, // 10 posts per hour
        identifier: "blog-post",
      });

      if (!rateLimitResult.allowed) {
        return {
          error: "Too many requests",
          details: "Please wait before creating another post.",
          status: 429,
        };
      }
    } catch (rateLimitError) {
      // If rate limiting fails, log but continue (fail open)
      logger.warn("Rate limiting check failed", rateLimitError);
    }

    // Sanitize input
    const sanitizedValues = {
      title: sanitizeText(values.title),
      excerpt: sanitizeText(values.excerpt),
      author: sanitizeText(values.author),
      category: sanitizeText(values.category),
      imageUrl: values.imageUrl, // URL validation handled by schema
      content: sanitizeHtml(values.content), // HTML content needs HTML sanitization
    };

    const validation = blogSchema.safeParse(sanitizedValues);

    if (!validation.success) {
      return {
        error: "Invalid data",
        details: validation.error.format(),
        status: 400,
      };
    }

    const { data } = validation;
    const supabase = await createSupabaseServerClient();

    const postSlug = slugify(data.title);
    const readTime = calculateReadTime(data.content);

    // Check if slug already exists
    const { data: existingPost } = await supabase
      .from("posts")
      .select("id")
      .eq("slug", postSlug)
      .single();

    if (existingPost) {
      return {
        error: "A post with this title already exists",
        status: 409,
      };
    }

    const { error } = await supabase.from("posts").insert({
      title: data.title,
      slug: postSlug,
      excerpt: data.excerpt,
      category: data.category,
      content: data.content,
      author: data.author,
      image_url: data.imageUrl,
      read_time: readTime,
      date: new Date().toISOString(),
    });

    if (error) {
      logger.errorWithContext("Error creating post", error, {
        action: "blogPost",
        title: data.title,
      });
      return {
        error: "Failed to create post",
        status: 500,
      };
    }

    return { success: "Post created successfully", status: 200 };
  } catch (error) {
    logger.errorWithContext("Error submitting post", error, {
      action: "blogPost",
    });
    return { error: "Internal Server Error", status: 500 };
  }
}

export async function updateBlogPost(
  values: UpdateBlogFormData & { id: string }
) {
  try {
    const validation = updateBlogSchema.safeParse(values);

    if (!validation.success) {
      return {
        error: "Invalid data",
        details: validation.error.format(),
        status: 400,
      };
    }

    const { id, title, content, author, imageUrl } = values;
    const supabase = await createSupabaseServerClient();

    // Build update object with only provided fields
    const updateData: {
      updated_at: string;
      title?: string;
      slug?: string;
      content?: string;
      read_time?: number;
      author?: string;
      image_url?: string;
    } = {
      updated_at: new Date().toISOString(),
    };

    if (title !== undefined) {
      updateData.title = title;
      updateData.slug = slugify(title);
    }
    if (content !== undefined) {
      updateData.content = content;
      updateData.read_time = calculateReadTime(content);
    }
    if (author !== undefined) {
      updateData.author = author;
    }
    if (imageUrl !== undefined) {
      updateData.image_url = imageUrl;
    }

    const { error } = await supabase
      .from("posts")
      .update(updateData)
      .eq("id", id);

    if (error) {
      console.error("Error updating post:", error);
      return {
        error: "Failed to update post",
        status: 500,
      };
    }

    return { success: "Post updated successfully", status: 200 };
  } catch (error) {
    console.error("Error updating post:", error);
    return { error: "Internal Server Error", status: 500 };
  }
}

export async function deleteBlogPost(id: string | undefined) {
  if (!id) {
    return {
      error: "Post ID is required",
      status: 400,
    };
  }

  try {
    const supabase = await createSupabaseServerClient();

    // Check if the post exists before attempting to delete
    const { data: postExists, error: fetchError } = await supabase
      .from("posts")
      .select("id")
      .eq("id", id)
      .single();

    if (fetchError || !postExists) {
      return {
        error: "Post not found",
        status: 404,
      };
    }

    // Delete the post from the database
    const { error } = await supabase.from("posts").delete().eq("id", id);

    if (error) {
      console.error("Error deleting post:", error);
      return {
        error: "Failed to delete post",
        status: 500,
      };
    }

    return { success: "Post deleted successfully", status: 200 };
  } catch (error) {
    console.error("Error deleting post:", error);
    return { error: "Internal Server Error", status: 500 };
  }
}
