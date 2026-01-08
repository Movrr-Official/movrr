"use client";

import type { Variants } from "framer-motion";

// Enhanced staggered container with smoother timing
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
      ease: "easeOut",
    },
  },
};

// Improved stagger item with better easing
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth feel
    },
  },
};

// Enhanced fade with blur effect
export const fadeIn: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Improved fade up with better timing
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 32,
    filter: "blur(4px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    filter: "blur(4px)",
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Enhanced slide up with spring physics
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1,
    },
  },
};

// Improved slide from left with better easing
export const slideInFromLeft: Variants = {
  initial: {
    x: -120,
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Enhanced slide from right
export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 120, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Modern scale animation with rotation
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -2 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

// Enhanced scale in with better timing
export const scaleIn: Variants = {
  initial: {
    scale: 0.85,
    opacity: 0,
    filter: "blur(4px)",
  },
  animate: {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Modern card hover with multiple effects
export const cardHover: Variants = {
  initial: {
    scale: 1,
    rotateY: 0,
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  hover: {
    scale: 1.03,
    rotateY: 2,
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Enhanced button hover with ripple effect
export const buttonHover = {
  scale: 1.05,
  boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
  transition: {
    duration: 0.25,
    ease: [0.22, 1, 0.36, 1],
  },
};

// Modern page transitions with blur
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.98,
    filter: "blur(8px)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    filter: "blur(8px)",
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// New: Floating animation for elements
export const floating: Variants = {
  initial: {
    y: 0,
    rotate: 0,
  },
  animate: {
    y: [-4, 4, -4],
    rotate: [-1, 1, -1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// New: Magnetic hover effect
export const magnetic: Variants = {
  initial: {
    x: 0,
    y: 0,
  },
  hover: {
    x: 0,
    y: -2,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

// New: Ripple effect animation
export const ripple: Variants = {
  initial: {
    scale: 0,
    opacity: 1,
  },
  animate: {
    scale: 4,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// New: Reveal animation for text
export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    skewY: 5,
  },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// New: Modern drawer animation
export const drawer: Variants = {
  closed: {
    y: "100%",
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
