"use server";

import { Resend } from "resend";
import { waitlistSchema } from "@/lib/waitlist/schema";
import { WaitlistConfirmation } from "@/emails/waitlist-confirmation";
import { WaitlistNotification } from "@/emails/waitlist-notification";
import type { WaitlistInput } from "@/lib/waitlist/schema";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = "MOVRR <hello@movrr.nl>";
const NOTIFY_TO = process.env.MOVRR_NOTIFY_EMAIL ?? "team@movrr.nl";

type ActionResult = { success: true } | { success: false; error: string };

export async function submitWaitlist(input: unknown): Promise<ActionResult> {
  // Server-side validation — never trust client input
  const parsed = waitlistSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false, error: "Invalid form data." };
  }

  const data: WaitlistInput = parsed.data;

  try {
    await Promise.all([
      resend.emails.send({
        from: FROM,
        to: data.email,
        subject: "You're registered — MOVRR",
        react: WaitlistConfirmation({ data }),
      }),
      resend.emails.send({
        from: FROM,
        to: NOTIFY_TO,
        subject: `New registration · ${data.audience}${data.city ? ` · ${data.city}` : ""}`,
        react: WaitlistNotification({ data }),
      }),
    ]);

    return { success: true };
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
