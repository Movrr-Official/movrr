import { Navbar } from "@/components/layout/Navbar"; import { Footer } from "@/components/layout/Footer";
import { HelpHeader } from "@/components/help/HelpHeader"; import { HelpTopics } from "@/components/help/HelpTopics";
import { PageCopyProvider } from "@/components/i18n/PageCopyProvider"; import type { HelpCopy } from "@/locales/types";
export function HelpPage({ copy }: { copy: HelpCopy }) { return <PageCopyProvider copy={copy}><main className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas"><Navbar /><HelpHeader /><HelpTopics /><Footer cta={false} /></main></PageCopyProvider>; }
