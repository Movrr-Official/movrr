import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HowItWorksHero } from "@/components/how-it-works/HowItWorksHero";
import { ForRiders } from "@/components/how-it-works/ForRiders";
import { ForBrands } from "@/components/how-it-works/ForBrands";
import { Platform } from "@/components/how-it-works/Platform";
import { HowItWorksCTA } from "@/components/how-it-works/HowItWorksCTA";
import { PageCopyProvider } from "@/components/i18n/PageCopyProvider";
import type { HowItWorksCopy } from "@/locales/types";
export function HowItWorksPage({ copy }: { copy: HowItWorksCopy }) {
  return <PageCopyProvider copy={copy}><Navbar /><main id="main-content" className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas"><HowItWorksHero /><ForRiders /><ForBrands /><Platform /><HowItWorksCTA /></main><Footer cta={false} /></PageCopyProvider>;
}
