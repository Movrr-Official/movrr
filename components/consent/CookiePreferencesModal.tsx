"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { ConsentState } from "@/lib/consent/types";

interface Category {
  key: keyof Omit<ConsentState, "necessary">;
  label: string;
  description: string;
  required?: false;
}

interface RequiredCategory {
  key: "necessary";
  label: string;
  description: string;
  required: true;
}

const categories: (Category | RequiredCategory)[] = [
  {
    key: "necessary",
    label: "Strictly necessary",
    description:
      "Required for the website to function. These enable core features such as session security and account access. They cannot be disabled.",
    required: true,
  },
  {
    key: "analytics",
    label: "Performance & analytics",
    description:
      "Help us understand how visitors interact with the website — which pages are visited most and where people navigate from. All data is aggregated and anonymised.",
  },
  {
    key: "marketing",
    label: "Marketing",
    description:
      "Used to measure the effectiveness of campaigns that direct traffic to this site. We do not use these cookies to serve retargeted advertising.",
  },
];

function Toggle({
  checked,
  onChange,
  disabled,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-label={`${label} cookies`}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`relative h-5 w-9 rounded-full border transition-colors duration-200 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-movrr-text-brand ${
        disabled
          ? "cursor-not-allowed border-movrr-border-soft bg-movrr-bg-soft opacity-50"
          : checked
            ? "border-movrr-bg-primary bg-movrr-bg-primary"
            : "border-movrr-border-soft bg-movrr-bg-soft hover:border-movrr-text-brand/30"
      }`}
    >
      <span
        className={`absolute left-0.5 top-0.5 h-3.5 w-3.5 rounded-full transition-all duration-200 ${
          disabled
            ? "translate-x-0 bg-movrr-text-brand/25"
            : checked
              ? "translate-x-4.5 bg-movrr-bg-canvas"
              : "translate-x-0 bg-movrr-text-brand/30"
        }`}
      />
    </button>
  );
}

interface CookiePreferencesModalProps {
  open: boolean;
  initialState: Omit<ConsentState, "necessary">;
  onSave: (state: Omit<ConsentState, "necessary">) => void;
  onAcceptAll: () => void;
  onClose: () => void;
}

export function CookiePreferencesModal({
  open,
  initialState,
  onSave,
  onAcceptAll,
  onClose,
}: CookiePreferencesModalProps) {
  const [draft, setDraft] = useState(initialState);

  // Sync draft when modal opens with new state
  useEffect(() => {
    if (open) setDraft(initialState);
  }, [open, initialState]);

  function toggle(key: keyof typeof draft, value: boolean) {
    setDraft((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-80 bg-movrr-bg-backdrop/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-label="Cookie preferences"
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-5 left-5 right-5 z-90 max-w-sm overflow-hidden rounded-2xl border border-movrr-border-soft bg-movrr-bg-canvas shadow-xl sm:left-5 sm:right-auto sm:w-full"
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-movrr-border-soft px-6 py-5">
              <div>
                <h2 className="text-base font-semibold tracking-[-0.02em] text-movrr-text-brand">
                  Cookie preferences
                </h2>
                <p className="mt-1 text-xs leading-relaxed text-movrr-text-brand/45">
                  Choose which cookies you allow. Your choice is stored and can
                  be updated at any time.
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close preferences"
                className="ml-4 mt-0.5 shrink-0 p-1 text-movrr-text-brand/30 transition-opacity duration-150 hover:text-movrr-text-brand/70"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Category list */}
            <div className="divide-y divide-movrr-border-soft">
              {categories.map((cat) => (
                <div key={cat.key} className="flex items-start gap-5 px-6 py-5">
                  <div className="flex-1">
                    <div className="mb-1.5 flex items-center gap-2">
                      <p className="text-sm font-semibold tracking-[-0.01em] text-movrr-text-brand">
                        {cat.label}
                      </p>
                      {cat.required && (
                        <span className="rounded-full border border-movrr-border-soft px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-widest text-movrr-text-brand/35">
                          Always on
                        </span>
                      )}
                    </div>
                    <p className="text-xs leading-relaxed text-movrr-text-brand/45">
                      {cat.description}
                    </p>
                  </div>
                  <div className="mt-0.5 shrink-0">
                    {cat.required ? (
                      <Toggle
                        checked={true}
                        onChange={() => {}}
                        disabled={true}
                        label={cat.label}
                      />
                    ) : (
                      <Toggle
                        checked={draft[cat.key as keyof typeof draft]}
                        onChange={(v) =>
                          toggle(cat.key as keyof typeof draft, v)
                        }
                        label={cat.label}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer actions */}
            <div className="flex flex-col gap-2 border-t border-movrr-border-soft px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                onClick={() => onSave(draft)}
                className="w-full rounded-xl border border-movrr-border-soft bg-movrr-bg-canvas px-5 py-2.5 text-sm font-semibold text-movrr-text-brand transition-colors duration-150 hover:bg-movrr-bg-soft sm:w-auto"
              >
                Save preferences
              </button>
              <button
                onClick={onAcceptAll}
                className="w-full rounded-xl bg-movrr-bg-primary px-5 py-2.5 text-sm font-semibold text-movrr-text-inverse transition-opacity duration-150 hover:opacity-85 sm:w-auto"
              >
                Accept all
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
