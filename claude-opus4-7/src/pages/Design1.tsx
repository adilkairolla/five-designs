import { Link } from "react-router-dom";

const PAPER = "#f4f0e6";
const INK = "#18120a";
const SOFTINK = "#3b322a";
const MUTED = "#7a6e60";
const RULE = "#1a14080d";
const OX = "#6f1d1d";
const SAGE = "#3a4a3a";

const serif = '"Fraunces", ui-serif, Georgia, serif';
const body = '"Newsreader", ui-serif, Georgia, serif';
const mono = '"IBM Plex Mono", ui-monospace, monospace';

const recentPapers = [
  {
    id: "2605.11842",
    title:
      "Sparse Mixture Routing for Long-Context Retrieval in Climate Models",
    authors: "M. Alaoui, J. Park, S. Vinogradova",
    field: "cs.LG · physics.ao-ph",
    status: "Preprint",
    cycle: "v3",
    cite: 41,
    date: "May 09",
  },
  {
    id: "2605.11401",
    title:
      "A Replication of “Empathic Concern in Primates” Across Three New Species",
    authors: "I. Tanaka, R. Olusegun, P. Mehta, et al.",
    field: "q-bio.PE · psy.com",
    status: "Human-reviewed",
    cycle: "v2",
    cite: 8,
    date: "May 09",
  },
  {
    id: "2605.10999",
    title:
      "On the Decidability of Type-Level Effects in Total Functional Languages",
    authors: "L. Hofstadter, K. N. Singh",
    field: "cs.PL · cs.LO",
    status: "AI-reviewed",
    cycle: "v1",
    cite: 0,
    date: "May 08",
  },
  {
    id: "2605.10617",
    title:
      "Cartilage Repair via Light-Activated Hydrogels: A Phase-2 Open Trial",
    authors: "F. Adesanmi, T. M. Brennan, M. Kovac",
    field: "q-bio.TO · physics.med-ph",
    status: "Accepted",
    cycle: "v4",
    cite: 117,
    date: "May 07",
  },
  {
    id: "2605.10488",
    title: "Anomalous Diffusion in Disordered Granular Media",
    authors: "Y. Aboud, S. M. Brink",
    field: "cond-mat.soft",
    status: "Published",
    cycle: "v5",
    cite: 320,
    date: "May 07",
  },
];

const stages = [
  {
    n: "01",
    label: "Manuscript",
    body:
      "A draft. Yours, private, your collaborators only. Versioned from line one.",
    detail: "Draft",
  },
  {
    n: "02",
    label: "Preprint",
    body:
      "Public, citable, time-stamped. Indexed within minutes. Comments open.",
    detail: "Preprint",
  },
  {
    n: "03",
    label: "AI Review",
    body:
      "Methodological, statistical, reference, integrity & novelty pass. Transparent reasoning.",
    detail: "AI-reviewed",
  },
  {
    n: "04",
    label: "Human Review",
    body:
      "Invited reviewers, signed or anonymous; every comment public on accept.",
    detail: "Human-reviewed",
  },
  {
    n: "05",
    label: "Revision",
    body:
      "Threaded responses. Reviewers see your reply. Diffs are part of the record.",
    detail: "AI-reviewed",
  },
  {
    n: "06",
    label: "Accepted",
    body: "An editorial board approves. A DOI is reserved. Layout begins.",
    detail: "Accepted",
  },
  {
    n: "07",
    label: "Version of Record",
    body:
      "Typeset, archived, mirrored. Citable forever, with every version visible.",
    detail: "Published",
  },
];

export function Design1() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: PAPER,
        color: INK,
        fontFamily: body,
        backgroundImage:
          "radial-gradient(900px 480px at 95% -5%, #ead7b3 0%, transparent 65%), radial-gradient(900px 600px at -10% 20%, #efe2c0 0%, transparent 60%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.07] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          zIndex: 0,
        }}
      />

      <div className="relative z-10">
        <Masthead />
        <Hero />
        <Abstract />
        <RecentPapers />
        <Workflow />
        <Statuses />
        <DoiBlock />
        <Reviewers />
        <Licensing />
        <Audiences />
        <Integrity />
        <CTA />
        <Colophon />
      </div>
    </div>
  );
}

