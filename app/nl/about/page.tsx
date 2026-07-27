import { AboutPage } from "@/components/pages/AboutPage";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
export async function generateMetadata() { const d = await getDictionary("nl"); return buildPageMetadata("nl", d, "about"); }
export default async function Page() { const d = await getDictionary("nl"); return <AboutPage copy={d.pages.about} />; }
