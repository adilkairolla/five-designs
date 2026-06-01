import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Layers, Terminal, Columns, BookOpen } from "lucide-react";

export function Portal() {
  const cards = [
    {
      id: "1",
      path: "/1",
      name: "Design 01 — Brutalist Editorial",
      desc: "An anti-establishment, zine-inspired layout. Bold typography, high contrast, offset black shadows, and raw marker textures.",
      fonts: "Syne / Bricolage Grotesque",
      colors: ["#FAF8F5", "#000000", "#eab308", "#22d3ee"],
      icon: Layers,
      themeClass: "bg-amber-50 text-slate-900 border-3 border-black shadow-[6px_6px_0px_0px_#000] font-brutalist-sans",
      badgeClass: "bg-amber-400 border-2 border-black text-black px-2 py-0.5 font-bold uppercase text-[10px]"
    },
    {
      id: "2",
      path: "/2",
      name: "Design 02 — Cyber HUD",
      desc: "A futuristic command terminal. Neon green and cyan glows on deep blacks. Live scanning visualizations and telemetry modules.",
      fonts: "Rajdhani / Fira Code",
      colors: ["#030712", "#22c55e", "#06b6d4", "#f43f5e"],
      icon: Terminal,
      themeClass: "bg-slate-950 text-cyan-400 border border-cyan-800 shadow-[0_0_15px_rgba(6,182,212,0.15)] font-cyber-mono",
      badgeClass: "bg-cyan-950 text-cyan-300 border border-cyan-500 px-2 py-0.5 font-bold uppercase text-[10px]"
    },
    {
      id: "3",
      path: "/3",
      name: "Design 03 — Swiss Grid",
      desc: "Proportional layouts, micro-typography, and maximum negative space. Strictly functional Bauhaus grid in grey tones with safety orange.",
      fonts: "Plus Jakarta Sans",
      colors: ["#ffffff", "#f3f4f6", "#111827", "#ff4500"],
      icon: Columns,
      themeClass: "bg-white text-slate-950 border border-slate-200 hover:border-slate-800 transition-colors font-swiss-sans",
      badgeClass: "bg-orange-600 text-white px-2 py-0.5 font-semibold text-[10px] tracking-wider"
    },
    {
      id: "4",
      path: "/4",
      name: "Design 04 — Cozy Paper",
      desc: "A warm, natural scholarly space. Cream pages, forest greens, terracotta highlight tones, and gorgeous classical serifs.",
      fonts: "Cormorant Garamond / Fraunces",
      colors: ["#FAF6F0", "#1e3a1e", "#3f2305", "#d97706"],
      icon: BookOpen,
      themeClass: "bg-[#FAF6F0] text-[#1e3a1e] border-2 border-[#1e3a1e]/10 shadow-sm font-cozy-serif",
      badgeClass: "bg-[#1e3a1e] text-[#FAF6F0] px-2 py-0.5 font-medium text-[10px] rounded"
    },
    {
      id: "5",
      path: "/5",
      name: "Design 05 — Liquid Mesh",
      desc: "The premium SaaS experience. Iridescent cosmic dust gradients, floating glass panels, and interactive elements in liquid orbits.",
      fonts: "Plus Jakarta Sans",
      colors: ["#090514", "#8b5cf6", "#ec4899", "#3b82f6"],
      icon: Sparkles,
      themeClass: "bg-slate-900/60 text-white border border-slate-700/50 backdrop-blur-md shadow-2xl font-swiss-sans",
      badgeClass: "bg-violet-600 text-white px-2 py-0.5 font-semibold rounded-full text-[10px]"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-swiss-sans relative overflow-hidden pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl -z-10" />

      {/* Header */}
      <header className="max-w-6xl w-full mx-auto px-6 py-8 flex justify-between items-center border-b border-slate-900">
        <div className="flex items-center gap-2.5 font-bold tracking-tight text-xl">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white">
            R
          </div>
          <span>Ratio Reader <span className="text-xs text-sky-400 font-mono font-medium px-2 py-0.5 bg-sky-950 rounded-full border border-sky-900 ml-1">Studio</span></span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400 font-mono">VITE + TAILWIND 4 + BUN</span>
        </div>
      </header>

      {/* Main Hero */}
      <main className="max-w-6xl w-full mx-auto px-6 pt-16 flex-grow flex flex-col">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-sky-400 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>5 Interactive Landing Page Experiments</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            How do you represent the written word?
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            Ratio Reader is an intelligent tool that helps you ingest research papers and dense PDFs 4x faster. It isolates the critical thesis, compiles inline margins context, and highlights important quotes.
          </p>
          <p className="text-sm text-slate-500">
            Click into any of the five creative design visions below to preview how different aesthetics can sell and structure the same core reading technology.
          </p>
        </div>

        {/* Grid of Designs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.id}
                to={card.path}
                className={`group flex flex-col p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer ${card.themeClass}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-2.5 rounded-lg bg-slate-950/5 group-hover:bg-slate-950/10 transition-colors border border-black/5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={card.badgeClass}>Design 0{card.id}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 tracking-tight group-hover:underline">
                  {card.name}
                </h3>
                <p className="text-xs opacity-80 leading-relaxed mb-6 flex-grow">
                  {card.desc}
                </p>

                {/* Card footer details */}
                <div className="border-t border-current/10 pt-4 mt-auto space-y-2 text-[10px] font-mono tracking-tight opacity-75">
                  <div className="flex justify-between">
                    <span>FONTS:</span>
                    <span>{card.fonts}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>PALETTE:</span>
                    <div className="flex gap-1">
                      {card.colors.map((c, i) => (
                        <div 
                          key={i} 
                          className="w-3.5 h-3.5 rounded-full border border-current/20"
                          style={{ backgroundColor: c }}
                          title={c}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs font-semibold pt-2 text-current group-hover:translate-x-1 transition-transform">
                    <span>LAUNCH DESIGN</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
