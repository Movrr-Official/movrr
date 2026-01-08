import { posts } from "@/app/blog/page";

export async function getPosts({
  category,
  page,
  postsPerPage,
}: {
  category: string;
  page: number;
  postsPerPage: number;
}) {
  let filtered = posts;

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

export async function getCategories() {
  const categories = new Set(["All", ...posts.map((p) => p.category)]);
  return Array.from(categories);
}

export async function getFeaturedPost() {
  const featured = posts.find((post) => post.featured === true);
  if (featured) return featured;

  // fallback to latest by date
  return posts.reduce(
    (latest, post) => (post.date > latest.date ? post : latest),
    posts[0]
  );
}
