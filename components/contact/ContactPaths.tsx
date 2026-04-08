"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const paths = [
  {
    audience: "Brands & agencies",
    index: "01",
    heading: "Run a campaign with MOVRR",
    description:
      "Running a campaign or planning one, the team handles brand enquiries directly. Reach, pricing, and campaign structure covered in a single conversation.",
    channel: "hello@movrr.nl",
    action: "Send a message",
    href: "mailto:hello@movrr.nl",
    note: "We respond within one business day.",
  },
  {
    audience: "Riders",
    index: "02",
    heading: "Rider support",
    description:
      "Earnings queries, verification questions, campaign issues: the support team handles all of it, directly.",
    channel: "support@movrr.nl",
    action: "Contact support",
    href: "mailto:support@movrr.nl",
    note: "Response time is typically under 24 hours.",
  },
  {
    audience: "Press & media",
    index: "03",
    heading: "Press enquiries",
    description:
      "Covering MOVRR, movement-based advertising, or urban mobility? The press team responds quickly and the kit is ready.",
    channel: "press@movrr.nl",
    action: "Email press",
    href: "mailto:press@movrr.nl",
    note: "Press kit available on request.",
  },
];

export function ContactPaths() {
  return (
    <section className="border-b border-movrr-border-soft bg-movrr-bg-canvas">
      <div className="divide-y divide-movrr-border-soft">
        {paths.map((path, index) => (
          <motion.div
            key={path.index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mx-auto max-w-7xl px-6 py-14 lg:px-12 lg:py-16">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_minmax(0,0.8fr)] lg:gap-16 lg:items-start">
                {/* Audience + index */}
                <div className="flex items-start justify-between lg:flex-col lg:justify-between lg:gap-10">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-brand/40">
                    {path.audience}
                  </p>
                  <span className="text-[0.62rem] font-semibold tabular-nums tracking-widest text-movrr-text-brand/18 lg:text-[clamp(3rem,5vw,5rem)] lg:font-semibold lg:leading-none lg:tracking-[-0.04em] lg:text-movrr-text-brand/6">
                    {path.index}
                  </span>
                </div>

                {/* Heading + description */}
                <div>
                  <h2 className="mb-4 text-[clamp(1.4rem,2vw,2rem)] font-semibold leading-tight tracking-[-0.03em] text-movrr-text-brand">
                    {path.heading}
                  </h2>
                  <p className="text-base leading-relaxed text-movrr-text-brand/50">
                    {path.description}
                  </p>
                </div>

                {/* Contact method + action */}
                <div className="flex flex-col gap-6 lg:items-end lg:text-right">
                  <Link
                    href={path.href}
                    className="text-base font-medium text-movrr-text-brand transition-opacity duration-200 hover:opacity-60"
                  >
                    {path.channel}
                  </Link>

                  <div>
                    <Link
                      href={path.href}
                      className="group inline-flex items-center gap-2 text-sm font-semibold text-movrr-text-brand transition-opacity duration-200 hover:opacity-55"
                    >
                      {path.action}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:rotate-45" />
                    </Link>
                    <p className="mt-3 text-xs text-movrr-text-brand/50">
                      {path.note}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
