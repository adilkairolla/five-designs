import { ArrowDown, ArrowRight, BookOpen, Check, FileText, Leaf, Quote, Sparkles } from 'lucide-react';
import { DemoButton, DesignSwitcher } from './shared';
import './design-3.css';

function Botanical({ className = '' }: { className?: string }) {
  return (
    <svg className={`d3-botanical ${className}`} viewBox="0 0 240 390" fill="none" aria-hidden="true">
      <path d="M111 382C102 318 146 269 125 216C112 182 142 120 161 45" stroke="currentColor" strokeWidth="2" />
      <path d="M117 321C49 323 20 283 25 245C80 244 114 279 117 321ZM124 284C182 284 218 241 214 210C162 215 130 244 124 284ZM130 236C76 231 47 199 52 163C103 169 130 197 130 236ZM130 200C180 193 204 160 198 127C157 139 135 165 130 200ZM142 142C104 135 85 101 91 74C128 86 146 109 142 142ZM152 102C192 91 207 63 199 37C170 49 153 73 152 102ZM161 58C141 35 147 12 160 4C178 21 175 39 161 58Z" fill="currentColor" />
      <path d="M111 308L42 265M132 270L199 226M123 219L66 180M137 186L185 146M140 127L100 88" stroke="#eeeade" strokeWidth="1" opacity=".42" />
    </svg>
  );
}

function PaperIllustration() {
  return (
    <div className="d3-hero-art" role="img" aria-label="An illustrated collection of reading notes, a highlighted quote, and a botanical olive branch">
      <div className="d3-art-shape" />
      <div className="d3-orbit d3-orbit-one" />
      <div className="d3-orbit d3-orbit-two" />
      <div className="d3-paper d3-paper-back"><span>THE ART OF PAYING ATTENTION</span><div className="d3-paper-lines" /><div className="d3-paper-lines d3-short-lines" /></div>
      <div className="d3-paper d3-paper-front">
        <div className="d3-paper-heading"><span>YOUR READING, REFINED</span><BookOpen size={17} strokeWidth={1.3} /></div>
        <h3>Make room<br />for what matters.</h3>
        <div className="d3-paper-lines" />
        <div className="d3-highlight-line" /><div className="d3-highlight-line d3-line-short" />
        <div className="d3-paper-lines" />
        <div className="d3-paper-footer"><span>A little clarity goes a long way.</span><span>01</span></div>
      </div>
      <Botanical className="d3-hero-branch" />
      <div className="d3-insight-note"><Sparkles size={17} strokeWidth={1.3} /><span>Less noise.<br /><em>More meaning.</em></span></div>
      <div className="d3-art-caption"><span className="d3-caption-line" /> A fresh perspective, in the margins.</div>
      <span className="d3-art-star">✳</span>
    </div>
  );
}

