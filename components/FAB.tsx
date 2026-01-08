"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { MagneticButton } from "./ui/magnetic-button";

type AnimationState = "idle" | "floating";

export function FAB() {
  const [animationState, setAnimationState] = useState<AnimationState>("idle");

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const shouldReduceMotion = useReducedMotion();
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Enhanced intersection observer setup
  useEffect(() => {
    if (!isHomePage) {
      setAnimationState("floating");
      return;
    }

    const heroSection = document.querySelector("[data-hero-section]");
    if (!heroSection) {
      setAnimationState("floating");
      return;
    }

    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && animationState === "idle") {
          // Hero section went out of view - emerge from bottom
          setAnimationState("floating");
        } else if (entry.isIntersecting && animationState === "floating") {
          // Hero section came back into view - slide down and hide
          setAnimationState("idle");
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px",
      }
    );

    observerRef.current.observe(heroSection);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isHomePage, animationState, shouldReduceMotion]);

  const floatingButtonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 100, // Start from below the screen
      filter: shouldReduceMotion ? "blur(0px)" : "blur(4px)",
    },
    visible: (delay: number) => ({
      opacity: 1,
      scale: 1,
      y: 0, // Final position at bottom
      filter: "blur(0px)",
      transition: shouldReduceMotion
        ? { duration: 0.3, delay, ease: "easeOut" }
        : {
            type: "spring",
            damping: 25,
            stiffness: 300,
            delay,
            duration: 0.8,
          },
    }),
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 100, // Slide down below the screen
      filter: shouldReduceMotion ? "blur(0px)" : "blur(4px)",
      transition: shouldReduceMotion
        ? { duration: 0.2, ease: "easeIn" }
        : {
            type: "spring",
            damping: 30,
            stiffness: 400,
            duration: 0.5,
          },
    },
    hover: shouldReduceMotion
      ? {}
      : {
          scale: 1.05,
          y: -2,
          filter:
            "drop-shadow(0 20px 25px rgb(0 0 0 / 0.15)) drop-shadow(0 8px 10px rgb(0 0 0 / 0.1))",
          transition: {
            type: "spring",
            damping: 15,
            stiffness: 400,
          },
        },
  };

  return (
    <>
      {/* Floating Buttons - Emerge from bottom */}
      <AnimatePresence>
        {animationState === "floating" && (
          <motion.div
            key="floating-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.2 : 0.3,
              ease: "easeInOut",
            }}
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-3"
            role="group"
            aria-label="Floating action buttons"
          >
            {/* Become a Partner Button */}
            <motion.div
              custom={0.1}
              variants={floatingButtonVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Link href="/companies" className="group">
                <MagneticButton
                  size="xl"
                  className="w-full text-sm font-bold rounded-full border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.1em] shadow-lg"
                  aria-label="Become a Partner - Learn about our advertising solutions"
                  style={{
                    filter:
                      "drop-shadow(0 1px 2px rgb(0 0 0 / 0.06)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.04))",
                  }}
                >
                  <span className="hidden sm:inline">Become a Partner</span>
                  <span className="sm:hidden">Advertise</span>
                  <span className="ml-2 inline-flex items-center justify-center h-6 w-6 rounded-full bg-background group-hover:translate-x-1 transition-all duration-300 flex-shrink-0">
                    <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:rotate-45" />
                  </span>
                </MagneticButton>
              </Link>
            </motion.div>

            {/* Join as a Rider Button - OUTFRONT style */}
            <motion.div
              custom={0.2}
              variants={floatingButtonVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Link href="/riders">
                <MagneticButton
                  variant="outline"
                  size="xl"
                  className="w-full text-sm font-bold rounded-full border-2 border-background bg-background hover:bg-foreground hover:text-background uppercase tracking-[0.1em]"
                  aria-label="Join as a Rider - Join our network of bicycle advertisers"
                  style={{
                    filter:
                      "drop-shadow(0 1px 2px rgb(0 0 0 / 0.06)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.04))",
                  }}
                >
                  <Users className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">Join as a Rider</span>
                  <span className="sm:hidden">Join Us</span>
                </MagneticButton>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
