import { JumpLink } from "@/components/jump-link";
import { book } from "@/content/origin-of-species";
import type { PdfPick } from "@/lib/use-pdf-picker";
import { EditorNotes } from "./editor-notes";
import { SAMPLE_ID } from "./ids";
import { PageStrip } from "./page-strip";
import { Panel } from "./panel";
import { Paragraph } from "./paragraph";
import { HOW_TO } from "./product-copy";
import { TitleBlock } from "./title-block";
import { UploadNote } from "./upload-note";
import { useBracketReader } from "./use-bracket-reader";

type StageProps = {
  pick: PdfPick;
  onPickAgain: () => void;
  onDismiss: () => void;
};

export function Stage({ pick, onPickAgain, onDismiss }: StageProps) {
  const reader = useBracketReader();

  return (
    <div
      className="brackets-wrap brackets-cols brackets-stage"
      onKeyDown={(event) => {
        if (event.key === "Escape") reader.dismiss();
      }}
    >
      <TitleBlock />
      <UploadNote
        pick={pick}
        whereToLook={
          <JumpLink to={SAMPLE_ID} className="brackets-link">
            See the sample
          </JumpLink>
        }
        onPickAgain={onPickAgain}
        onDismiss={onDismiss}
      >
        {HOW_TO}
      </UploadNote>
      <section
        id={SAMPLE_ID}
        tabIndex={-1}
        className="brackets-text"
        aria-label={`The sample: ${book.title} in one paragraph`}
      >
        <Paragraph
          opened={reader.opened}
          marks={reader.marks}
          onToggle={reader.toggle}
          onPoint={reader.point}
        />
        <PageStrip
          opened={reader.opened}
          marks={reader.marks}
          onToggle={reader.toggle}
          onPoint={reader.point}
        />
      </section>
      <Panel
        opened={reader.opened}
        output={reader.output}
        hasSwappedView={reader.hasSwappedView}
        onSelectOutput={reader.selectOutput}
        onShowCut={(index) => reader.show({ kind: "cut", index })}
        onBackToBook={reader.backToBook}
        onPoint={reader.point}
      />
      <EditorNotes />
    </div>
  );
}
