"use client";

import { motion } from "framer-motion";
import { CITIES } from "../config/campaignReach.config";
import type { CityId, CityData, LaunchStatus } from "../types/campaignReach.types";

interface CitySelectorProps {
  selectedId: CityId | null;
  onSelect: (id: CityId) => void;
}

const statusLabel: Record<LaunchStatus, string> = {
  live: "Live",
  upcoming: "Launching soon",
  planned: "Coming soon",
};

export function CitySelector({ selectedId, onSelect }: CitySelectorProps) {
  const cities = Object.values(CITIES) as CityData[];

  return (
    <div className="divide-y divide-movrr-border-soft border-t border-movrr-border-soft">
      {cities.map((city, i) => {
        const isSelected = selectedId === city.id;

        return (
          <motion.button
            key={city.id}
            type="button"
            onClick={() => onSelect(city.id)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: i * 0.06,
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group flex w-full items-center justify-between py-6 text-left transition-colors duration-150"
          >
            <div className="flex items-center gap-4">
              <span
                className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-200 ${
                  isSelected
                    ? "bg-movrr-success"
                    : "bg-movrr-border-soft group-hover:bg-movrr-text-brand/20"
                }`}
              />
              <div>
                <p
                  className={`text-lg font-semibold tracking-[-0.02em] transition-colors duration-200 ${
                    isSelected
                      ? "text-movrr-text-brand"
                      : "text-movrr-text-brand/55 group-hover:text-movrr-text-brand"
                  }`}
                >
                  {city.name}
                </p>
                <p className="text-xs text-movrr-text-brand/30">{city.country}</p>
              </div>
            </div>

            <span
              className={`text-[0.62rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${
                city.launchStatus === "live"
                  ? "text-movrr-success"
                  : isSelected
                  ? "text-movrr-text-brand/40"
                  : "text-movrr-text-brand/25"
              }`}
            >
              {statusLabel[city.launchStatus]}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
