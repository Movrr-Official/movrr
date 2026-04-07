import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RewardsHero } from "@/components/rewards/RewardsHero";
import { HowRewardsWork } from "@/components/rewards/HowRewardsWork";
import { RewardsTiers } from "@/components/rewards/RewardsTiers";
import { RewardsCTA } from "@/components/rewards/RewardsCTA";
import { RewardsImage } from "@/components/rewards/RewardsImage";

export const metadata = {
  title: "Rewards — MOVRR",
  description:
    "Ride to earn. Every verified kilometre builds your rewards. Opt in to brand campaigns and earn more.",
};

export default function RewardsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas">
      <Navbar />
      <RewardsHero />
      <HowRewardsWork />
      <RewardsImage />
      <RewardsTiers />
      <RewardsCTA />
      <Footer cta={false} />
    </main>
  );
}
