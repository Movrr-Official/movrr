"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const footerLinks = {
  platform: {
    title: "Platform",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Rewards", href: "#rewards" },
      { label: "For brands", href: "#brands" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Press", href: "#press" },
      { label: "Contact", href: "#contact" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Help center", href: "#help" },
      { label: "Documentation", href: "#docs" },
      { label: "Partners", href: "#partners" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
      { label: "Cookies", href: "#cookies" },
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

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-movrr-bg-ink border-t border-movrr-text-inverse/10"
    >
      {/* CTA Strip */}
      <div className="border-b border-movrr-text-inverse/10">
        <div className="px-6 lg:px-12 py-14 lg:py-18">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7 lg:gap-10">
            <div className="max-w-xl">
              <h3 className="text-2xl lg:text-3xl font-semibold text-movrr-text-inverse mb-2">
                Ready to move with MOVRR?
              </h3>
              <p className="text-movrr-text-inverse/62 leading-relaxed">
                Join the movement-based rewards ecosystem today.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                className="bg-movrr-bg-glass font-semibold text-movrr-text-brand hover:bg-movrr-bg-elevated px-6 h-11 text-sm group rounded-lg border border-movrr-text-inverse/30"
                asChild
              >
                <Link href="#get-started">
                  Start earning
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-movrr-text-inverse/20 text-movrr-text-inverse hover:bg-movrr-text-inverse/10 font-medium px-6 h-11 text-sm rounded-lg bg-transparent"
                asChild
              >
                <Link href="#contact">Talk to sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="px-6 lg:px-12 pt-14 pb-9 lg:pt-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 pb-12 lg:pb-24 border-b border-movrr-text-inverse/10">
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
              Turning movement into value. A rewards platform connecting
              verified real-world movement with measurable impact.
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
