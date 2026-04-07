import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BrandsHero } from "@/components/brands/BrandsHero";
import { BrandsReach } from "@/components/brands/BrandsReach";
import { BrandsCampaign } from "@/components/brands/BrandsCampaign";
import { BrandsMetrics } from "@/components/brands/BrandsMetrics";
import { BrandsCTA } from "@/components/brands/BrandsCTA";

export const metadata = {
  title: "For brands — MOVRR",
  description:
    "Reach active urban cyclists with verified, movement-based campaigns. Premium exposure. Measurable outcomes.",
};

export default function BrandsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas">
      <Navbar />
      <BrandsHero />
      <BrandsReach />
      <BrandsCampaign />
      <BrandsMetrics />
      <BrandsCTA />
      <Footer cta={false} />
    </main>
  );
}
