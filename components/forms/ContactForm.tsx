"use client";

import React, { useTransition } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import { Button } from "@/components/ui/button";
import { contact, ContactFormData } from "@/app/actions/contact";
import { contactSchema } from "@/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { showErrorToast, showSuccessToast } from "../CustomToast";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/app/hooks/useLanguage";
import { LanguageKeys } from "@/types/types";

// Form content for NL and ENG language
const formContent = {
  en: {
    fullNameLabel: "Your Name",
    emailLabel: "Your Email",
    phoneLabel: "Phone Number",
    companyLabel: "Company Name",
    subjectLabel: "Subject",
    subjectPlaceholder: "Enter the subject of your message",
    messageLabel: "Your Message",
    messagePlaceholder: "Tell us about your business and financial goals",
    sendButton: "Send Message",
    sendingButton: "Sending Message...",
    termsText: "By using this form, you agree to our",
    termsLink: "Terms of Service",
    privacyLink: "Privacy Policy",
    successTitle: "Message Sent",
    successDescription:
      "Thank you for your message. We'll get back to you as soon as possible.",
    errorTitle: "Sending Failed",
    errorDescription:
      "Something went wrong while sending your message. Please try again.",
  },
  nl: {
    fullNameLabel: "Uw Naam",
    emailLabel: "Uw E-mail",
    phoneLabel: "Telefoonnummer",
    companyLabel: "Bedrijfsnaam",
    subjectLabel: "Onderwerp",
    subjectPlaceholder: "Voer het onderwerp van je bericht in",
    messageLabel: "Uw Bericht",
    messagePlaceholder: "Vertel ons over uw bedrijf en financiële doelen",
    sendButton: "Verstuur Bericht",
    sendingButton: "Bezig met verzenden...",
    termsText: "Door dit formulier te gebruiken, gaat u akkoord met onze",
    termsLink: "Servicevoorwaarden",
    privacyLink: "Privacybeleid",
    successTitle: "Bericht verzonden",
    successDescription:
      "Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.",
    errorTitle: "Verzenden mislukt",
    errorDescription:
      "Er ging iets mis bij het versturen van je bericht. Probeer het opnieuw.",
  },
};

const ContactForm = () => {
  const [isPending, startTransition] = useTransition();
  const { language } = useLanguage();

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
      consent: true,
    },
  });

  const { reset } = form;

  const onSubmit = (values: ContactFormData) => {
    startTransition(() => {
      contact(values)
        .then((data) => {
          if (data.success) {
            showSuccessToast(content.successTitle, content.successDescription);
            reset();
          } else if (data.error) {
            showErrorToast(content.errorTitle, content.errorDescription);
          }
        })
        .catch(() =>
          showErrorToast(content.errorTitle, content.errorDescription)
        );
    });
  };

  // Get the content based on the current language
  const content = formContent[language as LanguageKeys];

  const {
    fullNameLabel,
    emailLabel,
    phoneLabel,
    companyLabel,
    subjectLabel,
    subjectPlaceholder,
    messageLabel,
    messagePlaceholder,
    sendButton,
    sendingButton,
    termsText,
    termsLink,
    privacyLink,
  } = content;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{fullNameLabel}</FormLabel>
                <FormControl>
                  <Input placeholder="Willem De Jong" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{emailLabel}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="willem.d@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{phoneLabel}</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="+31 20 1234567" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{companyLabel}</FormLabel>
              <FormControl>
                <Input placeholder="Adyen" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{subjectLabel}</FormLabel>
              <FormControl>
                <Input placeholder={subjectPlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{messageLabel}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={messagePlaceholder}
                  className="min-h-[200px] resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full text-lg hover:bg-[#00332c]">
          {isPending ? sendingButton : sendButton}
        </Button>
        <p className="text-sm text-gray-600 text-center">
          {termsText}{" "}
          <Link
            href="/terms-of-service"
            className="text-[#2c7a7b] hover:underline"
          >
            {termsLink}
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy-policy"
            className="text-[#2c7a7b] hover:underline"
          >
            {privacyLink}
          </Link>
          .
        </p>
      </form>
    </Form>
  );
};

export default ContactForm;
