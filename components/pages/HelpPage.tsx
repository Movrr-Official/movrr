import { Navbar } from "@/components/layout/Navbar"; import { Footer } from "@/components/layout/Footer";
import { HelpExperience } from "@/components/help/HelpExperience";
import { PageCopyProvider } from "@/components/i18n/PageCopyProvider"; import type { HelpCopy } from "@/locales/types";
export function HelpPage({ copy }: { copy: HelpCopy }) { return <PageCopyProvider copy={copy}><Navbar /><main id="main-content" className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas"><HelpExperience /></main><Footer cta={false} /></PageCopyProvider>; }
