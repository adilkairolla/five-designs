import { Link } from "react-router-dom";

const BG = "#0e1013";
const SURFACE = "#16191e";
const SURFACE_2 = "#1d2128";
const SURFACE_3 = "#252a33";
const BORDER = "#272c36";
const BORDER_2 = "#373d49";
const TEXT = "#e9e6df";
const TEXT_2 = "#9b988e";
const TEXT_3 = "#5d5b56";
const SAFFRON = "#ff7a3d";
const SAFFRON_DIM = "#7a3a1d";
const SUCCESS = "#5be397";
const WARN = "#ffd45a";
const DANGER = "#ff5c5c";
const VIOLET = "#a886c7";
const TEAL = "#5fcfd3";

const display = '"Bricolage Grotesque", ui-sans-serif, sans-serif';
const body = '"Inter Tight", ui-sans-serif, sans-serif';
const mono = '"IBM Plex Mono", ui-monospace, monospace';
const serif = '"Fraunces", ui-serif, Georgia, serif';

export function Design5() {
  return (
    <div
      className="min-h-screen relative"
      style={{ background: BG, color: TEXT, fontFamily: body }}
    >
      <Backdrop />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <PipelineBoard />
        <ManuscriptDetail />
        <Timeline />
        <Versions />
        <LicenseControl />
        <Comparison />
        <ActivityLog />
        <Tiers />
        <Audiences />
        <CTA />
        <Foot />
      </div>
    </div>
  );
}

function Backdrop() {
  return (
    <>
      <svg
        aria-hidden
        className="pointer-events-none fixed inset-0 w-full h-full opacity-[0.20]"
        style={{ zIndex: 0 }}
      >
        <defs>
          <pattern id="g5" width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="#272c36"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#g5)" />
      </svg>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          zIndex: 0,
          background:
            "radial-gradient(700px 460px at 80% -5%, rgba(255,122,61,0.10) 0%, transparent 60%), radial-gradient(800px 600px at 0% 80%, rgba(95,207,211,0.06) 0%, transparent 60%)",
        }}
      />
    </>
  );
}

