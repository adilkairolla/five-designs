import { Link, useLocation } from "react-router-dom";

const designs = [
  { path: "/1", label: "Marginalia", emoji: "📖" },
  { path: "/2", label: "Synaptic", emoji: "🧠" },
  { path: "/3", label: "Arcade", emoji: "👾" },
  { path: "/4", label: "Liquid", emoji: "🫧" },
  { path: "/5", label: "Zine", emoji: "✂️" },
];

export function DesignSwitcher() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-1 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 px-2 py-2 shadow-2xl">
      {designs.map((d) => (
        <Link
          key={d.path}
          to={d.path}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200 
            ${
              location.pathname === d.path
                ? "bg-white text-black shadow-lg scale-105"
                : "text-white/60 hover:text-white hover:bg-white/10"
            }`}
        >
          <span>{d.emoji}</span>
          <span className="hidden sm:inline">{d.label}</span>
        </Link>
      ))}
    </nav>
  );
}
