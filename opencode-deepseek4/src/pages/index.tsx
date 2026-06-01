import { Link } from "react-router-dom";

const designs = [
  {
    path: "/1",
    name: "Editorial",
    desc: "Bold magazine layout with dramatic typography",
    palette: ["#1a1a1a", "#e63946", "#f5f0eb"],
  },
  {
    path: "/2",
    name: "Brutalist",
    desc: "Raw, utilitarian, and unapologetically stark",
    palette: ["#000000", "#ccff00", "#ffffff"],
  },
  {
    path: "/3",
    name: "Organic",
    desc: "Soft, warm, and grounded in nature",
    palette: ["#2d4a22", "#c4a35a", "#f5f0e8"],
  },
  {
    path: "/4",
    name: "Retro-Future",
    desc: "Neon-drenched 80s synthwave energy",
    palette: ["#0d0221", "#ff2a6d", "#05d9e8"],
  },
  {
    path: "/5",
    name: "Luxury",
    desc: "Refined elegance with meticulous minimalism",
    palette: ["#1c1c1c", "#d4a853", "#fafaf7"],
  },
];

export function Index() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-sans">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="mb-20 text-center">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-4">
            Ratio
            <span className="text-rose-400">.</span>
          </h1>
          <p className="text-xl text-stone-400 max-w-lg mx-auto">
            Five creative visions for a PDF reading companion. Choose your
            aesthetic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {designs.map((d) => (
            <Link
              key={d.path}
              to={d.path}
              className="group relative overflow-hidden rounded-2xl border border-stone-800 bg-stone-900/50 p-8 hover:border-stone-600 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-6 text-8xl font-black text-stone-800 group-hover:text-stone-700 transition-colors">
                {d.path.replace("/", "")}
              </div>
              <div className="flex gap-2 mb-6">
                {d.palette.map((c) => (
                  <div
                    key={c}
                    className="w-8 h-8 rounded-full border border-stone-700"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">{d.name}</h2>
              <p className="text-stone-400">{d.desc}</p>
              <span className="inline-block mt-6 text-sm text-rose-400 group-hover:translate-x-2 transition-transform duration-300">
                View design →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
