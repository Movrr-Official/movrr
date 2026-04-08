"use client";

import { AnimatePresence, motion } from "framer-motion";

interface CookieConsentBannerProps {
  visible: boolean;
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onManage: () => void;
}

export function CookieConsentBanner({
  visible,
  onAcceptAll,
  onRejectAll,
  onManage,
}: CookieConsentBannerProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="region"
          aria-label="Cookie consent"
          aria-live="polite"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 left-5 z-70 w-[calc(100vw-2.5rem)] max-w-xs"
        >
          <div className="overflow-hidden rounded-2xl border border-movrr-border-soft bg-movrr-bg-canvas shadow-lg">
            <div className="px-5 py-5">
              {/* Headline */}
              <p className="mb-2 text-[0.82rem] font-semibold tracking-[-0.02em] text-movrr-text-brand">
                We use cookies.
              </p>

              {/* Body */}
              <p className="text-xs leading-relaxed text-movrr-text-brand/50">
                Some are necessary for the site to work. Others help us understand
                how people use it.{" "}
                <button
                  onClick={onManage}
                  className="text-movrr-text-brand/70 underline underline-offset-2 transition-opacity duration-150 hover:opacity-70"
                  aria-label="Manage cookie preferences"
                >
                  You choose.
                </button>
              </p>

              {/* Primary CTA */}
              <button
                onClick={onAcceptAll}
                className="mt-4 w-full rounded-xl bg-movrr-bg-primary px-4 py-2.5 text-[0.8rem] font-semibold text-movrr-text-inverse transition-opacity duration-150 hover:opacity-85"
              >
                Accept all
              </button>

              {/* Secondary — text weight, no border */}
              <button
                onClick={onRejectAll}
                className="mt-2.5 w-full py-1 text-center text-[0.75rem] font-medium text-movrr-text-brand/40 transition-opacity duration-150 hover:text-movrr-text-brand/70"
              >
                Reject non-essential
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
