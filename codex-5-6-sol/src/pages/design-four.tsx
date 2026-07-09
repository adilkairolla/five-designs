import { ArrowDownRight, ArrowRight, Asterisk, Circle, MoveRight, Square } from "lucide-react";
import { DesignSwitcher, Mark, UploadButton } from "../components/shared";

export function DesignFour() {
  return (
    <main className="d4">
      <DesignSwitcher />
      <section className="d4-hero">
        <div className="atlas-bg atlas-bg--4" />
        <header className="d4-nav">
          <Mark />
          <span>PDF comprehension system</span>
          <span>Est. 2026 / V1.0</span>
        </header>
        <div className="d4-hero__copy">
          <p><i /> Read less noise</p>
          <h1>Make<br />it make<br /><span>sense.</span></h1>
        </div>
        <div className="d4-hero__side">
          <p>Ratio separates a document into the parts that help you understand it.</p>
          <UploadButton className="d4-button" label="Upload PDF" />
          <small>SUMMARY / QUOTES / HINTS / INSIGHTS</small>
        </div>
        <div className="d4-arrow"><ArrowDownRight /></div>
      </section>

      <section className="d4-statement">
        <span>RATIO READER</span>
        <h2><b>200 pages</b> should not stand<br />between you and <mark>one idea.</mark></h2>
      </section>

      <section className="d4-grid-section">
        <article className="d4-tile d4-tile--red">
          <span>01</span><Asterisk />
          <h3>Summary</h3>
          <p>The argument in proportion: what is central stays large, what is supporting stays attached.</p>
          <div className="d4-bars"><i /><i /><i /><i /></div>
        </article>
        <article className="d4-tile d4-tile--paper">
          <span>02</span><Circle />
          <h3>Quotes</h3>
          <blockquote>“Clarity is the result of a useful arrangement.”</blockquote>
          <p>Every quotation includes the source page and surrounding thought.</p>
        </article>
        <article className="d4-tile d4-tile--yellow">
          <span>03</span><Square />
          <h3>Hints</h3>
          <p>Definitions, background, and plain-language explanations appear only when you need them.</p>
          <div className="d4-hint"><b>?</b><span>This refers to the distinction made on page 12.</span></div>
        </article>
        <article className="d4-tile d4-tile--black">
          <span>04</span><MoveRight />
          <h3>Connections</h3>
          <p>See where ideas repeat, evolve, disagree, and finally resolve.</p>
          <div className="d4-map"><i /><i /><i /><i /><i /></div>
        </article>
      </section>

      <section className="d4-process">
        <div className="d4-process__intro"><span>HOW IT WORKS</span><h2>Three moves.<br />Zero mystery.</h2></div>
        <div className="d4-process__steps">
          <article><b>1</b><div><h3>SELECT</h3><p>Choose any text-based PDF.</p></div><ArrowRight /></article>
          <article><b>2</b><div><h3>PROCESS</h3><p>Ratio maps its logic and evidence.</p></div><ArrowRight /></article>
          <article><b>3</b><div><h3>UNDERSTAND</h3><p>Read the overview. Explore the details.</p></div><ArrowRight /></article>
        </div>
      </section>

      <section className="d4-quote">
        <span>READER NOTE 04:21</span>
        <blockquote>“The first time an AI summary felt like a reading tool instead of an answer machine.”</blockquote>
        <p>— LEON VARGA / DESIGN RESEARCHER</p>
      </section>

      <section className="d4-final">
        <div className="atlas-bg atlas-bg--4" />
        <p>PDF IN. <span>MEANING OUT.</span></p>
        <h2>Your next<br />document,<br /><mark>understood.</mark></h2>
        <UploadButton className="d4-button" label="START READING" />
      </section>
    </main>
  );
}
