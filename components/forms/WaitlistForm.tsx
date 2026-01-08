"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
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
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle, Upload } from "lucide-react";
import { MagneticButton } from "../ui/magnetic-button";

export function WaitlistForm() {
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

  const departments = [
    { value: "engineering", label: "Engineering" },
    { value: "product", label: "Product" },
    { value: "design", label: "Design" },
    { value: "marketing", label: "Marketing" },
    { value: "sales", label: "Sales" },
    { value: "operations", label: "Operations" },
    { value: "data", label: "Data & Analytics" },
    { value: "partnerships", label: "Partnerships" },
    { value: "customer-success", label: "Customer Success" },
    { value: "finance", label: "Finance" },
    { value: "hr", label: "People & Culture" },
    { value: "other", label: "Other" },
  ];

  const experienceLevels = [
    { value: "entry", label: "Entry Level (0-2 years)" },
    { value: "mid", label: "Mid Level (3-5 years)" },
    { value: "senior", label: "Senior Level (6-10 years)" },
    { value: "lead", label: "Lead/Principal (10+ years)" },
    { value: "executive", label: "Executive/C-Level" },
  ];

  if (isSubmitted) {
    return (
      <motion.div
        className="bg-background rounded-lg border p-8 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Welcome to Our Talent Pool!</h3>
        <p className="text-muted-foreground mb-6">
          {`Thanks for your interest in Movrr. We've added you to our talent
          waitlist and will reach out when we have opportunities that match your
          background.`}
        </p>
        <div className="bg-muted/50 rounded-lg p-4">
          <p className="text-sm text-muted-foreground">
            <strong>{`What's next?`}</strong>
            {` We'll review your information and keep
            you updated on relevant opportunities. In the meantime, follow us on
            social media to stay connected with our journey.`}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input id="firstName" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input id="lastName" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input id="email" type="email" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" type="tel" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input id="location" placeholder="City, State/Country" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="department">Department of Interest</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select department" />
            </SelectTrigger>
            <SelectContent>
              {departments.map((dept) => (
                <SelectItem key={dept.value} value={dept.value}>
                  {dept.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="experience">Experience Level</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select experience" />
            </SelectTrigger>
            <SelectContent>
              {experienceLevels.map((level) => (
                <SelectItem key={level.value} value={level.value}>
                  {level.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="skills">Key Skills & Technologies</Label>
        <Input
          id="skills"
          placeholder="e.g., React, Python, Product Management, etc."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="experience-details">
          Tell us about your experience
        </Label>
        <Textarea
          id="experience-details"
          rows={4}
          placeholder="Brief overview of your background, current role, and what interests you about Movrr..."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="linkedin">LinkedIn Profile</Label>
        <Input
          id="linkedin"
          type="url"
          placeholder="https://linkedin.com/in/yourprofile"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="portfolio">Portfolio/Website</Label>
        <Input
          id="portfolio"
          type="url"
          placeholder="https://yourportfolio.com"
        />
      </div>

      <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
        <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
        <p className="text-sm text-muted-foreground mb-2">
          <strong>Optional:</strong> Upload your resume (PDF, DOC, DOCX)
        </p>
        <Button type="button" variant="outline" size="sm">
          Choose File
        </Button>
        <p className="text-xs text-muted-foreground mt-2">Max file size: 5MB</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-start space-x-2">
          <Checkbox id="updates" />
          <Label htmlFor="updates" className="text-sm leading-tight">
            {`I'd like to receive updates about Movrr's growth, new initiatives,
              and company news.`}
          </Label>
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox id="privacy" required />
          <Label htmlFor="privacy" className="text-sm leading-tight">
            {`I agree to Movrr's Privacy Policy and understand that my
              information will be used to contact me about relevant job
              opportunities. *`}
          </Label>
        </div>
      </div>

      <MagneticButton
        type="submit"
        size="xl"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Joining Waitlist..." : "Join Talent Waitlist"}
      </MagneticButton>

      <p className="text-xs text-muted-foreground text-center">
        We respect your privacy and will never share your information with third
        parties.
      </p>
    </form>
  );
}
