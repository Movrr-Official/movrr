"use server";

import { z } from "zod";

import { contactSchema } from "@/schema";
import { sendConfirmationEmail, sendNotificationEmail } from "@/lib/mail";

export type ContactFormData = z.infer<typeof contactSchema>;

export async function contact(values: ContactFormData) {
  try {
    const validation = contactSchema.safeParse(values);

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
    console.error("Error sending email:", error);
    return { error: "Internal Server Error", status: 500 };
  }
}
