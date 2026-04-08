"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const lead = {
  category: "Product",
  date: "12 Mar 2025",
  readTime: "6 min read",
  title:
    "Why movement data is the only honest signal left in urban advertising",
  href: "#",
};

export function BlogMasthead() {
  return (
    <section className="relative flex min-h-[80vh] flex-col justify-between overflow-hidden bg-movrr-bg-primary pb-0 pt-40 lg:pt-52">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        {/* Journal label + title row */}
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.08,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[clamp(4rem,8vw,10rem)] font-semibold leading-[0.88] tracking-[-0.04em] text-movrr-text-inverse"
            >
              From the
              <br />
              platform.
            </motion.h1>
          </div>

          {/* Lead article teaser — bottom right of header */}
          <motion.a
            href={lead.href}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.28,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group flex max-w-sm flex-col gap-3 pb-1 lg:items-end lg:text-right"
          >
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-movrr-text-inverse/35">
              {lead.category} · {lead.readTime}
            </span>
            <p className="text-sm font-medium leading-snug tracking-[-0.01em] text-movrr-text-inverse/70 transition-opacity duration-200 group-hover:text-movrr-text-inverse">
              {lead.title}
            </p>
            <span className="flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-widest text-movrr-text-inverse/35 transition-all duration-200 group-hover:text-movrr-text-inverse/60 lg:justify-end">
              Read
              <ArrowRight className="h-2.5 w-2.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </motion.a>
        </div>
      </div>

      {/* Full-width image — flush to bottom of masthead */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="relative mt-4 w-full overflow-hidden aspect-21/9"
      >
        <Image
          src="/app-preview-01.png"
          alt="MOVRR platform — featured article"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Gradient fade at bottom to blend into next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-movrr-bg-primary/60 to-transparent" />
      </motion.div>
    </section>
  );
}
