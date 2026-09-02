import { Link, useLocation } from "react-router-dom";
import { BookOpen, Terminal, Sparkles, Wind, Layers, Home, ChevronRight } from "lucide-react";

export function DesignSwitcher() {
  const location = useLocation();
  const currentPath = location.pathname;

  const designs = [
    {
      id: "1",
      path: "/1",
      name: "The Literary Salon",
      tagline: "Archival Editorial & Scholarly Margins",
      icon: BookOpen,
      accent: "bg-amber-800 text-amber-100",
      pill: "Editorial",
    },
    {
      id: "2",
      path: "/2",
      name: "Cyber Synthesizer",
      tagline: "High-Density OLED HUD & Terminal",
      icon: Terminal,
      accent: "bg-emerald-500 text-black",
      pill: "Cyber HUD",
    },
    {
      id: "3",
      path: "/3",
      name: "Bauhaus Neo-Brutal",
      tagline: "Bold Primary Studio & Tactile Bento",
      icon: Sparkles,
      accent: "bg-yellow-400 text-black",
      pill: "Neo-Brutalist",
    },
    {
      id: "4",
      path: "/4",
      name: "Zen Sanctuary",
      tagline: "E-Ink Simplicity & Calming Paper",
      icon: Wind,
      accent: "bg-stone-300 text-stone-900",
      pill: "Minimal Zen",
    },
    {
      id: "5",
      path: "/5",
      name: "Spatial Glass Prism",
      tagline: "Iridescent Cosmic UI & Living Layers",
      icon: Layers,
      accent: "bg-gradient-to-r from-violet-500 to-cyan-500 text-white",
      pill: "Spatial Glass",
    },
  ];

  return (
    <aside aria-label="Design switcher navigation" className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-4xl">
      <div className="bg-neutral-950/85 backdrop-blur-xl border border-neutral-800/80 rounded-2xl p-2 px-3 shadow-2xl shadow-black/60 flex items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 pr-2 border-r border-neutral-800/80 shrink-0">
          <Link
            to="/"
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-colors font-medium ${
              currentPath === "/"
                ? "bg-neutral-800 text-white shadow-inner"
                : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900"
            }`}
            title="Design Overview & Gallery"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Overview</span>
          </Link>
          <span className="text-neutral-600 hidden md:inline">|</span>
          <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-400 hidden lg:inline">
            5 Aesthetics:
          </span>
        </div>

        <nav aria-label="Landing page design variants" className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-0.5 no-scrollbar flex-1 justify-center">
          {designs.map((d) => {
            const isActive = currentPath === d.path;
            const Icon = d.icon;
            return (
              <Link
                key={d.id}
                to={d.path}
                className={`group flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl transition-all whitespace-nowrap ${
                  isActive
                    ? `${d.accent} shadow-md scale-105 font-bold`
                    : "text-neutral-400 hover:text-white hover:bg-neutral-900/90"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "opacity-100" : "opacity-70 group-hover:opacity-100"}`} />
                <span className="font-mono text-xs">/{d.id}</span>
                <span className="hidden sm:inline text-xs font-medium">{d.pill}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2 pl-2 border-l border-neutral-800/80 shrink-0">
          <span className="text-[10px] text-neutral-400 font-mono">
            {currentPath === "/" ? "Pick 1 of 5" : `Style ${currentPath.replace("/", "")} of 5`}
          </span>
          {currentPath !== "/" && (
            <Link
              to={currentPath === "/5" ? "/1" : `/${parseInt(currentPath.slice(1)) + 1}`}
              className="p-1 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
              title="Next Design"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>
    </aside>
  );
}
