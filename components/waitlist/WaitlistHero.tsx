"use client";

import { motion } from "framer-motion";

const cities = ["Rotterdam", "The Hague", "Amsterdam", "Utrecht"];

export function WaitlistHero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-between overflow-hidden bg-movrr-bg-primary pb-14 pt-36 lg:pb-16 lg:pt-52">
      {/* Vertical rule — decorative right-side accent */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.6, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-12 top-0 hidden h-full w-px origin-top bg-movrr-text-inverse/6 lg:block"
      />

      {/* Main content */}
      <div className="movrr-shell">
        <div className="max-w-4xl">
          {/* Kicker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <span className="movrr-kicker border-movrr-text-inverse/20 text-movrr-text-inverse/40">
              Wave 01
            </span>
          </motion.div>

          {/* Headline — stacked, asymmetric weight */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[clamp(3.2rem,8.5vw,9.5rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-movrr-text-inverse"
          >
            Movement starts
            <br />
            <span className="text-movrr-text-inverse/30">
              before the crowd.
            </span>
          </motion.h1>

          {/* Body line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.35,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 max-w-sm text-base leading-relaxed text-movrr-text-inverse/45"
          >
            MOVRR launches city by city. Register and be first when your city
            opens.
          </motion.p>
        </div>
      </div>

      {/* Bottom strip — cities only */}
      <div className="movrr-shell">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-movrr-text-inverse/28">
            Cities launching 2026
          </p>
          <div className="flex items-center gap-3">
            {cities.map((city, i) => (
              <span key={city} className="flex items-center gap-3">
                <span className="text-sm font-medium text-movrr-text-inverse/55">
                  {city}
                </span>
                {i < cities.length - 1 && (
                  <span className="h-px w-3 bg-movrr-text-inverse/20" />
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
