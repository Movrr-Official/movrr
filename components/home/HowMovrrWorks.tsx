"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Target, Bike, BarChart } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const processSteps = {
  destination: [
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Campaign Strategy",
      description:
        "We collaborate with you to define your target audience, key routes, and campaign timeline for consistent brand exposure.",
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Rider Matching",
      description:
        "Your campaign is paired with verified local riders whose daily routes maximize your reach within your desired demographics.",
    },
    {
      icon: <Bike className="h-8 w-8 text-primary" />,
      title: "Daily Deployment",
      description:
        "Riders carry your branded ads throughout their regular commutes, ensuring genuine, frequent audience interactions.",
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Performance Analytics",
      description:
        "Access detailed analytics including impressions, route coverage, and engagement metrics to optimize your campaign's success.",
    },
  ],
  swarm: [
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Event Targeting",
      description:
        "We identify high-traffic events or hotspots and design a tailored campaign to maximize your brand's local impact.",
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Fleet Prep",
      description:
        "A dedicated fleet of branded bikes and trained riders are mobilized to create a dynamic, high-visibility presence.",
    },
    {
      icon: <Bike className="h-8 w-8 text-primary" />,
      title: "High-Impact Swarm",
      description:
        "Our swarm deployment delivers intense, focused brand exposure that captures attention and drives engagement.",
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Engagement Reporting",
      description:
        "We provide transparent data on visibility hours, audience interactions, and social buzz generated to prove campaign ROI.",
    },
  ],
};

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};

const HowMovrrWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative w-full bg-background py-32 md:py-40 overflow-hidden border-t-2 border-border"
    >
      {/* OUTFRONT-style full-width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* OUTFRONT-style header */}
          <div className="mb-20">
            <div className="inline-block border-b-2 border-primary pb-2 mb-6">
              <span className="text-xs font-bold text-foreground uppercase tracking-[0.15em]">
                How It Works
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground tracking-tight max-w-4xl leading-[1.1] mb-6">
              A Smarter Way to Amplify Your Brand
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              Movrr connects brands with active riders, delivering authentic,
              trackable advertising that reaches audiences where they live,
              work, and move — beyond traditional billboards.
            </p>
          </div>

          <div className="max-w-[1400px] mx-auto">
            <Tabs defaultValue="destination" className="w-full">
              {/* OUTFRONT-style tabs - industrial */}
              <TabsList className="grid w-full grid-cols-2 max-w-lg h-14 border-2 border-border bg-card mb-12">
                <TabsTrigger
                  value="destination"
                  className="h-full text-sm font-bold uppercase tracking-[0.1em] data-[state=active]:bg-background data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none transition-all"
                >
                  Destination Ride
                </TabsTrigger>
                <TabsTrigger
                  value="swarm"
                  className="h-full text-sm font-bold uppercase tracking-[0.1em] data-[state=active]:bg-background data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none transition-all"
                >
                  Swarm Campaign
                </TabsTrigger>
              </TabsList>

              {/* OUTFRONT-style process flow - strong borders */}
              <TabsContent value="destination" className="mt-0">
                <div className="border-2 border-border">
                  {processSteps.destination.map((step, index) => (
                    <motion.div
                      key={step.title}
                      className={`bg-background p-10 lg:p-12 border-b-2 border-border last:border-b-0 group hover:bg-card/30 transition-colors duration-200`}
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: index * 0.1 }}
                      variants={cardVariants}
                    >
                      <div className="grid grid-cols-12 gap-8 items-start">
                        {/* Step number - OUTFRONT style */}
                        <div className="col-span-1">
                          <div className="w-16 h-16 border-2 border-primary bg-primary/5 flex items-center justify-center">
                            <span className="text-2xl font-black text-primary">
                              {index + 1}
                            </span>
                          </div>
                        </div>
                        {/* Icon */}
                        <div className="col-span-1">
                          <div className="w-12 h-12 border-2 border-primary/30 bg-primary/5 flex items-center justify-center">
                            {step.icon}
                          </div>
                        </div>
                        {/* Content */}
                        <div className="col-span-10">
                          <h3 className="text-3xl font-black tracking-tight mb-4">
                            {step.title}
                          </h3>
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="swarm" className="mt-0">
                <div className="border-2 border-border">
                  {processSteps.swarm.map((step, idx) => (
                    <motion.div
                      key={idx}
                      className={`bg-background p-10 lg:p-12 border-b-2 border-border last:border-b-0 group hover:bg-card/30 transition-colors duration-200`}
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: idx * 0.1 }}
                      variants={cardVariants}
                    >
                      <div className="grid grid-cols-12 gap-8 items-start">
                        {/* Step number - OUTFRONT style */}
                        <div className="col-span-1">
                          <div className="w-16 h-16 border-2 border-primary bg-primary/5 flex items-center justify-center">
                            <span className="text-2xl font-black text-primary">
                              {idx + 1}
                            </span>
                          </div>
                        </div>
                        {/* Icon */}
                        <div className="col-span-1">
                          <div className="w-12 h-12 border-2 border-primary/30 bg-primary/5 flex items-center justify-center">
                            {step.icon}
                          </div>
                        </div>
                        {/* Content */}
                        <div className="col-span-10">
                          <h3 className="text-3xl font-black tracking-tight mb-4">
                            {step.title}
                          </h3>
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowMovrrWorks;
