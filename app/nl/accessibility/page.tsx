import { AccessibilityPage } from "@/components/pages/AccessibilityPage";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
export async function generateMetadata() { const d = await getDictionary("nl"); return buildPageMetadata("nl", d, "accessibility"); }
export default async function Page() { const d = await getDictionary("nl"); return <AccessibilityPage copy={d.pages.accessibility} />; }
