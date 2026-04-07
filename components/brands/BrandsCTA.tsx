"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BrandsCTA() {
  return (
    <section className="border-b border-movrr-text-inverse/10 bg-movrr-bg-primary py-40 lg:py-56">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-[clamp(2.5rem,5vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-movrr-text-inverse">
              Your brand,
              <br />
              <span className="text-movrr-text-inverse/45">in motion.</span>
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-movrr-text-inverse/50">
              Talk to the team. We'll walk you through reach, cost, and what a
              verified movement-based campaign looks like for your brand.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex shrink-0 flex-col gap-3"
          >
            <Link
              href="/contact"
              className="group inline-flex h-12 items-center gap-2.5 rounded-xl border border-movrr-text-inverse/30 bg-movrr-bg-glass px-7 text-sm font-semibold text-movrr-text-brand transition-colors duration-200 hover:bg-movrr-bg-elevated"
            >
              Talk to sales
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:rotate-45" />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex h-12 items-center rounded-xl border border-movrr-text-inverse/15 bg-transparent px-7 text-sm font-medium text-movrr-text-inverse/75 transition-colors duration-200 hover:bg-movrr-text-inverse/8 hover:text-movrr-text-inverse"
            >
              How it works
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
