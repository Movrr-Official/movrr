import { AccessibilityPage } from "@/components/pages/AccessibilityPage";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
export async function generateMetadata() { const d = await getDictionary("en"); return buildPageMetadata("en", d, "accessibility"); }
export default async function Page() { const d = await getDictionary("en"); return <AccessibilityPage copy={d.pages.accessibility} />; }
