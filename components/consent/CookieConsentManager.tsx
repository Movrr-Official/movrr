"use client";

import { useConsent } from "@/hooks/useConsent";
import { CookieConsentBanner } from "./CookieConsentBanner";
import { CookiePreferencesModal } from "./CookiePreferencesModal";

/**
 * CookieConsentManager
 *
 * Drop into the root layout once. Manages the full consent lifecycle:
 * - Shows banner on first visit or after policy version change
 * - Opens preferences modal on "Manage preferences"
 * - Persists consent to localStorage via consentService
 * - Emits `movrr:consentchange` DOM event for non-React consumers (GTM etc.)
 *
 * OneTrust migration path:
 * - Replace `consentService` in lib/consent/service.ts with an OneTrust adapter
 * - Keep IConsentService interface — this component needs no changes
 */
export function CookieConsentManager() {
  const {
    needsConsent,
    record,
    acceptAll,
    rejectAll,
    setConsent,
    openPreferences,
    isPreferencesOpen,
    closePreferences,
  } = useConsent();

  const currentState = {
    analytics: record?.state.analytics ?? false,
    marketing: record?.state.marketing ?? false,
  };

  return (
    <>
      <CookieConsentBanner
        visible={needsConsent && !isPreferencesOpen}
        onAcceptAll={acceptAll}
        onRejectAll={rejectAll}
        onManage={openPreferences}
      />

      <CookiePreferencesModal
        open={isPreferencesOpen}
        initialState={currentState}
        onSave={setConsent}
        onAcceptAll={acceptAll}
        onClose={closePreferences}
      />
    </>
  );
}
