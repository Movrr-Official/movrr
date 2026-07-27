import { PressPage } from "@/components/pages/PressPage"; import { getDictionary } from "@/lib/i18n/dictionary"; import { buildPageMetadata } from "@/lib/i18n/metadata";
export async function generateMetadata() { const d = await getDictionary("nl"); return buildPageMetadata("nl", d, "press"); }
export default async function Page() { const d = await getDictionary("nl"); return <PressPage copy={d.pages.press} />; }
