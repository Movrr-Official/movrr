"use client";

import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { motion } from "framer-motion";

import { magnetic } from "@/lib/animations";
import { MagneticButton } from "@/components/ui/magnetic-button";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
    },
  },
};

const iconVariants = {
  hidden: { scale: 0.5 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
};

const textVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 100,
    },
  }),
};

export default function UnauthorizedPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex flex-col items-center justify-center bg-muted/30 px-4 py-24"
    >
      {/* Main Card */}
      <motion.div
        variants={cardVariants}
        className="relative p-8 sm:p-10 max-w-xl w-full overflow-hidden"
      >
        {/* Icon */}
        <motion.div
          variants={iconVariants}
          whileHover="hover"
          className="flex items-center justify-center w-20 h-20 rounded-2xl bg-red-50/80 mb-6 mx-auto border border-red-100/50 shadow-inner"
        >
          {/* <AlertCircle className="w-10 h-10 text-red-500" strokeWidth={2.2} /> */}
          <svg
            className="w-10 h-10 text-red-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            strokeLinecap="round"
          >
            <motion.circle
              cx="12"
              cy="12"
              r="10"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.5 9.5l5 5m0-5l-5 5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </svg>
        </motion.div>

        {/* Content */}
        <div className="text-center space-y-4">
          <motion.h1
            custom={0.4}
            variants={textVariants}
            className="text-4xl font-bold tracking-tight"
          >
            Access Restricted
          </motion.h1>

          <motion.p
            custom={0.6}
            variants={textVariants}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            {`You don't have permission to access this page. Please contact your
            administrator if you believe this is an error.`}
          </motion.p>

          <motion.div
            custom={0.8}
            variants={textVariants}
            className="pt-4 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <motion.div
              variants={magnetic}
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/">
                <MagneticButton size="xl" className="rounded-full">
                  <Home className="w-5 h-5" />
                  Return Home
                </MagneticButton>
              </Link>
            </motion.div>

            <motion.div
              variants={magnetic}
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/contact" className="group">
                <MagneticButton
                  variant="outline"
                  size="xl"
                  className="rounded-full"
                >
                  Contact Support
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </MagneticButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Additional help text */}
      <motion.div
        custom={1}
        variants={textVariants}
        className="mt-8 text-center text-gray-500 text-sm max-w-md"
      >
        Need immediate assistance? Call our support team at 0612345678
      </motion.div>
    </motion.div>
  );
}
