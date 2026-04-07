"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

        {/* Section header */}
        <div className="mb-20 grid gap-12 lg:mb-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-brand/50">
              For riders
            </p>
            <h2 className="text-[clamp(2rem,3.5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-brand">
              Ride to earn.
              <br />
              <span className="text-movrr-text-brand/40">Nothing else required.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="self-end text-base leading-relaxed text-movrr-text-brand/55 lg:max-w-sm"
          >
            Ride and earn. Opt in to brand campaigns to earn more.
            Your movement, your choice — nothing required beyond the ride.
          </motion.p>
        </div>

        {/* Image + Steps layout */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-5">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative min-h-[55vw] overflow-hidden rounded-3xl border border-movrr-border-soft lg:min-h-full"
          >
            <Image
              src="/app-preview-01.png"
              alt="MOVRR rider in motion"
              fill
              quality={88}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-movrr-bg-backdrop/28 via-transparent to-transparent" />
          </motion.div>

          {/* Steps */}
          <div className="flex flex-col divide-y divide-movrr-border-soft">
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
                className="group flex flex-col gap-5 py-10 lg:py-12"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[0.62rem] font-semibold tabular-nums tracking-widest text-movrr-text-brand/25">
                    {step.number}
                  </span>
                  <div className="h-px w-8 bg-movrr-success/35" />
                </div>
                <h3 className="text-[clamp(1.5rem,2vw,2rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-movrr-text-brand">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-movrr-text-brand/50">
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
