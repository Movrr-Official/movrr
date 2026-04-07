"use client";

import { motion } from "framer-motion";
import {
  VerifiedIcon,
  PrivacyIcon,
  SafeIcon,
  BroadcastIcon,
} from "@/components/icons/MovrrIcons";

const pillars = [
  {
    icon: VerifiedIcon,
    title: "Verified movement",
    description:
      "Every ride authenticated. No simulations, no shortcuts. Verified data powers every reward and every campaign metric.",
  },
  {
    icon: PrivacyIcon,
    title: "Privacy by default",
    description:
      "What you ride stays yours. Individual tracking is anonymised. Brands receive aggregated, verified insights.",
  },
  {
    icon: BroadcastIcon,
    title: "Real-time visibility",
    description:
      "Riders and brands see performance as it happens. Live reach, verified impressions, engagement in motion.",
  },
  {
    icon: SafeIcon,
    title: "Brand integrity",
    description:
      "Every placement reviewed. Every campaign in context. Your brand is never alongside content you didn't approve.",
  },
];

export function Platform() {
  return (
    <section className="border-b border-movrr-border-soft bg-movrr-bg-soft py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex items-center justify-between border-b border-movrr-text-brand/8 pb-8 lg:mb-20"
        >
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-brand/30">
            The platform
          </span>
          <span className="tabular-nums text-[0.65rem] tracking-widest text-movrr-text-brand/18">
            02
          </span>
        </motion.div>

        {/* Section heading — standalone, not split */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-[clamp(2rem,3.5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-brand lg:mb-20"
        >
          Built for trust.
          <br />
          <span className="text-movrr-text-brand/40">On both sides.</span>
        </motion.h2>

        {/* 2×2 card grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-8 rounded-2xl border border-movrr-text-brand/8 bg-movrr-bg-canvas p-10 lg:p-12"
            >
              {/* Icon */}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-movrr-text-brand/6">
                <pillar.icon
                  className="h-[0.95rem] w-[0.95rem] text-movrr-success-strong"
                  strokeWidth={1.5}
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-[clamp(1.5rem,2vw,2rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-movrr-text-brand">
                  {pillar.title}
                </h3>
                <p className="text-base leading-relaxed text-movrr-text-brand/50">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
