import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Check, ChevronRight, FileText, Focus, Layers, LockKeyhole, Plus, Sparkles, Upload } from "lucide-react";
import { DemoButton, DesignSwitcher } from "./shared";
import "./design-5.css";

const previewTabs = ["Overview", "Key insights", "Sources"] as const;
type PreviewTab = (typeof previewTabs)[number];

function RatioMark({ small = false }: { small?: boolean }) {
  return <span className={`d5-mark${small ? " d5-mark-small" : ""}`} aria-hidden="true"><span /><span /><span /></span>;
}

function OrbitalIllustration() {
  return (
    <div className="d5-observatory" role="img" aria-label="A PDF at the center of golden orbital rings, transformed into connected key insights, clear summaries, and source citations">
      <div className="d5-orbit-coordinate d5-coordinate-top">FIG. 01 / THE CLARITY ENGINE</div>
      <svg className="d5-orbit-svg" viewBox="0 0 640 620" fill="none" aria-hidden="true">
        <defs>
          <radialGradient id="d5-ambient"><stop stopColor="#D9A44E" stopOpacity=".15" /><stop offset=".7" stopColor="#D9A44E" stopOpacity=".035" /><stop offset="1" stopColor="#D9A44E" stopOpacity="0" /></radialGradient>
          <linearGradient id="d5-orbit-gold" x1="130" y1="120" x2="530" y2="490" gradientUnits="userSpaceOnUse"><stop stopColor="#E9BC71" stopOpacity=".12" /><stop offset=".45" stopColor="#E9BC71" /><stop offset="1" stopColor="#E9BC71" stopOpacity=".15" /></linearGradient>
          <linearGradient id="d5-paper" x1="274" y1="248" x2="372" y2="376" gradientUnits="userSpaceOnUse"><stop stopColor="#393127" /><stop offset="1" stopColor="#1B1916" /></linearGradient>
          <filter id="d5-glow"><feGaussianBlur stdDeviation="4" /></filter>
        </defs>
        <circle cx="320" cy="310" r="302" fill="url(#d5-ambient)" />
        <path d="M18 310H622M320 12V608" stroke="#CDA361" strokeOpacity=".09" strokeDasharray="3 7" />
        <path d="M102 92L538 528M102 528L538 92" stroke="#CDA361" strokeOpacity=".055" />
        {[270, 229, 182, 134].map((radius) => <circle key={radius} cx="320" cy="310" r={radius} stroke="url(#d5-orbit-gold)" strokeOpacity={radius === 229 ? ".65" : ".3"} />)}
        <circle cx="320" cy="310" r="252" stroke="#CDA361" strokeOpacity=".14" strokeDasharray="1 9" />
        <circle cx="320" cy="310" r="164" stroke="#CDA361" strokeOpacity=".2" strokeDasharray="2 7" />
        <g className="d5-orbit-spin">
          <circle cx="320" cy="310" r="229" stroke="#EBC37E" strokeWidth="1.5" strokeDasharray="116 1323" transform="rotate(-48 320 310)" />
          <circle cx="320" cy="81" r="4" fill="#EBC37E" /><circle cx="320" cy="81" r="9" fill="#EBC37E" opacity=".18" />
        </g>
        {Array.from({ length: 72 }, (_, i) => <path key={i} d={`M320 36V${i % 6 === 0 ? 47 : 41}`} stroke="#BDA478" strokeOpacity={i % 6 === 0 ? ".45" : ".2"} transform={`rotate(${i * 5} 320 310)`} />)}
        <ellipse cx="320" cy="310" rx="300" ry="96" transform="rotate(-35 320 310)" stroke="#D2A860" strokeOpacity=".26" />
        <path d="M320 241V159H416M372 310H504V370M288 350L209 429H126" stroke="#D6AE6C" strokeOpacity=".6" />
        <circle cx="416" cy="159" r="3" fill="#E9BD76" /><circle cx="504" cy="370" r="3" fill="#E9BD76" /><circle cx="126" cy="429" r="3" fill="#E9BD76" />
        <circle cx="320" cy="310" r="89" fill="#E1AF61" fillOpacity=".025" stroke="#E1AF61" strokeOpacity=".18" />
        <circle cx="320" cy="310" r="70" stroke="#E1AF61" strokeOpacity=".2" strokeDasharray="1 5" />
        <path d="M289 253H334L352 271V359Q352 365 346 365H289Q283 365 283 359V259Q283 253 289 253Z" fill="url(#d5-paper)" stroke="#D8B174" strokeOpacity=".8" />
        <path d="M334 253V271H352" stroke="#D8B174" strokeOpacity=".7" />
        <path d="M296 291H338M296 299H328M296 307H338M296 315H320" stroke="#D8B174" strokeOpacity=".4" />
        <rect x="295" y="330" width="32" height="17" rx="3" fill="#E3B571" fillOpacity=".13" />
        <text x="301" y="342" fill="#E9BD76" fontSize="9" fontFamily="monospace" letterSpacing="1">PDF</text>
        <circle cx="467" cy="486" r="6" fill="#EBC37E" filter="url(#d5-glow)" /><circle cx="467" cy="486" r="2.5" fill="#F5D69B" />
        <circle cx="117" cy="204" r="3" fill="#EBC37E" /><circle cx="405" cy="68" r="2" fill="#EBC37E" opacity=".6" />
        <path d="M148 117V127M143 122H153M545 458V466M541 462H549M225 545V551M222 548H228" stroke="#C8AC7A" strokeOpacity=".6" />
      </svg>
      <div className="d5-insight d5-insight-one"><span className="d5-insight-icon"><Sparkles size={15} /></span><div><span className="d5-micro">SIGNAL FOUND</span><strong>The ideas that matter.</strong><span className="d5-insight-lines"><i /><i /></span></div><span className="d5-live-dot" /></div>
      <div className="d5-insight d5-insight-two"><span className="d5-insight-icon"><Focus size={15} /></span><div><span className="d5-micro">NOISE REMOVED</span><strong>Clarity, in minutes.</strong></div></div>
      <div className="d5-insight d5-insight-three"><Check size={13} /><span>Every insight. Grounded.</span><span className="d5-source-tag">p. 24</span></div>
      <div className="d5-orbit-coordinate d5-coordinate-bottom"><span className="d5-live-dot" /> LESS INFORMATION. MORE UNDERSTANDING.</div>
    </div>
  );
}

