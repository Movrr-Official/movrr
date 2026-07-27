import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AccessibilityStatement } from "@/components/accessibility/AccessibilityStatement";
import { AccessibilityCommitments } from "@/components/accessibility/AccessibilityCommitments";
import { AccessibilityContact } from "@/components/accessibility/AccessibilityContact";
import { PageCopyProvider } from "@/components/i18n/PageCopyProvider";
import type { AccessibilityCopy } from "@/locales/types";

export function AccessibilityPage({ copy }: { copy: AccessibilityCopy }) {
  return <PageCopyProvider copy={copy}><Navbar variant="dark" /><main id="main-content" className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas"><AccessibilityStatement /><AccessibilityCommitments /><AccessibilityContact /></main><Footer cta={false} /></PageCopyProvider>;
}
