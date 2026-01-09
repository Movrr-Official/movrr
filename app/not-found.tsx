"use client";

import Link from "next/link";
import { Home, Search, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

import { MagneticButton } from "@/components/ui/magnetic-button";

// Animation variants (reused from your unauthorized page)
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

const helpfulLinks = [
  { href: "/careers", label: "Careers" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/legal/privacy-policy", label: "Privacy Policy" },
];

export default function NotFoundPage() {
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
        {/* Improved Compass Icon */}
        <motion.div
          variants={iconVariants}
          className="flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-50/80 mb-6 mx-auto border border-blue-100/50 shadow-inner"
        >
          <svg
            className="w-10 h-10 text-blue-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Outer circle - draws clockwise */}
            <motion.circle
              cx="12"
              cy="12"
              r="10"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            {/* North/South line - draws from center up then down */}
            <motion.path
              d="M12 2v20"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 1.1 }}
            />

            {/* East/West line - draws from center right then left */}
            <motion.path
              d="M22 12H2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 1.3 }}
            />

            {/* NE/SW diagonal - appears after main lines */}
            <motion.path
              d="M17 7L7 17"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.7 }}
            />

            {/* NW/SE diagonal - appears after main lines */}
            <motion.path
              d="M7 7l10 10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.9 }}
            />
          </svg>
        </motion.div>

        {/* Content */}
        <div className="text-center space-y-4  mb-12">
          <motion.h1
            custom={0.4}
            variants={textVariants}
            className="text-3xl md:text-4xl font-bold tracking-tight"
          >
            Oops! Page Not Found
          </motion.h1>

          <motion.p
            custom={0.6}
            variants={textVariants}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            {`We couldn't find the page you're looking for. It might have been
            moved or doesn't exist.`}
          </motion.p>

          <motion.div
            custom={0.8}
            variants={textVariants}
            className="pt-4 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link href="/">
                <MagneticButton size="xl" className="rounded-full">
                  <Home className="w-5 h-5" />
                  Return Home
                </MagneticButton>
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <MagneticButton
                variant="outline"
                size="xl"
                className="rounded-full group"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Go Back
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Helpful links */}
        <div className="bg-muted/30 rounded-xl p-6 border">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Search className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">
              Looking for something specific?
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {helpfulLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        custom={1}
        variants={textVariants}
        className="mt-8 text-center text-gray-500 text-sm max-w-md"
      >
        Need help?{" "}
        <Link href="/contact" className="text-blue-500 hover:underline">
          Contact our support team
        </Link>
      </motion.div>
    </motion.div>
  );
}
