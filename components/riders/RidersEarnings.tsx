"use client";

import { motion } from "framer-motion";

const earnings = [
  {
    number: "01",
    label: "Base",
    title: "Just ride",
    description:
      "Verified kilometres earn rewards automatically. No opt-ins, no minimums. Every ride counts from the first pedal stroke.",
    note: "Default for all riders",
    accentWidth: "w-8",
    headingSize: "text-[clamp(1.75rem,2.5vw,2.5rem)]",
    descSize: "text-sm",
    py: "py-12 lg:py-14",
  },
  {
    number: "02",
    label: "Boosted",
    title: "Carry a brand",
    description:
      "Choose to carry a brand campaign on your bike. Your reward rate increases for every verified kilometre you ride with it.",
    note: "Optional — always your choice",
    accentWidth: "w-16",
    headingSize: "text-[clamp(2rem,3vw,3.25rem)]",
    descSize: "text-base",
    py: "py-14 lg:py-18",
  },
  {
    number: "03",
    label: "Campaign",
    title: "Join a community ride",
    description:
      "Join brand-sponsored routes or community rides organized by approved riders. Sponsored campaigns earn at elevated rates.",
    note: "Brand-led or rider-led — invite or open enrolment",
    accentWidth: "w-24",
    headingSize: "text-[clamp(2.5rem,3.5vw,4rem)]",
    descSize: "text-base",
    py: "py-16 lg:py-22",
  },
];

export function RidersEarnings() {
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
          <span className="text-movrr-text-inverse/45">to earn more.</span>
        </motion.h2>

        {/* Escalating ladder rows */}
        <div className="divide-y divide-movrr-text-inverse/8">
          {earnings.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`grid grid-cols-1 gap-6 lg:grid-cols-[auto_1fr_minmax(0,24rem)] lg:items-center lg:gap-14 ${item.py}`}
            >
              {/* Escalating accent line — draws in on scroll */}
              <div className={`hidden shrink-0 overflow-hidden lg:block ${item.accentWidth}`}>
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

              {/* Title + label */}
              <div>
                <div className="mb-4 flex items-center gap-4">
                  <div
                    className={`h-px bg-movrr-success/40 lg:hidden ${item.accentWidth}`}
                  />
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-movrr-success-soft/55">
                    {item.label}
                  </span>
                  <span className="text-[0.62rem] font-semibold tabular-nums tracking-widest text-movrr-text-inverse/20">
                    {item.number}
                  </span>
                </div>
                <h3
                  className={`font-semibold leading-tight tracking-[-0.03em] text-movrr-text-inverse ${item.headingSize}`}
                >
                  {item.title}
                </h3>
              </div>

              {/* Description + note */}
              <div className="space-y-4">
                <p
                  className={`leading-relaxed text-movrr-text-inverse/55 ${item.descSize}`}
                >
                  {item.description}
                </p>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-movrr-success-soft/45">
                  {item.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
