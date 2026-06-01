import { Link } from "react-router-dom";

const PAPER = "#f6efde";
const PAPER_2 = "#ede3c9";
const PAPER_3 = "#fbf6e8";
const INK = "#1a1813";
const SOFTINK = "#3a352a";
const MUTED = "#786b58";
const FOREST = "#22443c";
const BURGUNDY = "#641d24";
const GOLD = "#b39357";

const display1 = '"DM Serif Display", ui-serif, Georgia, serif';
const display2 = '"Italiana", ui-serif, Georgia, serif';
const body = '"EB Garamond", ui-serif, Georgia, serif';
const mono = '"JetBrains Mono", ui-monospace, monospace';

export function Design3() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: PAPER,
        color: INK,
        fontFamily: body,
      }}
    >
      {/* paper grain */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.07] mix-blend-multiply z-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='320'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />
      {/* warm vignette */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(1100px 600px at 80% -10%, #ead8a3 0%, transparent 60%), radial-gradient(900px 700px at 0% 30%, #efe3bb 0%, transparent 55%)",
          opacity: 0.4,
        }}
      />

      <div className="relative z-10">
        <Masthead />
        <CoverHero />
        <Letter />
        <InThisIssue />
        <Workflow />
        <CitationBlock />
        <ReviewerColumn />
        <Audiences />
        <Licensing />
        <PullQuote />
        <Integrity />
        <BigCTA />
        <Colophon />
      </div>
    </div>
  );
}

function Masthead() {
  return (
    <header className="border-b" style={{ borderColor: "#1a18131a" }}>
      <div
        className="mx-auto max-w-[1280px] px-6 md:px-12 py-2 flex items-center justify-between text-[10px] tracking-[0.32em] uppercase"
        style={{ color: MUTED, fontFamily: mono }}
      >
        <span>Vol. III · No. 4</span>
        <span>May 2026</span>
        <span>An Open-Access Journal</span>
      </div>
      <div
        className="mx-auto max-w-[1280px] px-6 md:px-12 pt-4 pb-6 border-t flex flex-col md:flex-row md:items-end justify-between gap-4"
        style={{ borderColor: "#1a18130d" }}
      >
        <Link to="/" className="block leading-none no-underline">
          <div
            style={{
              fontFamily: display2,
              fontSize: 48,
              letterSpacing: "0.04em",
              color: INK,
              lineHeight: 0.9,
            }}
          >
            Open <span style={{ fontStyle: "italic" }}>Ratio</span>
          </div>
          <div
            className="mt-2 text-[10px] tracking-[0.42em] uppercase"
            style={{ color: BURGUNDY, fontFamily: mono }}
          >
            A Journal of Open-Access Scholarship
          </div>
        </Link>

        <nav
          className="hidden md:flex items-center gap-7 text-[12px] tracking-[0.18em] uppercase"
          style={{ color: SOFTINK, fontFamily: mono }}
        >
          <a className="hover:text-black" href="#">Browse Issues</a>
          <a className="hover:text-black" href="#">Submit</a>
          <a className="hover:text-black" href="#">Reviewers</a>
          <a className="hover:text-black" href="#">Editorial Board</a>
          <a className="hover:text-black" href="#">Donate</a>
        </nav>
      </div>
    </header>
  );
}

function CoverHero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 pt-16 md:pt-24 pb-10">
        <div className="flex items-center gap-4">
          <span
            className="text-[10px] tracking-[0.42em] uppercase"
            style={{ color: BURGUNDY, fontFamily: mono }}
          >
            Editorial · The Founding Issue
          </span>
          <span className="flex-1 h-px" style={{ background: "#1a18131a" }} />
        </div>

        <h1
          className="mt-10"
          style={{
            fontFamily: display1,
            fontSize: "clamp(54px, 9vw, 154px)",
            lineHeight: 0.92,
            letterSpacing: "-0.01em",
            color: INK,
            fontWeight: 400,
          }}
        >
          A new journal,
          <br />
          for an old <em style={{ color: BURGUNDY }}>discipline</em>.
        </h1>

        <div className="mt-12 grid grid-cols-12 gap-8 md:gap-10 items-start">
          <div
            className="col-span-12 md:col-span-3 text-[12px] leading-[1.7] tracking-[0.04em] uppercase"
            style={{ color: MUTED, fontFamily: mono }}
          >
            <div>By the Editors</div>
            <div className="mt-1" style={{ color: SOFTINK }}>
              First published 10 May 2026
            </div>
            <div className="mt-1">Released CC BY 4.0</div>

            <div
              className="mt-6 pt-4 border-t"
              style={{ borderColor: "#1a18131a", color: SOFTINK }}
            >
              In this issue<br />
              <span style={{ color: BURGUNDY }}>+ 47</span> articles<br />
              <span style={{ color: BURGUNDY }}>+ 184</span> referee comments<br />
              <span style={{ color: BURGUNDY }}>+ 12</span> editorials
            </div>
          </div>

          <div className="col-span-12 md:col-span-9">
            <p
              className="text-[22px] md:text-[26px] leading-[1.5]"
              style={{
                color: SOFTINK,
                fontFamily: body,
                fontWeight: 400,
              }}
            >
              <span
                className="float-left mr-3 mt-1"
                style={{
                  fontFamily: display1,
                  fontSize: "94px",
                  lineHeight: 0.78,
                  color: BURGUNDY,
                  fontWeight: 400,
                }}
              >
                S
              </span>
              cholarly publishing has, for half a century, drifted away from the
              people it was built for. Subscriptions cost universities tens of
              millions; reviewers go unpaid; reviews stay hidden; preprints sit
              in private silos; and authors hand over their copyright in exchange
              for a slow, opaque verdict. <em style={{ color: INK }}>Open Ratio</em>{" "}
              is our attempt to start over &mdash; in public, in the open,
              with the tools available to us in 2026.
            </p>

            <Ornament />

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 text-[18px] leading-[1.65]"
              style={{ color: SOFTINK, fontFamily: body }}
            >
              <p>
                We accept manuscripts in any field of empirical or theoretical
                inquiry, in LaTeX, Markdown, or PDF. Every submission is posted
                as a citable preprint within minutes; our AI reviewer reads it
                in under two; and a panel of invited human reviewers — paid for
                their time, signed if they wish — returns a transparent
                recommendation in days, not months.
              </p>
              <p>
                The version of record is mirrored in three regions, hashed and
                timestamped, and lives forever under a Creative Commons license
                of the author&rsquo;s choosing. Every revision is part of the
                public record. Every reviewer&rsquo;s comment is part of the
                public record. <em style={{ color: BURGUNDY }}>The reader never pays.</em>
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <CTA primary>Read this issue</CTA>
              <CTA>Submit a manuscript</CTA>
              <CTA>Start with a preprint</CTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ornament() {
  return (
    <div
      className="my-8 flex items-center justify-center text-[20px]"
      style={{ color: GOLD, fontFamily: display1, letterSpacing: "1em" }}
    >
      ⁂
    </div>
  );
}

