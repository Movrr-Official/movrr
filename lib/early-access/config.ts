import type { EarlyAccessAudience, EarlyAccessConfig } from "./types";

export const earlyAccessConfigs: Record<EarlyAccessAudience, EarlyAccessConfig> = {
  riders: {
    audience: "riders",
    badge: "Early access",
    variants: [
      {
        id: "riders-a",
        headline: "MOVRR is launching in Dublin and Amsterdam. Join the waitlist.",
        cta: "Join waitlist",
        href: "#get-started",
      },
      {
        id: "riders-b",
        headline: "Earn on every kilometre. Early rider access now open.",
        cta: "Get early access",
        href: "#get-started",
      },
    ],
    reappearAfterDays: 7,
    campaignId: "launch-2025-q2",
  },

  brands: {
    audience: "brands",
    badge: "Limited availability",
    variants: [
      {
        id: "brands-a",
        headline: "First-round brand partnerships — a small number of slots remaining.",
        cta: "Reserve a spot",
        href: "mailto:hello@movrr.nl",
      },
    ],
    reappearAfterDays: 14,
    campaignId: "brand-launch-2025-q2",
  },

  partners: {
    audience: "partners",
    badge: "Now open",
    variants: [
      {
        id: "partners-a",
        headline: "Technical and commercial integrations are available to apply for.",
        cta: "Talk to us",
        href: "mailto:partners@movrr.nl",
      },
    ],
    campaignId: "partner-launch-2025-q2",
  },
};

export const defaultAudienceConfig = earlyAccessConfigs.riders;
