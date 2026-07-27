import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RewardsHero } from "@/components/rewards/RewardsHero";
import { HowRewardsWork } from "@/components/rewards/HowRewardsWork";
import { RewardsTiers } from "@/components/rewards/RewardsTiers";
import { RewardsCTA } from "@/components/rewards/RewardsCTA";
import { RewardsImage } from "@/components/rewards/RewardsImage";
import { PageCopyProvider } from "@/components/i18n/PageCopyProvider";
import type { RewardsCopy } from "@/locales/types";
export function RewardsPage({ copy }: { copy: RewardsCopy }) { return <PageCopyProvider copy={copy}><main className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas"><Navbar /><RewardsHero /><HowRewardsWork /><RewardsImage /><RewardsTiers /><RewardsCTA /><Footer cta={false} /></main></PageCopyProvider>; }
