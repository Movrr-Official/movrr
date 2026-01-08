"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Rocket, Target, BrainCircuit, BarChart } from "lucide-react";

import { MagneticButton } from "@/components/ui/magnetic-button";

export function MissionVision() {
  return (
    <section className="bg-gradient-to-tr from-primary/10 via-background to-background">
      <div className="relative w-full max-w-6xl mx-auto py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl border border-primary/20 relative overflow-hidden"
          >
            <div className="absolute top-6 right-6 text-primary/10">
              <Rocket className="h-16 w-16" />
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>

            <p className="text-lg md:text-xl leading-relaxed relative z-10">
              We believe cities are already in motion. Our vision is to help
              brands tap into that movement by turning everyday bike rides into
              smart, high-performing campaigns that reach people where they
              live, work, and commute.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <BrainCircuit className="h-4 w-4 text-primary" />
                <span className="text-sm">Intelligent Routing</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart className="h-4 w-4 text-primary" />
                <span className="text-sm">Live Campaign Analytics</span>
              </div>
            </div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-transparent p-8 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-6 right-6 text-muted-foreground/10">
              <BrainCircuit className="h-16 w-16" />
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-muted/60 rounded-lg">
                <Rocket className="h-6 w-6 text-muted-foreground/30" />
              </div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>

            <p className="text-lg md:text-xl leading-relaxed relative z-10">
              We help brands connect with people in motion. By combining smart
              routing, local riders, and live data, we turn urban cycling into a
              media channel that delivers visibility, flexibility, and clear
              results.
            </p>

            <div className="mt-8 flex">
              <Link href="/how-it-works">
                <MagneticButton variant="outline" size="xl">
                  Learn About Our Technology
                </MagneticButton>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Key Differentiators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <p className="text-muted-foreground text-sm mb-6 max-w-xl">
            Movrr helps advertisers stay visible in cities that never stop
            moving. Our platform turns bike mobility into a performance
            marketing channel built for attention and scale.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <BrainCircuit className="h-5 w-5 text-green-500" />
                </div>
                <h3 className="font-semibold">Smarter Routes. Better Reach.</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Ads follow movement through high-traffic streets, key
                neighborhoods, and commuter paths—maximizing exposure without
                waste.
              </p>
            </div>

            <div className="border rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <BarChart className="h-5 w-5 text-blue-500" />
                </div>
                <h3 className="font-semibold">Live Campaign Insights</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Track where your campaigns go, who sees them, and how they
                perform—all in one place.
              </p>
            </div>

            <div className="border rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Target className="h-5 w-5 text-purple-500" />
                </div>
                <h3 className="font-semibold">Hyperlocal Targeting</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Deliver your message with precision based on location, rider
                movement, and real-world patterns—down to the street level.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
