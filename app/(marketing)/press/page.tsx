import { PressPage } from "@/components/pages/PressPage"; import { getDictionary } from "@/lib/i18n/dictionary"; import { buildPageMetadata } from "@/lib/i18n/metadata";
export async function generateMetadata() { const d = await getDictionary("en"); return buildPageMetadata("en", d, "press"); }
export default async function Page() { const d = await getDictionary("en"); return <PressPage copy={d.pages.press} />; }
