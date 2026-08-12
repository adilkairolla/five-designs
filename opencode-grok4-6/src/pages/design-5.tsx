import { useEffect, useState } from "react";
import { DesignNav } from "../components/design-nav.tsx";

const wall = `MEMORANDUM  —  CONFIDENTIAL  —  NOT FOR CIRCULATION

TO: Investment Committee
FROM: Office of the General Counsel
RE: Proposed acquisition of Northline Logistics, Inc.
DATE: 12 March

This memorandum is provided solely for the purpose of assisting the Committee in its evaluation of the proposed transaction. It does not constitute a recommendation to proceed or to decline. Recipients are asked to read the full text, including schedules A through F, before the Thursday session.

I. Background
On 4 January, the Company received an unsolicited indication of interest from Harbor & Pine Capital regarding a possible acquisition of Northline Logistics, Inc. (“Northline”). Northline operates fifty-eight last-mile terminals in the United States and three bonded warehouses in Ontario. Revenue for the last twelve months was $1.14 billion. Adjusted EBITDA was $186 million. The indication of interest suggested an enterprise value of 9.4× LTM EBITDA, subject to diligence, financing, and a go-shop that counsel considers largely ceremonial.

II. Structure
The proposed structure is a reverse triangular merger under Delaware law. Surviving corporation would be a wholly owned subsidiary of the Company. Consideration is 70% cash and 30% unregistered common stock, with a collar of ±7.5% around a twenty-day VWAP. Dissenters’ rights would apply. A 4.5% termination fee is contemplated if the Company accepts a superior proposal after the go-shop. Counsel notes that a 4.5% fee is high relative to deals of this size in the last twenty-four months, where the median was 3.1%.

III. Diligence remaining
Environmental: two terminals sit on former rail yards. Phase I reports are from 2019. Phase II has not been commissioned. A residual solvent plume is known at the Toledo site. The seller’s indemnity is capped at $18 million and survives for eighteen months, which is unlikely to cover a groundwater action.

Labor: the Teamsters represent drivers at fourteen terminals. Three contracts expire within nine months of close. The Cleveland contract includes a most-favored-nations clause that would be triggered by any improvement granted in Chicago.

Antitrust: combined share in the Ohio Valley last-mile lane is approximately 28% on a revenue basis. Counsel does not currently expect a second request, but a state AG inquiry is plausible. A hell-or-high-water covenant should not be accepted.

IV. Financing
The cash leg depends on a committed facility that is not yet committed. The lead bank has circulated a highly confident letter. That is not a commitment. If the facility is not signed before signing of the merger agreement, the Company would be taking financing risk it has not historically accepted.

V. Recommendation of counsel
Counsel does not recommend signing in the present form. The termination fee should be reduced to not more than 3%. The environmental cap should be raised or the Toledo site carved into a separate escrow. The hell-or-high-water language must be struck. The stock collar should be symmetrical and measured on a volume-weighted basis that excludes the announcement window. None of these points are cosmetic. Each is a place the Company has been hurt before.

VI. What the pack hides
The fifty-four page appendix spends eighteen pages on synergy narratives prepared by the banker. Those pages should be read last, if at all. The operating model in tab C assumes a 4% price increase in year one in a market that has not sustained a 4% increase in any of the last seven years. The customer concentration table — one grocer at 22% of revenue, contract up in November — is on page 54, below a chart about electrification of the fleet.

VII. Questions for Thursday
1. Will the board accept financing risk between sign and close?
2. Who owns the Toledo plume if the indemnity expires?
3. What happens to Cleveland if Chicago settles first?
4. Why is the banker paid on a success fee if the go-shop is ceremonial?

The remainder of this memorandum restates the above in denser language for the file. Readers who have reached this sentence already have the ratio.`;

const extracts = [
  {
    tag: "Summary",
    text: "Do not sign in this form. The price is fine. The protections are not: a heavy break fee, a thin environmental cap, and a facility that is still only a highly confident letter.",
  },
  {
    tag: "Quote · p. 4",
    text: "“A highly confident letter is not a commitment. If the facility is not signed before the merger agreement, the Company would be taking financing risk it has not historically accepted.”",
  },
  {
    tag: "Hint",
    text: "Hell-or-high-water: a promise to do whatever the regulator asks to get the deal through, including selling pieces you wanted to keep. Counsel says do not give that promise.",
  },
  {
    tag: "Insight",
    text: "The number that matters is not 9.4×. It is page 54: one grocer, 22% of revenue, contract up in November. Read that before the synergy appendix.",
  },
];

