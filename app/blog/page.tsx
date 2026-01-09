import { PageHeader } from "@/components/shared/PageHeader";

import BlogUI from "@/components/blog/BlogUI";
import { getCategories, getFeaturedPost, getPosts } from "@/lib/api/getPosts";

export const metadata = {
  title: "Blog | Movrr",
  description:
    "Latest news, insights, and stories from Movrr's sustainable bicycle advertising platform.",
};

interface Props {
  searchParams: Promise<{
    category?: string;
    page?: string;
  }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const params = await searchParams;

  const category = params.category || "All";
  const page = parseInt(params.page || "1");
  const postsPerPage = 6;

  const { posts } = await getPosts({
    category,
    page,
    postsPerPage,
  });
  const categories = await getCategories();
  const featuredPost = await getFeaturedPost();

  return (
    <>
      <PageHeader
        title="Movrr Blog"
        description="Insights, stories, and news from the world of sustainable bicycle advertising."
      />
      <BlogUI
        initialPosts={posts}
        categories={categories}
        initialCategory={category}
        initialPage={page}
        featuredPost={featuredPost}
        postsPerPage={postsPerPage}
      />
    </>
  );
}
