import { LegalPage } from "@/components/pages/LegalPage"; import { getDictionary } from "@/lib/i18n/dictionary"; import { buildPageMetadata } from "@/lib/i18n/metadata";
export async function generateMetadata() { const d = await getDictionary("en"); return buildPageMetadata("en", d, "cookies"); }
export default async function Page() { const d = await getDictionary("en"); return <LegalPage copy={d.pages.cookies} />; }
