import { Link } from "react-router-dom";

const BG = "#0b0907";
const SURFACE = "#13100c";
const SURFACE_2 = "#1c1812";
const BORDER = "#2c241b";
const BORDER_2 = "#3d3327";
const BONE = "#f1ecdf";
const PARCHMENT = "#e8dec4";
const TEXT_2 = "#a99a78";
const TEXT_3 = "#5a4f3c";
const AMBER = "#f4b73c";
const AMBER_DIM = "#c79325";
const CORAL = "#cf604a";
const TEAL = "#4f9b8a";
const INDIGO = "#7c8edb";
const VIOLET = "#a886c7";

const display = '"Instrument Serif", ui-serif, Georgia, serif';
const body = '"EB Garamond", ui-serif, Georgia, serif';
const mono = '"IBM Plex Mono", ui-monospace, monospace';

export function Design4() {
  return (
    <div
      className="min-h-screen relative"
      style={{ background: BG, color: BONE, fontFamily: body }}
    >
      <Backdrop />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <Anatomy />
        <Pipeline />
        <CitationGraph />
        <ReviewerOrbit />
        <Versioning />
        <Integrity />
        <Audiences />
        <Licensing />
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
        className="pointer-events-none fixed inset-0 w-full h-full opacity-[0.18]"
        style={{ zIndex: 0 }}
      >
        <defs>
          <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="0" cy="0" r="0.7" fill="#3d3327" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          zIndex: 0,
          background:
            "radial-gradient(700px 500px at 30% 0%, rgba(244,183,60,0.10) 0%, transparent 60%), radial-gradient(700px 600px at 95% 60%, rgba(207,96,74,0.08) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 mix-blend-overlay"
        style={{
          zIndex: 0,
          opacity: 0.05,
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />
    </>
  );
}

function Nav() {
  return (
    <header
      className="border-b sticky top-0 z-30 backdrop-blur"
      style={{ borderColor: BORDER, background: "rgba(11,9,7,0.85)" }}
    >
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <Constellation />
          <div className="leading-none">
            <span
              className="text-[20px]"
              style={{ fontFamily: display, color: BONE }}
            >
              Open <em style={{ color: AMBER }}>Ratio</em>
            </span>
            <div
              className="mt-1 text-[10px] tracking-[0.32em] uppercase"
              style={{ color: TEXT_3, fontFamily: mono }}
            >
              The Network
            </div>
          </div>
        </Link>
        <nav
          className="hidden md:flex items-center gap-7 text-[12px] tracking-[0.18em] uppercase"
          style={{ color: TEXT_2, fontFamily: mono }}
        >
          <a href="#" className="hover:text-white">/atlas</a>
          <a href="#" className="hover:text-white">/papers</a>
          <a href="#" className="hover:text-white">/authors</a>
          <a href="#" className="hover:text-white">/reviewers</a>
        </nav>
        <div className="flex items-center gap-4">
          <span
            className="hidden md:flex items-center gap-2 text-[11px]"
            style={{ color: TEXT_2, fontFamily: mono }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: AMBER, boxShadow: `0 0 10px ${AMBER}` }}
            />
            218 reviewers online
          </span>
          <a
            className="px-4 py-2 text-[11px] tracking-[0.28em] uppercase"
            style={{
              background: AMBER,
              color: BG,
              fontFamily: mono,
              fontWeight: 600,
            }}
            href="#"
          >
            Submit ⤴
          </a>
        </div>
      </div>
    </header>
  );
}

function Constellation() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28">
      <circle cx="14" cy="14" r="3" fill={AMBER} />
      <circle cx="4" cy="6" r="1.4" fill={BONE} />
      <circle cx="24" cy="8" r="1.4" fill={BONE} />
      <circle cx="22" cy="22" r="1.4" fill={BONE} />
      <circle cx="6" cy="22" r="1.4" fill={BONE} />
      <line x1="14" y1="14" x2="4" y2="6" stroke={BORDER_2} strokeWidth="0.5" />
      <line x1="14" y1="14" x2="24" y2="8" stroke={BORDER_2} strokeWidth="0.5" />
      <line x1="14" y1="14" x2="22" y2="22" stroke={BORDER_2} strokeWidth="0.5" />
      <line x1="14" y1="14" x2="6" y2="22" stroke={BORDER_2} strokeWidth="0.5" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12 pt-12 lg:pt-16 pb-12 grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-5">
          <div
            className="text-[11px] tracking-[0.42em] uppercase flex items-center gap-3"
            style={{ color: AMBER, fontFamily: mono }}
          >
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ background: AMBER, boxShadow: `0 0 12px ${AMBER}` }}
            />
            <span>Atlas of open scholarship</span>
          </div>

          <h1
            className="mt-7"
            style={{
              fontFamily: display,
              fontSize: "clamp(58px, 8.4vw, 132px)",
              lineHeight: 0.92,
              letterSpacing: "-0.01em",
              color: BONE,
              fontWeight: 400,
            }}
          >
            Every paper is a{" "}
            <em style={{ color: AMBER }}>star</em>.
            <br />
            <span style={{ color: TEXT_2, fontStyle: "italic" }}>
              Every citation,
            </span>
            <br />
            a <em style={{ color: AMBER }}>line</em> between them.
          </h1>

          <p
            className="mt-7 text-[18.5px] leading-[1.6] max-w-xl"
            style={{ color: PARCHMENT }}
          >
            Open Ratio publishes the network of science, not just its papers.
            Every author, reviewer, citation, version, and DOI is a node — the
            edges between them are the scholarly record. Browse it, query it,
            cite it.
          </p>

          <div
            className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-6 text-[12px]"
            style={{ fontFamily: mono }}
          >
            <Stat l="Authors" v="12,481" c={INDIGO} />
            <Stat l="Papers" v="184,621" c={AMBER} />
            <Stat l="Citations" v="1.7M" c={CORAL} />
            <Stat l="Reviewers" v="2,902" c={TEAL} />
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Btn primary>Open the atlas</Btn>
            <Btn>Submit a manuscript</Btn>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 relative">
          <KnowledgeGraph />
        </div>
      </div>

      <Ticker />
    </section>
  );
}

