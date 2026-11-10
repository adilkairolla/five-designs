import { stemOf } from "./kwic";
import { useTrace } from "./trace-context";

type TraceKeyProps = { word: string; tail?: string };

export function TraceKey({ word, tail = "" }: TraceKeyProps) {
  const { state, toggle } = useTrace();
  const pressed = state.status === "tracing" && state.word.stem === stemOf(word);

  return (
    <button
      type="button"
      className="axis-key"
      data-axis-key
      aria-pressed={pressed}
      onClick={(event) => toggle(word, event.currentTarget)}
    >
      <span className="axis-word">{word}</span>
      {tail}
    </button>
  );
}
