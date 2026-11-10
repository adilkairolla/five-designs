import { citePages, countWords } from "@/content/book-math";
import { quotes } from "@/content/origin-of-species";
import { cutsBeside } from "./abridged-book";
import type { KeptFragment } from "./abridged-book";
import { citedBy } from "./cut-contents";
import { pagesInWords } from "./format";
import { NoteItem } from "./note-item";
import type { Pointed } from "./reader-types";
import { BackToParagraph, CutLink, NoteList, SentenceList, ViewHead } from "./view-parts";

type FragmentViewProps = {
  fragment: KeptFragment;
  onShowCut: (index: number) => void;
  onBackToBook: () => void;
  onPoint: (pointed: Pointed) => void;
};

export function FragmentView({ fragment, onShowCut, onBackToBook, onPoint }: FragmentViewProps) {
  const page = citePages(fragment.page);
  const sentenceWords = countWords(quotes[fragment.quote].text);

  return (
    <>
      <ViewHead
        echo={<span className="brackets-apparatus">{page}</span>}
        title={`The sentence on ${pagesInWords(fragment.page)}`}
        meta="The sentence this fragment was cut from."
        onBackToBook={onBackToBook}
      />
      <div className="animate-brackets-enter-body motion-reduce:animate-none">
        <blockquote className="brackets-darwin mt-4">
          <p>
            “<span className="text-brackets-ash">{fragment.before}</span>
            <mark className="brackets-kept">{fragment.kept}</mark>
            <span className="text-brackets-ash">{fragment.after}</span>”{"\u00A0"}
            <span className="brackets-cite">{page}</span>
          </p>
        </blockquote>
        <p className="mt-3 text-pretty">
          Kept {countWords(fragment.kept)} of {sentenceWords} words. Not a word changed.
        </p>
        <Citations fragment={fragment} />
        <CutsBeside fragment={fragment} onShowCut={onShowCut} onPoint={onPoint} />
        <BackToParagraph />
      </div>
    </>
  );
}

type CutsBesideProps = Pick<FragmentViewProps, "fragment" | "onShowCut" | "onPoint">;

function besideLabel(hasBefore: boolean, hasAfter: boolean) {
  if (hasBefore && hasAfter) return "Cut on either side";
  return hasBefore ? "Cut before it" : "Cut after it";
}

function CutsBeside({ fragment, onShowCut, onPoint }: CutsBesideProps) {
  const { before, after } = cutsBeside(fragment);
  if (!before && !after) return null;

  return (
    <>
      <h4 className="brackets-label">{besideLabel(Boolean(before), Boolean(after))}</h4>
      <div className="brackets-actions mt-1">
        {before ? <CutLink cut={before} onShowCut={onShowCut} onPoint={onPoint} /> : null}
        {after ? <CutLink cut={after} onShowCut={onShowCut} onPoint={onPoint} /> : null}
      </div>
    </>
  );
}

function Citations({ fragment }: { fragment: KeptFragment }) {
  const { sentences, hints, insights, questions } = citedBy(fragment);

  return (
    <>
      {sentences.length > 0 ? (
        <>
          <h4 className="brackets-label">Summary</h4>
          <SentenceList sentences={sentences} />
        </>
      ) : null}
      {hints.length > 0 ? (
        <>
          <h4 className="brackets-label">Hints</h4>
          <NoteList notes={hints} level="h5" className="mt-1 space-y-3" />
        </>
      ) : null}
      {insights.length > 0 ? (
        <>
          <h4 className="brackets-label">Insights</h4>
          <NoteList notes={insights} level="h5" className="mt-1 space-y-3" />
        </>
      ) : null}
      {questions.length > 0 ? (
        <>
          <h4 className="brackets-label">A question worth asking</h4>
          <div className="mt-1 space-y-3">
            {questions.map((question) => (
              <div key={question.question}>
                <NoteItem
                  level="h5"
                  title={question.question}
                  text={question.answer}
                  cite={citePages(quotes[question.quote].pages)}
                />
              </div>
            ))}
          </div>
        </>
      ) : null}
    </>
  );
}
