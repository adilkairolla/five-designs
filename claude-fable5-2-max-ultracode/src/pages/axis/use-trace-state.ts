import { useEffect, useReducer, useRef } from "react";
import { IDLE, traceReducer, traceWord } from "./trace";
import type { TraceApi } from "./trace-context";

export function useTraceState(): TraceApi {
  const [state, dispatch] = useReducer(traceReducer, IDLE);
  const originRef = useRef<HTMLElement | null>(null);
  const tracing = state.status === "tracing";

  useEffect(() => {
    if (!tracing) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      dispatch({ type: "release" });
      const active = document.activeElement;
      // "release" is about to be hidden, so focus cannot stay on it.
      if (active instanceof HTMLElement && active.closest(".axis-readout")) {
        originRef.current?.focus({ preventScroll: true });
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [tracing]);

  return {
    state,
    toggle: (key, origin) => {
      originRef.current = origin;
      dispatch({ type: "toggle", word: traceWord(key) });
    },
    releaseToOrigin: () => {
      dispatch({ type: "release" });
      originRef.current?.focus({ preventScroll: true });
    },
  };
}
