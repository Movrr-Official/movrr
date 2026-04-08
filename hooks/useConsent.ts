"use client";

import { useState, useEffect, useCallback } from "react";
import { consentService } from "@/lib/consent/service";
import type { ConsentRecord, ConsentState } from "@/lib/consent/types";

export interface UseConsentReturn {
  /** null while SSR or before first read */
  record: ConsentRecord | null;
  /** True when banner/modal should be shown */
  needsConsent: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  setConsent: (state: Partial<Omit<ConsentState, "necessary">>) => void;
  openPreferences: () => void;
  isPreferencesOpen: boolean;
  closePreferences: () => void;
}

export function useConsent(): UseConsentReturn {
  const [record, setRecord] = useState<ConsentRecord | null>(null);
  const [needsConsent, setNeedsConsent] = useState(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  useEffect(() => {
    // Hydrate from storage on mount
    const current = consentService.getConsent();
    setRecord(current);
    setNeedsConsent(consentService.shouldReprompt());

    // Subscribe to future changes
    const unsubscribe = consentService.onConsentChange((updated) => {
      setRecord(updated);
      setNeedsConsent(false);
    });

    return unsubscribe;
  }, []);

  const acceptAll = useCallback(() => {
    const updated = consentService.acceptAll("banner");
    setRecord(updated);
    setNeedsConsent(false);
    setIsPreferencesOpen(false);
  }, []);

  const rejectAll = useCallback(() => {
    const updated = consentService.rejectAll("banner");
    setRecord(updated);
    setNeedsConsent(false);
    setIsPreferencesOpen(false);
  }, []);

  const setConsent = useCallback(
    (state: Partial<Omit<ConsentState, "necessary">>) => {
      const updated = consentService.setConsent(state, "modal");
      setRecord(updated);
      setNeedsConsent(false);
      setIsPreferencesOpen(false);
    },
    []
  );

  const openPreferences = useCallback(() => setIsPreferencesOpen(true), []);
  const closePreferences = useCallback(() => setIsPreferencesOpen(false), []);

  return {
    record,
    needsConsent,
    acceptAll,
    rejectAll,
    setConsent,
    openPreferences,
    isPreferencesOpen,
    closePreferences,
  };
}
