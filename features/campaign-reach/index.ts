// ─── Campaign Reach Preview — Public API ─────────────────────────────────────
//
// Status:  DORMANT — not mounted in any page
// Feature: campaignReachPreviewEnabled = false
//
// ── Activation checklist ──────────────────────────────────────────────────────
//
//   Step 1 — Enable the feature flag:
//            Set campaignReachPreviewEnabled = true
//            in config/campaignReach.config.ts
//
//   Step 2 — Connect real data:
//            Replace placeholder values in CITIES config with real analytics
//            (activeRiders, avgDailyKm, coverageZones per city)
//
//   Step 3 — Mount in the Brands page:
//            In components/brands/BrandsHero.tsx (after the hero image section),
//            add the following import and usage:
//
//            import { CampaignReachPreview, FEATURE_FLAGS }
//              from "@/app/features/campaign-reach";
//
//            {FEATURE_FLAGS.campaignReachPreviewEnabled && (
//              <CampaignReachPreview />
//            )}
//
// ─────────────────────────────────────────────────────────────────────────────

// Components
export { CampaignReachPreview } from "./components/CampaignReachPreview";
export { CitySelector } from "./components/CitySelector";
export { CampaignScaleSelector } from "./components/CampaignScaleSelector";
export { ReachReveal } from "./components/ReachReveal";
export { MethodologyDisclosure } from "./components/MethodologyDisclosure";

// Config & feature flag
export { FEATURE_FLAGS, CITIES, CAMPAIGN_SCALES, REACH_ASSUMPTIONS } from "./config/campaignReach.config";

// Service
export {
  calculateCampaignReach,
  formatReach,
  formatKm,
  formatRiders,
} from "./services/campaignReach.service";

// Hook
export { useCampaignReach } from "./hooks/useCampaignReach";

// Types
export type {
  CityId,
  CityData,
  CampaignScale,
  CampaignScaleTier,
  CampaignInput,
  CampaignOutput,
  FlowStep,
  FeatureFlags,
} from "./types/campaignReach.types";