function ReadingPreview() {
  const [activeTab, setActiveTab] = useState<PreviewTab>("Overview");
  return (
    <div className="d5-reader">
      <div className="d5-reader-toolbar"><div className="d5-reader-file"><FileText size={15} /><span>The future of focused work.pdf</span><span className="d5-file-pages">32 pages</span></div><span className="d5-reader-status"><span className="d5-live-dot" /> Ready to explore</span></div>
      <div className="d5-reader-body">
        <div className="d5-source-preview">
          <div className="d5-source-top"><span>ORIGINAL DOCUMENT</span><span>01 / 32</span></div>
          <div className="d5-paper">
            <span className="d5-paper-kicker">FIELD NOTES / VOL. 08</span><div className="d5-paper-rule" />
            <h3>The future of<br />focused work.</h3><p className="d5-paper-subtitle">Rethinking attention in an<br />age of information abundance.</p>
            <div className="d5-paper-byline">RESEARCH & INSIGHTS · 2025</div>
            <div className="d5-paper-paragraph" aria-hidden="true">{[100, 97, 100, 84, 94, 100, 73].map((width, i) => <span key={i} style={{ width: `${width}%` }} className={i > 2 && i < 5 ? "d5-highlight" : ""} />)}</div>
            <div className="d5-paper-chart" aria-hidden="true">{[28, 42, 37, 59, 48, 72, 64, 88, 79, 100].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div>
            <div className="d5-paper-chart-label"><span>DEPTH OF FOCUS</span><span>FIG. 01</span></div>
            <div className="d5-paper-paragraph d5-paper-paragraph-last" aria-hidden="true">{[100, 94, 100, 68].map((width, i) => <span key={i} style={{ width: `${width}%` }} />)}</div>
            <span className="d5-paper-page">01</span>
          </div>
          <div className="d5-document-caption"><LockKeyhole size={11} /> Your document stays yours. Always.</div>
        </div>
        <div className="d5-summary-preview">
          <div className="d5-summary-heading"><div><RatioMark small /><span>Your document, illuminated.</span></div><span className="d5-example-label">LIVE EXAMPLE</span></div>
          <div className="d5-preview-tabs" role="tablist" aria-label="Document insights">{previewTabs.map((tab) => <button key={tab} id={`d5-tab-${tab.replaceAll(" ", "-")}`} role="tab" aria-selected={activeTab === tab} aria-controls="d5-preview-panel" onClick={() => setActiveTab(tab)} className={activeTab === tab ? "d5-tab-active" : ""}>{tab}{tab === "Key insights" && <span>4</span>}</button>)}</div>
          <div className="d5-preview-content" id="d5-preview-panel" role="tabpanel" aria-labelledby={`d5-tab-${activeTab.replaceAll(" ", "-")}`} tabIndex={0}>
            {activeTab === "Overview" && <><div className="d5-reading-time"><BookOpen size={12} /> 2 MIN READ <span>32 pages → the big picture</span></div><h3>Attention is your<br /><em>most valuable resource.</em></h3><p>In a world that rewards being always-on, the real advantage is the ability to go deep. This report explores why focused work matters—and how to make room for it.</p><div className="d5-key-thought"><span className="d5-micro"><Sparkles size={12} /> THE CENTRAL IDEA</span><p>Better work doesn’t come from consuming more information. It comes from understanding the right information.</p><span className="d5-citation">Source: pages 4–6 <ArrowUpRight size={11} /></span></div><div className="d5-summary-bottom"><span><Check size={13} /> Connected to the source</span><button onClick={() => setActiveTab("Key insights")}>Explore insights <ArrowRight size={14} /></button></div></>}
            {activeTab === "Key insights" && <><div className="d5-reading-time"><Sparkles size={12} /> FOUR IDEAS WORTH KEEPING</div><h3>Less noise.<br /><em>More signal.</em></h3><ol className="d5-takeaways">{[["Protect your attention", "Reserve uninterrupted time for the work that needs your full mind.", "04–06"], ["Make space for depth", "Batch shallow tasks instead of letting them fragment your day.", "12–15"], ["Read for understanding", "Connect new ideas to what you already know, rather than collecting more.", "21–24"], ["Measure what matters", "Track meaningful outcomes, not the number of hours spent online.", "28–30"]].map(([title, text, pages]) => <li key={title}><div><strong>{title}</strong><p>{text}</p></div><span>p. {pages}</span></li>)}</ol></>}
            {activeTab === "Sources" && <><div className="d5-reading-time"><Layers size={12} /> CONTEXT, NEVER LOST</div><h3>Trust the insight.<br /><em>Trace the source.</em></h3><p>Every takeaway has a home in the original. Here’s the context behind this example summary.</p><div className="d5-source-quotes"><blockquote>“The ability to sustain attention is becoming both more difficult and more valuable.”<cite>Pages 4–6 · The attention economy</cite></blockquote><blockquote>“Understanding is not an accumulation of facts, but a network of meaningful connections.”<cite>Pages 21–24 · Reading with intention</cite></blockquote></div></>}
          </div>
        </div>
      </div>
      <div className="d5-reader-bottom"><span>FROM DENSE DOCUMENT TO CLEAR THINKING.</span><DemoButton className="d5-preview-action">Try it with your PDF <ArrowUpRight size={14} /></DemoButton></div>
    </div>
  );
}

export function DesignFive() {
  return (
    <div className="d5" id="d5-top">
      <header className="d5-header d5-container">
        <a className="d5-logo" href="#d5-top" aria-label="Ratio home"><RatioMark />ratio<span className="d5-logo-period">.</span></a>
        <nav className="d5-nav" aria-label="Main navigation"><a href="#d5-how">How it works</a><a href="#d5-preview">A little clarity</a><DemoButton className="d5-nav-cta">Try Ratio <ArrowUpRight size={14} /></DemoButton></nav>
      </header>
      <main>
        <section className="d5-hero d5-container">
          <div className="d5-hero-copy"><div className="d5-eyebrow"><span className="d5-live-dot" /> FOR THE CURIOUS. SHORT ON TIME.</div><h1>Read less.<br />Understand<br /><em>infinitely more.</em></h1><p className="d5-hero-description">There’s a world of insight inside every PDF.<br className="d5-desktop-break" /> Ratio brings it into focus. Clear summaries, essential<br className="d5-desktop-break" /> ideas, and the space to think for yourself.</p><div className="d5-hero-actions"><DemoButton className="d5-button">Find your clarity <ArrowUpRight size={17} /></DemoButton><a href="#d5-preview" className="d5-text-link">See it in action <ArrowDown size={14} /></a></div><div className="d5-hero-note"><span>No credit card.</span><span>No information overload.</span></div></div>
          <OrbitalIllustration />
          <div className="d5-hero-bottom"><span>A LITTLE LESS SCROLLING. A LOT MORE KNOWING.</span><a href="#d5-preview" aria-label="Explore Ratio"><ArrowDown size={17} /></a><span>SCROLL TO DISCOVER</span></div>
        </section>
        <section className="d5-proof d5-container" aria-label="Built for thoughtful readers"><span className="d5-micro">GOOD COMPANY FOR<br />CURIOUS MINDS.</span><div><BookOpen size={20} /><span>The lifelong learners</span></div><div><Focus size={21} /><span>The deep thinkers</span></div><div><Layers size={21} /><span>The everyday researchers</span></div></section>
        <section className="d5-demo-section d5-container" id="d5-preview"><div className="d5-section-top"><div><span className="d5-eyebrow">01 / A CLEARER PERSPECTIVE</span><h2>From information<br />to <em>illumination.</em></h2></div><p>The 32-page report. The paper you saved.<br />The ideas you almost missed.<br /><span>Meet the version you’ll actually remember.</span></p></div><ReadingPreview /><div className="d5-preview-footnote"><span><Plus size={11} /> LESS FRICTION</span><span><Plus size={11} /> MORE CONTEXT</span><span><Plus size={11} /> ALL THE IMPORTANT PARTS</span></div></section>
        <section className="d5-how-section d5-container" id="d5-how"><div className="d5-how-intro"><span className="d5-eyebrow">02 / A SIMPLER RITUAL</span><h2>A small step.<br /><em>A wider world.</em></h2><p>No elaborate workflows. No prompt engineering.<br />Just you, your document, and a little more clarity.</p><DemoButton className="d5-text-link">Give it a try <ArrowUpRight size={15} /></DemoButton></div><div className="d5-timeline">{[{ number: "01", icon: Upload, title: "Bring your curiosity.", text: "Drop in a PDF. A research paper, a long report, that thing you’ve been meaning to read." }, { number: "02", icon: Sparkles, title: "Let the signal emerge.", text: "Ratio connects the dots, distills the essential ideas, and keeps every insight tied to its source." }, { number: "03", icon: BookOpen, title: "Take understanding with you.", text: "Read the summary. Explore a little deeper. Leave with knowledge that stays, not another open tab." }].map(({ number, icon: Icon, title, text }) => <div className="d5-step" key={number}><span className="d5-step-number">{number}</span><span className="d5-step-icon"><Icon size={20} strokeWidth={1.4} /></span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></section>
        <section className="d5-quote-section"><div className="d5-container d5-quote-inner"><span className="d5-eyebrow">LESS TO READ. MORE TO TAKE AWAY.</span><span className="d5-quote-mark" aria-hidden="true">“</span><blockquote>Not another way to consume more.<br />A better way to <em>understand enough.</em></blockquote><div className="d5-quote-attribution"><span className="d5-attribution-line" /><span>THE IDEA BEHIND RATIO</span><span className="d5-attribution-line" /></div><div className="d5-quote-stars" aria-hidden="true"><Plus size={12} /><Plus size={19} /><Plus size={12} /></div></div></section>
        <section className="d5-final-cta d5-container"><div><span className="d5-eyebrow"><span className="d5-live-dot" /> YOUR NEXT GOOD IDEA IS IN THERE.</span><h2>Make room for<br /><em>what matters.</em></h2></div><div className="d5-final-action"><p>Start with a document.<br />Leave with a new perspective.</p><DemoButton className="d5-button">Illuminate your first PDF <ArrowUpRight size={18} /></DemoButton><span>FREE TO TRY. REFRESHINGLY SIMPLE.</span></div><div className="d5-footer-orbits" aria-hidden="true"><i /><i /><i /></div></section>
      </main>
      <footer className="d5-footer d5-container"><a className="d5-logo" href="#d5-top"><RatioMark small />ratio<span className="d5-logo-period">.</span></a><span>A little clarity goes a long way.</span><a href="#d5-top">BACK TO TOP <ChevronRight size={13} /></a><span className="d5-copyright">© {new Date().getFullYear()} RATIO</span></footer>
      <div className="d5-switcher"><DesignSwitcher current={5} /></div>
    </div>
  );
}
