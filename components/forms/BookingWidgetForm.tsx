"use client";

import React, { useState } from "react";
import { Calendar, CheckCircle, AlertCircle, Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import { MagneticButton } from "../ui/magnetic-button";
import { Checkbox } from "../ui/checkbox";

const BookingWidgetForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    city: "",
    budget: "",
    timeSlot: "",
    model: "destination",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate booking submission
    await new Promise((res) => setTimeout(res, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
              <h3 className="text-4xl font-black mb-6">Request Received!</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-md leading-relaxed">
                Thanks, {formData.name}! We&apos;ll send a calendar invite to{" "}
                {formData.email} within 24 hours to confirm your strategy
                session.
              </p>
              <MagneticButton
                size="xl"
                onClick={() => setIsSubmitted(false)}
                className="h-14 px-8 text-base font-bold rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.1em]"
              >
                Book another session
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
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-2">
                    Book Your Free Consultation
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Let&apos;s discuss how Movrr&apos;s hyper-local rider
                    network can amplify your brand visibility with real-time
                    campaign insights.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-10 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-sm font-bold uppercase tracking-[0.05em]"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-bold uppercase tracking-[0.05em]"
                    >
                      Work Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="company"
                      className="text-sm font-bold uppercase tracking-[0.05em]"
                    >
                      Company
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-bold uppercase tracking-[0.05em]"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="city"
                      className="text-sm font-bold uppercase tracking-[0.05em]"
                    >
                      Target City
                    </Label>
                    <Select
                      value={formData.city}
                      onValueChange={(value) =>
                        handleInputChange("city", value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rotterdam">
                          Rotterdam (Launch City)
                        </SelectItem>
                        <SelectItem value="the-hague">
                          The Hague (Coming Soon)
                        </SelectItem>
                        <SelectItem value="amsterdam">
                          Amsterdam (Coming Soon)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="budget"
                      className="text-sm font-bold uppercase tracking-[0.05em]"
                    >
                      Monthly Budget Range
                    </Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) =>
                        handleInputChange("budget", value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1000-2500">
                          €1,000 - €2,500
                        </SelectItem>
                        <SelectItem value="2500-5000">
                          €2,500 - €5,000
                        </SelectItem>
                        <SelectItem value="5000-10000">
                          €5,000 - €10,000
                        </SelectItem>
                        <SelectItem value="10000+">€10,000+</SelectItem>
                        <SelectItem value="unsure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="timeSlot"
                    className="text-sm font-bold uppercase tracking-[0.05em]"
                  >
                    Preferred Time Slot
                  </Label>
                  <Select
                    value={formData.timeSlot}
                    onValueChange={(value) =>
                      handleInputChange("timeSlot", value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">
                        Morning (9:00 - 12:00 CET)
                      </SelectItem>
                      <SelectItem value="afternoon">
                        Afternoon (13:00 - 17:00 CET)
                      </SelectItem>
                      <SelectItem value="evening">
                        Early Evening (17:00 - 19:00 CET)
                      </SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="model"
                    className="text-sm font-bold uppercase tracking-[0.05em]"
                  >
                    Campaign Type
                  </Label>
                  <Select
                    value={formData.model}
                    onValueChange={(value) => handleInputChange("model", value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="destination">
                        Destination Ride
                      </SelectItem>
                      <SelectItem value="swarm">Swarm Campaign</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-sm font-bold uppercase tracking-[0.05em]"
                  >
                    Tell us about your advertising goals
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    placeholder="What are you hoping to achieve with bicycle advertising? Any specific questions or requirements?"
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms-privacy"
                    required
                    className="border-2 border-border"
                  />
                  <Label
                    htmlFor="terms-privacy"
                    className="text-sm leading-tight"
                  >
                    {`I agree to Movrr's Terms of Service and Privacy Policy, and
                    understand that my information may be used to contact me.*`}
                  </Label>
                </div>

                <div className="border-2 border-primary/30 bg-primary/5 p-6">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-base text-foreground leading-relaxed">
                      Movrr is currently in pre-launch. This session will help
                      you plan your campaign and secure exclusive early access
                      benefits.
                    </p>
                  </div>
                </div>

                <MagneticButton
                  type="submit"
                  className="w-full text-base font-bold rounded-full border-2 border-secondary bg-secondary hover:bg-secondary/90 text-white uppercase tracking-[0.1em]"
                  size="xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-primary-foreground border-t-transparent mr-2"
                        animate={{ rotate: 360 }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 1,
                          ease: "linear",
                        }}
                      />
                      Booking Consultation...
                    </>
                  ) : (
                    <>
                      <Rocket className="mr-2 h-4 w-4" />
                      Join the Partner Program
                    </>
                  )}
                </MagneticButton>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  No commitments required, just your interest. We&apos;ll get
                  back to you within 48 hours. No pressure, no spam.
                </p>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BookingWidgetForm;
