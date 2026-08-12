import { useEffect } from "react";
import { DesignNav } from "../components/design-nav.tsx";
import { useInView } from "../lib/use-in-view.ts";

function Note({
  children,
  delay = "0s",
}: {
  children: string;
  delay?: string;
}) {
  const [ref, on] = useInView<HTMLElement>(0.2);
  return (
    <aside
      ref={ref}
      className="e-note"
      data-on={on ? "true" : "false"}
      style={{ transitionDelay: delay }}
    >
      {children}
    </aside>
  );
}

export function Design4() {
  useEffect(() => {
    document.title = "Ratio Reader — On keeping only the ratio";
  }, []);

  return (
    <div className="e">
      <style>{css}</style>
      <div className="e-rules" aria-hidden="true" />
      <DesignNav brand="Ratio" />

      <article className="e-sheet">
        <p className="e-folio">a short essay · no. 12</p>
        <h1>On keeping only the ratio</h1>
        <p className="e-deck">
          How a reading tool should behave if it has any respect for the
          document, and for the person who still has to finish it.
        </p>

        <div className="e-row">
          <p>
            Most “summarizers” are in a hurry to replace the book. They hand
            you a second, worse book and call it a gift. Ratio Reader is
            built on a smaller claim: a long PDF already contains the pages
            you need. The work is to mark them, not to invent a new voice
            that sounds like it read them.
          </p>
          <Note>
            this is the whole product, said plainly. not a chatbot. a
            marked copy.
          </Note>
        </div>

        <div className="e-row">
          <p>
            You upload the file. What comes back is four kinds of ink. A{" "}
            <mark>summary</mark> that could sit on an index card: the claim,
            the evidence, the limit. <mark>Quotes</mark>, copied exactly,
            with the page number still attached, so you can walk back into
            the room. <mark>Hints</mark> for the words the author treated as
            obvious. And one or two <mark>insights</mark> — not decoration,
            but the reason this paper is worth the hour you do not have.
          </p>
          <Note delay="80ms">
            I keep a red pencil for words I had to look up. Ratio does that
            part without pretending I knew them.
          </Note>
        </div>

        <blockquote>
          “Attention is not a spotlight you aim. It is a budget you spend,
          and most documents do not tell you the price of a page.”
          <cite>a line Ratio pulled from p. 17, and left intact</cite>
        </blockquote>

        <div className="e-row">
          <p>
            The ratio in the name is not a flourish. On a typical research
            paper we keep something like one page in twelve. On a board pack,
            closer to one in nine. On a novel we should not be used at all —
            some things are not improved by being reduced. The tool is
            honest about that. If you drop in a poem, it will tell you to
            go read the poem.
          </p>
          <Note delay="60ms">
            please do not run a love letter through this. some ratios are
            already 1:1.
          </Note>
        </div>

        <div className="e-row">
          <p>
            I have sat with students who highlight entire chapters because
            they are afraid of missing the exam. I have sat with lawyers who
            need the holding before lunch. Both of them are doing the same
            job: deciding what can be left on the table. Ratio is a second
            pair of eyes that has already done a first pass, and is willing
            to be wrong in the margin where you can see it.
          </p>
          <Note delay="40ms">
            if a hint is wrong you can still see the original sentence. that
            is the point of a margin.
          </Note>
        </div>

        <h2>How to use it this afternoon</h2>
        <div className="e-row">
          <p>
            Put the PDF down. Wait. Read the card first, then the quotes, then
            decide whether the rest of the document has earned another hour.
            That is the whole method. The file is still there if you need to
            argue with us. We would rather you argue than trust a paragraph
            that cannot point to a page.
          </p>
          <Note>upload → four inks → you decide if the rest is worth it</Note>
        </div>

        <form
          className="e-form"
          onSubmit={(ev) => {
            ev.preventDefault();
          }}
        >
          <label htmlFor="e-file">Leave a PDF in the margin</label>
          <div className="e-form-row">
            <input id="e-file" type="text" readOnly value="drop or choose a file" />
            <button type="submit">Read it</button>
          </div>
        </form>

        <footer className="e-end">
          <p>Ratio Reader · written for people who still finish books</p>
          <p className="e-catch">keep the ratio</p>
        </footer>
      </article>
    </div>
  );
}

