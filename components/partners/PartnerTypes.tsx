"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const featured = {
  index: "01",
  title: "Mobility platforms",
  description:
    "Bike-share, e-scooter, and multimodal apps can integrate MOVRR's reward layer to add earning to every trip — without building the verification or brand infrastructure themselves.",
  fit: "API integration",
  cta: "Explore the API",
  href: "mailto:partners@movrr.nl",
};

const supporting = [
  {
    index: "02",
    title: "City and transport authorities",
    description:
      "Municipalities and transport operators can use MOVRR's verified movement data to design better infrastructure, measure active travel uptake, and incentivise modal shift at scale.",
    fit: "Data & insights",
    cta: "Talk to us",
    href: "mailto:partners@movrr.nl",
  },
  {
    index: "03",
    title: "Fitness and health platforms",
    description:
      "Apps that already track movement can surface MOVRR rewards for their users — turning workouts into earnings without disrupting the core product experience.",
    fit: "SDK + rewards",
    cta: "Request access",
    href: "mailto:partners@movrr.nl",
  },
  {
    index: "04",
    title: "Corporate mobility programmes",
    description:
      "Employers offering cycle-to-work, commute subsidies, or sustainable travel incentives can integrate MOVRR to deliver verified, real-time rewards tied to actual commutes.",
    fit: "B2B programme",
    cta: "Get in touch",
    href: "mailto:partners@movrr.nl",
  },
];

export function PartnerTypes() {
  return (
    <section className="border-b border-movrr-border-soft bg-movrr-bg-canvas py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-[clamp(2rem,3.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-brand"
        >
          Who we partner with
        </motion.h2>

        {/* Featured row — full-width, large */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-0 border-t border-movrr-border-soft py-14 lg:py-18"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr] lg:items-end lg:gap-20">
            <div>
              <div className="mb-5 flex items-center gap-5">
                <span className="text-[0.62rem] font-semibold tabular-nums tracking-widest text-movrr-text-brand/25">
                  {featured.index}
                </span>
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-movrr-text-brand/35">
                  {featured.fit}
                </span>
              </div>
              <h3 className="text-[clamp(2rem,3.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-brand">
                {featured.title}
              </h3>
            </div>
            <div className="flex flex-col gap-6 lg:items-end lg:text-right">
              <p className="text-sm leading-relaxed text-movrr-text-brand/45 lg:max-w-xs">
                {featured.description}
              </p>
              <a
                href={featured.href}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-movrr-text-brand transition-opacity duration-200 hover:opacity-55 lg:justify-end"
              >
                {featured.cta}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:rotate-45" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Supporting rows — compact */}
        <div className="divide-y divide-movrr-border-soft border-t border-movrr-border-soft">
          {supporting.map((type, index) => (
            <motion.div
              key={type.index}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.07,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-1 gap-5 py-9 lg:grid-cols-[0.2fr_1.1fr_0.9fr_0.4fr] lg:items-center lg:gap-12"
            >
              <span className="text-[0.62rem] font-semibold tabular-nums tracking-widest text-movrr-text-brand/25">
                {type.index}
              </span>
              <h3 className="text-[clamp(1rem,1.4vw,1.25rem)] font-semibold leading-snug tracking-[-0.02em] text-movrr-text-brand">
                {type.title}
              </h3>
              <p className="text-sm leading-relaxed text-movrr-text-brand/45">
                {type.description}
              </p>
              <a
                href={type.href}
                className="group flex items-center gap-1.5 text-sm font-medium text-movrr-text-brand/50 transition-colors duration-150 hover:text-movrr-text-brand lg:justify-end"
              >
                {type.cta}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:rotate-45" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
