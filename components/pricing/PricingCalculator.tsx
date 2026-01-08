"use client";

import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Switch } from "@/components/ui/switch";

const calculatorSchema = z.object({
  riders: z.coerce.number().min(3, "Minimum 3 riders").max(100),
  weeks: z.coerce.number().min(1, "At least 1 week").max(52),
  zones: z.coerce.number().min(1, "At least 1 zone").max(10),
  includeAnalytics: z.boolean(),
  includeCreative: z.boolean(),
});

type CalculatorValues = z.infer<typeof calculatorSchema>;

const RIDER_HOURLY_RATE = 14; // base pay to riders per hour
const OVERHEAD_RATE = 0.25; // 25% overhead (equipment, logistics, admin)
const PROFIT_MARGIN = 0.3; // 30% profit margin on top of costs

export const PricingCalculator = () => {
  const [estimate, setEstimate] = useState<number | null>(null);

  const form = useForm<CalculatorValues>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      riders: 5,
      weeks: 1,
      zones: 2,
      includeAnalytics: false,
      includeCreative: false,
    },
  });

  const onSubmit = (values: CalculatorValues) => {
    const hoursPerRiderPerWeek = 10;
    const zoneMultiplier = 1 + (values.zones - 1) * 0.6; // 10% per extra zone
    const analytics = values.includeAnalytics ? 250 : 0;
    const creative = values.includeCreative ? 400 : 0;

    const baseCost =
      values.riders *
      values.weeks *
      hoursPerRiderPerWeek *
      RIDER_HOURLY_RATE *
      zoneMultiplier;

    const costWithOverhead = baseCost * (1 + OVERHEAD_RATE);

    const totalCostBeforeProfit = costWithOverhead + analytics + creative;

    const finalPrice = totalCostBeforeProfit / (1 - PROFIT_MARGIN);

    setEstimate(Math.round(finalPrice));
  };

  return (
    <section className="max-w-3xl mx-auto my-20">
      <div className="mb-8">
        <div className="inline-block border border-border bg-card px-3 py-1.5 mb-4">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Calculator
          </span>
        </div>
        <h2 className="text-5xl font-black tracking-tight mb-4">
          Estimate Your Campaign Cost
        </h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Get a quick idea of what your custom campaign might cost with Movrr.
        </p>

        <ul className="text-sm text-muted-foreground mb-6 space-y-2">
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
            <span>Most local campaigns use <strong>5–15 riders</strong></span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
            <span>Standard durations are <strong>2–6 weeks</strong></span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
            <span>Targeting <strong>1–3 zones</strong> covers most urban districts</span>
          </li>
        </ul>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 bg-background p-8 border-2 border-border"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="riders"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-bold uppercase tracking-[0.05em]">Number of Riders</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} min={5} className="rounded-none border-2" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="weeks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-bold uppercase tracking-[0.05em]">Duration (weeks)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} min={1} className="rounded-none border-2" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="zones"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-bold uppercase tracking-[0.05em]">Target Zones</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} min={2} className="rounded-none border-2" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center justify-between gap-4 pt-4 border-t-2 border-border">
            <FormField
              control={form.control}
              name="includeAnalytics"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3">
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <Label className="text-sm font-medium">Include Analytics Dashboard (€250)</Label>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="includeCreative"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3">
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <Label className="text-sm font-medium">Include Creative Support (€400)</Label>
                </FormItem>
              )}
            />
          </div>

          <MagneticButton type="submit" size="md" className="w-full h-14 text-base font-bold rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.1em]">
            Calculate Estimate
          </MagneticButton>

          {estimate !== null && (
            <div className="text-center mt-8 p-6 border-2 border-primary bg-primary/5">
              <div className="text-4xl font-black text-primary mb-2">
                €{estimate}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-[0.05em]">
                Estimated Total
              </div>
            </div>
          )}
        </form>
      </Form>
    </section>
  );
};
