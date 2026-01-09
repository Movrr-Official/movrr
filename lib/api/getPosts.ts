import { getBlogPosts } from "@/app/actions/blog";
import { Post } from "@/types/types";

export async function getPosts({
  category,
  page,
  postsPerPage,
}: {
  category: string;
  page: number;
  postsPerPage: number;
}): Promise<{ posts: Post[]; featuredPost: Post | undefined }> {
  const allPosts = await getBlogPosts();

  let filtered = allPosts;

  if (category !== "All") {
    filtered = filtered.filter((p) => p.category === category);
  }

  const sorted = filtered.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featuredPost = sorted[0];
  const start = (page - 1) * postsPerPage;
  const paginated = sorted.slice(start, start + postsPerPage);

  return { posts: paginated, featuredPost };
}

export async function getCategories(): Promise<string[]> {
  const allPosts = await getBlogPosts();
  const categories = new Set([
    "All",
    ...allPosts
      .map((p) => p.category)
      .filter((cat): cat is string => Boolean(cat)),
  ]);
  return Array.from(categories);
}

export async function getFeaturedPost(): Promise<Post | null> {
  const allPosts = await getBlogPosts();
  const featured = allPosts.find((post) => post.featured === true);
  if (featured) return featured;

  // fallback to latest by date
  if (allPosts.length === 0) return null;
  return allPosts.reduce(
    (latest, post) => (post.date > latest.date ? post : latest),
    allPosts[0]
  );
}
