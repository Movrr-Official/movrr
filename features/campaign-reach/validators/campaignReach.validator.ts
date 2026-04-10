// ─── Campaign Reach Preview — Validation ─────────────────────────────────────
// Zod schema validates CampaignInput before the service executes logic.
// Single source of validation — used by both the hook and any future API route.

import { z } from "zod";
import { CITY_IDS, SCALE_IDS } from "../config/campaignReach.config";

export const campaignInputSchema = z.object({
  cityId: z.enum(CITY_IDS, {
    errorMap: () => ({ message: "Invalid city selection." }),
  }),
  scale: z.enum(SCALE_IDS, {
    errorMap: () => ({ message: "Invalid campaign scale." }),
  }),
});

export type ValidatedCampaignInput = z.infer<typeof campaignInputSchema>;

/** Returns validated input or null. Caller handles the null case. */
export function validateCampaignInput(
  input: unknown
): ValidatedCampaignInput | null {
  const result = campaignInputSchema.safeParse(input);
  return result.success ? result.data : null;
}
