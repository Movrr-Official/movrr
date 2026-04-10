"use client";

import { motion } from "framer-motion";
import { CAMPAIGN_SCALES } from "../config/campaignReach.config";
import type { CampaignScale, CampaignScaleTier } from "../types/campaignReach.types";

interface CampaignScaleSelectorProps {
  selectedId: CampaignScale | null;
  cityName: string;
  onSelect: (scale: CampaignScale) => void;
}

export function CampaignScaleSelector({
  selectedId,
  cityName,
  onSelect,
}: CampaignScaleSelectorProps) {
  const scales = Object.values(CAMPAIGN_SCALES) as CampaignScaleTier[];

  return (
    <div>
      <p className="mb-6 text-sm text-movrr-text-brand/40">
        How broad should the {cityName} activation be?
      </p>

      <div className="divide-y divide-movrr-border-soft border-t border-movrr-border-soft">
        {scales.map((scale, i) => {
          const isSelected = selectedId === scale.id;

          return (
            <motion.button
              key={scale.id}
              type="button"
              onClick={() => onSelect(scale.id)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: i * 0.06,
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex w-full items-center justify-between py-6 text-left transition-colors duration-150"
            >
              <div className="flex items-center gap-4">
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-200 ${
                    isSelected
                      ? "bg-movrr-success"
                      : "bg-movrr-border-soft group-hover:bg-movrr-text-brand/20"
                  }`}
                />
                <div>
                  <p
                    className={`text-base font-semibold tracking-[-0.02em] transition-colors duration-200 ${
                      isSelected
                        ? "text-movrr-text-brand"
                        : "text-movrr-text-brand/55 group-hover:text-movrr-text-brand"
                    }`}
                  >
                    {scale.label}
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-movrr-text-brand/30">
                    {scale.description}
                  </p>
                </div>
              </div>

              <svg
                viewBox="0 0 16 16"
                className={`h-4 w-4 shrink-0 transition-all duration-200 ${
                  isSelected
                    ? "translate-x-0.5 text-movrr-success"
                    : "text-movrr-text-brand/20 group-hover:translate-x-0.5 group-hover:text-movrr-text-brand/40"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
