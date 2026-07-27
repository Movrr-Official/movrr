import { LegalPage } from "@/components/pages/LegalPage"; import { getDictionary } from "@/lib/i18n/dictionary"; import { buildPageMetadata } from "@/lib/i18n/metadata";
export async function generateMetadata() { const d = await getDictionary("nl"); return buildPageMetadata("nl", d, "privacy"); }
export default async function Page() { const d = await getDictionary("nl"); return <LegalPage copy={d.pages.privacy} />; }
