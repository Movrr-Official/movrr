import { Resend } from "resend";

import ContactNotificationTemplate from "@/emails/ContactNotificationTemplate";
import ContactTemplate from "@/emails/ContactTemplate";
import RiderApplicationConfirmationTemplate from "@/emails/RiderApplicationConfirmationTemplate";
import RiderApplicationNotificationTemplate from "@/emails/RiderApplicationNotificationTemplate";
import JobApplicationConfirmationTemplate from "@/emails/JobApplicationConfirmationTemplate";
import JobApplicationNotificationTemplate from "@/emails/JobApplicationNotificationTemplate";

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
      from: `Movrr <${process.env.FROM_EMAIL!}>`,
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
      from: `Movrr <${process.env.FROM_EMAIL!}>`,
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

// Rider Application Email Interfaces
interface RiderApplicationConfirmationValues {
  fullName: string;
  email: string;
  city?: string;
}

interface RiderApplicationNotificationValues {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  postCode?: string;
  availability?: string;
  bikeType?: string;
  ridingFrequency?: string;
  additionalInfo?: string;
  why?: string;
}

// Job Application Email Interfaces
interface JobApplicationConfirmationValues {
  applicantName: string;
  email: string;
  jobTitle: string;
}

interface JobApplicationNotificationValues {
  applicantName: string;
  applicantEmail: string;
  jobId: string;
  jobTitle: string;
  coverLetter?: string;
  phone?: string;
  linkedin?: string;
  portfolio?: string;
}

// Send rider application confirmation email to applicant
export async function sendRiderApplicationConfirmation(
  values: RiderApplicationConfirmationValues
) {
  try {
    const { fullName, email, city } = values;

    const { data, error } = await resend.emails.send({
      from: `Movrr <${process.env.FROM_EMAIL!}>`,
      to: email,
      subject: "Your Movrr Rider Application Has Been Received",
      react: RiderApplicationConfirmationTemplate({
        fullName,
        email,
        city,
      }),
    });

    if (error) {
      throw new Error("An error occurred while sending the confirmation email.");
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`An error occurred: ${error.message}`);
    }
    throw new Error("An unknown error occurred.");
  }
}

// Send rider application notification email to admin
export async function sendRiderApplicationNotification(
  values: RiderApplicationNotificationValues
) {
  try {
    const {
      fullName,
      email,
      phone,
      city,
      postCode,
      availability,
      bikeType,
      ridingFrequency,
      additionalInfo,
      why,
    } = values;

    const { data, error } = await resend.emails.send({
      from: `Movrr <${process.env.FROM_EMAIL!}>`,
      to: process.env.TO_EMAIL!,
      subject: `New Rider Application: ${fullName} - ${city}`,
      react: RiderApplicationNotificationTemplate({
        fullName,
        email,
        phone,
        city,
        postCode,
        availability,
        bikeType,
        ridingFrequency,
        additionalInfo,
        why,
      }),
    });

    if (error) {
      throw new Error("An error occurred while sending the notification email.");
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`An error occurred: ${error.message}`);
    }
    throw new Error("An unknown error occurred.");
  }
}

// Send job application confirmation email to applicant
export async function sendJobApplicationConfirmation(
  values: JobApplicationConfirmationValues
) {
  try {
    const { applicantName, email, jobTitle } = values;

    const { data, error } = await resend.emails.send({
      from: `Movrr <${process.env.FROM_EMAIL!}>`,
      to: email,
      subject: `Your Application for ${jobTitle} Has Been Received`,
      react: JobApplicationConfirmationTemplate({
        applicantName,
        email,
        jobTitle,
      }),
    });

    if (error) {
      throw new Error("An error occurred while sending the confirmation email.");
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`An error occurred: ${error.message}`);
    }
    throw new Error("An unknown error occurred.");
  }
}

// Send job application notification email to HR/admin
export async function sendJobApplicationNotification(
  values: JobApplicationNotificationValues
) {
  try {
    const {
      applicantName,
      applicantEmail,
      jobId,
      jobTitle,
      coverLetter,
      phone,
      linkedin,
      portfolio,
    } = values;

    const { data, error } = await resend.emails.send({
      from: `Movrr <${process.env.FROM_EMAIL!}>`,
      to: process.env.TO_EMAIL!,
      subject: `New Job Application: ${applicantName} - ${jobTitle}`,
      react: JobApplicationNotificationTemplate({
        applicantName,
        applicantEmail,
        jobId,
        jobTitle,
        coverLetter,
        phone,
        linkedin,
        portfolio,
      }),
    });

    if (error) {
      throw new Error("An error occurred while sending the notification email.");
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`An error occurred: ${error.message}`);
    }
    throw new Error("An unknown error occurred.");
  }
}
