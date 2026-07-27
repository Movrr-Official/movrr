import { HowItWorksPage } from "@/components/pages/HowItWorksPage";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
export async function generateMetadata() { const d = await getDictionary("en"); return buildPageMetadata("en", d, "howItWorks"); }
export default async function Page() { const d = await getDictionary("en"); return <HowItWorksPage copy={d.pages.howItWorks} />; }
