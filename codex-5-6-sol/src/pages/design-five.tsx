import { ArrowDown, ArrowRight, BookOpen, Compass, Orbit, Sparkles, Stars } from "lucide-react";
import { DesignSwitcher, Mark, UploadButton } from "../components/shared";

export function DesignFive() {
  return (
    <main className="d5">
      <DesignSwitcher light />
      <section className="d5-hero">
        <div className="atlas-bg atlas-bg--5" />
        <div className="d5-stars" />
        <header className="d5-nav">
          <Mark inverse />
          <p>AN ATLAS FOR DEEP READING</p>
          <UploadButton compact label="Open Ratio" className="d5-button d5-button--small" />
        </header>
        <div className="d5-orbit d5-orbit--one" /><div className="d5-orbit d5-orbit--two" />
        <div className="d5-hero__copy">
          <p><Stars /> THE SHORT WAY INTO A LONG TEXT</p>
          <h1>Find your way<br /><em>through any idea.</em></h1>
          <span>Ratio transforms every PDF into a navigable world of arguments, evidence, quotes, and illuminating connections.</span>
          <UploadButton className="d5-button" label="Chart a PDF" />
        </div>
        <a className="d5-scroll" href="#atlas"><ArrowDown /> BEGIN THE JOURNEY</a>
      </section>

      <section className="d5-atlas" id="atlas">
        <div className="d5-atlas__intro">
          <p>BEYOND THE SUMMARY</p>
          <h2>Every document<br />contains a world.</h2>
          <span>Ratio gives you the view from above and the paths through it.</span>
        </div>
        <div className="d5-map">
          <div className="d5-map__rings"><i /><i /><i /></div>
          <div className="d5-map__node d5-map__node--thesis"><b>01</b><strong>THESIS</strong><span>The central claim</span></div>
          <div className="d5-map__node d5-map__node--evidence"><b>02</b><strong>EVIDENCE</strong><span>What makes it hold</span></div>
          <div className="d5-map__node d5-map__node--context"><b>03</b><strong>CONTEXT</strong><span>What surrounds it</span></div>
          <div className="d5-map__node d5-map__node--questions"><b>04</b><strong>QUESTIONS</strong><span>Where to go next</span></div>
          <Sparkles className="d5-map__spark" />
        </div>
      </section>

      <section className="d5-chapters">
        <article>
          <div className="d5-chapter__number">I</div><Compass />
          <p>ORIENTATION</p><h3>See the territory<br />before the trail.</h3>
          <span>A clear, structured summary shows the whole argument at once, including how each part supports the next.</span>
          <div className="d5-chapter__figure"><i /><i /><i /></div>
        </article>
        <article>
          <div className="d5-chapter__number">II</div><BookOpen />
          <p>EXPLORATION</p><h3>Move between<br />idea and source.</h3>
          <span>Each insight returns you to the exact page, with context waiting on either side.</span>
          <div className="d5-page-ref"><b>47</b><p>Original passage<br /><em>open in reader →</em></p></div>
        </article>
        <article>
          <div className="d5-chapter__number">III</div><Orbit />
          <p>CONNECTION</p><h3>Notice the ideas<br />in each other’s orbit.</h3>
          <span>Ratio links repeated concepts, tensions, and echoes that linear reading makes easy to miss.</span>
          <div className="d5-mini-orbit"><i /><i /><i /><i /></div>
        </article>
      </section>

      <section className="d5-voice">
        <div className="d5-voice__mark">“</div>
        <blockquote>Ratio did not replace the paper.<br /><em>It gave me a way into it.</em></blockquote>
        <p>ELENA PARK — POLICY FELLOW, LONDON</p>
      </section>

      <section className="d5-final">
        <div className="atlas-bg atlas-bg--5" />
        <div className="d5-stars" />
        <Sparkles />
        <p>YOUR NEXT IDEA IS ALREADY WAITING</p>
        <h2>Open the document.<br /><em>See the universe inside.</em></h2>
        <UploadButton className="d5-button" label="Explore your first PDF" />
        <small>Free for your first three documents · No credit card required</small>
        <a href="#top">Ratio reader <ArrowRight /></a>
      </section>
    </main>
  );
}
