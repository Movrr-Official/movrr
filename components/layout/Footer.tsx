"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface FooterProps {
  cta?: boolean; // Whether to show the CTA strip
}

const footerLinks = {
  platform: {
    title: "Platform",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Rewards", href: "/#rewards" },
      { label: "Brands", href: "/brands" },
      { label: "Riders", href: "/riders" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Help center", href: "/help" },
      { label: "Documentation", href: "/docs" },
      { label: "Partners", href: "/partners" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/movrr", label: "Twitter" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/movrr",
    label: "LinkedIn",
  },
  { icon: Instagram, href: "https://instagram.com/movrr", label: "Instagram" },
];

export function Footer({ cta = true }: FooterProps) {
  return (
    <footer
      id="contact"
      className="bg-movrr-bg-ink border-t border-movrr-text-inverse/10"
    >
      {/* CTA Strip */}
      {cta && (
        <div className="border-b border-movrr-text-inverse/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16"
            >
              <div>
                <h3 className="text-[clamp(2rem,3.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-inverse">
                  Ready to move with MOVRR?
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-movrr-text-inverse/55">
                  The streets are waiting.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Button
                  className="group h-12 rounded-lg border border-movrr-text-inverse/30 bg-movrr-bg-glass px-7 text-sm font-semibold text-movrr-text-brand hover:bg-movrr-bg-elevated"
                  asChild
                >
                  <Link href="#get-started">
                    Start earning
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:rotate-45" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="h-12 rounded-lg border-movrr-text-inverse/20 bg-transparent px-7 text-sm font-medium text-movrr-text-inverse hover:bg-movrr-text-inverse/10 hover:text-movrr-green-text transition-colors"
                  asChild
                >
                  <Link href="#contact">Talk to sales</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Main Footer Content */}
      <div className="px-6 lg:px-12 pt-14 pb-9 lg:pt-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 pb-16 lg:pb-42 border-b border-movrr-text-inverse/10">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/logo/icon-no-bg-white.png"
                alt="MOVRR icon"
                width={30}
                height={30}
                className="h-[1.7rem] w-[1.7rem] object-contain"
              />
              <span className="text-lg font-semibold text-movrr-text-inverse tracking-tight">
                MOVRR
              </span>
            </Link>
            <p className="text-sm text-movrr-text-inverse/60 leading-relaxed max-w-xs mb-7">
              Movement that earns. Campaigns that perform. Built for the city.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-movrr-text-inverse/5 flex items-center justify-center hover:bg-movrr-text-inverse/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-movrr-text-inverse/60" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-semibold text-movrr-text-inverse/80 uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-movrr-text-inverse/50 hover:text-movrr-text-inverse transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-7 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-movrr-text-inverse/40">
            &copy; {new Date().getFullYear()} MOVRR B.V. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="#accessibility"
              className="text-xs text-movrr-text-inverse/40 hover:text-movrr-text-inverse/60 transition-colors"
            >
              Accessibility
            </Link>
            <Link
              href="#sitemap"
              className="text-xs text-movrr-text-inverse/40 hover:text-movrr-text-inverse/60 transition-colors"
            >
              Sitemap
            </Link>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-movrr-success" />
              <span className="text-xs text-movrr-text-inverse/40">
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
