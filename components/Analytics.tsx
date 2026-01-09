"use client";

import { useEffect } from "react";
import { ErrorBoundary } from "./ErrorBoundary";

function AnalyticsContent() {
  useEffect(() => {
    // Analytics initialization can go here
    // Example: Vercel Analytics, Google Analytics, etc.
    
    // If using Vercel Analytics, it's already included via @vercel/analytics
    // No additional setup needed if using the package
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null; // Analytics components typically don't render anything
}

export default function Analytics() {
  return (
    <ErrorBoundary
      fallback={
        // Silently fail analytics - don't break the page
        <div style={{ display: "none" }} aria-hidden="true" />
      }
    >
      <AnalyticsContent />
    </ErrorBoundary>
  );
}
