import { Navbar } from "@/components/layout/Navbar"; import { Footer } from "@/components/layout/Footer";
import { PressHeader } from "@/components/press/PressHeader"; import { PressGrid } from "@/components/press/PressGrid"; import { PressKit } from "@/components/press/PressKit";
import { PageCopyProvider } from "@/components/i18n/PageCopyProvider"; import type { PressCopy } from "@/locales/types";
export function PressPage({ copy }: { copy: PressCopy }) { return <PageCopyProvider copy={copy}><main className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas"><Navbar variant="light" /><PressHeader /><PressGrid /><PressKit /><Footer cta={false} /></main></PageCopyProvider>; }
