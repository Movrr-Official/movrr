import { Resend } from "resend";

import ContactNotificationTemplate from "@/emails/ContactNotificationTemplate";
import ContactTemplate from "@/emails/ContactTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

interface NotificationEmailValues {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  company: string;
  message: string;
  consent: boolean;
}

interface ConfirmationEmailValues {
  fullName: string;
  email?: string;
  contactEmailAddress?: string;
}

// Function to send notification email to self
export async function sendNotificationEmail(values: NotificationEmailValues) {
  try {
    const { fullName, email, phone, subject, company, message, consent } =
      values;

    // Send notification email to self
    const { data, error } = await resend.emails.send({
      from: `SDG Venturing <${process.env.FROM_EMAIL!}>`,
      to: process.env.TO_EMAIL!,
      subject: subject,
      react: ContactNotificationTemplate({
        fullName,
        email,
        phone,
        subject,
        company,
        message,
        consent,
      }),
    });

    if (error) {
      throw new Error("An error occurred while sending the message.");
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`An error occurred: ${error.message}`);
    }
    throw new Error("An unknown error occurred.");
  }
}

// Send confirmation email to the user based on the form type
export async function sendConfirmationEmail(values: ConfirmationEmailValues) {
  try {
    const { fullName, email, contactEmailAddress } = values;

    // Send confirmation email to the user
    const { data, error } = await resend.emails.send({
      from: `SDG Venturing <${process.env.FROM_EMAIL!}>`,
      to: email || contactEmailAddress!,
      subject: "Thank you for getting in touch!",
      react: ContactTemplate({ fullName }),
    });

    if (error) {
      throw new Error("An error occurred while sending the email.");
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`An error occurred: ${error.message}`);
    }
    throw new Error("An unknown error occurred.");
  }
}
