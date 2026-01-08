"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Target, Users } from "lucide-react";

const MissionVision = () => {
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
    <section ref={ref} className="w-full py-32 md:py-40 bg-background border-b-2 border-border">
      {/* OUTFRONT-style full-width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
            className="grid md:grid-cols-3 gap-px bg-border"
        >
          <motion.div
            variants={itemVariants}
              className="bg-background p-10 lg:p-12 border-r border-border last:border-r-0"
            >
              <div className="w-14 h-14 border-2 border-primary/30 bg-primary/5 flex items-center justify-center mb-8">
                <Leaf className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-3xl font-black tracking-tight mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
              To transform city movement into a smarter media channel that
              connects brands with urban audiences through dynamic, measurable,
              and hyperlocal advertising delivered by everyday cyclists.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
              className="bg-background p-10 lg:p-12 border-r border-border last:border-r-0"
            >
              <div className="w-14 h-14 border-2 border-primary/30 bg-primary/5 flex items-center justify-center mb-8">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-3xl font-black tracking-tight mb-6">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
              A world where every bike ride powers brand awareness, where riders
              earn through motion, and where outdoor advertising becomes
              responsive, intelligent, and visible where it matters most.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
              className="bg-background p-10 lg:p-12 border-r border-border last:border-r-0"
            >
              <div className="w-14 h-14 border-2 border-primary/30 bg-primary/5 flex items-center justify-center mb-8">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-3xl font-black tracking-tight mb-6">Our Values</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
              Innovation, transparency, rider empowerment, hyperlocal relevance,
              and measurable brand performance guide everything we build at
              Movrr.
            </p>
          </motion.div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
