"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutModel() {
  return (
    <section className="border-b border-movrr-border-soft bg-movrr-bg-soft py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Section heading */}
        <div className="mb-20 lg:mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2rem,3.5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-brand"
          >
            One platform.
            <br />
            <span className="text-movrr-text-brand/40">Two ways in.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-lg text-base leading-relaxed text-movrr-text-brand/50"
          >
            MOVRR is a two-sided platform. Cyclists earn with every verified
            kilometre. Brands reach opted-in audiences through physical
            exposure. Neither side compromises for the other.
          </motion.p>
        </div>

        {/* Two-column editorial — newspaper divide, not cards */}
        <div className="grid grid-cols-1 divide-y divide-movrr-border-soft lg:grid-cols-2 lg:divide-x lg:divide-y-0">

          {/* Riders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col pt-10 lg:pr-16 lg:pt-0"
          >
            <p className="mb-6 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-brand/40">
              Riders
            </p>
            <p className="max-w-sm text-base leading-[1.8] text-movrr-text-brand/60">
              Every verified kilometre earns. Carry a brand to earn more,
              or don't, the base rate is always there. Your route, your
              pace, your call.
            </p>
            <Link
              href="/riders"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-movrr-text-brand/60 transition-colors duration-200 hover:text-movrr-text-brand"
            >
              See how riders earn
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:rotate-45" />
            </Link>
          </motion.div>

          {/* Brands */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col pt-10 lg:pl-16 lg:pt-0"
          >
            <p className="mb-6 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-brand/40">
              Brands
            </p>
            <p className="max-w-sm text-base leading-[1.8] text-movrr-text-brand/60">
              Your brand moves through the city, carried by cyclists who
              chose it. Verified reach, not estimated. An audience in
              motion, not scrolling.
            </p>
            <Link
              href="/brands"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-movrr-text-brand/60 transition-colors duration-200 hover:text-movrr-text-brand"
            >
              Partner with MOVRR
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:rotate-45" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
