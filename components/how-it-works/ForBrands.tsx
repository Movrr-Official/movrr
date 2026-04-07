"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { VerifiedIcon, BroadcastIcon, UrbanIcon } from "@/components/icons/MovrrIcons";

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
            <p className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-inverse/35">
              For brands
            </p>
            <h2 className="text-[clamp(2rem,3.5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-inverse">
              Campaigns that
              <br />
              <span className="text-movrr-text-inverse/45">move with people.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="self-end text-base leading-relaxed text-movrr-text-inverse/50 lg:max-w-sm"
          >
            Real-world reach. Verified engagement. An audience already in motion,
            already paying attention.
          </motion.p>
        </div>

        {/* Steps + image layout — reversed from ForRiders */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-5">
          {/* Steps */}
          <div className="flex flex-col divide-y divide-movrr-text-inverse/8">
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
                className="group flex flex-col gap-6 py-10 lg:py-12"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[0.62rem] font-semibold tabular-nums tracking-widest text-movrr-text-inverse/20">
                    {step.number}
                  </span>
                  <step.icon
                    className="h-5 w-5 text-movrr-success-soft/45 transition-colors duration-500 group-hover:text-movrr-success-soft"
                    strokeWidth={1.25}
                  />
                </div>
                <h3 className="text-[clamp(1.5rem,2vw,2rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-movrr-text-inverse">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-movrr-text-inverse/45">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative min-h-[55vw] overflow-hidden rounded-3xl border border-movrr-text-inverse/10 lg:order-first lg:min-h-full"
          >
            <Image
              src="/app-preview-02.png"
              alt="MOVRR brand campaign in motion"
              fill
              quality={88}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-movrr-bg-backdrop/28 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
