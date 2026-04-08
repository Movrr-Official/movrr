"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MenuToggle } from "@/components/layout/MenuToggle";

// ─── Mobile menu animation variants ────────────────────────────────────────

const overlayVariants = {
  opened: {
    y: "0%",
    transition: {
      delay: 0.05,
      duration: 0.9,
      ease: [0.74, 0, 0.19, 1.02] as const,
    },
  },
  closed: {
    y: "-100%",
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: [0.74, 0, 0.19, 1.02] as const,
    },
  },
};

const navListVariants = {
  opened: { transition: { delayChildren: 0.5, staggerChildren: 0.09 } },
  closed: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 as const },
  },
};

const navItemVariants = {
  opened: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
  closed: {
    y: "115%",
    opacity: 0,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const bottomStripVariants = {
  opened: {
    opacity: 1,
    transition: {
      delay: 0.88,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.15 },
  },
};

// ────────────────────────────────────────────────────────────────────────────

const navItems = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Rewards", href: "/rewards" },
  { label: "Brands", href: "/brands" },
  { label: "Riders", href: "/riders" },
];

export function Navbar({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ top: "var(--movrr-banner-height, 0px)" }}
        className={`fixed inset-x-0 z-50 transition-all duration-400 ${
          isScrolled ? "pt-3 lg:pt-4" : "pt-0"
        }`}
      >
        <div className="movrr-shell">
          <nav
            className={`flex items-center justify-between overflow-hidden rounded-3xl border transition-all duration-400 ${
              isScrolled
                ? `h-15 ${isMobileMenuOpen ? "max-lg:border-transparent max-lg:shadow-none" : "border-movrr-text-inverse/12"} bg-movrr-bg-primary/78 px-3 shadow-sm backdrop-blur-xl lg:h-17 lg:border-movrr-text-inverse/12 lg:shadow-sm lg:px-4`
                : "h-16 border-transparent bg-transparent px-0 shadow-none backdrop-blur-none lg:h-20"
            }`}
          >
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <Image
                src={
                  !isMobileMenuOpen && (isScrolled || variant === "light")
                    ? "/logo/icon-no-bg-green.png"
                    : "/logo/icon-no-bg-white.png"
                }
                alt="MOVRR icon"
                width={30}
                height={30}
                priority
                className="h-[1.7rem] w-[1.7rem] object-contain lg:h-[1.9rem] lg:w-[1.9rem]"
              />
              <span
                className={`text-[1.02rem] font-semibold tracking-[-0.03em] ${
                  isMobileMenuOpen
                    ? "text-movrr-text-inverse"
                    : isScrolled
                      ? "text-movrr-green-text"
                      : variant === "light"
                        ? "text-movrr-text-brand"
                        : "text-movrr-text-inverse"
                }`}
              >
                MOVRR
              </span>
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3.5 py-2 text-[0.92rem] font-medium tracking-[-0.01em] transition-all duration-300 ${
                    isScrolled
                      ? "text-movrr-green-text hover:bg-movrr-green-text/8"
                      : variant === "light"
                        ? "text-movrr-text-brand/60 hover:bg-movrr-text-brand/6 hover:text-movrr-text-brand"
                        : "text-movrr-text-inverse/68 hover:bg-movrr-text-inverse/8 hover:text-movrr-text-inverse"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-2 lg:flex">
              <Button
                variant="ghost"
                size="sm"
                className={`h-10 rounded-xl px-4 text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? "text-movrr-green-text hover:bg-movrr-green-text/8 hover:text-movrr-green-text"
                    : variant === "light"
                      ? "text-movrr-text-brand/60 hover:bg-movrr-text-brand/6 hover:text-movrr-text-brand"
                      : "text-movrr-text-inverse/76 hover:bg-movrr-text-inverse/8 hover:text-movrr-text-inverse"
                }`}
                asChild
              >
                <Link href="https://app.movrr.nl/auth/signin">Sign In</Link>
              </Button>
              <Button
                size="sm"
                className={`h-10 rounded-xl px-5 text-sm font-semibold text-movrr-text-brand hover:bg-movrr-bg-elevated ${
                  !isScrolled && variant === "light"
                    ? "border border-movrr-text-brand/20 bg-transparent"
                    : "border border-movrr-text-inverse/24 bg-movrr-bg-glass"
                }`}
                asChild
              >
                <Link href="#get-started">Get started</Link>
              </Button>
            </div>

            {/* Hamburger / close — mobile only */}
            <motion.div
              animate={isMobileMenuOpen ? "opened" : "closed"}
              initial={false}
              className="lg:hidden"
            >
              <MenuToggle
                toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2.5 transition-colors ${
                  isMobileMenuOpen
                    ? "text-movrr-text-inverse hover:bg-movrr-text-inverse/10"
                    : isScrolled
                      ? "text-movrr-green-text hover:bg-movrr-green-text/8"
                      : variant === "light"
                        ? "text-movrr-text-brand hover:bg-movrr-text-brand/8"
                        : "text-movrr-text-inverse hover:bg-movrr-text-inverse/10"
                }`}
              />
            </motion.div>
          </nav>
        </div>
      </motion.header>

      {/* Full-screen mobile menu — rolls down from above (z-40, beneath navbar) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            className="fixed inset-0 z-40 flex flex-col bg-movrr-bg-primary lg:hidden"
          >
            <div
              className="flex h-full flex-col px-8"
              style={{
                paddingTop: "calc(var(--movrr-banner-height, 0px) + 5.5rem)",
                paddingBottom: "env(safe-area-inset-bottom, 0px)",
              }}
            >
              {/* Primary nav links — each rolls up within a clipped container */}
              <motion.nav
                variants={navListVariants}
                className="flex flex-1 flex-col justify-center gap-0"
              >
                {navItems.map((item) => (
                  <div key={item.href} className="overflow-hidden">
                    <motion.div variants={navItemVariants}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-3 text-[clamp(2.2rem,11vw,3.8rem)] font-semibold leading-none tracking-[-0.04em] text-movrr-text-inverse/75 transition-colors duration-150 hover:text-movrr-text-inverse active:opacity-40"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </motion.nav>

              {/* Bottom strip — Sign in + Get started */}
              <motion.div
                variants={bottomStripVariants}
                className="flex items-center gap-4 border-t border-movrr-text-inverse/10 py-8"
              >
                <Link
                  href="https://app.movrr.nl/auth/signin"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-movrr-text-inverse/40 transition-opacity duration-150 hover:opacity-70"
                >
                  Sign in
                </Link>
                <Link
                  href="#get-started"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="ml-auto inline-flex items-center rounded-full border border-movrr-text-inverse/20 px-5 py-2.5 text-sm font-semibold text-movrr-text-inverse transition-colors duration-150 hover:bg-movrr-text-inverse/10"
                >
                  Get started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
