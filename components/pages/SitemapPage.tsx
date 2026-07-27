import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SitemapHeader } from "@/components/sitemap/SitemapHeader";
import { SitemapDirectory } from "@/components/sitemap/SitemapDirectory";
import { PageCopyProvider } from "@/components/i18n/PageCopyProvider";
import type { SitemapCopy } from "@/locales/types";
export function SitemapPage({ copy }: { copy: SitemapCopy }) {
  return <PageCopyProvider copy={copy}><main className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas"><Navbar variant="light" /><SitemapHeader /><SitemapDirectory /><Footer cta={false} /></main></PageCopyProvider>;
}
