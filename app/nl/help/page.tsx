import { HelpPage } from "@/components/pages/HelpPage"; import { getDictionary } from "@/lib/i18n/dictionary"; import { buildPageMetadata } from "@/lib/i18n/metadata";
export async function generateMetadata() { const d = await getDictionary("nl"); return buildPageMetadata("nl", d, "help"); }
export default async function Page() { const d = await getDictionary("nl"); return <HelpPage copy={d.pages.help} />; }
