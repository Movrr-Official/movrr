"use client";

import { useState } from "react";
import { HelpHeader } from "@/components/help/HelpHeader";
import { HelpTopics } from "@/components/help/HelpTopics";

export function HelpExperience() {
  const [query, setQuery] = useState("");

  return (
    <>
      <HelpHeader query={query} onQueryChange={setQuery} />
      <HelpTopics query={query} />
    </>
  );
}
