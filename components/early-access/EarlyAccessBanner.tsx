"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { useEarlyAccess } from "@/hooks/useEarlyAccess";
import {
  earlyAccessConfigs,
  defaultAudienceConfig,
} from "@/lib/early-access/config";
import type { EarlyAccessAudience } from "@/lib/early-access/types";

interface EarlyAccessBannerProps {
  /**
   * Which audience config to use.
   * Defaults to "riders".
   */
  audience?: EarlyAccessAudience;
  /**
   * "fixed-top" renders above the Navbar (global default).
   * "inline" renders in document flow — use inside a page section.
   */
  placement?: "fixed-top" | "inline";
}

export function EarlyAccessBanner({
  audience = "riders",
  placement = "fixed-top",
}: EarlyAccessBannerProps) {
  const config = earlyAccessConfigs[audience] ?? defaultAudienceConfig;
  const { visible, variant, dismiss, trackCta, bannerRef } =
    useEarlyAccess(config);

  const isFixed = placement === "fixed-top";

  return (
    <AnimatePresence>
      {visible && variant && (
        <motion.div
          ref={bannerRef}
          role="banner"
          aria-label="Early access announcement"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`overflow-hidden border-b border-movrr-text-inverse/10 bg-movrr-bg-primary ${
            isFixed ? "fixed inset-x-0 top-0 z-60" : "relative w-full"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2.5 lg:px-12">
            {/* Badge — desktop only */}
            {config.badge && (
              <span className="hidden shrink-0 rounded-full border border-movrr-text-inverse/15 px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-movrr-text-inverse/50 lg:block">
                {config.badge}
              </span>
            )}

            {/* Headline — single line, truncated on mobile */}
            <p className="min-w-0 flex-1 truncate text-[0.8rem] leading-snug text-movrr-text-inverse/70">
              {variant.headline}
            </p>

            {/* CTA — inline, always visible */}
            <Link
              href={variant.href}
              onClick={() => trackCta(variant.id)}
              className="group flex shrink-0 items-center gap-1.5 text-[0.8rem] font-semibold text-movrr-text-inverse transition-opacity duration-200 hover:opacity-70"
              aria-label={`${variant.cta} — early access`}
            >
              <span className="hidden sm:block">{variant.cta}</span>
              <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>

            {/* Dismiss */}
            <button
              onClick={dismiss}
              aria-label="Dismiss announcement"
              className="shrink-0 p-1 text-movrr-text-inverse/35 transition-opacity duration-150 hover:text-movrr-text-inverse/70"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
