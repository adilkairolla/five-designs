import { createContext, useContext } from "react";

export type DemoMode = "upload" | "sample";
export const DemoContext = createContext<{
  openDemo: (mode: DemoMode) => void;
} | null>(null);

export function useReaderDemo() {
  const value = useContext(DemoContext);
  if (!value) throw new Error("Reader demo must be inside ReaderDemoProvider");
  return value;
}
