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
import { Card, CardContent } from "@/components/ui/card";

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
        "I was already commuting by bike every day, so becoming an Movrr rider was a no-brainer. I earn an extra $400-500 per month just by taking my usual routes, plus I get to represent brands I actually use and believe in.",
      name: "Alex T.",
      location: "New York City",
      riding_since: "2021",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      quote:
        "The flexibility is what I love most. As a student, my schedule changes every semester, and Movrr makes it easy to adjust my riding hours. The app is super intuitive, and getting paid weekly is great for my budget.",
      name: "Maya K.",
      location: "Chicago",
      riding_since: "2022",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      quote:
        "I started riding with Movrr to supplement my freelance income, but I've gotten so much more out of it. The rider community is amazing, and I've made great connections. Plus, I'm in the best shape of my life!",
      name: "Carlos R.",
      location: "San Francisco",
      riding_since: "2021",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      quote:
        "As someone who cares deeply about the environment, I love that I can earn money while promoting sustainable advertising. The safety training was comprehensive, and I always feel supported by the Movrr team.",
      name: "Zoe L.",
      location: "Boston",
      riding_since: "2023",
      image: "/placeholder.svg?height=200&width=200",
    },
  ];

  return (
    <section ref={ref} className="w-full py-12 md:py-24">
      <div className="container px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-heading mb-4"
          >
            Hear From Our Riders
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground"
          >
            Real stories from people who have transformed their daily rides into
            income
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
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 pl-4"
                >
                  <Card className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <Quote className="h-8 w-8 text-primary/40 mb-4" />
                      <p className="text-muted-foreground mb-6 italic">
                        {testimonial.quote}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="relative h-12 w-12 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.location} • Riding since{" "}
                            {testimonial.riding_since}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default RiderTestimonials;
