import type { ReactNode } from "react";
import { JumpLink } from "@/components/jump-link";
import { citePages } from "@/content/book-math";
import type { Chapter, PageSpan, SummarySentence } from "@/content/origin-of-species";
import type { Cut } from "./abridged-book";
import { BracketMark } from "./bracket-mark";
import { cutName } from "./format";
import { SAMPLE_ID } from "./ids";
import { NoteItem } from "./note-item";
import { pointHandlers } from "./point-handlers";
import type { Pointed } from "./reader-types";

type ViewHeadProps = {
  echo: ReactNode;
  title: string;
  meta: string;
  onBackToBook: () => void;
};

export function ViewHead({ echo, title, meta, onBackToBook }: ViewHeadProps) {
  return (
    <>
      <div className="brackets-view-nav">
        <button type="button" className="brackets-link brackets-row-link" onClick={onBackToBook}>
          Back to the whole book
        </button>
      </div>
      <div className="animate-brackets-enter-head motion-reduce:animate-none">
        <h3 className="brackets-echo mt-3">
          <span aria-hidden="true">{echo}</span>
          <span className="sr-only">{title}</span>
        </h3>
        <p className="mt-1 text-pretty">{meta}</p>
      </div>
    </>
  );
}

export function BackToParagraph() {
  return (
    <JumpLink to={SAMPLE_ID} className="brackets-link brackets-row-link lg:hidden">
      Back to the paragraph
    </JumpLink>
  );
}

type CutLinkProps = {
  cut: Cut;
  onShowCut: (index: number) => void;
  onPoint: (pointed: Pointed) => void;
};

export function CutLink({ cut, onShowCut, onPoint }: CutLinkProps) {
  return (
    <button
      type="button"
      className="brackets-cut"
      aria-label={cutName(cut)}
      onClick={() => onShowCut(cut.index)}
      {...pointHandlers(onPoint, { kind: "cut", index: cut.index })}
    >
      <BracketMark cut={cut} />
    </button>
  );
}

export function ChapterList({ chapters }: { chapters: readonly Chapter[] }) {
  return (
    <ul role="list" className="brackets-toc mt-1">
      {chapters.map((chapter) => (
        <li key={chapter.pages.from}>
          {chapter.numeral ? <span>{chapter.numeral}</span> : null}
          <span className={chapter.numeral ? undefined : "col-span-2"}>{chapter.title}</span>
          <span className="brackets-toc-page">
            {citePages({ from: chapter.pages.from, to: chapter.pages.from })}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function SentenceList({ sentences }: { sentences: readonly SummarySentence[] }) {
  return (
    <div className="mt-1 space-y-3">
      {sentences.map((sentence) => (
        <p key={sentence.term}>
          {sentence.text}
          {"\u00A0"}
          <span className="brackets-cite">{citePages(sentence.pages)}</span>
        </p>
      ))}
    </div>
  );
}

type Note = { title: string; text: string; pages: PageSpan };

type NoteListProps = {
  notes: readonly Note[];
  level: "h3" | "h5";
  className: string;
};

export function NoteList({ notes, level, className }: NoteListProps) {
  return (
    <ul role="list" className={className}>
      {notes.map((note) => (
        <li key={note.title}>
          <NoteItem level={level} title={note.title} text={note.text} cite={citePages(note.pages)} />
        </li>
      ))}
    </ul>
  );
}
