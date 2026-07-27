"use client";

import { motion } from "framer-motion";
import type { HomeCopy } from "@/locales/types";

export function Metrics({ copy }: { copy: HomeCopy["metrics"] }) {
  return (
    <section
      id="impact"
      className="relative bg-movrr-bg-surface py-32 lg:py-44"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 lg:mb-20"
        >
          <h2 className="text-[clamp(2.5rem,4vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-movrr-text-brand">
            {copy.titleLine1}
            <br />
            <span className="text-movrr-text-brand/40">{copy.titleLine2}</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-movrr-text-brand/55">
            {copy.description}
          </p>
        </motion.div>

        <div className="grid items-stretch gap-4 lg:grid-cols-3 lg:gap-5">
          {copy.items.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex min-h-72 flex-col justify-between rounded-3xl border border-movrr-text-inverse/10 bg-movrr-bg-card-dark px-8 py-8 transition-colors duration-500 hover:border-movrr-success/20 hover:bg-movrr-bg-tertiary lg:px-9 lg:py-9"
            >
              <div>
                <p className="text-3xl font-semibold leading-tight tracking-[-0.02em] text-movrr-success-soft lg:text-[2.4rem]">
                  {metric.value}
                </p>
                <p className="mt-1.5 text-xs font-semibold uppercase tracking-widest text-movrr-success-soft/55">
                  {metric.label}
                </p>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-movrr-success-soft/40">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
