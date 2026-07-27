import { BlogPage } from "@/components/pages/BlogPage"; import { getDictionary } from "@/lib/i18n/dictionary"; import { buildPageMetadata } from "@/lib/i18n/metadata";
export async function generateMetadata() { const d = await getDictionary("en"); return buildPageMetadata("en", d, "blog"); }
export default async function Page() { const d = await getDictionary("en"); return <BlogPage copy={d.pages.blog} />; }
