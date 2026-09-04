import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  BookOpen,
  Check,
  ChevronDown,
  FileText,
  Lightbulb,
  Quote,
  Sparkles,
  Upload,
  X,
  Plus,
  Minus,
  Bookmark,
  Layers,
  ScanLine,
  Leaf,
  CircleHelp,
  Play,
  Menu,
  Copy,
  CheckCheck,
} from "lucide-react";
import type { ReactNode } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

type OpenReader = (upload?: boolean) => void;
const directions = [
  "The margin",
  "After hours",
  "Study club",
  "The essential",
  "A little clarity",
];

function Logo({ flower = false }: { flower?: boolean }) {
  return (
    <a
      className="logo"
      href={window.location.pathname}
      aria-label="Ratio Reader home"
    >
      <span className={flower ? "logo-symbol flower" : "logo-symbol"}>
        {flower ? "✳" : <BookOpen size={22} strokeWidth={2.4} />}
      </span>
      <span>
        ratio<span className="logo-reader">reader</span>
      </span>
    </a>
  );
}
function Header({ open, variant }: { open: OpenReader; variant: number }) {
  const [menu, setMenu] = useState(false);
  return (
    <header className="site-header">
      <Logo flower={variant === 3 || variant === 5} />
      <nav className={menu ? "nav-links is-open" : "nav-links"}>
        <a href="#how-it-works" onClick={() => setMenu(false)}>
          How it works
        </a>
        <a href="#features" onClick={() => setMenu(false)}>
          {variant === 5 ? "A little more clarity" : "Why Ratio"}
        </a>
        <a href="#questions" onClick={() => setMenu(false)}>
          FAQs
        </a>
      </nav>
      <button className="nav-cta" onClick={() => open(true)}>
        {variant === 2
          ? "Enter the reader"
          : variant === 5
            ? "Find your focus"
            : "Start reading"}
        <ArrowUpRight size={16} />
      </button>
      <button
        className="mobile-menu"
        aria-label="Toggle menu"
        aria-expanded={menu}
        onClick={() => setMenu(!menu)}
      >
        {menu ? <X /> : <Menu />}
      </button>
    </header>
  );
}
function CTA({
  open,
  label = "Upload your PDF",
  children,
}: {
  open: OpenReader;
  label?: string;
  children?: ReactNode;
}) {
  return (
    <button className="primary-cta" onClick={() => open(true)}>
      {children || <Upload size={18} />} {label}
      <ArrowUpRight size={18} />
    </button>
  );
}
function SampleButton({
  open,
  label = "Explore a sample",
}: {
  open: OpenReader;
  label?: string;
}) {
  return (
    <button className="sample-button" onClick={() => open(false)}>
      <Play size={13} fill="currentColor" />
      {label}
    </button>
  );
}
function TinyLines({ count = 5 }: { count?: number }) {
  return (
    <div className="tiny-lines" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <i key={i} style={{ width: `${[100, 92, 100, 84, 96, 70][i % 6]}%` }} />
      ))}
    </div>
  );
}