function Stat({ l, v, c }: { l: string; v: string; c: string }) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span
          className="inline-block w-1.5 h-1.5 rounded-full"
          style={{ background: c, boxShadow: `0 0 8px ${c}80` }}
        />
        <span style={{ color: TEXT_3 }}>{l}</span>
      </div>
      <div className="mt-1 text-[20px] tabular-nums" style={{ color: BONE }}>
        {v}
      </div>
    </div>
  );
}

function Btn({
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
        className="inline-flex items-center gap-2 px-5 py-3 text-[12px] tracking-[0.3em] uppercase"
        style={{ background: AMBER, color: BG, fontFamily: mono, fontWeight: 600 }}
      >
        {children} <span>↗</span>
      </a>
    );
  }
  return (
    <a
      href="#"
      className="inline-flex items-center gap-2 px-5 py-3 text-[12px] tracking-[0.3em] uppercase border"
      style={{ borderColor: BORDER_2, color: BONE, fontFamily: mono }}
    >
      {children}
    </a>
  );
}

function KnowledgeGraph() {
  // central paper at (450, 300)
  // 4 author nodes around top half
  // 3 reviewer nodes on the right
  // 8 citation papers in outer ring
  // 4 version dots above

  const cx = 460;
  const cy = 320;

  const authors = [
    { x: cx - 220, y: cy - 130, n: "F. Adesanmi", role: "first" },
    { x: cx - 100, y: cy - 220, n: "T. M. Brennan" },
    { x: cx + 100, y: cy - 220, n: "M. Kovac" },
    { x: cx + 220, y: cy - 130, n: "D. R. Hosseini", role: "corresponding" },
  ];

  const reviewers = [
    { x: cx + 290, y: cy + 30, n: "Dr. L. Hofstadter", signed: true },
    { x: cx + 290, y: cy + 110, n: "Reviewer ◯", signed: false },
    { x: cx + 290, y: cy + 190, n: "Dr. M. Park", signed: true },
  ];

  const citations = [
    { x: cx - 280, y: cy + 90, n: "Hong et al. 2024", id: "10.1234/.." },
    { x: cx - 240, y: cy + 200, n: "Liang & Park 2023", id: "10.1812/.." },
    { x: cx - 100, y: cy + 240, n: "Adesanmi 2024", id: "10.8412/.." },
    { x: cx + 80, y: cy + 240, n: "WHO Phase-2 Atlas", id: "10.6101/.." },
    { x: cx + 230, y: cy - 220, n: "Brennan 2025", id: "10.8412/.." },
  ];

  const versions = [
    { x: cx, y: cy - 270, l: "v1", date: "Apr 04" },
    { x: cx, y: cy - 240, l: "v2" },
    { x: cx, y: cy - 210, l: "v3" },
    { x: cx, y: cy - 180, l: "v4" },
  ];

  return (
    <div
      className="rounded-2xl border overflow-hidden relative"
      style={{
        borderColor: BORDER,
        background:
          "radial-gradient(800px 500px at 50% 50%, #1a1410 0%, #0b0907 70%)",
        boxShadow: "0 30px 80px -30px rgba(0,0,0,0.7)",
      }}
    >
      <div
        className="px-5 py-3 border-b text-[11px] tracking-[0.18em] uppercase flex items-center justify-between"
        style={{ borderColor: BORDER, color: TEXT_2, fontFamily: mono }}
      >
        <span>Atlas / paper · 10.84121/openratio.2605.10617</span>
        <span style={{ color: AMBER }}>+ 117 cites · v4</span>
      </div>

      <div className="relative" style={{ height: 600 }}>
        <svg
          viewBox="0 0 920 600"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* concentric guide rings */}
          {[80, 160, 240, 320].map((r) => (
            <circle
              key={r}
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke={BORDER}
              strokeWidth="0.5"
              strokeDasharray="2 4"
            />
          ))}
          {/* compass cross */}
          <line
            x1={cx - 320}
            y1={cy}
            x2={cx + 320}
            y2={cy}
            stroke={BORDER}
            strokeWidth="0.5"
          />
          <line
            x1={cx}
            y1={cy - 320}
            x2={cx}
            y2={cy + 320}
            stroke={BORDER}
            strokeWidth="0.5"
          />

          {/* citation arcs */}
          {citations.map((c, i) => (
            <g key={i}>
              <line
                x1={cx}
                y1={cy}
                x2={c.x}
                y2={c.y}
                stroke={CORAL}
                strokeWidth="0.6"
                strokeOpacity="0.5"
              />
              <circle cx={c.x} cy={c.y} r="6" fill={CORAL} fillOpacity="0.85" />
              <circle cx={c.x} cy={c.y} r="11" fill="none" stroke={CORAL} strokeOpacity="0.25" />
              <text
                x={c.x + 14}
                y={c.y + 4}
                fill={PARCHMENT}
                fontFamily="EB Garamond"
                fontSize="13"
                fontStyle="italic"
              >
                {c.n}
              </text>
              <text
                x={c.x + 14}
                y={c.y + 18}
                fill={TEXT_3}
                fontFamily="IBM Plex Mono"
                fontSize="10"
              >
                {c.id}
              </text>
            </g>
          ))}

          {/* author lines + nodes */}
          {authors.map((a, i) => (
            <g key={i}>
              <line
                x1={cx}
                y1={cy}
                x2={a.x}
                y2={a.y}
                stroke={INDIGO}
                strokeWidth="0.8"
                strokeOpacity="0.65"
              />
              {/* diamond */}
              <g transform={`translate(${a.x},${a.y}) rotate(45)`}>
                <rect
                  x="-7"
                  y="-7"
                  width="14"
                  height="14"
                  fill={INDIGO}
                  fillOpacity="0.95"
                />
              </g>
              <text
                x={a.x}
                y={a.y - 18}
                textAnchor="middle"
                fill={BONE}
                fontFamily="Instrument Serif"
                fontSize="15"
                fontStyle="italic"
              >
                {a.n}
              </text>
              {a.role && (
                <text
                  x={a.x}
                  y={a.y - 36}
                  textAnchor="middle"
                  fill={INDIGO}
                  fontFamily="IBM Plex Mono"
                  fontSize="9"
                  letterSpacing="2"
                >
                  {a.role.toUpperCase()}
                </text>
              )}
            </g>
          ))}

          {/* reviewer squares */}
          {reviewers.map((r, i) => (
            <g key={i}>
              <line
                x1={cx}
                y1={cy}
                x2={r.x}
                y2={r.y}
                stroke={TEAL}
                strokeWidth="0.8"
                strokeOpacity="0.65"
                strokeDasharray={r.signed ? "0" : "3 2"}
              />
              <rect
                x={r.x - 7}
                y={r.y - 7}
                width="14"
                height="14"
                fill={TEAL}
                fillOpacity="0.9"
              />
              <text
                x={r.x + 14}
                y={r.y + 5}
                fill={BONE}
                fontFamily="Instrument Serif"
                fontSize="14"
                fontStyle="italic"
              >
                {r.n}
              </text>
              <text
                x={r.x + 14}
                y={r.y + 19}
                fill={TEXT_3}
                fontFamily="IBM Plex Mono"
                fontSize="9"
                letterSpacing="2"
              >
                {r.signed ? "SIGNED · ROUND 2" : "ANONYMOUS"}
              </text>
            </g>
          ))}

          {/* version stack */}
          {versions.map((v, i) => (
            <g key={i}>
              <line
                x1={cx}
                y1={i === 0 ? cy : versions[i - 1].y}
                x2={cx}
                y2={v.y}
                stroke={AMBER_DIM}
                strokeWidth="0.8"
              />
              <circle
                cx={v.x}
                cy={v.y}
                r="4"
                fill={i === 3 ? AMBER : AMBER_DIM}
                stroke={BG}
                strokeWidth="2"
              />
              <text
                x={v.x + 12}
                y={v.y + 4}
                fill={i === 3 ? AMBER : TEXT_2}
                fontFamily="IBM Plex Mono"
                fontSize="11"
                letterSpacing="2"
              >
                {v.l.toUpperCase()}
                {v.date ? `  ${v.date}` : ""}
              </text>
            </g>
          ))}

          {/* central paper */}
          <g>
            <circle
              cx={cx}
              cy={cy}
              r="68"
              fill={AMBER}
              fillOpacity="0.18"
              filter="blur(1px)"
            />
            <circle cx={cx} cy={cy} r="42" fill={AMBER} />
            <circle
              cx={cx}
              cy={cy}
              r="54"
              fill="none"
              stroke={AMBER}
              strokeOpacity="0.35"
              strokeWidth="0.7"
            />
            <text
              x={cx}
              y={cy - 4}
              textAnchor="middle"
              fill={BG}
              fontFamily="IBM Plex Mono"
              fontSize="11"
              fontWeight="700"
              letterSpacing="1.2"
            >
              2605.10617
            </text>
            <text
              x={cx}
              y={cy + 12}
              textAnchor="middle"
              fill={BG}
              fontFamily="Instrument Serif"
              fontSize="11"
              fontStyle="italic"
              opacity="0.8"
            >
              v4 · 117 cites
            </text>
          </g>

          {/* axis labels (compass) */}
          <text
            x={cx + 318}
            y={cy + 4}
            textAnchor="end"
            fill={TEXT_3}
            fontFamily="IBM Plex Mono"
            fontSize="9"
            letterSpacing="3"
          >
            REVIEWERS
          </text>
          <text
            x={cx - 318}
            y={cy + 4}
            textAnchor="start"
            fill={TEXT_3}
            fontFamily="IBM Plex Mono"
            fontSize="9"
            letterSpacing="3"
          >
            CITES BACK
          </text>
          <text
            x={cx}
            y={cy - 320}
            textAnchor="middle"
            fill={TEXT_3}
            fontFamily="IBM Plex Mono"
            fontSize="9"
            letterSpacing="3"
          >
            VERSIONS / AUTHORS
          </text>
          <text
            x={cx}
            y={cy + 332}
            textAnchor="middle"
            fill={TEXT_3}
            fontFamily="IBM Plex Mono"
            fontSize="9"
            letterSpacing="3"
          >
            CITED BY · 117
          </text>
        </svg>

        {/* legend */}
        <div
          className="absolute bottom-4 left-4 right-4 px-4 py-3 grid grid-cols-2 md:grid-cols-4 gap-3 text-[11px] border"
          style={{
            borderColor: BORDER,
            background: "rgba(20,17,12,0.85)",
            color: TEXT_2,
            fontFamily: mono,
          }}
        >
          <Legend c={AMBER} k="● Paper" />
          <Legend c={INDIGO} k="◆ Author" />
          <Legend c={TEAL} k="■ Reviewer" />
          <Legend c={CORAL} k="● Citation" />
        </div>
      </div>
    </div>
  );
}

