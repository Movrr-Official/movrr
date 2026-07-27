"use client";

import { createContext, useContext } from "react";
import type { CommonDictionary } from "@/locales/types";
import type { Locale } from "@/lib/i18n/config";

const CommonCopyContext = createContext<{
  locale: Locale;
  copy: CommonDictionary;
} | null>(null);

export function CommonCopyProvider({
  locale,
  copy,
  children,
}: {
  locale: Locale;
  copy: CommonDictionary;
  children: React.ReactNode;
}) {
  return (
    <CommonCopyContext.Provider value={{ locale, copy }}>
      {children}
    </CommonCopyContext.Provider>
  );
}

export function useCommonCopy() {
  const value = useContext(CommonCopyContext);
  if (!value) {
    throw new Error("useCommonCopy must be used within CommonCopyProvider");
  }
  return value;
}
