import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CareersHero } from "@/components/careers/CareersHero";
import { CareersValues } from "@/components/careers/CareersValues";
import { CareersRoles } from "@/components/careers/CareersRoles";

export const metadata = {
  title: "Careers — MOVRR",
  description:
    "Join the team building the platform cities move on. Open roles at MOVRR.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas">
      <Navbar variant="light" />
      <CareersHero />
      <CareersValues />
      <CareersRoles />
      <Footer cta={false} />
    </main>
  );
}
