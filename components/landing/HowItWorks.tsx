"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Set your direction",
    description:
      "Define your audience, set your budget, shape your strategy. Everything up front, nothing hidden.",
    side: "right",
  },
  {
    number: "02",
    title: "Go live",
    description:
      "Your campaign hits the streets. Riders earn. Your brand moves with them.",
    side: "left",
  },
  {
    number: "03",
    title: "Watch it work",
    description:
      "Live data. Real engagement. Refine on the fly.",
    side: "right",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-y border-movrr-text-inverse/10 bg-movrr-bg-primary py-32 lg:py-48"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 lg:mb-32"
        >
          <h2 className="max-w-md text-[clamp(2rem,3.5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-inverse">
            Three steps.
            <br />
            <span className="text-movrr-text-inverse/50">That's it.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-movrr-text-inverse/55">
            Rider or brand — the path is the same.
            Clear, fast, and built around how you move.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line — draws in from top on scroll */}
          <motion.div
            className="absolute left-[calc(50%-0.5px)] top-0 bottom-0 w-px origin-top bg-linear-to-b from-transparent via-movrr-success to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative grid min-h-72 grid-cols-2 lg:min-h-120"
            >
              {/* LEFT cell */}
              <div className="flex items-center justify-end pr-12 lg:pr-20">
                {step.side === "left" && (
                  <div className="max-w-xs text-right lg:max-w-sm">
                    <h3 className="mb-4 text-[2.4rem] font-semibold leading-[0.96] tracking-[-0.04em] text-movrr-text-inverse lg:text-[3rem]">
                      {step.title}
                    </h3>
                    <p className="ml-auto max-w-80 text-base leading-relaxed text-movrr-text-inverse/50">
                      {step.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Dot on the line */}
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="h-4 w-4 rounded-[4px] bg-movrr-success-strong ring-2 ring-movrr-success/25 ring-offset-2 ring-offset-movrr-bg-primary" />
              </div>

              {/* RIGHT cell */}
              <div className="flex items-center justify-start pl-12 lg:pl-20">
                {step.side === "right" && (
                  <div className="max-w-xs lg:max-w-sm">
                    <h3 className="mb-4 text-[2.4rem] font-semibold leading-[0.96] tracking-[-0.04em] text-movrr-text-inverse lg:text-[3rem]">
                      {step.title}
                    </h3>
                    <p className="max-w-80 text-base leading-relaxed text-movrr-text-inverse/50">
                      {step.description}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
