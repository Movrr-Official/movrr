"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    number: "01",
    label: "Base",
    title: "Ride to earn",
    description:
      "Kilometres earn the moment you ride. No targets, no minimums. Just verified movement.",
    detail: "Verified movement rewards",
    accentWidth: "w-8",
  },
  {
    number: "02",
    label: "Boosted",
    title: "Carry a brand",
    description:
      "Pick a campaign and carry it through the city. Every verified kilometre you ride with it earns more.",
    detail: "Movement + brand exposure rewards",
    accentWidth: "w-16",
  },
  {
    number: "03",
    label: "Campaign",
    title: "Community rides",
    description:
      "Join a city or brand-sponsored route, or ride with others in your city. The more you move together, the more everyone earns.",
    detail: "Open to all · or join by invite",
    accentWidth: "w-24",
  },
];

export function RewardsTiers() {
  return (
    <section className="border-b border-movrr-text-inverse/10 bg-movrr-bg-primary py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-[clamp(2rem,3.5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-inverse lg:mb-20"
        >
          Three ways
          <br />
          <span className="text-movrr-text-inverse/45">to earn.</span>
        </motion.h2>

        {/* Escalating tier rows */}
        <div className="divide-y divide-movrr-text-inverse/8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`grid grid-cols-1 gap-6 lg:grid-cols-[auto_1fr_minmax(0,24rem)] lg:items-center lg:gap-14 ${
                index === 0 ? "py-12 lg:py-14" : index === 1 ? "py-14 lg:py-18" : "py-16 lg:py-22"
              }`}
            >
              {/* Escalating accent line — draws in on scroll */}
              <div className={`hidden shrink-0 overflow-hidden lg:block ${tier.accentWidth}`}>
                <motion.div
                  className="h-px w-full bg-movrr-success/40"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "left" }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>

              {/* Title — grows with tier */}
              <div>
                <div className="mb-3 flex items-center gap-4">
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-movrr-success-soft/55">
                    {tier.label}
                  </span>
                  <span className="text-[0.62rem] font-semibold tabular-nums tracking-widest text-movrr-text-inverse/20">
                    {tier.number}
                  </span>
                  <div className={`h-px bg-movrr-success/40 lg:hidden ${tier.accentWidth}`} />
                </div>
                <h3
                  className={`font-semibold leading-tight tracking-[-0.03em] text-movrr-text-inverse ${
                    index === 0
                      ? "text-[clamp(1.75rem,2.5vw,2.5rem)]"
                      : index === 1
                      ? "text-[clamp(2rem,3vw,3.25rem)]"
                      : "text-[clamp(2.5rem,3.5vw,4rem)]"
                  }`}
                >
                  {tier.title}
                </h3>
              </div>

              {/* Description + detail */}
              <div className="space-y-4">
                <p
                  className={`leading-relaxed text-movrr-text-inverse/50 ${
                    index === 0 ? "text-sm" : "text-base"
                  }`}
                >
                  {tier.description}
                </p>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-movrr-success-soft/45">
                  {tier.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