const css = `
  .e {
    --paper: #d9e2ec;
    --ink: #1e2a36;
    --pencil: #b42318;
    --rule: #b7c4d1;
    --note: #fff8c9;
    --mute: #5c6b7a;
    min-height: 100vh;
    background: var(--paper);
    color: var(--ink);
    font-family: Newsreader, "Times New Roman", serif;
    position: relative;
  }
  .e-rules {
    pointer-events: none;
    position: fixed;
    inset: 0;
    background-image: repeating-linear-gradient(
      to bottom,
      transparent 0 31px,
      rgba(183, 196, 209, 0.45) 31px 32px
    );
    mask-image: linear-gradient(to right, transparent 0, #000 18%, #000 82%, transparent 100%);
    opacity: 0.55;
  }
  .e .dnav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 6vw 0;
    font-family: "Atkinson Hyperlegible", sans-serif;
    font-size: 13px;
    position: relative;
    z-index: 2;
  }
  .e .dnav a { color: var(--mute); text-decoration: none; }
  .e .dnav-brand { font-style: italic; color: var(--ink); }
  .e .dnav-links { display: flex; gap: 0.85rem; }
  .e .dnav-links a[data-active="true"] { color: var(--pencil); }
  .e-sheet {
    position: relative;
    z-index: 1;
    width: min(920px, 92vw);
    margin: 0 auto;
    padding: 8vh 0 8rem;
  }
  .e-folio {
    font-family: "Atkinson Hyperlegible", sans-serif;
    font-size: 12px;
    letter-spacing: 0.16em;
    text-transform: lowercase;
    color: var(--mute);
    margin: 0 0 1.4rem;
  }
  .e-sheet h1 {
    font-weight: 400;
    font-size: clamp(2.6rem, 6vw, 4.4rem);
    line-height: 0.98;
    letter-spacing: -0.03em;
    margin: 0 0 1rem;
    max-width: 16ch;
  }
  .e-deck {
    font-size: 1.25rem;
    line-height: 1.45;
    max-width: 36rem;
    color: #314152;
    margin: 0 0 3rem;
    font-style: italic;
  }
  .e-row {
    display: grid;
    grid-template-columns: minmax(0, 38rem) minmax(10rem, 1fr);
    gap: 1.5rem 2rem;
    margin: 0 0 1.4rem;
    align-items: start;
  }
  .e-row p {
    margin: 0;
    font-size: 1.2rem;
    line-height: 1.7;
  }
  .e-row mark {
    background: transparent;
    color: inherit;
    border-bottom: 2px solid var(--pencil);
    padding: 0;
  }
  .e-note {
    font-family: "Reenie Beanie", cursive;
    font-size: 1.55rem;
    line-height: 1.2;
    color: var(--pencil);
    transform: rotate(-2deg);
    opacity: 0;
    translate: 0 8px;
    transition: opacity 0.5s ease, translate 0.5s ease;
    margin-top: 0.4rem;
  }
  .e-note[data-on="true"] { opacity: 1; translate: 0 0; }
  .e blockquote {
    margin: 2.2rem 0 2.2rem;
    padding: 0 0 0 1.2rem;
    border-left: 2px solid var(--pencil);
    font-size: 1.45rem;
    line-height: 1.4;
    max-width: 36rem;
  }
  .e cite {
    display: block;
    margin-top: 0.7rem;
    font-family: "Atkinson Hyperlegible", sans-serif;
    font-size: 0.85rem;
    font-style: normal;
    color: var(--mute);
  }
  .e-sheet h2 {
    font-weight: 500;
    font-size: 1.8rem;
    margin: 2.8rem 0 1rem;
  }
  .e-form {
    margin-top: 3.2rem;
    max-width: 38rem;
    background: var(--note);
    padding: 1.3rem 1.3rem 1.4rem;
    transform: rotate(-0.6deg);
    box-shadow: 2px 3px 0 rgba(30, 42, 54, 0.08);
  }
  .e-form label {
    display: block;
    font-family: "Reenie Beanie", cursive;
    font-size: 1.7rem;
    color: var(--pencil);
    margin-bottom: 0.5rem;
  }
  .e-form-row { display: flex; gap: 0.5rem; }
  .e-form input {
    flex: 1;
    border: 0;
    border-bottom: 1px solid var(--ink);
    background: transparent;
    font-family: Newsreader, serif;
    font-size: 1.05rem;
    padding: 0.4rem 0;
    color: var(--mute);
  }
  .e-form button {
    border: 0;
    background: var(--ink);
    color: var(--paper);
    font-family: "Atkinson Hyperlegible", sans-serif;
    font-size: 0.95rem;
    padding: 0.55rem 0.9rem;
    cursor: pointer;
  }
  .e-form button:hover { background: var(--pencil); }
  .e-form button:focus-visible,
  .e-form input:focus-visible {
    outline: 2px solid var(--pencil);
    outline-offset: 3px;
  }
  .e-end {
    margin-top: 4rem;
    padding-top: 1rem;
    border-top: 1px solid var(--rule);
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    font-family: "Atkinson Hyperlegible", sans-serif;
    font-size: 13px;
    color: var(--mute);
  }
  .e-catch { font-family: "Reenie Beanie", cursive; font-size: 1.6rem; color: var(--pencil); }
  @media (max-width: 800px) {
    .e-row { grid-template-columns: 1fr; gap: 0.5rem; }
    .e-note { margin: 0 0 1rem 0.4rem; }
    .e-end { flex-direction: column; }
  }
`;
