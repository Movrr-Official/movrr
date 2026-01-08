"use client";

import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

import { MagneticButton } from "../ui/magnetic-button";

interface Props {
  title: string;
  description: string;
  primaryCta: string;
  primaryCtaLink: string;
  secondaryCta?: string;
  secondaryCtaLink?: string;
  secondaryIcon?: React.ReactNode;
}

export default function CtaSection({
  title,
  description,
  primaryCta,
  primaryCtaLink,
  secondaryCta,
  secondaryCtaLink,
  secondaryIcon,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="w-full bg-secondary dark:bg-background py-32 md:py-40 border-b-2 border-white/20 dark:border-border"
    >
      {/* OUTFRONT-style full-width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-[1400px] mx-auto"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              variants={itemVariants}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1] text-white dark:text-foreground"
            >
              {title}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/80 dark:text-muted-foreground mb-12 leading-relaxed"
            >
              {description}
            </motion.p>
            <motion.div
              variants={itemVariants}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href={primaryCtaLink} className="group">
                <MagneticButton
                  size="xl"
                  className="h-14 px-8 text-base font-bold rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.1em]"
                >
                  {primaryCta}
                  <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </MagneticButton>
              </Link>
              {secondaryCta && secondaryCtaLink && (
                <Link href={secondaryCtaLink}>
                  <MagneticButton
                    size="xl"
                    variant="outline"
                    className="h-14 px-8 text-base font-bold rounded-none border-2 border-white dark:border-foreground bg-transparent text-white dark:text-foreground hover:bg-white dark:hover:bg-foreground hover:text-black dark:hover:text-background uppercase tracking-[0.1em]"
                  >
                    {secondaryCta}
                    {secondaryCtaLink && secondaryIcon}
                  </MagneticButton>
                </Link>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
