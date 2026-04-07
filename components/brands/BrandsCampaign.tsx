"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Define your campaign",
    description:
      "Set your target area, duration, and budget. Choose the rider profile that fits your audience.",
  },
  {
    number: "02",
    title: "Riders opt in",
    description:
      "Cyclists in your target zone choose to carry your campaign. Opted-in, verified, in motion.",
  },
  {
    number: "03",
    title: "Track in real time",
    description:
      "Live dashboard. Verified kilometres, route data, impression estimates. Adjust as the campaign runs.",
  },
];

export function BrandsCampaign() {
  return (
    <section className="border-b border-movrr-text-inverse/10 bg-movrr-bg-primary py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-20 grid gap-12 lg:mb-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-[clamp(2rem,3.5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-inverse">
              Set up.
              <br />
              <span className="text-movrr-text-inverse/45">
                Hit the streets.
              </span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="self-end text-base leading-relaxed text-movrr-text-inverse/50 lg:max-w-sm"
          >
            From brief to live in days. Your campaign travels through the city
            carried by cyclists who chose to represent your brand.
          </motion.p>
        </div>

        {/* Horizontal connected timeline */}
        <div className="relative">
          {/* Connecting line — draws in left to right on scroll */}
          <motion.div
            className="absolute left-5 right-5 top-5 hidden h-px origin-left bg-movrr-text-inverse/10 lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col"
              >
                {/* Node */}
                <div className="relative mb-12 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-movrr-text-inverse/20 bg-movrr-bg-primary">
                  <span className="text-[0.6rem] font-semibold tabular-nums tracking-widest text-movrr-text-inverse/50">
                    {step.number}
                  </span>
                </div>

                {/* Accent line */}
                <div className="mb-8 h-px w-8 bg-movrr-success/35" />

                {/* Title */}
                <h3 className="mb-5 text-[clamp(1.5rem,2vw,2rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-movrr-text-inverse">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-base leading-relaxed text-movrr-text-inverse/45">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
