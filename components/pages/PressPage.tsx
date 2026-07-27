import { Navbar } from "@/components/layout/Navbar"; import { Footer } from "@/components/layout/Footer";
import { PressHeader } from "@/components/press/PressHeader"; import { PressGrid } from "@/components/press/PressGrid"; import { PressKit } from "@/components/press/PressKit";
import { PageCopyProvider } from "@/components/i18n/PageCopyProvider"; import type { PressCopy } from "@/locales/types";
export function PressPage({ copy }: { copy: PressCopy }) { return <PageCopyProvider copy={copy}><Navbar variant="light" /><main id="main-content" className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas"><PressHeader /><PressGrid /><PressKit /></main><Footer cta={false} /></PageCopyProvider>; }
