import { keyQuotes, quotes } from "@/content/origin-of-species";
import type { QuoteId } from "@/content/origin-of-species";
import { capitalize, numberWord } from "./book-figures";
import { PageCite } from "./page-cite";

const LESSON_QUOTE_IDS: readonly QuoteId[] = ["name", "tree", "grandeur"];

const SHOWN_QUOTE_IDS = keyQuotes.filter((id) => LESSON_QUOTE_IDS.includes(id));

export function QuotesPage() {
  return (
    <>
      <ul className="space-y-7">
        {SHOWN_QUOTE_IDS.map((id) => (
          <li key={id}>
            <blockquote className="text-lg leading-[1.6] italic lg:text-xl">
              {quotes[id].text} <PageCite pages={quotes[id].pages} placement="below" />
            </blockquote>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm leading-normal text-balance">
        {`${capitalize(numberWord(SHOWN_QUOTE_IDS.length))} of the ${numberWord(keyQuotes.length)} key passages Ratio\u00A0Reader returns for this book.`}
      </p>
    </>
  );
}
