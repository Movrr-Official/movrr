"use server";

import { ContactFormData, contactSchema } from "@/schema";
import { sendConfirmationEmail, sendNotificationEmail } from "@/lib/mail";
import { logger } from "@/lib/logger";
import { sanitizeText, sanitizeEmail } from "@/lib/sanitize";
import { checkRateLimit } from "@/lib/rate-limit";
import { headers } from "next/headers";

export async function contact(values: ContactFormData) {
  try {
    // Rate limiting - get headers from Next.js
    try {
      const headersList = await headers();
      const forwardedFor = headersList.get("x-forwarded-for");
      const realIP = headersList.get("x-real-ip");
      const clientIP = forwardedFor?.split(",")[0].trim() || realIP || "unknown";

      const rateLimitResult = checkRateLimit(clientIP, {
        windowMs: 15 * 60 * 1000, // 15 minutes
        maxRequests: 5, // 5 requests per 15 minutes
        identifier: "contact-form",
      });

      if (!rateLimitResult.allowed) {
        return {
          error: "Too many requests",
          details: "Please wait before submitting another message.",
          status: 429,
        };
      }
    } catch (rateLimitError) {
      // If rate limiting fails, log but continue (fail open)
      logger.warn("Rate limiting check failed", rateLimitError);
    }

    // Sanitize input
    const sanitizedValues = {
      fullName: sanitizeText(values.fullName),
      email: sanitizeEmail(values.email),
      phone: sanitizeText(values.phone),
      company: sanitizeText(values.company),
      subject: sanitizeText(values.subject),
      message: sanitizeText(values.message),
      consent: values.consent,
    };

    const validation = contactSchema.safeParse(sanitizedValues);

    if (!validation.success) {
      return {
        error: "Invalid data",
        details: validation.error.format(),
        status: 400,
      };
    }

    const { data } = validation;

    // Send notification email to self
    await sendNotificationEmail(data);

    // Send confirmation email to the user
    await sendConfirmationEmail(data);

    return { success: "Email sent successfully", status: 200 };
  } catch (error) {
    logger.errorWithContext("Error sending contact email", error, {
      action: "contact",
    });
    return { error: "Internal Server Error", status: 500 };
  }
}
