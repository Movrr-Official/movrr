"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { ArrowRight, Rocket, Users } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { HeroSubheading } from "./HeroSubheading";

export function HeroSection() {
  return (
    <section
      data-hero-section
      className="relative w-full min-h-screen flex items-center bg-background pt-20 overflow-hidden"
    >
      {/* OUTFRONT-style background - industrial grid */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Strong grid system - OUTFRONT reference */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* OUTFRONT-style full-width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Strong grid system - 12 column layout */}
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)] py-20">
            {/* Left column - Content (7 columns) */}
            <div className="col-span-12 lg:col-span-7 space-y-10">
              {/* Status indicator - OUTFRONT style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-3 border-b-2 border-primary pb-2">
                  <Rocket className="h-4 w-4 text-primary" />
                  <span className="text-xs font-bold text-foreground uppercase tracking-[0.15em]">
                    Launching Q1 2026 — Rotterdam
                  </span>
                </div>
              </motion.div>

              {/* OUTFRONT-style headline - massive, confident */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-8"
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.95] tracking-[-0.02em]">
                  NOT JUST
                  <br />
                  BICYCLE ADS.
                  <br />
                  <span className="text-primary">MOVE</span> YOUR BRAND
                  <br />
                  WITH INTENT.
                </h1>

                <HeroSubheading />
              </motion.div>

              {/* OUTFRONT-style CTAs - strong, industrial */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link href="/companies" className="group">
                  <MagneticButton
                    size="xl"
                    className="h-16 px-8 text-base font-bold rounded-none uppercase tracking-[0.1em] border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
                    data-hero-advertise-btn
                  >
                    Become a Partner
                    <span className="ml-3 inline-flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </MagneticButton>
                </Link>
                <Link href="/riders">
                  <MagneticButton
                    variant="outline"
                    size="xl"
                    className="h-16 px-8 text-base font-bold rounded-none border-2 border-primary bg-transparent hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-200"
                    data-hero-rider-btn
                  >
                    <Users className="mr-2 h-4 w-4" />
                    Join as a Rider
                  </MagneticButton>
                </Link>
              </motion.div>
            </div>

            {/* Right column - Hero Image (5 columns) */}
            <div className="col-span-12 lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative w-full h-full min-h-[500px] lg:min-h-[600px] border-2 border-border overflow-hidden"
              >
                <Image
                  src="/images/movrr-bike-hero.png"
                  alt="Movrr bicycle advertising network"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - minimal */}
      <motion.div
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-foreground rounded-none flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <motion.div
            className="w-1 h-2 bg-primary rounded-none mt-2"
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
