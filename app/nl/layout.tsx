import type { ReactNode } from "react";
import { LocalizedAppShell } from "@/components/i18n/LocalizedAppShell";

export default function DutchLayout({ children }: { children: ReactNode }) {
  return <LocalizedAppShell locale="nl">{children}</LocalizedAppShell>;
}
