import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RidersHero } from "@/components/riders/RidersHero";
import { RidersProposition } from "@/components/riders/RidersProposition";
import { RidersEarnings } from "@/components/riders/RidersEarnings";
import { RidersCTA } from "@/components/riders/RidersCTA";
import { PageCopyProvider } from "@/components/i18n/PageCopyProvider";
import type { RidersCopy } from "@/locales/types";
export function RidersPage({ copy }: { copy: RidersCopy }) { return <PageCopyProvider copy={copy}><main className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas"><Navbar /><RidersHero /><RidersProposition /><RidersEarnings /><RidersCTA /><Footer cta={false} /></main></PageCopyProvider>; }