function PaperScene({ open }: { open: OpenReader }) {
  return (
    <div className="paper-scene">
      <div className="scene-grid" />
      <div className="paper-back" />
      <div className="source-paper">
        <div className="paper-topline">
          <span>THE READING ROOM</span>
          <span>Vol. 01</span>
        </div>
        <h3>
          The art of
          <br />
          paying attention.
        </h3>
        <p className="paper-byline">A field guide to thinking deeply</p>
        <div className="paper-columns">
          <div>
            <TinyLines count={7} />
            <div className="paper-highlight">
              Attention is a skill,
              <br />
              not a finite resource.
            </div>
            <TinyLines count={7} />
          </div>
          <div>
            <TinyLines count={11} />
            <TinyLines count={5} />
          </div>
        </div>
        <span className="paper-page">12</span>
      </div>
      <div className="margin-scribble">
        the good bits,
        <br />
        without the digging{" "}
        <svg viewBox="0 0 100 65" aria-hidden="true">
          <path d="M8 6 Q72 -1 68 52 M56 40 L68 54 L81 43" />
        </svg>
      </div>
      <button className="insight-float" onClick={() => open(false)}>
        <span className="insight-label">
          <Sparkles size={14} /> The key insight
        </span>
        <p>
          Deep understanding starts
          <br />
          with knowing what matters.
        </p>
        <span className="source-ref">
          Connected to the original <ArrowUpRight size={13} />
        </span>
      </button>
      <div className="quote-float">
        <Quote size={20} />
        <span>
          “What you choose to pay attention
          <br />
          to is the life you choose to live.”
        </span>
        <small>Example quote · p. 12</small>
      </div>
      <div className="page-reduction">
        <span>24 pages</span>
        <ArrowRight size={16} />
        <strong>5 clear ideas</strong>
      </div>
    </div>
  );
}
function DesignOne({ open }: { open: OpenReader }) {
  return (
    <div className="design design-one">
      <div className="page-wrap">
        <Header open={open} variant={1} />
        <main>
          <section className="editorial-hero">
            <div className="editorial-copy">
              <span className="availability">
                <span /> A little less reading. A lot more understanding.
              </span>
              <h1>
                Big ideas.
                <br />
                Less between
                <br />
                you and them.
              </h1>
              <p>
                Your next lightbulb moment is in that PDF.
                <br className="desktop-break" /> Ratio helps you find it—with
                clear summaries,
                <br className="desktop-break" /> thoughtful hints, and quotes
                worth keeping.
              </p>
              <div className="hero-actions">
                <CTA open={open} />
                <SampleButton open={open} />
              </div>
              <span className="cta-note">
                Bring your curiosity. We’ll help with the reading.
              </span>
            </div>
            <PaperScene open={open} />
          </section>
          <div className="use-case-strip">
            <span>A fresh perspective on your</span>
            <span>
              <FileText /> Research papers
            </span>
            <span>
              <BookOpen /> Next big read
            </span>
            <span>
              <Layers /> Work reports
            </span>
            <span>
              <Lightbulb /> Wild curiosities
            </span>
          </div>
          <section id="features" className="editorial-features section-space">
            <div className="section-intro">
              <span className="section-kicker">
                More than a shorter version
              </span>
              <h2>
                Don’t just get through it.
                <br />
                Get something out of it.
              </h2>
              <p>
                Less searching for the point.
                <br />
                More connecting the dots.
              </p>
            </div>
            <FeatureCards />
          </section>
          <HowItWorks />
          <FAQ />
          <Closing
            open={open}
            title="There’s a good idea in there."
            subtitle="Let’s find it together."
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}

function LensScene({ open }: { open: OpenReader }) {
  return (
    <div className="lens-scene">
      <div className="lens-orbit orbit-one" />
      <div className="lens-orbit orbit-two" />
      <div className="lens-orbit orbit-three" />
      <div className="lens-path" />
      <div className="dark-document">
        <span>
          <FileText size={14} /> attention.pdf
        </span>
        <TinyLines count={9} />
        <small>24 pages of possibility</small>
      </div>
      <button
        className="lens"
        onClick={() => open(false)}
        aria-label="Explore the reader demo"
      >
        <span className="lens-glint" />
        <span className="lens-logo">
          r<span>:</span>
        </span>
        <span className="lens-caption">A clearer perspective</span>
      </button>
      <div className="dark-insight">
        <span>
          <Sparkles size={14} /> The signal
        </span>
        <h3>
          Attention can
          <br />
          be cultivated.
        </h3>
        <p>
          Build the conditions for focus.
          <br />
          The understanding follows.
        </p>
        <span className="dark-tags">
          Key insight <span>01 / 05</span>
        </span>
      </div>
      <div className="lens-bottom-label">
        <span>Complexity in.</span>
        <span>Clarity out.</span>
      </div>
    </div>
  );
}
function DesignTwo({ open }: { open: OpenReader }) {
  return (
    <div className="design design-two">
      <div className="page-wrap">
        <Header open={open} variant={2} />
        <main>
          <section className="night-hero">
            <div className="night-status">
              <span /> For minds that go a little deeper
            </div>
            <h1>
              Less noise.
              <br />
              More knowing.
            </h1>
            <p>
              Turn dense PDFs into your next discovery.
              <br />
              The essential ideas, the context, the “oh, now I get it.”
            </p>
            <div className="hero-actions">
              <CTA open={open} label="Find your clarity">
                <Sparkles size={18} />
              </CTA>
              <SampleButton open={open} label="See it in action" />
            </div>
            <LensScene open={open} />
          </section>
          <section id="features" className="night-features section-space">
            <div className="section-intro">
              <span className="section-kicker">A new lens on your reading</span>
              <h2>
                Go beyond
                <br />
                the surface.
              </h2>
              <p>
                Everything you need to turn information
                <br />
                into something you actually understand.
              </p>
            </div>
            <FeatureCards />
          </section>
          <HowItWorks />
          <FAQ />
          <Closing
            open={open}
            title="Follow your curiosity."
            subtitle="See where a little clarity takes you."
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}

function BookCharacter() {
  return (
    <svg
      className="book-character"
      viewBox="0 0 400 410"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M115 307L102 375L62 382M253 310L278 370L318 369"
        stroke="#35223f"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M80 182Q22 148 30 214M294 170Q346 117 363 145"
        stroke="#35223f"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path d="M85 52L295 73L290 316L80 292Z" fill="#35223f" />
      <path
        d="M99 41L310 62L302 298L90 274Z"
        fill="#fff7de"
        stroke="#35223f"
        strokeWidth="3"
      />
      <path
        d="M110 38L324 58L315 287L100 267Z"
        fill="#f9efdb"
        stroke="#35223f"
        strokeWidth="3"
      />
      <path
        d="M90 27L299 49L288 277L79 253Z"
        fill="#b7b5ed"
        stroke="#35223f"
        strokeWidth="4"
      />
      <path d="M113 31L104 257" stroke="#35223f" strokeWidth="3" />
      <path
        d="M145 85L260 96M143 101L218 109"
        stroke="#35223f"
        strokeWidth="5"
      />
      <ellipse cx="166" cy="157" rx="9" ry="14" fill="#35223f" />
      <ellipse cx="228" cy="163" rx="9" ry="14" fill="#35223f" />
      <path
        d="M174 199Q193 220 218 200"
        stroke="#35223f"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="143" cy="185" r="12" fill="#f48c79" />
      <circle cx="248" cy="190" r="12" fill="#f48c79" />
      <path
        d="M310 42L317 22M334 53L352 44M300 26L296 11"
        stroke="#35223f"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
function DesignThree({ open }: { open: OpenReader }) {
  return (
    <div className="design design-three">
      <div className="page-wrap">
        <Header open={open} variant={3} />
        <main>
          <section className="club-hero">
            <div className="club-copy">
              <span className="club-pill">
                <Sparkles size={15} /> Less head-scratching. More a-ha!
              </span>
              <h1>
                Meet your
                <br />
                brain’s new
                <br />
                study buddy.
              </h1>
              <p>
                Big paper? Tricky topic? You’ve got this.
                <br />
                Turn any PDF into bite-sized ideas, useful hints,
                <br className="desktop-break" /> and the kind of clarity that
                just clicks.
              </p>
              <div className="hero-actions">
                <CTA open={open} label="Let’s make it click" />
              </div>
              <SampleButton open={open} label="Take a little look around" />
            </div>
            <div className="club-art">
              <div className="club-blob" />
              <span className="star star-one">✳</span>
              <span className="star star-two">✦</span>
              <div className="club-sticky">
                <span>The big idea 💡</span>
                <p>
                  Understanding &gt;
                  <br />
                  memorizing everything.
                </p>
                <svg viewBox="0 0 140 20">
                  <path d="M5 11Q60 0 130 9" />
                </svg>
              </div>
              <BookCharacter />
              <button className="club-mini" onClick={() => open(false)}>
                <Check size={18} />
                <span>Complicated → got it.</span>
              </button>
              <span className="club-handwritten">
                a friend for your frontal lobe
              </span>
            </div>
          </section>
        </main>
      </div>
      <div className="club-marquee">
        <span>Read a little smarter</span>✳<span>Stay a lot more curious</span>✳
        <span>Make room for a-ha</span>✳<span>Read a little smarter</span>✳
      </div>
      <div className="page-wrap">
        <main>
          <section id="features" className="club-features section-space">
            <div className="section-intro">
              <span className="section-kicker">Your reading survival kit</span>
              <h2>
                For the “wait, what?”
                <br />
                and the “oh, wow.”
              </h2>
            </div>
            <FeatureCards />
          </section>
          <HowItWorks />
          <FAQ />
          <Closing
            open={open}
            title="Your next a-ha is waiting."
            subtitle="Grab a PDF. Bring your wonderfully curious brain."
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}

function CompressionGraphic({ open }: { open: OpenReader }) {
  return (
    <div className="compression-graphic">
      <div className="compression-caption">
        <span>Information overload.</span>
        <ArrowDown size={18} />
      </div>
      <div className="sheet-stack">
        {Array.from({ length: 7 }, (_, i) => (
          <div
            key={i}
            className="stack-sheet"
            style={{
              top: i * 17,
              left: i * 7,
              transform: `rotate(${-9 + i * 2}deg)`,
            }}
          >
            <TinyLines count={5} />
          </div>
        ))}
      </div>
      <div className="compression-arrow">
        <ArrowDown size={40} strokeWidth={1} />
      </div>
      <button className="essential-sheet" onClick={() => open(false)}>
        <span>
          <Sparkles size={14} /> Your essential read
        </span>
        <h3>
          Keep the idea.
          <br />
          Skip the noise.
        </h3>
        <div className="essential-line" />
        <p>
          Clear summaries.
          <br />
          The context that counts.
          <br />
          Words worth remembering.
        </p>
        <span className="essential-bottom">
          A little reading. A lot of meaning.
          <ArrowUpRight size={18} />
        </span>
      </button>
    </div>
  );
}
function DesignFour({ open }: { open: OpenReader }) {
  return (
    <div className="design design-four">
      <div className="page-wrap">
        <Header open={open} variant={4} />
        <main>
          <section className="poster-hero">
            <div className="poster-copy">
              <div className="poster-eyebrow">
                <span>The reader for a world with too much to read.</span>
                <span>↓</span>
              </div>
              <h1>
                READ
                <br />
                LESS.
                <br />
                <span>GET MORE.</span>
              </h1>
              <div className="poster-description">
                <p>
                  All the substance. A fraction of the pages.
                  <br />
                  Ratio turns your PDFs into the ideas, insights,
                  <br className="desktop-break" /> and quotes that deserve your
                  attention.
                </p>
                <CTA open={open} label="Put your PDF to work" />
                <SampleButton open={open} />
              </div>
            </div>
            <CompressionGraphic open={open} />
          </section>
          <div className="poster-band">
            <span>Less scrolling.</span>
            <span>More connecting.</span>
            <span>That’s the ratio.</span>
            <ArrowDown size={28} />
          </div>
          <section id="features" className="poster-features section-space">
            <div className="section-intro">
              <span className="section-kicker">Built around the point.</span>
              <h2>
                Every feature.
                <br />
                More meaning.
              </h2>
            </div>
            <FeatureCards />
          </section>
          <HowItWorks />
          <FAQ />
          <Closing
            open={open}
            title="Make the most of less."
            subtitle="One document. A whole new perspective."
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}

function DesignFive({ open }: { open: OpenReader }) {
  return (
    <div className="design design-five">
      <div className="page-wrap">
        <Header open={open} variant={5} />
      </div>
      <main>
        <section className="garden-hero">
          <img
            className="garden-photo"
            src="/forest-canopy.jpg"
            alt="A quiet wooden footbridge surrounded by lush green forest"
            fetchPriority="high"
          />
          <div className="garden-overlay" />
          <div className="garden-content">
            <span className="garden-pill">
              <Leaf size={14} /> A calmer way to take it all in
            </span>
            <h1>
              A little less reading.
              <br />A little more room.
            </h1>
            <p>
              For thinking. For wondering. For the ideas that stay.
              <br />
              Find the heart of any PDF with a reading companion
              <br className="desktop-break" /> that helps you slow down and
              understand more.
            </p>
            <CTA open={open} label="Make room for clarity">
              <Leaf size={17} />
            </CTA>
            <SampleButton open={open} label="Wander through a sample" />
          </div>
          <div className="garden-caption">
            <span>A quieter mind starts with a clearer page.</span>
            <span>
              Take a breath. Then take it in. <ArrowDown size={14} />
            </span>
          </div>
        </section>
        <div className="page-wrap">
          <section className="garden-intro" id="features">
            <div>
              <span className="section-kicker">
                Reading, with breathing room
              </span>
              <h2>
                You don’t have to
                <br />
                hold every word.
              </h2>
            </div>
            <p>
              Somewhere between the first page and the last, there’s an idea
              that matters to you. Ratio gently brings it into focus—with the
              context to understand it and the space to make it your own.
            </p>
          </section>
          <div className="garden-feature-layout">
            <div className="garden-note">
              <span>
                <Bookmark size={15} /> A thought worth keeping
              </span>
              <Quote size={32} />
              <blockquote>
                Understanding grows
                <br />
                when we give ideas
                <br />
                room to settle.
              </blockquote>
              <div>
                From the sample reading room <span>p. 12</span>
              </div>
            </div>
            <FeatureCards />
          </div>
          <HowItWorks />
          <FAQ />
          <Closing
            open={open}
            title="Let a good idea find you."
            subtitle="Open a document. Make a little space."
          />
          <Footer />
        </div>
      </main>
    </div>
  );
}

const features = [
  {
    icon: FileText,
    title: "The essence, made clear.",
    text: "Get the main ideas in a summary that makes sense. Know what matters before you dive deeper.",
    tag: "Thoughtful summaries",
  },
  {
    icon: Lightbulb,
    title: "A nudge toward understanding.",
    text: "Unpack unfamiliar concepts with helpful context and hints that make the tricky parts click.",
    tag: "Helpful hints",
  },
  {
    icon: Quote,
    title: "The words that stay with you.",
    text: "Discover meaningful quotes, connected to their source. Keep the thought. Find the page.",
    tag: "Quotes with context",
  },
];
function FeatureCards() {
  return (
    <div className="feature-cards">
      {features.map(({ icon: Icon, title, text, tag }) => (
        <article className="feature-card" key={title}>
          <div className="feature-icon">
            <Icon size={23} strokeWidth={1.5} />
          </div>
          <span className="feature-tag">{tag}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  );
}
function HowItWorks() {
  return (
    <section id="how-it-works" className="how-section section-space">
      <div className="section-intro">
        <span className="section-kicker">From pages to perspective</span>
        <h2>
          A small shift in
          <br />
          how you read.
        </h2>
      </div>
      <div className="steps">
        {[
          {
            title: "Bring a PDF.",
            text: "That research paper, report, or chapter you’ve been meaning to get to.",
            icon: Upload,
          },
          {
            title: "Find the important parts.",
            text: "Start with the summary. Explore the key ideas, hints, and memorable quotes.",
            icon: ScanLine,
          },
          {
            title: "Make the ideas your own.",
            text: "Follow your curiosity back to the source. Leave with a clearer understanding.",
            icon: Sparkles,
          },
        ].map(({ title, text, icon: Icon }, i) => (
          <article key={title}>
            <span className="step-number">0{i + 1}</span>
            <Icon size={24} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
const questions = [
  {
    q: "What can I read with Ratio?",
    a: "Start with text-based PDFs: research papers, essays, reports, and book chapters. The live preview reads PDFs up to 20 MB in your browser. Scanned image-only documents need text recognition before they can be read.",
  },
  {
    q: "Is this a replacement for reading the original?",
    a: "Think of Ratio as a companion. It helps you find the main ideas and decide where to spend your attention. For nuance, verification, or a deeper dive, always return to the original text.",
  },
  {
    q: "Can I try it without an account?",
    a: "Yes. Explore the sample reader straight away, or upload a PDF for a local preview. No sign-up or payment is needed to try this demo.",
  },
  {
    q: "What happens to my uploaded PDF?",
    a: "In this demo, your PDF is processed locally in your browser and is not uploaded to a server. Close the reader to clear it. The local preview selects key passages; it does not use an AI service.",
  },
];
function FAQ() {
  return (
    <section id="questions" className="faq-section section-space">
      <div>
        <span className="section-kicker">A little more context</span>
        <h2>Good questions.</h2>
        <p>Curiosity looks good on you.</p>
      </div>
      <div className="faq-items">
        {questions.map(({ q, a }) => (
          <details key={q}>
            <summary>
              {q}
              <Plus size={19} className="faq-plus" />
              <Minus size={19} className="faq-minus" />
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
function Closing({
  open,
  title,
  subtitle,
}: {
  open: OpenReader;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="closing">
      <span className="closing-mark">✳</span>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <CTA open={open} />
      <span className="cta-note">No account needed to explore.</span>
    </section>
  );
}
function Footer() {
  return (
    <footer>
      <Logo />
      <span>A little reading. A lot of understanding.</span>
      <a href="#questions">
        Questions? Start here <ArrowUpRight size={13} />
      </a>
      <small>© {new Date().getFullYear()} Ratio Reader</small>
    </footer>
  );
}

type Passage = { text: string; page: number };
const samplePassages: Passage[] = [
  {
    text: "Attention is a skill that develops through practice. Choosing a single task and returning to it patiently is more effective than trying to force uninterrupted focus.",
    page: 3,
  },
  {
    text: "Our environment shapes our attention. Reducing interruptions and creating a consistent place for deep work makes focused reading easier to sustain.",
    page: 7,
  },
  {
    text: "Understanding grows when we connect a new idea to something we already know. Pausing to explain a concept in our own words reveals both insight and uncertainty.",
    page: 12,
  },
  {
    text: "Regular breaks are part of the learning process. Stepping away gives ideas time to settle and makes it easier to return with a fresh perspective.",
    page: 18,
  },
];
function ReaderModal({
  upload,
  close,
}: {
  upload: boolean;
  close: () => void;
}) {
  const [tab, setTab] = useState("Summary");
  const [passages, setPassages] = useState(samplePassages);
  const [filename, setFilename] = useState("The art of paying attention");
  const [pages, setPages] = useState(24);
  const [isSample, setIsSample] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [drop, setDrop] = useState(false);
  const [copied, setCopied] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const active = useRef(true);
  useEffect(() => {
    active.current = true;
    const element = dialog.current;
    element?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      active.current = false;
      document.body.style.overflow = previous;
    };
  }, []);
  async function readFile(file?: File) {
    if (!file) return;
    setError("");
    if (!file.name.toLowerCase().endsWith(".pdf")) {
      setError("Choose a PDF file to start reading.");
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      setError("This PDF is over 20 MB. Please choose a smaller file.");
      return;
    }
    setBusy(true);
    try {
      const pdfjs = await import("pdfjs-dist");
      const worker = await import("pdfjs-dist/build/pdf.worker.min.mjs?url");
      pdfjs.GlobalWorkerOptions.workerSrc = worker.default;
      const pdf = await pdfjs.getDocument({ data: await file.arrayBuffer() })
        .promise;
      const found: Passage[] = [];
      const totalPages = pdf.numPages;
      try {
        for (let n = 1; n <= Math.min(totalPages, 80); n++) {
          if (!active.current) break;
          const page = await pdf.getPage(n);
          const content = await page.getTextContent();
          const text = content.items
            .map((item) => ("str" in item ? item.str : ""))
            .join(" ")
            .replace(/\s+/g, " ");
          const sentences = text.match(/[^.!?]+[.!?]+(?:\s|$)/g) || [text];
          for (const sentence of sentences) {
            if (sentence.trim().length > 65 && sentence.trim().length < 650)
              found.push({ text: sentence.trim(), page: n });
          }
        }
      } finally {
        await pdf.loadingTask.destroy();
      }
      if (!found.length)
        throw new Error(
          "No readable text was found. Try a text-based PDF instead of a scanned document.",
        );
      const frequencies: Record<string, number> = {};
      found.forEach((p) =>
        p.text
          .toLowerCase()
          .match(/[a-z]{5,}/g)
          ?.forEach((w) => {
            frequencies[w] = (frequencies[w] || 0) + 1;
          }),
      );
      const ranked = found
        .map((p) => ({
          ...p,
          score:
            (p.text.toLowerCase().match(/[a-z]{5,}/g) || []).reduce(
              (score, w) => score + (frequencies[w] || 0),
              0,
            ) / Math.sqrt(p.text.length),
        }))
        .sort((a, b) => b.score - a.score);
      const selected: Passage[] = [];
      for (const p of ranked) {
        if (!selected.some((s) => s.text === p.text)) {
          selected.push(p);
          if (selected.length === 5) break;
        }
      }
      if (active.current) {
        setPassages(selected.sort((a, b) => a.page - b.page));
        setFilename(file.name.replace(/\.pdf$/i, ""));
        setPages(totalPages);
        setIsSample(false);
        setTab("Summary");
        setCopied(false);
      }
    } catch (e) {
      if (active.current)
        setError(
          e instanceof Error
            ? e.message.includes("password")
              ? "This PDF is password protected. Try an unlocked copy."
              : e.message
            : "This PDF could not be read. Please try another file.",
        );
    } finally {
      if (active.current) setBusy(false);
    }
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(
        passages.map((p) => `${p.text} (p. ${p.page})`).join("\n\n"),
      );
      setCopied(true);
    } catch {
      setError(
        "Copy is unavailable in this browser. You can select and copy the text directly.",
      );
    }
  }
  return (
    <dialog
      ref={dialog}
      className="reader-modal"
      aria-label="Ratio reading room"
      onCancel={close}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="reader-shell">
        <div className="reader-header">
          <Logo />
          <span>Reading room</span>
          <button
            autoFocus
            aria-label="Close reader"
            className="icon-button"
            onClick={close}
          >
            <X size={22} />
          </button>
        </div>
        <div className="reader-body">
          <aside className="reader-sidebar">
            <span className="reader-eyebrow">Your document</span>
            <FileText size={31} />
            <h2>{filename}</h2>
            <p>
              {pages} pages ·{" "}
              {isSample ? "Sample document" : "Local PDF preview"}
            </p>
            <div
              className={"upload-zone " + (drop ? "dragging" : "")}
              onDragOver={(e) => {
                e.preventDefault();
                setDrop(true);
              }}
              onDragLeave={() => setDrop(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDrop(false);
                if (!busy) void readFile(e.dataTransfer.files[0]);
              }}
            >
              <Upload size={22} />
              <strong>
                {busy
                  ? "Reading your PDF…"
                  : upload
                    ? "Your next idea starts here."
                    : "Bring your own curiosity."}
              </strong>
              <span>Drop a PDF here or</span>
              <button onClick={() => input.current?.click()} disabled={busy}>
                {busy ? "Processing…" : "Choose a PDF"}
              </button>
              <small>Up to 20 MB · stays on your device</small>
              <input
                ref={input}
                type="file"
                accept="application/pdf,.pdf"
                onChange={(e) => {
                  void readFile(e.target.files?.[0]);
                  e.target.value = "";
                }}
                hidden
              />
            </div>
            {error && (
              <p className="reader-error" role="alert">
                {error}
              </p>
            )}
            <div className="reader-privacy">
              <Check size={15} />
              <span>
                No account. No server upload.
                <br />
                Just a little more understanding.
              </span>
            </div>
          </aside>
          <section className="reader-main" aria-busy={busy}>
            <div className="reader-content-title">
              <div>
                <span className="reader-eyebrow">
                  {isSample ? "A taste of Ratio" : "Your local preview"}
                </span>
                <h2>The important parts.</h2>
              </div>
              <button
                className="icon-button"
                onClick={copy}
                aria-label="Copy key passages"
              >
                {copied ? <CheckCheck size={19} /> : <Copy size={19} />}
              </button>
            </div>
            <div
              className="reader-tabs"
              role="tablist"
              aria-label="Reader insights"
            >
              {["Summary", "Hints", "Quotes"].map((t) => (
                <button
                  role="tab"
                  aria-selected={tab === t}
                  id={`tab-${t}`}
                  aria-controls="reader-panel"
                  onClick={() => setTab(t)}
                  key={t}
                >
                  {t === "Summary" ? (
                    <FileText size={15} />
                  ) : t === "Hints" ? (
                    <Lightbulb size={15} />
                  ) : (
                    <Quote size={15} />
                  )}{" "}
                  {t}
                </button>
              ))}
            </div>
            <div
              className="reader-tab-content"
              id="reader-panel"
              role="tabpanel"
              aria-labelledby={`tab-${tab}`}
            >
              {tab === "Summary" ? (
                <>
                  <div className="reader-summary-intro">
                    <Sparkles size={18} />
                    <p>
                      {isSample
                        ? "A clearer mind starts with the conditions you create. Attention, reflection, and rest work together to help you understand what you read."
                        : "Key passages selected from recurring themes in your document. Read them alongside the original for full context."}
                    </p>
                  </div>
                  {passages.map((p, i) => (
                    <div className="reader-passage" key={i}>
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      <p>
                        {p.text}
                        <small>Source · page {p.page}</small>
                      </p>
                    </div>
                  ))}
                </>
              ) : tab === "Hints" ? (
                <>
                  <h3>Make the ideas your own.</h3>
                  <p className="reader-tab-description">
                    Try these prompts as you return to the text.
                  </p>
                  {[
                    "Explain the main idea to someone who has never read this document. Which words need a simpler explanation?",
                    "Find one claim you agree with and one you would question. What evidence supports each?",
                    "Connect a key passage to something you already know. How does it change your understanding?",
                  ].map((hint, i) => (
                    <div className="hint-box" key={hint}>
                      <Lightbulb size={19} />
                      <div>
                        <strong>
                          {
                            [
                              "Start with your own words",
                              "Read with curiosity",
                              "Make a connection",
                            ][i]
                          }
                        </strong>
                        <p>{hint}</p>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <h3>Words worth revisiting.</h3>
                  <p className="reader-tab-description">
                    {isSample
                      ? "Illustrative excerpts from our sample reading."
                      : "Verbatim passages from your PDF, with source pages."}
                  </p>
                  {passages.slice(0, 3).map((p) => (
                    <blockquote className="reader-quote" key={p.text}>
                      <Quote size={21} />
                      <p>{p.text}</p>
                      <cite>Page {p.page}</cite>
                    </blockquote>
                  ))}
                </>
              )}
            </div>
            <div className="reader-disclaimer">
              <CircleHelp size={14} />
              {isSample
                ? "Illustrative sample created to demonstrate the reading experience."
                : pages > 80
                  ? "Local extractive preview of the first 80 pages. Not an AI-generated summary."
                  : "Local extractive preview. Not an AI-generated summary."}
            </div>
          </section>
        </div>
      </div>
    </dialog>
  );
}

function Design({ design }: { design: number }) {
  const [reader, setReader] = useState<{ upload: boolean } | null>(null);
  const [switcher, setSwitcher] = useState(true);
  const open: OpenReader = (upload = false) => setReader({ upload });
  const designs = [DesignOne, DesignTwo, DesignThree, DesignFour, DesignFive];
  const Page = designs[design - 1];
  useEffect(() => {
    document.title = `Ratio Reader — ${directions[design - 1]}`;
  }, [design]);
  return (
    <>
      <Page open={open} />
      <div className={"design-switcher " + (!switcher ? "collapsed" : "")}>
        <button
          className="switcher-label"
          aria-expanded={switcher}
          onClick={() => setSwitcher(!switcher)}
        >
          <span className="switcher-dot" />{" "}
          {switcher ? "Explore the designs" : `${design} / 5`}
          <ChevronDown size={12} />
        </button>
        {switcher && (
          <nav aria-label="Design variations">
            {directions.map((title, i) => (
              <Link
                key={title}
                to={`/${i + 1}`}
                className={design === i + 1 ? "active" : ""}
                aria-label={`Design ${i + 1}: ${title}`}
                aria-current={design === i + 1 ? "page" : undefined}
                title={title}
              >
                {i + 1}
              </Link>
            ))}
          </nav>
        )}
      </div>
      {reader && (
        <ReaderModal upload={reader.upload} close={() => setReader(null)} />
      )}
    </>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {directions.map((title, i) => (
          <Route
            key={title}
            path={`/${i + 1}`}
            element={<Design design={i + 1} />}
          />
        ))}
        <Route path="*" element={<Design design={1} />} />
      </Routes>
    </BrowserRouter>
  );
}
