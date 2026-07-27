import { BrandsPage } from "@/components/pages/BrandsPage"; import { getDictionary } from "@/lib/i18n/dictionary"; import { buildPageMetadata } from "@/lib/i18n/metadata";
export async function generateMetadata() { const d = await getDictionary("en"); return buildPageMetadata("en", d, "brands"); }
export default async function Page() { const d = await getDictionary("en"); return <BrandsPage copy={d.pages.brands} />; }
