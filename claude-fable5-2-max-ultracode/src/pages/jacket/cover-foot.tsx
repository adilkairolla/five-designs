import { useId } from "react";

export function CoverFoot() {
  const statementId = useId();

  return (
    <section className="jacket-foot" aria-labelledby={statementId}>
      <h2 id={statementId} className="jacket-statement">
        <span className="block">It does not replace the reading.</span>
        <span className="block">It shows you where to read closely.</span>
      </h2>
      <p className="jacket-lead mt-5 text-balance">
        Ratio Reader writes a jacket for a long, dense PDF: a paper, a report, a contract, a textbook, a manual. It is
        a map of the document. Every quote comes with its page number, so you can open the PDF and check its work.
      </p>
    </section>
  );
}
