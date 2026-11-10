import { RELEASE } from "./axis-copy";
import type { TraceRow } from "./axis-rows";
import { describeTrace } from "./trace";
import { useTrace } from "./trace-context";

export function TraceReadout({ rows }: { rows: readonly TraceRow[] }) {
  const { state, releaseToOrigin } = useTrace();
  const tracing = state.status === "tracing";
  const word = state.status === "tracing" ? state.word : state.last;
  const report = word ? describeTrace(word, rows) : null;

  return (
    <>
      <p role="status" className="sr-only">
        {tracing && report ? report.spoken : ""}
      </p>
      <div className="axis-readout" data-open={tracing}>
        {word && report && (
          <div className="axis-row">
            <span className="axis-left" aria-hidden="true">
              <span className="axis-left-text">{report.countLine}</span>
            </span>
            <span className="axis-key">
              <span aria-hidden="true">{word.label}</span>
              <button
                type="button"
                className="axis-release"
                aria-label={`${RELEASE} ${word.label}`}
                onClick={releaseToOrigin}
              >
                {RELEASE}
              </button>
            </span>
            <span className="axis-right" aria-hidden="true">
              <span className="axis-tally">{report.tally}</span>
              {report.book}
            </span>
          </div>
        )}
      </div>
    </>
  );
}
