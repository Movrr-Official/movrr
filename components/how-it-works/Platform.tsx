"use client";

import { motion } from "framer-motion";

const featured = {
  number: "01",
  title: "Verified movement",
  description:
    "Every ride authenticated. No simulations, no shortcuts. Verified data powers every reward and every campaign metric.",
};

const supporting = [
  {
    number: "02",
    title: "Privacy by default",
    description:
      "What you ride stays yours. Individual tracking is anonymised. Brands receive aggregated, verified insights.",
  },
  {
    number: "03",
    title: "Real-time visibility",
    description:
      "Riders and brands see performance as it happens. Live reach, verified impressions, engagement in motion.",
  },
  {
    number: "04",
    title: "Brand integrity",
    description:
      "Every rider carrying your brand has chosen to. Opt-in means no passive placements — just people who actively chose to represent your campaign.",
  },
];

export function Platform() {
  return (
    <section className="border-b border-movrr-border-soft bg-movrr-bg-soft py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Section heading + descriptor */}
        <div className="mb-20 grid gap-8 lg:mb-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2rem,3.5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-brand"
          >
            Built for trust.
            <br />
            <span className="text-movrr-text-brand/40">On both sides.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="self-end text-base leading-relaxed text-movrr-text-brand/50 lg:max-w-sm"
          >
            Every mechanic on MOVRR — from reward calculation to campaign
            delivery — runs on verified data, rider consent, and transparent
            outcomes.
          </motion.p>
        </div>

        {/* Asymmetric trust layout — one featured pillar + three supporting */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] lg:divide-x lg:divide-movrr-border-soft">

          {/* Featured pillar — large left column, number at top, content pushed to bottom */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between border-b border-movrr-border-soft pb-12 pt-2 lg:border-b-0 lg:pb-0 lg:pr-16 lg:pt-0"
          >
            <span className="text-[0.62rem] font-semibold tabular-nums tracking-widest text-movrr-text-brand/20">
              {featured.number}
            </span>
            <div className="mt-24 lg:mt-0">
              <h3 className="text-[clamp(2.25rem,3.8vw,4.25rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-brand">
                {featured.title}
              </h3>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-movrr-text-brand/45">
                {featured.description}
              </p>
            </div>
          </motion.div>

          {/* Three supporting pillars — compact, stacked right */}
          <div className="divide-y divide-movrr-border-soft lg:pl-14">
            {supporting.map((pillar, index) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.1 + index * 0.08,
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="py-9"
              >
                <div className="flex items-start gap-5">
                  <span className="mt-0.5 shrink-0 text-[0.62rem] font-semibold tabular-nums tracking-widest text-movrr-text-brand/20">
                    {pillar.number}
                  </span>
                  <div>
                    <h3 className="text-[clamp(1.05rem,1.3vw,1.3rem)] font-semibold leading-snug tracking-[-0.02em] text-movrr-text-brand">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-[1.75] text-movrr-text-brand/45">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
