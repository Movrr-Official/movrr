"use client";

import React from "react";
import { ArrowRight, Map, Users } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import { MagneticButton } from "@/components/ui/magnetic-button";
import ScrollLink from "@/components/ScrollLink";

const models = [
  {
    icon: <Map className="h-6 w-6 text-primary" />,
    title: "Destination Ride",
    subtitle: "For Consistent Presence & Community Connection",
    description:
      "Destination Rides integrate your brand into the daily rhythm of the city. Riders follow curated, high-traffic routes aligned with their routines—delivering repeated, authentic exposure to the neighborhoods that matter most to your audience.",
    useCases: [
      "Local business promotion",
      "Neighborhood targeting",
      "Recruitment drives",
      "Long-term awareness",
    ],
    image: "/images/destination-ride.png",
    gradient: "from-blue-500/10 to-purple-500/10",
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Swarm Campaign",
    subtitle: "For High-Impact Moments & Maximum Buzz",
    description:
      "Swarm Campaigns flood high-footfall zones with a synchronized fleet of branded bikes—turning your brand into a moving spectacle. Perfect for launches, activations, and events designed to capture attention and drive real-world buzz.",
    useCases: [
      "Product launches",
      "Event marketing",
      "Store openings",
      "Flash sales",
    ],
    image: "/images/swarm-campaign.png",
    gradient: "from-blue-500/10 to-purple-500/10",
  },
];

export function CampaignModels() {
  return (
    <section className="bg-background w-full py-32 md:py-40 border-t-2 border-border">
      {/* OUTFRONT-style full-width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* OUTFRONT-style header */}
          <div className="mb-20">
            <div className="inline-block border-b-2 border-primary pb-2 mb-6">
              <span className="text-xs font-bold text-foreground uppercase tracking-[0.15em]">
                Campaign Models
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground tracking-tight max-w-4xl leading-[1.1] mb-6">
              Two Proven Models. Infinite Local Reach.
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              Our model-based campaigns help you reach the right people in the
              right places—whether building brand equity over time or making a
              high-impact move fast.
            </p>
          </div>

          {/* OUTFRONT-style campaign blocks - full width, strong borders */}
          <div className="space-y-16">
            {models.map((model, index) => (
              <motion.div
                key={model.title}
                className="border-2 border-border bg-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Content - OUTFRONT style left column */}
                  <div
                    className={`lg:col-span-5 p-10 lg:p-12 border-r-2 border-border ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <div className="space-y-8">
                      {/* Header */}
                      <div className="pb-8 border-b-2 border-border">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 border-2 border-primary/30 bg-primary/5 flex items-center justify-center flex-shrink-0">
                            {model.icon}
                          </div>
                          <div>
                            <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-2">
                              {model.title}
                            </h3>
                            <p className="text-sm font-bold text-primary uppercase tracking-[0.1em]">
                              {model.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {model.description}
                      </p>

                      {/* Use cases - OUTFRONT style list */}
                      <div className="pt-4">
                        <div className="text-xs font-bold text-foreground uppercase tracking-[0.15em] mb-4">
                          Use Cases
                        </div>
                        <div className="space-y-3">
                          {model.useCases.map((useCase) => (
                            <div
                              key={useCase}
                              className="flex items-center gap-3 text-base"
                            >
                              <div className="w-2 h-2 bg-primary flex-shrink-0" />
                              <span className="text-foreground font-medium">
                                {useCase}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA - OUTFRONT style */}
                      <div className="pt-6">
                        <ScrollLink to="get-started" className="group">
                          <MagneticButton
                            size="xl"
                            className="h-14 px-8 text-base font-bold rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.1em] transition-all duration-200"
                          >
                            Launch a {model.title}
                            <span className="ml-3 inline-flex items-center justify-center">
                              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </span>
                          </MagneticButton>
                        </ScrollLink>
                      </div>
                    </div>
                  </div>

                  {/* Image - OUTFRONT style right column */}
                  <div
                    className={`lg:col-span-7 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <div className="relative overflow-hidden aspect-[4/3] bg-muted">
                      <Image
                        width={800}
                        height={600}
                        src={model.image}
                        alt={`Illustration for ${model.title}`}
                        className="w-full h-full object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
