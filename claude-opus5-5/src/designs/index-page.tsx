import { Link } from "react-router-dom";

const DESIGNS = [
  { to: "/1", name: "Folio", idea: "Golden ratio meets an illuminated manuscript. Hints live in the margins.", bg: "#f3ead8", fg: "#a4262c", font: "font-cormorant italic" },
  { to: "/2", name: "Compressor", idea: "Acid brutalism. Drag the ratio and watch a paragraph redact itself to its core.", bg: "#dfff1f", fg: "#000", font: "font-archivo font-black uppercase" },
  { to: "/3", name: "Study Desk", idea: "Highlighters, sticky notes, and flip-card hints on graph paper.", bg: "#ffe45c", fg: "#1d2b53", font: "font-caveat" },
  { to: "/4", name: "Terrain", idea: "Topographic survey. Every document gets an elevation profile of importance.", bg: "#f0ede4", fg: "#e8572a", font: "font-bricolage font-extrabold" },
  { to: "/5", name: "R-1", idea: "A Rams-style hardware reading instrument with a rotary dial and a receipt printer.", bg: "#26272a", fg: "#ff5b1a", font: "font-isans font-semibold" },
];

export function Index() {
  return (
    <main className="min-h-screen bg-neutral-950 px-5 py-14 text-neutral-100 md:px-12">
      <p className="font-martian text-xs tracking-widest text-neutral-500 uppercase">Ratio Reader · five landing pages</p>
      <h1 className="mt-4 font-instrument text-6xl md:text-8xl">
        Five ways to say <em>read less, understand more.</em>
      </h1>
      <ol className="mt-14 divide-y divide-neutral-800 border-y border-neutral-800">
        {DESIGNS.map((d, i) => (
          <li key={d.to}>
            <Link to={d.to} className="group grid items-center gap-4 py-7 md:grid-cols-[60px_1fr_1.4fr_40px]">
              <span className="font-martian text-sm text-neutral-500">0{i + 1}</span>
              <span
                className={`inline-block w-fit px-4 py-1 text-4xl transition-transform group-hover:-rotate-2 md:text-5xl ${d.font}`}
                style={{ background: d.bg, color: d.fg }}
              >
                {d.name}
              </span>
              <span className="text-lg text-neutral-400 group-hover:text-neutral-100">{d.idea}</span>
              <span className="text-2xl text-neutral-600 transition-transform group-hover:translate-x-2 group-hover:text-neutral-100">→</span>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
