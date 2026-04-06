"use client";

import { motion } from "framer-motion";
import { Shield, Target, MapPin } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Shield,
    title: "Verified movement rewards",
    description:
      "Every ride is authenticated through our verification system, ensuring genuine participation.",
  },
  {
    icon: Target,
    title: "Sponsored brand activation",
    description:
      "Brands connect with engaged audiences through movement-based campaigns that perform.",
  },
  {
    icon: MapPin,
    title: "Measurable urban reach",
    description:
      "Access city-scale movement data with transparent metrics and verifiable outcomes.",
  },
];

export function ValueStrip() {
  return (
    <section className="border-y border-movrr-text-inverse/10 bg-movrr-bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 grid gap-12 lg:mb-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-movrr-text-inverse lg:text-4xl xl:text-5xl">
              Built for movement.
              <br />
              <span className="text-movrr-text-inverse/50">
                Designed for measurable value.
              </span>
            </h2>
            <Link
              href="#learn-more"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-movrr-success-soft transition-colors hover:text-movrr-success"
            >
              Learn more
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center"
          >
            <p className="max-w-xl text-base leading-relaxed text-movrr-text-inverse/62 lg:text-lg">
              MOVRR creates a transparent ecosystem where every movement counts
              and every campaign performs with verified engagement.
            </p>
          </motion.div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-movrr-bg-primary">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="relative flex min-h-92 flex-col justify-between bg-movrr-bg-card-dark px-7 py-7 lg:min-h-100 lg:px-10 lg:py-8"
              >
                {index < values.length - 1 && (
                  <>
                    <div className="absolute inset-x-7 bottom-0 h-px bg-linear-to-r from-transparent via-movrr-text-inverse/10 to-transparent md:hidden" />
                    <div className="absolute bottom-8 right-0 top-8 hidden w-px bg-linear-to-b from-transparent via-movrr-text-inverse/10 to-transparent md:block lg:bottom-10 lg:top-10" />
                  </>
                )}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-movrr-text-inverse/10">
                  <value.icon
                    className="h-4 w-4 text-movrr-success-soft"
                    strokeWidth={1.8}
                  />
                </div>

                <div className="max-w-68 pt-16 lg:pt-20">
                  <h3 className="mb-7 text-[1.05rem] font-medium uppercase leading-snug tracking-[0.02em] text-movrr-success-soft">
                    {value.title}
                  </h3>
                  <p className="text-base leading-relaxed text-movrr-success-soft/60">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
