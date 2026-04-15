"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-svh overflow-hidden border-b border-movrr-text-inverse/10 bg-movrr-bg-primary">
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
          className="scale-[1.015] object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-movrr-bg-secondary/95 via-movrr-bg-secondary/74 to-movrr-bg-secondary/15" />
        <div className="absolute inset-0 bg-linear-to-t from-movrr-bg-secondary/58 via-movrr-bg-secondary/10 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-movrr-bg-backdrop/20 via-transparent to-transparent" />
      </div>

      {/* Text block — left-aligned, vertically centered */}
      <div className="relative z-10 mx-auto h-full max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex min-h-svh flex-col justify-center pb-20 pt-28 lg:pb-24 lg:pt-32"
        >
          <div className="max-w-2xl">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-movrr-text-inverse"
            >
              Movement,
              <br />
              rewarded.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 max-w-xl text-base leading-relaxed text-movrr-text-inverse/70 lg:text-[1.05rem]"
            >
              Ride the city. Earn with every kilometre. For brands, it's reach
              that actually moves people.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.45,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10"
            >
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/waitlist"
                  className="group inline-flex h-12 items-center gap-2.5 rounded-xl border border-movrr-text-inverse/30 bg-movrr-bg-surface px-7 text-sm font-semibold text-movrr-text-brand transition-colors duration-200 hover:bg-movrr-bg-elevated"
                >
                  Become a rider
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:rotate-45" />
                </Link>
                <Link
                  href="/brands"
                  className="inline-flex h-12 items-center rounded-xl border border-movrr-text-inverse/15 bg-transparent px-7 text-sm font-medium text-movrr-text-inverse/75 transition-colors duration-200 hover:bg-movrr-text-inverse/8 hover:text-movrr-text-inverse"
                >
                  Advertise with MOVRR
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
