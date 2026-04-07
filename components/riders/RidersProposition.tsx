"use client";

import { motion } from "framer-motion";
import {
  VerifiedIcon,
  PrivacyIcon,
  SafeIcon,
} from "@/components/icons/MovrrIcons";

const props = [
  {
    icon: VerifiedIcon,
    title: "Verified, not estimated",
    description:
      "Every ride authenticated. Your rewards are tied to real, verified kilometres — not guesses.",
  },
  {
    icon: SafeIcon,
    title: "Your choice, always",
    description:
      "Carrying a brand is entirely your call — activate it when you want, ride without it when you don't.",
  },
  {
    icon: PrivacyIcon,
    title: "Private by design",
    description:
      "Your individual routes stay yours. MOVRR anonymises movement data. Brands see patterns, not people.",
  },
];

export function RidersProposition() {
  return (
    <section className="border-b border-movrr-border-soft bg-movrr-bg-canvas">
      {/* Compact inline header bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="border-b border-movrr-border-soft"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex items-center justify-between py-10">
            <h2 className="text-[clamp(1.25rem,1.8vw,1.75rem)] font-semibold leading-tight tracking-[-0.03em] text-movrr-text-brand ml-auto">
              Your ride.{" "}
              <span className="text-movrr-text-brand/40">Your terms.</span>
            </h2>
          </div>
        </div>
      </motion.div>

      {/* Full-width alternating prop rows */}
      <div className="divide-y divide-movrr-border-soft">
        {props.map((prop, index) => (
          <motion.div
            key={prop.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
              <div
                className={`grid grid-cols-1 items-center gap-12 py-20 lg:py-28 ${
                  index % 2 === 0
                    ? "lg:grid-cols-[1fr_auto]"
                    : "lg:grid-cols-[auto_1fr]"
                }`}
              >
                {/* Icon — left on odd rows, right on even rows */}
                {index % 2 === 1 && (
                  <div className="flex h-36 w-36 shrink-0 items-center justify-center rounded-3xl bg-movrr-success/8 lg:h-44 lg:w-44">
                    <prop.icon
                      className="h-14 w-14 text-movrr-success-strong/60"
                      strokeWidth={1.25}
                    />
                  </div>
                )}

                {/* Text */}
                <div className={index % 2 === 1 ? "lg:pl-4" : ""}>
                  <span className="mb-5 block text-[0.62rem] font-semibold tabular-nums tracking-widest text-movrr-text-brand/25">
                    0{index + 1}
                  </span>
                  <h3 className="text-[clamp(2rem,3.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-brand">
                    {prop.title}
                  </h3>
                  <p className="mt-6 max-w-lg text-base leading-relaxed text-movrr-text-brand/50">
                    {prop.description}
                  </p>
                </div>

                {/* Icon — right on even rows */}
                {index % 2 === 0 && (
                  <div className="flex h-36 w-36 shrink-0 items-center justify-center rounded-3xl bg-movrr-success/8 lg:h-44 lg:w-44">
                    <prop.icon
                      className="h-14 w-14 text-movrr-success-strong/60"
                      strokeWidth={1.25}
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
