"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Users, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

interface LaunchWaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LaunchWaitlistModal({
  isOpen,
  onClose,
}: LaunchWaitlistModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    budget: "",
    city: "",
    interests: [] as string[],
    newsletter: true,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/waitlist/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
      } else {
        setError(data.error || "Failed to join waitlist");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        role: "",
        budget: "",
        city: "",
        interests: [],
        newsletter: true,
      });
      setError("");
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-background border-2 border-border max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
          >
            {/* Close button - OUTFRONT style */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="p-8 lg:p-10">
              {!isSubmitted ? (
                <>
                  {/* Header - OUTFRONT style */}
                  <div className="text-center mb-10">
                    <div className="w-16 h-16 border-2 border-primary bg-primary/5 flex items-center justify-center mx-auto mb-6">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <div className="inline-block border-b-2 border-primary pb-2 mb-4">
                      <span className="text-xs font-bold text-foreground uppercase tracking-[0.15em]">
                        Launch Waitlist
                      </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
                      Join Our Launch Waitlist
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Be among the first to experience bicycle advertising in
                      the Netherlands
                    </p>
                  </div>

                  {/* Benefits - OUTFRONT style */}
                  <div className="border-2 border-border bg-card p-8 mb-10">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-border">
                      <Sparkles className="h-5 w-5 text-primary" />
                      <h3 className="text-sm font-bold text-foreground uppercase tracking-[0.15em]">
                        Launch Partner Benefits
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">
                          25% discount on first campaign
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">
                          Priority location access
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">
                          Free campaign consultation
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">
                          Exclusive market insights
                        </span>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label
                          htmlFor="firstName"
                          className="text-sm font-bold uppercase tracking-[0.05em]"
                        >
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              firstName: e.target.value,
                            }))
                          }
                          placeholder="Enter your first name"
                          required
                          className="mt-2 rounded-none border-2"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="lastName"
                          className="text-sm font-bold uppercase tracking-[0.05em]"
                        >
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              lastName: e.target.value,
                            }))
                          }
                          placeholder="Enter your last name"
                          required
                          className="mt-2 rounded-none border-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="email"
                        className="text-sm font-bold uppercase tracking-[0.05em]"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        placeholder="Enter your email address"
                        required
                        className="mt-2 rounded-none border-2"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label
                          htmlFor="company"
                          className="text-sm font-bold uppercase tracking-[0.05em]"
                        >
                          Company *
                        </Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              company: e.target.value,
                            }))
                          }
                          placeholder="Enter your company name"
                          required
                          className="mt-2 rounded-none border-2"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="role"
                          className="text-sm font-bold uppercase tracking-[0.05em]"
                        >
                          Role *
                        </Label>
                        <Select
                          value={formData.role}
                          onValueChange={(value) =>
                            setFormData((prev) => ({ ...prev, role: value }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="marketing-manager">
                              Marketing Manager
                            </SelectItem>
                            <SelectItem value="marketing-director">
                              Marketing Director
                            </SelectItem>
                            <SelectItem value="cmo">CMO</SelectItem>
                            <SelectItem value="brand-manager">
                              Brand Manager
                            </SelectItem>
                            <SelectItem value="advertising-manager">
                              Advertising Manager
                            </SelectItem>
                            <SelectItem value="founder-ceo">
                              Founder/CEO
                            </SelectItem>
                            <SelectItem value="agency-owner">
                              Agency Owner
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label
                          htmlFor="budget"
                          className="text-sm font-bold uppercase tracking-[0.05em]"
                        >
                          Monthly Marketing Budget
                        </Label>
                        <Select
                          value={formData.budget}
                          onValueChange={(value) =>
                            setFormData((prev) => ({ ...prev, budget: value }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-5k">
                              Under €5,000
                            </SelectItem>
                            <SelectItem value="5k-15k">
                              €5,000 - €15,000
                            </SelectItem>
                            <SelectItem value="15k-50k">
                              €15,000 - €50,000
                            </SelectItem>
                            <SelectItem value="50k-100k">
                              €50,000 - €100,000
                            </SelectItem>
                            <SelectItem value="over-100k">
                              Over €100,000
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label
                          htmlFor="city"
                          className="text-sm font-bold uppercase tracking-[0.05em]"
                        >
                          Target City
                        </Label>
                        <Select
                          value={formData.city}
                          onValueChange={(value) =>
                            setFormData((prev) => ({ ...prev, city: value }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select target city" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="the-hague">
                              The Hague (Launch City)
                            </SelectItem>
                            <SelectItem value="rotterdam">
                              Rotterdam (Launch City)
                            </SelectItem>
                            <SelectItem value="amsterdam">
                              Amsterdam (Coming 2024)
                            </SelectItem>
                            <SelectItem value="utrecht">
                              Utrecht (Coming 2024)
                            </SelectItem>
                            <SelectItem value="eindhoven">
                              Eindhoven (Coming 2024)
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-bold uppercase tracking-[0.05em]">
                        Areas of Interest
                      </Label>
                      <div className="grid grid-cols-2 gap-4 mt-2">
                        {[
                          "Brand Awareness",
                          "Local Marketing",
                          "Event Promotion",
                          "Product Launches",
                          "Sustainable Marketing",
                          "Community Engagement",
                        ].map((interest) => (
                          <div
                            key={interest}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={interest}
                              checked={formData.interests.includes(interest)}
                              onCheckedChange={() =>
                                handleInterestToggle(interest)
                              }
                            />
                            <Label htmlFor={interest} className="text-sm">
                              {interest}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) =>
                          setFormData((prev) => ({
                            ...prev,
                            newsletter: checked as boolean,
                          }))
                        }
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        Subscribe to our newsletter for updates and cycling
                        industry insights
                      </Label>
                    </div>

                    {error && (
                      <div className="border-2 border-red-500/30 bg-red-50 p-4">
                        <p className="text-red-600 text-sm">{error}</p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={
                        isLoading ||
                        !formData.firstName ||
                        !formData.lastName ||
                        !formData.email ||
                        !formData.company
                      }
                      className="w-full h-14 text-base font-bold rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.1em]"
                    >
                      {isLoading ? (
                        "Joining Waitlist..."
                      ) : (
                        <>
                          <Users className="mr-2 h-5 w-5" />
                          Join Launch Waitlist
                        </>
                      )}
                    </Button>
                  </form>

                  <p className="text-xs text-muted-foreground text-center mt-6">
                    By joining our waitlist, you agree to receive updates about
                    Movrr. We respect your privacy and you can unsubscribe at
                    any time.
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 border-2 border-primary bg-primary/5 flex items-center justify-center mx-auto mb-8">
                    <CheckCircle className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="text-4xl font-black text-foreground mb-6">
                    Welcome to Movrr!
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    You&apos;re now on our launch waitlist. We&apos;ll keep you
                    updated on our progress and reach out with your exclusive
                    benefits.
                  </p>

                  <div className="border-2 border-border bg-card p-8 mb-8">
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-[0.15em] mb-6">
                      What happens next?
                    </h3>
                    <div className="space-y-4 text-sm text-foreground">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 border-2 border-primary bg-primary/5 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-black text-sm">
                            1
                          </span>
                        </div>
                        <span className="leading-relaxed">
                          We&apos;ll send you exclusive updates as we approach
                          launch
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 border-2 border-primary bg-primary/5 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-black text-sm">
                            2
                          </span>
                        </div>
                        <span className="leading-relaxed">
                          You&apos;ll get early access to book your first
                          campaign
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 border-2 border-primary bg-primary/5 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-black text-sm">
                            3
                          </span>
                        </div>
                        <span className="leading-relaxed">
                          Our team will reach out to discuss your specific needs
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handleClose}
                    className="w-full h-14 text-base font-bold rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.1em]"
                  >
                    Continue Exploring
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
