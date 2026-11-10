import { book, summary } from "@/content/origin-of-species";
import { BOOK_WORD_COUNT, SUMMARY_WORD_COUNT } from "./book-figures";
import { PageCite } from "./page-cite";

export function SummaryPage() {
  return (
    <>
      <p className="text-sm leading-normal">
        <cite className="italic">{book.title}</cite>
        {`, by ${book.author}.`}{" "}
        <span className="block">
          {`${book.city}: ${book.publisher}, ${book.year}. ${book.pages} pages.`}
        </span>
      </p>
      <div className="mt-6 space-y-3">
        {summary.map((sentence) => (
          <p key={sentence.term} className="flow-root text-pretty">
            {sentence.text} <PageCite pages={sentence.pages} />
          </p>
        ))}
      </div>
      <p className="mt-6 text-sm leading-normal text-balance">
        {`That is ${SUMMARY_WORD_COUNT} words. The book runs to about ${BOOK_WORD_COUNT}.`}
      </p>
    </>
  );
}
