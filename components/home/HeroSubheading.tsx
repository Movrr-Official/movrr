"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function HeroSubheading() {
  return (
    <TooltipProvider delayDuration={200}>
      <p className="max-w-4xl text-muted-foreground text-xl md:text-2xl leading-relaxed">
        Bicycle ads aren&apos;t new, but how we deploy them is. Movrr&apos;s{" "}
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="underline underline-offset-4 decoration-2 decoration-primary cursor-help font-bold text-foreground">
              Swarm
            </span>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs text-sm">
            Swarm campaigns deploy multiple riders in dense clusters across
            high-traffic zones, ideal for saturating an area with brand presence
            during key windows.
          </TooltipContent>
        </Tooltip>{" "}
        &{" "}
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="underline underline-offset-4 decoration-2 decoration-primary cursor-help font-bold text-foreground">
              Destination Ride
            </span>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs text-sm">
            Destination Ride pairs riders with daily routines that match
            specific audience profiles, letting you reach neighborhoods,
            commuters, or events with hyper-targeted visibility.
          </TooltipContent>
        </Tooltip>{" "}
        campaigns turn daily commutes into targeted, high-impact visibility.
      </p>
    </TooltipProvider>
  );
}
