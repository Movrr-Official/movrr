"use server";

import { z } from "zod";
import prisma from "@/prisma/client";

import { blogSchema, updateBlogSchema } from "@/schema";
import { slugify } from "@/lib/utils";
import { Post } from "@/types/types";

export type BlogFormData = z.infer<typeof blogSchema>;
export type UpdateBlogFormData = z.infer<typeof updateBlogSchema>;

export const getBlogPosts = async (): Promise<Post[]> => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
    });
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const getBlogPostBySlug = async (slug: string): Promise<Post | null> => {
  try {
    const post = await prisma.post.findFirst({
      where: {
        slug: {
          equals: slug,
          mode: "insensitive",
        },
      },
    });

    if (!post) {
      console.error(`Post not found for slug: ${slug}`);
      return null;
    }

    return post;
  } catch (error) {
    console.error(`Error fetching post by slug (${slug}):`, error);
    throw error;
  }
};

export const getBlogPostById = async (postId: string): Promise<Post | null> => {
  try {
    const post = await prisma.post.findUnique({
      where: { id: postId },
    });
    return post;
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    return null;
  }
};

export async function getRecentBlogPosts(limit: number = 3): Promise<Post[]> {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      take: limit,
    });
    return posts.map((post) => ({
      ...post,
      excerpt: post.excerpt || "", // Default for nullable field
      readTime: post.readTime || 1, // Default if null
    }));
  } catch (error) {
    console.error("Error fetching recent blogs:", error);
    return [];
  }
}

export async function blogPost(values: BlogFormData) {
  try {
    const validation = blogSchema.safeParse(values);

    if (!validation.success) {
      return {
        error: "Invalid data",
        details: validation.error.format(),
        status: 400,
      };
    }

    const { data } = validation;

    await prisma.post.create({
      data: {
        title: data.title,
        slug: slugify(data.title),
        excerpt: data.excerpt,
        category: data.category,
        content: data.content,
        author: data.author,
        imageUrl: data.imageUrl,
        date: new Date(),
      },
    });

    return { success: "Post created successfully", status: 200 };
  } catch (error) {
    console.error("Error submitting post:", error);
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

    const { id, title, content } = values;

    // Update the post in the database
    await prisma.post.update({
      where: { id },
      data: {
        title,
        content,
      },
    });

    return { success: "Post updated successfully", status: 200 };
  } catch (error) {
    console.error("Error updating post:", error);
    return { error: "Internal Server Error", status: 500 };
  }
}

export async function deleteBlogPost(id: string | undefined) {
  if (!id) {
    throw new Error("Post ID is required");
  }

  try {
    // Check if the post exists before attempting to delete
    const postExists = await prisma.post.findUnique({
      where: { id },
    });

    if (!postExists) {
      return {
        error: "Post not found",
        status: 404,
      };
    }

    // Delete the post from the database
    await prisma.post.delete({
      where: { id },
    });

    return { success: "Post deleted successfully", status: 200 };
  } catch (error) {
    console.error("Error deleting post:", error);
    return { error: "Internal Server Error", status: 500 };
  }
}
