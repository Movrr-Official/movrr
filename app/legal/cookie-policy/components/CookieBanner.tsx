"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Settings } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCookiePreferences } from "@/app/hooks/useCookiePreferences";
import Link from "next/link";
import CookiePreferenceManager from "./CookiePreferenceManager";
import { useCookiebotIntegration } from "@/app/hooks/useCookiebotIntegration";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const { acceptAll, rejectAll } = useCookiePreferences();
  const { isCookiebotLoaded, openCookiebotPreferences } =
    useCookiebotIntegration();

  useEffect(() => {
    const hasConsented = localStorage.getItem("movrr_cookie_consent");
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    if (
      isCookiebotLoaded &&
      window.Cookiebot?.giveConsentFor &&
      typeof window.Cookiebot.giveConsentFor === "function"
    ) {
      // Consent categories Cookiebot expects: preferences, statistics, marketing
      window.Cookiebot.giveConsentFor([
        "preferences",
        "statistics",
        "marketing",
      ]);
    }
    acceptAll();
    localStorage.setItem("movrr_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    if (
      isCookiebotLoaded &&
      window.Cookiebot?.withdrawConsentFor &&
      typeof window.Cookiebot.withdrawConsentFor === "function"
    ) {
      window.Cookiebot.withdrawConsentFor([
        "preferences",
        "statistics",
        "marketing",
      ]);
    }
    rejectAll();
    localStorage.setItem("movrr_cookie_consent", "rejected");
    setIsVisible(false);
  };

  const handleCustomize = () => {
    localStorage.setItem("movrr_cookie_consent", "customized");
    setIsVisible(false);
    setShowSettings(false);
    if (isCookiebotLoaded) {
      openCookiebotPreferences();
    } else {
      setShowSettings(true); // fallback to your custom dialog if Cookiebot unavailable
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/50 backdrop-blur-md">
      <Card className="mx-auto max-w-4xl border-2 border-border rounded-none">
        <CardContent className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1 pr-6">
              <div className="inline-block border border-border bg-card px-3 py-1.5 mb-4">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Cookie Consent
                </span>
              </div>
              <h3 className="text-2xl font-black mb-3">
                We use cookies to enhance your experience
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                We use cookies to provide essential website functionality,
                analyze usage patterns, and improve our services. You can
                customize your preferences or accept all cookies.{" "}
                <Link
                  href="/cookie-policy"
                  className="text-primary hover:text-primary/80 underline underline-offset-4 decoration-primary font-medium"
                >
                  Learn more about our cookie policy
                </Link>
                .
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsVisible(false)}
              className="flex-shrink-0 rounded-none border-2 border-transparent hover:border-border"
              aria-label="Close cookie consent banner"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t-2 border-border">
            <Button 
              size="sm" 
              onClick={handleAcceptAll}
              className="h-12 px-6 text-sm font-bold rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.1em]"
            >
              Accept All Cookies
            </Button>
            <Button 
              size="sm" 
              onClick={handleRejectAll} 
              variant="outline"
              className="h-12 px-6 text-sm font-bold rounded-none border-2 uppercase tracking-[0.1em]"
            >
              Reject Non-Essential
            </Button>

            {!isCookiebotLoaded ? (
              <Dialog open={showSettings} onOpenChange={setShowSettings}>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="h-12 px-6 text-sm font-bold rounded-none border-2 uppercase tracking-[0.1em]"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Customize
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto border-2 border-border rounded-none">
                  <DialogHeader className="border-b-2 border-border pb-6 mb-6">
                    <DialogTitle className="text-3xl font-black">Cookie Preferences</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <CookiePreferenceManager showSaveButton={false} />
                    <div className="mt-8 flex justify-end pt-6 border-t-2 border-border">
                      <Button 
                        size="sm" 
                        onClick={handleCustomize}
                        className="h-12 px-6 text-sm font-bold rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.1em]"
                      >
                        Save & Close
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ) : (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleCustomize}
                className="h-12 px-6 text-sm font-bold rounded-none border-2 uppercase tracking-[0.1em]"
              >
                <Settings className="h-4 w-4 mr-2" />
                Customize
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieBanner;
