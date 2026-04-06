import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ValueStrip } from "@/components/landing/ValueStrip";
import { UseCases } from "@/components/landing/UseCases";
import { Metrics } from "@/components/landing/Metrics";
import { AppPreview } from "@/components/landing/AppPreview";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Safety } from "@/components/landing/Safety";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-movrr-bg-canvas overflow-x-hidden">
      <Navbar />
      <Hero />
      <ValueStrip />
      <UseCases />
      <Metrics />
      <AppPreview />
      <HowItWorks />
      <Safety />
      <Footer />
    </main>
  );
}
