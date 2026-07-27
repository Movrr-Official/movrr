"use client";

import { createContext, useContext } from "react";

const PageCopyContext = createContext<unknown>(null);

export function PageCopyProvider<T>({
  copy,
  children,
}: {
  copy: T;
  children: React.ReactNode;
}) {
  return (
    <PageCopyContext.Provider value={copy}>
      {children}
    </PageCopyContext.Provider>
  );
}

export function usePageCopy<T>(): T {
  const copy = useContext(PageCopyContext);
  if (!copy) throw new Error("usePageCopy must be used within PageCopyProvider");
  return copy as T;
}
