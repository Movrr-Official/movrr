import { PartnersPage } from "@/components/pages/PartnersPage";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
export async function generateMetadata() { const d = await getDictionary("en"); return buildPageMetadata("en", d, "partners"); }
export default async function Page() { const d = await getDictionary("en"); return <PartnersPage copy={d.pages.partners} />; }
