"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  formatReach,
  formatKm,
  formatRiders,
} from "../services/campaignReach.service";
import type { CampaignOutput } from "../types/campaignReach.types";

interface ReachRevealProps {
  output: CampaignOutput;
  onReset: () => void;
}

const signals = (output: CampaignOutput) => [
  {
    label: "Riders",
    value: formatRiders(output.activeRidersInCampaign),
  },
  {
    label: "City zones",
    value: String(output.coverageZones),
  },
  {
    label: "Campaign window",
    value: `${output.campaignDurationWeeks} weeks`,
  },
  {
    label: "Est. monthly km",
    value: formatKm(output.estimatedKmPerMonth),
  },
];

export function ReachReveal({ output, onReset }: ReachRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Context line */}
      <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-movrr-text-brand/30">
        {output.city.name} · {output.scale.label}
      </p>

      {/* Hero metric */}
      <div className="mb-2">
        <span className="text-[clamp(3.8rem,9vw,7rem)] font-semibold leading-none tracking-[-0.04em] text-movrr-text-brand">
          {formatReach(output.estimatedMonthlyReach)}
        </span>
      </div>
      <p className="mb-10 text-sm text-movrr-text-brand/40">
        estimated monthly reach
      </p>

      {/* Supporting signals — borderless divide pattern */}
      <div className="mb-10 grid grid-cols-2 divide-x divide-y divide-movrr-border-soft border border-movrr-border-soft lg:grid-cols-4 lg:divide-y-0">
        {signals(output).map((signal) => (
          <div key={signal.label} className="px-5 py-4">
            <p className="mb-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-movrr-text-brand/30">
              {signal.label}
            </p>
            <p className="text-base font-semibold tracking-[-0.02em] text-movrr-text-brand">
              {signal.value}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Link
          href="/contact"
          className="group inline-flex h-12 items-center gap-2.5 rounded-xl bg-movrr-bg-secondary px-8 text-sm font-semibold text-movrr-text-inverse transition-opacity duration-200 hover:opacity-75"
        >
          Talk to the team
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>

        <button
          type="button"
          onClick={onReset}
          className="text-xs text-movrr-text-brand/30 underline underline-offset-2 transition-colors duration-150 hover:text-movrr-text-brand/55"
        >
          Start over
        </button>
      </div>

      {/* Disclaimer */}
      <p className="mt-8 text-xs leading-relaxed text-movrr-text-brand/25">
        Projections based on pre-launch estimates. Live data replaces
        projections post-launch.
      </p>
    </motion.div>
  );
}
