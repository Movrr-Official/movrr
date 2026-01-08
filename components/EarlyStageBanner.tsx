"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Rocket, Users, Calendar, ArrowRight } from "lucide-react";
import { useLaunchWaitlist } from "@/app/hooks/useLaunchWaitlist";
import { LaunchWaitlistModal } from "./LaunchWaitlistModal";
import { MagneticButton } from "./ui/magnetic-button";

export function EarlyStageBanner() {
  const { isModalOpen, openModal, closeModal } = useLaunchWaitlist();

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full bg-card border-y-2 border-border"
      >
        {/* OUTFRONT-style full-width container */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Content - OUTFRONT style */}
              <div className="col-span-12 lg:col-span-8 space-y-6">
                <div className="flex items-center gap-4 pb-4 border-b-2 border-primary">
                  <div className="w-12 h-12 border-2 border-primary/30 bg-primary/5 flex items-center justify-center flex-shrink-0">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 rounded-none border-2 border-primary/30 px-3 py-1"
                    >
                      Pre-Launch
                    </Badge>
                    <Badge
                      variant="outline"
                      className="flex items-center gap-2 rounded-none border-2 px-3 py-1"
                    >
                      <Calendar className="h-3.5 w-3.5" />
                      <span className="text-xs font-bold">Q1 2026 Launch</span>
                    </Badge>
                  </div>
                </div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tight">
                  Bicycle Advertising, Smarter and at Scale
                </h3>
                <p className="text-xl text-muted-foreground">
                  Be among the first brands to run high-visibility campaigns
                  across Dutch cities
                </p>
              </div>

              {/* Right Content - OUTFRONT style metrics */}
              <div className="col-span-12 lg:col-span-4">
                <div className="border-2 border-border bg-background p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-xs font-bold text-muted-foreground uppercase tracking-[0.15em] mb-2">
                        Network
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        <span className="text-2xl font-black">50+</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-muted-foreground uppercase tracking-[0.15em] mb-2">
                        Launch
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="text-2xl font-black">Q1 2026</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t-2 border-border">
                    <MagneticButton
                      size="xl"
                      onClick={openModal}
                      className="w-full h-14 text-base font-bold rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.1em] transition-all duration-200"
                    >
                      Join Launch Waitlist
                      <span className="ml-3 inline-flex items-center justify-center">
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <LaunchWaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
