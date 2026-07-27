import type { ReactNode } from "react";
import { headers } from "next/headers";
import { LocalizedAppShell } from "@/components/i18n/LocalizedAppShell";
import { REQUEST_PATHNAME_HEADER } from "@/lib/i18n/config";

export default async function DutchLayout({ children }: { children: ReactNode }) {
  const requestHeaders = await headers();
  const pathname = requestHeaders.get(REQUEST_PATHNAME_HEADER);
  if (pathname === "/nl/machine") return children;
  return <LocalizedAppShell locale="nl">{children}</LocalizedAppShell>;
}
