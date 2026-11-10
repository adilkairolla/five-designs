import { citePages } from "@/content/book-math";
import { hints, insights, questions, quotes, summary } from "@/content/origin-of-species";
import type { SummarySentence } from "@/content/origin-of-species";
import { keptFragments } from "./abridged-book";
import { homeCutOf, summaryWords } from "./cut-contents";
import { DarwinQuote } from "./darwin-quote";
import { splitLastWord } from "./last-word";
import { NoteItem } from "./note-item";
import { pointHandlers } from "./point-handlers";
import type { Pointed } from "./reader-types";
import { NoteList } from "./view-parts";

type SummaryOutputProps = {
  onShowCut: (index: number) => void;
  onPoint: (pointed: Pointed) => void;
};

export function SummaryOutput({ onShowCut, onPoint }: SummaryOutputProps) {
  return (
    <>
      <p className="mt-2">
        {summary.map((sentence, index) => (
          <CitedSentence
            key={sentence.term}
            sentence={sentence}
            index={index}
            onShowCut={onShowCut}
            onPoint={onPoint}
          />
        ))}
      </p>
      <p className="brackets-apparatus mt-3">
        {summary.length} sentences, {summaryWords} words. Each page number opens the cut it falls in.
      </p>
    </>
  );
}

type CitedSentenceProps = SummaryOutputProps & {
  sentence: SummarySentence;
  index: number;
};

function CitedSentence({ sentence, index, onShowCut, onPoint }: CitedSentenceProps) {
  const { lead, last } = splitLastWord(sentence.text);
  const homeCut = homeCutOf(sentence);

  return (
    <>
      {lead}
      <span className="brackets-keep">
        {last}
        {"\u00A0"}
        <button
          type="button"
          className="brackets-page"
          onClick={() => {
            if (homeCut) onShowCut(homeCut.index);
          }}
          {...pointHandlers(onPoint, { kind: "sentence", index })}
        >
          {citePages(sentence.pages)}
          <span className="sr-only">: open the cut that holds these pages</span>
        </button>
      </span>{" "}
    </>
  );
}

export function HintsOutput() {
  return <NoteList notes={hints} level="h3" className="mt-4 space-y-4" />;
}

export function QuotesOutput() {
  return (
    <>
      <p className="mt-2">
        The paragraph is made of {keptFragments.length} of them, cut to fragments. These{" "}
        {summary.length} are the ones the summary rests on.
      </p>
      <div className="mt-4 space-y-4">
        {summary.map((sentence) => (
          <DarwinQuote key={sentence.cite} {...quotes[sentence.cite]} />
        ))}
      </div>
    </>
  );
}

const QUESTION_QUOTE = "name";

export function InsightsOutput() {
  const question = questions.find((candidate) => candidate.quote === QUESTION_QUOTE);

  return (
    <>
      <NoteList notes={insights} level="h3" className="mt-4 space-y-4" />
      {question ? (
        <>
          <h3 className="brackets-label">A question worth asking</h3>
          <div className="mt-1">
            <NoteItem
              level="h4"
              title={question.question}
              text={question.answer}
              cite={citePages(quotes[question.quote].pages)}
            />
          </div>
        </>
      ) : null}
    </>
  );
}
