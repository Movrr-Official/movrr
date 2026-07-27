import { ContactPage } from "@/components/pages/ContactPage";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
export async function generateMetadata() { const d = await getDictionary("nl"); return buildPageMetadata("nl", d, "contact"); }
export default async function Page() { const d = await getDictionary("nl"); return <ContactPage copy={d.pages.contact} />; }
