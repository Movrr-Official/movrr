"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  VerifiedIcon,
  BroadcastIcon,
  UrbanIcon,
} from "@/components/icons/MovrrIcons";

const values = [
  {
    title: "Earn with every ride",
    description:
      "Ride to earn. Carry a brand on your bike to earn more. Entirely your call.",
  },
  {
    title: "Campaigns that move",
    description:
      "Connect with people in motion. Real audiences, real streets.",
  },
  {
    title: "Reach that moves",
    description:
      "City-scale reach. Outcomes you can count.",
  },
];

export function ValueStrip() {
  return (
    <section className="border-y border-movrr-text-inverse/10 bg-movrr-bg-primary py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-20 grid gap-12 lg:mb-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-[clamp(2.25rem,3.5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-inverse">
              Real movement.
              <br />
              <span className="text-movrr-text-inverse/50">
                Real returns.
              </span>
            </h2>
            <Link
              href="#learn-more"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-movrr-success-soft transition-colors duration-200 hover:text-movrr-success"
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
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center"
          >
            <p className="max-w-lg text-base leading-relaxed text-movrr-text-inverse/60 lg:text-lg">
              A rewards platform for cyclists. Earn by riding.
              Brands reach people already in motion.
            </p>
          </motion.div>
        </div>

        {/* Asymmetric card grid — Card 1 tall left, Cards 2+3 stacked right */}
        <div className="overflow-hidden rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-movrr-bg-primary">

            {/* Card 1 — tall left column on desktop, full-width on tablet */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group flex min-h-96 flex-col justify-between bg-movrr-bg-card-dark px-8 py-8 transition-colors duration-500 hover:bg-movrr-bg-tertiary md:col-span-2 lg:col-span-1 lg:row-span-2 lg:min-h-176 lg:px-10 lg:py-10"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-movrr-text-inverse/8 transition-colors duration-500 group-hover:bg-movrr-text-inverse/13">
                <VerifiedIcon className="h-4 w-4 text-movrr-success-soft" strokeWidth={1.5} />
              </div>
              <div className="max-w-64 pt-20 lg:pt-24">
                <h3 className="mb-4 text-[0.65rem] font-semibold uppercase leading-snug tracking-[0.12em] text-movrr-success-soft/75">
                  {values[0].title}
                </h3>
                <p className="text-[1.05rem] leading-[1.65] text-movrr-success-soft/60">
                  {values[0].description}
                </p>
              </div>
            </motion.div>

            {/* Card 2 — top right */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex min-h-96 flex-col justify-between bg-movrr-bg-card-dark px-8 py-8 transition-colors duration-500 hover:bg-movrr-bg-tertiary lg:min-h-88 lg:px-10 lg:py-10"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-movrr-text-inverse/8 transition-colors duration-500 group-hover:bg-movrr-text-inverse/13">
                <BroadcastIcon className="h-4 w-4 text-movrr-success-soft" strokeWidth={1.5} />
              </div>
              <div className="max-w-64 pt-20 lg:pt-24">
                <h3 className="mb-4 text-[0.65rem] font-semibold uppercase leading-snug tracking-[0.12em] text-movrr-success-soft/75">
                  {values[1].title}
                </h3>
                <p className="text-[1.05rem] leading-[1.65] text-movrr-success-soft/60">
                  {values[1].description}
                </p>
              </div>
            </motion.div>

            {/* Card 3 — bottom right */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group flex min-h-96 flex-col justify-between bg-movrr-bg-card-dark px-8 py-8 transition-colors duration-500 hover:bg-movrr-bg-tertiary lg:min-h-88 lg:px-10 lg:py-10"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-movrr-text-inverse/8 transition-colors duration-500 group-hover:bg-movrr-text-inverse/13">
                <UrbanIcon className="h-4 w-4 text-movrr-success-soft" strokeWidth={1.5} />
              </div>
              <div className="max-w-64 pt-20 lg:pt-24">
                <h3 className="mb-4 text-[0.65rem] font-semibold uppercase leading-snug tracking-[0.12em] text-movrr-success-soft/75">
                  {values[2].title}
                </h3>
                <p className="text-[1.05rem] leading-[1.65] text-movrr-success-soft/60">
                  {values[2].description}
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
