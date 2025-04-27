"use client";

import * as React from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full animate-pulse"
        disabled
      >
        <div className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "relative rounded-full border border-transparent",
            "bg-background hover:bg-accent hover:text-accent-foreground",
            "transition-all duration-300 ease-in-out",
            "shadow-sm hover:shadow-md",
            "group h-10 w-10", // Fixed size for consistency
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
        >
          <Sun className="absolute h-[1.15rem] w-[1.15rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.15rem] w-[1.15rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>

          {/* Animated highlight ring */}
          <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-primary/30 transition-all duration-300" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className={cn(
          "w-40 rounded-lg p-1 shadow-lg",
          "bg-popover/95 backdrop-blur-sm", // Slightly translucent with blur
          "border border-border/50", // Subtle border
          "animate-in fade-in-80 zoom-in-95", // Smooth appear animation
          "data-[side=bottom]:slide-in-from-top-2",
          "data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2",
          "data-[side=top]:slide-in-from-bottom-2"
        )}
      >
        <DropdownMenuLabel className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
          Theme Preferences
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-border/50" />
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={cn(
            "px-2 py-1.5 text-sm rounded-md",
            "focus:bg-accent focus:text-accent-foreground",
            "transition-colors duration-150",
            theme === "light" && "bg-accent/50"
          )}
        >
          <Sun className="mr-2 h-4 w-4 opacity-70" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={cn(
            "px-2 py-1.5 text-sm rounded-md",
            "focus:bg-accent focus:text-accent-foreground",
            "transition-colors duration-150",
            theme === "dark" && "bg-accent/50"
          )}
        >
          <Moon className="mr-2 h-4 w-4 opacity-70" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={cn(
            "px-2 py-1.5 text-sm rounded-md",
            "focus:bg-accent focus:text-accent-foreground",
            "transition-colors duration-150",
            theme === "system" && "bg-accent/50"
          )}
        >
          <Laptop className="mr-2 h-4 w-4 opacity-70" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
