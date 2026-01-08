"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  CookiePreferences,
  useCookiePreferences,
} from "@/app/hooks/useCookiePreferences";
import { cookieTypes } from "../page";
import { MagneticButton } from "@/components/ui/magnetic-button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CookiePreferenceManagerProps {
  showSaveButton?: boolean;
}

const CookiePreferenceManager = ({
  showSaveButton = true,
}: CookiePreferenceManagerProps) => {
  const {
    preferences,
    updatePreference,
    savePreferences,
    acceptAll,
    rejectAll,
  } = useCookiePreferences();

  return (
    <Card className="border-0 shadow-none">
      <CardContent className="p-8">
        <h2 className="text-2xl font-semibold mb-6">
          Manage Your Cookie Preferences
        </h2>
        <p className="text-muted-foreground leading-7 mb-6">
          You can control which cookies we use by adjusting your preferences
          below. Note that disabling certain cookies may affect your experience
          on our website.
        </p>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-3 mb-8 p-4 bg-muted/50 rounded-lg">
          <MagneticButton onClick={acceptAll} variant="outline" size="sm">
            Accept All
          </MagneticButton>
          <MagneticButton onClick={rejectAll} variant="outline" size="sm">
            Reject Non-Essential
          </MagneticButton>
        </div>

        <div className="space-y-6">
          {cookieTypes.map((cookie) => (
            <div key={cookie.key}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{cookie.name}</h3>
                  {cookie.required && (
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-1">
                      Required
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id={cookie.key}
                    checked={preferences[cookie.key as keyof CookiePreferences]}
                    onCheckedChange={(checked) =>
                      updatePreference(
                        cookie.key as keyof CookiePreferences,
                        checked
                      )
                    }
                    disabled={cookie.required}
                  />
                  <Label htmlFor={cookie.key} className="sr-only">
                    Toggle {cookie.name}
                  </Label>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-3">
                {cookie.description}
              </p>

              <div className="text-xs text-gray-500">
                <strong>Examples:</strong> {cookie.examples}
              </div>
            </div>
          ))}
        </div>

        {showSaveButton && (
          <TooltipProvider>
            <div className="mt-8 flex flex-wrap gap-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <MagneticButton size="md" onClick={savePreferences}>
                    Save My Choices
                  </MagneticButton>
                </TooltipTrigger>
                <TooltipContent side="top">
                  Save your current cookie preferences.
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <MagneticButton
                    size="md"
                    variant="destructive"
                    onClick={() => {
                      if (window.Cookiebot?.withdrawConsentFor) {
                        window.Cookiebot.withdrawConsentFor([]);
                      }
                      localStorage.setItem("movrr_cookie_consent", "withdrawn");
                      localStorage.removeItem("movrr_cookie_preferences");
                      location.reload();
                    }}
                  >
                    Withdraw All Consent
                  </MagneticButton>
                </TooltipTrigger>
                <TooltipContent side="top">
                  Revoke all non-essential cookie permissions.
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        )}
      </CardContent>
    </Card>
  );
};

export default CookiePreferenceManager;
