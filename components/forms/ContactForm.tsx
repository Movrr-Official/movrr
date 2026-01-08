"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle } from "lucide-react";
import { MagneticButton } from "../ui/magnetic-button";

interface Option {
  value: string;
  label: string;
}

interface ContactFormProps {
  type?: "general" | "advertiser" | "rider" | "government";
}

export function ContactForm({ type = "general" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const getSelectionOptions = (): Option[] => {
    switch (type) {
      case "rider":
        return [
          { value: "become-rider", label: "Become a Rider" },
          { value: "equipment", label: "Equipment Questions" },
          { value: "earnings", label: "Earnings Information" },
          { value: "other", label: "Other" },
        ];
      case "government":
        return [
          { value: "partnership", label: "Partnership Inquiry" },
          { value: "data-services", label: "Data Services" },
          { value: "presentation", label: "Request Presentation" },
          { value: "other", label: "Other" },
        ];
      default:
        return [
          { value: "general", label: "General Inquiry" },
          { value: "support", label: "Support" },
          { value: "press", label: "Press Inquiry" },
          { value: "careers", label: "Careers" },
          { value: "other", label: "Other" },
        ];
    }
  };

  const getAdvertiserOptions = (field: "budget" | "timeline"): Option[] => {
    if (type !== "advertiser") return [];

    const options = {
      budget: [
        { value: "1000-3000", label: "€1,000 - €3,000" },
        { value: "3000-5000", label: "€3,000 - €5,000" },
        { value: "5000-10000", label: "€5,000 - €10,000" },
        { value: "10000+", label: "€10,000+" },
      ],
      timeline: [
        { value: "2-weeks", label: "2 weeks" },
        { value: "1-months", label: "1 month" },
        { value: "3-months", label: "3 months" },
        { value: "6-months", label: "6 months" },
        { value: "ongoing", label: "Ongoing" },
      ],
    };

    return options[field];
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="border-2 border-border bg-background p-10 lg:p-12 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-20 h-20 border-2 border-primary bg-primary/5 flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="h-10 w-10 text-primary" />
        </div>
        <h3 className="text-4xl font-black mb-4">Thank You!</h3>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          {`Your message has been received. We'll get back to you as soon as possible.`}
        </p>
        <MagneticButton
          size="xl"
          onClick={() => setIsSubmitted(false)}
          className="h-14 px-8 text-base font-bold rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.1em]"
        >
          Send Another Message
        </MagneticButton>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial="hidden"
      animate="visible"
      variants={formVariants}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div variants={itemVariants} className="space-y-2">
          <Label
            htmlFor="firstName"
            className="text-sm font-bold uppercase tracking-[0.05em]"
          >
            First Name
          </Label>
          <Input
            id="firstName"
            required
            placeholder="Enter your first name"
            className="rounded-none border-2"
          />
        </motion.div>
        <motion.div variants={itemVariants} className="space-y-2">
          <Label
            htmlFor="lastName"
            className="text-sm font-bold uppercase tracking-[0.05em]"
          >
            Last Name
          </Label>
          <Input
            id="lastName"
            required
            placeholder="Enter your last name"
            className="rounded-none border-2"
          />
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="space-y-2">
        <Label
          htmlFor="email"
          className="text-sm font-bold uppercase tracking-[0.05em]"
        >
          Email
        </Label>
        <Input
          id="email"
          type="email"
          required
          placeholder="Enter your email address"
          className="rounded-none border-2"
        />
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-2">
        <Label
          htmlFor="phone"
          className="text-sm font-bold uppercase tracking-[0.05em]"
        >
          Phone (Optional)
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="Enter your phone number"
          className="rounded-none border-2"
        />
      </motion.div>

      {type !== "advertiser" && (
        <motion.div variants={itemVariants} className="space-y-2">
          <Label
            htmlFor="subject"
            className="text-sm font-bold uppercase tracking-[0.05em]"
          >
            Subject
          </Label>
          <Select>
            <SelectTrigger className="w-full rounded-none border-2">
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent>
              {getSelectionOptions().map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>
      )}

      {type === "advertiser" && (
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div variants={itemVariants} className="w-full space-y-2">
            <Label
              htmlFor="budget"
              className="text-sm font-bold uppercase tracking-[0.05em]"
            >
              Budget
            </Label>
            <Select>
              <SelectTrigger className="w-full rounded-none border-2">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                {getAdvertiserOptions("budget").map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <Label
              htmlFor="timeline"
              className="text-sm font-bold uppercase tracking-[0.05em]"
            >
              Timeline
            </Label>
            <Select>
              <SelectTrigger className="w-full rounded-none border-2">
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent>
                {getAdvertiserOptions("timeline").map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </motion.div>
        </div>
      )}

      {type === "advertiser" && (
        <motion.div variants={itemVariants} className="space-y-2 mt-6">
          <Label
            htmlFor="locations"
            className="text-sm font-bold uppercase tracking-[0.05em]"
          >
            Target Locations
          </Label>
          <Input
            id="locations"
            placeholder="e.g., Haag City Center, Schenvinegen, Dam Square"
            className="rounded-none border-2"
          />
        </motion.div>
      )}

      <motion.div variants={itemVariants} className="space-y-2 mt-6">
        <Label
          htmlFor="message"
          className="text-sm font-bold uppercase tracking-[0.05em]"
        >
          {type === "advertiser" ? "Campaign Details" : "Message"}
        </Label>
        <Textarea
          id="message"
          rows={10}
          required
          placeholder={
            type === "advertiser"
              ? "Tell us about your campaign goals, target audience, and any specific requirements."
              : "Type your message here"
          }
          className="min-h-[120px] rounded-none border-2"
        />
      </motion.div>

      <motion.div variants={itemVariants} className="mt-6">
        <MagneticButton
          type="submit"
          size="xl"
          className="w-full h-14 text-base font-bold rounded-full border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.1em]"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </MagneticButton>
      </motion.div>
    </motion.form>
  );
}