export function DesignThree() {
  return (
    <div className="d3">
      <header className="d3-header">
        <a className="d3-logo" href="#d3-home" aria-label="Ratio home"><span className="d3-logo-mark"><span /><span /><span /></span>ratio<span className="d3-logo-dot">.</span></a>
        <nav aria-label="Main navigation"><a href="#d3-how">The experience</a><a href="#d3-features">A closer look</a><a href="#d3-readers">Our philosophy</a></nav>
        <DemoButton className="d3-button d3-button-outline">Find your clarity <ArrowRight size={15} /></DemoButton>
      </header>

      <main>
        <section className="d3-hero d3-container" id="d3-home">
          <div className="d3-hero-copy">
            <div className="d3-eyebrow"><span /> A THOUGHTFUL WAY TO READ</div>
            <h1>A little less reading.<br />A lot more<br /><em>understanding.</em></h1>
            <p>For the curious mind with a full life. Turn your PDFs into clear summaries, meaningful quotes, and ideas that stay with you.</p>
            <div className="d3-hero-actions"><DemoButton className="d3-button d3-button-green">Meet your new reader <ArrowRight size={16} /></DemoButton><span>Free to try. Room to think.</span></div>
          </div>
          <PaperIllustration />
          <a className="d3-scroll-link" href="#d3-how"><ArrowDown size={14} /> GOOD IDEAS DESERVE A LITTLE SPACE</a>
        </section>

        <section className="d3-trust" aria-label="Our reading community">
          <div className="d3-container d3-trust-inner"><p>For curious minds.<br /><strong>And every kind of reading.</strong></p><div className="d3-trust-logos"><span className="d3-press-serif">Research.</span><span className="d3-press-serif">Essays.</span><span className="d3-press-serif">Reports.</span><span className="d3-press-serif">Ideas.</span></div><span className="d3-trust-note">Your next discovery.<br />Already on the page.</span></div>
        </section>

        <section className="d3-intro d3-container" id="d3-how"><div className="d3-eyebrow">A SMALL SHIFT. A DEEPER UNDERSTANDING.</div><h2>The world has enough information.<br />What we need is <em>a little more meaning.</em></h2><p>Ratio helps you find the thread. Not another tab, another task, or another thing to keep up with. Just you, your reading, and the good stuff within.</p></section>

        <section className="d3-feature d3-container" id="d3-features">
          <div className="d3-summary-scene">
            <div className="d3-source-tag"><FileText size={15} /><span>The art of noticing.pdf</span><span>28 pages</span></div>
            <div className="d3-summary-sheet"><div className="d3-sheet-top"><span className="d3-mini-brand">ratio.</span><span>THE ESSENTIALS</span></div><h3>The art of<br /><em>paying attention.</em></h3><p>Small observations can change the way we experience the everyday.</p><div className="d3-summary-point"><span>01</span><p><strong>Attention is a practice.</strong> Notice what you usually walk past. Curiosity begins with the ordinary.</p></div><div className="d3-summary-point"><span>02</span><p><strong>Less input. More presence.</strong> Give an idea the space it needs to become your own.</p></div><div className="d3-reading-time"><Check size={13} /> 28 pages, thoughtfully distilled into 3 minutes</div></div>
            <span className="d3-handwritten">The essence. Not the excess.</span>
          </div>
          <div className="d3-feature-copy"><span className="d3-feature-number">01 / THE BIG PICTURE</span><h2>Find the heart<br />of <em>every page.</em></h2><p>A 60-page paper. A report you’ve been meaning to read. Ratio gently distills the details into a clear, considered summary—without losing what makes it meaningful.</p><a className="d3-text-link" href="#d3-start">Less overwhelm, more understanding <ArrowRight size={17} /></a><div className="d3-feature-footnote"><Leaf size={17} strokeWidth={1.3} /> A lighter read. A lasting impression.</div></div>
        </section>

        <section className="d3-feature d3-feature-reverse d3-container">
          <div className="d3-feature-copy"><span className="d3-feature-number">02 / THE WORDS THAT STAY</span><h2>Some lines deserve<br />to be <em>kept.</em></h2><p>Find the passage that makes you pause. Collect the quotes that spark something, with thoughtful hints and insights that help you see a little further.</p><a className="d3-text-link" href="#d3-start">Make a little room for discovery <ArrowRight size={17} /></a><div className="d3-feature-footnote"><BookOpen size={17} strokeWidth={1.3} /> Your next good idea is already in there.</div></div>
          <div className="d3-quotes-scene"><div className="d3-quote-paper"><div className="d3-sheet-top"><Quote size={21} strokeWidth={1.3} /><span>WORTH RETURNING TO</span></div><blockquote>“The real voyage of discovery consists not in seeking new landscapes, but in having <mark>new eyes.</mark>”</blockquote><span className="d3-quote-attribution">MARCEL PROUST</span><div className="d3-quote-paper-bottom"><span>Saved to your collection</span><Check size={15} /></div></div><div className="d3-context-note"><span><Sparkles size={15} /> A LITTLE PERSPECTIVE</span><p>Understanding isn’t always about learning more. Sometimes, it’s about looking differently.</p></div><Botanical className="d3-quote-branch" /></div>
        </section>

        <section className="d3-testimonial" id="d3-readers"><div className="d3-container d3-testimonial-inner"><div className="d3-testimonial-label"><span className="d3-eyebrow">FROM ONE CURIOUS MIND TO ANOTHER</span><div className="d3-flower" aria-hidden="true"><Leaf size={54} strokeWidth={.8} /><span /></div></div><div><blockquote>A reading list shouldn’t feel like a to-do list. It should feel like <em>an invitation.</em> Not just to get through more, but to take more with you.</blockquote><div className="d3-person"><div className="d3-avatar"><BookOpen size={19} /></div><div><strong>The Ratio philosophy</strong><span>For readers. For thinkers. For the endlessly curious.</span></div></div></div></div></section>

        <section className="d3-final d3-container" id="d3-start"><div className="d3-eyebrow">A CLEARER MIND STARTS HERE</div><h2>Good reading.<br /><em>Better understanding.</em></h2><p>Bring your PDF. Leave with a little more perspective.</p><DemoButton className="d3-button d3-button-green">Turn a new page <ArrowRight size={17} /></DemoButton><span className="d3-final-note">No credit card. No rush. Just curiosity.</span><Botanical className="d3-final-branch" /></section>
      </main>

      <footer className="d3-footer d3-container"><div><a className="d3-logo" href="#d3-home">ratio.</a><span>A little less. A little deeper.</span></div><p>© {new Date().getFullYear()} Ratio. Made for the curious.</p><a href="#d3-home">Back to the beginning <ArrowRight size={14} /></a></footer>
      <DesignSwitcher current={3} />
    </div>
  );
}
