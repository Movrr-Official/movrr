"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-svh bg-movrr-bg-primary overflow-hidden border-b border-movrr-text-inverse/10">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg-bob-on-bike.png"
          alt="Cyclists in motion through urban environment"
          fill
          priority
          fetchPriority="high"
          quality={90}
          sizes="100vw"
          className="object-cover object-center scale-[1.015]"
        />
        {/* Strong gradient left → right for text legibility */}
        <div className="absolute inset-0 bg-linear-to-r from-movrr-bg-secondary/95 via-movrr-bg-secondary/74 to-movrr-bg-secondary/15" />
        <div className="absolute inset-0 bg-linear-to-t from-movrr-bg-secondary/58 via-movrr-bg-secondary/10 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-movrr-bg-backdrop/20 via-transparent to-transparent" />
      </div>

      {/* Text block — left-aligned, vertically centered */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 h-full">
        <div className="flex flex-col justify-center min-h-svh pt-28 pb-20 lg:pt-32 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[6.5rem] font-semibold text-movrr-text-inverse leading-[0.94] tracking-[-0.03em]"
            >
              Movement,
              <br />
              rewarded.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-8 text-base lg:text-[1.05rem] text-movrr-text-inverse/70 leading-relaxed max-w-xl"
            >
              MOVRR turns verified rides and real-world movement into rewards
              for people and measurable activation for brands.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-11"
            >
              <Link
                href="#get-started"
                className="inline-flex items-center gap-2 bg-movrr-bg-surface text-movrr-text-brand hover:bg-movrr-bg-elevated font-semibold text-sm px-7 py-3.5 rounded-xl transition-colors border border-movrr-text-inverse/30"
              >
                Become a founding partner
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
