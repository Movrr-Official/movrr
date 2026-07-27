import { RewardsPage } from "@/components/pages/RewardsPage";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
export async function generateMetadata() { const d = await getDictionary("en"); return buildPageMetadata("en", d, "rewards"); }
export default async function Page() { const d = await getDictionary("en"); return <RewardsPage copy={d.pages.rewards} />; }
