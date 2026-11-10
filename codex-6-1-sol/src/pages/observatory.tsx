import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Check,
  FileText,
  Focus,
  Layers3,
  Lightbulb,
  Quote,
  Sparkles,
  Telescope,
} from "lucide-react";
import {
  DemoButton,
  Footer,
  Header,
  InsightPreview,
  Questions,
  RatioMark,
} from "../components/shared";
import "./observatory.css";

function KnowledgeOrbit() {
  return (
    <div className="knowledge-orbit" aria-hidden="true">
      <div className="space-ring space-ring-one" />
      <div className="space-ring space-ring-two" />
      <div className="space-ring space-ring-three" />
      <i className="space-point point-one" />
      <i className="space-point point-two" />
      <i className="space-point point-three" />
      <i className="space-point point-four" />
      <span className="space-star star-one">✦</span>
      <span className="space-star star-two">✧</span>
      <span className="space-star star-three">+</span>
      <div className="orbital-note left-orbital-note">
        <span>
          <FileText size={12} />A world of information
        </span>
        <p>
          So much to read.
          <br />
          Something to discover.
        </p>
        <div>
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="orbital-note right-orbital-note">
        <span>
          <Lightbulb size={12} />A moment of clarity
        </span>
        <p>
          There’s the connection
          <br />
          you were looking for.
        </p>
        <span className="orbital-note-foot">
          <Check size={10} /> The idea, understood.
        </span>
      </div>
    </div>
  );
}

function ObservatoryHero() {
  return (
    <section className="observatory-hero">
      <KnowledgeOrbit />
      <div className="observatory-hero-content">
        <span className="observatory-status">
          <span />A new perspective on reading
        </span>
        <h1>
          Find the thread.
          <br />
          Follow the meaning.
        </h1>
        <p>
          There’s a universe of knowledge in your PDFs.
          <br />
          Ratio brings the important ideas into focus.
        </p>
        <div className="observatory-hero-actions">
          <DemoButton>Discover Ratio Reader</DemoButton>
          <DemoButton sample className="observatory-secondary" arrow={false}>
            Explore the experience <ArrowRight size={14} />
          </DemoButton>
        </div>
        <span className="observatory-note">
          For the curious. For the complex. For the connections.
        </span>
      </div>
      <div className="observatory-product content-width">
        <div className="observatory-product-bar">
          <div className="window-controls">
            <i />
            <i />
            <i />
          </div>
          <span>
            <BookOpen size={12} /> Your space to understand
          </span>
          <span className="product-private">
            <span />
            Sample reading space
          </span>
        </div>
        <div className="observatory-product-inner">
          <aside className="observatory-sidebar">
            <RatioMark />
            <span className="sidebar-section-label">Your library</span>
            <span className="sidebar-active">
              <FileText size={13} />
              The art of attention
            </span>
            <span>
              <FileText size={13} />
              On creative thinking
            </span>
            <span>
              <FileText size={13} />A connected world
            </span>
            <div className="sidebar-bottom">
              <Sparkles size={14} />
              <p>
                One good idea can
                <br />
                change your perspective.
              </p>
            </div>
          </aside>
          <InsightPreview className="observatory-preview" showDocument />
        </div>
      </div>
      <a className="observatory-scroll" href="#how-it-works">
        Follow your curiosity <ArrowDown size={13} />
      </a>
    </section>
  );
}

function ObservatoryProcess() {
  return (
    <section className="observatory-process content-width" id="how-it-works">
      <div className="observatory-intro">
        <span className="section-kicker">A clearer signal</span>
        <h2>
          From information
          <br />
          to understanding.
        </h2>
        <p>
          A thoughtful companion for the moments
          <br />
          when you want to go beyond the surface.
        </p>
      </div>
      <div className="observatory-process-grid">
        {[
          {
            number: "01",
            icon: Layers3,
            title: "Start with a document.",
            text: "A paper, a report, a new way of thinking. Give your curiosity a starting point.",
          },
          {
            number: "02",
            icon: Focus,
            title: "Bring the ideas into focus.",
            text: "See the main argument, the supporting details, and the passages worth your attention.",
          },
          {
            number: "03",
            icon: Telescope,
            title: "See how it all connects.",
            text: "Use thoughtful hints to connect the dots and build an understanding that lasts.",
          },
        ].map(({ number, icon: Icon, title, text }) => (
          <article key={number}>
            <div className="observatory-process-art">
              <Icon size={42} strokeWidth={0.9} />
              <span>{number}</span>
              <i />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ObservatoryFeatures() {
  return (
    <section className="observatory-features" id="features">
      <div className="content-width">
        <div className="observatory-feature-heading">
          <h2>
            Depth, without
            <br />
            the overwhelm.
          </h2>
          <p>
            Keep the nuance. Lose the noise.
            <br />
            Make every reading session a discovery.
          </p>
        </div>
        <div className="observatory-feature-grid">
          <article className="cosmic-summary">
            <span className="cosmic-feature-icon">
              <FileText size={18} />
            </span>
            <h3>
              The whole picture.
              <br />
              Beautifully distilled.
            </h3>
            <p>
              Clear summaries that preserve the author's meaning and give you a
              place to begin.
            </p>
            <div className="cosmic-summary-visual">
              <div>
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <span>
                <ArrowRight size={23} />
              </span>
              <div>
                <i />
                <i />
                <i />
              </div>
            </div>
            <span className="cosmic-footnote">
              From a hundred details to a handful of ideas.
            </span>
          </article>
          <article className="cosmic-quote">
            <span className="cosmic-feature-icon">
              <Quote size={18} />
            </span>
            <h3>
              Stay close
              <br />
              to the source.
            </h3>
            <p>
              Meaningful quotes, with page references. Go back to the original
              whenever an idea calls to you.
            </p>
            <div className="cosmic-quote-visual">
              <Quote size={18} />
              <span>
                “Attention is the beginning
                <br />
                of understanding.”
              </span>
              <small>THE ART OF PAYING ATTENTION · P. 3</small>
            </div>
          </article>
          <article className="cosmic-hint">
            <span className="cosmic-feature-icon">
              <Lightbulb size={18} />
            </span>
            <h3>
              A spark for
              <br />
              your next thought.
            </h3>
            <p>
              Helpful prompts reveal relationships and make even the difficult
              ideas feel approachable.
            </p>
            <div className="cosmic-hint-visual">
              <span className="hint-orb">
                <Sparkles size={27} strokeWidth={1} />
              </span>
              <i />
              <i />
              <i />
              <span className="hint-orbit-point" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export function Observatory() {
  return (
    <div className="page observatory-page">
      <Header action="Begin exploring" />
      <main>
        <ObservatoryHero />
        <ObservatoryProcess />
        <ObservatoryFeatures />
        <section className="observatory-perspective content-width">
          <span>✧</span>
          <p>
            Knowledge is what you take in.
            <br />
            Understanding is what you take away.
          </p>
          <div>Make a little more space for the latter.</div>
        </section>
        <section className="observatory-final content-width">
          <div className="final-space-ring" />
          <span className="section-kicker">
            Your next discovery is waiting.
          </span>
          <h2>
            A little less lost.
            <br />A lot more enlightened.
          </h2>
          <DemoButton>Find your perspective</DemoButton>
          <span className="observatory-final-note">
            Try the interactive sample. No account needed.
          </span>
        </section>
        <Questions title="A little light on the details." />
      </main>
      <Footer note="A clearer view of what matters." />
    </div>
  );
}
