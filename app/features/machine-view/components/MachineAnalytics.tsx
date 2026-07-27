"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";
import { Analytics } from "@vercel/analytics/next";
import { useConsent } from "@/hooks/useConsent";

export function MachineAnalytics({ locale }: { locale: string }) {
  const { record } = useConsent();
  const enabled =
    process.env.NODE_ENV === "production" && record?.state.analytics === true;

  useEffect(() => {
    if (enabled) {
      track("machine_view_opened", { locale, format: "markdown" });
    }
  }, [enabled, locale]);

  return enabled ? <Analytics /> : null;
}
