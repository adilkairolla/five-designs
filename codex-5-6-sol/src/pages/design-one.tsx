import { ArrowDown, ArrowUpRight, Check, Quote } from "lucide-react";
import { DesignSwitcher, FeatureIcon, Mark, UploadButton } from "../components/shared";

export function DesignOne() {
  return (
    <main className="d1">
      <DesignSwitcher />
      <section className="d1-hero">
        <div className="atlas-bg atlas-bg--1" />
        <header className="d1-nav">
          <Mark />
          <span className="d1-nav__note">A clearer way through difficult reading.</span>
          <UploadButton compact label="Try Ratio" className="d1-button d1-button--small" />
        </header>
        <div className="d1-hero__content">
          <p className="d1-kicker"><span>01</span> Reading, reduced to meaning</p>
          <h1>Keep the point.<br /><em>Lose the pile.</em></h1>
          <p className="d1-intro">Ratio turns dense PDFs into a precise map of what matters: the argument, the evidence, and the lines you’ll want to return to.</p>
          <div className="d1-hero__actions">
            <UploadButton className="d1-button" label="Drop in your PDF" />
            <a href="#inside">See what you get <ArrowDown /></a>
          </div>
        </div>
        <p className="d1-hero__margin">For papers, reports, essays<br />and everything you meant to read.</p>
      </section>

      <section className="d1-manifesto" id="inside">
        <p className="d1-section-no">[ 01 — The idea ]</p>
        <div>
          <p className="d1-drop">Most tools make text shorter.</p>
          <h2>Ratio makes it <em>clearer.</em></h2>
          <p>It traces how ideas connect, pulls out the proof behind the claims, and gives you context exactly where confusion begins.</p>
        </div>
      </section>

      <section className="d1-features">
        <article className="d1-feature d1-feature--wide">
          <div className="d1-feature__index">A</div>
          <FeatureIcon type="summary" />
          <h3>The whole argument,<br />in one deliberate page.</h3>
          <p>A structured summary preserves the author’s logic, not just a list of disconnected bullets.</p>
          <div className="d1-paper-demo">
            <span>Core thesis</span>
            <strong>Attention is not a resource we spend. It is the frame that decides what becomes real.</strong>
            <div><i style={{ width: "88%" }} /><i style={{ width: "68%" }} /><i style={{ width: "76%" }} /></div>
          </div>
        </article>
        <article className="d1-feature d1-feature--red">
          <div className="d1-feature__index">B</div>
          <FeatureIcon type="quote" />
          <h3>Quotes with<br />their context intact.</h3>
          <blockquote>“The measure of understanding is not recall, but relation.”</blockquote>
          <p>Every quote links back to the exact page.</p>
        </article>
        <article className="d1-feature d1-feature--ink">
          <div className="d1-feature__index">C</div>
          <FeatureIcon type="hint" />
          <h3>A hint when<br />the thread gets lost.</h3>
          <p>Plain-language explanations meet you at the difficult paragraph without flattening the idea.</p>
          <ul>
            <li><Check /> Define unfamiliar terms</li>
            <li><Check /> Surface hidden assumptions</li>
            <li><Check /> Connect earlier ideas</li>
          </ul>
        </article>
      </section>

      <section className="d1-quote-band">
        <Quote />
        <blockquote>Ratio feels less like asking AI to read for me, and more like having a very patient editor beside me.</blockquote>
        <p>— Maya Chen, graduate researcher</p>
      </section>

      <section className="d1-process">
        <p className="d1-section-no">[ 02 — Three steps ]</p>
        <ol>
          <li><span>1</span><div><strong>Upload</strong><p>Any PDF, up to 200 pages.</p></div></li>
          <li><span>2</span><div><strong>Get the map</strong><p>Summary, key claims, quotes, and hints.</p></div></li>
          <li><span>3</span><div><strong>Read with focus</strong><p>Follow the ideas that matter to you.</p></div></li>
        </ol>
      </section>

      <section className="d1-final">
        <div className="atlas-bg atlas-bg--1" />
        <p>Your reading list is long enough.</p>
        <h2>Start with what<br />matters most.</h2>
        <UploadButton className="d1-button" label="Upload your first PDF" />
        <a href="#top">Ratio reader <ArrowUpRight /></a>
      </section>
    </main>
  );
}
