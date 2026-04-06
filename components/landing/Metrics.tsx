"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const metrics = [
  {
    value: "400K — 1.2M",
    label: "Verified monthly reach",
    description:
      "Potential verified impressions across active rider networks in urban areas.",
  },
  {
    value: "FROM €3.50",
    label: "Per 1,000 verified views",
    description:
      "Cost-efficient exposure with authentic, movement-verified engagement.",
  },
  {
    value: "UNIQUE REACH",
    label: "High-intent urban exposure",
    description:
      "Connect with active audiences during their daily movement routines.",
  },
];

export function Metrics() {
  return (
    <section id="impact" className="bg-movrr-bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-14"
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-movrr-text-brand leading-[1.06] tracking-[-0.02em] max-w-2xl">
            Projected
            <br />
            <span className="text-movrr-text-brand/40">campaign impact.</span>
          </h2>
          <p className="mt-6 text-base text-movrr-text-brand/60 leading-relaxed max-w-2xl">
            Understand the potential reach and efficiency of movement-based
            campaigns with transparent, verifiable metrics.
          </p>
        </motion.div>

        {/* Two-col: image left, stacked cards right — equal height */}
        <div
          className="grid lg:grid-cols-2 gap-4 lg:gap-5 items-stretch"
          style={{ minHeight: "70vh" }}
        >
          {/* Left — image fills full height of the cards stack */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden border border-movrr-border-soft"
          >
            <Image
              src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=2070&auto=format&fit=crop"
              alt="MOVRR branded bicycle"
              fill
              quality={88}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          {/* Right — 3 stacked cards, each flex-col with value top, description bottom */}
          <div className="flex flex-col gap-4 lg:gap-5">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex-1 flex flex-col justify-between rounded-3xl bg-movrr-bg-card-dark px-7 py-7 lg:px-8 lg:py-8 border border-movrr-text-inverse/10"
              >
                {/* Top — value + label */}
                <div>
                  <p className="text-2xl lg:text-3xl font-semibold text-movrr-success-soft leading-tight tracking-[-0.015em]">
                    {metric.value}
                  </p>
                  <p className="text-movrr-success-soft/60 text-[10px] font-semibold uppercase tracking-widest mt-1">
                    {metric.label}
                  </p>
                </div>

                {/* Bottom — description */}
                <p className="text-xs text-movrr-success-soft/40 leading-relaxed mt-4">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
