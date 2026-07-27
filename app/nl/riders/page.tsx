import { RidersPage } from "@/components/pages/RidersPage";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
export async function generateMetadata() { const d = await getDictionary("nl"); return buildPageMetadata("nl", d, "riders"); }
export default async function Page() { const d = await getDictionary("nl"); return <RidersPage copy={d.pages.riders} />; }
