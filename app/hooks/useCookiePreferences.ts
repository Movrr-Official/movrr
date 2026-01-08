"use client";

import { useState, useEffect } from "react";

export interface CookiePreferences {
  essential: boolean;
  statistics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  essential: true,
  statistics: true,
  marketing: false,
  preferences: true,
};

const STORAGE_KEY = "movrr_cookie_preferences";

export const useCookiePreferences = () => {
  const [preferences, setPreferences] =
    useState<CookiePreferences>(DEFAULT_PREFERENCES);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved preferences and sync from Cookiebot if available
  useEffect(() => {
    const savedPreferences = localStorage.getItem(STORAGE_KEY);
    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences);
        setPreferences({ ...DEFAULT_PREFERENCES, ...parsed });
      } catch (error) {
        console.error("Failed to parse saved cookie preferences:", error);
      }
    }

    if (typeof window !== "undefined" && window.Cookiebot?.consent) {
      const cb = window.Cookiebot.consent;
      const syncedPrefs: CookiePreferences = {
        essential: true, // Always required
        statistics: cb.categories.statistics || false,
        marketing: cb.categories.marketing || false,
        preferences: cb.categories.preferences || false,
      };
      setPreferences(syncedPrefs);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(syncedPrefs));
    }

    setIsLoaded(true);
  }, []);

  // Automatic sync on Cookiebot consent change
  useEffect(() => {
    function syncFromCookiebot() {
      const consent = window.Cookiebot?.consent;
      if (!consent) return;

      const syncedPrefs: CookiePreferences = {
        essential: true,
        statistics: consent.categories.statistics || false,
        marketing: consent.categories.marketing || false,
        preferences: consent.categories.preferences || false,
      };

      setPreferences(syncedPrefs);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(syncedPrefs));
    }

    if (window.Cookiebot) {
      window.addEventListener("CookiebotOnAccept", syncFromCookiebot);
      window.addEventListener("CookiebotOnDecline", syncFromCookiebot);
    }

    return () => {
      window.removeEventListener("CookiebotOnAccept", syncFromCookiebot);
      window.removeEventListener("CookiebotOnDecline", syncFromCookiebot);
    };
  }, []);

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    const updated = { ...preferences, [key]: value };
    setPreferences(updated);

    // Sync with Cookiebot
    const enabled: string[] = [];
    if (updated.statistics) enabled.push("statistics");
    if (updated.marketing) enabled.push("marketing");
    if (updated.preferences) enabled.push("preferences");

    if (
      window.Cookiebot?.giveConsentFor &&
      window.Cookiebot?.withdrawConsentFor
    ) {
      // Give consent for enabled, withdraw others
      const all = ["preferences", "statistics", "marketing"];
      const toWithdraw = all.filter((k) => !enabled.includes(k));

      if (enabled.length > 0) {
        window.Cookiebot.giveConsentFor(enabled);
      }
      if (toWithdraw.length > 0) {
        window.Cookiebot.withdrawConsentFor(toWithdraw);
      }
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const savePreferences = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));

    // Re-run the update logic to ensure Cookiebot stays in sync
    Object.entries(preferences).forEach(([key, value]) => {
      updatePreference(key as keyof CookiePreferences, value);
    });

    // toast({
    //   title: "Preferences Saved",
    //   description: "Your cookie preferences have been updated.",
    // });
  };

  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      statistics: true,
      marketing: true,
      preferences: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allAccepted));

    if (window.Cookiebot?.giveConsentFor) {
      window.Cookiebot.giveConsentFor([
        "preferences",
        "statistics",
        "marketing",
      ]);
    }

    // toast({
    //   title: "All Cookies Accepted",
    //   description: "You've accepted all cookie types.",
    // });
  };

  const rejectAll = () => {
    const onlyEssential = {
      essential: true,
      statistics: false,
      marketing: false,
      preferences: false,
    };
    setPreferences(onlyEssential);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(onlyEssential));

    if (window.Cookiebot?.withdrawConsentFor) {
      window.Cookiebot.withdrawConsentFor([
        "preferences",
        "statistics",
        "marketing",
      ]);
    }

    // toast({
    //   title: "Non-Essential Cookies Rejected",
    //   description: "Only essential cookies will be used.",
    // });
  };

  return {
    preferences,
    isLoaded,
    updatePreference,
    savePreferences,
    acceptAll,
    rejectAll,
  };
};
