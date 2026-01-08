"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { CheckCircle, Bike } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function RiderSignupForm() {
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

  const cities = [
    { value: "amsterdam", label: "Amsterdam" },
    { value: "rotterdam", label: "Rotterdam" },
    { value: "the-hague", label: "The Hague" },
    { value: "utrecht", label: "Utrecht" },
    { value: "eindhoven", label: "Eindhoven" },
    { value: "tilburg", label: "Tilburg" },
    { value: "groningen", label: "Groningen" },
    { value: "almere", label: "Almere" },
    { value: "breda", label: "Breda" },
    { value: "nijmegen", label: "Nijmegen" },
    { value: "enschede", label: "Enschede" },
    { value: "haarlem", label: "Haarlem" },
    { value: "arnhem", label: "Arnhem" },
    { value: "other", label: "Other" },
  ];

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

  return (
    <div className="border-2 border-border bg-card">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="p-10 lg:p-12 text-center flex flex-col items-center justify-center min-h-[550px]">
              <div className="w-20 h-20 border-2 border-primary bg-primary/5 flex items-center justify-center mb-8">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-4xl font-black mb-6">
                Application Received!
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-md leading-relaxed">
                Thanks for your interest in becoming an Movrr rider. We&apos;ll
                review your application and contact you within 48 hours.
              </p>
              <MagneticButton
                size="xl"
                onClick={() => setIsSubmitted(false)}
                className="h-14 px-8 text-base font-bold rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.1em]"
              >
                Submit Another Application
              </MagneticButton>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="border-b-2 border-border p-10 lg:p-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 border-2 border-primary/30 bg-primary/5 flex items-center justify-center flex-shrink-0">
                  <Bike className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-2">
                    Join the Rider Network
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Start earning money by turning your daily bike rides into a
                    paid opportunity. Fill out the form below to get started.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-10 lg:p-12">
              <motion.form
                id="signup"
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
                      placeholder="you@email.com"
                      className="rounded-none border-2"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-bold uppercase tracking-[0.05em]"
                    >
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      placeholder="0612345678"
                      className="rounded-none border-2"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label
                      htmlFor="city"
                      className="text-sm font-bold uppercase tracking-[0.05em]"
                    >
                      City
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full rounded-none border-2">
                        <SelectValue placeholder="Select your city" />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((city) => (
                          <SelectItem key={city.value} value={city.value}>
                            {city.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label
                      htmlFor="postCode"
                      className="text-sm font-bold uppercase tracking-[0.05em]"
                    >
                      Postcode
                    </Label>
                    <Input
                      id="postCode"
                      required
                      placeholder="Enter your postcode"
                      className="rounded-none border-2"
                    />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <Label
                    htmlFor="availability"
                    className="text-sm font-bold uppercase tracking-[0.05em]"
                  >
                    Availability
                  </Label>
                  <Select>
                    <SelectTrigger
                      id="availability"
                      className="w-full rounded-none border-2"
                    >
                      <SelectValue placeholder="Select availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekdays">Weekdays</SelectItem>
                      <SelectItem value="weekends">Weekends</SelectItem>
                      <SelectItem value="evenings">Evenings</SelectItem>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <Label
                    htmlFor="bikeType"
                    className="text-sm font-bold uppercase tracking-[0.05em]"
                  >
                    Type of Bicycle
                  </Label>
                  <Select>
                    <SelectTrigger
                      id="bikeType"
                      className="w-full rounded-none border-2"
                    >
                      <SelectValue placeholder="Select bicycle type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="road">Road Bike</SelectItem>
                      <SelectItem value="hybrid">Hybrid Bike</SelectItem>
                      <SelectItem value="mountain">Mountain Bike</SelectItem>
                      <SelectItem value="cruiser">Cruiser</SelectItem>
                      <SelectItem value="electric">Electric Bike</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <Label
                    htmlFor="ridingFrequency"
                    className="text-sm font-bold uppercase tracking-[0.05em]"
                  >
                    How often do you ride?
                  </Label>
                  <Select>
                    <SelectTrigger
                      id="ridingFrequency"
                      className="w-full rounded-none border-2"
                    >
                      <SelectValue placeholder="Select riding frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="several-times-week">
                        Several times a week
                      </SelectItem>
                      <SelectItem value="weekends">Weekends only</SelectItem>
                      <SelectItem value="occasionally">Occasionally</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <Label
                    htmlFor="additionalInfo"
                    className="text-sm font-bold uppercase tracking-[0.05em]"
                  >
                    Tell us about your typical routes and riding habits
                  </Label>
                  <Textarea
                    id="additionalInfo"
                    rows={3}
                    placeholder="Describe your usual routes, distances, and riding style"
                    className="rounded-none border-2"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <Label
                    htmlFor="why"
                    className="text-sm font-bold uppercase tracking-[0.05em]"
                  >
                    Why do you want to join Movrr?
                  </Label>
                  <Textarea
                    id="why"
                    placeholder="Tell us why you're interested in becoming an Movrr rider and what you hope to gain from the experience."
                    className="min-h-[100px] rounded-none border-2"
                  />
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex items-start space-x-2"
                >
                  <Checkbox
                    id="terms"
                    required
                    className="border-2 border-border"
                  />
                  <Label htmlFor="terms" className="text-sm leading-tight">
                    {`I agree to Movrr's Terms of Service and Privacy Policy. I understand
                    that this is an application and does not guarantee acceptance into the
                    rider program.`}
                  </Label>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <MagneticButton
                    type="submit"
                    className="w-full text-base font-bold rounded-full border-2 border-secondary bg-secondary hover:bg-secondary/90 text-white uppercase tracking-[0.1em]"
                    size="xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </MagneticButton>
                </motion.div>
              </motion.form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
