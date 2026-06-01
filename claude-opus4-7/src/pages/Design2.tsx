import { Link } from "react-router-dom";

const BG = "#080b14";
const SURFACE = "#0e1326";
const SURFACE_2 = "#141a31";
const BORDER = "#1f2a4d";
const BORDER_2 = "#2a3a6a";
const CYAN = "#5cffd0";
const CYAN_DIM = "#2a5d54";
const PHOS = "#a3ff63";
const AMBER = "#ffd166";
const CORAL = "#ff7d6e";
const TEXT = "#dbe7ff";
const TEXT_2 = "#8090b3";
const TEXT_3 = "#4a587a";

const display = '"Bricolage Grotesque", ui-sans-serif, sans-serif';
const body = '"Inter Tight", ui-sans-serif, sans-serif';
const mono = '"JetBrains Mono", ui-monospace, monospace';

export function Design2() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ background: BG, color: TEXT, fontFamily: body }}
    >
      <BackgroundGrid />
      <BackgroundGlow />

      <div className="relative z-10">
        <Nav />
        <Hero />
        <LiveReview />
        <Pipeline />
        <ScoringSystem />
        <Findings />
        <ReviewerLoop />
        <Integrity />
        <Comparison />
        <ProofOfRecord />
        <BigCTA />
        <Foot />
      </div>
    </div>
  );
}

function BackgroundGrid() {
  return (
    <>
      <svg
        aria-hidden
        className="pointer-events-none fixed inset-0 w-full h-full opacity-[0.18]"
        style={{ zIndex: 0 }}
      >
        <defs>
          <pattern id="g" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="#1f2a4d"
              strokeWidth="0.5"
            />
          </pattern>
          <pattern id="d" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="0" cy="0" r="1" fill="#2a3a6a" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#g)" />
        <rect width="100%" height="100%" fill="url(#d)" />
      </svg>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          zIndex: 0,
          background:
            "linear-gradient(180deg, transparent 0%, rgba(8,11,20,0.4) 50%, rgba(8,11,20,0.95) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 mix-blend-overlay opacity-[0.35]"
        style={{
          zIndex: 0,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0, transparent 2px, rgba(92,255,208,0.04) 2px, rgba(92,255,208,0.04) 3px)",
        }}
      />
    </>
  );
}

function BackgroundGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0"
      style={{
        zIndex: 0,
        background:
          "radial-gradient(800px 500px at 75% 10%, rgba(92,255,208,0.10) 0%, transparent 60%), radial-gradient(700px 600px at 5% 60%, rgba(43,109,255,0.10) 0%, transparent 60%)",
      }}
    />
  );
}

function Nav() {
  return (
    <header
      className="border-b sticky top-0 backdrop-blur z-30"
      style={{ borderColor: BORDER, background: "rgba(8,11,20,0.8)" }}
    >
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-3 flex items-center justify-between">
        <div className="flex items-center gap-7">
          <Link to="/" className="flex items-center gap-2.5">
            <Logo />
            <span
              className="text-[15px] tracking-[0.04em]"
              style={{ fontFamily: display, fontWeight: 600 }}
            >
              open<span style={{ color: CYAN }}>·</span>ratio
            </span>
          </Link>
          <nav
            className="hidden md:flex items-center gap-6 text-[12px]"
            style={{ fontFamily: mono, color: TEXT_2 }}
          >
            <a className="hover:text-white" href="#review">/review</a>
            <a className="hover:text-white" href="#pipeline">/pipeline</a>
            <a className="hover:text-white" href="#integrity">/integrity</a>
            <a className="hover:text-white" href="#publish">/publish</a>
          </nav>
        </div>

        <div
          className="hidden md:flex items-center gap-5 text-[11px]"
          style={{ fontFamily: mono, color: TEXT_2 }}
        >
          <span className="flex items-center gap-2">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: PHOS, boxShadow: `0 0 10px ${PHOS}` }}
            />
            <span>system / online</span>
          </span>
          <span style={{ color: TEXT_3 }}>·</span>
          <span>v0.4.18</span>
          <a
            className="px-3 py-1.5 rounded-full text-[11px]"
            style={{ background: CYAN, color: BG, fontFamily: mono, fontWeight: 600 }}
            href="#"
          >
            run review →
          </a>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="9" stroke={CYAN} strokeWidth="1" />
      <circle cx="11" cy="11" r="4" fill={CYAN} />
      <path d="M2 11 H20" stroke={CYAN} strokeWidth="0.5" strokeDasharray="2 2" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 pt-16 lg:pt-24 pb-10 grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-7">
          <div
            className="flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase"
            style={{ fontFamily: mono, color: CYAN }}
          >
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ background: CYAN, boxShadow: `0 0 12px ${CYAN}` }}
            />
            <span>Open Ratio · Review Lab</span>
            <span style={{ color: TEXT_3 }}>—</span>
            <span style={{ color: TEXT_2 }}>build 26.05.10</span>
          </div>

          <h1
            className="mt-7"
            style={{
              fontFamily: display,
              fontSize: "clamp(48px, 7.4vw, 116px)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              fontWeight: 600,
            }}
          >
            <span>The </span>
            <span style={{ color: CYAN }}>review lab</span>
            <span> for </span>
            <br />
            <span style={{ fontStyle: "italic", fontWeight: 400 }}>the era of</span>{" "}
            <span style={{ fontWeight: 700 }}>automated science.</span>
          </h1>

          <p className="mt-7 text-[18px] leading-[1.55] max-w-2xl" style={{ color: TEXT_2 }}>
            Open Ratio runs every manuscript through an AI review pipeline that
            checks methodology, statistics, references, integrity, novelty, and
            authorship — then routes it to human reviewers with structured,
            traceable findings.{" "}
            <span style={{ color: TEXT }}>
              Every signal is shown. Every reasoning step is auditable.
            </span>
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 text-[12px]" style={{ fontFamily: mono }}>
            <a
              className="px-5 py-3 rounded-full inline-flex items-center gap-2"
              style={{
                background: CYAN,
                color: BG,
                fontWeight: 700,
                boxShadow: `0 0 30px ${CYAN}40`,
              }}
              href="#"
            >
              <span>▶</span> Run a live AI review
            </a>
            <a
              className="px-5 py-3 rounded-full border inline-flex items-center gap-2"
              style={{ borderColor: BORDER_2, color: TEXT }}
              href="#"
            >
              Submit a manuscript
            </a>
            <span className="ml-2" style={{ color: TEXT_3 }}>
              ↘ avg. analysis time 92s
            </span>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5">
          <HeroDataPanel />
        </div>
      </div>

      <Ticker />
    </section>
  );
}

