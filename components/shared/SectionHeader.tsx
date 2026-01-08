"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
  label?: string;
  title: string;
  subtitle: string;
}

const SectionHeader = ({ label, title, subtitle }: Props) => {
  return (
    <motion.div
      className="mb-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="space-y-6">
      {label && (
          <div className="inline-block border-b-2 border-primary pb-2">
            <span className="text-xs font-bold text-foreground uppercase tracking-[0.15em]">
          {label}
        </span>
          </div>
      )}

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black font-sans tracking-tight max-w-4xl leading-[1.1]">
        {title}
      </h2>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
        {subtitle}
      </p>
      </div>
    </motion.div>
  );
};

export default SectionHeader;
