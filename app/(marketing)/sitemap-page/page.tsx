import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SitemapHeader } from "@/components/sitemap/SitemapHeader";
import { SitemapDirectory } from "@/components/sitemap/SitemapDirectory";

export const metadata = {
  title: "Sitemap — MOVRR",
  description: "Every page on movrr.nl, organised by section.",
};

export default function SitemapPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas">
      <Navbar variant="light" />
      <SitemapHeader />
      <SitemapDirectory />
      <Footer cta={false} />
    </main>
  );
}
