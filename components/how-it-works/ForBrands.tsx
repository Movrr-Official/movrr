"use client";

import { motion } from "framer-motion";
import {
  VerifiedIcon,
  BroadcastIcon,
  UrbanIcon,
} from "@/components/icons/MovrrIcons";

const steps = [
  {
    number: "01",
    icon: BroadcastIcon,
    title: "Set your direction",
    description:
      "Define your audience, set your budget, shape your strategy. Everything up front, nothing hidden.",
  },
  {
    number: "02",
    icon: UrbanIcon,
    title: "Go live",
    description:
      "Your campaign hits the streets. Riders earn. Your brand moves with them.",
  },
  {
    number: "03",
    icon: VerifiedIcon,
    title: "Watch it work",
    description:
      "Live data. Real engagement. Verified outcomes. Refine on the fly.",
  },
];

export function ForBrands() {
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
              Campaigns that
              <br />
              <span className="text-movrr-text-inverse/45">
                move with people.
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
            Real-world reach. Verified engagement. An audience already in
            motion, already paying attention.
          </motion.p>
        </div>

        {/* Horizontal connected timeline */}
        <div className="relative">
          {/* Connecting line — desktop only, runs through node centres */}
          <div className="absolute left-5 right-5 top-5 hidden h-px bg-movrr-text-inverse/10 lg:block" />

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
                {/* Node circle — sits on the connecting line */}
                <div className="relative mb-12 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-movrr-text-inverse/20 bg-movrr-bg-primary">
                  <span className="text-[0.6rem] font-semibold tabular-nums tracking-widest text-movrr-text-inverse/50">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <step.icon
                  className="mb-7 h-5 w-5 text-movrr-success-soft/50"
                  strokeWidth={1.25}
                />

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
