"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Plan and strategise",
    description:
      "Define your movement campaign goals. Choose your target audience, set budget parameters, and design your activation strategy.",
    side: "right",
  },
  {
    number: "02",
    title: "Launch and going live",
    description:
      "Deploy your campaign across verified rider networks. Connect with engaged audiences through real-world movement experiences.",
    side: "left",
  },
  {
    number: "03",
    title: "Monitor and optimise",
    description:
      "Track performance in real-time. Access verified engagement data and optimise your campaign for maximum impact.",
    side: "right",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-movrr-bg-primary py-24 lg:py-36 border-y border-movrr-text-inverse/10"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 lg:mb-28"
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-movrr-text-inverse leading-[1.06] tracking-[-0.02em] max-w-lg">
            Launch in three
            <br />
            <span className="text-movrr-text-inverse/50">simple steps.</span>
          </h2>
          <p className="mt-5 text-base text-movrr-text-inverse/60 leading-relaxed max-w-lg">
            Whether you&apos;re a rider looking to earn or a brand ready to
            activate, getting started with MOVRR is straightforward.
          </p>
        </motion.div>

        {/* Timeline — vertical center line, steps alternate left / right */}
        <div className="relative">
          {/* Continuous vertical line — fades at top and bottom */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-linear-to-b from-transparent via-movrr-success to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative grid grid-cols-2 min-h-68 lg:min-h-108"
            >
              {/* LEFT cell */}
              <div className="flex items-center justify-end pr-12 lg:pr-16">
                {step.side === "left" && (
                  <div className="max-w-124 text-right">
                    <h3 className="mb-4 text-[2.65rem] font-semibold leading-[0.96] tracking-[-0.04em] text-movrr-text-inverse lg:text-[3.05rem]">
                      {step.title}
                    </h3>
                    <p className="ml-auto max-w-100 text-[1.02rem] leading-relaxed text-movrr-text-inverse/55">
                      {step.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Dot on the line — rounded square per design spec */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="h-4.5 w-4.5 rounded-[4px] border border-movrr-success-strong bg-movrr-success-strong" />
              </div>

              {/* RIGHT cell */}
              <div className="flex items-center justify-start pl-12 lg:pl-16">
                {step.side === "right" && (
                  <div className="max-w-124">
                    <h3 className="mb-4 text-[2.65rem] font-semibold leading-[0.96] tracking-[-0.04em] text-movrr-text-inverse lg:text-[3.05rem]">
                      {step.title}
                    </h3>
                    <p className="max-w-100 text-[1.02rem] leading-relaxed text-movrr-text-inverse/55">
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
