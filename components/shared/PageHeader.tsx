"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description: string;
  buttons?: ReactNode;
}

export function PageHeader({ title, description, buttons }: PageHeaderProps) {
  return (
    <section className="w-full bg-background pt-32 pb-20 md:pt-40 md:pb-24 border-b-2 border-border">
      {/* OUTFRONT-style full-width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-4xl">
          <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h1>
          <motion.p
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {description}
          </motion.p>

          {buttons && (
            <motion.div
                className="flex flex-col sm:flex-row gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {buttons}
            </motion.div>
          )}
          </div>
        </div>
      </div>
    </section>
  );
}
