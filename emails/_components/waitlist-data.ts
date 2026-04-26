import type { WaitlistInput } from "@/lib/waitlist/schema";

export const bikeStatusLabel: Record<
  NonNullable<WaitlistInput["bikeOwnership"]>,
  string
> = {
  own: "I own one",
  interested: "Not yet, but interested",
  planning: "Planning to get one",
};

export function formatAudience(audience: WaitlistInput["audience"]): string {
  return audience.charAt(0).toUpperCase() + audience.slice(1);
}
