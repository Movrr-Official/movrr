// ─── Campaign Reach Preview — Type Definitions ──────────────────────────────
// Shared types for the Campaign Reach Preview feature.
// All types are strict and future-proof for API integration.

export type CityId = "rotterdam" | "the-hague" | "amsterdam" | "utrecht";

export type LaunchStatus = "live" | "upcoming" | "planned";

export type CampaignScale = "focused" | "city-wide" | "multi-city";

// ── Data types ────────────────────────────────────────────────────────────────

export interface CityData {
  id: CityId;
  name: string;
  country: string;
  /** Active registered riders. Placeholder pre-launch; replace with real data. */
  activeRiders: number;
  /** Average daily kilometres per active rider. */
  avgDailyKm: number;
  /** Number of distinct city coverage zones. */
  coverageZones: number;
  launchStatus: LaunchStatus;
}

export interface CampaignScaleTier {
  id: CampaignScale;
  label: string;
  description: string;
  /** Fraction of a city's active riders participating in this tier (0–1). */
  riderFraction: number;
}

// ── Input / Output types ──────────────────────────────────────────────────────

export interface CampaignInput {
  cityId: CityId;
  scale: CampaignScale;
}

export interface CampaignOutput {
  estimatedMonthlyReach: number;
  estimatedDailyImpressions: number;
  estimatedKmPerMonth: number;
  activeRidersInCampaign: number;
  coverageZones: number;
  campaignDurationWeeks: number;
  city: CityData;
  scale: CampaignScaleTier;
}

// ── Config types ──────────────────────────────────────────────────────────────

export interface ReachAssumptions {
  /** Estimated daily brand impressions per active rider carrying a campaign. */
  impressionsPerRiderPerDay: number;
  /** Standard campaign window in weeks. */
  campaignDurationWeeks: number;
  /** Reach multiplier applied to multi-city campaigns. */
  multiCityMultiplier: number;
}

export interface FeatureFlags {
  campaignReachPreviewEnabled: boolean;
}

// ── Flow types ────────────────────────────────────────────────────────────────

export type FlowStep = "city" | "scale" | "reveal";
