import { useReducer } from "react";
import { marksOf } from "./cut-contents";
import { isOpenAt, NOTHING } from "./reader-types";
import type { Opened, OutputId, Pointed, Target } from "./reader-types";
import { focusPanelIfFocusInside, revealPanel } from "./reveal-panel";

type ReaderState = {
  opened: Opened;
  output: OutputId;
  pointed: Pointed;
  hasSwappedView: boolean;
};

type ReaderEvent =
  | { type: "toggled"; target: Target }
  | { type: "shown"; target: Target }
  | { type: "closed" }
  | { type: "outputSelected"; output: OutputId }
  | { type: "pointed"; pointed: Pointed };

const INITIAL_STATE: ReaderState = {
  opened: NOTHING,
  output: "summary",
  pointed: NOTHING,
  hasSwappedView: false,
};

function reduce(state: ReaderState, event: ReaderEvent): ReaderState {
  switch (event.type) {
    case "toggled":
      return {
        ...state,
        opened: isOpenAt(state.opened, event.target) ? NOTHING : event.target,
        hasSwappedView: true,
      };
    // The control that was pressed is unmounted by the swap, so its
    // pointerleave never arrives to clear what it pointed at.
    case "shown":
      return { ...state, opened: event.target, pointed: NOTHING, hasSwappedView: true };
    case "closed":
      return { ...state, opened: NOTHING, pointed: NOTHING, hasSwappedView: true };
    case "outputSelected":
      return { ...state, output: event.output, hasSwappedView: true };
    case "pointed":
      return { ...state, pointed: event.pointed };
  }
}

export function useBracketReader() {
  const [state, dispatch] = useReducer(reduce, INITIAL_STATE);

  return {
    opened: state.opened,
    output: state.output,
    marks: marksOf(state.pointed),
    hasSwappedView: state.hasSwappedView,
    toggle: (target: Target) => {
      const opens = !isOpenAt(state.opened, target);
      dispatch({ type: "toggled", target });
      if (opens) revealPanel(false);
    },
    show: (target: Target) => {
      dispatch({ type: "shown", target });
      revealPanel(true);
    },
    backToBook: () => {
      dispatch({ type: "closed" });
      revealPanel(true);
    },
    dismiss: () => {
      if (state.opened.kind === "none") return;
      focusPanelIfFocusInside();
      dispatch({ type: "closed" });
    },
    selectOutput: (output: OutputId) => dispatch({ type: "outputSelected", output }),
    point: (pointed: Pointed) => dispatch({ type: "pointed", pointed }),
  };
}
