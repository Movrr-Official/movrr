import { z } from "zod";

const sharedFields = {
  audience: z.enum(["rider", "brand", "partner"]),
  bikeOwnership: z.enum(["own", "interested", "planning"]).optional(),
  utm_source: z.string().max(200).optional(),
  utm_medium: z.string().max(200).optional(),
  utm_campaign: z.string().max(200).optional(),
  utm_content: z.string().max(200).optional(),
  utm_term: z.string().max(200).optional(),
  referrer: z.string().max(500).optional(),
  landing_path: z.string().max(500).optional(),
};

export const waitlistSchema = z.object({
  ...sharedFields,
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Enter a valid email"),
  city: z.string().min(2, "City is required"),
});

export function createWaitlistSchema(messages: {
  nameRequired: string;
  emailInvalid: string;
  cityRequired: string;
}) {
  return z.object({
    ...sharedFields,
    name: z.string().min(1, messages.nameRequired).max(100),
    email: z.string().email(messages.emailInvalid),
    city: z.string().min(2, messages.cityRequired),
  });
}

export type WaitlistInput = z.infer<typeof waitlistSchema>;