function CTA({
  children,
  primary,
}: {
  children: React.ReactNode;
  primary?: boolean;
}) {
  if (primary) {
    return (
      <a
        href="#"
        className="inline-flex items-center gap-3 px-6 py-3 text-[12px] tracking-[0.32em] uppercase"
        style={{ background: INK, color: PAPER, fontFamily: mono }}
      >
        {children} <span style={{ color: GOLD }}>→</span>
      </a>
    );
  }
  return (
    <a
      href="#"
      className="inline-flex items-center gap-3 px-6 py-3 text-[12px] tracking-[0.32em] uppercase border"
      style={{
        borderColor: INK,
        color: INK,
        background: "transparent",
        fontFamily: mono,
      }}
    >
      {children} <span>→</span>
    </a>
  );
}

function Letter() {
  return (
    <section
      className="border-y"
      style={{ borderColor: "#1a18131a", background: PAPER_3 }}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 py-20 md:py-28 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-3">
          <div
            className="text-[10px] tracking-[0.42em] uppercase"
            style={{ color: BURGUNDY, fontFamily: mono }}
          >
            Manifesto
          </div>
          <div
            className="mt-3 text-[36px] leading-[0.95]"
            style={{ fontFamily: display2, color: INK }}
          >
            Four<br />commitments.
          </div>
          <div
            className="mt-6 text-[12px] leading-[1.7]"
            style={{ color: MUTED, fontFamily: mono }}
          >
            Signed by the founding board, <br />
            countersigned by the foundation, <br />
            countersigned by the public.
          </div>
        </div>
        <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {[
            {
              n: "I.",
              t: "We will never charge the reader.",
              p: "Open Ratio is freely readable in HTML, PDF, and machine-readable JATS XML. No subscriptions. No paywalls. No registration walls. Mirrored across three regions for as long as the foundation exists.",
            },
            {
              n: "II.",
              t: "We will never hide a review.",
              p: "Every reviewer comment, every revision, every rejection rationale becomes part of the public scholarly record on accept. Reviewers may sign their reviews or stay anonymous; either way, the comments are visible.",
            },
            {
              n: "III.",
              t: "We will pay for what we ask for.",
              p: "Reviewers and editors are paid, with stipends scaled to region. Funded by libraries, foundations, and a small per-author submission fee that is waived in low-income contexts.",
            },
            {
              n: "IV.",
              t: "We will treat the record as permanent.",
              p: "Every accepted article is hashed, timestamped, and mirrored. Versions are retained forever. Retractions are announced — never hidden — and become part of the public record.",
            },
          ].map((c) => (
            <div key={c.n}>
              <div className="flex items-baseline gap-4">
                <span
                  className="text-[40px]"
                  style={{ fontFamily: display1, color: BURGUNDY, fontWeight: 400 }}
                >
                  {c.n}
                </span>
                <h3
                  className="text-[28px] leading-[1.05]"
                  style={{ fontFamily: display1, color: INK, fontWeight: 400 }}
                >
                  {c.t}
                </h3>
              </div>
              <p
                className="mt-3 text-[18px] leading-[1.65] max-w-md"
                style={{ color: SOFTINK }}
              >
                {c.p}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const sampleArticles = [
  {
    cat: "ARTICLE · q-bio.TO",
    cover: "linear-gradient(135deg, #c8a87c 0%, #87673f 100%)",
    title: "Cartilage Repair via Light-Activated Hydrogels",
    sub: "A Phase-2 Open Trial of a Novel Bioengineered Treatment.",
    authors: "F. Adesanmi · T. M. Brennan · M. Kovac · D. R. Hosseini",
    excerpt:
      "Patient-reported outcomes at 26 weeks suggest that light-activated hydrogels may offer a meaningful improvement over saline controls, with a favorable safety profile across all 117 enrolled subjects.",
    pages: "117 — 142",
    doi: "10.84121/openratio.2605.10617",
    status: "Published",
    cite: 117,
  },
  {
    cat: "ARTICLE · cs.LG",
    cover: "linear-gradient(135deg, #2e4a44 0%, #475e57 100%)",
    title: "Sparse Mixture Routing for Long-Context Retrieval",
    sub: "Climate retrieval at 90-year horizons, with a routing prior tuned for ENSO modes.",
    authors: "M. Alaoui · J. Park · S. Vinogradova",
    excerpt:
      "We propose SparseMix, a sparse-mixture-of-experts router with a physics prior over El Niño / La Niña teleconnections, and report a 12.4% improvement on the Era5-90Y retrieval benchmark.",
    pages: "143 — 168",
    doi: "10.84121/openratio.2605.11842",
    status: "Preprint",
    cite: 41,
  },
  {
    cat: "REPLICATION · q-bio.PE",
    cover: "linear-gradient(135deg, #5e2129 0%, #8b3742 100%)",
    title: "Empathic Concern in Primates, Across Three New Species",
    sub: "A direct replication of Tomasello et al. (2018), pre-registered.",
    authors: "I. Tanaka · R. Olusegun · P. Mehta",
    excerpt:
      "We replicate the original empathic-concern paradigm with bonobos, orangutans, and tufted capuchins. Two of three species replicate the original effect; one does not.",
    pages: "169 — 184",
    doi: "10.84121/openratio.2605.11401",
    status: "Human-reviewed",
    cite: 8,
  },
  {
    cat: "ESSAY · phil.sci",
    cover: "linear-gradient(135deg, #c2b083 0%, #6c5e3a 100%)",
    title: "What Counts as a Discipline.",
    sub: "On the slow disappearance of clean fields and what comes next.",
    authors: "L. K. Berisha",
    excerpt:
      "The neat partitioning of journals by discipline mirrors a history that no longer maps to how science is done. Here is what an open-access publishing model can do about it.",
    pages: "185 — 196",
    doi: "10.84121/openratio.2605.11900",
    status: "Accepted",
    cite: 0,
  },
];

function InThisIssue() {
  return (
    <section className="border-b" style={{ borderColor: "#1a18131a" }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 py-24 md:py-32">
        <SectionHead num="I" eyebrow="Selections from this issue" title="In this issue." right="Browse all 47 articles →" />

        <div className="mt-14 grid grid-cols-12 gap-8 md:gap-10">
          {/* feature article */}
          <ArticleFeature a={sampleArticles[0]} />
          {/* secondary articles */}
          <div className="col-span-12 lg:col-span-5 grid gap-6">
            {sampleArticles.slice(1).map((a) => (
              <ArticleSmall key={a.doi} a={a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArticleFeature({ a }: { a: typeof sampleArticles[number] }) {
  return (
    <article
      className="col-span-12 lg:col-span-7 border p-1"
      style={{ borderColor: "#1a181333", background: PAPER_3 }}
    >
      <div
        className="aspect-[5/3] flex items-end p-8 relative overflow-hidden"
        style={{
          background: a.cover,
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(700px 400px at 80% 80%, rgba(0,0,0,0.4) 0%, transparent 60%)",
          }}
        />
        <div
          className="relative text-[10px] tracking-[0.42em] uppercase"
          style={{ color: PAPER, fontFamily: mono }}
        >
          {a.cat}
        </div>
        <div className="absolute top-6 right-6">
          <StatusPill status={a.status} />
        </div>
      </div>
      <div className="p-8 md:p-12">
        <h3
          className="text-[40px] md:text-[56px] leading-[0.98]"
          style={{ fontFamily: display1, color: INK, fontWeight: 400, letterSpacing: "-0.01em" }}
        >
          {a.title}
        </h3>
        <div
          className="mt-2 text-[20px]"
          style={{ fontStyle: "italic", color: BURGUNDY, fontFamily: body }}
        >
          {a.sub}
        </div>
        <div
          className="mt-4 text-[14px] tracking-[0.18em] uppercase"
          style={{ color: MUTED, fontFamily: mono }}
        >
          {a.authors}
        </div>

        <p
          className="mt-7 text-[18px] leading-[1.65] columns-1 md:columns-2 gap-x-10"
          style={{ color: SOFTINK }}
        >
          {a.excerpt} The full report contains pre-registered analyses,
          inclusion criteria, blinded outcome assessment, and a public dataset
          attached to the version of record. Any reader may inspect every
          reviewer comment and every revision diff at the article landing page.
        </p>

        <div
          className="mt-8 pt-5 border-t flex flex-wrap items-center gap-x-8 gap-y-2 text-[12px]"
          style={{ borderColor: "#1a181322", fontFamily: mono, color: MUTED }}
        >
          <span>
            <span style={{ color: BURGUNDY }}>DOI</span> {a.doi}
          </span>
          <span>·</span>
          <span>pp. {a.pages}</span>
          <span>·</span>
          <span>License CC BY 4.0</span>
          <span>·</span>
          <span>Cited {a.cite}×</span>
        </div>
      </div>
    </article>
  );
}

function ArticleSmall({ a }: { a: typeof sampleArticles[number] }) {
  return (
    <article
      className="border flex flex-col"
      style={{ borderColor: "#1a181333", background: PAPER_3 }}
    >
      <div className="grid grid-cols-12">
        <div
          className="col-span-3 sm:col-span-2 aspect-square"
          style={{ background: a.cover }}
        />
        <div className="col-span-9 sm:col-span-10 p-5 md:p-6">
          <div className="flex items-center justify-between gap-3 mb-1">
            <span
              className="text-[10px] tracking-[0.32em] uppercase"
              style={{ color: BURGUNDY, fontFamily: mono }}
            >
              {a.cat}
            </span>
            <StatusPill status={a.status} />
          </div>
          <h3
            className="text-[24px] md:text-[28px] leading-[1.05]"
            style={{ fontFamily: display1, color: INK, fontWeight: 400 }}
          >
            {a.title}
          </h3>
          <div
            className="mt-1 text-[14.5px]"
            style={{ fontStyle: "italic", color: BURGUNDY, fontFamily: body }}
          >
            {a.sub}
          </div>
          <div
            className="mt-2 text-[11.5px] tracking-[0.18em] uppercase"
            style={{ color: MUTED, fontFamily: mono }}
          >
            {a.authors}
          </div>
          <div
            className="mt-3 pt-3 border-t flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px]"
            style={{ borderColor: "#1a181322", fontFamily: mono, color: MUTED }}
          >
            <span>
              <span style={{ color: BURGUNDY }}>DOI</span> {a.doi}
            </span>
            <span>·</span>
            <span>pp. {a.pages}</span>
            <span>·</span>
            <span>{a.cite}×</span>
          </div>
        </div>
      </div>
    </article>
  );
}

function StatusPill({ status }: { status: string }) {
  const map: Record<string, { fg: string; bg: string }> = {
    Published: { fg: PAPER, bg: INK },
    Accepted: { fg: PAPER, bg: BURGUNDY },
    "Human-reviewed": { fg: PAPER, bg: FOREST },
    "AI-reviewed": { fg: INK, bg: GOLD },
    Preprint: { fg: INK, bg: "#cdb98a" },
    Draft: { fg: MUTED, bg: "transparent" },
  };
  const s = map[status] ?? map.Preprint;
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 text-[10px] tracking-[0.28em] uppercase"
      style={{ background: s.bg, color: s.fg, fontFamily: mono }}
    >
      {status}
    </span>
  );
}

function SectionHead({
  num,
  eyebrow,
  title,
  right,
}: {
  num: string;
  eyebrow: string;
  title: string;
  right?: string;
}) {
  return (
    <div className="grid grid-cols-12 gap-6 items-end">
      <div className="col-span-12 md:col-span-9">
        <div
          className="flex items-center gap-3 text-[10px] tracking-[0.42em] uppercase"
          style={{ color: BURGUNDY, fontFamily: mono }}
        >
          <span style={{ color: GOLD, fontFamily: display1, fontSize: 22 }}>
            {num}.
          </span>
          <span>{eyebrow}</span>
        </div>
        <h2
          className="mt-4 text-[58px] md:text-[88px] leading-[0.92]"
          style={{
            fontFamily: display1,
            color: INK,
            fontWeight: 400,
            letterSpacing: "-0.015em",
          }}
        >
          {title}
        </h2>
      </div>
      {right && (
        <div
          className="col-span-12 md:col-span-3 text-[12px] tracking-[0.28em] uppercase"
          style={{ color: INK, fontFamily: mono }}
        >
          {right}
        </div>
      )}
    </div>
  );
}

function Workflow() {
  const stages = [
    { n: "I", l: "Manuscript", d: "A draft. Yours, your collaborators only. Versioned from the first save.", state: "Draft" },
    { n: "II", l: "Preprint", d: "Public, citable, time-stamped. Indexed in minutes. Comments invited.", state: "Preprint" },
    { n: "III", l: "AI Review", d: "Methodology, statistics, references, integrity, novelty, authorship.", state: "AI-reviewed" },
    { n: "IV", l: "Human Review", d: "Invited reviewers — signed or anonymous. Public on accept.", state: "Human-reviewed" },
    { n: "V", l: "Revision", d: "Threaded responses. Diffs are part of the record.", state: "AI-reviewed" },
    { n: "VI", l: "Accepted", d: "Editorial board approves. A DOI is reserved. Layout begins.", state: "Accepted" },
    { n: "VII", l: "Version of Record", d: "Typeset, archived, mirrored. Citable forever.", state: "Published" },
  ];

  return (
    <section className="border-b" style={{ borderColor: "#1a18131a" }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 py-24 md:py-32">
        <SectionHead num="II" eyebrow="The publishing flow" title="From draft to record." />

        <p
          className="mt-10 max-w-3xl text-[20px] leading-[1.6]"
          style={{ color: SOFTINK, fontStyle: "italic" }}
        >
          A scientific paper is not a binary &mdash; published or not. It is a
          sequence of states, each with its own evidence, each carrying its own
          weight in the public record.
        </p>

        <Ornament />

        <div className="grid grid-cols-12 gap-x-10 gap-y-12 mt-6">
          {stages.map((s, i) => (
            <div
              key={s.n}
              className="col-span-12 md:col-span-6 lg:col-span-4 relative"
            >
              <div className="flex items-baseline gap-4">
                <span
                  className="text-[36px]"
                  style={{ fontFamily: display1, color: BURGUNDY, fontWeight: 400 }}
                >
                  {s.n}.
                </span>
                <h3
                  className="text-[32px] leading-[1]"
                  style={{ fontFamily: display1, color: INK, fontWeight: 400 }}
                >
                  {s.l}
                </h3>
              </div>
              <p
                className="mt-3 text-[16.5px] leading-[1.65] max-w-sm"
                style={{ color: SOFTINK }}
              >
                {s.d}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <StatusPill status={s.state} />
                {i < stages.length - 1 && (
                  <span
                    className="text-[11px] tracking-[0.32em] uppercase"
                    style={{ color: MUTED, fontFamily: mono }}
                  >
                    next →
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CitationBlock() {
  return (
    <section className="border-b" style={{ borderColor: "#1a18131a", background: PAPER_2 }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 py-24 md:py-32">
        <SectionHead num="III" eyebrow="Identifiers · Persistence" title="A citation, in the proper sense." />

        <div className="mt-14 grid grid-cols-12 gap-8 md:gap-10">
          {/* the article record */}
          <div
            className="col-span-12 lg:col-span-7 border p-8 md:p-12 relative"
            style={{ borderColor: "#1a181333", background: PAPER_3 }}
          >
            <div
              className="absolute -top-3 left-8 px-3 py-1 text-[10px] tracking-[0.32em] uppercase"
              style={{
                background: PAPER_2,
                color: BURGUNDY,
                border: `1px solid ${BURGUNDY}`,
                fontFamily: mono,
              }}
            >
              Version of record
            </div>

            <div
              className="text-[11px] tracking-[0.32em] uppercase"
              style={{ color: MUTED, fontFamily: mono }}
            >
              Open Ratio · q-bio.TO · Vol. III · No. 4 · 2026
            </div>

            <h3
              className="mt-2 text-[44px] md:text-[60px] leading-[0.98]"
              style={{
                fontFamily: display1,
                color: INK,
                fontWeight: 400,
                letterSpacing: "-0.01em",
              }}
            >
              Cartilage Repair<br /> via Light-Activated Hydrogels.
            </h3>
            <div
              className="mt-3 text-[18px]"
              style={{ fontStyle: "italic", color: BURGUNDY, fontFamily: body }}
            >
              A Phase-2 Open Trial.
            </div>
            <div
              className="mt-5 text-[15px] tracking-[0.06em]"
              style={{ color: SOFTINK }}
            >
              <em>F. Adesanmi, T. M. Brennan, M. Kovac &amp; D. R. Hosseini.</em>
            </div>

            <div
              className="mt-8 pt-6 border-t grid grid-cols-2 md:grid-cols-3 gap-6 text-[14px]"
              style={{ borderColor: "#1a181322", fontFamily: mono, color: SOFTINK }}
            >
              <Stat l="Pages" v="117 — 142" />
              <Stat l="License" v="CC BY 4.0" />
              <Stat l="Versions" v="v1 · v2 · v3 · v4" />
              <Stat l="Mirrors" v="us-e · eu-w · ap-s" />
              <Stat l="Cited" v="117× (growing)" />
              <Stat l="Format" v="HTML · PDF · XML" />
            </div>

            <div
              className="mt-8 p-5 border-l-2 text-[16.5px] leading-[1.65]"
              style={{ borderColor: BURGUNDY, color: SOFTINK, fontStyle: "italic" }}
            >
              &ldquo;Patient-reported outcomes at 26 weeks suggest that
              light-activated hydrogels may offer a meaningful improvement in
              cartilage repair over saline controls.&rdquo;
            </div>

            <div
              className="mt-8 pt-5 border-t text-[12px]"
              style={{ borderColor: "#1a181322", fontFamily: mono, color: MUTED }}
            >
              <div style={{ color: BURGUNDY }}>
                DOI 10.84121/openratio.2605.10617
              </div>
              <div className="mt-1">
                Resolves to v4 · also available v1 · v2 · v3
              </div>
            </div>
          </div>

          {/* citation as it should appear */}
          <div className="col-span-12 lg:col-span-5">
            <div
              className="text-[10px] tracking-[0.42em] uppercase mb-4"
              style={{ color: BURGUNDY, fontFamily: mono }}
            >
              The citation, set in type
            </div>
            <div
              className="text-[20px] leading-[1.65]"
              style={{ color: INK, fontFamily: body }}
            >
              <span style={{ fontVariant: "small-caps", letterSpacing: "0.04em" }}>
                Adesanmi, F., T. M. Brennan, M. Kovac &amp; D. R. Hosseini.
              </span>{" "}
              &ldquo;Cartilage Repair via Light-Activated Hydrogels: A Phase-2
              Open Trial.&rdquo;{" "}
              <em>Open Ratio Journal of Open Bioengineering</em> 1(4): 117–142.{" "}
              <span style={{ color: BURGUNDY }}>
                DOI 10.84121/openratio.2605.10617
              </span>
              .
            </div>

            <Ornament />

            <div
              className="text-[10px] tracking-[0.42em] uppercase mb-3"
              style={{ color: BURGUNDY, fontFamily: mono }}
            >
              The citation, in BibTeX
            </div>
            <pre
              className="text-[11.5px] leading-[1.65] p-5 border whitespace-pre-wrap"
              style={{
                fontFamily: mono,
                color: SOFTINK,
                borderColor: "#1a181333",
                background: PAPER_3,
              }}
            >
{`@article{adesanmi2026cartilage,
  title    = {Cartilage Repair via Light-Activated
              Hydrogels: A Phase-2 Open Trial},
  author   = {Adesanmi, F. and Brennan, T. M. and
              Kovac, M. and Hosseini, D. R.},
  journal  = {Open Ratio Journal of
              Open Bioengineering},
  volume   = {1},  number = {4},
  pages    = {117--142},
  year     = {2026},
  doi      = {10.84121/openratio.2605.10617},
  license  = {CC-BY-4.0}
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ l, v }: { l: string; v: string }) {
  return (
    <div>
      <div
        className="text-[10px] tracking-[0.32em] uppercase"
        style={{ color: MUTED }}
      >
        {l}
      </div>
      <div className="mt-1" style={{ color: INK }}>
        {v}
      </div>
    </div>
  );
}

function ReviewerColumn() {
  return (
    <section className="border-b" style={{ borderColor: "#1a18131a" }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 py-24 md:py-32 grid grid-cols-12 gap-8 md:gap-12">
        <div className="col-span-12 md:col-span-4">
          <div
            className="text-[10px] tracking-[0.42em] uppercase mb-3"
            style={{ color: BURGUNDY, fontFamily: mono }}
          >
            The Reviewer&rsquo;s Column
          </div>
          <h2
            className="text-[44px] md:text-[58px] leading-[0.95]"
            style={{ fontFamily: display1, color: INK, fontWeight: 400, letterSpacing: "-0.01em" }}
          >
            <em>“The judgment</em><br />
            of one&rsquo;s peers, <br />
            published.”
          </h2>

          <div
            className="mt-7 flex items-start gap-4"
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-[20px]"
              style={{
                background: FOREST,
                color: PAPER,
                fontFamily: display1,
              }}
            >
              LH
            </div>
            <div>
              <div
                className="text-[16px]"
                style={{ fontFamily: display1, color: INK }}
              >
                Dr. Lila Hofstadter
              </div>
              <div
                className="text-[11px] tracking-[0.32em] uppercase mt-1"
                style={{ color: MUTED, fontFamily: mono }}
              >
                ETH Zürich · Reviewer 2 of 3 · Signed
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8">
          <div
            className="text-[18.5px] md:text-[20px] leading-[1.7] columns-1 md:columns-2 gap-x-12"
            style={{ color: SOFTINK }}
          >
            <p>
              <span
                className="float-left mr-3 mt-1"
                style={{
                  fontFamily: display1,
                  fontSize: "62px",
                  lineHeight: 0.78,
                  color: BURGUNDY,
                  fontWeight: 400,
                }}
              >
                I
              </span>
              came to Open Ratio because I had stopped reviewing for the closed
              journals. The work I was being asked to do was unpaid, invisible,
              and effectively a private gift to a publisher. I had no proof I had
              done it, no record of my comments, and no recourse if my work was
              ignored or my review was used to enrich a third party.
            </p>

            <p>
              The platform pays me, recognizes me, and lets me sign my work if
              I want to. The AI pre-pass surfaces the boilerplate complaints I
              would otherwise spend hours raising, and the resulting comments
              are openly archived. When I cite an author&rsquo;s response on a
              later paper, I can <em>read</em> their response.
            </p>

            <p>
              And as a reader, I can finally see how a finding got to the
              version of record &mdash; what was challenged, what was conceded,
              what was changed. The opacity of peer review has, for too long,
              been treated as a feature. Open Ratio treats it, correctly, as a
              bug.
            </p>
          </div>

          <div
            className="mt-10 pt-6 border-t flex items-center gap-6 text-[12px] tracking-[0.18em] uppercase"
            style={{ borderColor: "#1a181322", color: MUTED, fontFamily: mono }}
          >
            <span>Recommendation · Accept · Minor revision</span>
            <span>·</span>
            <span>Round 2 · 6 days</span>
            <span>·</span>
            <span>Visible to public on accept</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Audiences() {
  const groups = [
    {
      who: "For authors",
      points: [
        "Submit in LaTeX, Markdown, or PDF.",
        "Manuscript private until you press Publish.",
        "AI surfaces defects before reviewers see them.",
        "Threaded responses to every reviewer comment.",
        "DOI within minutes of acceptance.",
        "All revisions are public — nothing is rewritten silently.",
      ],
    },
    {
      who: "For readers",
      points: [
        "Free, open, no paywall, no registration.",
        "HTML, PDF, plain text, machine-readable JATS XML.",
        "Read every reviewer comment, every revision diff.",
        "Linked to data, code, and supplementary materials.",
        "Three regional mirrors guarantee long-term access.",
        "Cite the version you read; the URL never breaks.",
      ],
    },
    {
      who: "For reviewers & editors",
      points: [
        "AI does the boilerplate so you spend time on judgement.",
        "Sign your review or stay anonymous, your choice.",
        "Verifiable credit and a stipend for every review.",
        "Editorial board paid, transparent, and elected.",
        "Decisions and timelines visible to authors live.",
        "Pre-committed timelines — no reviewer chasing.",
      ],
    },
  ];
  return (
    <section className="border-b" style={{ borderColor: "#1a18131a", background: PAPER_3 }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 py-24 md:py-32">
        <SectionHead num="IV" eyebrow="Three audiences" title="A platform for everyone." />

        <div className="mt-14 grid grid-cols-12 gap-x-10 gap-y-14">
          {groups.map((g, gi) => (
            <div key={g.who} className="col-span-12 md:col-span-4">
              <div
                className="text-[10px] tracking-[0.42em] uppercase"
                style={{ color: BURGUNDY, fontFamily: mono }}
              >
                {String(["I.", "II.", "III."][gi])}{" "}
              </div>
              <h3
                className="mt-2 text-[44px] leading-[1] tracking-[-0.01em]"
                style={{ fontFamily: display1, color: INK, fontWeight: 400 }}
              >
                {g.who}.
              </h3>
              <ol className="mt-7 space-y-4">
                {g.points.map((p, i) => (
                  <li
                    key={i}
                    className="flex gap-4 text-[16.5px] leading-[1.6]"
                    style={{ color: SOFTINK }}
                  >
                    <span
                      className="text-[11px] mt-2"
                      style={{ fontFamily: mono, color: GOLD }}
                    >
                      §{String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Licensing() {
  const licenses = [
    {
      tag: "CC BY 4.0",
      n: "Attribution",
      blurb: "Anyone may share and adapt for any purpose, including commercial, with credit.",
      use: "The default for most authors.",
    },
    {
      tag: "CC BY-NC",
      n: "Non-commercial",
      blurb: "Share and adapt freely for non-commercial use, with attribution.",
      use: "Studies funded by non-profit grants.",
    },
    {
      tag: "CC BY-SA",
      n: "Share-alike",
      blurb: "Adaptations must be released under the same open license.",
      use: "When you want derivatives to remain open.",
    },
  ];

  return (
    <section className="border-b" style={{ borderColor: "#1a18131a" }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 py-24 md:py-32">
        <SectionHead num="V" eyebrow="Author-controlled licensing" title="Open licenses, your choice." />

        <div className="mt-14 grid grid-cols-12 gap-6">
          {licenses.map((l) => (
            <article
              key={l.tag}
              className="col-span-12 md:col-span-4 border p-8 relative"
              style={{ borderColor: "#1a181333", background: PAPER_3 }}
            >
              <div
                className="text-[10px] tracking-[0.42em] uppercase"
                style={{ color: BURGUNDY, fontFamily: mono }}
              >
                {l.tag}
              </div>
              <h3
                className="mt-3 text-[40px] leading-[1]"
                style={{ fontFamily: display1, color: INK, fontWeight: 400 }}
              >
                {l.n}
              </h3>
              <p
                className="mt-4 text-[16.5px] leading-[1.65]"
                style={{ color: SOFTINK }}
              >
                {l.blurb}
              </p>
              <div
                className="mt-6 pt-4 border-t text-[12px] italic"
                style={{
                  borderColor: "#1a181322",
                  color: BURGUNDY,
                  fontFamily: body,
                }}
              >
                {l.use}
              </div>
            </article>
          ))}
        </div>

        <p
          className="mt-10 max-w-3xl text-[16.5px] leading-[1.65]"
          style={{ color: SOFTINK, fontStyle: "italic" }}
        >
          Open Ratio never holds copyright. Authors retain copyright, choose a
          license at submission, and may relicense at any time. Funder mandates
          &mdash; Plan&nbsp;S, NIH, ERC, FAIR &mdash; are satisfied by default.
        </p>
      </div>
    </section>
  );
}

function PullQuote() {
  return (
    <section
      className="border-b"
      style={{ borderColor: "#1a18131a", background: FOREST, color: PAPER_3 }}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 py-32 md:py-44 text-center">
        <div
          className="text-[10px] tracking-[0.42em] uppercase mb-6"
          style={{ color: GOLD, fontFamily: mono }}
        >
          From the founding charter
        </div>
        <blockquote
          className="text-[44px] md:text-[88px] leading-[1.05] max-w-5xl mx-auto"
          style={{ fontFamily: display2, color: PAPER_3, fontWeight: 400, letterSpacing: "-0.01em" }}
        >
          “If a record of human knowledge cannot be{" "}
          <em>read</em>, cannot be <em>cited</em>, cannot be{" "}
          <em>contested</em> &mdash; it is not, in any meaningful sense,{" "}
          public.”
        </blockquote>
        <div
          className="mt-10 text-[12px] tracking-[0.42em] uppercase"
          style={{ color: GOLD, fontFamily: mono }}
        >
          — Open Ratio Foundation, 2026
        </div>
      </div>
    </section>
  );
}

function Integrity() {
  const checks = [
    { h: "Spam & meaningless content", p: "Aggressive filtering for AI-generated nonsense, citation farms, and content that fails basic coherence checks. Manual editorial gate for borderline cases." },
    { h: "Plagiarism", p: "Whole-corpus similarity check across 41M papers and 8M arXiv preprints, with overlap visualisations and exoneration paths for legitimate self-citation." },
    { h: "Unethical content", p: "IRB / ERB declarations required for human and animal subject research; signed at submission and surfaced in the final article header." },
    { h: "Fake authors", p: "ORCID + institution verification + reverse-search for author histories. Sock-puppet detection on review patterns. Public retraction record." },
    { h: "Conflicts of interest", p: "Co-authorship and funding graphs are checked at submission and at review assignment. Editors cannot review their own collaborators." },
    { h: "Long-term integrity", p: "Three geographically distributed mirrors; checksums published; cryptographic timestamps. The version of record cannot quietly change." },
  ];
  return (
    <section className="border-b" style={{ borderColor: "#1a18131a" }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 py-24 md:py-32">
        <SectionHead num="VI" eyebrow="Integrity" title="A scholarly record only matters if it can be trusted." />

        <div className="mt-12 grid grid-cols-12 gap-x-10 gap-y-12">
          {checks.map((c, i) => (
            <div
              key={i}
              className="col-span-12 md:col-span-6 lg:col-span-4 border-t pt-6"
              style={{ borderColor: "#1a181322" }}
            >
              <div className="flex items-baseline gap-3">
                <span
                  className="text-[14px]"
                  style={{ fontFamily: mono, color: BURGUNDY }}
                >
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <h3
                  className="text-[28px] leading-[1.1]"
                  style={{ fontFamily: display1, color: INK, fontWeight: 400 }}
                >
                  {c.h}
                </h3>
              </div>
              <p
                className="mt-3 text-[16.5px] leading-[1.65]"
                style={{ color: SOFTINK }}
              >
                {c.p}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BigCTA() {
  return (
    <section
      className="border-b"
      style={{ borderColor: "#1a18131a", background: PAPER_2 }}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 py-32 md:py-44 text-center">
        <div
          className="text-[10px] tracking-[0.42em] uppercase mb-6"
          style={{ color: BURGUNDY, fontFamily: mono }}
        >
          Submit · Read · Review
        </div>
        <h2
          className="text-[60px] md:text-[140px] leading-[0.92]"
          style={{
            fontFamily: display1,
            color: INK,
            fontWeight: 400,
            letterSpacing: "-0.02em",
          }}
        >
          Begin a manuscript.
          <br />
          <span style={{ fontStyle: "italic", color: BURGUNDY }}>
            End an old habit.
          </span>
        </h2>

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          <CTA primary>Submit a manuscript</CTA>
          <CTA>Start with a preprint</CTA>
          <CTA>Explore published research</CTA>
        </div>

        <p
          className="mt-10 max-w-2xl mx-auto text-[15px] leading-[1.65]"
          style={{ color: SOFTINK, fontStyle: "italic" }}
        >
          No subscription. No paywall. No article-processing charges in the
          first year. Open Ratio is supported by libraries, foundations, and a
          small per-author submission fee waived in low-income regions.
        </p>
      </div>
    </section>
  );
}

function Colophon() {
  return (
    <footer className="pt-20 pb-14">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <div
              style={{
                fontFamily: display2,
                fontSize: 36,
                letterSpacing: "0.04em",
                color: INK,
                lineHeight: 0.9,
              }}
            >
              Open <span style={{ fontStyle: "italic" }}>Ratio</span>
            </div>
            <div
              className="mt-2 text-[10px] tracking-[0.42em] uppercase"
              style={{ color: BURGUNDY, fontFamily: mono }}
            >
              A Journal of Open-Access Scholarship
            </div>
            <p
              className="mt-5 text-[14.5px] leading-[1.65] max-w-sm"
              style={{ color: SOFTINK, fontStyle: "italic" }}
            >
              Edited in the open. Hashed for permanence. Mirrored across three
              regions. Released under Creative Commons.
            </p>
          </div>
          <div
            className="col-span-12 md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-[12px] tracking-[0.18em] uppercase"
            style={{ fontFamily: mono, color: SOFTINK }}
          >
            <FootCol t="Journal" l={["Browse", "Submit", "Reviewers", "Editorial board"]} />
            <FootCol t="Open" l={["Governance", "Code", "API", "Mirrors"]} />
            <FootCol t="IDs" l={["DOI", "ORCID", "ROR", "Crossref"]} />
            <FootCol t="Contact" l={["editorial@", "press@", "Donate", "Status"]} />
          </div>
        </div>

        <div
          className="mt-14 pt-6 border-t flex flex-col md:flex-row md:items-center justify-between gap-3 text-[10px] tracking-[0.42em] uppercase"
          style={{ borderColor: "#1a181322", color: MUTED, fontFamily: mono }}
        >
          <span>© Open Ratio Foundation, MMXXVI</span>
          <span>Set in DM Serif Display &amp; EB Garamond</span>
          <span>ISSN 3088-7142 · CC BY 4.0</span>
        </div>
      </div>
    </footer>
  );
}

function FootCol({ t, l }: { t: string; l: string[] }) {
  return (
    <div>
      <div className="mb-3" style={{ color: BURGUNDY }}>
        {t}
      </div>
      <ul className="space-y-2">
        {l.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  );
}
