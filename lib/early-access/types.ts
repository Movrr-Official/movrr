export type EarlyAccessAudience = "riders" | "brands" | "partners";

export interface EarlyAccessVariant {
  id: string;
  headline: string;
  cta: string;
  href: string;
}

export interface EarlyAccessConfig {
  audience: EarlyAccessAudience;
  badge?: string;
  /** At least one variant required. Multiple = A/B test pool. */
  variants: [EarlyAccessVariant, ...EarlyAccessVariant[]];
  /** Re-show banner N days after dismissal. Omit = never re-show. */
  reappearAfterDays?: number;
  /** When this changes, re-prompt regardless of prior dismissal. */
  campaignId: string;
}

export interface DismissalRecord {
  dismissedAt: number;
  campaignId: string;
}
