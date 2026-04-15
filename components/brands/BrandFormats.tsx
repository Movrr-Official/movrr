"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const formats = [
  {
    index: "01",
    tag: "Always on",
    nameTop: "Destination",
    nameBottom: "Ride",
    description:
      "Your brand threaded into the daily routes cyclists already take. Neighbourhood by neighbourhood, day after day.",
    useCases: ["Month-long presence", "Local presence", "Commuter routes"],
    cta: "Launch a Destination Ride",
    dark: true,
  },
  {
    index: "02",
    tag: "All at once",
    nameTop: "Swarm",
    nameBottom: "Campaign",
    description:
      "A synchronized fleet moves together, on your signal. One moment. One city. Impossible to miss.",
    useCases: ["Product launches", "Store openings", "Brand events"],
    cta: "Plan a Swarm",
    dark: false,
  },
];

export function BrandFormats() {
  return (
    <section>
      {formats.map((format, index) => (
        <motion.div
          key={format.index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.08,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`border-b px-6 py-20 lg:px-12 lg:py-28 ${
            format.dark
              ? "border-movrr-text-inverse/10 bg-movrr-bg-primary"
              : "border-movrr-border-soft bg-movrr-bg-canvas"
          }`}
        >
          <div className="mx-auto max-w-7xl">

            {/* Accent line */}
            <div className="mb-12 w-12 overflow-hidden">
              <motion.div
                className={`h-px w-full ${
                  format.dark ? "bg-movrr-success/35" : "bg-movrr-success/35"
                }`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                style={{ transformOrigin: "left" }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>

            {/* Index + tag */}
            <div className="mb-12 flex items-center gap-4">
              <span
                className={`text-[0.62rem] font-semibold tabular-nums tracking-widest ${
                  format.dark
                    ? "text-movrr-text-inverse/25"
                    : "text-movrr-text-brand/25"
                }`}
              >
                {format.index}
              </span>
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-success">
                {format.tag}
              </span>
            </div>

            {/* Main — name left, details right */}
            <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-24">

              {/* Format name */}
              <h3
                className={`text-[clamp(3.2rem,6.5vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.04em] ${
                  format.dark ? "text-movrr-text-inverse" : "text-movrr-text-brand"
                }`}
              >
                {format.nameTop}
                <br />
                <span
                  className={
                    format.dark
                      ? "text-movrr-text-inverse/40"
                      : "text-movrr-text-brand/35"
                  }
                >
                  {format.nameBottom}
                </span>
              </h3>

              {/* Description + use cases + CTA */}
              <div>
                <p
                  className={`mb-10 text-base leading-relaxed ${
                    format.dark
                      ? "text-movrr-text-inverse/50"
                      : "text-movrr-text-brand/50"
                  }`}
                >
                  {format.description}
                </p>

                <p
                  className={`mb-10 text-[0.65rem] font-semibold uppercase tracking-[0.14em] ${
                    format.dark
                      ? "text-movrr-text-inverse/30"
                      : "text-movrr-text-brand/30"
                  }`}
                >
                  {format.useCases.join(" · ")}
                </p>

                <Link
                  href="/contact"
                  className={`group inline-flex items-center gap-2.5 text-sm font-semibold transition-opacity duration-200 hover:opacity-55 ${
                    format.dark ? "text-movrr-text-inverse" : "text-movrr-text-brand"
                  }`}
                >
                  {format.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

          </div>
        </motion.div>
      ))}
    </section>
  );
}
