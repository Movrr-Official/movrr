import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutOrigin } from "@/components/about/AboutOrigin";
import { AboutBeliefs } from "@/components/about/AboutBeliefs";
import { AboutModel } from "@/components/about/AboutModel";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata = {
  title: "About — MOVRR",
  description:
    "Built around the ride. MOVRR is a movement-based rewards platform for cyclists, and verified reach for the brands that move alongside them.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas">
      <Navbar />
      <AboutHero />
      <AboutOrigin />
      <AboutBeliefs />
      <AboutModel />
      <AboutCTA />
      <Footer cta={false} />
    </main>
  );
}
