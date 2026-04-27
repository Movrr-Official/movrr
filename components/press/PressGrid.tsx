"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const coverage = [
  {
    outlet: "TechCrunch",
    date: "Mar 2025",
    headline:
      "MOVRR wants to turn every bike ride into a brand touchpoint. Without the noise.",
    type: "Feature",
    href: "#",
  },
  {
    outlet: "The Economic Times",
    date: "Feb 2025",
    headline:
      "Rotterdam startup building rewards platform for urban cyclists raises pre-seed round",
    type: "News",
    href: "#",
  },
  {
    outlet: "Forbes",
    date: "Jan 2025",
    headline:
      "Movement-based advertising is the next frontier for urban mobility brands",
    type: "Opinion",
    href: "#",
  },
  {
    outlet: "Sifted",
    date: "Dec 2024",
    headline: "Five European mobility startups to watch in 2025",
    type: "Roundup",
    href: "#",
  },
  {
    outlet: "Cycling Weekly",
    date: "Nov 2024",
    headline:
      "Can verified movement data finally fix the broken sponsorship model for everyday riders?",
    type: "Analysis",
    href: "#",
  },
];

export function PressGrid() {
  return (
    <section className="border-b border-movrr-border-soft bg-movrr-bg-canvas py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-16 flex flex-col gap-4 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2rem,3.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-brand"
          >
            Coverage
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm text-movrr-text-brand/40"
          >
            Selected coverage
          </motion.p>
        </div>

        {/* Article rows */}
        <div className="divide-y divide-movrr-border-soft border-y border-movrr-border-soft">
          {coverage.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.06,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group -mx-6 grid grid-cols-1 gap-2 px-6 py-7 transition-colors duration-200 hover:bg-movrr-bg-soft lg:-mx-12 lg:grid-cols-[0.5fr_2fr_0.4fr_auto] lg:items-center lg:gap-8 lg:px-12 lg:py-8"
            >
              <div className="flex items-center gap-4 lg:block">
                <p className="text-sm font-semibold text-movrr-text-brand/70">
                  {item.outlet}
                </p>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-movrr-text-brand/30 lg:mt-1">
                  {item.date}
                </p>
              </div>
              <h3 className="text-base font-medium leading-snug tracking-[-0.01em] text-movrr-text-brand/80 group-hover:text-movrr-text-brand transition-colors duration-200">
                {item.headline}
              </h3>
              <p className="hidden text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-movrr-text-brand/30 lg:block">
                {item.type}
              </p>
              <ArrowUpRight className="hidden h-4 w-4 text-movrr-text-brand/25 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-movrr-text-brand/60 lg:block" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
