"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    value: "400K — 1.2M",
    label: "Verified monthly reach",
    description: "Projected verified impressions across active rider networks.",
  },
  {
    value: "FROM €3.50",
    label: "Per 1,000 verified views",
    description: "Efficient exposure. Authentic engagement. Nothing inflated.",
  },
  {
    value: "UNIQUE REACH",
    label: "High-intent urban exposure",
    description: "Audiences in motion, not scrolling. Daily, urban, real.",
  },
];

export function BrandsMetrics() {
  return (
    <section className="border-b border-movrr-border-soft bg-movrr-bg-soft py-0">
      {/* No max-w container — numbers bleed edge to edge within section padding */}
      <div className="grid grid-cols-1 divide-y divide-movrr-text-brand/8 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.12,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col px-10 py-20 lg:px-14 lg:py-24"
          >
            {/* Accent line */}
            <div className="mb-10 h-px w-12 bg-movrr-success/35" />

            {/* Value */}
            <p className="mb-4 text-[clamp(1.75rem,3vw,3.5rem)] font-semibold leading-none tracking-[-0.04em] text-movrr-text-brand">
              {metric.value}
            </p>

            {/* Label */}
            <p className="mb-10 text-[0.65rem] font-semibold uppercase tracking-widest text-movrr-text-brand/40">
              {metric.label}
            </p>

            {/* Spacer */}
            <div className="min-h-6 flex-1" />

            {/* Description */}
            <p className="text-base leading-[1.75] text-movrr-text-brand/50">
              {metric.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
