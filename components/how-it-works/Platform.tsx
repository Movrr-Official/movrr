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

        {/* Section heading */}
        <div className="mb-20 grid gap-12 lg:mb-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2rem,3.5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-brand"
          >
            Built for trust.
            <br />
            <span className="text-movrr-text-brand/40">On both sides.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="self-end text-base leading-relaxed text-movrr-text-brand/55 lg:max-w-sm"
          >
            The mechanics behind MOVRR are designed to protect riders, perform
            for brands, and verify everything in between.
          </motion.p>
        </div>

        {/* Editorial rows — same grammar as Safety trust columns */}
        <div className="divide-y divide-movrr-text-brand/8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-[2rem_1fr] items-start gap-x-8 py-11 lg:grid-cols-[2rem_1fr_minmax(0,28rem)] lg:items-center lg:gap-x-16 lg:py-14"
            >
              {/* Ghost index */}
              <span className="pt-[0.35rem] text-[0.62rem] font-semibold tabular-nums tracking-widest text-movrr-text-brand/20 lg:pt-0">
                0{index + 1}
              </span>

              {/* Icon + title */}
              <div className="flex items-center gap-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-movrr-text-brand/6">
                  <pillar.icon
                    className="h-[0.95rem] w-[0.95rem] text-movrr-success-strong"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-[clamp(1.5rem,2vw,2.2rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-movrr-text-brand">
                  {pillar.title}
                </h3>
              </div>

              {/* Description */}
              <p className="col-start-2 mt-4 text-base leading-relaxed text-movrr-text-brand/50 lg:col-start-3 lg:mt-0">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