function Masthead() {
  return (
    <header className="border-b" style={{ borderColor: RULE, fontFamily: mono }}>
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 py-5 flex items-center justify-between text-[11px] tracking-wider uppercase">
        <div className="flex items-center gap-5" style={{ color: MUTED }}>
          <Link
            to="/"
            className="text-[12px] no-underline"
            style={{ color: INK, fontFamily: serif, letterSpacing: "0.08em" }}
          >
            <span style={{ fontWeight: 500 }}>OPEN</span>
            <span style={{ fontWeight: 300, fontStyle: "italic" }}> ratio</span>
          </Link>
          <span>·</span>
          <span>ISSN 3088-7142</span>
          <span className="hidden md:inline">·</span>
          <span className="hidden md:inline">Vol. I — Issue 04</span>
        </div>
        <nav className="hidden md:flex items-center gap-6" style={{ color: SOFTINK }}>
          <a className="hover:underline" href="#">Browse</a>
          <a className="hover:underline" href="#">Submit</a>
          <a className="hover:underline" href="#">Reviewers</a>
          <a className="hover:underline" href="#">Editorial</a>
          <a className="hover:underline" href="#">About</a>
          <span style={{ color: OX }}>·</span>
          <a
            className="px-3 py-1 border"
            style={{ borderColor: INK, color: INK }}
            href="#"
          >
            Sign in
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 pt-14 md:pt-20 pb-10">
        <div
          className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase"
          style={{ color: MUTED, fontFamily: mono }}
        >
          <span>§ 01</span>
          <span style={{ color: OX }}>—</span>
          <span>An open-access publishing platform</span>
        </div>

        <div className="mt-8 grid grid-cols-12 gap-6 items-end">
          <h1
            className="col-span-12 md:col-span-9"
            style={{
              fontFamily: serif,
              fontWeight: 300,
              fontSize: "clamp(54px, 9vw, 148px)",
              lineHeight: 0.9,
              letterSpacing: "-0.025em",
              color: INK,
            }}
          >
            Open-access<br />
            <span style={{ fontStyle: "italic", fontWeight: 300, color: SOFTINK }}>
              publishing
            </span>{" "}
            for the<br />
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 300,
                color: OX,
                fontVariationSettings: "'SOFT' 80",
              }}
            >
              AI age.
            </span>
          </h1>

          <div className="col-span-12 md:col-span-3 md:pb-6">
            <div
              className="text-[11px] tracking-[0.32em] uppercase mb-3"
              style={{ color: OX, fontFamily: mono }}
            >
              By the editors
            </div>
            <p
              className="text-[16px] leading-[1.55]"
              style={{ color: SOFTINK, fontFamily: body }}
            >
              A modern alternative to arXiv, peer review, and the closed journal —
              built around{" "}
              <span style={{ fontStyle: "italic", color: INK }}>
                preprints, transparent review, and a permanent version of record.
              </span>
            </p>
            <div
              className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em]"
              style={{ color: MUTED, fontFamily: mono }}
            >
              <span>Read the abstract ↓</span>
            </div>
          </div>
        </div>

        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-5 border-t border-b py-5 gap-6"
          style={{ borderColor: "#0000001a" }}
        >
          {[
            ["Papers indexed", "184,621"],
            ["Preprints / day", "412"],
            ["AI reviews / day", "1,049"],
            ["Reviewing time", "−72%"],
            ["DOI coverage", "100%"],
          ].map(([k, v]) => (
            <div key={k}>
              <div
                className="text-[10px] uppercase tracking-[0.28em]"
                style={{ color: MUTED, fontFamily: mono }}
              >
                {k}
              </div>
              <div
                className="mt-2 text-[28px] md:text-[34px] tabular-nums"
                style={{ fontFamily: serif, fontWeight: 400, color: INK }}
              >
                {v}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="border-y overflow-hidden py-3"
        style={{ borderColor: "#0000001a", background: "#ece4cf66" }}
      >
        <div className="marquee whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <div
              key={k}
              className="flex gap-12 pr-12"
              style={{ fontFamily: mono, color: SOFTINK, fontSize: 12 }}
            >
              {recentPapers.map((p) => (
                <span key={`${k}-${p.id}`} className="flex items-center gap-3">
                  <span style={{ color: OX }}>{p.id}</span>
                  <span style={{ color: INK }}>{p.title}</span>
                  <span style={{ color: MUTED }}>· {p.field}</span>
                  <span style={{ color: SAGE }}>· {p.status}</span>
                  <span style={{ color: MUTED }}>·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Abstract() {
  return (
    <section className="border-b" style={{ borderColor: RULE }}>
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 py-20 md:py-28 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-3">
          <div
            className="text-[11px] tracking-[0.32em] uppercase"
            style={{ color: OX, fontFamily: mono }}
          >
            § 02
          </div>
          <div
            className="mt-3 text-[40px] leading-[1.05]"
            style={{ fontFamily: serif, fontWeight: 300, color: INK }}
          >
            Abstract.
          </div>
          <div
            className="mt-6 text-[12px] leading-[1.7]"
            style={{ fontFamily: mono, color: MUTED }}
          >
            <div>Submitted 03 May 2026</div>
            <div>Revised 09 May 2026</div>
            <div style={{ color: OX }}>Open access · CC BY 4.0</div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-9">
          <p
            className="text-[22px] md:text-[28px] leading-[1.45]"
            style={{ color: INK, fontFamily: body, fontWeight: 300 }}
          >
            <span
              className="float-left mr-3 mt-2"
              style={{
                fontFamily: serif,
                fontSize: "82px",
                lineHeight: 0.8,
                fontWeight: 300,
                color: OX,
              }}
            >
              W
            </span>
            e believe scholarly publishing should be{" "}
            <em style={{ color: OX }}>open</em>, <em style={{ color: OX }}>fast</em>,
            and <em style={{ color: OX }}>verifiable</em>. Open Ratio takes a
            manuscript from a private draft to a permanent, citable version of
            record — with AI-assisted review, transparent peer review, DOI
            registration, and a public revision history that anyone can read
            forever.
          </p>
          <p
            className="mt-7 text-[18px] md:text-[19px] leading-[1.65]"
            style={{ color: SOFTINK, fontFamily: body }}
          >
            We do not lock papers behind paywalls. We do not hide referee
            comments. We do not charge thousands of dollars in article-processing
            fees. Open Ratio is publishing infrastructure — designed for the way
            researchers actually work — made of three layers: a preprint server,
            an AI-assisted review pipeline, and an editorial workflow that
            treats every revision as part of the scholarly record.
          </p>

          <div
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[12px] tracking-[0.18em] uppercase"
            style={{ fontFamily: mono, color: MUTED }}
          >
            <span style={{ color: OX }}>Keywords —</span>
            <span>open-access</span>
            <span>preprint</span>
            <span>AI-review</span>
            <span>peer-review</span>
            <span>DOI</span>
            <span>provenance</span>
            <span>versioning</span>
            <span>cc-by-4.0</span>
            <span>reproducibility</span>
            <span>integrity</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function RecentPapers() {
  return (
    <section className="border-b" style={{ borderColor: RULE }}>
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 py-20">
        <SectionHead
          n="03"
          eyebrow="Live · Updated minute by minute"
          title="On the boards today."
          right="View all preprints →"
        />

        <div
          className="mt-12 grid grid-cols-12 border-t"
          style={{ borderColor: "#1a14081a" }}
        >
          <div
            className="col-span-12 grid grid-cols-12 border-b text-[10px] uppercase tracking-[0.3em] py-3"
            style={{ borderColor: "#1a14081a", color: MUTED, fontFamily: mono }}
          >
            <div className="col-span-2 px-1">Identifier</div>
            <div className="col-span-6 px-1">Title</div>
            <div className="col-span-2 px-1 hidden md:block">Field</div>
            <div className="col-span-2 md:col-span-1 px-1">Status</div>
            <div className="col-span-2 md:col-span-1 px-1 text-right">Cite</div>
          </div>

          {recentPapers.map((p) => (
            <article
              key={p.id}
              className="col-span-12 grid grid-cols-12 border-b py-5 group transition-colors hover:bg-[#1a14080a]"
              style={{ borderColor: "#1a14081a" }}
            >
              <div className="col-span-12 md:col-span-2 px-1 flex flex-col">
                <div
                  className="text-[12px] tabular-nums"
                  style={{ fontFamily: mono, color: OX }}
                >
                  {p.id}
                </div>
                <div
                  className="text-[11px] mt-1"
                  style={{ fontFamily: mono, color: MUTED }}
                >
                  {p.cycle} · {p.date}
                </div>
              </div>

              <div className="col-span-12 md:col-span-6 px-1">
                <div
                  className="text-[20px] md:text-[22px] leading-[1.25]"
                  style={{
                    fontFamily: serif,
                    fontWeight: 400,
                    color: INK,
                  }}
                >
                  {p.title}
                </div>
                <div
                  className="mt-1 text-[14px]"
                  style={{ fontFamily: body, color: SOFTINK }}
                >
                  {p.authors}
                </div>
              </div>

              <div className="col-span-6 md:col-span-2 px-1 hidden md:block">
                <span
                  className="text-[12px]"
                  style={{ fontFamily: mono, color: MUTED }}
                >
                  {p.field}
                </span>
              </div>

              <div className="col-span-6 md:col-span-1 px-1">
                <StatusPill status={p.status} />
              </div>

              <div
                className="col-span-6 md:col-span-1 px-1 text-right text-[18px] tabular-nums"
                style={{ fontFamily: serif, color: INK }}
              >
                {p.cite}
              </div>
            </article>
          ))}
        </div>

        <div
          className="mt-8 flex items-center justify-between text-[11px] tracking-[0.28em] uppercase"
          style={{ color: MUTED, fontFamily: mono }}
        >
          <span>14,621 newer · 184,481 older</span>
          <span style={{ color: INK }}>Browse the archive →</span>
        </div>
      </div>
    </section>
  );
}

function StatusPill({ status }: { status: string }) {
  const styles: Record<string, { bg: string; fg: string }> = {
    Draft: { bg: "transparent", fg: MUTED },
    Preprint: { bg: "#e9d8b240", fg: "#6b551d" },
    "AI-reviewed": { bg: "#bcd0e840", fg: "#244266" },
    "Human-reviewed": { bg: "#c9d9bd80", fg: "#2d4a26" },
    Accepted: { bg: "#dac6f240", fg: "#3f235e" },
    Published: { bg: "#0000000d", fg: INK },
  };
  const s = styles[status] ?? styles.Preprint;
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2 py-1 text-[10px] uppercase tracking-[0.22em]"
      style={{
        background: s.bg,
        color: s.fg,
        fontFamily: mono,
        border: `1px solid ${s.fg}30`,
      }}
    >
      <span
        className="inline-block w-1.5 h-1.5 rounded-full"
        style={{ background: s.fg, opacity: 0.6 }}
      />
      {status}
    </span>
  );
}

function SectionHead({
  n,
  eyebrow,
  title,
  right,
}: {
  n: string;
  eyebrow: string;
  title: string;
  right?: string;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <div
          className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase"
          style={{ color: OX, fontFamily: mono }}
        >
          <span>§ {n}</span>
          <span style={{ color: MUTED }}>—</span>
          <span style={{ color: MUTED }}>{eyebrow}</span>
        </div>
        <h2
          className="mt-4 text-[44px] md:text-[68px] leading-[1.02]"
          style={{
            fontFamily: serif,
            fontWeight: 300,
            color: INK,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h2>
      </div>
      {right && (
        <div
          className="text-[12px] tracking-[0.3em] uppercase"
          style={{ color: INK, fontFamily: mono }}
        >
          {right}
        </div>
      )}
    </div>
  );
}

function Workflow() {
  return (
    <section className="border-b" style={{ borderColor: RULE }}>
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 py-24 md:py-32">
        <SectionHead
          n="04"
          eyebrow="The publishing flow"
          title="Manuscript to version of record."
        />

        <div
          className="mt-16 text-[19px] leading-[1.6] max-w-3xl"
          style={{ fontFamily: body, color: SOFTINK }}
        >
          A scientific paper is not a binary — published or not. It is a
          sequence of states, each with its own evidence. Open Ratio makes
          those states first-class. Every transition is a citation, every
          revision is a diff, every reviewer’s remark is part of the public
          record.
        </div>

        <ol className="mt-16 grid grid-cols-12 gap-x-6 gap-y-10 md:gap-y-14">
          {stages.map((s, i) => (
            <li
              key={s.n}
              className="col-span-12 md:col-span-6 lg:col-span-4 relative"
            >
              <div className="flex items-baseline gap-4">
                <span
                  className="text-[14px]"
                  style={{ fontFamily: mono, color: OX }}
                >
                  §{s.n}
                </span>
                <h3
                  className="text-[34px] leading-[1]"
                  style={{
                    fontFamily: serif,
                    fontWeight: 400,
                    color: INK,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.label}
                </h3>
              </div>
              <p
                className="mt-3 text-[16px] leading-[1.55] max-w-sm"
                style={{ color: SOFTINK, fontFamily: body }}
              >
                {s.body}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <StatusPill status={s.detail} />
                {i < stages.length - 1 && (
                  <span
                    className="text-[12px] hidden md:inline"
                    style={{ fontFamily: mono, color: MUTED }}
                  >
                    → next
                  </span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Statuses() {
  const statuses = [
    { name: "Draft", desc: "Private. Yours alone. Versioned from the first save." },
    { name: "Preprint", desc: "Public, citable, time-stamped. Comments invited." },
    { name: "AI-reviewed", desc: "Methods, statistics, references, and integrity assessed." },
    { name: "Human-reviewed", desc: "Invited reviewers; signed or anonymous; comments visible on accept." },
    { name: "Accepted", desc: "Editorial board approves. DOI reserved. Layout begins." },
    { name: "Published", desc: "Typeset, archived, mirrored. The version of record." },
  ];

  return (
    <section
      className="border-b"
      style={{ borderColor: RULE, background: "#ebe2ce80" }}
    >
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 py-20 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <div
            className="text-[11px] tracking-[0.3em] uppercase"
            style={{ color: OX, fontFamily: mono }}
          >
            § 05 — Article state
          </div>
          <h2
            className="mt-3 text-[40px] md:text-[52px] leading-[1] tracking-[-0.02em]"
            style={{ fontFamily: serif, fontWeight: 300, color: INK }}
          >
            Six states. <em style={{ fontWeight: 300 }}>Always</em> visible.
          </h2>
          <p
            className="mt-5 text-[16px] leading-[1.55] max-w-md"
            style={{ color: SOFTINK }}
          >
            Every paper carries its current state — and the transitions that
            brought it there. Citations distinguish between a preprint and the
            version of record automatically.
          </p>
        </div>
        <div className="col-span-12 md:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {statuses.map((s, i) => (
              <div
                key={s.name}
                className="flex gap-4 border-t pt-5"
                style={{ borderColor: "#0000001a" }}
              >
                <div
                  className="text-[14px] tabular-nums w-8"
                  style={{ fontFamily: mono, color: OX }}
                >
                  0{i + 1}
                </div>
                <div className="flex-1">
                  <StatusPill status={s.name} />
                  <p
                    className="mt-3 text-[15px] leading-[1.55]"
                    style={{ color: SOFTINK }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DoiBlock() {
  return (
    <section className="border-b" style={{ borderColor: RULE }}>
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 py-24">
        <SectionHead
          n="06"
          eyebrow="Identifiers · Metadata · Persistence"
          title="A real DOI. A real citation. Forever."
        />

        <div className="mt-14 grid grid-cols-12 gap-8 items-start">
          <article
            className="col-span-12 lg:col-span-7 border p-8 md:p-12 relative"
            style={{ borderColor: "#1a14081a", background: "#fdfaf0" }}
          >
            <div
              className="absolute -top-3 left-8 px-3 py-1 text-[10px] uppercase tracking-[0.3em]"
              style={{
                background: PAPER,
                color: OX,
                fontFamily: mono,
                border: `1px solid ${OX}`,
              }}
            >
              Version of record
            </div>
            <div
              className="text-[11px] tracking-[0.28em] uppercase"
              style={{ color: MUTED, fontFamily: mono }}
            >
              Open Ratio · cs.LG · 2605.10617v4
            </div>
            <h3
              className="mt-3 text-[32px] md:text-[40px] leading-[1.05]"
              style={{
                fontFamily: serif,
                fontWeight: 400,
                color: INK,
                letterSpacing: "-0.01em",
              }}
            >
              Cartilage Repair via Light&#x2011;Activated Hydrogels: A Phase&#x2011;2
              Open Trial
            </h3>
            <div
              className="mt-3 text-[16px] leading-[1.5]"
              style={{ color: SOFTINK }}
            >
              <em>F. Adesanmi, T. M. Brennan, M. Kovac, D. R. Hosseini.</em>{" "}
              Open Ratio Journal of Open Bioengineering, 1(4), 117–142.
            </div>
            <div
              className="mt-6 grid grid-cols-6 gap-x-6 gap-y-5 text-[12.5px]"
              style={{ fontFamily: mono, color: SOFTINK }}
            >
              <FieldGrid span={6} k="DOI" v="10.84121/openratio.2605.10617" v2="(persistent · resolves to v4)" />
              <FieldGrid span={2} k="Published" v="May 7 2026" />
              <FieldGrid span={2} k="License" v="CC BY 4.0" />
              <FieldGrid span={2} k="Citations" v="117" v2="(growing)" />
              <FieldGrid span={2} k="Versions" v="v1 v2 v3 v4" v2="(history)" />
              <FieldGrid span={2} k="Mirrors" v="3 of 3" v2="(active)" />
              <FieldGrid span={2} k="Format" v="HTML · PDF · XML" />
            </div>
            <div
              className="mt-8 p-5 border-l-2 text-[14px] leading-[1.6] italic"
              style={{ borderColor: OX, color: SOFTINK, fontFamily: body }}
            >
              “Patient-reported outcomes at 26 weeks suggest that
              light-activated hydrogels may offer a meaningful improvement in
              cartilage repair over saline controls…”
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn>Read PDF</Btn>
              <Btn>HTML view</Btn>
              <Btn>BibTeX</Btn>
              <Btn>Cite</Btn>
              <Btn variant="primary">Open referee report</Btn>
            </div>
          </article>

          <div className="col-span-12 lg:col-span-5 grid gap-5">
            <Card
              eyebrow="Citation, ready to paste"
              title="BibTeX"
              body={
                <pre
                  className="text-[12px] leading-[1.6] whitespace-pre-wrap"
                  style={{ fontFamily: mono, color: INK }}
                >
{`@article{adesanmi2026cartilage,
  title  = {Cartilage Repair via Light-Activated
            Hydrogels: A Phase-2 Open Trial},
  author = {F. Adesanmi and T. M. Brennan and
            M. Kovac and D. R. Hosseini},
  journal = {Open Ratio Journal of Open
             Bioengineering},
  volume = {1},
  number = {4},
  pages  = {117--142},
  year   = {2026},
  doi    = {10.84121/openratio.2605.10617},
  url    = {https://openratio.org/2605.10617v4}
}`}
                </pre>
              }
            />

            <Card
              eyebrow="Versions · Public history"
              title="Changelog"
              body={
                <ul className="text-[14px] space-y-3" style={{ color: SOFTINK }}>
                  <li className="flex gap-3">
                    <span style={{ color: OX, fontFamily: mono }} className="w-10">v4</span>
                    <span>Final typeset; reproducibility data attached.</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: OX, fontFamily: mono }} className="w-10">v3</span>
                    <span>Reviewer 2 comments addressed; new Fig. 6.</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: OX, fontFamily: mono }} className="w-10">v2</span>
                    <span>AI integrity pass; corrected stats table.</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: OX, fontFamily: mono }} className="w-10">v1</span>
                    <span>Initial preprint posted 04 Apr 2026.</span>
                  </li>
                </ul>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FieldGrid({
  k,
  v,
  v2,
  span,
}: {
  k: string;
  v: string;
  v2?: string;
  span: number;
}) {
  return (
    <div
      className="leading-tight"
      style={{ gridColumn: `span ${span} / span ${span}` }}
    >
      <div
        className="text-[10px] uppercase tracking-[0.28em]"
        style={{ color: MUTED }}
      >
        {k}
      </div>
      <div className="mt-1 truncate" style={{ color: INK }}>
        {v}
      </div>
      {v2 && (
        <div className="text-[11px]" style={{ color: MUTED }}>
          {v2}
        </div>
      )}
    </div>
  );
}

function Card({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div
      className="border p-6"
      style={{ borderColor: "#1a14081a", background: "#fdfaf0" }}
    >
      <div
        className="text-[10px] uppercase tracking-[0.3em]"
        style={{ color: OX, fontFamily: mono }}
      >
        {eyebrow}
      </div>
      <div
        className="mt-2 text-[24px]"
        style={{ fontFamily: serif, fontWeight: 400, color: INK }}
      >
        {title}
      </div>
      <div className="mt-4">{body}</div>
    </div>
  );
}

function Btn({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "primary";
}) {
  if (variant === "primary") {
    return (
      <button
        className="px-4 py-2 text-[12px] uppercase tracking-[0.28em]"
        style={{ background: INK, color: PAPER, fontFamily: mono }}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      className="px-4 py-2 text-[12px] uppercase tracking-[0.28em] border"
      style={{ borderColor: INK, color: INK, fontFamily: mono }}
    >
      {children}
    </button>
  );
}

function Reviewers() {
  const flow = [
    {
      side: "AI",
      title: "Methodology & integrity assessment",
      lines: [
        "Methods reproducibility: passes 9/10 reproducibility checks.",
        "Statistical robustness: 2 minor concerns flagged.",
        "Reference graph: 187 cited, 0 retracted, 3 broken DOIs (auto-fixed).",
        "Originality search across 41M papers: 99.4% novel; 0.6% prior-work overlap.",
        "Authorship verified · ORCIDs match · No undisclosed COIs.",
      ],
    },
    {
      side: "Human",
      title: "Reviewer 2 — signed",
      lines: [
        "“The phase-2 design is well-justified; controls are appropriate.”",
        "“Suggest expanding the discussion of long-term retention (>6 months).”",
        "“Figure 6 should report individual subject trajectories.”",
        "Recommendation: Minor revision.",
        "Identity disclosed · Made public on accept.",
      ],
    },
  ];

  return (
    <section className="border-b" style={{ borderColor: RULE }}>
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 py-24">
        <SectionHead
          n="07"
          eyebrow="Two passes — one record"
          title="AI review, then human review."
        />

        <p
          className="mt-10 max-w-3xl text-[19px] leading-[1.6]"
          style={{ fontFamily: body, color: SOFTINK }}
        >
          Open Ratio asks the model to do what models are good at — surface
          methodological flaws, check statistics, search the literature, verify
          authorship, flag undisclosed conflicts — so reviewers can spend their
          time on the things that need a person: judgement, taste, and
          significance.
        </p>

        <div className="mt-14 grid grid-cols-12 gap-6">
          {flow.map((b, i) => (
            <div
              key={b.side}
              className="col-span-12 md:col-span-6 border p-7 md:p-9 relative"
              style={{
                borderColor: "#1a14081a",
                background: i === 0 ? "#fdfaf0" : "#fbf6e7",
              }}
            >
              <div
                className="absolute top-7 right-7 text-[10px] tracking-[0.3em] uppercase"
                style={{ color: OX, fontFamily: mono }}
              >
                {i === 0 ? "AI · automated" : "Human · invited"}
              </div>
              <div
                className="text-[12px] tracking-[0.3em] uppercase"
                style={{ color: MUTED, fontFamily: mono }}
              >
                Pass {i + 1}
              </div>
              <h3
                className="mt-2 text-[32px] leading-[1.05]"
                style={{
                  fontFamily: serif,
                  fontWeight: 400,
                  color: INK,
                  letterSpacing: "-0.01em",
                }}
              >
                {b.title}
              </h3>
              <ul
                className="mt-5 space-y-3"
                style={{ color: SOFTINK, fontFamily: body }}
              >
                {b.lines.map((l, idx) => (
                  <li
                    key={idx}
                    className="text-[15px] leading-[1.55] flex gap-3"
                  >
                    <span
                      className="mt-2 inline-block w-3 h-px"
                      style={{ background: OX }}
                    />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
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
      title: "Attribution",
      blurb:
        "Anyone may share and adapt for any purpose, including commercial, with credit.",
      use: "The default for most authors.",
    },
    {
      tag: "CC BY-NC",
      title: "Non-commercial",
      blurb: "Share and adapt freely for non-commercial use, with attribution.",
      use: "Studies funded by non-profit grants.",
    },
    {
      tag: "CC BY-SA",
      title: "Share-alike",
      blurb: "Adaptations must be released under the same open license.",
      use: "When you want derivatives to remain open.",
    },
  ];

  return (
    <section
      className="border-b"
      style={{ borderColor: RULE, background: "#ebe2ce80" }}
    >
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 py-24">
        <SectionHead
          n="08"
          eyebrow="Licensing · Author choice"
          title="Open licenses, author-controlled."
        />

        <div className="mt-12 grid grid-cols-12 gap-6">
          {licenses.map((l) => (
            <div
              key={l.tag}
              className="col-span-12 md:col-span-4 border p-7"
              style={{ borderColor: "#1a14081a", background: "#fdfaf0" }}
            >
              <div
                className="inline-flex px-2 py-1 text-[10px] uppercase tracking-[0.3em]"
                style={{ background: INK, color: PAPER, fontFamily: mono }}
              >
                {l.tag}
              </div>
              <div
                className="mt-5 text-[28px]"
                style={{ fontFamily: serif, fontWeight: 400, color: INK }}
              >
                {l.title}
              </div>
              <p
                className="mt-3 text-[15px] leading-[1.6]"
                style={{ color: SOFTINK }}
              >
                {l.blurb}
              </p>
              <div
                className="mt-5 pt-4 border-t text-[12px]"
                style={{
                  borderColor: "#1a14081a",
                  color: OX,
                  fontFamily: mono,
                }}
              >
                {l.use}
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-10 text-[14px] leading-[1.6] max-w-3xl"
          style={{ color: SOFTINK, fontFamily: body }}
        >
          Open Ratio never holds copyright. <em>Authors retain copyright</em>,
          choose a license at submission, and may relicense at any time. Funder
          and institutional mandates — Plan&nbsp;S, NIH, ERC, FAIR — are
          satisfied by default.
        </div>
      </div>
    </section>
  );
}

function Audiences() {
  const audiences = [
    {
      who: "Authors",
      pretty: "—  for authors  —",
      points: [
        "Submit in your tool of choice — LaTeX, Markdown, or PDF.",
        "Your manuscript is private until you press Publish.",
        "AI surfaces defects before reviewers see them.",
        "Threaded responses to every reviewer comment.",
        "DOI within minutes of acceptance, not months.",
        "All revisions are public — no hidden changes after the fact.",
      ],
    },
    {
      who: "Readers",
      pretty: "—  for readers  —",
      points: [
        "Free, open, no paywall, no registration required.",
        "HTML, PDF, plain-text, machine-readable JATS XML.",
        "Read every reviewer comment, every revision diff.",
        "Linked to data, code, and supplementary materials.",
        "Mirrored in three regions; long-term access guaranteed.",
        "Cite the version you read; the URL never breaks.",
      ],
    },
    {
      who: "Reviewers & Editors",
      pretty: "—  for reviewers  —",
      points: [
        "AI does the boilerplate so you spend time on judgement.",
        "Sign your review or stay anonymous, your choice.",
        "Earn verifiable credit for every review you complete.",
        "Editorial board is paid, transparent, and elected.",
        "Decisions and timeline are visible to authors live.",
        "No more chasing reviewers — pre-committed timelines.",
      ],
    },
  ];

  return (
    <section className="border-b" style={{ borderColor: RULE }}>
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 py-24">
        <SectionHead
          n="09"
          eyebrow="Three audiences"
          title="A platform that takes everyone seriously."
        />

        <div className="mt-14 grid grid-cols-12 gap-x-10 gap-y-14">
          {audiences.map((a) => (
            <div key={a.who} className="col-span-12 md:col-span-4">
              <div
                className="text-[12px] uppercase tracking-[0.3em]"
                style={{ color: OX, fontFamily: mono }}
              >
                {a.pretty}
              </div>
              <h3
                className="mt-2 text-[44px] leading-[1]"
                style={{ fontFamily: serif, fontWeight: 300, color: INK }}
              >
                {a.who}.
              </h3>
              <ol className="mt-6 space-y-4">
                {a.points.map((p, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[15.5px] leading-[1.55]"
                    style={{ color: SOFTINK }}
                  >
                    <span
                      className="text-[11px] mt-2"
                      style={{ fontFamily: mono, color: OX }}
                    >
                      0{i + 1}
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

function Integrity() {
  const checks = [
    {
      h: "Spam & meaningless content",
      p: "Aggressive filtering for AI-generated nonsense, citation farms, and content that fails basic coherence checks. Manual editorial gate for borderline cases.",
    },
    {
      h: "Plagiarism",
      p: "Whole-corpus similarity check across 41M papers and 8M arXiv preprints, with overlap visualisations and exoneration paths for legitimate self-citation.",
    },
    {
      h: "Unethical content",
      p: "IRB / ERB declarations required for human and animal subject research; signed at submission and surfaced in the final article header.",
    },
    {
      h: "Fake authors",
      p: "ORCID + institution verification + reverse-search for author histories. Sock-puppet detection on review patterns. Public retraction record.",
    },
    {
      h: "Conflicts of interest",
      p: "Co-authorship and funding graphs are checked at submission and at review assignment. Editors cannot review their own collaborators.",
    },
    {
      h: "Long-term integrity",
      p: "Three geographically distributed mirrors; checksums published; cryptographic timestamps. The version of record cannot quietly change.",
    },
  ];

  return (
    <section className="border-b" style={{ borderColor: RULE }}>
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 py-24">
        <SectionHead
          n="10"
          eyebrow="Integrity"
          title="A scholarly record only matters if it can be trusted."
        />

        <div className="mt-14 grid grid-cols-12 gap-x-8 gap-y-10">
          {checks.map((c, i) => (
            <div
              key={c.h}
              className="col-span-12 md:col-span-6 lg:col-span-4 border-t pt-6"
              style={{ borderColor: "#1a14081a" }}
            >
              <div className="flex items-baseline gap-3">
                <span
                  className="text-[12px] tabular-nums"
                  style={{ fontFamily: mono, color: OX }}
                >
                  10.{String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="text-[24px] leading-[1.1]"
                  style={{ fontFamily: serif, fontWeight: 400, color: INK }}
                >
                  {c.h}
                </h3>
              </div>
              <p
                className="mt-3 text-[15px] leading-[1.6]"
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

function CTA() {
  return (
    <section
      className="border-b"
      style={{ borderColor: RULE, background: "#ebe2ce" }}
    >
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 py-28 md:py-36 text-center">
        <div
          className="text-[11px] tracking-[0.42em] uppercase"
          style={{ color: OX, fontFamily: mono }}
        >
          The next century of publishing
        </div>
        <h2
          className="mt-6 text-[64px] md:text-[120px] leading-[0.92]"
          style={{
            fontFamily: serif,
            fontWeight: 300,
            color: INK,
            letterSpacing: "-0.025em",
          }}
        >
          Submit a manuscript.
          <br />
          <span style={{ fontStyle: "italic", color: OX }}>
            Start with a preprint.
          </span>
        </h2>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Btn variant="primary">Submit a manuscript</Btn>
          <Btn>Start with a preprint</Btn>
          <Btn>Explore published research</Btn>
        </div>

        <div
          className="mt-10 max-w-2xl mx-auto text-[14px] leading-[1.6]"
          style={{ color: SOFTINK }}
        >
          No subscription. No paywall. No article-processing charges for the
          first 12 months. Open Ratio is supported by libraries, foundations,
          and a small per-author fee scaled by region. Read more in the{" "}
          <em>governance charter</em>.
        </div>
      </div>
    </section>
  );
}

function Colophon() {
  return (
    <footer className="pt-20 pb-12">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <div
              className="text-[26px] tracking-[0.06em]"
              style={{ fontFamily: serif, fontWeight: 400, color: INK }}
            >
              <span style={{ fontWeight: 500 }}>OPEN</span>
              <span style={{ fontStyle: "italic", fontWeight: 300 }}> ratio</span>
            </div>
            <p
              className="mt-4 text-[14px] leading-[1.6] max-w-sm"
              style={{ color: SOFTINK }}
            >
              An open-access publishing platform built around preprints,
              transparent peer review, and a permanent version of record.
            </p>
          </div>
          <div
            className="col-span-12 md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-[12px]"
            style={{ fontFamily: mono, color: SOFTINK }}
          >
            <FooterCol
              title="Platform"
              links={["Submit", "Browse", "Reviewers", "Editors"]}
            />
            <FooterCol
              title="Identifiers"
              links={["DOI", "ORCID", "ROR", "Crossref"]}
            />
            <FooterCol
              title="Open"
              links={["Governance", "Code", "API", "Mirrors"]}
            />
            <FooterCol
              title="Contact"
              links={["editorial@", "press@", "Status", "Donate"]}
            />
          </div>
        </div>
        <div
          className="mt-14 pt-6 border-t flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] tracking-[0.28em] uppercase"
          style={{ borderColor: "#0000001a", color: MUTED, fontFamily: mono }}
        >
          <span>© Open Ratio Foundation · 2026</span>
          <span>Released under CC BY 4.0</span>
          <span>ISSN 3088-7142 · Volume I</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="uppercase tracking-[0.28em] mb-3" style={{ color: OX }}>
        {title}
      </div>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l} style={{ color: SOFTINK }}>
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
}
