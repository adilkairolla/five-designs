import "@fontsource-variable/chivo-mono/wght.css";
import "@fontsource-variable/chivo-mono/wght-italic.css";
import { JumpLink } from "@/components/jump-link";
import { HEADS, NOTE_ROWS, SKIP, STEP_ROWS, TITLE, UPLOAD } from "./axis-copy";
import { Colophon } from "./colophon";
import { HintsSection } from "./hints-section";
import { InsightsSection } from "./insights-section";
import { moveAlongKeys } from "./key-column-arrows";
import { Masthead } from "./masthead";
import { PlainSection } from "./plain-section";
import { QuotesSection } from "./quotes-section";
import { SampleIntro } from "./sample-intro";
import { SummarySection } from "./summary-section";
import { TraceContext } from "./trace-context";
import { TraceReadout } from "./trace-readout";
import { UploadRow } from "./upload-row";
import { useIndexForWidth } from "./use-index-for-width";
import { useOpenPassages } from "./use-open-passages";
import { useTraceState } from "./use-trace-state";

export function AxisPage() {
  const trace = useTraceState();
  const passages = useOpenPassages();
  const index = useIndexForWidth();

  return (
    <div className="axis min-h-dvh font-axis-mono text-axis-ink" onKeyDown={moveAlongKeys}>
      <title>{TITLE}</title>
      <TraceContext value={trace}>
        <JumpLink to="axis-sample" className="axis-skip">
          {SKIP}
        </JumpLink>
        <div className="axis-stripe" aria-hidden="true" />
        <Masthead />
        <main>
          <SampleIntro />
          <SummarySection onReveal={passages.reveal} />
          <HintsSection terms={index.terms} onReveal={passages.reveal} />
          <QuotesSection rows={index.quotes} budget={index.quoteWindow} passages={passages} />
          <InsightsSection onReveal={passages.reveal} />
          <PlainSection head={HEADS.steps} rows={STEP_ROWS} ordered />
          <PlainSection head={HEADS.notes} rows={NOTE_ROWS} apart />
          <section className="axis-section axis-section--closing" aria-label={UPLOAD.sectionLabel}>
            <UploadRow idle={<p>{UPLOAD.closingIdle}</p>} />
          </section>
        </main>
        <Colophon />
        <TraceReadout rows={index.traceRows} />
      </TraceContext>
    </div>
  );
}
