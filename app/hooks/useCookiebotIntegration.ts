"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    Cookiebot?: {
      consent: {
        given: boolean;
        categories: { [key: string]: boolean };
      };
      giveConsentFor?: (categories: string[]) => void;
      withdrawConsentFor?: (categories: string[]) => void;
      show: () => void;
    };
  }
}

/**
 * Loads Cookiebot script and provides helpers to interact with it.
 * Replace YOUR_COOKIEBOT_ID with your actual Cookiebot ID.
 */
export function useCookiebotIntegration() {
  const [isCookiebotLoaded, setIsCookiebotLoaded] = useState(false);

  useEffect(() => {
    if (window.Cookiebot) {
      setIsCookiebotLoaded(true);
      return;
    }

    const cookiebotId = process.env.NEXT_PUBLIC_CBID;
    
    // Only load Cookiebot if ID is configured
    if (!cookiebotId || cookiebotId.trim() === "") {
      console.warn(
        "Cookiebot ID not configured. Set NEXT_PUBLIC_CBID environment variable to enable cookie consent management."
      );
      return;
    }

    const script = document.createElement("script");
    script.src = "https://consent.cookiebot.com/uc.js";
    script.setAttribute("data-cbid", cookiebotId);
    script.setAttribute("data-blockingmode", "auto");
    script.async = true;
    
    script.onerror = () => {
      console.error("Failed to load Cookiebot script");
    };
    
    document.head.appendChild(script);

    script.onload = () => {
      setIsCookiebotLoaded(true);
    };
  }, []);

  const openCookiebotPreferences = () => {
    if (window.Cookiebot && window.Cookiebot.show) {
      window.Cookiebot.show();
    }
  };

  useEffect(() => {
    function onConsentChanged() {
      const consent = window.Cookiebot?.consent;
      if (!consent) return;

      const hasConsented = consent.given;
      localStorage.setItem(
        "movrr_cookie_consent",
        hasConsented ? "accepted" : "rejected"
      );

      // Optionally, dispatch custom event or integrate with your app here.
    }

    if (window.Cookiebot) {
      window.addEventListener("CookiebotOnAccept", onConsentChanged);
      window.addEventListener("CookiebotOnDecline", onConsentChanged);
    }

    return () => {
      window.removeEventListener("CookiebotOnAccept", onConsentChanged);
      window.removeEventListener("CookiebotOnDecline", onConsentChanged);
    };
  }, [isCookiebotLoaded]);

  return { isCookiebotLoaded, openCookiebotPreferences };
}
