"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const topics = [
  {
    category: "Getting started",
    faqs: [
      {
        q: "What is MOVRR?",
        a: "MOVRR is a movement-based rewards platform. You earn rewards every time you ride, by bike, scooter, or on foot, within supported city zones. Brands fund the rewards in exchange for verified reach among active urban commuters.",
      },
      {
        q: "How do I join MOVRR?",
        a: "Download the MOVRR app and create an account. You'll need to verify your identity and connect a payment method to receive rewards. Once verified, start riding and earn from your first kilometre.",
      },
      {
        q: "Which cities is MOVRR available in?",
        a: "MOVRR is launching across Europe, starting with Dublin and Amsterdam. We'll announce new cities via the app and our newsletter before they go live.",
      },
    ],
  },
  {
    category: "Earning rewards",
    faqs: [
      {
        q: "How are rewards calculated?",
        a: "Rewards are earned per verified kilometre. The base rate applies to all eligible movement. Sponsored campaigns, when an active brand campaign covers your route zone, pay at an elevated rate. Community rides organised by approved riders may also carry a premium.",
      },
      {
        q: "What counts as a verified kilometre?",
        a: "Movement is verified through GPS tracking in the MOVRR app. Rides must meet minimum speed and duration thresholds to qualify. Stationary time, trips below walking pace, and trips outside eligible zones do not count toward your total.",
      },
      {
        q: "When do rewards hit my account?",
        a: "Pending rewards appear in your balance at the end of each ride. Once a campaign period closes, rewards are confirmed and become available for redemption. This typically takes 24–72 hours.",
      },
      {
        q: "Is there a minimum to cash out?",
        a: "Yes. The minimum redemption threshold is €5.00. Rewards below this amount accumulate in your account until the threshold is reached.",
      },
    ],
  },
  {
    category: "Community rides",
    faqs: [
      {
        q: "What are community rides?",
        a: "Community rides are group routes organised by approved MOVRR riders. They follow the same verification rules as solo rides, and can carry elevated reward rates when a brand campaign is active on the route. Some community rides are open enrolment; others are invite-only.",
      },
      {
        q: "How do I become an approved rider?",
        a: "Approved rider status is open to riders who have completed a minimum number of verified rides, maintained a good account standing, and passed a brief review. Apply via the Community section of the app once you meet the criteria.",
      },
      {
        q: "Can I join a community ride without being approved?",
        a: "Yes. Any rider can join a community ride as a participant. Approved status is only required to create and lead rides.",
      },
    ],
  },
  {
    category: "Account and privacy",
    faqs: [
      {
        q: "What data does MOVRR collect?",
        a: "We collect movement data (GPS traces), account information, and interaction data necessary to verify rides and calculate rewards. Movement data is processed in aggregate for brand reporting. Individual location histories are never shared with brands. See our Privacy Policy for the full picture.",
      },
      {
        q: "Can I delete my account?",
        a: "Yes. You can request account deletion from the Settings menu in the app. We'll process the request within 30 days and confirm by email. Any unclaimed rewards above the minimum threshold will be paid out before deletion.",
      },
      {
        q: "How do I update my payment details?",
        a: "Go to Settings → Payment in the app. You can add, remove, or set a default payment method at any time. Changes take effect from the next payout cycle.",
      },
    ],
  },
  {
    category: "For brands",
    faqs: [
      {
        q: "How does MOVRR work for brands?",
        a: "Brands fund reward campaigns tied to specific routes, zones, or behaviours. When a rider earns rewards under your campaign, you pay per verified engagement, not impressions. Every interaction is backed by real movement data. Visit the Brands page or contact us at brands@movrr.nl to learn more.",
      },
      {
        q: "What reporting do brands receive?",
        a: "Brands receive campaign dashboards showing verified reach, route coverage, and engagement by zone. Reports are available in real-time during active campaigns and as full summaries post-campaign.",
      },
    ],
  },
];

function Accordion({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-movrr-border-soft last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-6 py-6 text-left transition-opacity duration-150 hover:opacity-70"
      >
        <span className="text-sm font-medium text-movrr-text-brand">{faq.q}</span>
        {open ? (
          <Minus className="mt-0.5 h-3.5 w-3.5 shrink-0 text-movrr-text-brand/40" />
        ) : (
          <Plus className="mt-0.5 h-3.5 w-3.5 shrink-0 text-movrr-text-brand/40" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-8 text-sm leading-relaxed text-movrr-text-brand/50">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function HelpTopics() {
  return (
    <section className="bg-movrr-bg-canvas py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <div className="grid grid-cols-1 gap-0 lg:grid-cols-[280px_1fr] lg:gap-20">

          {/* Sticky topic index */}
          <div className="mb-16 lg:mb-0">
            <nav className="lg:sticky lg:top-28">
              <p className="mb-6 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-brand/35">
                Topics
              </p>
              <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-0 lg:space-y-0 lg:divide-y lg:divide-movrr-border-soft lg:border-y lg:border-movrr-border-soft">
                {topics.map((topic) => (
                  <li key={topic.category}>
                    <a
                      href={`#${topic.category.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block text-sm text-movrr-text-brand/40 transition-colors duration-150 hover:text-movrr-text-brand lg:py-3.5"
                    >
                      {topic.category}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-10 hidden text-[0.75rem] leading-relaxed text-movrr-text-brand/30 lg:block">
                Can&apos;t find what you need?{" "}
                <a
                  href="mailto:hello@movrr.nl"
                  className="text-movrr-text-brand/50 underline underline-offset-2 transition-colors duration-150 hover:text-movrr-text-brand"
                >
                  Contact us.
                </a>
              </p>
            </nav>
          </div>

          {/* FAQ sections */}
          <div className="space-y-20">
            {topics.map((topic) => (
              <div
                key={topic.category}
                id={topic.category.toLowerCase().replace(/\s+/g, "-")}
                className="scroll-mt-28"
              >
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-8 text-[clamp(1.25rem,2vw,1.75rem)] font-semibold leading-tight tracking-[-0.03em] text-movrr-text-brand"
                >
                  {topic.category}
                </motion.h2>
                <div className="border-t border-movrr-border-soft">
                  {topic.faqs.map((faq, index) => (
                    <Accordion key={index} faq={faq} index={index} />
                  ))}
                </div>
              </div>
            ))}

            {/* Mobile contact note */}
            <p className="text-sm text-movrr-text-brand/40 lg:hidden">
              Can&apos;t find what you need?{" "}
              <a
                href="mailto:hello@movrr.nl"
                className="text-movrr-text-brand/60 underline underline-offset-2 transition-colors duration-150 hover:text-movrr-text-brand"
              >
                Contact us.
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
