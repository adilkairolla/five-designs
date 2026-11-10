import type { ReactNode } from "react";
import { book } from "@/content/origin-of-species";
import { cuts } from "./abridged-book";
import type { Cut } from "./abridged-book";
import { BracketMark } from "./bracket-mark";
import { contentsOf } from "./cut-contents";
import type { CutContents } from "./cut-contents";
import { DarwinQuote } from "./darwin-quote";
import { cutMeta, cutTitle, NONE_FOR_THESE_PAGES, summaryGapNote } from "./format";
import { BackToParagraph, ChapterList, NoteList, SentenceList, ViewHead } from "./view-parts";

type CutViewProps = {
  cut: Cut;
  onShowCut: (index: number) => void;
  onBackToBook: () => void;
};

export function CutView({ cut, onShowCut, onBackToBook }: CutViewProps) {
  const contents = contentsOf(cut);

  return (
    <>
      <ViewHead
        echo={<BracketMark cut={cut} />}
        title={cutTitle(cut)}
        meta={cutMeta(cut, contents.readingSeconds)}
        onBackToBook={onBackToBook}
      />
      <div className="animate-brackets-enter-body motion-reduce:animate-none">
        <Group label="Chapters in these pages">
          {contents.chapters.length > 0 ? (
            <ChapterList chapters={contents.chapters} />
          ) : (
            <p className="mt-1">None. The text ends on page {book.text.to}.</p>
          )}
        </Group>
        <CutOutputs cut={cut} contents={contents} />
        <Group label="Kept on either side">
          <div className="mt-1 space-y-3">
            <DarwinQuote text={cut.before.kept} pages={cut.before.page} />
            {cut.after ? (
              <DarwinQuote text={cut.after.kept} pages={cut.after.page} />
            ) : (
              <p>Nothing follows. The book ends on page {book.pages}.</p>
            )}
          </div>
        </Group>
        <NeighbourCuts cut={cut} onShowCut={onShowCut} />
        <BackToParagraph />
      </div>
    </>
  );
}

function Group({ label, children }: { label: string; children: ReactNode }) {
  return (
    <>
      <h4 className="brackets-label">{label}</h4>
      {children}
    </>
  );
}

function CutOutputs({ cut, contents }: { cut: Cut; contents: CutContents }) {
  const { sentences, hints, quotes, insights } = contents;
  const holdsNothing = sentences.length + hints.length + quotes.length + insights.length === 0;

  if (holdsNothing) {
    return (
      <p className="mt-5">
        Nothing in the summary, the hints, the quotes or the insights rests on these pages.
      </p>
    );
  }

  return (
    <>
      <Group label="Summary">
        {sentences.length > 0 ? (
          <SentenceList sentences={sentences} />
        ) : (
          <p className="mt-1">{summaryGapNote(cut)}</p>
        )}
      </Group>
      <Group label="Hints">
        {hints.length > 0 ? (
          <NoteList notes={hints} level="h5" className="mt-1 space-y-3" />
        ) : (
          <p className="mt-1">{NONE_FOR_THESE_PAGES}</p>
        )}
      </Group>
      <Group label="Quotes">
        {quotes.length > 0 ? (
          <div className="mt-1 space-y-3">
            {quotes.map((quote) => (
              <DarwinQuote key={quote.text} text={quote.text} pages={quote.pages} />
            ))}
          </div>
        ) : (
          <p className="mt-1">{NONE_FOR_THESE_PAGES}</p>
        )}
      </Group>
      <Group label="Insights">
        {insights.length > 0 ? (
          <NoteList notes={insights} level="h5" className="mt-1 space-y-3" />
        ) : (
          <p className="mt-1">{NONE_FOR_THESE_PAGES}</p>
        )}
      </Group>
    </>
  );
}

function NeighbourCuts({ cut, onShowCut }: Pick<CutViewProps, "cut" | "onShowCut">) {
  const previous = cuts[cut.index - 1];
  const next = cuts[cut.index + 1];

  return (
    <div className="brackets-actions mt-5">
      {previous ? (
        <button
          type="button"
          className="brackets-link brackets-row-link"
          onClick={() => onShowCut(previous.index)}
        >
          Previous cut
        </button>
      ) : null}
      {next ? (
        <button
          type="button"
          className="brackets-link brackets-row-link"
          onClick={() => onShowCut(next.index)}
        >
          Next cut
        </button>
      ) : null}
    </div>
  );
}
