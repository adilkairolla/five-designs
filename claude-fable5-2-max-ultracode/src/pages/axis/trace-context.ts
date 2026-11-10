import { createContext, use } from "react";
import { carries } from "./kwic";
import type { TraceState } from "./trace";

export type TraceApi = {
  state: TraceState;
  toggle: (key: string, origin: HTMLElement) => void;
  releaseToOrigin: () => void;
};

export const TraceContext = createContext<TraceApi | null>(null);

export function useTrace(): TraceApi {
  const trace = use(TraceContext);
  if (!trace) throw new Error("useTrace needs a TraceContext above it");
  return trace;
}

export function useRowDimmed(text: string): boolean {
  const { state } = useTrace();
  return state.status === "tracing" && !carries(text, state.word.stem);
}
