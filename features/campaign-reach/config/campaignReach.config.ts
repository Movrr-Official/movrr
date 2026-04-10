// ─── Campaign Reach Preview — Configuration ───────────────────────────────────
// All assumptions, city definitions, and scale tiers live here.
// No magic numbers exist in components or services.

import type {
  CityData,
  CampaignScaleTier,
  ReachAssumptions,
  FeatureFlags,
} from "../types/campaignReach.types";

// ── Feature flag ──────────────────────────────────────────────────────────────
//
// Set campaignReachPreviewEnabled to true to expose the feature in the Brands page.
//
// Activation checklist:
//   1. Set campaignReachPreviewEnabled = true below
//   2. Replace placeholder city data with real analytics (activeRiders, avgDailyKm)
//   3. Uncomment the integration in components/brands/BrandsHero.tsx:
//
//      import { CampaignReachPreview, FEATURE_FLAGS } from "@/app/features/campaign-reach";
//
//      {FEATURE_FLAGS.campaignReachPreviewEnabled && (
//        <CampaignReachPreview />
//      )}
//
export const FEATURE_FLAGS: FeatureFlags = {
  campaignReachPreviewEnabled: false,
};

// ── City definitions ──────────────────────────────────────────────────────────
// activeRiders, avgDailyKm, and coverageZones are pre-launch projections.
// Replace with real data from analytics post-launch.
export const CITIES: Record<string, CityData> = {
  amsterdam: {
    id: "amsterdam",
    name: "Amsterdam",
    country: "Netherlands",
    activeRiders: 2400,
    avgDailyKm: 8.2,
    coverageZones: 12,
    launchStatus: "upcoming",
  },
  dublin: {
    id: "dublin",
    name: "Dublin",
    country: "Ireland",
    activeRiders: 1800,
    avgDailyKm: 7.4,
    coverageZones: 9,
    launchStatus: "upcoming",
  },
  berlin: {
    id: "berlin",
    name: "Berlin",
    country: "Germany",
    activeRiders: 3200,
    avgDailyKm: 9.1,
    coverageZones: 16,
    launchStatus: "planned",
  },
};

// ── Campaign scale tiers ──────────────────────────────────────────────────────
// riderFraction: proportion of a city's active riders in each tier.
export const CAMPAIGN_SCALES: Record<string, CampaignScaleTier> = {
  focused: {
    id: "focused",
    label: "Focused",
    description: "Targeted reach across selected city zones.",
    riderFraction: 0.15,
  },
  "city-wide": {
    id: "city-wide",
    label: "City-wide",
    description: "Full coverage across all active city zones.",
    riderFraction: 0.55,
  },
  "multi-city": {
    id: "multi-city",
    label: "Multi-city",
    description: "Coordinated activation across multiple cities.",
    riderFraction: 0.55,
  },
};

// ── Calculation assumptions ───────────────────────────────────────────────────
// Every value here feeds the service layer deterministically.
// Update assumptions here only — never in components or the service directly.
export const REACH_ASSUMPTIONS: ReachAssumptions = {
  impressionsPerRiderPerDay: 140,
  campaignDurationWeeks: 4,
  multiCityMultiplier: 1.8,
};

// ── Convenience arrays (used by validator and selectors) ─────────────────────
export const CITY_IDS = ["amsterdam", "dublin", "berlin"] as const;
export const SCALE_IDS = ["focused", "city-wide", "multi-city"] as const;
