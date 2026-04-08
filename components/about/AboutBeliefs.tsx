"use client";

import { motion } from "framer-motion";

const beliefs = [
  {
    statement: "Movement earns.\u2028It always did.",
    elaboration:
      "We made that earning real — verifiable, and tied to every verified kilometre.",
  },
  {
    statement: "Advertising works when people choose it.",
    elaboration:
      "Every cyclist carrying a brand campaign made that choice. No passive exposure, no assumed attention — just opted-in reach.",
  },
  {
    statement: "Every metric is real.",
    elaboration:
      "No simulations, no estimated impressions. Every number on MOVRR is tied to verified movement data.",
  },
];

export function AboutBeliefs() {
  return (
    <section className="border-b border-movrr-text-inverse/10 bg-movrr-bg-primary py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Quiet section identifier */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-inverse/30 lg:mb-24"
        >
          What we believe
        </motion.p>

        {/* Belief rows */}
        <div className="divide-y divide-movrr-text-inverse/10">
          {beliefs.map((belief, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="py-14 lg:py-18"
            >
              <h3 className="whitespace-pre-line text-[clamp(2rem,3.5vw,4rem)] font-semibold leading-none tracking-[-0.04em] text-movrr-text-inverse">
                {belief.statement}
              </h3>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-movrr-text-inverse/50">
                {belief.elaboration}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
