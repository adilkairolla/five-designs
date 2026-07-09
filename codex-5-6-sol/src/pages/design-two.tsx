import { Activity, ArrowDown, Braces, CheckCircle2, Command, ScanLine, Zap } from "lucide-react";
import { DesignSwitcher, Mark, UploadButton } from "../components/shared";

export function DesignTwo() {
  return (
    <main className="d2">
      <DesignSwitcher light />
      <section className="d2-hero">
        <div className="atlas-bg atlas-bg--2" />
        <div className="d2-grid" />
        <header className="d2-nav">
          <Mark inverse />
          <div className="d2-status"><i /> Systems ready · PDF engine 2.4</div>
          <UploadButton compact label="Launch reader" className="d2-button d2-button--small" />
        </header>
        <div className="d2-hero__frame">
          <p className="d2-overline"><ScanLine /> SIGNAL EXTRACTION FOR HUMAN BRAINS</p>
          <h1>Read the<br /><span>signal.</span></h1>
          <p className="d2-lede">Ratio scans the noise out of complex PDFs and returns the ideas, evidence, and context your brain actually needs.</p>
          <div className="d2-actions">
            <UploadButton className="d2-button" label="Analyze a PDF" />
            <a href="#system">Explore the system <ArrowDown /></a>
          </div>
        </div>
        <div className="d2-readout">
          <span>DOCUMENT SIGNAL</span>
          <strong>94.8%</strong>
          <div>{[72, 46, 89, 63, 96, 74, 53, 84, 68, 91, 60, 78].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
        </div>
      </section>

      <section className="d2-system" id="system">
        <aside>
          <p>RATIO / PROCESS</p>
          <h2>One PDF in.<br />A working model out.</h2>
          <span>Not a wall of generated text. A navigable system for understanding what the document is doing.</span>
        </aside>
        <div className="d2-console">
          <div className="d2-console__top"><span><i /><i /><i /></span><b>ratio://analysis/attention-paper.pdf</b><em>LIVE</em></div>
          <div className="d2-console__body">
            <p><span>01</span><b>THESIS</b><small>What the author is actually arguing</small><CheckCircle2 /></p>
            <p><span>02</span><b>CLAIMS</b><small>How the reasoning is assembled</small><CheckCircle2 /></p>
            <p><span>03</span><b>EVIDENCE</b><small>What supports each conclusion</small><CheckCircle2 /></p>
            <p><span>04</span><b>CONTEXT</b><small>Terms, links, and missing steps</small><CheckCircle2 /></p>
          </div>
          <div className="d2-console__foot"><Command /> Four layers mapped in 8.2 seconds <Activity /></div>
        </div>
      </section>

      <section className="d2-modules">
        <article>
          <span>01 / COMPRESS</span><Braces />
          <h3>Structure,<br />not shortcuts.</h3>
          <p>Ratio preserves the chain of reasoning so a ten-minute read still leaves you with the shape of the whole.</p>
          <div className="d2-code-lines"><i /><i /><i /><i /><i /></div>
        </article>
        <article className="is-acid">
          <span>02 / LOCATE</span><Zap />
          <h3>Every insight<br />has coordinates.</h3>
          <p>Tap any quote, claim, or hint to jump back to the source page. Nothing floats free of evidence.</p>
          <div className="d2-locator"><b>p. 47</b><span>“The cost of context switching…”</span></div>
        </article>
        <article>
          <span>03 / CONNECT</span><ScanLine />
          <h3>See what each<br />idea changes.</h3>
          <p>Related passages gather into threads, turning a linear PDF into an explorable field of meaning.</p>
          <div className="d2-nodes"><i /><i /><i /><i /><i /><i /></div>
        </article>
      </section>

      <section className="d2-proof">
        <p>“A research paper used to be a tab I avoided.<br /><strong>Now it becomes a map I can enter.”</strong></p>
        <span>JULES MARTIN / PRODUCT STRATEGIST</span>
      </section>

      <section className="d2-final">
        <div className="atlas-bg atlas-bg--2" />
        <div className="d2-grid" />
        <p>INPUT: YOUR NEXT PDF</p>
        <h2>Switch on<br />understanding.</h2>
        <UploadButton className="d2-button" label="Run Ratio reader" />
        <small>No credit card · First three documents free</small>
      </section>
    </main>
  );
}
