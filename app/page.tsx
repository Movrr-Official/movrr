import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <Navbar />

      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              NextUI Template
            </span>
          </h1>
          <p className="mt-6 text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            A minimal, starter template with TypeScript, Tailwind CSS, and
            Shadcn UI components.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild>
              <Link
                href="/dashboard"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity"
              >
                Get Started
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link
                href="https://github.com/ggg6r34t/nextui-starter-kit"
                target="_blank"
              >
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Modern Architecture",
              description:
                "Built with Next.js App Router, TypeScript, Tailwind CSS, and Shadcn UI components",
              icon: "🚀",
            },
            {
              title: "Authentication Ready",
              description:
                "Pre-configured with Clerk.js for easy auth integration",
              icon: "🔒",
            },
            {
              title: "Database Connected",
              description:
                "Includes Prisma ORM setup for PostgreSQL/MySQL/MongoDB",
              icon: "💾",
            },
            {
              title: "Dark Mode",
              description:
                "Built-in dark mode toggle with system preference detection",
              icon: "🌓",
            },
            {
              title: "UI Components",
              description: "Common components like buttons, cards, and forms",
              icon: "🎨",
            },
            {
              title: "Deployment Ready",
              description: "Optimized for Vercel with proper config files",
              icon: "⚡",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 border border-black/12.5 shadow-xl rounded-2xl border-solid bg-clip-border transition-shadow"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
