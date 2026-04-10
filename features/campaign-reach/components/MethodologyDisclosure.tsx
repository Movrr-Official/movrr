"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { REACH_ASSUMPTIONS } from "../config/campaignReach.config";
import { riderFractionAsPercent } from "../services/campaignReach.service";
import type { CampaignOutput } from "../types/campaignReach.types";

interface MethodologyDisclosureProps {
  output: CampaignOutput;
}

export function MethodologyDisclosure({ output }: MethodologyDisclosureProps) {
  const [isOpen, setIsOpen] = useState(false);

  const rows = [
    {
      label: "Rider participation",
      value: `${riderFractionAsPercent(output.scale.riderFraction)} of active ${output.city.name} riders`,
    },
    {
      label: "Impressions model",
      value: `${REACH_ASSUMPTIONS.impressionsPerRiderPerDay} estimated impressions per rider per day`,
    },
    {
      label: "Campaign window",
      value: `${REACH_ASSUMPTIONS.campaignDurationWeeks}-week standard activation`,
    },
    ...(output.scale.id === "multi-city"
      ? [
          {
            label: "Multi-city multiplier",
            value: `${REACH_ASSUMPTIONS.multiCityMultiplier}× applied for cross-city network effects`,
          },
        ]
      : []),
    {
      label: "Data basis",
      value: "Pre-launch projections. Replaced by verified data post-launch.",
    },
  ];

  return (
    <div className="mt-10 border-t border-movrr-border-soft pt-6">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="flex items-center gap-2 text-xs text-movrr-text-brand/30 transition-colors duration-150 hover:text-movrr-text-brand/55"
      >
        <motion.svg
          viewBox="0 0 16 16"
          className="h-3 w-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <path d="M6 4l4 4-4 4" />
        </motion.svg>
        How we calculate this
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-5 space-y-3">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 gap-0.5 sm:grid-cols-[160px_1fr]"
                >
                  <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-movrr-text-brand/30">
                    {row.label}
                  </p>
                  <p className="text-xs leading-relaxed text-movrr-text-brand/50">
                    {row.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
