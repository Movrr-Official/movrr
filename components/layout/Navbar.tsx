"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Rewards", href: "#rewards" },
  { label: "For brands", href: "#brands" },
  { label: "Impact", href: "#impact" },
  { label: "Safety", href: "#safety" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${
          isScrolled ? "pt-3 lg:pt-4" : "pt-0"
        }`}
      >
        <div className="movrr-shell">
          <nav
            className={`flex items-center justify-between overflow-hidden rounded-3xl border transition-all duration-400 ${
              isScrolled
                ? "h-15 border-movrr-text-inverse/12 bg-movrr-bg-primary/78 px-3 shadow-sm backdrop-blur-xl lg:h-17 lg:px-4"
                : "h-16 border-transparent bg-transparent px-0 shadow-none backdrop-blur-none lg:h-20"
            }`}
          >
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={
                  isScrolled
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
                className={`text-[1.02rem] font-semibold tracking-[-0.03em] ${isScrolled ? "text-movrr-green-text" : "text-movrr-text-inverse"}`}
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
                    : "text-movrr-text-inverse/76 hover:bg-movrr-text-inverse/8 hover:text-movrr-text-inverse"
                }`}
                asChild
              >
                <Link href="https://app.movrr.nl/auth/signin">Sign In</Link>
              </Button>
              <Button
                size="sm"
                className="h-10 rounded-xl border border-movrr-text-inverse/24 bg-movrr-bg-glass px-5 text-sm font-semibold text-movrr-text-brand hover:bg-movrr-bg-elevated"
                asChild
              >
                <Link href="#get-started">Get started</Link>
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 text-movrr-text-inverse transition-colors hover:bg-movrr-text-inverse/10 lg:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-18 z-40 px-4 lg:hidden"
          >
            <div
              className="absolute inset-0 h-screen bg-movrr-bg-backdrop/20"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <nav className="relative overflow-hidden rounded-[1.75rem] border border-movrr-text-inverse/10 bg-movrr-bg-secondary/96 shadow-lg backdrop-blur-xl">
              <div className="space-y-1 px-5 py-5">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-movrr-text-inverse/82 transition-colors hover:bg-movrr-text-inverse/5 hover:text-movrr-text-inverse"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="space-y-2 border-t border-movrr-text-inverse/10 pt-4">
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-movrr-text-inverse/20 bg-transparent text-movrr-text-inverse hover:bg-movrr-text-inverse/10"
                    asChild
                  >
                    <Link href="https://app.movrr.nl/auth/signin">Sign In</Link>
                  </Button>
                  <Button
                    className="w-full rounded-xl bg-movrr-bg-surface text-movrr-text-brand hover:bg-movrr-bg-surface/90"
                    asChild
                  >
                    <Link href="#get-started">Get started</Link>
                  </Button>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
