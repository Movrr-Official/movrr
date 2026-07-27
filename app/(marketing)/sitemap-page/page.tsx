import { SitemapPage } from "@/components/pages/SitemapPage";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
export async function generateMetadata() { const d = await getDictionary("en"); return buildPageMetadata("en", d, "sitemapPage"); }
export default async function Page() { const d = await getDictionary("en"); return <SitemapPage copy={d.pages.sitemapPage} />; }
