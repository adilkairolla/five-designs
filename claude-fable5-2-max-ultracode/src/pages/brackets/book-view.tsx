import { useId } from "react";
import { cn } from "@/lib/cn";
import { HintsOutput, InsightsOutput, QuotesOutput, SummaryOutput } from "./book-outputs";
import { OUTPUT_GLOSS, OUTPUTS } from "./product-copy";
import type { OutputId, Pointed } from "./reader-types";
import { stepFocus } from "./step-focus";

type BookViewProps = {
  output: OutputId;
  isEntering: boolean;
  onSelectOutput: (output: OutputId) => void;
  onShowCut: (index: number) => void;
  onPoint: (pointed: Pointed) => void;
};

const TAB_STOPS = '[role="tab"]';

export function BookView({ output, isEntering, onSelectOutput, onShowCut, onPoint }: BookViewProps) {
  const id = useId();
  const tabPanelId = `${id}-panel`;
  const tabId = (outputId: OutputId) => `${id}-${outputId}`;

  return (
    <>
      <div
        role="tablist"
        aria-label="The whole book"
        className="brackets-tabs"
        onKeyDown={(event) => stepFocus(event, TAB_STOPS)}
      >
        {OUTPUTS.map(({ id: outputId, label }) => (
          <button
            key={outputId}
            type="button"
            role="tab"
            id={tabId(outputId)}
            className="brackets-tab"
            aria-selected={outputId === output}
            aria-controls={tabPanelId}
            onClick={() => onSelectOutput(outputId)}
          >
            {label}
          </button>
        ))}
      </div>
      <div
        key={output}
        role="tabpanel"
        id={tabPanelId}
        aria-labelledby={tabId(output)}
        tabIndex={0}
        className={cn("pt-3", isEntering && "animate-brackets-enter motion-reduce:animate-none")}
      >
        <p className="brackets-apparatus">{OUTPUT_GLOSS[output]}</p>
        <OutputBody output={output} onShowCut={onShowCut} onPoint={onPoint} />
      </div>
    </>
  );
}

type OutputBodyProps = Pick<BookViewProps, "output" | "onShowCut" | "onPoint">;

function OutputBody({ output, onShowCut, onPoint }: OutputBodyProps) {
  switch (output) {
    case "summary":
      return <SummaryOutput onShowCut={onShowCut} onPoint={onPoint} />;
    case "hints":
      return <HintsOutput />;
    case "quotes":
      return <QuotesOutput />;
    case "insights":
      return <InsightsOutput />;
  }
}
