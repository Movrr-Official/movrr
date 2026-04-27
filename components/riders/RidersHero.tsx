"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function RidersHero() {
  return (
    <section className="overflow-hidden border-b border-movrr-text-inverse/10 bg-movrr-bg-primary">
      {/* Full-viewport grid — text left, image right */}
      <div className="grid min-h-[88vh] grid-cols-1 lg:grid-cols-[1fr_minmax(0,40vw)]">
        {/* Text column */}
        <div className="flex flex-col justify-between px-6 pb-20 pt-44 lg:px-12 lg:pb-16 lg:pt-52">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-movrr-text-inverse"
            >
              Ride the city.
              <br />
              <span className="text-movrr-text-inverse/45">
                Own the reward.
              </span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-16"
          >
            <p className="max-w-sm text-base leading-relaxed text-movrr-text-inverse/55">
              Every verified kilometre earns MOVRR Points — redeemable for
              cycling gear, food, vouchers, and more. Carry a brand when you
              want to multiply them.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/waitlist"
                className="group inline-flex h-12 items-center gap-2.5 rounded-xl border border-movrr-text-inverse/30 bg-movrr-bg-glass px-7 text-sm font-semibold text-movrr-text-brand transition-colors duration-200 hover:bg-movrr-bg-elevated"
              >
                Get started
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:rotate-45" />
              </Link>
              <Link
                href="/rewards"
                className="inline-flex h-12 items-center rounded-xl border border-movrr-text-inverse/15 bg-transparent px-7 text-sm font-medium text-movrr-text-inverse/75 transition-colors duration-200 hover:bg-movrr-text-inverse/8 hover:text-movrr-text-inverse"
              >
                See rewards
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Image column — fills full height, desktop only */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <Image
            src="/hero-cyclist-rotterdam-modern-urban.png"
            alt="Cyclist riding with MOVRR"
            fill
            quality={90}
            sizes="40vw"
            className="object-cover object-center"
            priority
          />
          {/* Fade to left — blends image into dark bg */}
          <div className="absolute inset-0 bg-linear-to-r from-movrr-bg-primary/60 via-transparent to-transparent" />
          {/* Fade to bottom */}
          <div className="absolute inset-0 bg-linear-to-t from-movrr-bg-primary/20 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
