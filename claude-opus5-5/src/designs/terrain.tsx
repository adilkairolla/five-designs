import { useState } from "react";
import { useReveal } from "@/lib/use-reveal";

const ORANGE = "#e8572a";
const INK = "#1f2a24";
const OLIVE = "#6b7d5a";

function ring(cx: number, cy: number, r: number, seed: number) {
  const pts: string[] = [];
  for (let i = 0; i <= 96; i++) {
    const t = (i / 96) * Math.PI * 2;
    const rr = r * (1 + 0.13 * Math.sin(3 * t + seed) + 0.07 * Math.sin(5 * t + seed * 2.1) + 0.035 * Math.sin(9 * t + seed * 3.3));
    pts.push(`${(cx + rr * Math.cos(t)).toFixed(1)},${(cy + rr * Math.sin(t) * 0.78).toFixed(1)}`);
  }
  return `M${pts.join("L")}Z`;
}

const HILLS = [
  { cx: 260, cy: 300, rings: 11, step: 26, seed: 1.2 },
  { cx: 980, cy: 220, rings: 14, step: 24, seed: 2.7 },
  { cx: 720, cy: 560, rings: 8, step: 28, seed: 4.1 },
  { cx: 1320, cy: 520, rings: 10, step: 25, seed: 0.4 },
];

const CONTOURS = HILLS.flatMap((h) =>
  Array.from({ length: h.rings }, (_, k) => ({ d: ring(h.cx, h.cy, h.step * (k + 1), h.seed + k * 0.18), major: k % 4 === 3 })),
);

const PEAKS = [
  { page: 6, h: 0.7, name: "Thesis", note: "Carbon pricing works best when the revenue goes back to households." },
  { page: 58, h: 0.96, name: "Evidence summit", note: "British Columbia: emissions fell 5–15% with no measurable GDP loss." },
  { page: 121, h: 0.6, name: "Counterpoint", note: "Border leakage. The argument is at its weakest here, and the author knows it." },
  { page: 176, h: 0.88, name: "Synthesis", note: "A dividend design that answers the leakage problem." },
  { page: 228, h: 0.55, name: "Conclusion", note: "Policy recommendations for three economy types." },
];

const VALLEYS = [
  { from: 78, to: 110, label: "Methodology: safe to skim if you trust the models" },
  { from: 188, to: 214, label: "Appendix tables: reference only" },
];

const PAGES = 240;
const PROFILE = Array.from({ length: PAGES }, (_, i) => {
  const p = i + 1;
  let v = 0.12 + 0.05 * Math.sin(p * 0.9) + 0.04 * Math.sin(p * 2.3 + 1);
  for (const pk of PEAKS) v = Math.max(v, pk.h * Math.exp(-((p - pk.page) ** 2) / (2 * 9 ** 2)) + 0.03 * Math.sin(p * 1.7));
  for (const va of VALLEYS) if (p >= va.from && p <= va.to) v *= 0.45;
  return Math.max(0.04, Math.min(1, v));
});

const PW = 1000;
const PH = 260;
const px = (i: number) => (i / (PAGES - 1)) * PW;
const py = (v: number) => PH - v * (PH - 30);
const PROFILE_LINE = PROFILE.map((v, i) => `${i ? "L" : "M"}${px(i).toFixed(1)},${py(v).toFixed(1)}`).join("");
const PROFILE_AREA = `${PROFILE_LINE}L${PW},${PH}L0,${PH}Z`;

function describe(page: number) {
  const near = PEAKS.find((p) => Math.abs(p.page - page) <= 8);
  if (near) return { kind: "Summit", title: near.name, body: near.note, color: ORANGE };
  const valley = VALLEYS.find((v) => page >= v.from && page <= v.to);
  if (valley) return { kind: "Valley", title: "Low ground", body: valley.label, color: "#2f6f8f" };
  return { kind: "Ridge", title: "Supporting evidence", body: "Worth reading when you want the detail behind the nearest summit.", color: OLIVE };
}

