"use client";

import React, { createContext, useState, ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LanguageKeys } from "@/types/types";

type LanguageContextType = {
  language: string;
  switchLanguage: (lang: LanguageKeys) => void;
};

// Creates the context
export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [language, setLanguage] = useState<LanguageKeys | null>(null);

  useEffect(() => {
    const updateLanguage = () => {
      const path = window.location.pathname;

      // Detect language from path or fallback to browser language
      if (path.startsWith("/nl")) {
        setLanguage("nl");
      } else {
        // Browser language detection with default to English
        const userLangs = navigator.languages || [navigator.language || "en"];
        const detectedLang = userLangs.some((lang) => lang.startsWith("nl"))
          ? "nl"
          : "en";
        setLanguage(detectedLang);
        if (detectedLang === "nl" && !path.startsWith("/nl")) {
          router.push(`/nl${path === "/" ? "" : path}`);
        }
      }
    };

    // Update language on initial load
    updateLanguage();

    // Listen for changes in the URL (e.g., back button, forward button)
    window.addEventListener("popstate", updateLanguage);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("popstate", updateLanguage);
    };
  }, [router]);

  const switchLanguage = (lang: LanguageKeys) => {
    setLanguage(lang);

    const currentPath = window.location.pathname;
    if (lang === "nl") {
      if (!currentPath.startsWith("/nl")) {
        router.push(`/nl${currentPath === "/" ? "" : currentPath}`);
      }
    } else {
      if (currentPath.startsWith("/nl")) {
        router.push(currentPath.replace(/^\/nl/, "") || "/");
      }
    }
  };

  if (language === null) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
