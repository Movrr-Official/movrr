"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";

import { MapPin, Mail, Phone, Bike } from "lucide-react";
import { CopyButton } from "../shared/CopyButton";
import { HiringBadge } from "../HiringBadge";

// Data for quick links
const platformLinks = [
  { label: "Companies", href: "/companies" },
  { label: "Riders", href: "/riders" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "ROI Calculator", href: "/data-roi" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

// Data for contact info
const contactInfo = [
  { icon: MapPin, text: "The Hague, Netherlands" },
  { icon: Mail, text: "hello@movrr.nl" },
  { icon: Phone, text: "+31 20 123 4567" },
];

// Data for social media links
const socialLinks = [
  { icon: FiFacebook, href: "#" },
  { icon: FiInstagram, href: "#" },
  { icon: RiTwitterXFill, href: "#" },
  { icon: FiLinkedin, href: "#" },
  { icon: FiYoutube, href: "#" },
];

// Data for legal links
const legalLinks = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms of Service", href: "/legal/terms-of-service" },
  { label: "Cookie Policy", href: "/legal/cookie-policy" },
  { label: "Sitemap", href: "/sitemap" },
];

// Sub-components - OUTFRONT style
const CompanyInfo = () => (
  <div className="md:col-span-2 space-y-6">
    <div className="flex items-center space-x-4 mb-8">
      <div className="w-14 h-14 border-2 border-primary/30 bg-primary/5 flex items-center justify-center">
        <Bike className="h-7 w-7 text-primary" />
      </div>
      <div>
        <div className="text-3xl md:text-4xl font-black text-white tracking-tight">
          MOVRR
        </div>
        <div className="text-white/70 text-sm font-bold uppercase tracking-[0.1em] mt-1">
          Bike Advertising Platform
        </div>
      </div>
    </div>

    <p className="text-white/70 mb-8 max-w-md leading-relaxed text-base">
      Revolutionizing urban advertising through sustainable bicycle ads that
      benefit companies, riders, and cities.
    </p>

    <div className="flex items-center space-x-3">
      <Badge
        variant="outline"
        className="border-2 border-primary/30 text-primary bg-primary/10 px-3 py-1"
      >
        🌱 Sustainable Advertising
      </Badge>
    </div>
  </div>
);

const QuickLinks = () => (
  <div>
    <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-[0.15em] pb-2 border-b-2 border-white/20">
      Platform
    </h3>
    <ul className="space-y-3 text-white/70">
      {platformLinks.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className="hover:text-white transition-colors uppercase tracking-[0.1em] text-sm font-medium"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const CompanyLinks = () => (
  <div>
    <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-[0.15em] pb-2 border-b-2 border-white/20">
      Company
    </h3>
    <ul className="space-y-3 text-white/70">
      {companyLinks.map((link, index) => (
        <li
          key={index}
          className={link.label === "Careers" ? "flex items-center gap-2" : ""}
        >
          <Link
            href={link.href}
            className="hover:text-white transition-colors uppercase tracking-[0.1em] text-sm font-medium"
          >
            {link.label}
          </Link>
          {link.label === "Careers" && <HiringBadge />}
        </li>
      ))}
    </ul>
  </div>
);

const ContactInfo = () => (
  <div>
    <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-[0.15em] pb-2 border-b-2 border-white/20">
      Contact
    </h3>
    <ul className="space-y-4 text-white/70 mb-8">
      {contactInfo.map((contact, index) => {
        const Icon = contact.icon;
        const isCopyable = contact.icon === Mail || contact.icon === Phone;

        return (
          <li key={index} className="flex items-center space-x-3">
            <div className="w-8 h-8 border-2 border-primary/30 bg-primary/5 flex items-center justify-center flex-shrink-0">
              <Icon className="h-4 w-4 text-primary" />
            </div>
            <span className="text-sm font-medium">{contact.text}</span>
            {isCopyable && <CopyButton value={contact.text} />}
          </li>
        );
      })}
    </ul>

    <div className="flex space-x-3">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <Link
            key={index}
            href={social.href}
            className="w-10 h-10 border-2 border-white/20 bg-white/5 hover:bg-primary/20 hover:border-primary/30 flex items-center justify-center transition-colors"
          >
            <Icon className="h-4 w-4 text-white" />
          </Link>
        );
      })}
    </div>
  </div>
);

const FooterBottom = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center text-white/70 text-sm uppercase tracking-[0.1em] font-medium">
      <div className="mb-4 md:mb-0">
        &copy; {new Date().getFullYear()}{" "}
        <span className="mr-5 md:mr-10 font-black">MOVRR</span>
        {legalLinks.map((link, index) => (
          <span key={link.href}>
            {index > 0 && " | "}
            <Link
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          </span>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <span>Made with 💚 in The Hague</span>
        <Badge
          variant="outline"
          className="border-2 border-primary/30 text-primary bg-primary/10 text-xs px-3 py-1"
        >
          Carbon Neutral
        </Badge>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-secondary text-white border-t-2 border-white/10">
      {/* OUTFRONT-style full-width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1400px] mx-auto py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-8 lg:gap-12 pb-16 border-b-2 border-white/10">
            <CompanyInfo />

            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
              <CompanyLinks />
              <QuickLinks />
              <ContactInfo />
            </div>
          </div>

          <div className="pt-8">
            <FooterBottom />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
