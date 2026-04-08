"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import type { EarlyAccessConfig, EarlyAccessVariant, DismissalRecord } from "@/lib/early-access/types";

const STORAGE_KEY = "movrr_ea";
const BANNER_HEIGHT_VAR = "--movrr-banner-height";

export interface UseEarlyAccessReturn {
  visible: boolean;
  variant: EarlyAccessVariant | null;
  dismiss: () => void;
  trackCta: (variantId: string) => void;
  bannerRef: React.RefObject<HTMLDivElement | null>;
}

/**
 * Manages early access banner visibility, A/B variant selection,
 * dismissal persistence, and banner height CSS variable.
 */
export function useEarlyAccess(config: EarlyAccessConfig | null): UseEarlyAccessReturn {
  const [visible, setVisible] = useState(false);
  const [variant, setVariant] = useState<EarlyAccessVariant | null>(null);
  const bannerRef = useRef<HTMLDivElement | null>(null);

  // Determine visibility and select variant on mount (client-only)
  useEffect(() => {
    if (!config) return;

    // A/B variant: stable per-session via sessionStorage seed, else random
    let variantIndex = 0;
    try {
      const seed = sessionStorage.getItem("movrr_ea_seed");
      if (seed !== null) {
        variantIndex = parseInt(seed, 10) % config.variants.length;
      } else {
        variantIndex = Math.floor(Math.random() * config.variants.length);
        sessionStorage.setItem("movrr_ea_seed", String(variantIndex));
      }
    } catch {
      variantIndex = 0;
    }
    setVariant(config.variants[variantIndex]);

    // Check dismissal record
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        setVisible(true);
        return;
      }
      const record: DismissalRecord = JSON.parse(raw);

      // Re-prompt on new campaign
      if (record.campaignId !== config.campaignId) {
        setVisible(true);
        return;
      }

      // Re-prompt after reappearAfterDays
      if (config.reappearAfterDays) {
        const elapsed = Date.now() - record.dismissedAt;
        const threshold = config.reappearAfterDays * 86_400_000;
        if (elapsed > threshold) {
          setVisible(true);
          return;
        }
      }

      setVisible(false);
    } catch {
      setVisible(true);
    }
  }, [config]);

  // Sync banner height to CSS variable for Navbar offset
  useEffect(() => {
    const el = bannerRef.current;
    if (!visible || !el) {
      document.documentElement.style.setProperty(BANNER_HEIGHT_VAR, "0px");
      return;
    }

    const observer = new ResizeObserver(([entry]) => {
      const h = entry?.contentRect.height ?? 0;
      document.documentElement.style.setProperty(BANNER_HEIGHT_VAR, `${h}px`);
    });
    observer.observe(el);

    return () => {
      observer.disconnect();
      document.documentElement.style.setProperty(BANNER_HEIGHT_VAR, "0px");
    };
  }, [visible]);

  const dismiss = useCallback(() => {
    if (!config) return;
    setVisible(false);
    document.documentElement.style.setProperty(BANNER_HEIGHT_VAR, "0px");
    try {
      const record: DismissalRecord = {
        dismissedAt: Date.now(),
        campaignId: config.campaignId,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    } catch {}
  }, [config]);

  const trackCta = useCallback((variantId: string) => {
    // Wire to your analytics provider here.
    // Example: window.gtag?.("event", "early_access_cta", { variant_id: variantId });
    if (process.env.NODE_ENV === "development") {
      console.log("[MOVRR] Early access CTA clicked:", variantId);
    }
  }, []);

  return { visible, variant, dismiss, trackCta, bannerRef };
}
