"use client";

import { motion } from "framer-motion";

const facts = [
  { label: "Founded", value: "2024" },
  { label: "Headquartered", value: "Dublin, Ireland" },
  { label: "Platform type", value: "Movement-based rewards" },
  { label: "Markets", value: "Europe (launching)" },
];

export function PressHeader() {
  return (
    <section className="border-b border-movrr-border-soft bg-movrr-bg-soft">
      <div className="mx-auto max-w-7xl px-6 pb-0 pt-40 lg:px-12 lg:pt-52">
        {/* Title row */}
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.08,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[clamp(2rem,4vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-brand"
            >
              Press & Media
            </motion.h1>
          </div>
          <motion.a
            href="mailto:press@movrr.nl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm font-medium text-movrr-text-brand/50 underline underline-offset-2 transition-colors duration-150 hover:text-movrr-text-brand lg:mb-2"
          >
            press@movrr.nl
          </motion.a>
        </div>

        {/* Key facts strip — flush to section bottom */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 divide-x divide-y divide-movrr-border-soft border-t border-movrr-border-soft lg:grid-cols-4 lg:divide-y-0"
        >
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="px-6 py-6 first:pl-0 lg:px-8 lg:py-7 lg:first:pl-0 lg:last:pr-0"
            >
              <p className="mb-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-movrr-text-brand/30">
                {fact.label}
              </p>
              <p className="text-sm font-semibold text-movrr-text-brand/70">
                {fact.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
