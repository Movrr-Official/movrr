// ─── Campaign Reach Preview — Service Layer ───────────────────────────────────
// Pure, deterministic calculation logic. No UI coupling. No hardcoded values.
// All assumptions sourced exclusively from campaignReach.config.ts.

import { CITIES, CAMPAIGN_SCALES, REACH_ASSUMPTIONS } from "../config/campaignReach.config";
import type { CampaignInput, CampaignOutput } from "../types/campaignReach.types";

// ── Core calculation ──────────────────────────────────────────────────────────

export function calculateCampaignReach(input: CampaignInput): CampaignOutput {
  const city = CITIES[input.cityId];
  const scale = CAMPAIGN_SCALES[input.scale];

  const baseRiders = Math.round(city.activeRiders * scale.riderFraction);

  // Multi-city campaigns apply a reach multiplier to account for cross-city
  // network effects and coordinated scheduling.
  const activeRidersInCampaign =
    input.scale === "multi-city"
      ? Math.round(baseRiders * REACH_ASSUMPTIONS.multiCityMultiplier)
      : baseRiders;

  const estimatedDailyImpressions =
    activeRidersInCampaign * REACH_ASSUMPTIONS.impressionsPerRiderPerDay;

  const estimatedMonthlyReach = estimatedDailyImpressions * 30;

  const estimatedKmPerMonth = Math.round(
    activeRidersInCampaign * city.avgDailyKm * 30
  );

  // Multi-city campaigns cover proportionally more zones.
  const coverageZones =
    input.scale === "multi-city"
      ? Math.round(city.coverageZones * REACH_ASSUMPTIONS.multiCityMultiplier)
      : city.coverageZones;

  return {
    estimatedMonthlyReach,
    estimatedDailyImpressions,
    estimatedKmPerMonth,
    activeRidersInCampaign,
    coverageZones,
    campaignDurationWeeks: REACH_ASSUMPTIONS.campaignDurationWeeks,
    city,
    scale,
  };
}

// ── Formatting utilities ──────────────────────────────────────────────────────
// Presentational helpers — kept in the service layer to stay out of components.

export function formatReach(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}K`;
  return n.toLocaleString();
}

export function formatKm(km: number): string {
  if (km >= 1_000) return `${Math.round(km / 1_000)}K km`;
  return `${km.toLocaleString()} km`;
}

export function formatRiders(n: number): string {
  return n.toLocaleString();
}

export function riderFractionAsPercent(fraction: number): string {
  return `${Math.round(fraction * 100)}%`;
}
