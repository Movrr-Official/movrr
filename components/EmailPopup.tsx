"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Gift, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function EmailPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem("movrr-email-popup-seen");
    if (hasSeenPopup) return;

    // Show popup after 30 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("movrr-email-popup-seen", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstName,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        localStorage.setItem("movrr-email-popup-seen", "true");
        setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      } else {
        setError(data.error || "Failed to subscribe");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
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
            className="bg-background border-2 border-border max-w-md w-full relative"
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
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 border-2 border-primary bg-primary/5 flex items-center justify-center mx-auto mb-6">
                      <Sparkles className="h-8 w-8 text-primary" />
                    </div>
                    <div className="inline-block border-b-2 border-primary pb-2 mb-4">
                      <span className="text-xs font-bold text-foreground uppercase tracking-[0.15em]">
                        Early Access
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                      Get Early Access
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Be the first to know when Movrr launches in your city
                    </p>
                  </div>

                  {/* Benefits - OUTFRONT style */}
                  <div className="border-2 border-border bg-card p-6 mb-8">
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b-2 border-border">
                      <Gift className="h-5 w-5 text-primary" />
                      <span className="text-sm font-bold uppercase tracking-[0.1em]">Early Access Benefits</span>
                    </div>
                    <ul className="space-y-3 text-sm text-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                        25% launch discount for first campaigns
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                        Priority access to premium locations
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                        Free consultation with our team
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                        Exclusive market insights
                      </li>
                    </ul>
                  </div>

                  {/* Form - OUTFRONT style */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="popup-firstName" className="text-sm font-bold uppercase tracking-[0.05em]">First Name</Label>
                      <Input
                        id="popup-firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter your first name"
                        className="mt-2 rounded-none border-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="popup-email" className="text-sm font-bold uppercase tracking-[0.05em]">Email Address</Label>
                      <Input
                        id="popup-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="mt-2 rounded-none border-2"
                      />
                    </div>

                    {error && (
                      <div className="border-2 border-red-500/30 bg-red-50 p-4">
                        <p className="text-sm text-red-600">{error}</p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isLoading || !email}
                      className="w-full h-12 text-base font-bold rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.1em]"
                    >
                      {isLoading ? (
                        "Subscribing..."
                      ) : (
                        <>
                          <Mail className="mr-2 h-4 w-4" />
                          Get Early Access
                        </>
                      )}
                    </Button>
                  </form>

                  <p className="text-xs text-muted-foreground text-center mt-6">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 border-2 border-primary bg-primary/5 flex items-center justify-center mx-auto mb-6">
                    <Mail className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="text-3xl font-black text-foreground mb-4">
                    Welcome aboard!
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {`Thanks for joining our early access list. We'll keep you
                    updated on our launch progress.`}
                  </p>
                  <div className="border-2 border-primary/30 bg-primary/5 p-6">
                    <p className="text-sm text-foreground leading-relaxed">
                      <strong className="font-bold">{`What's next?`}</strong>{" "}
                      {`We'll send you exclusive
                      updates and your early access discount code once we launch
                      in your area.`}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
