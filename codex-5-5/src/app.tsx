import type { CSSProperties } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Clock3,
  Eye,
  FileText,
  Gauge,
  Highlighter,
  Layers,
  Lightbulb,
  ListChecks,
  MessageCircle,
  PanelTop,
  Quote,
  ScanText,
  ShieldCheck,
  Target,
  Telescope,
  Upload,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  text: string;
};

type CSSVars = CSSProperties & Record<`--${string}`, string | number>;

const designs = [
  { to: "/1", label: "01", name: "Observatory" },
  { to: "/2", label: "02", name: "Editorial" },
  { to: "/3", label: "03", name: "Arcade" },
  { to: "/4", label: "04", name: "Lab" },
  { to: "/5", label: "05", name: "Study" },
];

function DesignNav() {
  const { pathname } = useLocation();

  return (
    <nav className="reader-switcher" aria-label="Design pages">
      <Link className="reader-switcher__brand" to="/1">
        Ratio Reader
      </Link>
      <div className="reader-switcher__links">
        {designs.map((item) => (
          <Link
            key={item.to}
            aria-current={pathname === item.to ? "page" : undefined}
            className={pathname === item.to ? "is-active" : undefined}
            to={item.to}
            title={item.name}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

function IconCard({ icon: Icon, title, text }: Feature) {
  return (
    <article className="icon-card">
      <Icon aria-hidden="true" />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function PrimaryLink({
  href = "#demo",
  label,
  variant = "dark",
}: {
  href?: string;
  label: string;
  variant?: "dark" | "light" | "acid";
}) {
  return (
    <a className={`primary-link primary-link--${variant}`} href={href}>
      {label}
      <ArrowRight aria-hidden="true" />
    </a>
  );
}

function ObservatoryPage() {
  const signals = [
    { icon: FileText, label: "72 pages", text: "compressed into one navigable map" },
    { icon: Quote, label: "18 quotes", text: "kept with source context" },
    { icon: Lightbulb, label: "11 hints", text: "to unblock hard sections" },
    { icon: Target, label: "5 insights", text: "ranked by importance" },
  ];

  const orbitFeatures: Feature[] = [
    {
      icon: Telescope,
      title: "Find the thesis",
      text: "The main claim is surfaced first, with the paragraphs that prove it.",
    },
    {
      icon: Layers,
      title: "See the structure",
      text: "Sections collapse into a reading path, so long PDFs stop feeling flat.",
    },
    {
      icon: Brain,
      title: "Keep momentum",
      text: "Hints explain missing context before confusion becomes rereading.",
    },
  ];

  return (
    <main className="design-page observatory-page">
      <section className="observatory-hero">
        <div className="observatory-copy">
          <p className="observatory-eyebrow">PDF intelligence for focused readers</p>
          <h1>Turn dense documents into a reading constellation.</h1>
          <p>
            Ratio Reader scans your PDF, pulls out the ideas that carry the argument,
            and surrounds them with summaries, quotes, hints, and insight trails.
          </p>
          <div className="hero-actions">
            <PrimaryLink href="#observatory-output" label="Upload a PDF" variant="light" />
            <a className="secondary-link secondary-link--obs" href="#observatory-output">
              View output map
            </a>
          </div>
        </div>

        <div className="observatory-visual" aria-label="Ratio Reader output preview">
          <div className="star-field" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="document-core">
            <span>Uploaded PDF</span>
            <strong>Climate Policy Report</strong>
            <small>scanning argument density</small>
          </div>
          {signals.map((signal, index) => {
            const Icon = signal.icon;

            return (
              <article className={`signal-card signal-card-${index + 1}`} key={signal.label}>
                <Icon aria-hidden="true" />
                <strong>{signal.label}</strong>
                <span>{signal.text}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="observatory-panel" id="observatory-output">
        <div>
          <p className="section-kicker">What comes back</p>
          <h2>A prioritized briefing, not a pile of notes.</h2>
        </div>
        <div className="observatory-feature-grid">
          {orbitFeatures.map((feature) => (
            <IconCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>
    </main>
  );
}

function EditorialPage() {
  const notes = [
    "Summary opens with the author's actual point, not a generic abstract.",
    "Quotes stay connected to the page and the idea they support.",
    "Hints define jargon exactly when the reader needs it.",
  ];

  const columns = [
    {
      title: "Issue Brief",
      body: "A sharp executive summary that tells you what the PDF argues, what evidence matters, and what can be skipped.",
    },
    {
      title: "Margin Hints",
      body: "Plain-language nudges beside difficult concepts, acronyms, methods, and assumptions.",
    },
    {
      title: "Quote Shelf",
      body: "Important passages preserved as citation-ready cards with enough surrounding context to stay honest.",
    },
  ];

  return (
    <main className="design-page editorial-page">
      <section className="editorial-layout">
        <article className="front-page-paper">
          <header className="paper-masthead">
            <span>Ratio Reader</span>
            <small>Daily comprehension edition</small>
          </header>
          <div className="paper-rule" />
          <p className="section-kicker">For papers, reports, and serious PDFs</p>
          <h1>Read like an editor already marked the important parts.</h1>
          <p className="paper-lede">
            Upload a PDF and receive the version your future self wishes existed:
            compressed, annotated, quoted, and ordered by importance.
          </p>
          <div className="paper-actions">
            <PrimaryLink href="#edition-output" label="Start a cleaner read" variant="dark" />
            <span>Average first-pass time saved: 43 minutes</span>
          </div>
        </article>

        <aside className="margin-stack" aria-label="Example reader notes">
          {notes.map((note, index) => (
            <article className="margin-note" key={note} style={{ "--rotate": `${index * 4 - 5}deg` } as CSSVars}>
              <Highlighter aria-hidden="true" />
              <p>{note}</p>
            </article>
          ))}
        </aside>
      </section>

      <section className="edition-grid" id="edition-output">
        {columns.map((column, index) => (
          <article key={column.title}>
            <span>0{index + 1}</span>
            <h2>{column.title}</h2>
            <p>{column.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

function ArcadePage() {
  const missions = [
    { icon: Upload, title: "Insert PDF", text: "Drop your document into the reader bay." },
    { icon: Gauge, title: "Boost signal", text: "Summaries rank claims by usefulness." },
    { icon: MessageCircle, title: "Ask why", text: "Hints answer the questions that slow you down." },
  ];

  const meters = [
    { label: "Main claim lock", value: "96%" },
    { label: "Evidence trace", value: "88%" },
    { label: "Confusion cleared", value: "74%" },
  ];

  return (
    <main className="design-page arcade-page">
      <section className="arcade-hero">
        <div className="arcade-copy">
          <p className="arcade-token">Level up your reading loop</p>
          <h1>Beat the boss fight hidden inside every long PDF.</h1>
          <p>
            Ratio Reader turns upload, skim, reread, and confusion into a fast mission
            system: summary first, evidence next, hints on demand, quotes ready to use.
          </p>
          <div className="hero-actions">
            <PrimaryLink label="Launch reader" variant="acid" />
            <a className="secondary-link secondary-link--arcade" href="#mission-board">
              See mission board
            </a>
          </div>
        </div>

        <div className="cockpit-card" id="demo">
          <div className="cockpit-topline">
            <span>READING OPS</span>
            <strong>COMPREHENSION 92%</strong>
          </div>
          <div className="cockpit-screen">
            <div className="screen-grid" />
            <div className="pdf-cartridge">
              <FileText aria-hidden="true" />
              <span>annual-report.pdf</span>
            </div>
            <div className="laser laser-a" />
            <div className="laser laser-b" />
            <div className="output-chip chip-a">Summary</div>
            <div className="output-chip chip-b">Quotes</div>
            <div className="output-chip chip-c">Hints</div>
          </div>
          <div className="meter-stack">
            {meters.map((meter, index) => (
              <div className="meter-row" key={meter.label}>
                <span>{meter.label}</span>
                <strong>{meter.value}</strong>
                <i style={{ "--fill": `${72 + index * 10}%` } as CSSVars} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mission-board" id="mission-board">
        {missions.map((mission) => (
          <article key={mission.title}>
            <mission.icon aria-hidden="true" />
            <h2>{mission.title}</h2>
            <p>{mission.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

function LabPage() {
  const rows = [
    ["Thesis", "The policy succeeds only when incentives and enforcement mature together."],
    ["Best evidence", "Longitudinal comparison across six regions, pages 18-32."],
    ["Reader risk", "Methods section assumes baseline literacy in causal inference."],
    ["Next action", "Read conclusion, then inspect tables 4 and 7."],
  ];

  const labFeatures: Feature[] = [
    {
      icon: ScanText,
      title: "Argument extraction",
      text: "Detects claims, supporting evidence, caveats, and open questions.",
    },
    {
      icon: ShieldCheck,
      title: "Context-preserving quotes",
      text: "Key passages are kept close to the summary point they validate.",
    },
    {
      icon: ListChecks,
      title: "Reading protocol",
      text: "The PDF becomes a short sequence of what to read and why.",
    },
  ];

  return (
    <main className="design-page lab-page">
      <section className="lab-hero">
        <div className="lab-copy">
          <p className="lab-label">Ratio Reader research console</p>
          <h1>Convert long PDFs into decision-grade briefings.</h1>
          <p>
            Built for readers who need accuracy, not vibes. Ratio Reader separates
            claims from evidence, calls out confusing sections, and gives each insight
            a reason to exist.
          </p>
          <div className="lab-actions">
            <PrimaryLink label="Analyze a document" variant="dark" />
            <span>
              <Clock3 aria-hidden="true" />
              First briefing in minutes
            </span>
          </div>
        </div>

        <div className="analysis-board" id="demo">
          <div className="board-header">
            <PanelTop aria-hidden="true" />
            <span>analysis packet / ratio-reader-output</span>
          </div>
          <div className="board-body">
            {rows.map(([label, value]) => (
              <article key={label}>
                <span>{label}</span>
                <p>{value}</p>
              </article>
            ))}
          </div>
          <div className="confidence-strip">
            <span>summary confidence</span>
            <strong>high</strong>
            <i />
          </div>
        </div>
      </section>

      <section className="lab-feature-grid">
        {labFeatures.map((feature) => (
          <IconCard key={feature.title} {...feature} />
        ))}
      </section>
    </main>
  );
}

function StudyPage() {
  const cards = [
    {
      icon: BookOpen,
      title: "The summary is a doorway",
      text: "Start with the argument in plain language, then decide where depth is worth it.",
    },
    {
      icon: Quote,
      title: "Quotes become bookmarks",
      text: "Important passages are captured so you can cite, revisit, or share them.",
    },
    {
      icon: Eye,
      title: "Hints remove friction",
      text: "Ratio Reader explains the parts that usually send you to another tab.",
    },
  ];

  return (
    <main className="design-page study-page">
      <section className="study-hero">
        <div className="study-copy">
          <p className="study-script">A calmer way through hard reading</p>
          <h1>Make every PDF feel like a guided evening at the desk.</h1>
          <p>
            Ratio Reader gives your document a companion layer: summary, marginal
            hints, quote cards, and insight notes that keep the important ideas warm
            and close.
          </p>
          <div className="hero-actions">
            <PrimaryLink href="#study-notes" label="Prepare my reading" variant="dark" />
            <a className="secondary-link secondary-link--study" href="#study-notes">
              Browse note cards
            </a>
          </div>
        </div>

        <div className="desk-scene" id="demo" aria-label="Study desk preview">
          <div className="desk-book">
            <span>Ratio Reader</span>
            <strong>PDF Companion</strong>
            <small>summary / hints / quotes / insight path</small>
          </div>
          <div className="coffee-ring" />
          <article className="sticky sticky-one">
            <Lightbulb aria-hidden="true" />
            <span>Hint</span>
            <p>This section defines the author's real assumption.</p>
          </article>
          <article className="sticky sticky-two">
            <Quote aria-hidden="true" />
            <span>Quote</span>
            <p>"The decisive shift happens before adoption, not after."</p>
          </article>
        </div>
      </section>

      <section className="study-cards" id="study-notes">
        {cards.map((card) => (
          <article key={card.title}>
            <card.icon aria-hidden="true" />
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

function HomeIndex() {
  return (
    <main className="design-page index-page">
      <section>
        <p className="section-kicker">Five landing page directions</p>
        <h1>Choose a Ratio Reader concept.</h1>
        <div className="index-grid">
          {designs.map((item) => (
            <Link key={item.to} to={item.to}>
              <span>{item.label}</span>
              <strong>{item.name}</strong>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <DesignNav />
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/1" element={<ObservatoryPage />} />
        <Route path="/2" element={<EditorialPage />} />
        <Route path="/3" element={<ArcadePage />} />
        <Route path="/4" element={<LabPage />} />
        <Route path="/5" element={<StudyPage />} />
        <Route path="*" element={<Navigate to="/1" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
