"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCampaignReach } from "../hooks/useCampaignReach";
import { CitySelector } from "./CitySelector";
import { CampaignScaleSelector } from "./CampaignScaleSelector";
import { ReachReveal } from "./ReachReveal";
import { MethodologyDisclosure } from "./MethodologyDisclosure";
import type { FlowStep } from "../types/campaignReach.types";
import { usePageCopy } from "@/components/i18n/PageCopyProvider"; import type { BrandsCopy } from "@/locales/types";

// ─── Progress track ───────────────────────────────────────────────────────────

const STEPS: FlowStep[] = ["city", "scale", "reveal"];

function ProgressTrack({ current }: { current: FlowStep }) {
  const idx = STEPS.indexOf(current);
  return (
    <div className="mb-12 flex gap-1.5">
      {STEPS.map((_, i) => (
        <div
          key={i}
          className={`h-px flex-1 transition-colors duration-500 ${
            i <= idx ? "bg-movrr-success" : "bg-movrr-border-soft"
          }`}
        />
      ))}
    </div>
  );
}

// ─── Section header ───────────────────────────────────────────────────────────

function SectionHeader() {
  const copy = usePageCopy<BrandsCopy>().estimator;
  return (
    <div className="mb-10">
      <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-movrr-text-brand/30">
        {copy.label}
      </p>
      <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-movrr-text-brand">
        {copy.titleLine1}
        <br />
        {copy.titleLine2}
      </h2>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function CampaignReachPreview() {
  const copy = usePageCopy<BrandsCopy>().estimator;
  const { step, selectedCityId, selectedScale, output, selectCity, selectScale, reset } =
    useCampaignReach();

  return (
    <section className="border-b border-movrr-border-soft bg-movrr-bg-canvas">
      <div className="movrr-shell py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr] lg:gap-28">

          {/* Left — fixed context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionHeader />

            <p className="max-w-xs text-base leading-relaxed text-movrr-text-brand/50">
              {copy.description}
            </p>

            <div className="mt-14 divide-y divide-movrr-border-soft border-t border-movrr-border-soft">
              {copy.notes.map((note, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.1 + i * 0.08,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="py-5 text-sm leading-relaxed text-movrr-text-brand/40"
                >
                  {note}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Right — guided flow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProgressTrack current={step} />

            <AnimatePresence mode="wait">
              {step === "city" && (
                <motion.div
                  key="city"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="mb-6 text-sm text-movrr-text-brand/40">
                    {copy.cityQuestion}
                  </p>
                  <CitySelector
                    selectedId={selectedCityId}
                    onSelect={selectCity}
                  />
                </motion.div>
              )}

              {step === "scale" && selectedCityId && (
                <motion.div
                  key="scale"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <CampaignScaleSelector
                    selectedId={selectedScale}
                    cityName={
                      selectedCityId === "the-hague"
                        ? copy.theHague
                        : selectedCityId.charAt(0).toUpperCase() + selectedCityId.slice(1)
                    }
                    onSelect={selectScale}
                  />
                  <button
                    type="button"
                    onClick={reset}
                    className="mt-6 text-xs text-movrr-text-brand/30 underline underline-offset-2 transition-colors duration-150 hover:text-movrr-text-brand/55"
                  >
                    {copy.changeCity}
                  </button>
                </motion.div>
              )}

              {step === "reveal" && output && (
                <motion.div
                  key="reveal"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ReachReveal output={output} onReset={reset} />
                  <MethodologyDisclosure output={output} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
