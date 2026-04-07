"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HowItWorksCTA() {
  return (
    <section className="border-b border-movrr-text-inverse/10 bg-movrr-bg-primary py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex items-center justify-between border-b border-movrr-text-inverse/8 pb-8 lg:mb-20"
        >
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-inverse/30">
            Get started
          </span>
          <span className="tabular-nums text-[0.65rem] tracking-widest text-movrr-text-inverse/18">
            03
          </span>
        </motion.div>

        {/* Two-column CTA */}
        <div className="grid grid-cols-1 gap-px bg-movrr-text-inverse/8 overflow-hidden rounded-3xl lg:grid-cols-2">
          {/* Riders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="group flex flex-col bg-movrr-bg-card-dark px-10 py-14 transition-colors duration-500 hover:bg-movrr-bg-tertiary lg:px-14 lg:py-20"
          >
            <p className="mb-6 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-inverse/35">
              Riders
            </p>
            <h3 className="mb-6 text-[clamp(1.75rem,2.5vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-movrr-text-inverse">
              Start earning
              <br />
              today.
            </h3>
            <p className="mb-10 max-w-xs text-base leading-relaxed text-movrr-text-inverse/45">
              Ride to earn. Opt in to brand campaigns when you want to earn
              more. Your movement, your choice.
            </p>
            <div className="mt-auto">
              <Link
                href="#get-started"
                className="group/btn inline-flex h-12 items-center gap-2.5 rounded-xl border border-movrr-text-inverse/25 bg-movrr-bg-glass px-7 text-sm font-semibold text-movrr-text-brand transition-colors duration-200 hover:bg-movrr-bg-elevated"
              >
                Get the app
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>

          {/* Brands */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="group flex flex-col bg-movrr-bg-card-dark px-10 py-14 transition-colors duration-500 hover:bg-movrr-bg-tertiary lg:px-14 lg:py-20"
          >
            <p className="mb-6 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-inverse/35">
              Brands
            </p>
            <h3 className="mb-6 text-[clamp(1.75rem,2.5vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-movrr-text-inverse">
              Activate your
              <br />
              first campaign.
            </h3>
            <p className="mb-10 max-w-xs text-base leading-relaxed text-movrr-text-inverse/45">
              Talk to the team. We'll walk you through reach, cost, and what
              verified movement-based exposure looks like for your brand.
            </p>
            <div className="mt-auto">
              <Link
                href="/contact"
                className="group/btn inline-flex h-12 items-center gap-2.5 rounded-xl border border-movrr-text-inverse/25 bg-transparent px-7 text-sm font-semibold text-movrr-text-inverse/80 transition-colors duration-200 hover:bg-movrr-text-inverse/8 hover:text-movrr-text-inverse"
              >
                Talk to sales
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
