import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SitemapHeader } from "@/components/sitemap/SitemapHeader";
import { SitemapDirectory } from "@/components/sitemap/SitemapDirectory";
import { PageCopyProvider } from "@/components/i18n/PageCopyProvider";
import type { SitemapCopy } from "@/locales/types";
export function SitemapPage({ copy }: { copy: SitemapCopy }) {
  return <PageCopyProvider copy={copy}><Navbar variant="light" /><main id="main-content" className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas"><SitemapHeader /><SitemapDirectory /></main><Footer cta={false} /></PageCopyProvider>;
}
