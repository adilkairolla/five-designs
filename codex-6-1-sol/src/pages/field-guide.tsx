import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  Check,
  FileText,
  Leaf,
  Lightbulb,
  Quote,
  Sparkles,
} from "lucide-react";
import {
  DemoButton,
  Footer,
  Header,
  InsightPreview,
  Questions,
} from "../components/shared";
import "./field-guide.css";

function BotanicalSprig({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`botanical-sprig ${className}`}
      viewBox="0 0 160 240"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M78 233c2-70 16-134 22-217M85 191c-29-5-48-23-55-47 30 1 49 16 55 47Zm8-41c-29-10-47-35-46-60 28 9 46 31 46 60Zm5-46C77 84 72 55 82 31c22 19 26 46 16 73ZM87 178c34-4 57-23 63-47-29 0-52 16-63 47Zm8-54c31-5 52-25 55-48-29 4-46 22-55 48Zm4-47c25-11 36-31 33-51-22 11-33 30-33 51Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M84 190c-19-21-31-31-50-43m60 3C75 123 65 111 50 93m46 32c24-25 33-35 51-46m-60 99c26-25 39-34 59-44m-47-30L83 35m17 42 31-46"
        stroke="currentColor"
        strokeWidth=".6"
      />
    </svg>
  );
}

function FieldHero() {
  return (
    <section className="field-hero content-width">
      <div className="field-hero-copy">
        <span className="field-intro">
          <Leaf size={15} strokeWidth={1.3} /> A little space for your curiosity
        </span>
        <h1>
          Good ideas
          <br />
          take root here.
        </h1>
        <p>
          There’s more to reading than getting to the last page. Turn your PDFs
          into clear summaries, meaningful quotes, and a deeper understanding.
        </p>
        <DemoButton>Let your curiosity grow</DemoButton>
        <span className="field-hero-note">
          <Check size={12} />
          Explore a sample. Take your time.
        </span>
        <div className="field-hero-bottom">
          <span>
            A thoughtful tool.
            <br />
            For a thoughtful mind.
          </span>
          <ArrowDownRight size={25} strokeWidth={1} />
        </div>
      </div>
      <div className="field-hero-visual">
        <div className="field-image-frame">
          <img
            src={`${import.meta.env.BASE_URL}images/quiet-reading.jpg`}
            alt="Sunlight finding its way through a quiet green forest"
            fetchPriority="high"
          />
          <div className="forest-image-label">
            <span>A fresh perspective</span>
            <span>is always worth finding.</span>
          </div>
        </div>
        <BotanicalSprig className="hero-sprig" />
        <div className="field-floating-note">
          <span className="field-note-label">
            <BookOpen size={12} />A note to the curious
          </span>
          <p>
            You don't need to
            <br />
            read everything.
            <br />
            Just find what
            <br />
            helps you grow.
          </p>
          <div>
            <i /> Your next chapter starts here.
          </div>
        </div>
        <span className="field-image-caption">
          Less noise. A little more room to think.
        </span>
      </div>
    </section>
  );
}

function FieldValues() {
  return (
    <section className="field-values content-width" id="features">
      <div className="field-values-heading">
        <span>
          Thoughtfully distilled.
          <br />
          Naturally understood.
        </span>
        <p>
          A reading companion that gives the important ideas
          <br />
          the space they deserve.
        </p>
      </div>
      <div className="field-value-grid">
        {[
          {
            icon: FileText,
            title: "Find the essence.",
            text: "Clear, considered summaries. Get to the heart of a document without getting lost in the details.",
          },
          {
            icon: Quote,
            title: "Keep the words.",
            text: "The passages that move an argument forward, with page references to take you back to the source.",
          },
          {
            icon: Lightbulb,
            title: "Follow a thought.",
            text: "Gentle hints and useful questions. Find the connections that turn a new idea into your own understanding.",
          },
        ].map(({ icon: Icon, title, text }) => (
          <article key={title}>
            <span>
              <Icon size={24} strokeWidth={1.2} />
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FieldProcess() {
  return (
    <section className="field-process" id="how-it-works">
      <div className="content-width field-process-inner">
        <div className="field-notebook">
          <div className="field-notebook-header">
            <span>From the reading room</span>
            <Leaf size={16} strokeWidth={1} />
          </div>
          <InsightPreview className="field-preview" />
          <div className="field-notebook-footer">
            A little clarity, in the margins.
          </div>
          <BotanicalSprig className="notebook-sprig" />
        </div>
        <div className="field-process-copy">
          <span className="section-kicker">
            An easier path through the pages
          </span>
          <h2>
            Start with a PDF.
            <br />
            Leave with a new
            <br />
            way of seeing.
          </h2>
          <div className="field-trail">
            {[
              {
                title: "Bring a little curiosity.",
                text: "Pick a paper, a report, an essay. Something you want to understand a little better.",
              },
              {
                title: "Find your way in.",
                text: "Start with the summary. Explore the key quotes. Let a reading hint point you somewhere new.",
              },
              {
                title: "Give the ideas room.",
                text: "Return to the source, reflect, and connect what you read to the things you already know.",
              },
            ].map(({ title, text }, i) => (
              <div key={title}>
                <span>{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
          <DemoButton sample className="field-text-button">
            Wander through a sample <ArrowRight size={16} />
          </DemoButton>
        </div>
      </div>
    </section>
  );
}

export function FieldGuide() {
  return (
    <div className="page field-page">
      <Header action="Find your perspective" minimal />
      <main>
        <FieldHero />
        <div className="field-whisper">
          <Leaf size={14} strokeWidth={1.2} />
          <span>
            For the things you have to read. And the things you can’t wait to
            understand.
          </span>
        </div>
        <FieldValues />
        <FieldProcess />
        <section className="field-belief">
          <div className="content-width">
            <BotanicalSprig />
            <span className="section-kicker">
              A different kind of productivity
            </span>
            <p>
              Read to understand.
              <br />
              Understand to grow.
            </p>
            <span>Some things are worth taking a little deeper.</span>
            <BotanicalSprig className="belief-sprig-right" />
          </div>
        </section>
        <section className="field-audience content-width">
          <div>
            <span className="section-kicker">For every season of learning</span>
            <h2>
              A companion for
              <br />
              your curious side.
            </h2>
          </div>
          <div className="field-audience-list">
            <div>
              <span>For your studies</span>
              <p>Find a foothold in a difficult paper.</p>
            </div>
            <div>
              <span>For your work</span>
              <p>Get perspective on that lengthy report.</p>
            </div>
            <div>
              <span>For yourself</span>
              <p>Follow the topic you can’t stop thinking about.</p>
            </div>
          </div>
        </section>
        <section className="field-final content-width">
          <div>
            <Sparkles size={22} strokeWidth={1.1} />
            <h2>
              Make a little room
              <br />
              for your next idea.
            </h2>
            <DemoButton>Begin a new chapter</DemoButton>
            <p>No account needed to explore the sample.</p>
          </div>
          <BotanicalSprig />
        </section>
        <Questions title="A few seeds of clarity." />
      </main>
      <Footer note="Made for the naturally curious." />
    </div>
  );
}
