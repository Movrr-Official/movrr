import { PageHeader } from "@/components/shared/PageHeader";

import BlogUI from "@/components/blog/BlogUI";
import { getCategories, getFeaturedPost, getPosts } from "@/lib/api/getPosts";

export const metadata = {
  title: "Blog | Movrr",
  description:
    "Latest news, insights, and stories from Movrr's sustainable bicycle advertising platform.",
};

interface Props {
  searchParams: {
    category?: string;
    page?: string;
  };
}

export const posts = [
  {
    id: "post-1",
    title: "How Bicycle Advertising Outperforms Traditional Billboards",
    excerpt:
      "A data-driven comparison of bicycle advertising effectiveness versus static billboards in urban areas.",
    date: new Date("2024-05-08T00:00:00Z"),
    author: "Jamie Chen",
    category: "Marketing",
    imageUrl: "/placeholder.svg?height=400&width=600",
    slug: "bicycle-vs-billboards",
    content:
      "In today's fast-paced urban environments, brands are constantly seeking innovative ways to capture audience attention. Bicycle advertising has emerged as a powerful alternative to traditional billboards, offering dynamic visibility and engagement. This article delves into the data that highlights the superior performance of bicycle advertising in terms of reach, engagement, and return on investment compared to static billboards.",
    featured: true,
    readTime: 4,
    createdAt: new Date("2024-05-08T00:00:00Z"),
    updatedAt: new Date("2024-05-08T00:00:00Z"),
  },
  {
    id: "post-2",
    title: "Rider Stories: How Movrr Created New Opportunities",
    excerpt:
      "Meet the riders who have transformed their daily commutes into income-generating activities.",
    date: new Date("2024-04-30T00:00:00Z"),
    author: "Taylor Kim",
    category: "Community",
    imageUrl: "/placeholder.svg?height=400&width=600",
    slug: "rider-stories",
    content:
      "Meet the riders who have transformed their daily commutes into income-generating activities.",
    readTime: 3,
    createdAt: new Date("2024-04-30T00:00:00Z"),
    updatedAt: new Date("2024-04-30T00:00:00Z"),
  },
  {
    id: "post-3",
    title: "The Environmental Impact of Bicycle Advertising",
    excerpt:
      "A look at how bicycle advertising is reducing carbon emissions in the advertising industry.",
    date: new Date("2024-04-22T00:00:00Z"),
    author: "Sam Rodriguez",
    category: "Sustainability",
    imageUrl: "/placeholder.svg?height=400&width=600",
    slug: "environmental-impact",
    content:
      "Bicycle advertising is not just a trend; it's a movement towards more sustainable urban marketing. As cities grow and environmental concerns rise, brands are looking for innovative ways to connect with audiences while minimizing their carbon footprint. Bicycle advertising offers a unique solution that combines mobility, visibility, and eco-friendliness. In this article, we explore how Movrr is leading the charge in transforming urban advertising through sustainable practices.",
    readTime: 5,
    createdAt: new Date("2024-04-22T00:00:00Z"),
    updatedAt: new Date("2024-04-22T00:00:00Z"),
  },
  {
    id: "post-4",
    title: "Case Study: How Green Juice Co. Increased Store Visits by 63%",
    excerpt:
      "An in-depth look at how a beverage company used bicycle advertising to drive significant business results.",
    date: new Date("2024-04-15T00:00:00Z"),
    author: "Jamie Chen",
    category: "Case Study",
    imageUrl: "/placeholder.svg?height=400&width=600",
    slug: "green-juice-case-study",
    content:
      "In this case study, we explore how Green Juice Co. leveraged bicycle advertising to increase foot traffic to their stores by 63%. Through targeted campaigns and strategic placements, they were able to reach health-conscious consumers in urban areas effectively.",
    readTime: 4,
    createdAt: new Date("2024-04-15T00:00:00Z"),
    updatedAt: new Date("2024-04-15T00:00:00Z"),
  },
  {
    id: "post-5",
    title: "Urban Mobility Data: What We've Learned From 1 Million Rides",
    excerpt:
      "Insights from analyzing cycling patterns across 15 cities and what it means for urban planning.",
    date: new Date("2024-04-08T00:00:00Z"),
    author: "Sam Rodriguez",
    category: "Data",
    imageUrl: "/placeholder.svg?height=400&width=600",
    slug: "urban-mobility-data",
    content:
      "In this article, we analyze data from over 1 million bike rides to uncover key insights about urban mobility patterns. Our findings highlight the growing importance of cycling as a sustainable transportation option and its impact on city planning.",
    readTime: 5,
    createdAt: new Date("2024-04-08T00:00:00Z"),
    updatedAt: new Date("2024-04-08T00:00:00Z"),
  },
  {
    id: "post-6",
    title:
      "The Psychology of Mobile Advertising: Why Movement Captures Attention",
    excerpt:
      "Research on why moving advertisements are more effective at capturing and retaining audience attention.",
    date: new Date("2024-04-01T00:00:00Z"),
    author: "Taylor Kim",
    category: "Research",
    imageUrl: "/placeholder.svg?height=400&width=600",
    slug: "psychology-of-mobile-advertising",
    content:
      "This article delves into the psychology behind mobile advertising, particularly how movement and dynamic visuals can significantly enhance audience engagement. We explore various studies that demonstrate the effectiveness of moving advertisements in capturing attention and driving brand recall.",
    readTime: 4,
    createdAt: new Date("2024-04-01T00:00:00Z"),
    updatedAt: new Date("2024-04-01T00:00:00Z"),
  },
  {
    id: "post-7",
    title: "The Future of Sustainable Advertising in Urban Environments",
    excerpt:
      "How bicycle advertising is transforming the way brands connect with urban audiences while promoting sustainability.",
    date: new Date("2024-05-15T00:00:00Z"),
    author: "Alex Morgan",
    authorRole: "Founder & CEO",
    category: "Sustainability",
    imageUrl: "/placeholder.svg?height=600&width=1200",
    slug: "future-of-sustainable-advertising",
    content:
      "Bicycle advertising is not just a trend; it's a movement towards more sustainable urban marketing. As cities grow and environmental concerns rise, brands are looking for innovative ways to connect with audiences while minimizing their carbon footprint. Bicycle advertising offers a unique solution that combines mobility, visibility, and eco-friendliness. In this article, we explore how Movrr is leading the charge in transforming urban advertising through sustainable practices.",
    readTime: 5,
    createdAt: new Date("2024-05-15T00:00:00Z"),
    updatedAt: new Date("2024-05-15T00:00:00Z"),
  },
];

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
