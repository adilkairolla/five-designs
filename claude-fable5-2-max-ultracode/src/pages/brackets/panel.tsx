import { useId } from "react";
import { cuts, keptFragments } from "./abridged-book";
import { BookView } from "./book-view";
import { CutView } from "./cut-view";
import { announcementFor, viewKey } from "./format";
import { FragmentView } from "./fragment-view";
import { PANEL_ID } from "./ids";
import type { Opened, OutputId, Pointed } from "./reader-types";

type PanelProps = {
  opened: Opened;
  output: OutputId;
  hasSwappedView: boolean;
  onSelectOutput: (output: OutputId) => void;
  onShowCut: (index: number) => void;
  onBackToBook: () => void;
  onPoint: (pointed: Pointed) => void;
};

export function Panel(props: PanelProps) {
  const headingId = useId();

  return (
    <section
      id={PANEL_ID}
      tabIndex={-1}
      aria-labelledby={headingId}
      className="brackets-panel bg-brackets-shell"
    >
      <h2 id={headingId} className="sr-only">
        What Ratio Reader returned
      </h2>
      <p className="sr-only" aria-live="polite">
        {announcementFor(props.opened)}
      </p>
      <div key={viewKey(props.opened)} className="brackets-panel-scroll">
        <div className="brackets-view">
          <PanelView {...props} />
        </div>
      </div>
    </section>
  );
}

function PanelView({
  opened,
  output,
  hasSwappedView,
  onSelectOutput,
  onShowCut,
  onBackToBook,
  onPoint,
}: PanelProps) {
  const cut = opened.kind === "cut" ? cuts[opened.index] : undefined;
  const fragment = opened.kind === "fragment" ? keptFragments[opened.index] : undefined;

  if (cut) return <CutView cut={cut} onShowCut={onShowCut} onBackToBook={onBackToBook} />;
  if (fragment) {
    return (
      <FragmentView
        fragment={fragment}
        onShowCut={onShowCut}
        onBackToBook={onBackToBook}
        onPoint={onPoint}
      />
    );
  }
  return (
    <BookView
      output={output}
      isEntering={hasSwappedView}
      onSelectOutput={onSelectOutput}
      onShowCut={onShowCut}
      onPoint={onPoint}
    />
  );
}
