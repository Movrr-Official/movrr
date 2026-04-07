"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function RewardsCTA() {
  return (
    <section className="border-b border-movrr-border-soft bg-movrr-bg-soft py-40 lg:py-56">
      <div className="mx-auto max-w-2xl px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-8 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-brand/35">
            Get started
          </p>
          <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-brand">
            Your next ride
            <br />
            <span className="text-movrr-text-brand/40">starts earning.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-sm text-base leading-relaxed text-movrr-text-brand/55">
            Join MOVRR. Verify your first ride. Every kilometre from here earns.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="#get-started"
              className="group inline-flex h-12 items-center gap-2.5 rounded-xl border border-movrr-text-brand/25 bg-movrr-bg-primary px-7 text-sm font-semibold text-movrr-text-inverse transition-colors duration-200 hover:bg-movrr-bg-secondary"
            >
              Get the app
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex h-12 items-center rounded-xl border border-movrr-text-brand/20 bg-transparent px-7 text-sm font-medium text-movrr-text-brand/70 transition-colors duration-200 hover:bg-movrr-text-brand/5 hover:text-movrr-text-brand"
            >
              How it works
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
