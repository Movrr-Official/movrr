"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const useCases = [
  {
    title: "Event Domination",
    model: "Swarm Campaign",
    description:
      "Deploy a fleet to surround a conference, festival, or sporting event, creating an unmissable brand moment.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Hyperlocal Conquest",
    model: "Destination Ride",
    description:
      "Launch a new store or service by building sustained brand presence in key neighborhoods, day after day.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Campus Takeover",
    model: "Swarm or Destination",
    description:
      "Engage students directly with targeted campaigns around universities for recruitment or promotions.",
    image: "/placeholder.svg?height=400&width=600",
  },
];

const UseCases = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="w-full py-32 md:py-40 bg-background border-b-2 border-border"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* OUTFRONT-style full-width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20">
            <div className="inline-block border-b-2 border-primary pb-2 mb-6">
              <span className="text-xs font-bold text-foreground uppercase tracking-[0.15em]">
                Use Cases
              </span>
            </div>
            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-[1.1]"
            >
              From Product Launches to Local Buzz
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
            >
              Our campaign models are flexible tools for your marketing
              objectives. Here&apos;s how you can use them.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {useCases.map((useCase) => (
              <motion.div key={useCase.title} variants={itemVariants}>
                <div className="border-2 border-border bg-card h-full flex flex-col">
                  <div className="relative h-64 border-b-2 border-border">
                    <Image
                      src={useCase.image || "/placeholder.svg"}
                      alt={useCase.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-10 lg:p-12 flex-grow">
                    <h3 className="text-2xl font-black tracking-tight mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-sm font-bold text-primary uppercase tracking-[0.1em] mb-4">
                      {useCase.model}
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default UseCases;
