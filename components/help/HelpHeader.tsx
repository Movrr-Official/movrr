"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Search } from "lucide-react";

export function HelpHeader() {
  const [query, setQuery] = useState("");

  return (
    <section className="border-b border-movrr-border-soft bg-movrr-bg-primary pb-20 pt-44 lg:pb-24 lg:pt-52">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 max-w-xl text-[clamp(2.5rem,5vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-movrr-text-inverse"
        >
          How can we help?
        </motion.h1>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-lg"
        >
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-movrr-text-inverse/30" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for answers…"
            className="w-full rounded-none border border-movrr-text-inverse/15 bg-movrr-text-inverse/5 py-4 pl-11 pr-5 text-sm text-movrr-text-inverse placeholder:text-movrr-text-inverse/30 outline-none transition-colors duration-200 focus:border-movrr-text-inverse/30 focus:bg-movrr-text-inverse/8"
          />
        </motion.div>
      </div>
    </section>
  );
}
