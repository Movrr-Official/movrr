import { CareersPage } from "@/components/pages/CareersPage";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
export async function generateMetadata() { const d = await getDictionary("nl"); return buildPageMetadata("nl", d, "careers"); }
export default async function Page() { const d = await getDictionary("nl"); return <CareersPage copy={d.pages.careers} />; }
