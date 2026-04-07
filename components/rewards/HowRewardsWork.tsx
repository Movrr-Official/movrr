"use client";

import { motion } from "framer-motion";

const mechanics = [
  {
    number: "01",
    title: "Ride verified",
    description:
      "Every ride is authenticated. Distance, route, and movement are verified before rewards are issued. Nothing simulated.",
  },
  {
    number: "02",
    title: "Earn by default",
    description:
      "Verified kilometres earn rewards automatically. No minimum distance, no activation required. Just ride.",
  },
  {
    number: "03",
    title: "Carry a brand, earn more",
    description:
      "Opt in to carry a brand campaign on your bike. Entirely your choice — but when you do, every kilometre earns more.",
  },
];

export function HowRewardsWork() {
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
              How rewards work
            </p>
            <h2 className="text-[clamp(2rem,3.5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-brand">
              Ride earns.
              <br />
              <span className="text-movrr-text-brand/40">Choice earns more.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="self-end text-base leading-relaxed text-movrr-text-brand/55 lg:max-w-sm"
          >
            Rewards are tied directly to verified movement.
            The more you ride, the more you earn — with or without a brand.
          </motion.p>
        </div>

        {/* Full-width mechanics rows — no image */}
        <div className="divide-y divide-movrr-border-soft">
          {mechanics.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-1 gap-6 py-14 lg:grid-cols-[14rem_1fr_minmax(0,26rem)] lg:items-center lg:gap-14 lg:py-18"
            >
              {/* Number column */}
              <div className="flex items-center gap-5">
                <span className="text-[0.62rem] font-semibold tabular-nums tracking-widest text-movrr-text-brand/25">
                  {item.number}
                </span>
                <div className="h-px flex-1 bg-movrr-success/25 lg:hidden" />
              </div>

              {/* Title — large, editorial weight */}
              <h3 className="text-[clamp(1.75rem,3vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-movrr-text-brand">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-base leading-relaxed text-movrr-text-brand/50">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
