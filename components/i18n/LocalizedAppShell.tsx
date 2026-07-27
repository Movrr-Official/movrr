import type { ReactNode } from "react";
import { CookieConsentManager } from "@/components/consent/CookieConsentManager";
import { EarlyAccessBanner } from "@/components/early-access/EarlyAccessBanner";
import { CommonCopyProvider } from "@/components/i18n/CommonCopyProvider";
import { DocumentLocale } from "@/components/i18n/DocumentLocale";
import { getDictionary } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/config";

export async function LocalizedAppShell({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  const dictionary = await getDictionary(locale);

  return (
    <CommonCopyProvider locale={locale} copy={dictionary.common}>
      <DocumentLocale locale={locale} />
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-movrr-bg-elevated px-4 py-3 text-sm font-semibold text-movrr-text-brand shadow-lg transition-transform focus:translate-y-0"
      >
        {locale === "nl" ? "Ga naar de hoofdinhoud" : "Skip to main content"}
      </a>
      <EarlyAccessBanner audience="riders" placement="fixed-top" />
      {children}
      <CookieConsentManager />
    </CommonCopyProvider>
  );
}