function ElevationProfile() {
  const [page, setPage] = useState(58);
  const info = describe(page);

  return (
    <div className="rounded-[2px] border border-[#1f2a24]/30 bg-[#f7f5ee] p-4 md:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-3 font-fragment text-xs tracking-wider uppercase">
        <span>Survey: The Climate Economics Review · 240 pp</span>
        <span className="text-[#1f2a24]/60">Elevation = importance to the argument</span>
      </div>

      <div className="relative mt-6">
        <svg
          viewBox={`0 0 ${PW} ${PH + 40}`}
          className="w-full cursor-crosshair touch-none select-none"
          onPointerMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * PW;
            setPage(Math.max(1, Math.min(PAGES, Math.round((x / PW) * (PAGES - 1)) + 1)));
          }}
          role="img"
          aria-label="Importance profile across 240 pages"
        >
          <defs>
            <linearGradient id="terrain-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor={OLIVE} stopOpacity={0.55} />
              <stop offset="1" stopColor={OLIVE} stopOpacity={0.05} />
            </linearGradient>
            <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="6" stroke="#2f6f8f" strokeWidth="1.2" strokeOpacity="0.5" />
            </pattern>
          </defs>
          {[0.25, 0.5, 0.75].map((g) => (
            <line key={g} x1={0} x2={PW} y1={py(g)} y2={py(g)} stroke={INK} strokeOpacity={0.12} strokeDasharray="3 5" />
          ))}
          {VALLEYS.map((v) => (
            <rect key={v.from} x={px(v.from - 1)} y={py(0.3)} width={px(v.to - v.from)} height={PH - py(0.3)} fill="url(#hatch)" />
          ))}
          <path d={PROFILE_AREA} fill="url(#terrain-fill)" />
          <path d={PROFILE_LINE} fill="none" stroke={INK} strokeWidth={1.6} />
          {PEAKS.map((pk) => (
            <g key={pk.page} transform={`translate(${px(pk.page - 1)},${py(PROFILE[pk.page - 1]) - 10})`}>
              <path d="M0,0 L-7,-12 L7,-12 Z" fill={ORANGE} transform="rotate(180 0 -6)" />
              <text y={-20} textAnchor="middle" fontFamily="Fragment Mono" fontSize={12} fill={INK}>
                {pk.name}
              </text>
            </g>
          ))}
          <line x1={px(page - 1)} x2={px(page - 1)} y1={0} y2={PH} stroke={info.color} strokeWidth={1.5} />
          <circle cx={px(page - 1)} cy={py(PROFILE[page - 1])} r={6} fill="#f7f5ee" stroke={info.color} strokeWidth={2.5} />
          {[1, 40, 80, 120, 160, 200, 240].map((p) => (
            <g key={p} transform={`translate(${px(p - 1)},${PH})`}>
              <line y2={8} stroke={INK} />
              <text y={26} textAnchor={p === 1 ? "start" : p === 240 ? "end" : "middle"} fontFamily="Fragment Mono" fontSize={12} fill={INK} fillOpacity={0.6}>
                p.{p}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <div className="mt-6 grid gap-4 border-t border-[#1f2a24]/20 pt-6 md:grid-cols-[180px_1fr_auto] md:items-center">
        <div className="font-fragment text-xs uppercase">
          <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: info.color }} /> {info.kind} · p.{page}
        </div>
        <div>
          <div className="font-bricolage text-2xl font-semibold">{info.title}</div>
          <div className="text-[#1f2a24]/75">{info.body}</div>
        </div>
        <div className="font-fragment text-xs text-[#1f2a24]/60">
          elev. {Math.round(PROFILE[page - 1] * 1000)} m
        </div>
      </div>
    </div>
  );
}

const ROUTES = [
  {
    key: "Flyover",
    time: "2 min",
    peaks: [1],
    items: ["3-line summary of the whole document", "The single strongest quote"],
    blurb: "See the shape from above. Good for deciding whether to read it at all.",
  },
  {
    key: "Day hike",
    time: "15 min",
    peaks: [0, 1, 3],
    items: ["Page-by-page summary of the summits", "Trail-marker hints at every turn", "8 quotes, cited", "Top 3 insights"],
    blurb: "Hit every summit and skip the valleys. You’ll be able to discuss it with confidence.",
  },
  {
    key: "Expedition",
    time: "Full read",
    peaks: [0, 1, 2, 3, 4],
    items: ["Everything in Day hike", "Hints inline as you read the original", "Glossary for every term of art", "Insights connecting chapters and other docs"],
    blurb: "Read every page, with a guide beside you who has already walked the route.",
  },
];

