"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Ride your route",
    description:
      "Any verified ride counts. Commutes, errands, weekend loops — movement is movement.",
  },
  {
    number: "02",
    title: "Opt in to earn more",
    description:
      "Choose to carry a brand on your bike. Entirely optional — but when you do, rewards stack. Your movement, your call.",
  },
  {
    number: "03",
    title: "Collect your rewards",
    description:
      "Rewards accumulate with every authenticated ride. Yours to keep, however you earned them.",
  },
];

export function ForRiders() {
  return (
    <section className="border-b border-movrr-border-soft bg-movrr-bg-canvas py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header — inline, single row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 flex flex-col gap-6 border-b border-movrr-border-soft pb-12 lg:mb-28 lg:flex-row lg:items-end lg:justify-between lg:gap-20"
        >
          <div>
            <h2 className="text-[clamp(2rem,3.5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-brand">
              Ride to earn.
              <br />
              <span className="text-movrr-text-brand/40">
                Nothing else required.
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-base leading-relaxed text-movrr-text-brand/55 lg:pb-1">
            Ride and earn. Opt in to brand campaigns to earn more. Your
            movement, your choice — nothing required beyond the ride.
          </p>
        </motion.div>

        {/* Full-width ghost-number steps */}
        <div className="divide-y divide-movrr-border-soft">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-1 gap-6 py-14 lg:grid-cols-[9rem_1fr_minmax(0,26rem)] lg:items-center lg:gap-12 lg:py-18"
            >
              {/* Ghost number */}
              <span className="text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-none tracking-[-0.04em] text-movrr-text-brand/8">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="text-[clamp(1.75rem,2.5vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-movrr-text-brand">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-base leading-relaxed text-movrr-text-brand/50">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
