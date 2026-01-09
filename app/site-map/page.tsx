"use client";

import {
  Building2,
  Scale,
  Map,
  Link as LinkIcon,
  ExternalLink,
  FileText,
} from "lucide-react";
import Link from "next/link";

const siteStructure = [
  {
    category: "Core Pages",
    icon: Map,
    pages: [
      { name: "Home", path: "/" },
      { name: "Riders", path: "/riders" },
      { name: "Companies", path: "/companies" },
      { name: "How It Works", path: "/how-it-works" },
    ],
  },
  {
    category: "Business",
    icon: Building2,
    pages: [
      { name: "About", path: "/about" },
      { name: "Pricing", path: "/pricing" },
      { name: "Contact", path: "/contact" },
      { name: "Blog", path: "/blog" },
      { name: "Careers", path: "/careers" },
    ],
  },
  {
    category: "Legal",
    icon: Scale,
    pages: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Cookie Policy", path: "/cookies" },
    ],
  },
  {
    category: "Resources",
    icon: FileText,
    pages: [{ name: "Sitemap", path: "/site-map" }],
  },
];

export default function SitemapPage() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 py-16 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Movrr Sitemap</h1>
          <p className="text-lg text-muted-foreground/90">
            {`Explore our website's structure and easily navigate to key pages.`}
          </p>
        </header>

        {/* Sitemap */}
        <nav
          aria-label="Sitemap"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {siteStructure.map(({ category, icon: Icon, pages }) => (
            <section key={category} aria-labelledby={`sitemap-${category}`}>
              <div>
                <Icon className="h-5 w-5 text-gray-600" />
                <h2
                  id={`sitemap-${category}`}
                  className="font-semibold text-lg mb-4"
                >
                  {category}
                </h2>
              </div>
              <ul className="space-y-2">
                {pages.map(({ name, path }) => (
                  <li key={path}>
                    <Link
                      href={path}
                      className="flex items-center text-blue-500 hover:text-blue-700 hover:underline"
                    >
                      <LinkIcon className="h-4 w-4 text-gray-400 mr-3" />
                      <span>{name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>

        {/* SEO Footer */}
        <footer className="mt-16 text-center text-sm text-gray-500">
          <p className="mb-4">
            This sitemap helps users and search engines discover all pages on
            our site.
          </p>
          <Link
            href="/sitemap.xml"
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            View XML Sitemap for search engines
          </Link>
        </footer>
      </div>
    </section>
  );
}