const ROUTE_PTS = [
  [70, 150],
  [210, 50],
  [330, 170],
  [460, 70],
  [560, 140],
];

function RoutePlanner() {
  const [r, setR] = useState(1);
  const route = ROUTES[r];
  const pts = route.peaks.map((i) => ROUTE_PTS[i]);
  const d = [[20, 190], ...pts, [610, 190]].map(([x, y], i) => `${i ? "L" : "M"}${x},${y}`).join("");

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
      <div>
        <div className="inline-flex border border-[#1f2a24] font-fragment text-xs uppercase" role="tablist">
          {ROUTES.map((ro, i) => (
            <button
              key={ro.key}
              role="tab"
              aria-selected={r === i}
              onClick={() => setR(i)}
              className={`px-4 py-2.5 transition-colors ${r === i ? "bg-[#1f2a24] text-[#f0ede4]" : "hover:bg-[#1f2a24]/10"}`}
            >
              {ro.key}
            </button>
          ))}
        </div>
        <div key={r} className="animate-in fade-in slide-in-from-left-2 duration-500">
          <div className="mt-8 flex items-baseline gap-4">
            <h3 className="font-bricolage text-5xl font-bold tracking-tight">{route.key}</h3>
            <span className="font-fragment text-sm text-[#e8572a]">{route.time}</span>
          </div>
          <p className="mt-3 max-w-md text-lg text-[#1f2a24]/75">{route.blurb}</p>
          <ul className="mt-6 space-y-3">
            {route.items.map((it) => (
              <li key={it} className="flex gap-3 border-b border-dashed border-[#1f2a24]/25 pb-3">
                <span className="text-[#e8572a]">⚑</span>
                {it}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative border border-[#1f2a24]/30 bg-[#f7f5ee] p-4">
        <svg viewBox="0 0 630 220" className="w-full">
          {ROUTE_PTS.map(([x, y], i) =>
            [44, 30, 16].map((rr, k) => (
              <ellipse key={`${i}-${k}`} cx={x} cy={y} rx={rr * 1.4} ry={rr} fill="none" stroke={OLIVE} strokeOpacity={0.5 - k * 0.1} />
            )),
          )}
          <path key={r} d={d} fill="none" stroke={ORANGE} strokeWidth={2.5} pathLength={1} className="draw" />
          <path d={d} fill="none" stroke={ORANGE} strokeWidth={2.5} strokeDasharray="2 8" strokeLinecap="round" opacity={0.35} />
          {ROUTE_PTS.map(([x, y], i) => {
            const on = route.peaks.includes(i);
            return (
              <g key={i} transform={`translate(${x},${y})`} opacity={on ? 1 : 0.3}>
                <path d="M0,-9 L8,5 L-8,5 Z" fill={on ? ORANGE : INK} />
                <text y={24} textAnchor="middle" fontFamily="Fragment Mono" fontSize={11} fill={INK}>
                  {PEAKS[i].name}
                </text>
              </g>
            );
          })}
          <circle cx={20} cy={190} r={5} fill={INK} />
          <text x={30} y={210} fontFamily="Fragment Mono" fontSize={10} fill={INK}>p.1</text>
          <circle cx={610} cy={190} r={5} fill={INK} />
          <text x={586} y={210} fontFamily="Fragment Mono" fontSize={10} fill={INK}>p.240</text>
        </svg>
      </div>
    </div>
  );
}

const KIT = [
  { sym: "▲", name: "Summits", what: "Summary", coord: "N 04°12′ · p.58", body: "The high points of the argument, in order, at whatever altitude you choose: one line, one page, or one page per chapter." },
  { sym: "⚑", name: "Trail markers", what: "Hints", coord: "N 11°40′ · p.121", body: "Signposts at the tricky turns: “read Fig. 7 before §4,” “this term means something narrower here.”" },
  { sym: "◆", name: "Specimens", what: "Quotes", coord: "N 02°03′ · p.176", body: "Exact lines collected and labeled with their page, ready to cite without backtracking." },
  { sym: "⌖", name: "Survey notes", what: "Insights", coord: "N 09°55′ · p.228", body: "What the terrain implies: hidden assumptions, tensions between chapters, links to your other documents." },
];

export default function Terrain() {
  useReveal();

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f0ede4] font-bricolage text-[#1f2a24] selection:bg-[#e8572a] selection:text-white">
      <section className="relative min-h-[100svh] overflow-hidden">
        <svg viewBox="0 0 1600 800" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
          {CONTOURS.map((c, i) => (
            <path key={i} d={c.d} fill="none" stroke={OLIVE} strokeWidth={c.major ? 1.4 : 0.7} strokeOpacity={c.major ? 0.55 : 0.35} />
          ))}
          <path d="M-20,700 C200,640 380,720 560,660 S900,560 1100,640 1400,700 1640,620" fill="none" stroke="#2f6f8f" strokeWidth={2.5} strokeOpacity={0.5} />
        </svg>

        {[
          { l: "16%", t: "34%", name: "Thesis", p: "p.6" },
          { l: "61%", t: "25%", name: "Evidence summit", p: "p.58" },
          { l: "83%", t: "63%", name: "Synthesis", p: "p.176" },
        ].map((m, i) => (
          <div key={m.name} className="absolute hidden items-center gap-2 md:flex" style={{ left: m.l, top: m.t }}>
            <span className="h-3 w-3 rounded-full bg-[#e8572a]" style={{ animation: `pulse-dot 2.4s ease-in-out ${i * 0.6}s infinite` }} />
            <span className="bg-[#f0ede4]/90 px-2 py-1 font-fragment text-xs">
              ▲ {m.name} <span className="text-[#1f2a24]/50">· {m.p}</span>
            </span>
          </div>
        ))}

        <header className="relative z-10 flex items-center justify-between px-5 py-5 md:px-10">
          <a href="#" className="flex items-center gap-3">
            <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
              <ellipse cx={16} cy={18} rx={14} ry={10} fill="none" stroke={INK} strokeWidth={1.5} />
              <ellipse cx={16} cy={16} rx={9} ry={6} fill="none" stroke={INK} strokeWidth={1.5} />
              <path d="M16,8 L20,15 L12,15 Z" fill={ORANGE} />
            </svg>
            <span className="text-xl font-bold tracking-tight">Ratio Reader</span>
          </a>
          <nav className="hidden gap-8 font-fragment text-xs uppercase md:flex">
            <a href="#profile" className="hover:text-[#e8572a]">Profile</a>
            <a href="#kit" className="hover:text-[#e8572a]">Field kit</a>
            <a href="#routes" className="hover:text-[#e8572a]">Routes</a>
            <a href="#permits" className="hover:text-[#e8572a]">Permits</a>
          </nav>
          <a href="#survey" className="bg-[#1f2a24] px-4 py-2 font-fragment text-xs text-[#f0ede4] uppercase hover:bg-[#e8572a]">
            Survey a PDF
          </a>
        </header>

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-5 pt-[14vh] pb-24 md:px-10">
          <p className="font-fragment text-xs tracking-[0.2em] text-[#e8572a] uppercase">Sheet 01 · A cartography of reading</p>
          <h1 className="mt-5 max-w-5xl text-[3.6rem] leading-[0.9] font-extrabold tracking-[-0.04em] sm:text-7xl lg:text-[8.5rem]">
            Every document has a <span className="relative inline-block italic font-light">shape.</span>
          </h1>
          <div className="mt-10 grid max-w-5xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-xl bg-[#f0ede4]/80 text-xl leading-snug backdrop-blur-[2px]">
              Ratio surveys your PDF and maps what matters: the <b>summits</b> worth climbing, the <b>trail markers</b> that keep you
              oriented, the <b>specimens</b> worth collecting, and the valleys you can safely skip.
            </p>
            <a href="#profile" className="group inline-flex items-center gap-3 border-2 border-[#1f2a24] bg-[#f0ede4] px-6 py-4 font-fragment text-sm uppercase transition-colors hover:bg-[#1f2a24] hover:text-[#f0ede4]">
              Read the map <span className="transition-transform group-hover:translate-y-1">↓</span>
            </a>
          </div>
        </div>

        <div className="absolute right-5 bottom-6 z-10 hidden font-fragment text-[0.65rem] md:right-10 md:block">
          <div className="flex items-end">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className={`h-2 w-14 border border-[#1f2a24] ${i % 2 ? "bg-[#f0ede4]" : "bg-[#1f2a24]"}`} />
            ))}
          </div>
          <div className="mt-1 flex w-56 justify-between">
            <span>0</span>
            <span>60</span>
            <span>120</span>
            <span>240 pp</span>
          </div>
        </div>
      </section>

      <section id="profile" className="mx-auto max-w-7xl px-5 py-24 md:px-10">
        <div className="reveal mb-12 grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <p className="font-fragment text-xs tracking-[0.2em] text-[#e8572a] uppercase">Sheet 02 · Elevation profile</p>
            <h2 className="mt-3 text-5xl leading-[0.95] font-extrabold tracking-tight md:text-7xl">
              See the whole climb <span className="font-light italic">before you start.</span>
            </h2>
          </div>
          <p className="text-lg text-[#1f2a24]/75">
            Ratio scores every page by how much it carries the argument. Drag across the profile: summits are core claims,
            ridges are supporting evidence, and hatched valleys are the parts you can safely skim.
          </p>
        </div>
        <div className="reveal">
          <ElevationProfile />
        </div>
      </section>

      <section id="kit" className="bg-[#1f2a24] px-5 py-24 text-[#f0ede4] md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-fragment text-xs tracking-[0.2em] text-[#e8572a] uppercase">Sheet 03 · Legend</p>
              <h2 className="mt-3 text-5xl font-extrabold tracking-tight md:text-7xl">Your field kit</h2>
            </div>
            <p className="max-w-sm text-[#f0ede4]/70">Every survey returns the same four instruments, each pinned to the page it came from.</p>
          </div>
          <div className="grid gap-px bg-[#f0ede4]/15 md:grid-cols-2 lg:grid-cols-4">
            {KIT.map((k, i) => (
              <div key={k.name} className="reveal group bg-[#1f2a24] p-8 transition-colors hover:bg-[#26342c]" style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-[#f0ede4]/40 text-2xl text-[#e8572a] transition-transform duration-500 group-hover:rotate-[360deg]">
                    {k.sym}
                  </span>
                  <span className="font-fragment text-[0.65rem] text-[#f0ede4]/45">{k.coord}</span>
                </div>
                <h3 className="mt-8 text-3xl font-bold">{k.name}</h3>
                <p className="font-fragment text-xs text-[#e8572a] uppercase">= {k.what}</p>
                <p className="mt-4 leading-relaxed text-[#f0ede4]/70">{k.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="routes" className="mx-auto max-w-7xl px-5 py-24 md:px-10">
        <div className="reveal mb-12">
          <p className="font-fragment text-xs tracking-[0.2em] text-[#e8572a] uppercase">Sheet 04 · Route planning</p>
          <h2 className="mt-3 max-w-3xl text-5xl leading-[0.95] font-extrabold tracking-tight md:text-7xl">
            How much time <span className="font-light italic">do you have?</span>
          </h2>
        </div>
        <div className="reveal">
          <RoutePlanner />
        </div>
      </section>

      <section className="border-y border-[#1f2a24]/20 bg-[#e6e2d5] px-5 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
          {[
            ["01", "Survey", "Upload a PDF, up to 1,000 pages. Scans, tables, and footnotes all count as terrain."],
            ["02", "Map", "Ratio measures the elevation of every page and places summits, markers, and specimens."],
            ["03", "Navigate", "Pick a route. Every claim links back to its page, so you can always check the ground yourself."],
          ].map(([n, t, b], i) => (
            <div key={n} className="reveal" style={{ transitionDelay: `${i * 110}ms` }}>
              <div className="flex items-center gap-4">
                <span className="font-fragment text-sm text-[#e8572a]">{n}</span>
                <span className="h-px flex-1 border-t border-dashed border-[#1f2a24]/40" />
              </div>
              <h3 className="mt-5 text-4xl font-bold tracking-tight">{t}</h3>
              <p className="mt-3 text-lg text-[#1f2a24]/75">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-28 text-center md:px-10">
        <blockquote className="reveal text-3xl leading-tight font-light tracking-tight md:text-5xl">
          “I review forty grant proposals a cycle. Ratio shows me where each one <b className="font-bold">peaks</b>, so I spend my
          attention on the summits and not the boilerplate.”
        </blockquote>
        <p className="reveal mt-8 font-fragment text-xs tracking-[0.2em] text-[#1f2a24]/60 uppercase">Dr. Aurelio Ventris · research council reviewer</p>
      </section>

      <section id="permits" className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
        <div className="reveal mb-12">
          <p className="font-fragment text-xs tracking-[0.2em] text-[#e8572a] uppercase">Sheet 05 · Permits</p>
          <h2 className="mt-3 text-5xl font-extrabold tracking-tight md:text-7xl">Pick a permit</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Day pass", "$0", ["5 surveys / month", "Summits + specimens", "Up to 80 pages"]],
            ["Trail", "$8", ["Unlimited surveys", "All four instruments", "Up to 1,000 pages", "Route planning"]],
            ["Expedition", "$20", ["Per member, for teams", "Shared atlas of documents", "Cross-document insights", "API access"]],
          ].map(([name, price, items], i) => (
            <div
              key={name as string}
              className={`reveal relative flex flex-col border-2 p-8 ${i === 1 ? "border-[#e8572a] bg-[#f7f5ee]" : "border-[#1f2a24]/30"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-between font-fragment text-xs uppercase">
                <span>{name}</span>
                <span className="text-[#1f2a24]/50">No. 00{i + 1}</span>
              </div>
              <div className="mt-6 text-7xl font-extrabold tracking-tight">
                {price}
                <span className="text-base font-normal text-[#1f2a24]/50"> /mo</span>
              </div>
              <ul className="mt-6 flex-1 space-y-2">
                {(items as string[]).map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="text-[#e8572a]">▲</span>
                    {it}
                  </li>
                ))}
              </ul>
              <a
                href="#survey"
                className={`mt-8 py-3 text-center font-fragment text-xs uppercase ${i === 1 ? "bg-[#e8572a] text-white hover:bg-[#1f2a24]" : "border border-[#1f2a24] hover:bg-[#1f2a24] hover:text-[#f0ede4]"}`}
              >
                Get permit
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer id="survey" className="relative overflow-hidden bg-[#1f2a24] px-5 py-28 text-[#f0ede4] md:px-10">
        <svg viewBox="0 0 1600 600" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full opacity-30" aria-hidden>
          {Array.from({ length: 12 }, (_, k) => (
            <path key={k} d={ring(800, 300, 40 + k * 38, 3 + k * 0.2)} fill="none" stroke="#f0ede4" strokeWidth={k % 4 === 3 ? 1.3 : 0.6} />
          ))}
        </svg>
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-5xl leading-[0.95] font-extrabold tracking-tight md:text-8xl">
            Stop wandering.
            <br />
            <span className="font-light italic text-[#e8572a]">Start mapping.</span>
          </h2>
          <label className="mx-auto mt-12 flex max-w-md cursor-pointer items-center justify-center gap-3 bg-[#f0ede4] px-8 py-5 font-fragment text-sm text-[#1f2a24] uppercase transition-colors hover:bg-[#e8572a] hover:text-white">
            <input type="file" accept="application/pdf" className="sr-only" />▲ Upload a PDF to survey
          </label>
          <p className="mt-6 font-fragment text-xs text-[#f0ede4]/50">Free · no card · your documents are never used for training</p>
        </div>
        <div className="relative mx-auto mt-24 flex max-w-7xl flex-wrap justify-between gap-4 border-t border-[#f0ede4]/20 pt-6 font-fragment text-[0.65rem] text-[#f0ede4]/50 uppercase">
          <span>© 2026 Ratio Reader Survey Co.</span>
          <span>Datum: your attention · Projection: 1 : 1.618</span>
          <span>Sheet 06 of 06</span>
        </div>
      </footer>
    </div>
  );
}
