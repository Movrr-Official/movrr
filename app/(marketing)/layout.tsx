import type { ReactNode } from "react";
import { LocalizedAppShell } from "@/components/i18n/LocalizedAppShell";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return <LocalizedAppShell locale="en">{children}</LocalizedAppShell>;
}
