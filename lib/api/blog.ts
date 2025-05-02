import {
  getBlogPosts,
  getBlogPostBySlug,
  getBlogPostById,
  getRecentBlogPosts,
} from "@/app/actions/blog";
import { Post } from "@/types/types";

// Client-side wrapper for getBlogPosts
export async function fetchBlogPosts(): Promise<Post[]> {
  return getBlogPosts();
}

// Client-side wrapper for getBlogPostBySlug
export async function fetchBlogPostBySlug(slug: string): Promise<Post | null> {
  return getBlogPostBySlug(slug);
}

// Client-side wrapper for getBlogPostById
export async function fetchBlogPostById(postId: string): Promise<Post | null> {
  return getBlogPostById(postId);
}

// Client-side wrapper for getRecentBlogPosts
export async function fetchRecentBlogPosts(limit: number = 3): Promise<Post[]> {
  return getRecentBlogPosts(limit);
}
