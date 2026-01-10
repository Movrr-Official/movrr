"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const RiderTestimonials = () => {
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

  const testimonials = [
    {
      quote:
        "I was already commuting by bike every day, so becoming an Movrr rider was a no-brainer. I earn Movrr Points for verified campaign rides just by taking my usual routes, plus I get to represent brands I actually use and believe in.",
      name: "Alex T.",
      location: "New York City",
      riding_since: "2021",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      quote:
        "The flexibility is what I love most. As a student, my schedule changes every semester, and Movrr makes it easy to adjust my riding schedule. The app is super intuitive, and redeeming Movrr Points for rewards is straightforward.",
      name: "Maya K.",
      location: "Chicago",
      riding_since: "2022",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      quote:
        "I started riding with Movrr to earn Verified Impact Rewards, but I've gotten so much more out of it. The rider community is amazing, and I've made great connections. Plus, I'm in the best shape of my life!",
      name: "Carlos R.",
      location: "San Francisco",
      riding_since: "2021",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      quote:
        "As someone who cares deeply about the environment, I love that I can earn Movrr Points while promoting sustainable advertising. The safety training was comprehensive, and I always feel supported by the Movrr team.",
      name: "Zoe L.",
      location: "Boston",
      riding_since: "2023",
      image: "/placeholder.svg?height=200&width=200",
    },
  ];

  return (
    <section
      ref={ref}
      className="w-full py-32 md:py-40 bg-background border-b-2 border-border"
    >
      {/* OUTFRONT-style full-width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-20"
          >
            <div className="inline-block border-b-2 border-primary pb-2 mb-6">
              <span className="text-xs font-bold text-foreground uppercase tracking-[0.15em]">
                Testimonials
              </span>
            </div>
            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-[1.1]"
            >
              Hear From Our Riders
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            >
              Real stories from people who have transformed their daily rides into
              Verified Impact Rewards
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="border-2 border-border bg-card p-6 lg:p-8 h-full">
                      <div className="w-10 h-10 border-2 border-primary/30 bg-primary/5 flex items-center justify-center mb-6">
                        <Quote className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-base text-muted-foreground mb-6 italic leading-relaxed">
                        {testimonial.quote}
                      </p>
                      <div className="flex items-center gap-4 pt-6 border-t-2 border-border">
                        <div className="relative w-12 h-12 border-2 border-border bg-muted/50 flex items-center justify-center flex-shrink-0 overflow-hidden">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-black text-foreground">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.location} • Riding since{" "}
                            {testimonial.riding_since}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 gap-2">
                <CarouselPrevious className="rounded-none border-2 border-border" />
                <CarouselNext className="rounded-none border-2 border-border" />
              </div>
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RiderTestimonials;
