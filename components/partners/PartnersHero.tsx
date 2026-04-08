"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function PartnersHero() {
  return (
    <section className="relative flex min-h-[72vh] flex-col justify-between overflow-hidden bg-movrr-bg-primary pb-0 pt-40 lg:pt-52">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">

        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(4rem,7vw,8rem)] font-semibold leading-[0.88] tracking-[-0.04em] text-movrr-text-inverse"
          >
            Build on the
            <br />
            movement layer.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xs pb-1 text-base leading-relaxed text-movrr-text-inverse/45 lg:text-right"
          >
            MOVRR is the infrastructure beneath verified urban movement. If
            your platform touches how people move through cities — we should
            talk.
          </motion.p>
        </div>

      </div>

      {/* Full-width image flush to section bottom */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-[36vw] min-h-64 max-h-120 w-full overflow-hidden"
      >
        <Image
          src="/app-preview-01.png"
          alt="MOVRR platform"
          fill
          sizes="100vw"
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-movrr-bg-canvas/60 to-transparent" />
      </motion.div>
    </section>
  );
}
