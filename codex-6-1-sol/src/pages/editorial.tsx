import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Check,
  FileText,
  Lightbulb,
  Quote,
  Sparkles,
  Upload,
} from "lucide-react";
import {
  DemoButton,
  Footer,
  Header,
  InsightPreview,
  Questions,
  RatioMark,
} from "../components/shared";
import "./editorial.css";

function PaperCollage() {
  return (
    <div
      className="editorial-collage"
      aria-label="A PDF becomes a collection of clear, useful insights"
    >
      <div className="collage-orbit orbit-one" />
      <div className="collage-orbit orbit-two" />
      <div className="collage-page back-page">
        <div className="paper-label">
          <FileText size={11} /> THE ORIGINAL
        </div>
        <h3>
          A world
          <br />
          of ideas.
        </h3>
        <p>
          There is something wonderful about a page full of possibility. Every
          paragraph, a new way of seeing.
        </p>
        <div className="paper-lines">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <p className="paper-highlight">
          The important thing is to never stop being curious.
        </p>
        <div className="paper-lines">
          <i />
          <i />
          <i />
        </div>
        <span className="paper-page-number">12</span>
      </div>
      <div className="collage-page front-page">
        <div className="paper-label">
          <RatioMark /> A LITTLE CLARITY
        </div>
        <h3>
          The good parts,
          <br />
          all together.
        </h3>
        <div className="collage-summary">
          <span className="mini-icon">
            <Sparkles size={15} />
          </span>
          <div>
            <strong>The big picture</strong>
            <p>
              Every essential idea.
              <br />
              None of the overwhelm.
            </p>
          </div>
        </div>
        <div className="collage-summary">
          <span className="mini-icon">
            <Quote size={15} />
          </span>
          <div>
            <strong>Words worth keeping</strong>
            <p>
              Meaningful quotes,
              <br />
              connected to their source.
            </p>
          </div>
        </div>
        <div className="collage-summary">
          <span className="mini-icon">
            <Lightbulb size={15} />
          </span>
          <div>
            <strong>That “aha” moment</strong>
            <p>
              A helpful hint to see
              <br />
              things a little differently.
            </p>
          </div>
        </div>
        <div className="paper-footer">
          <span>Less noise. More knowledge.</span>
          <Check size={13} />
        </div>
      </div>
      <div className="collage-sticky">
        <span>
          “Oh, now
          <br />I get it.”
        </span>
        <svg viewBox="0 0 80 24" fill="none" aria-hidden="true">
          <path
            d="M4 18C18 3 54 6 75 12M10 23C31 15 53 14 66 16"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <span className="collage-caption">
        A whole new perspective on your PDFs.
      </span>
      <div className="collage-spark">✧</div>
    </div>
  );
}

function EditorialHero() {
  return (
    <section className="editorial-hero content-width">
      <div className="editorial-hero-copy">
        <span className="editorial-pill">
          <span />A clearer way to read
        </span>
        <h1>
          Less reading.
          <br />
          More meaning.
        </h1>
        <p>
          Big ideas deserve to be understood. Turn your PDFs into clear
          summaries, thoughtful insights, and little lightbulb moments.
        </p>
        <div className="editorial-hero-buttons">
          <DemoButton>Find your clarity</DemoButton>
          <DemoButton className="editorial-text-button" sample arrow={false}>
            Explore a sample <ArrowRight size={16} />
          </DemoButton>
        </div>
        <span className="editorial-no-account">
          <Check size={13} />A little clarity. No account needed.
        </span>
      </div>
      <PaperCollage />
    </section>
  );
}

function ReadingSteps() {
  return (
    <section className="editorial-steps content-width" id="how-it-works">
      <div className="editorial-section-heading">
        <span className="section-kicker">From pages to perspective</span>
        <h2>
          Good reading.
          <br />
          Without the heavy lifting.
        </h2>
        <p>
          Less time getting through it.
          <br />
          More time getting something out of it.
        </p>
      </div>
      <div className="editorial-step-grid">
        {[
          {
            icon: Upload,
            title: "Bring your curiosity.",
            text: "A research paper, a lengthy report, that article you saved. Start with a PDF.",
            step: "01",
          },
          {
            icon: Sparkles,
            title: "Meet the important parts.",
            text: "Get a thoughtful summary, standout quotes, and a clear path through the ideas.",
            step: "02",
          },
          {
            icon: BookOpen,
            title: "Make it yours.",
            text: "Follow a hint. Revisit a passage. Connect the dots and leave knowing more.",
            step: "03",
          },
        ].map(({ icon: Icon, title, text, step }) => (
          <article key={step}>
            <div>
              <span className="step-icon">
                <Icon size={24} strokeWidth={1.4} />
              </span>
              <span className="step-number">{step}</span>
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ReadingFeatures() {
  return (
    <section className="editorial-features" id="features">
      <div className="content-width editorial-feature-grid">
        <div className="editorial-preview-wrap">
          <div className="preview-corner-label">
            A peek inside your new reading space <ArrowDown size={14} />
          </div>
          <InsightPreview className="editorial-preview" />
        </div>
        <div className="editorial-feature-copy">
          <span className="section-kicker">More than a shorter version</span>
          <h2>
            Understand the ideas.
            <br />
            Keep the feeling.
          </h2>
          <p>
            A good summary is only the beginning. Ratio helps you find what
            matters, understand why it matters, and remember it long after you
            close the page.
          </p>
          <div className="editorial-feature-line">
            <FileText size={17} />
            <span>
              <strong>The essence, beautifully clear.</strong>
              <br />
              The main argument and key takeaways, in plain language.
            </span>
          </div>
          <div className="editorial-feature-line">
            <Quote size={17} />
            <span>
              <strong>The original voice, still there.</strong>
              <br />
              Quotes with page references keep you close to the source.
            </span>
          </div>
          <div className="editorial-feature-line">
            <Lightbulb size={17} />
            <span>
              <strong>A thoughtful nudge.</strong>
              <br />
              Reading hints help difficult ideas click into place.
            </span>
          </div>
          <DemoButton sample className="editorial-text-button">
            Step inside the sample
          </DemoButton>
        </div>
      </div>
    </section>
  );
}

export function Editorial() {
  return (
    <div className="page editorial-page">
      <Header />
      <main>
        <EditorialHero />
        <div className="editorial-reader-band">
          <span>A reading companion for</span>
          <span>the endlessly curious.</span>
          <i />
          <span>the deep thinkers.</span>
          <i />
          <span>the lifelong learners.</span>
        </div>
        <ReadingSteps />
        <ReadingFeatures />
        <section className="editorial-belief content-width">
          <BookOpen size={29} strokeWidth={1.2} />
          <p>
            Because finishing a document is one thing.
            <br />
            Understanding it is everything.
          </p>
          <span>Made for the way your mind works.</span>
        </section>
        <section className="editorial-final content-width">
          <div>
            <span className="section-kicker">
              Your next “aha” is a page away.
            </span>
            <h2>
              Make room for
              <br />a little more meaning.
            </h2>
            <DemoButton>Try Ratio Reader</DemoButton>
          </div>
          <div className="final-book" aria-hidden="true">
            <div />
            <span>
              Less.
              <br />
              But better.
            </span>
            <RatioMark />
          </div>
        </section>
        <Questions />
      </main>
      <Footer />
    </div>
  );
}
