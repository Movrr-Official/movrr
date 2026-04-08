import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogMasthead } from "@/components/blog/BlogMasthead";
import { BlogFeatured } from "@/components/blog/BlogFeatured";
import { BlogGrid } from "@/components/blog/BlogGrid";

export const metadata = {
  title: "Journal — MOVRR",
  description:
    "Thinking on movement, cities, and building the platform behind them.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas">
      <Navbar />
      <BlogMasthead />
      <BlogFeatured />
      <BlogGrid />
      <Footer cta={false} />
    </main>
  );
}
