"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Work that's real.",
    description:
      "The platform verifies movement. The rewards are earned. The reach is authentic. We hold ourselves to the same standard: no theatre, no vague roadmaps.",
  },
  {
    title: "Build it once, build it right.",
    description:
      "We're not optimising for the demo. We're building infrastructure for how cities move, which means we take the unglamorous work as seriously as the visible work.",
  },
  {
    title: "Small team, full ownership.",
    description:
      "Everyone here carries a meaningful part of the platform. There's no layer of people between your work and its impact on the product.",
  },
];

export function CareersValues() {
  return (
    <section className="border-b border-movrr-border-soft bg-movrr-bg-canvas py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

          {/* Left — section label pinned to top */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-brand/35"
            >
              How we work
            </motion.p>
          </div>

          {/* Right — values as prose blocks */}
          <div className="divide-y divide-movrr-border-soft">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.09,
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="py-10 first:pt-0"
              >
                <h3 className="mb-3 text-[clamp(1.25rem,1.8vw,1.6rem)] font-semibold leading-tight tracking-[-0.03em] text-movrr-text-brand">
                  {value.title}
                </h3>
                <p className="max-w-lg text-base leading-relaxed text-movrr-text-brand/50">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
