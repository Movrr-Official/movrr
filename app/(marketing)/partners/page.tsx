import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PartnersHero } from "@/components/partners/PartnersHero";
import { PartnerTypes } from "@/components/partners/PartnerTypes";
import { PartnersContact } from "@/components/partners/PartnersContact";

export const metadata = {
  title: "Partners — MOVRR",
  description:
    "Build on the MOVRR movement layer. Integrations for mobility platforms, city authorities, health apps, and corporate commute programmes.",
};

export default function PartnersPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas">
      <Navbar />
      <PartnersHero />
      <PartnerTypes />
      <PartnersContact />
      <Footer cta={false} />
    </main>
  );
}
