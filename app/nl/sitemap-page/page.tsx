import { SitemapPage } from "@/components/pages/SitemapPage";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
export async function generateMetadata() { const d = await getDictionary("nl"); return buildPageMetadata("nl", d, "sitemapPage"); }
export default async function Page() { const d = await getDictionary("nl"); return <SitemapPage copy={d.pages.sitemapPage} />; }
