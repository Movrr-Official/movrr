"use client";

import { motion } from "framer-motion";

export function ContactCredentials() {
  return (
    <section className="bg-movrr-bg-primary py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 text-base leading-relaxed text-movrr-text-inverse/40"
        >
          Every message lands with the team, not a ticketing system.
        </motion.p>

        <motion.a
          href="mailto:hello@movrr.nl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="group block text-[clamp(2.5rem,5.5vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-movrr-text-inverse transition-opacity duration-200 hover:opacity-55"
        >
          hello@movrr.nl
        </motion.a>

      </div>
    </section>
  );
}
