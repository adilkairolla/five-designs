import { useId } from "react";
import type { ReactNode } from "react";
import { AVERAGE_WORDS_PER_MINUTE } from "@/content/book-math";
import { book } from "@/content/origin-of-species";
import { cutPageCount, keptFragments, keptPageCount } from "./abridged-book";

export function EditorNotes() {
  const headingId = useId();

  return (
    <section className="brackets-notes" aria-labelledby={headingId}>
      <h2 id={headingId} className="brackets-h2">
        What was done to the book, and what was not
      </h2>
      <div className="brackets-prose mt-6 space-y-5">
        <EditorNote title="Quoted, not changed">
          The {keptFragments.length} fragments in the paragraph are Darwin’s words, letter for letter
          from the {book.edition}, spelling included. Not a word changed. Only left out, and the
          brackets show where.
        </EditorNote>
        <EditorNote title="Summarized, in other words">
          The summary, hints and insights are Ratio&nbsp;Reader’s sentences, not Darwin’s. Each one
          names the pages it rests on.
        </EditorNote>
        <EditorNote title="Counted">
          {keptPageCount} pages quoted and {cutPageCount} cut make {book.pages}. The cuts are counted
          from the page numbers of the quotes, so the sum always holds. Reading times assume{" "}
          {AVERAGE_WORDS_PER_MINUTE} words a minute and are approximate.
        </EditorNote>
        <EditorNote title="Not read for you">
          Ratio&nbsp;Reader does not replace reading. It is a map that shows where to read closely,
          and its page numbers let you check its work.
        </EditorNote>
      </div>
    </section>
  );
}

function EditorNote({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="brackets-item-title">{title}</h3>
      <p>{children}</p>
    </div>
  );
}
