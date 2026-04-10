"use client";

// ─── Campaign Reach Preview — Hook ────────────────────────────────────────────
// Manages guided flow state, triggers validation, and calls the service.
// No UI logic. No rendering. State only.

import { useState, useMemo } from "react";
import type {
  CityId,
  CampaignScale,
  CampaignOutput,
  FlowStep,
} from "../types/campaignReach.types";
import { calculateCampaignReach } from "../services/campaignReach.service";
import { validateCampaignInput } from "../validators/campaignReach.validator";

interface UseCampaignReachReturn {
  step: FlowStep;
  selectedCityId: CityId | null;
  selectedScale: CampaignScale | null;
  output: CampaignOutput | null;
  selectCity: (id: CityId) => void;
  selectScale: (scale: CampaignScale) => void;
  reset: () => void;
}

export function useCampaignReach(): UseCampaignReachReturn {
  const [step, setStep] = useState<FlowStep>("city");
  const [selectedCityId, setSelectedCityId] = useState<CityId | null>(null);
  const [selectedScale, setSelectedScale] = useState<CampaignScale | null>(null);

  // Recalculates only when both inputs are present and valid.
  const output = useMemo<CampaignOutput | null>(() => {
    if (!selectedCityId || !selectedScale) return null;

    const validated = validateCampaignInput({
      cityId: selectedCityId,
      scale: selectedScale,
    });

    if (!validated) return null;

    return calculateCampaignReach(validated);
  }, [selectedCityId, selectedScale]);

  const selectCity = (id: CityId) => {
    setSelectedCityId(id);
    setSelectedScale(null);
    setStep("scale");
  };

  const selectScale = (scale: CampaignScale) => {
    setSelectedScale(scale);
    setStep("reveal");
  };

  const reset = () => {
    setStep("city");
    setSelectedCityId(null);
    setSelectedScale(null);
  };

  return {
    step,
    selectedCityId,
    selectedScale,
    output,
    selectCity,
    selectScale,
    reset,
  };
}