function Nav() {
  return (
    <header
      className="border-b sticky top-0 z-40"
      style={{
        borderColor: BORDER,
        background: "rgba(14,16,19,0.85)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
            <span
              className="text-[14px] tracking-[-0.01em]"
              style={{ fontFamily: display, fontWeight: 700 }}
            >
              Open Ratio
            </span>
          </Link>
          <span
            className="ml-2 mr-1 text-[12px] px-2 py-0.5 rounded"
            style={{
              background: SURFACE_2,
              border: `1px solid ${BORDER}`,
              color: TEXT_2,
              fontFamily: mono,
            }}
          >
            v0.4 · public beta
          </span>
        </div>
        <nav
          className="hidden md:flex items-center gap-6 text-[13px]"
          style={{ color: TEXT_2 }}
        >
          <a href="#workflow" className="hover:text-white">Workflow</a>
          <a href="#review" className="hover:text-white">Review</a>
          <a href="#identifiers" className="hover:text-white">Identifiers</a>
          <a href="#license" className="hover:text-white">License</a>
          <a href="#tiers" className="hover:text-white">Tiers</a>
          <a href="#audit" className="hover:text-white">Audit</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            className="hidden md:inline text-[13px]"
            style={{ color: TEXT_2 }}
            href="#"
          >
            Sign in
          </a>
          <a
            className="px-3.5 py-2 rounded-md text-[13px] inline-flex items-center gap-2"
            style={{
              background: SAFFRON,
              color: BG,
              fontWeight: 600,
            }}
            href="#"
          >
            Submit a manuscript <span>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect width="20" height="20" rx="5" fill={SAFFRON} />
      <text
        x="10"
        y="14.5"
        textAnchor="middle"
        fontSize="13"
        fontFamily="Bricolage Grotesque"
        fontWeight="800"
        fill={BG}
      >
        ⊺
      </text>
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8 pt-12 lg:pt-16 pb-10 grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-5">
          <div
            className="text-[11px] tracking-[0.3em] uppercase flex items-center gap-3"
            style={{ color: SAFFRON, fontFamily: mono }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{
                background: SAFFRON,
                boxShadow: `0 0 10px ${SAFFRON}`,
              }}
            />
            <span>The publishing OS</span>
          </div>
          <h1
            className="mt-6"
            style={{
              fontFamily: display,
              fontSize: "clamp(48px, 6.4vw, 92px)",
              lineHeight: 0.98,
              letterSpacing: "-0.025em",
              fontWeight: 600,
            }}
          >
            Run your{" "}
            <span style={{ color: SAFFRON }}>journal</span>{" "}
            like a <span style={{ fontFamily: serif, fontStyle: "italic", fontWeight: 300 }}>product</span>.
          </h1>

          <p
            className="mt-6 text-[17px] leading-[1.6] max-w-xl"
            style={{ color: TEXT_2 }}
          >
            Open Ratio is the operating system for open-access publishing &mdash; a
            single tool for authors, reviewers, and editors that handles
            manuscripts, AI review, peer review, revisions, DOI registration,
            licensing, and the version of record.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-y-5 gap-x-6">
            {[
              ["Submit", "LaTeX · Markdown · PDF"],
              ["AI review", "92 seconds, 6 axes"],
              ["Human review", "11-day median"],
              ["Publish", "DOI · CC BY 4.0"],
            ].map(([k, v]) => (
              <div key={k}>
                <div
                  className="text-[11px] tracking-[0.28em] uppercase"
                  style={{ color: TEXT_3, fontFamily: mono }}
                >
                  {k}
                </div>
                <div
                  className="mt-1.5 text-[16px]"
                  style={{ color: TEXT, fontFamily: body, fontWeight: 500 }}
                >
                  {v}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <PrimaryBtn>Submit a manuscript</PrimaryBtn>
            <SecondaryBtn>Watch the demo</SecondaryBtn>
            <span className="text-[12px] ml-2" style={{ color: TEXT_3, fontFamily: mono }}>
              ↘ free for the first year
            </span>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}

function PrimaryBtn({ children }: { children: React.ReactNode }) {
  return (
    <a
      className="px-4 py-2.5 rounded-md text-[13px] inline-flex items-center gap-2"
      style={{ background: SAFFRON, color: BG, fontWeight: 600 }}
      href="#"
    >
      {children} <span>→</span>
    </a>
  );
}

function SecondaryBtn({ children }: { children: React.ReactNode }) {
  return (
    <a
      className="px-4 py-2.5 rounded-md text-[13px] inline-flex items-center gap-2 border"
      style={{ borderColor: BORDER_2, color: TEXT, background: SURFACE }}
      href="#"
    >
      {children}
    </a>
  );
}

function DashboardMock() {
  return (
    <div
      className="rounded-xl border overflow-hidden relative"
      style={{
        borderColor: BORDER,
        background: SURFACE,
        boxShadow: "0 30px 80px -30px rgba(0,0,0,0.7)",
      }}
    >
      {/* window chrome */}
      <div
        className="flex items-center justify-between px-3 py-2 border-b"
        style={{ borderColor: BORDER, background: SURFACE_2 }}
      >
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
          <span
            className="ml-3 text-[11px] px-2 py-0.5 rounded"
            style={{ background: SURFACE, color: TEXT_2, fontFamily: mono }}
          >
            ratio.openratio.org / workspace / nature-bio
          </span>
        </div>
        <span
          className="text-[10px] tracking-[0.28em] uppercase"
          style={{ color: TEXT_3, fontFamily: mono }}
        >
          ⌘K
        </span>
      </div>

      <div className="grid grid-cols-12">
        {/* sidebar */}
        <div
          className="col-span-2 border-r p-3 hidden md:block"
          style={{ borderColor: BORDER }}
        >
          <div
            className="px-2 py-1.5 rounded-md flex items-center gap-2 text-[12px] mb-1"
            style={{ background: SURFACE_2, color: TEXT }}
          >
            <span style={{ color: SAFFRON }}>●</span>
            Inbox <span className="ml-auto" style={{ color: TEXT_3 }}>14</span>
          </div>
          <SidebarItem icon="◎" label="Manuscripts" count={47} active />
          <SidebarItem icon="✦" label="AI Reviews" count={12} />
          <SidebarItem icon="◑" label="In review" count={8} />
          <SidebarItem icon="◐" label="Revisions" count={3} />
          <SidebarItem icon="◉" label="Accepted" count={6} />
          <SidebarItem icon="●" label="Published" count={184} />
          <div
            className="mt-4 pt-3 border-t text-[10px] tracking-[0.3em] uppercase"
            style={{ borderColor: BORDER, color: TEXT_3, fontFamily: mono }}
          >
            People
          </div>
          <SidebarItem icon="◇" label="Authors" />
          <SidebarItem icon="□" label="Reviewers" />
          <SidebarItem icon="◈" label="Editors" />
        </div>

        {/* main */}
        <div className="col-span-12 md:col-span-10 p-4">
          <div
            className="flex items-center justify-between mb-4 text-[12px]"
            style={{ color: TEXT_2 }}
          >
            <div className="flex items-center gap-3">
              <span style={{ color: TEXT, fontWeight: 500 }}>Manuscripts</span>
              <span style={{ color: TEXT_3 }}>/</span>
              <span>All</span>
              <span
                className="ml-3 px-2 py-0.5 rounded text-[10px] tracking-[0.28em] uppercase"
                style={{ background: SURFACE_2, color: TEXT_3, fontFamily: mono }}
              >
                kanban
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span style={{ color: TEXT_3 }}>filter</span>
              <span
                className="px-2 py-0.5 rounded"
                style={{
                  background: SAFFRON_DIM + "60",
                  color: SAFFRON,
                  fontFamily: mono,
                  fontSize: 11,
                }}
              >
                state: in-review
              </span>
            </div>
          </div>

          {/* kanban */}
          <div className="grid grid-cols-12 gap-3">
            {[
              {
                col: "Preprint",
                color: WARN,
                cards: [
                  { id: "2605.12011", t: "Quantum-Classical Coupling", who: "Park +2", v: "v1" },
                  { id: "2605.10999", t: "Type-Level Effects", who: "Hofstadter +1", v: "v1" },
                ],
              },
              {
                col: "AI-reviewed",
                color: VIOLET,
                cards: [
                  { id: "2605.11842", t: "Sparse Mixture Routing", who: "Alaoui +2", v: "v3", highlight: true },
                  { id: "2605.11900", t: "What Counts as a Discipline", who: "Berisha", v: "v1" },
                ],
              },
              {
                col: "In review",
                color: TEAL,
                cards: [
                  { id: "2605.10617", t: "Cartilage Repair", who: "Adesanmi +3", v: "v3", reviewers: ["LH", "MP", "RO"] },
                ],
              },
              {
                col: "Accepted",
                color: SAFFRON,
                cards: [
                  { id: "2605.10488", t: "Anomalous Diffusion", who: "Aboud +1", v: "v5" },
                ],
              },
              {
                col: "Published",
                color: SUCCESS,
                cards: [
                  { id: "2605.09241", t: "Bioactive Coatings", who: "Hong +2", v: "v3", doi: "10.84121/...09241" },
                ],
              },
            ].map((c) => (
              <div
                key={c.col}
                className="col-span-12 sm:col-span-6 lg:col-span-2 rounded-lg border p-2.5 flex flex-col gap-2 min-w-0"
                style={{ borderColor: BORDER, background: SURFACE_2 }}
              >
                <div className="mb-1">
                  <div
                    className="text-[9px] tracking-[0.18em] uppercase flex items-center gap-1.5"
                    style={{ color: c.color, fontFamily: mono }}
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: c.color, boxShadow: `0 0 8px ${c.color}80` }}
                    />
                    <span>{c.col}</span>
                    <span className="ml-auto" style={{ color: TEXT_3 }}>
                      {c.cards.length}
                    </span>
                  </div>
                </div>
                {c.cards.map((card) => (
                  <KanbanCard key={card.id + card.v} c={card as never} />
                ))}
              </div>
            ))}
          </div>

          <div
            className="mt-5 grid grid-cols-12 gap-3"
          >
            <MiniMetric col={3} k="Throughput" v="42" sub="papers / mo · ↑ 18%" tone="up" />
            <MiniMetric col={3} k="Median review" v="11d" sub="↓ from 38d" tone="up" />
            <MiniMetric col={3} k="Composite avg" v="86.4" sub="100-axis" />
            <MiniMetric col={3} k="DOI registered" v="184" sub="this year" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({
  icon,
  label,
  count,
  active,
}: {
  icon: string;
  label: string;
  count?: number;
  active?: boolean;
}) {
  return (
    <div
      className="px-2 py-1.5 rounded-md flex items-center gap-2 text-[12px] mb-0.5"
      style={{ color: active ? TEXT : TEXT_2, background: active ? SURFACE_3 : "transparent" }}
    >
      <span style={{ color: active ? SAFFRON : TEXT_3 }}>{icon}</span>
      {label}
      {count !== undefined && (
        <span className="ml-auto" style={{ color: TEXT_3, fontFamily: mono, fontSize: 11 }}>
          {count}
        </span>
      )}
    </div>
  );
}

function KanbanCard({
  c,
}: {
  c: {
    id: string;
    t: string;
    who: string;
    v: string;
    highlight?: boolean;
    reviewers?: string[];
    doi?: string;
  };
}) {
  return (
    <div
      className="rounded-md p-2.5 border"
      style={{
        background: c.highlight ? SURFACE_3 : SURFACE,
        borderColor: c.highlight ? `${SAFFRON}40` : BORDER,
        boxShadow: c.highlight ? `0 0 18px ${SAFFRON}10` : "none",
      }}
    >
      <div className="flex items-center justify-between text-[10px]" style={{ color: TEXT_3, fontFamily: mono }}>
        <span>{c.id}</span>
        <span style={{ color: c.highlight ? SAFFRON : TEXT_3 }}>{c.v}</span>
      </div>
      <div className="mt-1 text-[12.5px] leading-[1.25]" style={{ color: TEXT, fontWeight: 500 }}>
        {c.t}
      </div>
      <div className="mt-1.5 text-[11px]" style={{ color: TEXT_2 }}>
        {c.who}
      </div>
      {c.reviewers && (
        <div className="mt-2 flex -space-x-1.5">
          {c.reviewers.map((r) => (
            <span
              key={r}
              className="inline-flex items-center justify-center w-5 h-5 rounded-full text-[8px]"
              style={{
                background: SURFACE_3,
                border: `1px solid ${BORDER_2}`,
                color: TEXT,
                fontFamily: mono,
              }}
            >
              {r}
            </span>
          ))}
        </div>
      )}
      {c.doi && (
        <div className="mt-2 text-[10px]" style={{ color: SUCCESS, fontFamily: mono }}>
          ✓ {c.doi}
        </div>
      )}
    </div>
  );
}

function MiniMetric({
  col,
  k,
  v,
  sub,
  tone,
}: {
  col: number;
  k: string;
  v: string;
  sub: string;
  tone?: "up" | "down";
}) {
  return (
    <div
      className="rounded-lg border p-3"
      style={{
        gridColumn: `span ${col} / span ${col}`,
        borderColor: BORDER,
        background: SURFACE_2,
      }}
    >
      <div
        className="text-[10px] tracking-[0.28em] uppercase"
        style={{ color: TEXT_3, fontFamily: mono }}
      >
        {k}
      </div>
      <div
        className="mt-1.5 text-[24px]"
        style={{ fontFamily: display, color: TEXT, fontWeight: 600, letterSpacing: "-0.02em" }}
      >
        {v}
      </div>
      <div
        className="mt-0.5 text-[11px]"
        style={{ color: tone === "up" ? SUCCESS : TEXT_3, fontFamily: mono }}
      >
        {sub}
      </div>
    </div>
  );
}

function PipelineBoard() {
  const cols = [
    {
      col: "Draft",
      sub: "Private",
      color: TEXT_2,
      count: 27,
      cards: [
        { id: "DRAFT-118", t: "Untitled · paper outline", who: "You", v: "" },
        { id: "DRAFT-117", t: "Replication of Tomasello 2019", who: "You", v: "" },
      ],
    },
    {
      col: "Preprint",
      sub: "Public",
      color: WARN,
      count: 412,
      cards: [
        { id: "2605.12011", t: "Quantum-Classical Coupling in NV Diamond", who: "Park +2", v: "v1" },
        { id: "2605.11999", t: "Methane Plumes from Permafrost", who: "Hong +3", v: "v2" },
      ],
    },
    {
      col: "AI-reviewed",
      sub: "Findings ready",
      color: VIOLET,
      count: 84,
      cards: [
        { id: "2605.11842", t: "Sparse Mixture Routing", who: "Alaoui +2", v: "v3", composite: "89.2" },
        { id: "2605.11900", t: "What Counts as a Discipline", who: "Berisha", v: "v1", composite: "76.1" },
      ],
    },
    {
      col: "Human review",
      sub: "In flight",
      color: TEAL,
      count: 31,
      cards: [
        { id: "2605.10617", t: "Cartilage Repair via Hydrogels", who: "Adesanmi +3", v: "v3", round: 2 },
        { id: "2605.10999", t: "Type-Level Effects in Total FP", who: "Hofstadter +1", v: "v1", round: 1 },
      ],
    },
    {
      col: "Accepted",
      sub: "DOI reserved",
      color: SAFFRON,
      count: 12,
      cards: [
        { id: "2605.10488", t: "Anomalous Diffusion in Granular Media", who: "Aboud +1", v: "v5" },
      ],
    },
    {
      col: "Published",
      sub: "Version of record",
      color: SUCCESS,
      count: 184,
      cards: [
        { id: "2605.10617", t: "Cartilage Repair via Hydrogels", who: "Adesanmi +3", v: "v4", doi: true },
        { id: "2605.10488", t: "Anomalous Diffusion", who: "Aboud +1", v: "v6", doi: true },
      ],
    },
  ];

  return (
    <section
      id="workflow"
      className="border-y"
      style={{ borderColor: BORDER }}
    >
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8 py-24 md:py-32">
        <SectionHead
          n="01"
          tag="workflow · the pipeline"
          title="The pipeline, board view."
          right="Live · 758 manuscripts"
        />

        <div className="mt-12 overflow-x-auto -mx-5 lg:-mx-8 px-5 lg:px-8">
          <div className="grid grid-cols-6 gap-4 min-w-[1100px]">
            {cols.map((c) => (
              <div
                key={c.col}
                className="rounded-xl border p-3 flex flex-col gap-3"
                style={{
                  borderColor: BORDER,
                  background: SURFACE,
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div
                      className="text-[11px] tracking-[0.28em] uppercase flex items-center gap-2"
                      style={{ color: c.color, fontFamily: mono }}
                    >
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full"
                        style={{
                          background: c.color,
                          boxShadow: `0 0 8px ${c.color}80`,
                        }}
                      />
                      {c.col}
                    </div>
                    <div
                      className="text-[11px]"
                      style={{ color: TEXT_3, fontFamily: mono }}
                    >
                      {c.sub}
                    </div>
                  </div>
                  <span
                    className="text-[12px] tabular-nums"
                    style={{ color: TEXT_2, fontFamily: mono }}
                  >
                    {c.count}
                  </span>
                </div>

                {c.cards.map((card) => (
                  <BoardCard key={card.id + card.v} card={card as never} />
                ))}

                <button
                  className="text-[11px] py-2 rounded-md border-dashed border"
                  style={{
                    borderColor: BORDER_2,
                    color: TEXT_3,
                    fontFamily: mono,
                    background: "transparent",
                  }}
                >
                  + add manuscript
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BoardCard({
  card,
}: {
  card: {
    id: string;
    t: string;
    who: string;
    v: string;
    composite?: string;
    round?: number;
    doi?: boolean;
  };
}) {
  return (
    <div
      className="rounded-md border p-3"
      style={{ borderColor: BORDER, background: SURFACE_2 }}
    >
      <div className="flex items-center justify-between text-[10.5px]" style={{ color: TEXT_3, fontFamily: mono }}>
        <span>{card.id}</span>
        <span style={{ color: TEXT_2 }}>{card.v}</span>
      </div>
      <div className="mt-1 text-[13.5px] leading-[1.3]" style={{ color: TEXT, fontWeight: 500 }}>
        {card.t}
      </div>
      <div className="mt-1.5 text-[11.5px]" style={{ color: TEXT_2 }}>
        {card.who}
      </div>
      {card.composite && (
        <div className="mt-2 flex items-center gap-2 text-[11px]" style={{ fontFamily: mono }}>
          <span style={{ color: TEXT_3 }}>composite</span>
          <span
            className="px-1.5 py-0.5 rounded"
            style={{ background: VIOLET + "20", color: VIOLET }}
          >
            {card.composite}
          </span>
        </div>
      )}
      {card.round !== undefined && (
        <div className="mt-2 flex items-center gap-2 text-[11px]" style={{ fontFamily: mono }}>
          <span style={{ color: TEXT_3 }}>round</span>
          <span
            className="px-1.5 py-0.5 rounded"
            style={{ background: TEAL + "20", color: TEAL }}
          >
            {card.round}
          </span>
        </div>
      )}
      {card.doi && (
        <div className="mt-2 text-[10px]" style={{ color: SUCCESS, fontFamily: mono }}>
          ✓ DOI registered
        </div>
      )}
    </div>
  );
}

function SectionHead({
  n,
  tag,
  title,
  right,
}: {
  n: string;
  tag: string;
  title: string;
  right?: string;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <div
          className="text-[11px] tracking-[0.3em] uppercase flex items-center gap-3"
          style={{ color: SAFFRON, fontFamily: mono }}
        >
          <span style={{ color: TEXT_3 }}>§{n}</span>
          <span className="inline-block w-3 h-px" style={{ background: SAFFRON }} />
          <span>{tag}</span>
        </div>
        <h2
          className="mt-3"
          style={{
            fontFamily: display,
            fontSize: "clamp(40px, 5vw, 64px)",
            lineHeight: 1,
            fontWeight: 600,
            letterSpacing: "-0.025em",
          }}
        >
          {title}
        </h2>
      </div>
      {right && (
        <div className="text-[12px]" style={{ color: TEXT_2, fontFamily: mono }}>
          {right}
        </div>
      )}
    </div>
  );
}

function ManuscriptDetail() {
  return (
    <section
      id="review"
      className="border-b"
      style={{ borderColor: BORDER }}
    >
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8 py-24 md:py-32">
        <SectionHead
          n="02"
          tag="manuscript · the detail view"
          title="One paper. Every signal."
        />

        <div
          className="mt-12 rounded-2xl border overflow-hidden"
          style={{ borderColor: BORDER, background: SURFACE }}
        >
          {/* tab bar */}
          <div
            className="flex items-center gap-0 border-b text-[12.5px]"
            style={{ borderColor: BORDER, background: SURFACE_2 }}
          >
            {["Overview", "Reviews", "Versions", "Metadata", "License", "Audit"].map(
              (t, i) => (
                <button
                  key={t}
                  className="px-4 py-3"
                  style={{
                    color: i === 0 ? TEXT : TEXT_2,
                    background: i === 0 ? SURFACE : "transparent",
                    borderBottom: i === 0 ? `2px solid ${SAFFRON}` : "2px solid transparent",
                  }}
                >
                  {t}
                </button>
              )
            )}
            <div
              className="ml-auto px-4 py-2.5 text-[11px] tracking-[0.28em] uppercase flex items-center gap-2"
              style={{ color: TEXT_3, fontFamily: mono }}
            >
              <span style={{ color: SUCCESS }}>●</span> autosaved · 2s ago
            </div>
          </div>

          <div className="grid grid-cols-12">
            {/* left: meta sidebar */}
            <aside
              className="col-span-12 lg:col-span-4 border-r p-6 lg:p-8"
              style={{ borderColor: BORDER }}
            >
              <div
                className="text-[10px] tracking-[0.28em] uppercase"
                style={{ color: TEXT_3, fontFamily: mono }}
              >
                Manuscript · 2605.10617v3
              </div>
              <h3
                className="mt-2 text-[28px] leading-[1.1]"
                style={{ fontFamily: display, fontWeight: 600 }}
              >
                Cartilage Repair via Light-Activated Hydrogels.
              </h3>
              <div
                className="mt-2 text-[14px]"
                style={{ color: TEXT_2, fontFamily: body, fontStyle: "italic" }}
              >
                A Phase-2 Open Trial.
              </div>

              <div className="mt-6 space-y-4">
                <Field k="Status" v={<StatusPill status="In review" color={TEAL} />} />
                <Field k="Round" v="2 of 2" />
                <Field k="Authors" v="Adesanmi · Brennan · Kovac · Hosseini" />
                <Field k="Field" v="q-bio.TO · physics.med-ph" />
                <Field k="Submitted" v="03 May 2026" />
                <Field
                  k="DOI"
                  v={
                    <span style={{ color: SAFFRON, fontFamily: mono }}>
                      10.84121/openratio.2605.10617
                    </span>
                  }
                />
                <Field k="License" v="CC BY 4.0" />
                <Field k="Composite" v="89.2 / 100" />
              </div>

              <div className="mt-6 pt-6 border-t" style={{ borderColor: BORDER }}>
                <div
                  className="text-[10px] tracking-[0.28em] uppercase mb-3"
                  style={{ color: TEXT_3, fontFamily: mono }}
                >
                  Quick actions
                </div>
                <div className="flex flex-wrap gap-2">
                  <Pill>Open editor</Pill>
                  <Pill>Reply to reviewers</Pill>
                  <Pill>Request DOI</Pill>
                  <Pill primary>Publish v4</Pill>
                </div>
              </div>
            </aside>

            {/* right: main feed */}
            <div className="col-span-12 lg:col-span-8 p-6 lg:p-8">
              <div
                className="text-[10px] tracking-[0.28em] uppercase"
                style={{ color: SAFFRON, fontFamily: mono }}
              >
                AI review · 92 seconds · 6 axes
              </div>

              <div className="mt-3 grid grid-cols-3 gap-3">
                {[
                  { k: "Methods", v: 0.91, c: SUCCESS },
                  { k: "Statistics", v: 0.74, c: WARN },
                  { k: "Novelty", v: 0.81, c: SUCCESS },
                  { k: "Integrity", v: 0.97, c: SUCCESS },
                  { k: "References", v: 1.0, c: SUCCESS },
                  { k: "Reproducibility", v: 0.62, c: WARN },
                ].map((s) => (
                  <ScoreBar key={s.k} k={s.k} v={s.v} c={s.c} />
                ))}
              </div>

              <div
                className="mt-8 text-[10px] tracking-[0.28em] uppercase"
                style={{ color: SAFFRON, fontFamily: mono }}
              >
                Findings · 14 total · 3 to address
              </div>
              <div className="mt-3 grid gap-2.5">
                <FindingRow
                  sev="critical"
                  tag="claim · unsupported"
                  title="“Top-3 experts” claim contradicts Fig. 4."
                  who="AI"
                  ref="L. 198"
                />
                <FindingRow
                  sev="warn"
                  tag="stats · variance"
                  title="Confidence interval too narrow for 3 seeds."
                  who="AI"
                  ref="L. 192"
                />
                <FindingRow
                  sev="warn"
                  tag="stats · overstatement"
                  title="“Wide margin” lacks effect size."
                  who="AI"
                  ref="L. 184–187"
                />
                <FindingRow
                  sev="ok"
                  tag="reviewer · L. Hofstadter"
                  title="The phase-2 design is well-justified; controls are appropriate."
                  who="Human"
                  ref="round 2"
                />
                <FindingRow
                  sev="ok"
                  tag="reviewer · M. Park"
                  title="New Fig. 6 with individual subject trajectories addresses my concern."
                  who="Human"
                  ref="round 2"
                />
              </div>

              <div
                className="mt-8 rounded-lg border p-4 flex items-center justify-between"
                style={{
                  borderColor: SAFFRON + "60",
                  background: SAFFRON + "10",
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="inline-block w-2 h-2 rounded-full"
                    style={{ background: SAFFRON, boxShadow: `0 0 10px ${SAFFRON}` }}
                  />
                  <div>
                    <div
                      className="text-[11px] tracking-[0.28em] uppercase"
                      style={{ color: SAFFRON, fontFamily: mono }}
                    >
                      Editorial verdict — pending
                    </div>
                    <div className="text-[14px]" style={{ color: TEXT, fontWeight: 500 }}>
                      Recommend acceptance with minor revision.
                    </div>
                  </div>
                </div>
                <PrimaryBtn>Accept v4</PrimaryBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="flex items-baseline gap-3 text-[13px]">
      <div
        className="w-24 text-[10px] tracking-[0.28em] uppercase shrink-0"
        style={{ color: TEXT_3, fontFamily: mono }}
      >
        {k}
      </div>
      <div className="flex-1" style={{ color: TEXT }}>
        {v}
      </div>
    </div>
  );
}

function StatusPill({ status, color }: { status: string; color: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10.5px] tracking-[0.18em] uppercase"
      style={{
        background: color + "20",
        color,
        fontFamily: mono,
      }}
    >
      <span
        className="inline-block w-1.5 h-1.5 rounded-full"
        style={{ background: color }}
      />
      {status}
    </span>
  );
}

function Pill({
  children,
  primary,
}: {
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <span
      className="inline-flex items-center px-3 py-1.5 rounded-md text-[11.5px] border"
      style={{
        background: primary ? SAFFRON : SURFACE_2,
        color: primary ? BG : TEXT,
        borderColor: primary ? SAFFRON : BORDER,
        fontWeight: primary ? 600 : 500,
      }}
    >
      {children}
    </span>
  );
}

function ScoreBar({ k, v, c }: { k: string; v: number; c: string }) {
  return (
    <div
      className="rounded-md border p-3"
      style={{ borderColor: BORDER, background: SURFACE_2 }}
    >
      <div
        className="flex items-center justify-between text-[10px] tracking-[0.28em] uppercase mb-2"
        style={{ color: TEXT_3, fontFamily: mono }}
      >
        <span>{k}</span>
        <span style={{ color: c }}>{v.toFixed(2)}</span>
      </div>
      <div
        className="h-1.5 rounded overflow-hidden"
        style={{ background: SURFACE_3 }}
      >
        <div
          className="h-full"
          style={{
            width: `${v * 100}%`,
            background: c,
            boxShadow: `0 0 10px ${c}80`,
          }}
        />
      </div>
    </div>
  );
}

function FindingRow({
  sev,
  tag,
  title,
  who,
  ref,
}: {
  sev: "ok" | "warn" | "critical";
  tag: string;
  title: string;
  who: string;
  ref: string;
}) {
  const c = sev === "ok" ? SUCCESS : sev === "warn" ? WARN : DANGER;
  return (
    <div
      className="rounded-md border p-3 flex items-start gap-3"
      style={{ borderColor: BORDER, background: SURFACE_2 }}
    >
      <span
        className="inline-block w-1.5 h-1.5 rounded-full mt-2"
        style={{ background: c, boxShadow: `0 0 8px ${c}80` }}
      />
      <div className="flex-1">
        <div className="flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase">
          <span style={{ color: c, fontFamily: mono }}>{tag}</span>
          <span style={{ color: TEXT_3 }}>·</span>
          <span style={{ color: TEXT_3, fontFamily: mono }}>{who}</span>
          <span className="ml-auto" style={{ color: TEXT_3, fontFamily: mono }}>
            {ref}
          </span>
        </div>
        <div className="mt-1 text-[14px]" style={{ color: TEXT, fontWeight: 500 }}>
          {title}
        </div>
      </div>
    </div>
  );
}

function Timeline() {
  const events = [
    { day: 0, label: "Submitted", color: TEXT_2 },
    { day: 0.05, label: "Preprint posted", color: WARN },
    { day: 0.07, label: "AI review (92s)", color: VIOLET },
    { day: 1, label: "Reviewers assigned", color: TEAL },
    { day: 9, label: "Reviewer 1 returned", color: TEAL },
    { day: 11, label: "Reviewer 2 returned", color: TEAL },
    { day: 13, label: "Author response (v3)", color: SAFFRON },
    { day: 15, label: "Reviewer 2 round-2", color: TEAL },
    { day: 17, label: "Editor decision", color: SAFFRON },
    { day: 19, label: "Accepted, DOI reserved", color: SUCCESS },
    { day: 21, label: "Published (v4)", color: SUCCESS },
  ];

  return (
    <section className="border-b" style={{ borderColor: BORDER }}>
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8 py-24 md:py-32">
        <SectionHead
          n="03"
          tag="timeline · 21 days"
          title="A whole submission, in three weeks."
        />

        <div
          className="mt-12 rounded-2xl border p-6 md:p-10"
          style={{ borderColor: BORDER, background: SURFACE }}
        >
          {/* axis */}
          <div className="relative h-[260px]">
            {/* horizontal grid lines */}
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="absolute left-0 right-0 h-px"
                style={{
                  top: `${i * 25}%`,
                  background: BORDER,
                }}
              />
            ))}
            {/* day labels */}
            <div className="absolute inset-x-0 -top-7 flex justify-between text-[10px] tracking-[0.28em] uppercase" style={{ color: TEXT_3, fontFamily: mono }}>
              <span>Day 0</span>
              <span>Day 5</span>
              <span>Day 10</span>
              <span>Day 15</span>
              <span>Day 20</span>
              <span>Day 21</span>
            </div>

            {/* connecting line */}
            <svg viewBox="0 0 1000 260" className="absolute inset-0 w-full h-full">
              <path
                d={`M 0,210 L 12,200 L 24,180 L 80,170 L 380,140 L 460,140 L 560,90 L 640,90 L 720,60 L 820,40 L 940,30`}
                fill="none"
                stroke={SAFFRON}
                strokeWidth="2"
                opacity="0.85"
              />
              <path
                d={`M 0,210 L 12,200 L 24,180 L 80,170 L 380,140 L 460,140 L 560,90 L 640,90 L 720,60 L 820,40 L 940,30 L 940,260 L 0,260 Z`}
                fill={SAFFRON}
                opacity="0.05"
              />
            </svg>

            {/* events */}
            {events.map((e, i) => {
              const x = (e.day / 21) * 100;
              const ys = [85, 80, 70, 65, 55, 55, 35, 35, 25, 18, 12];
              return (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${x}%`,
                    top: `${ys[i]}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      background: e.color,
                      boxShadow: `0 0 10px ${e.color}90`,
                      border: `2px solid ${BG}`,
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* labels below */}
          <div
            className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-[12px]"
            style={{ fontFamily: mono, color: TEXT_2 }}
          >
            {events.map((e, i) => (
              <div key={i} className="flex items-baseline gap-2">
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full mt-1"
                  style={{ background: e.color }}
                />
                <span>
                  <span style={{ color: TEXT_3 }}>D{Math.round(e.day)}</span>
                  <br />
                  <span style={{ color: TEXT }}>{e.label}</span>
                </span>
              </div>
            ))}
          </div>

          <div
            className="mt-8 pt-6 border-t flex flex-wrap items-center justify-between gap-3 text-[12px]"
            style={{ borderColor: BORDER, color: TEXT_2, fontFamily: mono }}
          >
            <span>
              <span style={{ color: SAFFRON }}>median time-to-publish: 12 days</span>{" "}
              · 95p ≤ 28 days · author-paced revisions
            </span>
            <span>← compare with industry median 9.4 months</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Versions() {
  return (
    <section className="border-b" style={{ borderColor: BORDER }}>
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8 py-24 md:py-32">
        <SectionHead
          n="04"
          tag="versioning · diff view"
          title="Every revision is a diff."
        />

        <div className="mt-12 grid grid-cols-12 gap-6">
          <div
            className="col-span-12 lg:col-span-7 rounded-2xl border overflow-hidden"
            style={{ borderColor: BORDER, background: SURFACE }}
          >
            <div
              className="px-4 py-3 border-b flex items-center justify-between text-[11px]"
              style={{ borderColor: BORDER, fontFamily: mono, color: TEXT_2 }}
            >
              <div className="flex items-center gap-3">
                <span>diff</span>
                <span style={{ color: TEXT_3 }}>·</span>
                <span>v3</span>
                <span style={{ color: TEXT_3 }}>→</span>
                <span style={{ color: SAFFRON }}>v4</span>
              </div>
              <span>
                <span style={{ color: SUCCESS }}>+ 142</span>{" "}
                <span style={{ color: DANGER }}>− 38</span> · 6 files
              </span>
            </div>

            <div
              className="px-5 py-4 text-[12.5px] leading-[1.7]"
              style={{ fontFamily: mono, color: TEXT_2 }}
            >
              <div style={{ color: TEXT_3 }}>section/results.tex</div>
              <div className="mt-2">
                <span style={{ color: TEXT_3 }}>14</span>
                <span className="ml-3" style={{ color: TEXT }}>
                  {"% Across all settings, our model"}
                </span>
              </div>
              <div>
                <span style={{ color: TEXT_3 }}>15</span>
                <span
                  className="ml-3 px-1"
                  style={{
                    color: DANGER,
                    background: DANGER + "10",
                    textDecoration: "line-through",
                  }}
                >
                  − % outperforms baselines by a wide margin.
                </span>
              </div>
              <div>
                <span style={{ color: TEXT_3 }}>15</span>
                <span
                  className="ml-3 px-1"
                  style={{ color: SUCCESS, background: SUCCESS + "10" }}
                >
                  + % outperforms RouterMoE by 4.2 pts recall@10
                </span>
              </div>
              <div>
                <span style={{ color: TEXT_3 }}>16</span>
                <span
                  className="ml-3 px-1"
                  style={{ color: SUCCESS, background: SUCCESS + "10" }}
                >
                  + % (Cohen&apos;s d = 0.62, 95% CI [0.41, 0.83]).
                </span>
              </div>
              <div>
                <span style={{ color: TEXT_3 }}>17</span>
                <span className="ml-3" style={{ color: TEXT }}>
                  {""}
                </span>
              </div>
              <div>
                <span style={{ color: TEXT_3 }}>18</span>
                <span className="ml-3" style={{ color: TEXT }}>
                  {`We attribute this to the routing`}
                </span>
              </div>
              <div>
                <span style={{ color: TEXT_3 }}>19</span>
                <span
                  className="ml-3 px-1"
                  style={{
                    color: DANGER,
                    background: DANGER + "10",
                    textDecoration: "line-through",
                  }}
                >
                  − % which selects the top-3 experts.
                </span>
              </div>
              <div>
                <span style={{ color: TEXT_3 }}>19</span>
                <span
                  className="ml-3 px-1"
                  style={{ color: SUCCESS, background: SUCCESS + "10" }}
                >
                  + % which selects a top-1 expert
                </span>
              </div>
              <div>
                <span style={{ color: TEXT_3 }}>20</span>
                <span
                  className="ml-3 px-1"
                  style={{ color: SUCCESS, background: SUCCESS + "10" }}
                >
                  + % 74% of the time (see Fig. 4).
                </span>
              </div>
            </div>
            <div
              className="px-4 py-3 border-t flex items-center justify-between text-[11px]"
              style={{ borderColor: BORDER, fontFamily: mono, color: TEXT_2 }}
            >
              <span>
                resolved finding: <span style={{ color: SUCCESS }}>claim · unsupported</span>
              </span>
              <span>signed by Reviewer 2 (L. Hofstadter)</span>
            </div>
          </div>

          {/* changelog */}
          <div className="col-span-12 lg:col-span-5">
            <div
              className="text-[10px] tracking-[0.28em] uppercase"
              style={{ color: SAFFRON, fontFamily: mono }}
            >
              Changelog · public
            </div>
            <h3
              className="mt-2 text-[28px] leading-[1.1]"
              style={{ fontFamily: display, fontWeight: 600 }}
            >
              No silent rewrites. Ever.
            </h3>
            <p
              className="mt-3 text-[15px] leading-[1.6]"
              style={{ color: TEXT_2 }}
            >
              Every version retains its own DOI suffix. Citations resolve to the
              version cited. Retractions, corrections, and expressions of concern
              become first-class entries in the public log.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                { v: "v4", d: "07 May 2026", state: "Published", note: "Final typeset; reproducibility data attached." },
                { v: "v3", d: "26 Apr 2026", state: "In review", note: "Reviewer 2 comments addressed; new Fig. 6." },
                { v: "v2", d: "17 Apr 2026", state: "AI-reviewed", note: "Integrity pass; corrected stats table." },
                { v: "v1", d: "04 Apr 2026", state: "Preprint", note: "Initial preprint posted." },
              ].map((row, i) => (
                <div
                  key={row.v}
                  className="rounded-lg border p-4 flex items-start gap-4"
                  style={{
                    borderColor: i === 0 ? SAFFRON + "50" : BORDER,
                    background: i === 0 ? SAFFRON + "10" : SURFACE,
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-md flex items-center justify-center text-[13px]"
                    style={{
                      background: i === 0 ? SAFFRON : SURFACE_2,
                      color: i === 0 ? BG : TEXT,
                      fontFamily: mono,
                      fontWeight: 700,
                    }}
                  >
                    {row.v}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <div className="text-[14px]" style={{ color: TEXT, fontWeight: 500 }}>
                        {row.note}
                      </div>
                    </div>
                    <div
                      className="mt-1 flex items-center gap-3 text-[11px]"
                      style={{ color: TEXT_3, fontFamily: mono }}
                    >
                      <span>{row.d}</span>
                      <span>·</span>
                      <span>{row.state}</span>
                      <span>·</span>
                      <span style={{ color: SAFFRON }}>10.84121/openratio.2605.10617{row.v}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LicenseControl() {
  return (
    <section
      id="license"
      className="border-b"
      style={{ borderColor: BORDER }}
    >
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8 py-24 md:py-32">
        <SectionHead
          n="05"
          tag="license · author controls"
          title="Choose your license. Click. Done."
        />

        <div className="mt-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="rounded-2xl border p-6 md:p-8"
              style={{ borderColor: BORDER, background: SURFACE }}
            >
              <div
                className="text-[10px] tracking-[0.28em] uppercase"
                style={{ color: SAFFRON, fontFamily: mono }}
              >
                Settings · 2605.10617v4 · License
              </div>
              <div className="mt-3 grid gap-3">
                {[
                  {
                    k: "CC BY 4.0",
                    n: "Attribution",
                    d: "Anyone may share and adapt for any purpose, including commercial, with credit. The default for most authors.",
                    sel: true,
                  },
                  {
                    k: "CC BY-NC",
                    n: "Non-commercial",
                    d: "Share and adapt freely for non-commercial use, with attribution.",
                  },
                  {
                    k: "CC BY-SA",
                    n: "Share-alike",
                    d: "Adaptations must be released under the same open license.",
                  },
                ].map((l) => (
                  <label
                    key={l.k}
                    className="flex gap-4 p-4 rounded-lg border cursor-pointer"
                    style={{
                      borderColor: l.sel ? SAFFRON : BORDER,
                      background: l.sel ? SAFFRON + "10" : SURFACE_2,
                    }}
                  >
                    <span
                      className="w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 shrink-0"
                      style={{
                        borderColor: l.sel ? SAFFRON : BORDER_2,
                        background: l.sel ? SAFFRON : "transparent",
                      }}
                    >
                      {l.sel && (
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ background: BG }}
                        />
                      )}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span
                          className="text-[10px] tracking-[0.28em] uppercase px-1.5 py-0.5 rounded"
                          style={{
                            background: l.sel ? SAFFRON : SURFACE_3,
                            color: l.sel ? BG : TEXT_2,
                            fontFamily: mono,
                            fontWeight: 600,
                          }}
                        >
                          {l.k}
                        </span>
                        <span
                          className="text-[16px]"
                          style={{ color: TEXT, fontWeight: 500 }}
                        >
                          {l.n}
                        </span>
                      </div>
                      <p className="mt-1.5 text-[13.5px]" style={{ color: TEXT_2 }}>
                        {l.d}
                      </p>
                    </div>
                  </label>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between text-[12px]" style={{ color: TEXT_2 }}>
                <span>
                  <span style={{ color: TEXT_3 }}>Mandates satisfied:</span>{" "}
                  <span style={{ color: SUCCESS }}>Plan-S · NIH · ERC · FAIR</span>
                </span>
                <PrimaryBtn>Save license</PrimaryBtn>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div
              className="rounded-2xl border p-6 md:p-8 h-full"
              style={{ borderColor: BORDER, background: SURFACE }}
            >
              <div
                className="text-[10px] tracking-[0.28em] uppercase"
                style={{ color: SAFFRON, fontFamily: mono }}
              >
                Identifier · ready to register
              </div>
              <div
                className="mt-4 text-[14px] p-4 rounded-md border break-all"
                style={{
                  borderColor: BORDER,
                  background: SURFACE_2,
                  color: SAFFRON,
                  fontFamily: mono,
                }}
              >
                10.84121/openratio.2605.10617v4
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 text-[12px]" style={{ fontFamily: mono }}>
                <Stat l="Crossref" v="ready" c={SUCCESS} />
                <Stat l="DataCite" v="ready" c={SUCCESS} />
                <Stat l="ORCID" v="3 of 4 verified" c={WARN} />
                <Stat l="ROR" v="3 of 3 institutions" c={SUCCESS} />
                <Stat l="Mirrors" v="us-e · eu-w · ap-s" c={SUCCESS} />
                <Stat l="Hash" v="SHA-256 5e1c…4bd3" c={TEXT_2} />
              </div>

              <div
                className="mt-8 pt-6 border-t text-[13px] leading-[1.6]"
                style={{ borderColor: BORDER, color: TEXT_2 }}
              >
                On <span style={{ color: TEXT }}>Publish v4</span>, Open Ratio
                will register the DOI with Crossref and DataCite, sign the
                version of record with your institutional Ed25519 key, and
                replicate to three regional mirrors. Done in seconds.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ l, v, c }: { l: string; v: string; c: string }) {
  return (
    <div
      className="rounded-md border p-3"
      style={{ borderColor: BORDER, background: SURFACE_2 }}
    >
      <div style={{ color: TEXT_3 }}>{l}</div>
      <div className="mt-1 flex items-center gap-2" style={{ color: c }}>
        <span
          className="inline-block w-1.5 h-1.5 rounded-full"
          style={{ background: c }}
        />
        <span style={{ fontSize: 13 }}>{v}</span>
      </div>
    </div>
  );
}

function Comparison() {
  return (
    <section className="border-b" style={{ borderColor: BORDER }}>
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8 py-24 md:py-32">
        <SectionHead
          n="06"
          tag="vs. legacy publishing"
          title="What changes when the OS does the work."
        />

        <div className="mt-12 grid grid-cols-12 gap-6">
          {[
            ["Closed peer review", "Public on accept", "Reviewer comments and revision diffs visible after the article publishes."],
            ["12-month review queues", "11-day median round", "AI handles the boilerplate, humans handle judgement."],
            ["$3,000+ APCs", "Free first year, $240 after", "Waived in low-income regions; reader never pays."],
            ["Frozen PDFs", "Versioned with DOIs", "Citations resolve to the version cited."],
            ["Hidden retractions", "Public retraction record", "Every correction first-class in the log."],
            ["Vendor lock-in", "Open infrastructure", "JATS, code, metadata, review reports — all CC0."],
          ].map(([old, n, note], i) => (
            <article
              key={i}
              className="col-span-12 md:col-span-6 lg:col-span-4 rounded-xl border overflow-hidden"
              style={{ borderColor: BORDER, background: SURFACE }}
            >
              <div
                className="px-5 py-3 border-b text-[11px] tracking-[0.18em] uppercase flex items-center gap-2"
                style={{ borderColor: BORDER, color: TEXT_3, fontFamily: mono }}
              >
                <span style={{ color: DANGER }}>━</span>
                <span style={{ textDecoration: "line-through" }}>{old}</span>
              </div>
              <div className="px-5 py-5">
                <div
                  className="text-[24px] leading-[1.1]"
                  style={{
                    fontFamily: display,
                    color: SAFFRON,
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {n}
                </div>
                <p className="mt-3 text-[14px] leading-[1.55]" style={{ color: TEXT_2 }}>
                  {note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActivityLog() {
  const events = [
    { t: "00:00:14", who: "you", what: "submitted v4 for publication" },
    { t: "00:00:17", who: "system", what: "DOI 10.84121/openratio.2605.10617v4 reserved" },
    { t: "00:00:18", who: "system", what: "license CC BY 4.0 attached" },
    { t: "00:00:22", who: "ai", what: "integrity pass complete (no flags)" },
    { t: "00:00:24", who: "system", what: "manuscript signed with kid openratio-2026-04 (Ed25519)" },
    { t: "00:00:26", who: "system", what: "replicated to us-e, eu-w, ap-s" },
    { t: "00:00:31", who: "system", what: "Crossref + DataCite metadata pushed" },
    { t: "00:00:33", who: "system", what: "ORCID record updated for 3 authors" },
    { t: "00:00:34", who: "system", what: "publication notice posted to public feed" },
    { t: "00:00:36", who: "you", what: "received version-of-record certificate" },
  ];

  return (
    <section
      id="audit"
      className="border-b"
      style={{ borderColor: BORDER }}
    >
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8 py-24 md:py-32">
        <SectionHead
          n="07"
          tag="audit · the public ledger"
          title="The whole record, in plain text."
        />

        <div
          className="mt-12 rounded-2xl border overflow-hidden"
          style={{ borderColor: BORDER, background: SURFACE }}
        >
          <div
            className="px-5 py-3 border-b flex items-center justify-between text-[11px]"
            style={{ borderColor: BORDER, color: TEXT_2, fontFamily: mono }}
          >
            <span>publish_log · 2605.10617 · v4</span>
            <span style={{ color: SUCCESS }}>● live · 36 seconds elapsed</span>
          </div>
          <div className="grid grid-cols-12">
            <div
              className="col-span-12 md:col-span-8 px-6 py-5 border-r"
              style={{ borderColor: BORDER }}
            >
              <pre
                className="text-[13px] leading-[1.85] whitespace-pre-wrap"
                style={{ fontFamily: mono, color: TEXT_2 }}
              >
{events
  .map((e) => `[${e.t}]  ${e.who.padEnd(8)}  ${e.what}`)
  .join("\n")}
              </pre>
            </div>
            <div className="col-span-12 md:col-span-4 p-6">
              <div
                className="text-[10px] tracking-[0.28em] uppercase"
                style={{ color: SAFFRON, fontFamily: mono }}
              >
                Receipt
              </div>
              <h3
                className="mt-2 text-[24px] leading-[1.1]"
                style={{ fontFamily: display, fontWeight: 600 }}
              >
                Cryptographically signed.
              </h3>
              <ul className="mt-5 space-y-3 text-[13px]" style={{ color: TEXT_2 }}>
                <li className="flex items-center gap-3">
                  <span style={{ color: SUCCESS }}>✓</span> SHA-256 published
                </li>
                <li className="flex items-center gap-3">
                  <span style={{ color: SUCCESS }}>✓</span> Ed25519 signed (kid openratio-2026-04)
                </li>
                <li className="flex items-center gap-3">
                  <span style={{ color: SUCCESS }}>✓</span> RFC 3161 timestamps from 2 TSAs
                </li>
                <li className="flex items-center gap-3">
                  <span style={{ color: SUCCESS }}>✓</span> 3 mirrors checked-in
                </li>
                <li className="flex items-center gap-3">
                  <span style={{ color: SUCCESS }}>✓</span> Metadata pushed to Crossref &amp; DataCite
                </li>
              </ul>
              <div className="mt-6">
                <SecondaryBtn>Download receipt</SecondaryBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tiers() {
  const tiers = [
    {
      name: "Author",
      price: "$0",
      sub: "first year",
      d: "Submit, preprint, and publish — the full workflow, in public.",
      points: ["Unlimited preprints", "Full AI review", "Up to 4 peer reviewers", "DOI registration", "CC BY / NC / SA"],
      tag: "for individual researchers",
      color: TEXT_2,
    },
    {
      name: "Lab",
      price: "$240",
      sub: "/article · APC",
      d: "Author-paced submissions with collaborative drafts and reviewer pools.",
      points: ["Collaborative drafts", "Lab-wide reviewer pool", "Bulk metadata", "Institutional invoicing", "Plan-S compliance"],
      tag: "recommended",
      color: SAFFRON,
      featured: true,
    },
    {
      name: "Society / Institution",
      price: "Negotiated",
      sub: "consortium pricing",
      d: "Self-host an Open Ratio journal; full editorial control; shared infrastructure.",
      points: ["Branded journal pages", "Editorial board UI", "Reviewer payments", "Mirror in your region", "Custom DOI prefix"],
      tag: "for societies, libraries, foundations",
      color: TEAL,
    },
  ];

  return (
    <section
      id="tiers"
      className="border-b"
      style={{ borderColor: BORDER }}
    >
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8 py-24 md:py-32">
        <SectionHead
          n="08"
          tag="tiers · transparent pricing"
          title="Pricing made simple. Reader-free, always."
        />

        <div className="mt-12 grid grid-cols-12 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className="col-span-12 md:col-span-4 rounded-2xl border p-6 md:p-8 relative"
              style={{
                borderColor: t.featured ? SAFFRON + "60" : BORDER,
                background: t.featured ? `linear-gradient(180deg, ${SAFFRON}10, ${SURFACE})` : SURFACE,
              }}
            >
              {t.featured && (
                <span
                  className="absolute -top-3 left-6 px-2.5 py-0.5 text-[10px] tracking-[0.28em] uppercase"
                  style={{
                    background: SAFFRON,
                    color: BG,
                    fontFamily: mono,
                    fontWeight: 700,
                    borderRadius: 4,
                  }}
                >
                  recommended
                </span>
              )}
              <div
                className="text-[10px] tracking-[0.28em] uppercase"
                style={{ color: t.color, fontFamily: mono }}
              >
                {t.tag}
              </div>
              <h3
                className="mt-2 text-[28px] leading-[1.1]"
                style={{ fontFamily: display, fontWeight: 600 }}
              >
                {t.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span
                  className="text-[44px]"
                  style={{
                    fontFamily: display,
                    fontWeight: 700,
                    color: t.color,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {t.price}
                </span>
                <span style={{ color: TEXT_3, fontFamily: mono, fontSize: 12 }}>
                  {t.sub}
                </span>
              </div>
              <p
                className="mt-3 text-[14px] leading-[1.55]"
                style={{ color: TEXT_2 }}
              >
                {t.d}
              </p>
              <ul className="mt-6 space-y-2.5 text-[13.5px]" style={{ color: TEXT }}>
                {t.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span style={{ color: t.color }}>✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                {t.featured ? (
                  <PrimaryBtn>Submit a manuscript</PrimaryBtn>
                ) : (
                  <SecondaryBtn>Get started</SecondaryBtn>
                )}
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-8 rounded-2xl border p-6 md:p-8 grid grid-cols-12 gap-6 items-center"
          style={{ borderColor: BORDER, background: SURFACE }}
        >
          <div className="col-span-12 md:col-span-7">
            <div
              className="text-[10px] tracking-[0.28em] uppercase"
              style={{ color: SAFFRON, fontFamily: mono }}
            >
              Integrity is included in every tier
            </div>
            <h3
              className="mt-2 text-[26px] leading-[1.1]"
              style={{ fontFamily: display, fontWeight: 600 }}
            >
              Spam · Plagiarism · Unethical content · Fake authors · Conflicts · Long-term integrity.
            </h3>
            <p className="mt-3 text-[14px] leading-[1.55]" style={{ color: TEXT_2 }}>
              Aggressive filtering, ORCID + ROR + sock-puppet detection, IRB
              declarations, conflict graphs, three-region mirrors, and
              cryptographic timestamps — across every plan, every paper.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className="grid grid-cols-3 gap-3 text-[11px]" style={{ fontFamily: mono }}>
              {["Spam", "Plagiarism", "Unethical", "Fake authors", "Conflicts", "Long-term"].map(
                (k, i) => (
                  <div
                    key={k}
                    className="rounded-md border p-3"
                    style={{
                      borderColor: BORDER,
                      background: SURFACE_2,
                    }}
                  >
                    <div style={{ color: TEXT_3, fontSize: 10 }}>0{i + 1}</div>
                    <div className="mt-1" style={{ color: TEXT, fontSize: 13 }}>
                      {k}
                    </div>
                    <div className="mt-1 flex items-center gap-1.5" style={{ color: SUCCESS }}>
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full"
                        style={{ background: SUCCESS }}
                      />
                      <span style={{ fontSize: 10 }}>handled</span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Audiences() {
  const groups = [
    {
      who: "Authors",
      points: [
        "Submit in LaTeX, Markdown, or PDF.",
        "Manuscript private until you publish.",
        "AI surfaces defects before reviewers see them.",
        "Threaded responses to every comment.",
        "DOI in minutes after acceptance.",
        "All revisions are public.",
      ],
    },
    {
      who: "Readers",
      points: [
        "Free, open, no paywall, no registration.",
        "HTML, PDF, plain text, JATS XML.",
        "Read every reviewer comment, every diff.",
        "Linked to data, code, and supplementary materials.",
        "Three regional mirrors guarantee long-term access.",
        "Cite the version you read; URL never breaks.",
      ],
    },
    {
      who: "Reviewers & Editors",
      points: [
        "AI does the boilerplate.",
        "Sign your review or stay anonymous.",
        "Verifiable credit and a stipend per review.",
        "Editorial board paid, transparent, elected.",
        "Decisions and timelines visible to authors.",
        "Pre-committed timelines — no chasing.",
      ],
    },
  ];
  return (
    <section className="border-b" style={{ borderColor: BORDER }}>
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8 py-24 md:py-32">
        <SectionHead
          n="09"
          tag="users · three"
          title="Authors. Readers. Reviewers."
        />

        <div className="mt-14 grid grid-cols-12 gap-6">
          {groups.map((g) => (
            <div
              key={g.who}
              className="col-span-12 md:col-span-4 rounded-xl border p-6"
              style={{ borderColor: BORDER, background: SURFACE }}
            >
              <h3
                className="text-[28px] leading-[1.1]"
                style={{ fontFamily: display, fontWeight: 600, color: TEXT }}
              >
                {g.who}
              </h3>
              <ul className="mt-6 space-y-3 text-[14px]" style={{ color: TEXT_2 }}>
                {g.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 leading-[1.55]">
                    <span style={{ color: SAFFRON, fontFamily: mono, fontSize: 11 }}>
                      0{i + 1}
                    </span>
                    <span style={{ color: TEXT }}>{p}</span>
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

function CTA() {
  return (
    <section
      className="border-b relative overflow-hidden"
      style={{ borderColor: BORDER }}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(700px 360px at 50% 60%, rgba(255,122,61,0.15) 0%, transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8 py-32 md:py-44 text-center relative">
        <div
          className="text-[11px] tracking-[0.32em] uppercase"
          style={{ color: SAFFRON, fontFamily: mono }}
        >
          Spin up your publishing OS
        </div>
        <h2
          className="mt-6"
          style={{
            fontFamily: display,
            fontSize: "clamp(56px, 11vw, 152px)",
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            fontWeight: 700,
          }}
        >
          From draft<br />
          <span style={{ color: SAFFRON }}>to DOI in 12 days.</span>
        </h2>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <PrimaryBtn>Submit a manuscript</PrimaryBtn>
          <SecondaryBtn>Start with a preprint</SecondaryBtn>
          <SecondaryBtn>Explore published research</SecondaryBtn>
        </div>

        <p
          className="mt-10 max-w-2xl mx-auto text-[14px] leading-[1.6]"
          style={{ color: TEXT_2 }}
        >
          Open Ratio is the operating system for open-access publishing. Free
          for authors in the first year. The reader never pays. The data, the
          metadata, the reviews, and the code are all open.
        </p>
      </div>
    </section>
  );
}

function Foot() {
  return (
    <footer
      className="pt-20 pb-10 border-t"
      style={{ borderColor: BORDER, background: SURFACE }}
    >
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <div className="flex items-center gap-2">
            <Logo />
            <span
              className="text-[15px]"
              style={{ fontFamily: display, fontWeight: 700 }}
            >
              Open Ratio
            </span>
          </div>
          <p className="mt-4 text-[13px] leading-[1.6] max-w-sm" style={{ color: TEXT_2 }}>
            The operating system for open-access publishing. Manuscripts, AI
            review, peer review, DOIs, licensing, and the version of record —
            all in one place.
          </p>
        </div>
        <div
          className="col-span-12 md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-[13px]"
          style={{ color: TEXT_2 }}
        >
          <Foot1 t="Product" l={["Workflow", "AI Review", "Peer Review", "DOI"]} />
          <Foot1 t="Platform" l={["API", "Crossref", "ORCID", "Mirrors"]} />
          <Foot1 t="Open" l={["Governance", "Code", "Data", "Donate"]} />
          <Foot1 t="Contact" l={["editorial@", "press@", "Status", "About"]} />
        </div>
      </div>
      <div
        className="mx-auto max-w-[1400px] px-5 lg:px-8 mt-10 pt-6 border-t flex flex-col md:flex-row md:items-center justify-between gap-3 text-[11px]"
        style={{ borderColor: BORDER, color: TEXT_3, fontFamily: mono }}
      >
        <span>© Open Ratio Foundation · 2026</span>
        <span style={{ color: SUCCESS }}>● all systems operational · v0.4.18</span>
        <span>CC BY 4.0 · ISSN 3088-7142</span>
      </div>
    </footer>
  );
}

function Foot1({ t, l }: { t: string; l: string[] }) {
  return (
    <div>
      <div
        className="text-[10px] tracking-[0.28em] uppercase mb-3"
        style={{ color: SAFFRON, fontFamily: mono }}
      >
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
