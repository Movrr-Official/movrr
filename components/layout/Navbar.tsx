"use client";

import React, { useState, useEffect } from "react";
import { Bike, Menu, X, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { MagneticButton } from "../ui/magnetic-button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/companies", label: "Companies" },
    { href: "/riders", label: "Riders" },
    { href: "/contact", label: "Contact" },
  ];

  const navbarVariants = {
    hidden: {
      y: -100,
      transition: {
        y: {
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1],
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      },
    },
    visible: {
      y: 0,
      borderRadius: isScrolled ? "2rem" : "0rem",
      transition: {
        y: {
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1],
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
        borderRadius: { duration: 0.3 },
      },
    },
  };

  return (
    <motion.header
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "top-0 w-full z-40 transition-all ease-in-out duration-300",
        isScrolled
          ? "sticky md:top-4 max-w-(--7xxl) mx-auto bg-background/80 backdrop-blur-md md:backdrop-saturate-200 border-b md:rounded-4xl shadow-sm"
          : "fixed bg-transparent"
      )}
    >
      {/* OUTFRONT-style full-width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1400px] mx-auto flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-10 h-10 border-2 border-primary bg-primary/5 flex items-center justify-center">
                <Bike className="h-6 w-6 text-primary" />
              </div>
            </motion.div>
            <motion.span
              className="font-sans text-2xl font-black tracking-tight"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              MOVRR
            </motion.span>
          </Link>

          {/* Desktop Navigation - OUTFRONT style */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-bold tracking-[0.1em] transition-colors relative group",
                  pathname === link.href
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                )}
              >
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  {link.label}
                </motion.span>
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary" />
                )}
              </Link>
            ))}
            <Badge
              variant="outline"
              className="bg-primary/10 text-primary border-2 border-primary/30 px-3 py-1 rounded-none"
            >
              Pre-Launch
            </Badge>

            {mounted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <MagneticButton
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    const currentTheme = resolvedTheme || theme;
                    const newTheme = currentTheme === "dark" ? "light" : "dark";
                    setTheme(newTheme);
                  }}
                  aria-label="Toggle theme"
                  className="rounded-3xl border-2 border-transparent hover:border-border"
                >
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </MagneticButton>
              </motion.div>
            )}

            <div className="hidden md:flex items-center space-x-4">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <Link href="https://admin.movrr.nl">
                  <MagneticButton
                    size="xl"
                    variant="ghost"
                    className="rounded-full border-2 border-transparent hover:border-border uppercase tracking-[0.1em] font-bold"
                  >
                    Sign In
                  </MagneticButton>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Link href="/contact">
                  <MagneticButton
                    size="xl"
                    className="h-12 px-6 text-sm font-bold rounded-full border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.1em]"
                  >
                    Get Started
                  </MagneticButton>
                </Link>
              </motion.div>
            </div>
          </nav>

          {/* Mobile Menu Button - OUTFRONT style */}
          <div className="flex items-center md:hidden space-x-2">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  const currentTheme = resolvedTheme || theme;
                  const newTheme = currentTheme === "dark" ? "light" : "dark";
                  setTheme(newTheme);
                }}
                aria-label="Toggle theme"
                className="rounded-none border-2 border-transparent hover:border-border"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            )}

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="rounded-none border-2 border-transparent hover:border-border"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - OUTFRONT style */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6 bg-background border-b-2 border-border">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block py-3 text-base font-bold uppercase tracking-[0.1em] transition-colors border-b-2 border-transparent hover:border-primary",
                        pathname === link.href
                          ? "text-primary border-primary"
                          : "text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <div className="flex flex-col space-y-3 pt-6 border-t-2 border-border">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                  >
                    <Link href="https://admin.movrr.nl">
                      <Button
                        variant="ghost"
                        className="w-full rounded-full border-2 border-transparent hover:border-border uppercase tracking-[0.1em] font-bold"
                      >
                        Sign In
                      </Button>
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                  >
                    <Link href="/contact">
                      <Button
                        size="xl"
                        className="w-full h-12 text-sm font-bold rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.1em]"
                      >
                        Get Started
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
