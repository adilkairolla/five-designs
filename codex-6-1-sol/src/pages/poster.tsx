import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  FileText,
  Lightbulb,
  Quote,
} from "lucide-react";
import {
  DemoButton,
  Footer,
  Header,
  InsightPreview,
  Questions,
  RatioMark,
} from "../components/shared";
import { useReaderDemo } from "../components/use-reader-demo";
import "./poster.css";

function PaperSculpture() {
  const { openDemo } = useReaderDemo();
  return (
    <button
      className="paper-sculpture"
      onClick={() => openDemo("sample")}
      aria-label="Explore the sample: 12 pages, 3 clear takeaways"
    >
      <span className="sculpture-star">✳</span>
      <span className="sculpture-sheet sheet-three" />
      <span className="sculpture-sheet sheet-two" />
      <span className="sculpture-sheet sheet-one">
        <span className="sculpture-top">
          <RatioMark />
          <span>A better reading ratio.</span>
        </span>
        <span className="sculpture-number">
          12<span>:</span>3
        </span>
        <span className="sculpture-number-label">
          <span>pages</span>
          <span>clear takeaways</span>
        </span>
        <span className="sculpture-divider" />
        <span className="sculpture-quote">
          Same big ideas.
          <br />A fresh perspective.
        </span>
        <span className="sculpture-bottom">
          <span>Open a little clarity.</span>
          <ArrowUpRight size={26} />
        </span>
      </span>
      <span className="sculpture-caption">
        Go on. Turn a new page. <ArrowUpRight size={15} />
      </span>
    </button>
  );
}

function PosterHero() {
  return (
    <section className="poster-hero content-width">
      <div className="poster-hero-copy">
        <div className="poster-hero-label">
          <span />
          Your reading, in better proportion.
        </div>
        <h1>
          Less, but
          <br />
          so much
          <br />
          more.
        </h1>
        <div className="poster-hero-bottom">
          <p>
            More than a PDF summary.
            <br />A shorter path to your next big idea.
          </p>
          <DemoButton>Meet Ratio Reader</DemoButton>
          <span>No account needed. Bring your curiosity.</span>
        </div>
      </div>
      <PaperSculpture />
      <a href="#how-it-works" className="poster-scroll">
        <ArrowDown size={17} />
        The good stuff is down here.
      </a>
    </section>
  );
}

function PosterProcess() {
  return (
    <section className="poster-process content-width" id="how-it-works">
      <div className="poster-section-title">
        <span>How it works</span>
        <h2>
          One document.
          <br />A whole new perspective.
        </h2>
        <ArrowDown size={35} strokeWidth={1.3} />
      </div>
      <div className="poster-process-grid">
        {[
          {
            step: "01",
            title: "Drop the document.",
            text: "That paper. That report. The essay you keep meaning to read. Start with a PDF.",
          },
          {
            step: "02",
            title: "Find the meaning.",
            text: "Meet the main ideas, the standout quotes, and the hints that make it all click.",
          },
          {
            step: "03",
            title: "Take it with you.",
            text: "Return to the source, connect the dots, and make a little room for your next idea.",
          },
        ].map(({ step, title, text }) => (
          <article key={step}>
            <span>{step}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PosterFeatures() {
  return (
    <section className="poster-features" id="features">
      <div className="content-width">
        <div className="poster-features-heading">
          <span>More understanding per page.</span>
          <h2>
            Less noise.
            <br />
            All the good stuff.
          </h2>
        </div>
        <div className="poster-feature-body">
          <div className="poster-feature-list">
            <article>
              <FileText size={22} strokeWidth={1.3} />
              <div>
                <h3>The big idea. Minus the big read.</h3>
                <p>
                  Clear summaries that get to the point and give you a starting
                  place for going deeper.
                </p>
              </div>
            </article>
            <article>
              <Quote size={22} strokeWidth={1.3} />
              <div>
                <h3>Good words. Original context.</h3>
                <p>
                  Keep the most meaningful lines, with page references that
                  bring you back to the author's voice.
                </p>
              </div>
            </article>
            <article>
              <Lightbulb size={22} strokeWidth={1.3} />
              <div>
                <h3>One small hint. One big “aha”.</h3>
                <p>
                  Questions and connections that help difficult ideas land. Your
                  curiosity does the rest.
                </p>
              </div>
            </article>
            <DemoButton sample className="poster-sample-button">
              See it in action
            </DemoButton>
          </div>
          <div className="poster-preview">
            <div className="poster-preview-heading">
              <span>THE READING ROOM</span>
              <span>↗</span>
            </div>
            <InsightPreview className="poster-insight-preview" />
          </div>
        </div>
      </div>
    </section>
  );
}

function PosterStatement() {
  return (
    <section className="poster-statement content-width">
      <div className="poster-ratio-art" aria-hidden="true">
        <div className="ratio-art-many">
          {Array.from({ length: 12 }, (_, index) => (
            <i key={index} />
          ))}
        </div>
        <ArrowRight size={43} strokeWidth={1.2} />
        <div className="ratio-art-few">
          <i />
          <i />
          <i />
        </div>
      </div>
      <div>
        <span>A better ratio.</span>
        <h2>
          More of what matters.
          <br />
          Less of what doesn't.
        </h2>
        <p>
          Reading isn’t a race to the last page. It’s a way to see things
          differently. We’re here for that part.
        </p>
      </div>
    </section>
  );
}

export function Poster() {
  return (
    <div className="page poster-page">
      <div className="poster-top">
        <Header action="Give it a read" />
      </div>
      <main>
        <div className="poster-top">
          <PosterHero />
        </div>
        <div className="poster-ribbon">
          <span>BIG IDEAS</span>
          <span>↗</span>
          <span>SMALLER READS</span>
          <span>↗</span>
          <span>BETTER UNDERSTANDING</span>
          <span>↗</span>
        </div>
        <PosterProcess />
        <PosterFeatures />
        <PosterStatement />
        <section className="poster-final">
          <div className="content-width">
            <div>
              <span className="poster-final-kicker">
                <BookOpen size={16} /> YOUR NEXT CHAPTER
              </span>
              <h2>
                Read a little.
                <br />
                Get a lot.
              </h2>
              <DemoButton>Find your better ratio</DemoButton>
              <span className="poster-final-note">
                <Check size={11} />
                Try the sample. No signup required.
              </span>
            </div>
            <div className="poster-final-emblem" aria-hidden="true">
              <span>
                GOOD IDEAS
                <br />
                INSIDE
              </span>
              <ArrowUpRight strokeWidth={1} />
            </div>
          </div>
        </section>
        <Questions title="A little more on the details." />
      </main>
      <Footer note="Good reading. In better proportion." />
    </div>
  );
}
