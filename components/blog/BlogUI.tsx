"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import FeaturedPost from "./FeaturedPost";
import BlogCard from "./BlogCard";
import LoadMoreButton from "./LoadMoreButton";
import { Post } from "@/types/types";

interface Props {
  initialPosts: Post[];
  categories: string[];
  initialCategory: string;
  initialPage: number;
  featuredPost: Post | null;
  postsPerPage: number;
}

export default function BlogUI({
  initialPosts,
  categories,
  initialCategory,
  initialPage,
  featuredPost,
  postsPerPage,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [category, setCategory] = useState(initialCategory);
  const [page, setPage] = useState(initialPage);
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialPosts.length === postsPerPage);

  const updateUrl = (newCategory: string, newPage: number) => {
    const params = new URLSearchParams();
    if (newCategory !== "All") params.set("category", newCategory);
    if (newPage > 1) params.set("page", newPage.toString());

    router.replace(`/blog?${params.toString()}`, { scroll: false });
  };

  const fetchPosts = async (cat: string, pg: number) => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/posts?category=${encodeURIComponent(cat)}&page=${pg}&limit=${postsPerPage}`
      );
      if (!res.ok) throw new Error("Failed to fetch posts");
      const data = await res.json();
      return data.posts as Post[];
    } catch (err) {
      console.error(err);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = async (newCategory: string) => {
    if (newCategory === category) return;
    setCategory(newCategory);
    setPage(1);
    updateUrl(newCategory, 1);

    const newPosts = await fetchPosts(newCategory, 1);
    setPosts(newPosts);
    setHasMore(newPosts.length === postsPerPage);
  };

  const handleLoadMore = async () => {
    if (loading || !hasMore) return;
    const nextPage = page + 1;
    const newPosts = await fetchPosts(category, nextPage);

    setPage(nextPage);
    setPosts((prev) => [...prev, ...newPosts]);
    setHasMore(newPosts.length === postsPerPage);
    updateUrl(category, nextPage);
  };

  useEffect(() => {
    // Sync state if user navigates with browser history
    const paramCategory = searchParams.get("category") || "All";
    const paramPage = parseInt(searchParams.get("page") || "1", 10);

    setCategory(paramCategory);
    setPage(paramPage);
  }, [searchParams]);

  return (
    <>
      {featuredPost && <FeaturedPost post={featuredPost} />}
      <CategoryFilter
        categories={categories}
        selected={category}
        onChange={handleCategoryChange}
      />
      <section className="w-full bg-background py-12 md:py-24">
        {/* OUTFRONT-style full-width container */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-12 gap-px bg-border">
              {posts.map((post) => (
                <div key={post.id} className="col-span-12 md:col-span-6 lg:col-span-4">
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              {hasMore ? (
                <LoadMoreButton onClick={handleLoadMore} disabled={loading} />
              ) : (
                <p className="text-muted-foreground text-sm font-medium">No more articles</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