export function Design5() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    document.title = "Ratio Reader — Keep this side";
  }, []);

  return (
    <div className="t">
      <style>{css}</style>
      <div className="t-left" aria-hidden="true">
        <pre>{wall.repeat(2)}</pre>
      </div>
      <div className="t-perf" aria-hidden="true">
        {Array.from({ length: 28 }, (_, i) => (
          <span key={i} />
        ))}
      </div>
      <div className="t-right">
        <DesignNav brand="Ratio" />
        <div className="t-inner">
          <p className="t-kicker">The document stays on the left</p>
          <h1>
            Keep
            <br />
            this side.
          </h1>
          <p className="t-lead">
            Ratio Reader splits a PDF the way you already wish you could.
            Noise remains in the file. Signal comes over here: a summary,
            the quotes, the jargon, the thing you should do next.
          </p>

          <button type="button" className="t-cta" onClick={() => setReady(true)}>
            {ready ? "Memo is on the left" : "Feed it a PDF"}
          </button>

          <ol className="t-list">
            {extracts.map((item) => (
              <li key={item.tag}>
                <p className="t-tag">{item.tag}</p>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>

          <section className="t-how">
            <h2>What crosses the tear</h2>
            <p>
              Not a new document. A shorter edge of the same one. Summary for
              the claim. Quotes you can cite. Hints for the words the memo
              never defined. Insights for the Thursday meeting. The original
              stays intact, scrolling over there, if you need to argue.
            </p>
          </section>

          <footer className="t-foot">
            <span>Ratio Reader</span>
            <span>One page in twelve, if the paper earns it.</span>
          </footer>
        </div>
      </div>
    </div>
  );
}

const css = `
  .t {
    --void: #12151a;
    --ghost: #3d4450;
    --air: #f4f6fa;
    --ink: #151820;
    --tear: #9aa3b2;
    --signal: #2f6bff;
    min-height: 100vh;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 18px minmax(0, 1fr);
    background: var(--air);
    color: var(--ink);
    font-family: Sora, sans-serif;
  }
  .t-left {
    background: var(--void);
    color: var(--ghost);
    overflow: hidden;
    max-height: 100vh;
    position: sticky;
    top: 0;
  }
  .t-left pre {
    margin: 0;
    padding: 2.2rem 1.4rem 4rem 8vw;
    font-family: "IBM Plex Serif", serif;
    font-size: 11px;
    line-height: 1.55;
    white-space: pre-wrap;
    animation: tdrift 80s linear infinite;
  }
  @keyframes tdrift {
    from { transform: translateY(0); }
    to { transform: translateY(-40%); }
  }
  .t-perf {
    background: var(--air);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-left: 1px dashed var(--tear);
    border-right: 1px dashed var(--tear);
  }
  .t-perf span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--void);
    box-shadow: inset 0 0 0 1px #0b0d10;
  }
  .t-right { min-height: 100vh; }
  .t .dnav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 6vw 0;
    font-family: "IBM Plex Mono", monospace;
    font-size: 12px;
    letter-spacing: 0.08em;
  }
  .t .dnav a { color: #5b6472; text-decoration: none; }
  .t .dnav-brand { color: var(--ink); font-family: Sora, sans-serif; font-weight: 600; }
  .t .dnav-links { display: flex; gap: 0.8rem; }
  .t .dnav-links a[data-active="true"] { color: var(--signal); }
  .t-inner { padding: 8vh 8vw 5rem; max-width: 40rem; }
  .t-kicker {
    font-family: "IBM Plex Mono", monospace;
    font-size: 12px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--signal);
    margin: 0 0 1.2rem;
  }
  .t-inner h1 {
    font-weight: 600;
    font-size: clamp(3.2rem, 8vw, 5.6rem);
    line-height: 0.88;
    letter-spacing: -0.045em;
    margin: 0 0 1.4rem;
  }
  .t-lead {
    font-size: 1.08rem;
    line-height: 1.6;
    color: #3a4150;
    margin: 0 0 1.8rem;
  }
  .t-cta {
    border: 0;
    background: var(--signal);
    color: white;
    font-family: Sora, sans-serif;
    font-weight: 600;
    font-size: 0.95rem;
    padding: 0.95rem 1.2rem;
    cursor: pointer;
  }
  .t-cta:hover { background: #1d4fd6; }
  .t-cta:focus-visible { outline: 3px solid var(--ink); outline-offset: 3px; }
  .t-list {
    list-style: none;
    margin: 3.2rem 0 0;
    padding: 0;
  }
  .t-list li {
    padding: 1.2rem 0;
    border-top: 1px solid #d5dae3;
  }
  .t-list li:last-child { border-bottom: 1px solid #d5dae3; }
  .t-tag {
    font-family: "IBM Plex Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--signal);
    margin: 0 0 0.45rem;
  }
  .t-list p:last-child {
    margin: 0;
    font-size: 1.02rem;
    line-height: 1.55;
  }
  .t-how { margin-top: 3rem; }
  .t-how h2 {
    font-size: 1.15rem;
    font-weight: 600;
    margin: 0 0 0.6rem;
  }
  .t-how p {
    margin: 0;
    color: #3a4150;
    line-height: 1.6;
  }
  .t-foot {
    margin-top: 3.5rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    font-family: "IBM Plex Mono", monospace;
    font-size: 11px;
    color: #6b7382;
  }
  @media (max-width: 860px) {
    .t {
      grid-template-columns: 1fr;
      grid-template-rows: 28vh 14px auto;
    }
    .t-left { position: relative; max-height: 28vh; }
    .t-left pre { padding: 1rem 5vw; font-size: 10px; }
    .t-perf {
      flex-direction: row;
      border: 0;
      border-top: 1px dashed var(--tear);
      border-bottom: 1px dashed var(--tear);
    }
    .t-inner { padding: 2.5rem 6vw 4rem; }
    .t-foot { flex-direction: column; }
  }
`;
