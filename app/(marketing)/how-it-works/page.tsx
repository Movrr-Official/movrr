import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HowItWorksHero } from "@/components/how-it-works/HowItWorksHero";
import { ForRiders } from "@/components/how-it-works/ForRiders";
import { ForBrands } from "@/components/how-it-works/ForBrands";
import { Platform } from "@/components/how-it-works/Platform";
import { HowItWorksCTA } from "@/components/how-it-works/HowItWorksCTA";

export const metadata = {
  title: "How it works — MOVRR",
  description:
    "Ride to earn. Activate at scale. Understand exactly how MOVRR works for riders and brands.",
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas">
      <Navbar />
      <HowItWorksHero />
      <ForRiders />
      <ForBrands />
      <Platform />
      <HowItWorksCTA />
      <Footer />
    </main>
  );
}