function HeroDataPanel() {
  return (
    <div
      className="rounded-2xl border overflow-hidden relative"
      style={{
        borderColor: BORDER,
        background: SURFACE,
        boxShadow: "0 30px 80px -30px rgba(0,0,0,0.7)",
      }}
    >
      <div
        className="flex items-center justify-between px-5 py-3 border-b text-[11px]"
        style={{ borderColor: BORDER, fontFamily: mono, color: TEXT_2 }}
      >
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ background: PHOS, boxShadow: `0 0 10px ${PHOS}` }}
          />
          <span style={{ color: PHOS }}>analyzing</span>
          <span style={{ color: TEXT_3 }}>·</span>
          <span>2605.11842</span>
          <span style={{ color: TEXT_3 }}>·</span>
          <span>v3</span>
        </div>
        <span>00:01:32</span>
      </div>

      <div className="p-5">
        <div className="text-[10px] tracking-[0.32em] uppercase" style={{ color: TEXT_3, fontFamily: mono }}>
          Title under review
        </div>
        <div className="mt-2 text-[18px] leading-[1.3]" style={{ fontFamily: display, fontWeight: 500 }}>
          Sparse Mixture Routing for Long-Context Retrieval in Climate Models
        </div>
        <div className="mt-1 text-[12px]" style={{ color: TEXT_2 }}>
          M. Alaoui · J. Park · S. Vinogradova
        </div>

        <div className="mt-6">
          <div
            className="flex justify-between text-[10px] tracking-[0.28em] uppercase mb-2"
            style={{ color: TEXT_3, fontFamily: mono }}
          >
            <span>Pipeline · 6 / 8</span>
            <span style={{ color: CYAN }}>76%</span>
          </div>
          <div className="h-1.5 rounded overflow-hidden" style={{ background: BORDER }}>
            <div
              className="h-full"
              style={{
                width: "76%",
                background: `linear-gradient(90deg, ${CYAN_DIM}, ${CYAN})`,
                boxShadow: `0 0 18px ${CYAN}90`,
              }}
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-2.5">
          {[
            { tag: "01", l: "Methodology", v: "0.91", s: "ok" },
            { tag: "02", l: "Statistical robustness", v: "0.74", s: "warn" },
            { tag: "03", l: "Reference integrity", v: "1.00", s: "ok" },
            { tag: "04", l: "Originality vs. 41M papers", v: "0.99", s: "ok" },
            { tag: "05", l: "Authorship verification", v: "ORCID×3", s: "ok" },
            { tag: "06", l: "Conflicts of interest", v: "none", s: "ok" },
            { tag: "07", l: "Reproducibility checks", v: "running…", s: "run" },
            { tag: "08", l: "Editorial composite", v: "—", s: "pending" },
          ].map((c) => (
            <div
              key={c.tag}
              className="flex items-center gap-3 text-[12px] py-1"
              style={{ fontFamily: mono }}
            >
              <span style={{ color: TEXT_3, width: 22 }}>{c.tag}</span>
              <span className="flex-1" style={{ color: TEXT }}>{c.l}</span>
              <span
                style={{
                  color:
                    c.s === "ok" ? PHOS : c.s === "warn" ? AMBER : c.s === "run" ? CYAN : TEXT_3,
                  width: 86,
                  textAlign: "right",
                }}
              >
                {c.v}
              </span>
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{
                  background:
                    c.s === "ok" ? PHOS : c.s === "warn" ? AMBER : c.s === "run" ? CYAN : "#2a3a6a",
                  boxShadow:
                    c.s === "ok" ? `0 0 10px ${PHOS}80` :
                    c.s === "warn" ? `0 0 10px ${AMBER}80` :
                    c.s === "run" ? `0 0 10px ${CYAN}80` : "none",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Ticker() {
  const items = [
    "MAN-2605.11401 · accepted at 18:42",
    "MAN-2605.11833 · ai-review complete (92.4)",
    "MAN-2605.10617 · DOI 10.84121/openratio.2605.10617 issued",
    "MAN-2605.10999 · 3 reviewers assigned",
    "MAN-2605.09241 · v4 · revisions filed by author",
    "MAN-2605.10488 · published · 320 citations to-date",
    "MAN-2605.11842 · originality 99.4 / novelty 0.81",
    "MAN-2605.10770 · COI flagged · routed for editor review",
  ];
  return (
    <div
      className="border-y mt-12 py-2 overflow-hidden"
      style={{ borderColor: BORDER, background: SURFACE }}
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
                <span style={{ color: CYAN }}>EVENT</span>
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

function Eyebrow({ n, tag }: { n: string; tag: string }) {
  return (
    <div
      className="text-[11px] tracking-[0.32em] uppercase flex items-center gap-3"
      style={{ fontFamily: mono, color: CYAN }}
    >
      <span style={{ color: TEXT_3 }}>§{n}</span>
      <span className="inline-block w-3 h-px" style={{ background: CYAN }} />
      <span>{tag}</span>
    </div>
  );
}

function LiveReview() {
  return (
    <section id="review" className="border-b" style={{ borderColor: BORDER }}>
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-24 md:py-32 grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-5">
          <Eyebrow n="01" tag="ai · review" />
          <h2
            className="mt-3"
            style={{
              fontFamily: display,
              fontSize: "clamp(42px, 5vw, 68px)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              fontWeight: 600,
            }}
          >
            A second pair of <span style={{ color: CYAN }}>eyes</span> that reads{" "}
            <em>everything</em>.
          </h2>
          <p className="mt-6 text-[16px] leading-[1.6]" style={{ color: TEXT_2 }}>
            The AI reviewer doesn’t replace human judgment. It removes the
            boilerplate — flagged stats, broken refs, undisclosed conflicts,
            sock-puppet authorships — so the humans who follow can spend their
            attention on the things that actually need a person.
          </p>

          <ul
            className="mt-8 space-y-3 text-[14px]"
            style={{ fontFamily: mono, color: TEXT_2 }}
          >
            {[
              ["methods", "Reproduces every algorithmic claim against pseudocode."],
              ["stats", "Re-runs declared analyses on supplied data; flags p-hacks."],
              ["refs", "Resolves DOIs, finds retractions, repairs broken citations."],
              ["novelty", "Cross-checks 41M papers for the closest priors."],
              ["integrity", "Surfaces image manipulation, duplicate text, AI-gen."],
              ["authorship", "Verifies ORCIDs, institutions, contribution claims."],
            ].map(([k, v]) => (
              <li key={k} className="flex gap-4">
                <span style={{ color: CYAN, width: 90 }} className="shrink-0 uppercase">
                  /{k}
                </span>
                <span style={{ color: TEXT }}>{v}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <ReviewMockup />
        </div>
      </div>
    </section>
  );
}

function ReviewMockup() {
  return (
    <div
      className="rounded-2xl border overflow-hidden"
      style={{
        borderColor: BORDER,
        background: SURFACE,
        boxShadow: "0 30px 80px -30px rgba(0,0,0,0.6)",
      }}
    >
      <div
        className="flex items-center justify-between px-5 py-3 border-b text-[11px]"
        style={{ borderColor: BORDER, fontFamily: mono, color: TEXT_2 }}
      >
        <div className="flex items-center gap-3">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ background: PHOS, boxShadow: `0 0 8px ${PHOS}` }}
          />
          <span>open-ratio / review-engine</span>
          <span style={{ color: TEXT_3 }}>·</span>
          <span>manuscript_2605.11842.tex</span>
        </div>
        <span>composite 89.2 / 100</span>
      </div>

      <div className="grid grid-cols-12">
        <div
          className="col-span-12 md:col-span-5 border-r p-5 text-[11px]"
          style={{ borderColor: BORDER, fontFamily: mono, color: TEXT_2 }}
        >
          <div className="tracking-[0.28em] uppercase mb-3" style={{ color: TEXT_3 }}>
            Manuscript · §3 results
          </div>
          <div className="leading-[1.7] whitespace-pre-wrap" style={{ fontFamily: mono }}>
            {`\\section{Results}\n\nWe evaluate \\textsc{SparseMix} against\ntwo strong baselines on the\n\\texttt{Era5-90Y} retrieval corpus.\n\n`}
            <span
              style={{
                background: AMBER + "20",
                borderBottom: `1px dashed ${AMBER}`,
                padding: "0 2px",
                color: TEXT,
              }}
            >
              Across all settings, our model outperforms baselines by a wide margin.
            </span>
            {`\n\nThe mean recall@10 reaches `}
            <span style={{ color: PHOS }}>0.842</span>
            {` ± `}
            <span
              style={{
                background: AMBER + "20",
                color: AMBER,
                borderBottom: `1px dashed ${AMBER}`,
              }}
            >
              0.013
            </span>
            {`,\nsuggesting `}
            <span
              style={{
                background: AMBER + "20",
                color: TEXT,
                borderBottom: `1px dashed ${AMBER}`,
              }}
            >
              statistical significance
            </span>
            {` at p<0.05.\n\nWe attribute this to the routing\nmechanism, which `}
            <span
              style={{
                background: CORAL + "20",
                color: TEXT,
                borderBottom: `1px dashed ${CORAL}`,
              }}
            >
              consistently selects the top-3 experts
            </span>
            {` for each token.`}
          </div>
        </div>

        <div className="col-span-12 md:col-span-7 p-5 grid gap-3">
          <Finding
            severity="warn"
            tag="stats / overstatement"
            title="“Wide margin” is unspecified."
            text='Reviewer suggests quantifying the gap (e.g. “4.2 pts recall@10 vs. RouterMoE”) and reporting effect size.'
            ref="L. 184–187"
          />
          <Finding
            severity="warn"
            tag="stats / variance"
            title="Confidence interval too narrow."
            text="±0.013 across 3 seeds is unusually tight. Suggest reporting per-seed numbers and bootstrap CI."
            ref="L. 192"
          />
          <Finding
            severity="critical"
            tag="claim / unsupported"
            title="“Top-3 experts” claim contradicts Fig. 4."
            text="Routing histogram in Fig. 4 shows top-1 dominance (74%); top-3 selection is inconsistent with this evidence."
            ref="L. 198 / Fig. 4"
          />
          <Finding
            severity="ok"
            tag="refs / integrity"
            title="187 references resolved · 3 broken DOIs auto-fixed."
            text="No retracted citations. ORCIDs validated for 3/3 corresponding authors."
          />
          <Finding
            severity="ok"
            tag="integrity / authorship"
            title="No undisclosed conflicts of interest."
            text="Co-authorship graph and grant ledger checked against editor and reviewer pool."
          />
        </div>
      </div>

      <div
        className="border-t px-5 py-3 flex items-center justify-between text-[11px]"
        style={{ borderColor: BORDER, fontFamily: mono, color: TEXT_2 }}
      >
        <span>
          <span style={{ color: TEXT_3 }}>verdict ⟶</span>{" "}
          <span style={{ color: AMBER }}>recommend minor revision</span>{" "}
          <span style={{ color: TEXT_3 }}>·</span>{" "}
          <span>2 critical findings to address</span>
        </span>
        <span>
          <span style={{ color: TEXT_3 }}>route ⟶</span>{" "}
          <span style={{ color: CYAN }}>2 human reviewers</span>
        </span>
      </div>
    </div>
  );
}

function Finding({
  severity,
  tag,
  title,
  text,
  ref,
}: {
  severity: "ok" | "warn" | "critical";
  tag: string;
  title: string;
  text: string;
  ref?: string;
}) {
  const color = severity === "ok" ? PHOS : severity === "warn" ? AMBER : CORAL;
  return (
    <div
      className="rounded-lg border p-3 text-[12.5px]"
      style={{ borderColor: BORDER, background: SURFACE_2 }}
    >
      <div className="flex items-center gap-2 mb-1.5">
        <span
          className="inline-block w-1.5 h-1.5 rounded-full"
          style={{ background: color, boxShadow: `0 0 10px ${color}80` }}
        />
        <span
          className="text-[10px] tracking-[0.28em] uppercase"
          style={{ color, fontFamily: mono }}
        >
          {tag}
        </span>
        {ref && (
          <span className="ml-auto text-[10px]" style={{ color: TEXT_3, fontFamily: mono }}>
            {ref}
          </span>
        )}
      </div>
      <div
        className="text-[15px] leading-[1.3]"
        style={{ fontFamily: display, fontWeight: 500, color: TEXT }}
      >
        {title}
      </div>
      <div className="mt-1 leading-[1.5]" style={{ color: TEXT_2 }}>
        {text}
      </div>
    </div>
  );
}

function Pipeline() {
  const stages = [
    { n: "01", k: "Manuscript", c: "draft", color: TEXT_2 },
    { n: "02", k: "Preprint", c: "indexed · public", color: AMBER },
    { n: "03", k: "AI Review", c: "92s · 6 axes", color: CYAN },
    { n: "04", k: "Human Review", c: "2× signed", color: PHOS },
    { n: "05", k: "Revision", c: "diff committed", color: CYAN },
    { n: "06", k: "Accepted", c: "DOI reserved", color: PHOS },
    { n: "07", k: "Published", c: "version of record", color: TEXT },
  ];

  return (
    <section id="pipeline" className="border-b" style={{ borderColor: BORDER }}>
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <Eyebrow n="02" tag="pipeline · transparent" />
            <h2
              className="mt-3"
              style={{
                fontFamily: display,
                fontSize: "clamp(42px, 5vw, 72px)",
                lineHeight: 1,
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              From draft to{" "}
              <span style={{ color: CYAN }}>version of record</span>,
              <br />
              every transition <em>signed</em>.
            </h2>
          </div>
          <div className="text-[12px]" style={{ fontFamily: mono, color: TEXT_2 }}>
            avg. 12 days · arXiv-style preprint at minute 0
          </div>
        </div>

        <div
          className="mt-16 rounded-2xl border p-6 md:p-10 relative overflow-hidden"
          style={{ borderColor: BORDER, background: SURFACE }}
        >
          <div
            className="hidden md:block absolute left-10 right-10 top-[88px] h-px"
            style={{ background: BORDER_2 }}
          />
          <div className="relative grid grid-cols-2 md:grid-cols-7 gap-y-6 md:gap-x-3">
            {stages.map((s, i) => (
              <div key={s.n} className="relative">
                <div
                  className="text-[10px] tracking-[0.28em] uppercase"
                  style={{ color: TEXT_3, fontFamily: mono }}
                >
                  step {s.n}
                </div>
                <div
                  className="mt-1 text-[20px] md:text-[22px] leading-[1.05]"
                  style={{
                    fontFamily: display,
                    fontWeight: 600,
                    color: i === 2 ? CYAN : TEXT,
                  }}
                >
                  {s.k}
                </div>

                <div className="hidden md:flex justify-center my-3">
                  <span
                    className="inline-block w-3 h-3 rounded-full"
                    style={{
                      background: s.color,
                      boxShadow:
                        s.color !== TEXT && s.color !== TEXT_2
                          ? `0 0 12px ${s.color}80, inset 0 0 4px ${BG}`
                          : "none",
                      border: `2px solid ${BG}`,
                      outline: `1px solid ${BORDER_2}`,
                    }}
                  />
                </div>

                <div className="text-[12px]" style={{ color: s.color, fontFamily: mono }}>
                  {s.c}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-12 gap-6">
          <Box
            cols={4}
            label="DOI"
            big="10.84121/openratio.{id}"
            note="Persistent identifier issued at acceptance, mirrored across 3 regions."
          />
          <Box
            cols={4}
            label="License"
            big="CC BY 4.0"
            sub="· BY-NC · BY-SA"
            note="Author-controlled. Plan-S, NIH, ERC and FAIR mandates satisfied by default."
          />
          <Box
            cols={4}
            label="Version log"
            big="v1 → v2 → v3 → v4"
            note="Every revision keeps its own DOI suffix; citations resolve to the version cited."
          />
        </div>
      </div>
    </section>
  );
}

function Box({
  cols,
  label,
  big,
  sub,
  note,
}: {
  cols: number;
  label: string;
  big: string;
  sub?: string;
  note: string;
}) {
  return (
    <div
      className="rounded-xl border p-6"
      style={{
        gridColumn: `span ${cols} / span ${cols}`,
        borderColor: BORDER,
        background: SURFACE,
      }}
    >
      <div
        className="text-[10px] tracking-[0.32em] uppercase"
        style={{ color: CYAN, fontFamily: mono }}
      >
        {label}
      </div>
      <div className="mt-3 text-[24px] break-all" style={{ fontFamily: mono, color: TEXT, fontWeight: 500 }}>
        {big}
        {sub && <span style={{ color: TEXT_3 }}> {sub}</span>}
      </div>
      <div className="mt-3 text-[13px] leading-[1.5]" style={{ color: TEXT_2 }}>
        {note}
      </div>
    </div>
  );
}

function ScoringSystem() {
  const axes = [
    { tag: "methodology", val: 0.91, hint: "robust", color: PHOS },
    { tag: "statistics", val: 0.74, hint: "minor concerns", color: AMBER },
    { tag: "novelty", val: 0.81, hint: "well-positioned", color: PHOS },
    { tag: "integrity", val: 0.97, hint: "clean", color: PHOS },
    { tag: "references", val: 1.0, hint: "complete", color: PHOS },
    { tag: "reproducibility", val: 0.62, hint: "data partial", color: AMBER },
  ];

  return (
    <section className="border-b" style={{ borderColor: BORDER }}>
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-24 md:py-32">
        <Eyebrow n="03" tag="scoring · six axes" />
        <h2
          className="mt-3 max-w-3xl"
          style={{
            fontFamily: display,
            fontSize: "clamp(40px, 4.6vw, 64px)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            fontWeight: 600,
          }}
        >
          We don’t hide behind a single number.
        </h2>
        <p className="mt-5 max-w-2xl text-[16px] leading-[1.6]" style={{ color: TEXT_2 }}>
          Open Ratio reports six independent scores, each with the evidence that
          produced it. Authors and reviewers get to see — and challenge — the
          model’s reasoning. No black box.
        </p>

        <div className="mt-12 grid grid-cols-12 gap-5">
          {axes.map((a, i) => (
            <Gauge key={a.tag} tag={a.tag} val={a.val} hint={a.hint} color={a.color} i={i} />
          ))}
        </div>

        <div
          className="mt-8 rounded-2xl border p-6 md:p-8 grid grid-cols-12 gap-6 items-end"
          style={{ borderColor: BORDER, background: SURFACE }}
        >
          <div className="col-span-12 md:col-span-5">
            <div
              className="text-[10px] tracking-[0.32em] uppercase"
              style={{ color: CYAN, fontFamily: mono }}
            >
              Editorial composite
            </div>
            <div
              className="mt-3 text-[88px] md:text-[120px] leading-none"
              style={{
                fontFamily: display,
                fontWeight: 700,
                letterSpacing: "-0.04em",
                color: TEXT,
              }}
            >
              89.2
            </div>
            <div className="mt-3 text-[14px]" style={{ color: TEXT_2 }}>
              Six-axis weighted, editor-tunable. The model never decides
              acceptance — it suggests routing.
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <Histogram />
          </div>
        </div>
      </div>
    </section>
  );
}

function Gauge({
  tag,
  val,
  hint,
  color,
  i,
}: {
  tag: string;
  val: number;
  hint: string;
  color: string;
  i: number;
}) {
  const r = 38;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - val);
  return (
    <div
      className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-2 rounded-xl border p-5"
      style={{ borderColor: BORDER, background: SURFACE }}
    >
      <div
        className="flex items-center justify-between text-[10px] tracking-[0.28em] uppercase mb-3"
        style={{ color: TEXT_3, fontFamily: mono }}
      >
        <span>{String(i + 1).padStart(2, "0")}</span>
        <span style={{ color }}>{hint}</span>
      </div>
      <div className="flex items-center gap-4">
        <svg width="86" height="86" viewBox="0 0 86 86">
          <circle cx="43" cy="43" r={r} fill="none" stroke={BORDER_2} strokeWidth="4" />
          <circle
            cx="43"
            cy="43"
            r={r}
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={offset}
            transform="rotate(-90 43 43)"
            style={{ filter: `drop-shadow(0 0 6px ${color}80)` }}
          />
          <text
            x="43"
            y="48"
            textAnchor="middle"
            fontSize="18"
            fontFamily="JetBrains Mono"
            fill={TEXT}
            fontWeight={600}
          >
            {val.toFixed(2)}
          </text>
        </svg>
        <div>
          <div
            className="text-[14px]"
            style={{ fontFamily: display, fontWeight: 600, color: TEXT }}
          >
            {tag}
          </div>
          <div
            className="mt-1 text-[10px] tracking-[0.28em] uppercase"
            style={{ color: TEXT_3, fontFamily: mono }}
          >
            score · 0.00–1.00
          </div>
        </div>
      </div>
    </div>
  );
}

function Histogram() {
  const bars = [3, 6, 8, 12, 18, 22, 28, 35, 42, 56, 72, 88, 78, 56, 41, 33, 24, 16, 9, 4];
  const max = Math.max(...bars);
  return (
    <div>
      <div
        className="text-[10px] tracking-[0.28em] uppercase mb-3 flex items-center gap-3"
        style={{ color: TEXT_3, fontFamily: mono }}
      >
        <span>Composite distribution · last 30 days</span>
        <span style={{ color: CYAN }}>your paper ↓ 89.2</span>
      </div>
      <div className="flex items-end gap-1.5 h-32">
        {bars.map((b, i) => {
          const isYou = i === 13;
          return (
            <div
              key={i}
              className="flex-1 rounded-t-sm relative"
              style={{
                height: `${(b / max) * 100}%`,
                background: isYou ? CYAN : BORDER_2,
                boxShadow: isYou ? `0 0 18px ${CYAN}` : "none",
              }}
            />
          );
        })}
      </div>
      <div
        className="mt-2 flex justify-between text-[10px]"
        style={{ color: TEXT_3, fontFamily: mono }}
      >
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
    </div>
  );
}

function Findings() {
  const cards = [
    { sev: "ok", title: "Authors verified", d: "ORCID, ROR institution, contribution roles cross-checked at submission.", m: "Public retraction record · 0 hits" },
    { sev: "warn", title: "Statistical concern", d: "Reported confidence intervals are narrower than expected for the seed count.", m: "Suggested · per-seed reporting" },
    { sev: "ok", title: "Originality 99.4%", d: "Closest priors identified and cited. 0.6% overlap is acceptable self-cite.", m: "vs. 41M-paper corpus" },
    { sev: "warn", title: "Method not fully reproducible", d: "Hyperparameter table omits learning-rate schedule. 1 missing config file.", m: "Patch suggested · 1 line" },
    { sev: "ok", title: "References integrity", d: "All 187 cites resolved · 3 broken DOIs repaired automatically.", m: "0 retractions" },
    { sev: "critical", title: "Inconsistency · Fig 4 vs. claim", d: "Routing histogram contradicts the “top-3 experts” claim in §3.2.", m: "Reviewer attention required" },
  ];
  return (
    <section className="border-b" style={{ borderColor: BORDER }}>
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-24 md:py-32">
        <Eyebrow n="04" tag="findings · structured" />
        <h2
          className="mt-3 max-w-3xl"
          style={{
            fontFamily: display,
            fontSize: "clamp(42px, 5vw, 64px)",
            lineHeight: 1,
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          Every finding is{" "}
          <span style={{ color: CYAN }}>structured, traceable, contestable</span>.
        </h2>

        <div className="mt-12 grid grid-cols-12 gap-5">
          {cards.map((c, i) => (
            <article
              key={i}
              className="col-span-12 md:col-span-6 lg:col-span-4 rounded-xl border p-6 relative overflow-hidden"
              style={{ borderColor: BORDER, background: SURFACE }}
            >
              <div
                className="absolute inset-x-0 top-0"
                style={{
                  background:
                    c.sev === "ok"
                      ? `linear-gradient(90deg, ${PHOS}, transparent)`
                      : c.sev === "warn"
                      ? `linear-gradient(90deg, ${AMBER}, transparent)`
                      : `linear-gradient(90deg, ${CORAL}, transparent)`,
                  height: 2,
                }}
              />
              <div
                className="text-[10px] tracking-[0.32em] uppercase flex items-center gap-2"
                style={{
                  color: c.sev === "ok" ? PHOS : c.sev === "warn" ? AMBER : CORAL,
                  fontFamily: mono,
                }}
              >
                <span>finding · {String(i + 1).padStart(3, "0")}</span>
                <span>·</span>
                <span>{c.sev}</span>
              </div>
              <h3
                className="mt-3 text-[24px] leading-[1.1]"
                style={{ fontFamily: display, fontWeight: 600, color: TEXT }}
              >
                {c.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.55]" style={{ color: TEXT_2 }}>
                {c.d}
              </p>
              <div
                className="mt-4 pt-4 border-t text-[11px]"
                style={{ borderColor: BORDER, color: TEXT_3, fontFamily: mono }}
              >
                {c.m}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewerLoop() {
  return (
    <section className="border-b" style={{ borderColor: BORDER }}>
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-24 md:py-32 grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-5">
          <Eyebrow n="05" tag="humans · the deciders" />
          <h2
            className="mt-3"
            style={{
              fontFamily: display,
              fontSize: "clamp(40px, 4.6vw, 60px)",
              lineHeight: 1,
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            Models read the paper.
            <br />
            <span style={{ color: CYAN }}>Humans decide what it means.</span>
          </h2>
          <p className="mt-6 text-[16px] leading-[1.6]" style={{ color: TEXT_2 }}>
            Open Ratio routes manuscripts to invited reviewers with the AI
            findings already attached. Reviewers can sign or stay anonymous, and
            every comment becomes part of the public record on accept.
          </p>

          <div className="mt-8 grid gap-3">
            <Bullet k="signed" t="Reviewers may publish under their own name." s="Optional · default anonymous" />
            <Bullet k="paid" t="Reviewers earn verifiable credit and a stipend." s="Funded by the author fee, scaled by region" />
            <Bullet k="timed" t="Pre-committed timelines, visible to authors." s="Median: 11 days first round" />
            <Bullet k="public" t="Every comment becomes part of the article." s="Hidden during review · published on accept" />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <ReviewerCard />
        </div>
      </div>
    </section>
  );
}

function Bullet({ k, t, s }: { k: string; t: string; s: string }) {
  return (
    <div
      className="rounded-lg border p-4 flex items-start gap-4"
      style={{ borderColor: BORDER, background: SURFACE }}
    >
      <span
        className="px-2 py-0.5 text-[10px] tracking-[0.28em] uppercase shrink-0"
        style={{
          background: CYAN_DIM,
          color: CYAN,
          fontFamily: mono,
          border: `1px solid ${CYAN}40`,
        }}
      >
        {k}
      </span>
      <div>
        <div className="text-[15px]" style={{ color: TEXT, fontWeight: 500 }}>
          {t}
        </div>
        <div className="mt-1 text-[12px]" style={{ color: TEXT_3, fontFamily: mono }}>
          {s}
        </div>
      </div>
    </div>
  );
}

function ReviewerCard() {
  return (
    <div
      className="rounded-2xl border overflow-hidden"
      style={{ borderColor: BORDER, background: SURFACE }}
    >
      <div
        className="px-5 py-3 border-b text-[11px] flex items-center justify-between"
        style={{ borderColor: BORDER, fontFamily: mono, color: TEXT_2 }}
      >
        <span>review_2605.11842 · reviewer 2 / 3</span>
        <span style={{ color: PHOS }}>signed · published</span>
      </div>
      <div className="p-5 grid grid-cols-12 gap-5 border-b" style={{ borderColor: BORDER }}>
        <div className="col-span-12 md:col-span-5">
          <div
            className="rounded-lg border p-4"
            style={{ borderColor: BORDER, background: SURFACE_2 }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${CYAN}, ${CYAN_DIM})`,
                  boxShadow: `0 0 16px ${CYAN}50`,
                }}
              />
              <div>
                <div className="text-[14px]" style={{ fontFamily: display, fontWeight: 600 }}>
                  Dr. Lila Hofstadter
                </div>
                <div
                  className="text-[10px] tracking-[0.3em] uppercase"
                  style={{ color: TEXT_3, fontFamily: mono }}
                >
                  ETH Zürich · ORCID 0000-0002…
                </div>
              </div>
            </div>
            <div
              className="mt-3 grid grid-cols-2 gap-3 text-[11px]"
              style={{ fontFamily: mono }}
            >
              <Stat l="reviews" v="84" />
              <Stat l="median round" v="9 d" />
              <Stat l="signed rate" v="92%" />
              <Stat l="agreement" v="0.78" />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 grid gap-3">
          <Bubble
            speaker="reviewer"
            text='"The phase-2 design is well-justified; controls are appropriate. I would, however, ask the authors to expand the discussion of long-term retention beyond 6 months."'
          />
          <Bubble
            speaker="author"
            text='"Thanks for the careful read. We have added a 12-month follow-up paragraph in §5.3 and updated Fig. 6 to include individual subject trajectories, as suggested."'
          />
          <Bubble
            speaker="reviewer"
            text='"The new figure is clearer and the long-term discussion is appropriately measured. Recommendation: accept with minor edits."'
            tone="ok"
          />
        </div>
      </div>
      <div
        className="px-5 py-3 text-[11px] flex flex-wrap items-center gap-x-6 gap-y-2"
        style={{ fontFamily: mono, color: TEXT_2 }}
      >
        <span style={{ color: PHOS }}>recommendation · accept · minor revision</span>
        <span style={{ color: TEXT_3 }}>·</span>
        <span>round 2 · turnaround 6 days</span>
        <span style={{ color: TEXT_3 }}>·</span>
        <span>visible to public on accept</span>
      </div>
    </div>
  );
}

function Stat({ l, v }: { l: string; v: string }) {
  return (
    <div>
      <div style={{ color: TEXT_3 }}>{l}</div>
      <div style={{ color: TEXT, fontSize: 14 }}>{v}</div>
    </div>
  );
}

function Bubble({
  speaker,
  text,
  tone,
}: {
  speaker: "reviewer" | "author";
  text: string;
  tone?: "ok";
}) {
  const isAuthor = speaker === "author";
  return (
    <div className="flex gap-3">
      <span
        className="text-[10px] tracking-[0.28em] uppercase shrink-0 w-16 mt-1"
        style={{ color: isAuthor ? AMBER : CYAN, fontFamily: mono }}
      >
        {speaker}
      </span>
      <div
        className="rounded-lg border p-3 text-[13.5px] leading-[1.55] flex-1"
        style={{
          borderColor: tone === "ok" ? `${PHOS}40` : BORDER,
          background:
            tone === "ok" ? `${PHOS}10` : isAuthor ? `${AMBER}10` : SURFACE_2,
          color: TEXT,
        }}
      >
        {text}
      </div>
    </div>
  );
}

function Integrity() {
  const items = [
    { t: "spam · meaningless", v: "filtered", d: "AI-gen / citation farms / coherence checks" },
    { t: "plagiarism", v: "scanned", d: "41M papers + 8M arXiv preprints, exoneration paths for self-cite" },
    { t: "unethical content", v: "declared", d: "IRB / ERB declarations required for human / animal studies" },
    { t: "fake authors", v: "verified", d: "ORCID + institution + sock-puppet detection on review patterns" },
    { t: "conflicts of interest", v: "graphed", d: "Co-authorship and funding graphs checked at every assignment" },
    { t: "long-term integrity", v: "mirrored", d: "3 regions · checksums · cryptographic timestamps" },
  ];
  return (
    <section id="integrity" className="border-b" style={{ borderColor: BORDER }}>
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-24 md:py-32">
        <Eyebrow n="06" tag="integrity · the floor" />
        <h2
          className="mt-3 max-w-3xl"
          style={{
            fontFamily: display,
            fontSize: "clamp(42px, 5vw, 68px)",
            lineHeight: 1,
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          A scholarly record only matters if it{" "}
          <span style={{ color: CYAN }}>can be trusted</span>.
        </h2>

        <div className="mt-12 grid grid-cols-12 gap-3">
          {items.map((it, i) => (
            <div
              key={i}
              className="col-span-12 md:col-span-6 lg:col-span-4 rounded-xl border p-5 flex items-start gap-4"
              style={{ borderColor: BORDER, background: SURFACE }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: SURFACE_2, border: `1px solid ${BORDER_2}` }}
              >
                <span
                  className="inline-block w-2.5 h-2.5 rounded-full"
                  style={{ background: PHOS, boxShadow: `0 0 10px ${PHOS}80` }}
                />
              </div>
              <div>
                <div
                  className="text-[10px] tracking-[0.32em] uppercase"
                  style={{ color: CYAN, fontFamily: mono }}
                >
                  {it.t}
                </div>
                <div className="mt-1 text-[20px]" style={{ fontFamily: display, fontWeight: 600 }}>
                  {it.v}
                </div>
                <div className="mt-1 text-[12.5px]" style={{ color: TEXT_2 }}>
                  {it.d}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section className="border-b" style={{ borderColor: BORDER }}>
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-24 md:py-32">
        <Eyebrow n="07" tag="vs." />
        <h2
          className="mt-3 max-w-4xl"
          style={{
            fontFamily: display,
            fontSize: "clamp(40px, 4.6vw, 60px)",
            lineHeight: 1,
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          Three problems with how science gets published — and what we did instead.
        </h2>

        <div className="mt-12 grid grid-cols-12 gap-5">
          {[
            { old: "Closed peer review", new: "Public on accept", note: "Every reviewer comment, every round, every diff — visible after the article publishes." },
            { old: "12-month review queues", new: "AI pass in ~92s", note: "Authors get structured feedback in minutes, not months. Humans decide what to do with it." },
            { old: "$3,000+ APCs", new: "Author fee scaled by region", note: "Funded by foundations and libraries. The reader never pays. The author rarely does." },
            { old: "Frozen PDFs", new: "Versioned record", note: "Every revision lives on, with its own DOI, so citations always resolve to the version cited." },
            { old: "Hidden retractions", new: "Public retraction record", note: "Every retraction, expression of concern, and correction is part of the public scholarly record." },
            { old: "Vendor lock-in", new: "Open infrastructure", note: "All metadata, JATS XML, code, and review reports are openly licensed and machine-readable." },
          ].map((p, i) => (
            <div
              key={i}
              className="col-span-12 md:col-span-6 lg:col-span-4 rounded-xl border overflow-hidden"
              style={{ borderColor: BORDER, background: SURFACE }}
            >
              <div
                className="px-5 py-3 text-[11px] tracking-[0.28em] uppercase border-b"
                style={{ borderColor: BORDER, color: TEXT_3, fontFamily: mono }}
              >
                <span style={{ textDecoration: "line-through" }}>{p.old}</span>
              </div>
              <div className="p-5">
                <div
                  className="text-[28px] leading-[1.05]"
                  style={{ fontFamily: display, fontWeight: 600, color: CYAN }}
                >
                  {p.new}
                </div>
                <div className="mt-3 text-[14px] leading-[1.5]" style={{ color: TEXT_2 }}>
                  {p.note}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProofOfRecord() {
  return (
    <section id="publish" className="border-b" style={{ borderColor: BORDER }}>
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-24 md:py-32 grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-5">
          <Eyebrow n="08" tag="published · forever" />
          <h2
            className="mt-3"
            style={{
              fontFamily: display,
              fontSize: "clamp(38px, 4.6vw, 56px)",
              lineHeight: 1,
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            The version of record is{" "}
            <span style={{ color: CYAN }}>cryptographically signed</span>.
          </h2>
          <p className="mt-6 text-[15.5px] leading-[1.6]" style={{ color: TEXT_2 }}>
            Every accepted paper is mirrored in three regions, hashed, and
            timestamped. Citations cannot silently drift. Retractions are
            announced, not hidden. The record is real.
          </p>

          <ul className="mt-7 grid gap-3" style={{ fontFamily: mono, color: TEXT_2 }}>
            <li className="flex items-center gap-3 text-[13px]">
              <span style={{ color: PHOS }}>✓</span>
              <span>Three geographically distributed mirrors (US-E, EU-W, AP-S)</span>
            </li>
            <li className="flex items-center gap-3 text-[13px]">
              <span style={{ color: PHOS }}>✓</span>
              <span>SHA-256 checksum published with every version</span>
            </li>
            <li className="flex items-center gap-3 text-[13px]">
              <span style={{ color: PHOS }}>✓</span>
              <span>RFC 3161 timestamps from two independent TSAs</span>
            </li>
            <li className="flex items-center gap-3 text-[13px]">
              <span style={{ color: PHOS }}>✓</span>
              <span>Crossref + DataCite + ORCID + ROR for full graph</span>
            </li>
          </ul>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <CertificateCard />
        </div>
      </div>
    </section>
  );
}

function CertificateCard() {
  return (
    <div
      className="rounded-2xl border overflow-hidden"
      style={{ borderColor: BORDER, background: SURFACE }}
    >
      <div
        className="px-5 py-3 border-b text-[11px] flex items-center gap-3"
        style={{ borderColor: BORDER, fontFamily: mono, color: TEXT_2 }}
      >
        <span
          className="inline-block w-1.5 h-1.5 rounded-full"
          style={{ background: PHOS, boxShadow: `0 0 10px ${PHOS}` }}
        />
        <span>certificate.json</span>
        <span style={{ color: TEXT_3 }}>·</span>
        <span>application/vnd.openratio.cert+jws</span>
        <span className="ml-auto" style={{ color: PHOS }}>verified</span>
      </div>
      <div
        className="p-5 text-[12px] leading-[1.7] whitespace-pre-wrap"
        style={{ fontFamily: mono, color: TEXT_2 }}
      >
        {`{\n  "doi": "10.84121/openratio.2605.10617",\n  "version": "v4",\n  "title": "Cartilage Repair via Light-Activated`}
        <span style={{ color: TEXT }}> Hydrogels</span>
        {`...",\n  "license": "CC-BY-4.0",\n  "published": "2026-05-07T18:42:11Z",\n  "sha256": "`}
        <span style={{ color: CYAN }}>5e1c…4bd3</span>
        {`",\n  "mirrors": ["us-e", "eu-w", "ap-s"],\n  "signers": [\n    { "kid": "openratio-2026-04", "alg": "Ed25519" },\n    { "kid": "tsa-digicert-eu",  "alg": "RSA-2048"  }\n  ],\n  "review": {\n    "ai_composite": `}
        <span style={{ color: PHOS }}>89.2</span>
        {`,\n    "human_reviews": 3,\n    "rounds": 2,\n    "signed_reviewers": 2\n  }\n}`}
      </div>
    </div>
  );
}

function BigCTA() {
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
            "radial-gradient(800px 360px at 50% 80%, rgba(92,255,208,0.20) 0%, transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-32 md:py-44 text-center relative">
        <Eyebrow n="09" tag="ship · now" />
        <h2
          className="mt-6"
          style={{
            fontFamily: display,
            fontSize: "clamp(60px, 11vw, 168px)",
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            fontWeight: 700,
          }}
        >
          Submit a manuscript.
          <br />
          <span style={{ color: CYAN }}>Watch it get reviewed.</span>
        </h2>
        <div
          className="mt-12 flex flex-wrap justify-center gap-3 text-[13px]"
          style={{ fontFamily: mono }}
        >
          <a
            className="px-6 py-3.5 rounded-full inline-flex items-center gap-2 font-bold"
            style={{ background: CYAN, color: BG, boxShadow: `0 0 30px ${CYAN}80` }}
            href="#"
          >
            ▶ Submit a manuscript
          </a>
          <a
            className="px-6 py-3.5 rounded-full border"
            style={{ borderColor: BORDER_2, color: TEXT }}
            href="#"
          >
            Start with a preprint
          </a>
          <a
            className="px-6 py-3.5 rounded-full border"
            style={{ borderColor: BORDER_2, color: TEXT }}
            href="#"
          >
            Explore published research
          </a>
        </div>
        <div
          className="mt-10 max-w-2xl mx-auto text-[13px] leading-[1.6]"
          style={{ color: TEXT_2 }}
        >
          Open Ratio is an open, non-profit publishing infrastructure. The
          reader never pays. The data, the metadata, the review reports, and
          the code are all open.
        </div>
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
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <div className="flex items-center gap-2.5">
            <Logo />
            <span
              className="text-[15px] tracking-[0.04em]"
              style={{ fontFamily: display, fontWeight: 600 }}
            >
              open<span style={{ color: CYAN }}>·</span>ratio
            </span>
          </div>
          <p className="mt-4 text-[13px] leading-[1.6] max-w-sm" style={{ color: TEXT_2 }}>
            Open-access publishing for the AI age. Preprints, AI review, human
            review, and a permanent version of record.
          </p>
        </div>
        <div
          className="col-span-12 md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-[12px]"
          style={{ fontFamily: mono, color: TEXT_2 }}
        >
          <FootCol t="platform" l={["/submit", "/preprints", "/reviewers", "/editorial"]} />
          <FootCol t="ids" l={["doi", "orcid", "ror", "crossref"]} />
          <FootCol t="open" l={["governance", "code", "api", "mirrors"]} />
          <FootCol t="contact" l={["editorial@", "press@", "status", "donate"]} />
        </div>
      </div>
      <div
        className="mx-auto max-w-[1320px] px-6 lg:px-10 mt-10 pt-6 border-t flex flex-col md:flex-row md:items-center justify-between gap-3 text-[11px]"
        style={{ borderColor: BORDER, fontFamily: mono, color: TEXT_3 }}
      >
        <span>open ratio foundation · 2026</span>
        <span>cc-by-4.0 · ISSN 3088-7142</span>
        <span style={{ color: PHOS }}>● system / online · build 26.05.10</span>
      </div>
    </footer>
  );
}

function FootCol({ t, l }: { t: string; l: string[] }) {
  return (
    <div>
      <div className="text-[10px] tracking-[0.32em] uppercase mb-3" style={{ color: CYAN }}>
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