function Legend({ c, k }: { c: string; k: string }) {
  return (
    <div className="flex items-center gap-2">
      <span style={{ color: c }}>{k.split(" ")[0]}</span>
      <span style={{ color: BONE, letterSpacing: "0.18em", textTransform: "uppercase" }}>
        {k.split(" ")[1]}
      </span>
    </div>
  );
}

function Ticker() {
  const items = [
    "+1 cite · Hong → 2605.10617",
    "ai-review complete · 2605.11842 · composite 89.2",
    "rev L. Hofstadter signed · 2605.10617 · round 2",
    "v4 published · 2605.10617 · CC BY 4.0",
    "+3 reviewers assigned · 2605.10999",
    "DOI 10.84121/openratio.2605.11401 · issued",
    "ORCID verified for new author · 2605.11900",
  ];
  return (
    <div
      className="border-y py-2"
      style={{
        borderColor: BORDER,
        background: SURFACE,
      }}
    >
      <div className="marquee whitespace-nowrap">
        {[...Array(2)].map((_, k) => (
          <div
            key={k}
            className="flex gap-12 pr-12 text-[11px]"
            style={{ fontFamily: mono, color: TEXT_2 }}
          >
            {items.map((m, i) => (
              <span key={`${k}-${i}`} className="flex items-center gap-3">
                <span style={{ color: AMBER }}>EDGE</span>
                <span>{m}</span>
                <span style={{ color: TEXT_3 }}>·</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Anatomy() {
  const entities = [
    {
      label: "Paper",
      color: AMBER,
      shape: "circle",
      desc: "A manuscript with a DOI, license, version, and abstract.",
      props: ["DOI", "Version", "License", "Field", "Status"],
    },
    {
      label: "Author",
      color: INDIGO,
      shape: "diamond",
      desc: "An identified researcher, ORCID-verified, with affiliation.",
      props: ["ORCID", "Affiliation (ROR)", "Contribution", "Conflicts"],
    },
    {
      label: "Reviewer",
      color: TEAL,
      shape: "square",
      desc: "An invited expert who returns structured findings.",
      props: ["ORCID", "Field", "Signed?", "Round", "Recommendation"],
    },
    {
      label: "Citation",
      color: CORAL,
      shape: "circle",
      desc: "A directional edge from one paper to another.",
      props: ["From DOI", "To DOI", "Version", "Context", "Self-cite?"],
    },
  ];

  return (
    <section className="border-b" style={{ borderColor: BORDER }}>
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12 py-24 md:py-32">
        <Eyebrow n="01" tag="anatomy of the network" />
        <h2
          className="mt-3 max-w-3xl"
          style={{
            fontFamily: display,
            fontSize: "clamp(44px, 5.4vw, 76px)",
            lineHeight: 1,
            fontWeight: 400,
            letterSpacing: "-0.01em",
          }}
        >
          Four entities. <em style={{ color: AMBER }}>One graph.</em>
        </h2>
        <p
          className="mt-6 max-w-2xl text-[17px] leading-[1.65]"
          style={{ color: PARCHMENT }}
        >
          Open Ratio is built around a graph that anyone can query. Authors
          connect to papers, papers cite papers, reviewers leave signed comments,
          and every version of every paper is its own node — with its own DOI.
        </p>

        <div className="mt-14 grid grid-cols-12 gap-6">
          {entities.map((e) => (
            <div
              key={e.label}
              className="col-span-12 sm:col-span-6 lg:col-span-3 border p-6 relative"
              style={{ borderColor: BORDER, background: SURFACE }}
            >
              <NodeShape color={e.color} shape={e.shape as never} />
              <div
                className="mt-5 text-[10px] tracking-[0.42em] uppercase"
                style={{ color: e.color, fontFamily: mono }}
              >
                Entity · {e.label.toLowerCase()}
              </div>
              <h3
                className="mt-2 text-[36px] leading-[1]"
                style={{ fontFamily: display, color: BONE, fontWeight: 400 }}
              >
                {e.label}
              </h3>
              <p
                className="mt-3 text-[15px] leading-[1.6]"
                style={{ color: PARCHMENT }}
              >
                {e.desc}
              </p>
              <ul
                className="mt-5 pt-4 border-t space-y-1.5 text-[11px]"
                style={{ borderColor: BORDER, fontFamily: mono, color: TEXT_2 }}
              >
                {e.props.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span style={{ color: e.color }}>·</span>
                    <span>{p}</span>
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

function NodeShape({
  color,
  shape,
}: {
  color: string;
  shape: "circle" | "diamond" | "square";
}) {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56">
      {shape === "circle" && (
        <>
          <circle cx="28" cy="28" r="22" fill="none" stroke={color} strokeOpacity="0.3" />
          <circle cx="28" cy="28" r="14" fill={color} />
        </>
      )}
      {shape === "diamond" && (
        <g transform="translate(28,28) rotate(45)">
          <rect x="-22" y="-22" width="44" height="44" fill="none" stroke={color} strokeOpacity="0.3" />
          <rect x="-12" y="-12" width="24" height="24" fill={color} />
        </g>
      )}
      {shape === "square" && (
        <>
          <rect x="6" y="6" width="44" height="44" fill="none" stroke={color} strokeOpacity="0.3" />
          <rect x="14" y="14" width="28" height="28" fill={color} />
        </>
      )}
    </svg>
  );
}

function Eyebrow({ n, tag }: { n: string; tag: string }) {
  return (
    <div
      className="text-[11px] tracking-[0.42em] uppercase flex items-center gap-3"
      style={{ color: AMBER, fontFamily: mono }}
    >
      <span style={{ color: TEXT_3 }}>§{n}</span>
      <span className="inline-block w-3 h-px" style={{ background: AMBER }} />
      <span>{tag}</span>
    </div>
  );
}

function Pipeline() {
  const stages = [
    { l: "Manuscript", c: BONE, m: "draft" },
    { l: "Preprint", c: AMBER, m: "indexed" },
    { l: "AI Review", c: VIOLET, m: "92s · 6 axes" },
    { l: "Human Review", c: TEAL, m: "2× signed" },
    { l: "Revision", c: CORAL, m: "diff committed" },
    { l: "Accepted", c: AMBER, m: "DOI reserved" },
    { l: "Published", c: BONE, m: "version of record" },
  ];

  return (
    <section className="border-b" style={{ borderColor: BORDER }}>
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12 py-24 md:py-32">
        <Eyebrow n="02" tag="trajectory · the publishing flow" />
        <h2
          className="mt-3 max-w-4xl"
          style={{
            fontFamily: display,
            fontSize: "clamp(44px, 5.4vw, 80px)",
            lineHeight: 1,
            fontWeight: 400,
            letterSpacing: "-0.01em",
          }}
        >
          A paper&rsquo;s path is a{" "}
          <em style={{ color: AMBER }}>traversal</em>, not a switch.
        </h2>

        <div
          className="mt-14 rounded-2xl border relative overflow-hidden"
          style={{ borderColor: BORDER, background: SURFACE }}
        >
          <div className="p-6 md:p-10">
            <svg viewBox="0 0 1100 220" className="w-full h-auto">
              <defs>
                <pattern id="bgdots" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="0" cy="0" r="0.7" fill={BORDER} />
                </pattern>
              </defs>
              <rect width="1100" height="220" fill="url(#bgdots)" opacity="0.4" />

              {/* curve */}
              <path
                d="M 60 130 C 200 60, 320 200, 460 110 S 720 60, 860 150 S 1040 100, 1060 130"
                fill="none"
                stroke={BORDER_2}
                strokeWidth="1"
                strokeDasharray="3 4"
              />
              <path
                d="M 60 130 C 200 60, 320 200, 460 110 S 720 60, 860 150 S 1040 100, 1060 130"
                fill="none"
                stroke={AMBER}
                strokeWidth="2"
                opacity="0.7"
              />

              {stages.map((s, i) => {
                const x = 60 + i * (1000 / (stages.length - 1));
                const y =
                  i === 0
                    ? 130
                    : i === 1
                    ? 60
                    : i === 2
                    ? 200
                    : i === 3
                    ? 110
                    : i === 4
                    ? 60
                    : i === 5
                    ? 150
                    : 130;
                return (
                  <g key={s.l}>
                    <circle
                      cx={x}
                      cy={y}
                      r="14"
                      fill={s.c}
                      stroke={BG}
                      strokeWidth="3"
                    />
                    <circle
                      cx={x}
                      cy={y}
                      r="22"
                      fill="none"
                      stroke={s.c}
                      strokeOpacity="0.3"
                    />
                    <text
                      x={x}
                      y={y - 32}
                      textAnchor="middle"
                      fill={BONE}
                      fontFamily="Instrument Serif"
                      fontSize="20"
                      fontStyle="italic"
                    >
                      {s.l}
                    </text>
                    <text
                      x={x}
                      y={y + 38}
                      textAnchor="middle"
                      fill={TEXT_2}
                      fontFamily="IBM Plex Mono"
                      fontSize="10"
                      letterSpacing="2"
                    >
                      {s.m.toUpperCase()}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
          <div
            className="border-t px-6 md:px-10 py-4 text-[12px]"
            style={{ borderColor: BORDER, color: TEXT_2, fontFamily: mono }}
          >
            <span style={{ color: AMBER }}>NOTE.</span> Average end-to-end
            traversal time: <span style={{ color: BONE }}>12 days</span>. Each
            edge is a state transition recorded on the public ledger; the curve
            above is one paper&rsquo;s actual track from May 2026.
          </div>
        </div>
      </div>
    </section>
  );
}

function CitationGraph() {
  const stars = [
    { x: 0.18, y: 0.32, r: 14, t: "Phys. Rev. C 2025", c: AMBER },
    { x: 0.32, y: 0.55, r: 8, t: "Tanaka et al. 2024", c: AMBER },
    { x: 0.46, y: 0.28, r: 18, t: "Vinogradova 2026", c: AMBER },
    { x: 0.56, y: 0.62, r: 10, t: "Adesanmi 2024", c: AMBER },
    { x: 0.7, y: 0.4, r: 6, t: "Liang 2023", c: AMBER },
    { x: 0.82, y: 0.66, r: 12, t: "Park 2025", c: AMBER },
    { x: 0.22, y: 0.78, r: 9, t: "Hong 2022", c: AMBER },
    { x: 0.4, y: 0.18, r: 7, t: "Berisha 2026", c: AMBER },
    { x: 0.62, y: 0.18, r: 6, t: "Mehta 2023", c: AMBER },
    { x: 0.78, y: 0.32, r: 11, t: "Hofstadter 2025", c: AMBER },
    { x: 0.88, y: 0.5, r: 8, t: "Brennan 2022", c: AMBER },
    { x: 0.12, y: 0.5, r: 10, t: "Olusegun 2024", c: AMBER },
  ];
  const edges = [
    [0, 2], [2, 5], [5, 9], [9, 4], [4, 3], [3, 6], [6, 0], [1, 11], [1, 7], [7, 11],
    [8, 9], [3, 1], [10, 5], [10, 9], [11, 6],
  ];
  return (
    <section className="border-b" style={{ borderColor: BORDER }}>
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-5">
            <Eyebrow n="03" tag="map · cited by" />
            <h2
              className="mt-3"
              style={{
                fontFamily: display,
                fontSize: "clamp(40px, 5vw, 64px)",
                lineHeight: 1,
                fontWeight: 400,
                letterSpacing: "-0.01em",
              }}
            >
              The map is{" "}
              <em style={{ color: AMBER }}>queryable</em>. The map is{" "}
              <em style={{ color: AMBER }}>citable</em>. The map is{" "}
              <em style={{ color: AMBER }}>open</em>.
            </h2>
            <p
              className="mt-6 text-[17px] leading-[1.65]"
              style={{ color: PARCHMENT }}
            >
              Every Open Ratio paper publishes its inbound and outbound citation
              edges. Anyone can pull the full graph as JSON or RDF; the data is
              CC0; the API is free.
            </p>

            <ul
              className="mt-8 space-y-3 text-[14px]"
              style={{ fontFamily: mono, color: TEXT_2 }}
            >
              {[
                ["GET /v1/paper/{doi}", "the paper itself"],
                ["GET /v1/paper/{doi}/cites", "outbound citations"],
                ["GET /v1/paper/{doi}/cited-by", "inbound citations"],
                ["GET /v1/author/{orcid}", "author dossier"],
                ["GET /v1/reviewer/{orcid}", "review record"],
                ["GET /v1/graph?center={doi}&depth=2", "neighborhood"],
              ].map(([k, v], i) => (
                <li key={i} className="flex flex-col">
                  <span style={{ color: AMBER }}>{k}</span>
                  <span style={{ color: TEXT_3 }}>{v}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div
              className="rounded-2xl border relative overflow-hidden"
              style={{
                borderColor: BORDER,
                background: SURFACE,
                boxShadow: "0 30px 80px -30px rgba(0,0,0,0.7)",
              }}
            >
              <div
                className="px-5 py-3 border-b text-[11px] tracking-[0.18em] uppercase flex items-center justify-between"
                style={{ borderColor: BORDER, color: TEXT_2, fontFamily: mono }}
              >
                <span>Atlas / cluster · cs.LG · cond-mat · q-bio.TO</span>
                <span style={{ color: AMBER }}>+ 12,481 papers</span>
              </div>

              <div className="relative" style={{ height: 540 }}>
                <svg viewBox="0 0 800 540" className="w-full h-full">
                  <defs>
                    <pattern
                      id="cdots"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle cx="0" cy="0" r="0.6" fill={BORDER} />
                    </pattern>
                  </defs>
                  <rect width="800" height="540" fill="url(#cdots)" />

                  {/* edges */}
                  {edges.map(([a, b], i) => {
                    const sa = stars[a];
                    const sb = stars[b];
                    return (
                      <line
                        key={i}
                        x1={sa.x * 800}
                        y1={sa.y * 540}
                        x2={sb.x * 800}
                        y2={sb.y * 540}
                        stroke={CORAL}
                        strokeOpacity="0.35"
                        strokeWidth="0.8"
                      />
                    );
                  })}

                  {stars.map((s, i) => (
                    <g key={i}>
                      <circle
                        cx={s.x * 800}
                        cy={s.y * 540}
                        r={s.r + 8}
                        fill={s.c}
                        fillOpacity="0.15"
                      />
                      <circle
                        cx={s.x * 800}
                        cy={s.y * 540}
                        r={s.r}
                        fill={s.c}
                      />
                      <text
                        x={s.x * 800 + s.r + 6}
                        y={s.y * 540 + 4}
                        fill={BONE}
                        fontFamily="Instrument Serif"
                        fontSize="13"
                        fontStyle="italic"
                      >
                        {s.t}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
              <div
                className="border-t px-5 py-3 text-[11px] flex items-center justify-between"
                style={{ borderColor: BORDER, color: TEXT_2, fontFamily: mono }}
              >
                <span>cluster · 12 papers · 15 edges visible</span>
                <span>
                  <span style={{ color: AMBER }}>API.</span> openratio.org/graph
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewerOrbit() {
  return (
    <section className="border-b" style={{ borderColor: BORDER }}>
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12 py-24 md:py-32">
        <Eyebrow n="04" tag="reviewers · the orbit" />
        <h2
          className="mt-3 max-w-3xl"
          style={{
            fontFamily: display,
            fontSize: "clamp(40px, 5vw, 64px)",
            lineHeight: 1,
            fontWeight: 400,
          }}
        >
          A reviewer is a <em style={{ color: AMBER }}>node</em>, with a
          history.
        </h2>

        <div className="mt-14 grid grid-cols-12 gap-6">
          {[
            { n: "Dr. Lila Hofstadter", inst: "ETH Zürich", spec: "cs.LG · cs.PL", reviews: 84, signed: 92, agree: 0.78, online: true },
            { n: "Prof. M. Park", inst: "Seoul Nat&apos;l Univ.", spec: "physics.med-ph", reviews: 132, signed: 100, agree: 0.81, online: true },
            { n: "Dr. R. Olusegun", inst: "Univ. Cape Town", spec: "q-bio.PE", reviews: 56, signed: 64, agree: 0.74, online: false },
            { n: "Prof. Y. Aboud", inst: "Mansoura Univ.", spec: "cond-mat.soft", reviews: 211, signed: 88, agree: 0.83, online: true },
          ].map((r, i) => (
            <div
              key={i}
              className="col-span-12 sm:col-span-6 lg:col-span-3 border p-6"
              style={{ borderColor: BORDER, background: SURFACE }}
            >
              <div className="flex items-center justify-between">
                <div
                  className="w-12 h-12 flex items-center justify-center"
                  style={{ background: TEAL, color: BG, fontFamily: display, fontSize: 18 }}
                >
                  {r.n.split(" ").map((p) => p[0]).join("")}
                </div>
                <span
                  className="text-[10px] tracking-[0.32em] uppercase flex items-center gap-2"
                  style={{ color: r.online ? AMBER : TEXT_3, fontFamily: mono }}
                >
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full"
                    style={{ background: r.online ? AMBER : TEXT_3 }}
                  />
                  {r.online ? "online" : "offline"}
                </span>
              </div>
              <div
                className="mt-4 text-[20px]"
                style={{ fontFamily: display, color: BONE }}
              >
                {r.n}
              </div>
              <div className="text-[12px]" style={{ color: TEXT_2, fontFamily: mono }}>
                {r.inst}
              </div>
              <div
                className="mt-3 text-[11px] tracking-[0.28em] uppercase"
                style={{ color: TEAL, fontFamily: mono }}
              >
                {r.spec}
              </div>
              <div
                className="mt-5 pt-4 border-t grid grid-cols-3 gap-3 text-[11px]"
                style={{ borderColor: BORDER, fontFamily: mono, color: TEXT_2 }}
              >
                <Mini l="reviews" v={r.reviews} />
                <Mini l="signed" v={`${r.signed}%`} />
                <Mini l="agree" v={r.agree.toFixed(2)} />
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-12 rounded-xl border p-6 md:p-8 grid grid-cols-12 gap-8 items-center"
          style={{ borderColor: BORDER, background: SURFACE }}
        >
          <div className="col-span-12 md:col-span-6">
            <div
              className="text-[10px] tracking-[0.42em] uppercase"
              style={{ color: AMBER, fontFamily: mono }}
            >
              How reviewers are paid
            </div>
            <h3
              className="mt-2 text-[28px] leading-[1.1]"
              style={{ fontFamily: display, color: BONE, fontWeight: 400 }}
            >
              <em>“No more invisible labour.”</em>
            </h3>
            <p
              className="mt-3 text-[15px] leading-[1.6]"
              style={{ color: PARCHMENT }}
            >
              Reviewers earn a stipend per completed review, scaled by region.
              Funded by libraries, foundations, and a small per-author submission
              fee that is waived in low-income contexts.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 grid grid-cols-2 gap-4">
            <Card l="Per review · global avg." v="$160" />
            <Card l="Per editor · monthly" v="$1.8k" />
            <Card l="Author APC · default" v="$240" sub="waived in low-income" />
            <Card l="Reader" v="Free, forever" sub="no paywall ever" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Mini({ l, v }: { l: string; v: string | number }) {
  return (
    <div>
      <div style={{ color: TEXT_3 }}>{l}</div>
      <div className="text-[14px] mt-0.5" style={{ color: BONE }}>
        {v}
      </div>
    </div>
  );
}

function Card({ l, v, sub }: { l: string; v: string; sub?: string }) {
  return (
    <div
      className="border p-4"
      style={{ borderColor: BORDER, background: SURFACE_2 }}
    >
      <div
        className="text-[10px] tracking-[0.32em] uppercase"
        style={{ color: AMBER, fontFamily: mono }}
      >
        {l}
      </div>
      <div className="mt-2 text-[24px]" style={{ fontFamily: display, color: BONE }}>
        {v}
      </div>
      {sub && (
        <div className="mt-1 text-[11px]" style={{ color: TEXT_3, fontFamily: mono }}>
          {sub}
        </div>
      )}
    </div>
  );
}

function Versioning() {
  const versions = [
    { v: "v1", d: "Apr 04 2026", note: "Initial preprint posted.", state: "Preprint" },
    { v: "v2", d: "Apr 17 2026", note: "AI integrity pass; corrected stats table.", state: "AI-reviewed" },
    { v: "v3", d: "Apr 26 2026", note: "Reviewer 2 comments addressed; new Fig. 6.", state: "Human-reviewed" },
    { v: "v4", d: "May 07 2026", note: "Final typeset; reproducibility data attached.", state: "Published" },
  ];

  return (
    <section className="border-b" style={{ borderColor: BORDER }}>
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12 py-24 md:py-32">
        <Eyebrow n="05" tag="versions · time" />
        <h2
          className="mt-3 max-w-3xl"
          style={{
            fontFamily: display,
            fontSize: "clamp(40px, 5vw, 64px)",
            lineHeight: 1,
            fontWeight: 400,
            letterSpacing: "-0.01em",
          }}
        >
          A version is a{" "}
          <em style={{ color: AMBER }}>moment in the record</em>.
        </h2>

        <div
          className="mt-14 rounded-2xl border p-6 md:p-10"
          style={{ borderColor: BORDER, background: SURFACE }}
        >
          <div className="relative grid grid-cols-12 gap-6">
            <div
              aria-hidden
              className="absolute left-[14px] top-2 bottom-2 w-px"
              style={{ background: AMBER_DIM }}
            />
            {versions.map((v, i) => (
              <div key={v.v} className="col-span-12 flex gap-6 items-start">
                <div className="relative z-10 mt-1">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{
                      background: i === versions.length - 1 ? AMBER : SURFACE_2,
                      border: `2px solid ${AMBER}`,
                      boxShadow: i === versions.length - 1 ? `0 0 14px ${AMBER}` : "none",
                      color: i === versions.length - 1 ? BG : AMBER,
                      fontFamily: mono,
                      fontSize: 10,
                      fontWeight: 600,
                    }}
                  >
                    {v.v}
                  </div>
                </div>
                <div className="flex-1 grid grid-cols-12 gap-6 items-baseline">
                  <div className="col-span-12 md:col-span-2">
                    <div
                      className="text-[11px] tracking-[0.32em] uppercase"
                      style={{ color: TEXT_3, fontFamily: mono }}
                    >
                      {v.d}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-7">
                    <div
                      className="text-[22px] leading-[1.2]"
                      style={{ fontFamily: display, color: BONE, fontStyle: "italic" }}
                    >
                      {v.note}
                    </div>
                    <div
                      className="mt-2 text-[11px]"
                      style={{ color: TEXT_2, fontFamily: mono }}
                    >
                      DOI 10.84121/openratio.2605.10617{v.v}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-3 md:text-right">
                    <StatusPill status={v.state} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-10 pt-6 border-t text-[12px] flex flex-wrap gap-x-8 gap-y-2"
            style={{ borderColor: BORDER, color: TEXT_2, fontFamily: mono }}
          >
            <span style={{ color: AMBER }}>NOTE.</span>
            <span>Each version retains its own DOI suffix; citations resolve to the version cited.</span>
            <span>·</span>
            <span>The version of record is hashed and timestamped across three regions.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusPill({ status }: { status: string }) {
  const map: Record<string, { fg: string; bg: string }> = {
    Draft: { fg: TEXT_2, bg: "transparent" },
    Preprint: { fg: AMBER, bg: `${AMBER}15` },
    "AI-reviewed": { fg: VIOLET, bg: `${VIOLET}20` },
    "Human-reviewed": { fg: TEAL, bg: `${TEAL}20` },
    Accepted: { fg: BONE, bg: `${AMBER}30` },
    Published: { fg: BG, bg: AMBER },
  };
  const s = map[status] ?? map.Preprint;
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] tracking-[0.28em] uppercase"
      style={{
        background: s.bg,
        color: s.fg,
        fontFamily: mono,
        border: `1px solid ${s.fg}40`,
      }}
    >
      <span
        className="inline-block w-1.5 h-1.5 rounded-full"
        style={{ background: s.fg, opacity: 0.7 }}
      />
      {status}
    </span>
  );
}

function Integrity() {
  const items = [
    { h: "Spam & meaningless content", p: "Aggressive filtering across coherence, citation farms, and AI-generated nonsense." },
    { h: "Plagiarism", p: "Cross-corpus similarity check across 41M papers, with overlap visualisations." },
    { h: "Unethical content", p: "IRB / ERB declarations required for human and animal studies, surfaced in the article header." },
    { h: "Fake authors", p: "ORCID + ROR + reverse-search and sock-puppet detection on review patterns." },
    { h: "Conflicts of interest", p: "Co-authorship and funding graphs are checked at review assignment." },
    { h: "Long-term integrity", p: "Three regional mirrors. Cryptographic timestamps. Public retraction record." },
  ];

  return (
    <section className="border-b" style={{ borderColor: BORDER }}>
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12 py-24 md:py-32">
        <Eyebrow n="06" tag="integrity" />
        <h2
          className="mt-3 max-w-4xl"
          style={{
            fontFamily: display,
            fontSize: "clamp(42px, 5.4vw, 72px)",
            lineHeight: 1,
            fontWeight: 400,
          }}
        >
          The graph is only as trustworthy as the{" "}
          <em style={{ color: AMBER }}>floor under it</em>.
        </h2>

        <div className="mt-14 grid grid-cols-12 gap-x-10 gap-y-12">
          {items.map((c, i) => (
            <div
              key={i}
              className="col-span-12 md:col-span-6 lg:col-span-4 border-t pt-6"
              style={{ borderColor: BORDER }}
            >
              <div className="flex items-baseline gap-3">
                <span
                  className="text-[12px] tabular-nums"
                  style={{ fontFamily: mono, color: AMBER }}
                >
                  06.{String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="text-[24px] leading-[1.1]"
                  style={{ fontFamily: display, color: BONE, fontWeight: 400 }}
                >
                  {c.h}
                </h3>
              </div>
              <p className="mt-3 text-[15px] leading-[1.65]" style={{ color: PARCHMENT }}>
                {c.p}
              </p>
            </div>
          ))}
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
        "Manuscript is private until you publish.",
        "AI surfaces defects before reviewers see them.",
        "Threaded responses to every reviewer comment.",
        "DOI within minutes of acceptance.",
        "All revisions are public.",
      ],
    },
    {
      who: "Readers",
      points: [
        "Free, open, no paywall, no registration.",
        "HTML, PDF, plain text, machine-readable JATS XML.",
        "Read every reviewer comment, every diff.",
        "Linked to data, code, and supplementary materials.",
        "Three regional mirrors guarantee long-term access.",
        "Cite the version you read; URL never breaks.",
      ],
    },
    {
      who: "Reviewers",
      points: [
        "AI does the boilerplate so you spend time on judgement.",
        "Sign your review or stay anonymous, your choice.",
        "Verifiable credit and a stipend per review.",
        "Editorial board paid, transparent, elected.",
        "Decisions and timelines visible to authors.",
        "Pre-committed timelines — no chasing.",
      ],
    },
  ];
  return (
    <section className="border-b" style={{ borderColor: BORDER }}>
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12 py-24 md:py-32">
        <Eyebrow n="07" tag="audiences · three" />
        <h2
          className="mt-3 max-w-3xl"
          style={{
            fontFamily: display,
            fontSize: "clamp(42px, 5.4vw, 72px)",
            lineHeight: 1,
            fontWeight: 400,
          }}
        >
          Authors. Readers. Reviewers.
          <br />
          <em style={{ color: AMBER }}>The same record, three doors in.</em>
        </h2>

        <div className="mt-14 grid grid-cols-12 gap-x-10 gap-y-14">
          {groups.map((g) => (
            <div key={g.who} className="col-span-12 md:col-span-4">
              <h3
                className="text-[44px] leading-[1]"
                style={{
                  fontFamily: display,
                  color: BONE,
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                {g.who}.
              </h3>
              <ol className="mt-7 space-y-4">
                {g.points.map((p, i) => (
                  <li
                    key={i}
                    className="flex gap-4 text-[16px] leading-[1.6]"
                    style={{ color: PARCHMENT }}
                  >
                    <span
                      className="text-[10px] mt-2"
                      style={{ fontFamily: mono, color: AMBER }}
                    >
                      ●{String(i + 1).padStart(2, "0")}
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
  return (
    <section className="border-b" style={{ borderColor: BORDER }}>
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12 py-24 md:py-32">
        <Eyebrow n="08" tag="licensing" />
        <h2
          className="mt-3 max-w-3xl"
          style={{
            fontFamily: display,
            fontSize: "clamp(40px, 5vw, 64px)",
            lineHeight: 1,
            fontWeight: 400,
          }}
        >
          Open licenses, <em style={{ color: AMBER }}>author-controlled</em>.
        </h2>
        <div className="mt-12 grid grid-cols-12 gap-6">
          {[
            { t: "CC BY 4.0", n: "Attribution", b: "Anyone may share and adapt for any purpose, including commercial, with credit." },
            { t: "CC BY-NC", n: "Non-commercial", b: "Share and adapt freely for non-commercial use, with attribution." },
            { t: "CC BY-SA", n: "Share-alike", b: "Adaptations must be released under the same open license." },
          ].map((l) => (
            <div
              key={l.t}
              className="col-span-12 md:col-span-4 border p-7"
              style={{ borderColor: BORDER, background: SURFACE }}
            >
              <div
                className="text-[10px] tracking-[0.42em] uppercase inline-block px-2 py-0.5"
                style={{
                  color: BG,
                  background: AMBER,
                  fontFamily: mono,
                }}
              >
                {l.t}
              </div>
              <div
                className="mt-5 text-[34px] leading-[1]"
                style={{ fontFamily: display, color: BONE, fontWeight: 400 }}
              >
                {l.n}
              </div>
              <p
                className="mt-3 text-[15.5px] leading-[1.65]"
                style={{ color: PARCHMENT }}
              >
                {l.b}
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
    <section className="border-b" style={{ borderColor: BORDER }}>
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12 py-32 md:py-44 text-center relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(700px 360px at 50% 50%, rgba(244,183,60,0.10) 0%, transparent 65%)",
          }}
        />
        <Eyebrow n="09" tag="join the network" />
        <h2
          className="mt-6 relative"
          style={{
            fontFamily: display,
            fontSize: "clamp(60px, 11vw, 168px)",
            lineHeight: 0.92,
            letterSpacing: "-0.01em",
            color: BONE,
            fontWeight: 400,
          }}
        >
          Place a star
          <br />
          <em style={{ color: AMBER }}>on the map.</em>
        </h2>
        <div className="mt-12 flex flex-wrap justify-center gap-3 relative">
          <Btn primary>Submit a manuscript</Btn>
          <Btn>Start with a preprint</Btn>
          <Btn>Explore the atlas</Btn>
        </div>
      </div>
    </section>
  );
}

function Foot() {
  return (
    <footer className="pt-20 pb-10 border-t" style={{ borderColor: BORDER }}>
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <div className="flex items-center gap-3">
            <Constellation />
            <span style={{ fontFamily: display, color: BONE, fontSize: 22 }}>
              Open <em style={{ color: AMBER }}>Ratio</em>
            </span>
          </div>
          <p className="mt-4 text-[13.5px] leading-[1.6] max-w-sm" style={{ color: PARCHMENT }}>
            An atlas of open scholarship. Authors, papers, citations,
            reviewers, versions — drawn as a public network.
          </p>
        </div>
        <div
          className="col-span-12 md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-[12px]"
          style={{ fontFamily: mono, color: TEXT_2 }}
        >
          <Foot1 t="Atlas" l={["Papers", "Authors", "Reviewers", "Citations"]} />
          <Foot1 t="API" l={["Graph", "Papers", "Authors", "Reviewers"]} />
          <Foot1 t="Open" l={["Governance", "Code", "Mirrors", "Donate"]} />
          <Foot1 t="Contact" l={["editorial@", "press@", "Status", "About"]} />
        </div>
      </div>
      <div
        className="mx-auto max-w-[1340px] px-6 lg:px-12 mt-10 pt-6 border-t flex flex-col md:flex-row md:items-center justify-between gap-3 text-[10px] tracking-[0.42em] uppercase"
        style={{ borderColor: BORDER, color: TEXT_3, fontFamily: mono }}
      >
        <span>© Open Ratio Foundation · MMXXVI</span>
        <span>Atlas data licensed CC0 · Articles CC BY 4.0</span>
        <span>ISSN 3088-7142</span>
      </div>
    </footer>
  );
}

function Foot1({ t, l }: { t: string; l: string[] }) {
  return (
    <div>
      <div
        className="mb-3 text-[10px] tracking-[0.42em] uppercase"
        style={{ color: AMBER }}
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
