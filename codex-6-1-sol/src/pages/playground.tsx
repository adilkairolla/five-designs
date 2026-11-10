import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Check,
  FileText,
  Lightbulb,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";
import {
  DemoButton,
  Footer,
  Header,
  InsightPreview,
  Questions,
} from "../components/shared";
import { useReaderDemo } from "../components/use-reader-demo";
import "./playground.css";

function Smile({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`smile-doodle ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="currentColor"
        stroke="#333128"
        strokeWidth="2"
      />
      <path
        d="M32 53c3 23 33 24 38-1"
        stroke="#333128"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <ellipse cx="34" cy="36" rx="3" ry="6" fill="#333128" />
      <ellipse cx="64" cy="36" rx="3" ry="6" fill="#333128" />
    </svg>
  );
}

function StudyDesk() {
  const { openDemo } = useReaderDemo();
  return (
    <div className="study-desk">
      <div className="desk-caption">
        From “I'll read it later” to “I get it.”
        <svg viewBox="0 0 70 60" fill="none" aria-hidden="true">
          <path
            d="M4 4c54 3 41 35 27 44m-4-14 3 15 15-3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="desk-original">
        <span className="desk-tape" />
        <div className="desk-pdf">
          <FileText size={14} /> that-really-long-report.pdf
        </div>
        <h3>
          So many pages.
          <br />
          So little time.
        </h3>
        <div className="desk-lines">
          {Array.from({ length: 11 }, (_, i) => (
            <i key={i} />
          ))}
        </div>
        <div className="pdf-page-count">
          42 pages of possibility <span>42</span>
        </div>
      </div>
      <div className="desk-arrow">
        <svg viewBox="0 0 140 70" fill="none" aria-hidden="true">
          <path
            d="M5 50C35 4 85 7 124 35m-22-2 24 4-5-23"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span>a little Ratio magic</span>
      </div>
      <button
        className="desk-notebook"
        onClick={() => openDemo("sample")}
        aria-label="Open the sample reading notebook"
      >
        <span className="notebook-holes">
          <i />
          <i />
          <i />
          <i />
          <i />
        </span>
        <span className="notebook-label">
          <Sparkles size={14} />
          The good stuff
        </span>
        <h3>
          Big ideas.
          <br />
          Bite-size pieces.
        </h3>
        <span className="notebook-note">
          <Check size={15} />
          The takeaways that matter
        </span>
        <span className="notebook-note">
          <Check size={15} />
          Quotes you'll want to keep
        </span>
        <span className="notebook-note">
          <Check size={15} />
          Hints to connect the dots
        </span>
        <span className="notebook-footer">
          Go on, take a peek <ArrowUpRight size={17} />
        </span>
      </button>
      <div className="desk-quote">
        <Quote size={18} />
        <span>
          Wait.
          <br />
          That makes
          <br />
          so much sense.
        </span>
        <i>— your brain, probably</i>
      </div>
      <Smile className="desk-smile" />
      <span className="desk-star">✳</span>
    </div>
  );
}

function PlaygroundHero() {
  return (
    <section className="playground-hero">
      <div className="content-width">
        <div className="playground-tiny-note">
          <span className="little-star">✳</span>For curious brains and very full
          reading lists.
        </div>
        <h1>
          Less head-scratching.
          <br />
          More lightbulb moments.
        </h1>
        <p>
          Meet your PDF's new best friend. Ratio finds the big ideas,
          <br className="desktop-break" /> the good quotes, and the bits that
          make everything click.
        </p>
        <DemoButton className="playground-primary">
          Give your brain a hand
        </DemoButton>
        <span className="playground-free-note">
          No account. Just a little curiosity.
        </span>
        <StudyDesk />
      </div>
    </section>
  );
}

function PlaygroundSteps() {
  return (
    <section className="playground-steps content-width" id="how-it-works">
      <div className="playground-section-heading">
        <h2>
          Big reading list?
          <br />
          Tiny learning curve.
        </h2>
        <span>
          Three little steps.
          <br />
          One very happy brain. <ArrowDown size={24} />
        </span>
      </div>
      <div className="playground-step-grid">
        {[
          {
            number: "1",
            title: "Drop it like a PDF.",
            text: "Bring your papers, reports, essays, and “I really should read this” pile.",
            className: "yellow-step",
            icon: FileText,
          },
          {
            number: "2",
            title: "Skip to the “aha”.",
            text: "Find clear summaries, useful quotes, and helpful hints in one happy place.",
            className: "lilac-step",
            icon: Lightbulb,
          },
          {
            number: "3",
            title: "Let it sink in.",
            text: "Connect the ideas. Follow your curiosity. Actually remember what you read.",
            className: "orange-step",
            icon: BookOpen,
          },
        ].map(({ number, title, text, className, icon: Icon }) => (
          <article className={className} key={number}>
            <div className="play-step-top">
              <span>{number}</span>
              <Icon size={35} strokeWidth={1.3} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PlaygroundFeatures() {
  return (
    <section className="playground-features" id="features">
      <div className="content-width">
        <div className="playground-feature-copy">
          <span className="handwritten-label">
            A helpful little overachiever.
          </span>
          <h2>
            Your brain called.
            <br />
            It wants the highlights.
          </h2>
          <p>
            Not just the short version. The “I finally understand this” version.
          </p>
        </div>
        <div className="playground-feature-body">
          <div className="playground-feature-list">
            <div>
              <span>
                <FileText size={22} />
              </span>
              <h3>All the signal. Less noise.</h3>
              <p>
                Clear summaries that help you see the point, without losing the
                plot.
              </p>
            </div>
            <div>
              <span>
                <Quote size={22} />
              </span>
              <h3>Keep the good words.</h3>
              <p>
                The original quotes, with page references. Because context is
                everything.
              </p>
            </div>
            <div>
              <span>
                <Lightbulb size={22} />
              </span>
              <h3>A nudge, not a lecture.</h3>
              <p>
                Friendly hints and questions for the moments when you need a
                different angle.
              </p>
            </div>
          </div>
          <div className="playground-preview-shell">
            <div className="playground-window-bar">
              <span />
              <span />
              <span />
              <i>Your little corner of clarity</i>
            </div>
            <InsightPreview className="playground-preview" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Playground() {
  return (
    <div className="page playground-page">
      <div className="playground-top">
        <Header action="Let's read" />
      </div>
      <main>
        <div className="playground-top">
          <PlaygroundHero />
        </div>
        <div className="playground-ticker">
          <span>Less overwhelm</span>
          <Star size={16} />
          <span>More “oh, I get it”</span>
          <Star size={16} />
          <span>Keep your curiosity</span>
          <Star size={16} />
          <span>Find your next big idea</span>
          <Star size={16} />
        </div>
        <PlaygroundSteps />
        <PlaygroundFeatures />
        <section className="playground-manifesto content-width">
          <span className="manifesto-spark">✷</span>
          <p>
            For the paper you have to read.
            <br />
            The topic you want to get.
            <br />
            The person who never stops asking why.
          </p>
          <span>Yep. This one's for you.</span>
          <Smile />
        </section>
        <section className="playground-final">
          <div className="content-width">
            <div>
              <h2>
                A little less “too long.”
                <br />A lot more “tell me more.”
              </h2>
              <DemoButton>Find your next lightbulb moment</DemoButton>
            </div>
            <div className="final-lightbulb" aria-hidden="true">
              <Lightbulb strokeWidth={1} />
              <span>
                good ideas
                <br />
                start here.
              </span>
            </div>
          </div>
        </section>
        <Questions title="Curious? Good. We like that." />
      </main>
      <Footer note="A little tool for big, curious brains." />
    </div>
  );
}
