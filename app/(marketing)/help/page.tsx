import { HelpPage } from "@/components/pages/HelpPage"; import { getDictionary } from "@/lib/i18n/dictionary"; import { buildPageMetadata } from "@/lib/i18n/metadata";
export async function generateMetadata() { const d = await getDictionary("en"); return buildPageMetadata("en", d, "help"); }
export default async function Page() { const d = await getDictionary("en"); return <HelpPage copy={d.pages.help} />; }
