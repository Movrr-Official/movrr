import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RidersHero } from "@/components/riders/RidersHero";
import { RidersProposition } from "@/components/riders/RidersProposition";
import { RidersEarnings } from "@/components/riders/RidersEarnings";
import { RidersCTA } from "@/components/riders/RidersCTA";

export const metadata = {
  title: "For riders — MOVRR",
  description:
    "Ride your city. Earn with every kilometre. Carry a brand to earn more. Your movement, your choice.",
};

export default function RidersPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas">
      <Navbar />
      <RidersHero />
      <RidersProposition />
      <RidersEarnings />
      <RidersCTA />
      <Footer cta={false} />
    </main>
  );
}
