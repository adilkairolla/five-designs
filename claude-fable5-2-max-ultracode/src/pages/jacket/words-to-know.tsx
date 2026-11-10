import { keyTerms } from "@/content/origin-of-species";

export function WordsToKnow() {
  return (
    <>
      <h3 className="jacket-blockhead">Words to know</h3>
      <dl className="jacket-list mt-4">
        {keyTerms.map((entry) => (
          <div key={entry.term}>
            <dt className="jacket-term">{entry.term}</dt>
            <dd className="jacket-body">{entry.gloss}</dd>
            <dd className="jacket-note">
              First used on p.&nbsp;{entry.firstPage}. About {entry.approxUses} uses.
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
}
