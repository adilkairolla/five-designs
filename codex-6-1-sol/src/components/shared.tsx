import { useId, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  FileText,
  Lightbulb,
  Menu,
  Plus,
  Quote,
  Sparkles,
  X,
} from "lucide-react";
import type { KeyboardEvent, ReactNode } from "react";
import { useReaderDemo } from "./use-reader-demo";

export function RatioMark({ className = "" }: { className?: string }) {
  return (
    <span className={`ratio-mark ${className}`} aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}

export function Brand() {
  return (
    <a className="brand" href="#" aria-label="Ratio Reader home">
      <RatioMark />
      <span>
        ratio<span className="brand-reader"> reader</span>
        <span className="brand-dot">.</span>
      </span>
    </a>
  );
}

export function Header({
  action = "Start reading",
  minimal = false,
}: {
  action?: string;
  minimal?: boolean;
}) {
  const { openDemo } = useReaderDemo();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <Brand />
      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="#how-it-works">How it works</a>
        <a href="#features">{minimal ? "The experience" : "Features"}</a>
        <a href="#questions">Questions</a>
      </nav>
      <div className="header-actions">
        <button className="header-cta" onClick={() => openDemo("upload")}>
          {action}
          <ArrowUpRight size={16} />
        </button>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {[
            { href: "#how-it-works", label: "How it works" },
            { href: "#features", label: "Features" },
            { href: "#questions", label: "Questions" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
              <ArrowUpRight size={18} />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export function DemoButton({
  children = "Try Ratio Reader",
  className = "",
  sample = false,
  arrow = true,
}: {
  children?: ReactNode;
  className?: string;
  sample?: boolean;
  arrow?: boolean;
}) {
  const { openDemo } = useReaderDemo();
  return (
    <button
      className={`button ${className}`}
      onClick={() => openDemo(sample ? "sample" : "upload")}
    >
      {children}
      {arrow && <ArrowUpRight size={18} />}
    </button>
  );
}

const tabs = [
  { name: "Summary", icon: FileText },
  { name: "Key quotes", icon: Quote },
  { name: "Reading hints", icon: Lightbulb },
] as const;
type PreviewTab = (typeof tabs)[number]["name"];

function navigatePreviewTabs(event: KeyboardEvent<HTMLButtonElement>) {
  const buttons =
    event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>(
      '[role="tab"]',
    );
  if (!buttons) return;
  const current = Array.from(buttons).indexOf(event.currentTarget);
  const positions: Record<string, number> = {
    ArrowRight: (current + 1) % buttons.length,
    ArrowLeft: (current - 1 + buttons.length) % buttons.length,
    Home: 0,
    End: buttons.length - 1,
  };
  const next = positions[event.key];
  if (next === undefined) return;
  event.preventDefault();
  buttons[next]?.focus();
  buttons[next]?.click();
}

export function InsightPreview({
  className = "",
  showDocument = false,
}: {
  className?: string;
  showDocument?: boolean;
}) {
  const [active, setActive] = useState<PreviewTab>("Summary");
  const previewId = useId();
  return (
    <div className={`insight-preview ${className}`}>
      <div className="preview-toolbar">
        <span>
          <RatioMark />
          Your reading, distilled.
        </span>
        <span className="preview-ready">
          <i /> Ready to explore
        </span>
      </div>
      <div className="preview-body">
        {showDocument && (
          <div className="preview-document">
            <div className="document-tag">
              <FileText size={13} /> ORIGINAL PDF
            </div>
            <h3>
              The art of
              <br />
              paying attention
            </h3>
            <p>On finding focus in a distracted world</p>
            <hr />
            <p>
              We live in an age of abundant information. Every day brings a new
              stream of ideas, demands, and things worth knowing.
            </p>
            <p>
              <mark>Attention is the beginning of understanding.</mark> When we
              choose to focus, we give an idea the space it needs to become
              something we can use.
            </p>
            <p>
              Reading is more than moving our eyes across a page. It is an
              active conversation between what we know and what we are about to
              discover.
            </p>
            <span className="document-page">03</span>
          </div>
        )}
        <div className="preview-insights">
          <div
            className="preview-tabs"
            role="tablist"
            aria-label="Sample insights"
          >
            {tabs.map(({ name, icon: Icon }) => (
              <button
                key={name}
                role="tab"
                id={`tab-${previewId}-${name.replaceAll(" ", "-")}`}
                aria-controls={`panel-${previewId}`}
                aria-selected={active === name}
                tabIndex={active === name ? 0 : -1}
                onKeyDown={navigatePreviewTabs}
                onClick={() => setActive(name)}
              >
                <Icon size={14} />
                {name}
              </button>
            ))}
          </div>
          <div
            className="preview-content"
            role="tabpanel"
            id={`panel-${previewId}`}
            aria-labelledby={`tab-${previewId}-${active.replaceAll(" ", "-")}`}
            tabIndex={0}
          >
            {active === "Summary" && (
              <>
                <div className="insight-eyebrow">
                  <Sparkles size={14} /> The big picture
                </div>
                <h3>
                  A little focus.
                  <br />A deeper understanding.
                </h3>
                <p>
                  Better reading starts with paying attention to what matters.
                  Here are the ideas to take with you.
                </p>
                <ul className="insight-list">
                  <li>
                    <span>01</span>
                    <div>
                      <strong>Attention is a skill, not a resource.</strong>
                      <p>
                        Build focus through small, deliberate reading habits.
                      </p>
                    </div>
                  </li>
                  <li>
                    <span>02</span>
                    <div>
                      <strong>Make space for the important ideas.</strong>
                      <p>A clear summary helps you see the whole argument.</p>
                    </div>
                  </li>
                  <li>
                    <span>03</span>
                    <div>
                      <strong>Connect what you read to what you know.</strong>
                      <p>Reflection turns information into understanding.</p>
                    </div>
                  </li>
                </ul>
              </>
            )}
            {active === "Key quotes" && (
              <>
                <div className="insight-eyebrow">
                  <Quote size={14} /> Words worth keeping
                </div>
                <h3>
                  The lines that
                  <br />
                  stay with you.
                </h3>
                <blockquote>
                  “Attention is the beginning of understanding.”
                  <cite>Page 3 · The art of paying attention</cite>
                </blockquote>
                <blockquote>
                  “An idea becomes useful when we give ourselves time to make it
                  our own.”<cite>Page 7 · The art of paying attention</cite>
                </blockquote>
              </>
            )}
            {active === "Reading hints" && (
              <>
                <div className="insight-eyebrow">
                  <Lightbulb size={14} /> A nudge in the right direction
                </div>
                <h3>
                  Go one
                  <br />
                  thought deeper.
                </h3>
                <div className="hint-item">
                  <strong>Before you read</strong>
                  <p>
                    What usually distracts you? Keep one example in mind as you
                    explore the author's argument.
                  </p>
                </div>
                <div className="hint-item">
                  <strong>Something to think about</strong>
                  <p>
                    How does slowing down help you understand more? Connect the
                    ideas on pages 3 and 7.
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="preview-bottom">
            <BookOpen size={13} />
            <span>12 pages, a clearer perspective.</span>
            <Check size={13} />
          </div>
        </div>
      </div>
    </div>
  );
}

const questions = [
  [
    "What is Ratio Reader?",
    "Ratio Reader is a reading companion for your PDFs. It brings together clear summaries, important quotes, and helpful reading hints so you can understand a document and find your way back to the original ideas.",
  ],
  [
    "Does it replace reading the original?",
    "Think of it as a guide to your reading. Get the big picture first, find the passages that matter to you, and return to the original for the full context. Always check important details against the source.",
  ],
  [
    "What kinds of PDFs can I use?",
    "The experience is designed for text-based articles, research papers, reports, and essays. You can explore the interactive sample now. Scanned documents and live PDF analysis are planned for the full product.",
  ],
  [
    "Can I try it before signing up?",
    "Yes. Open the sample reading space to explore summaries, quotes, and hints without an account. This marketing preview runs in your browser; it does not upload or analyze your documents.",
  ],
];

export function Questions({
  title = "A few things you might be wondering.",
}: {
  title?: string;
}) {
  return (
    <section className="questions-section content-width" id="questions">
      <div>
        <span className="section-kicker">A little clarity</span>
        <h2>{title}</h2>
        <p>Good questions make better readers.</p>
      </div>
      <div className="question-list">
        {questions.map(([question, answer]) => (
          <details key={question}>
            <summary>
              {question}
              <Plus size={19} />
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Footer({
  note = "For the love of understanding.",
}: {
  note?: string;
}) {
  return (
    <footer className="site-footer content-width">
      <div>
        <Brand />
        <p>{note}</p>
      </div>
      <div className="footer-meta">
        <a href="#how-it-works">
          How it works <ArrowRight size={14} />
        </a>
        <a href="#questions">
          Questions <ArrowRight size={14} />
        </a>
        <span>© {new Date().getFullYear()} Ratio Reader</span>
      </div>
    </footer>
  );
}
