import { ArrowRight, Bookmark, Coffee, Feather, Highlighter, Quote } from "lucide-react";
import { DesignSwitcher, Mark, UploadButton } from "../components/shared";

export function DesignThree() {
  return (
    <main className="d3">
      <DesignSwitcher />
      <section className="d3-hero">
        <div className="atlas-bg atlas-bg--3" />
        <header className="d3-nav">
          <Mark />
          <nav><a href="#margin">In the margins</a><a href="#ritual">How it works</a></nav>
          <UploadButton compact label="Begin reading" className="d3-button d3-button--small" />
        </header>
        <div className="d3-hero__copy">
          <p>A thoughtful companion for difficult texts</p>
          <h1>There’s more<br />in every page.</h1>
          <div className="d3-underline" />
          <span>Ratio finds it with you.</span>
          <UploadButton className="d3-button" label="Choose a PDF to read" />
        </div>
        <div className="d3-note">
          <Feather />
          <p>Less skimming.<br /><em>More arriving.</em></p>
        </div>
      </section>

      <section className="d3-letter" id="margin">
        <div className="d3-letter__heading">
          <p>Dear reader,</p>
          <h2>You don’t need another summary machine.</h2>
        </div>
        <div className="d3-letter__body">
          <p>You need a way to enter a text without getting lost in it. Ratio reads for the shape beneath the sentences: the central question, the turn in the argument, the evidence everything rests on.</p>
          <p>Then it stays close while you read, offering a useful hint, a remembered connection, or a perfectly chosen quote at the moment it helps.</p>
          <span>Think of it as a very good set of margins.</span>
        </div>
      </section>

      <section className="d3-cards">
        <article>
          <div className="d3-card__tape" />
          <Highlighter />
          <p className="d3-card__label">The yellow marks</p>
          <h3>What matters,<br />gently brought forward.</h3>
          <p>Ratio’s summary follows the author’s structure, so the short version still feels true to the whole.</p>
          <div className="d3-highlight-demo"><span>The core claim is not that technology shortens attention, but that it reorganizes what earns it.</span></div>
        </article>
        <article>
          <div className="d3-card__tape" />
          <Bookmark />
          <p className="d3-card__label">The kept pages</p>
          <h3>A commonplace book,<br />made as you read.</h3>
          <p>Quotes, notes, and useful passages collect in one quiet place, always linked to their original page.</p>
          <blockquote><Quote /> We understand by arranging one thing beside another.</blockquote>
        </article>
        <article>
          <div className="d3-card__tape" />
          <Coffee />
          <p className="d3-card__label">The patient aside</p>
          <h3>Help that doesn’t<br />interrupt the thought.</h3>
          <p>Ask for a simpler explanation, a definition, or the missing connection. Ratio answers from the document itself.</p>
          <div className="d3-pencil">In other words… <i>the author is separating what we notice from what we value.</i></div>
        </article>
      </section>

      <section className="d3-ritual" id="ritual">
        <div>
          <p>The reading ritual</p>
          <h2>From unopened<br />to understood.</h2>
        </div>
        <ol>
          <li><span>One</span><strong>Bring a document</strong><p>Upload a paper, essay, report, or chapter.</p></li>
          <li><span>Two</span><strong>Take the overview</strong><p>See the argument before you meet the details.</p></li>
          <li><span>Three</span><strong>Follow your curiosity</strong><p>Explore quotes, hints, and connected ideas.</p></li>
        </ol>
      </section>

      <section className="d3-testimonial">
        <div className="atlas-bg atlas-bg--3" />
        <blockquote>“Ratio gives me the rare feeling that I read carefully, even when I only had twenty minutes.”</blockquote>
        <p>— Nora Bell, editor & lifelong over-bookmarker</p>
      </section>

      <section className="d3-final">
        <p>One good page can change your mind.</p>
        <h2>Find the page.</h2>
        <UploadButton className="d3-button" label="Read your first PDF" />
        <a href="#top">Made for curious minds <ArrowRight /></a>
      </section>
    </main>
  );
}
