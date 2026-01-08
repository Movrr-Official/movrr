"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { FiLinkedin } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";

export function FounderCredibility() {
  return (
    <section className="w-full bg-background py-32 md:py-40 relative overflow-hidden border-t-2 border-border">
      {/* OUTFRONT-style full-width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <SectionHeader
            label="Our Story"
            title="Our Founding Story"
            subtitle="It started with a simple truth: advertising stood still, but
              cities didn't. Movrr was born to move with them."
          />

          {/* OUTFRONT-style card - strong borders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="border-2 border-border bg-card">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Founder Info - OUTFRONT style */}
                <div className="lg:col-span-4 p-10 lg:p-12 border-r-2 border-border bg-background flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="relative w-48 h-48 mb-8 border-4 border-foreground overflow-hidden"
                  >
                    <Image
                      src="/co-founder-michael.jpg"
                      alt="Michael Okpara, Co-Founder"
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                  <h3 className="text-3xl font-black mb-2">Michael Okpara</h3>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-[0.15em] mb-8">
                    Co-Founder
                  </p>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="group rounded-none border-2 px-4"
                    >
                      <FiLinkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="group rounded-none border-2 px-4"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                  </div>
                </div>

                {/* Founder Story - OUTFRONT style */}
                <div className="lg:col-span-8 p-10 lg:p-12 bg-background">
                  <div className="space-y-10">
                    <div>
                      <h4 className="text-4xl font-black tracking-tight mb-8">
                        A New Kind of Visibility
                      </h4>
                      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                        <p>
                          {`We didn't grow up in the world of advertising—and
                            that's our strength. Our roots are in studying urban
                            mobility, city flow, and how people connect in
                            motion. Every day, we saw cyclists moving
                            purposefully through the city, while static ads sat
                            ignored on walls and screens.`}
                        </p>
                        <p>
                          Movrr was born from one question: What if bikes could
                          become smart, local billboards—driven by people, not
                          algorithms? We created a way for brands to show up in
                          motion, in context, and in the neighborhoods that
                          matter most. At the same time, riders earn income
                          doing what they already do: moving through the city.
                        </p>
                      </div>
                    </div>

                    {/* Mission Quote - OUTFRONT style */}
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className="border-2 border-primary/30 bg-primary/5 p-8"
                    >
                      <h5 className="text-sm font-bold text-primary uppercase tracking-[0.15em] mb-4">
                        Our Mission in a Nutshell
                      </h5>
                      <blockquote className="text-xl text-foreground italic leading-relaxed">
                        {`We didn't come from advertising—we came from the
                          street. Movrr is the bridge between real movement and
                          meaningful brand presence. We help brands show up
                          where it counts, powered by the people who live and
                          ride there.`}
                      </blockquote>
                    </motion.div>

                    {/* Optional CTA - OUTFRONT style */}
                    <div className="pt-4 group">
                      <Link
                        href="/about"
                        className="inline-flex items-center text-primary font-bold uppercase tracking-[0.1em] text-sm group-hover:underline"
                      >
                        Learn More About Our Journey
                        <motion.span
                          className="ml-3 inline-flex items-center justify-center"
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </motion.span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
