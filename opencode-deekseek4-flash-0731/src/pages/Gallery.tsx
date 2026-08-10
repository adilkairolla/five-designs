import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const DESIGNS = [
  {
    path: "/1",
    no: "01",
    name: "The Daily Ratio",
    vibe: "Editorial broadsheet — ink, aged paper and pull quotes",
  },
  {
    path: "/2",
    no: "02",
    name: "Reading Lab",
    vibe: "Dark document-intelligence console with a live scan",
  },
  {
    path: "/3",
    no: "03",
    name: "Wake-Up Call",
    vibe: "Neo-brutalist pop — hard shadows, stickers, marquee",
  },
  {
    path: "/4",
    no: "04",
    name: "Distilled",
    vibe: "Soft glass, aurora gradients and floating cards",
  },
  {
    path: "/5",
    no: "05",
    name: "27:1",
    vibe: "Swiss typographic — the ratio is the design system",
  },
];

export function Gallery() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased">
      <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-16">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/40">
          Ratio reader — design exploration
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          Five ways to sell
          <span className="text-white/50"> reading less, better.</span>
        </h1>
        <p className="mt-4 max-w-xl text-white/50">
          Five distinct marketing directions for the same product. Pick a door.
        </p>

        <ul className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {DESIGNS.map((d) => (
            <li key={d.path}>
              <Link
                to={d.path}
                className="group flex items-center gap-6 py-6 transition-colors hover:bg-white/5 md:gap-10 md:px-4"
              >
                <span className="font-mono text-sm text-white/30">{d.no}</span>
                <span className="flex-1">
                  <span className="block text-xl font-medium tracking-tight md:text-2xl">
                    {d.name}
                  </span>
                  <span className="mt-1 block text-sm text-white/40">{d.vibe}</span>
                </span>
                <ArrowUpRight
                  size={22}
                  className="shrink-0 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                />
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10 font-mono text-[11px] text-white/25">
          Routes: /1 · /2 · /3 · /4 · /5
        </p>
      </main>
    </div>
  );
}
