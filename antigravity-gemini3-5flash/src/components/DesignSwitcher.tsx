import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Layers,
  Square,
  Terminal,
  Columns,
  BookOpen,
  Sparkles,
  Info,
  ChevronDown,
  ChevronUp,
  Sliders,
  Palette,
  Type
} from "lucide-react";

interface DesignInfo {
  name: string;
  vibe: string;
  fonts: string;
  palette: string[];
  grid: string;
  philosophy: string;
}

const designMetadata: Record<string, DesignInfo> = {
  "/": {
    name: "Design Studio & Portal",
    vibe: "Creative Showroom",
    fonts: "Bricolage Grotesque & Plus Jakarta Sans",
    palette: ["#0f172a", "#3b82f6", "#10b981", "#ec4899"],
    grid: "Flexible CSS Grid",
    philosophy: "A centralized dashboard showcasing all five unique creative landing page directions built for the Ratio Reader application."
  },
  "/1": {
    name: "Design 1: Brutalist Editorial",
    vibe: "Raw, Neo-Brutalist, Literary Zine",
    fonts: "Syne (headings) & Bricolage Grotesque (body)",
    palette: ["#FAF8F5", "#000000", "#eab308", "#22d3ee"],
    grid: "Thick borders, asymmetrical grids, overlapping divs",
    philosophy: "Rejects polite corporate design. Uses harsh contrasts, high-impact serifs, heavy shadows, and highlighter yellow to convey urgency and intellectual depth."
  },
  "/2": {
    name: "Design 2: Cyber-Bibliotheca HUD",
    vibe: "Sci-Fi Terminal, Information Dashboard",
    fonts: "Rajdhani & Fira Code (monospaced data)",
    palette: ["#030712", "#22c55e", "#06b6d4", "#f43f5e"],
    grid: "HUD sub-grids, collapsible scanline cards",
    philosophy: "Treats PDF analysis like a high-tech scanning operation. Deep space blacks, green/cyan glow states, diagnostic readouts, and soundwave elements."
  },
  "/3": {
    name: "Design 3: Swiss Minimalist Grid",
    vibe: "Bauhaus Modernism, Precise Typography",
    fonts: "Plus Jakarta Sans (sans-serif hierarchy)",
    palette: ["#ffffff", "#f3f4f6", "#111827", "#ff4500"],
    grid: "Strict 12-column Swiss grid, proportional spacing",
    philosophy: "Focuses purely on legibility and hierarchy. White space is active. No gradients or shadows. A single bold international orange-red accent drives focus."
  },
  "/4": {
    name: "Design 4: Organic Academic",
    vibe: "Cozy Study, Warm Paper, Scholarly Journal",
    fonts: "Cormorant Garamond (display) & Fraunces (serif body)",
    palette: ["#FAF6F0", "#1e3a1e", "#3f2305", "#d97706"],
    grid: "Fluid containers, text margins, deckled borders",
    philosophy: "Evokes the tactile comfort of reading a physical textbook in a quiet, warm wooden library. Warm papers, forest greens, soft serifs, and amber hints."
  },
  "/5": {
    name: "Design 5: Liquid Glass Mesh",
    vibe: "Premium SaaS, Iridescent 3D-mesh",
    fonts: "Plus Jakarta Sans & Syne (accents)",
    palette: ["#090514", "#8b5cf6", "#ec4899", "#3b82f6"],
    grid: "Floating multi-layered absolute cards, canvas layout",
    philosophy: "Modern high-end product presentation. Fluid neon-indigo mesh backdrops, glassmorphic blur cards that tilt, premium shadows, and liquid-smooth hover animations."
  }
};

export function DesignSwitcher() {
  const location = useLocation();
  const path = location.pathname;
  const currentDesign = designMetadata[path] || designMetadata["/"];
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", icon: Layers, label: "Studio Portal" },
    { to: "/1", icon: Square, label: "Brutalist" },
    { to: "/2", icon: Terminal, label: "Cyber HUD" },
    { to: "/3", icon: Columns, label: "Swiss Grid" },
    { to: "/4", icon: BookOpen, label: "Cozy Paper" },
    { to: "/5", icon: Sparkles, label: "Liquid Mesh" }
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl font-sans">
      <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl text-slate-100 overflow-hidden transition-all duration-300">
        
        {/* Toggle Inspector Header */}
        <div className="px-4 py-3 flex items-center justify-between border-b border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <Sliders className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-slate-400">DESIGN STUDIO</span>
            <span className="h-3 w-px bg-slate-800"></span>
            <span className="text-sky-300 font-semibold">{currentDesign.name}</span>
          </div>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1.5 px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 transition text-slate-300 cursor-pointer"
          >
            <Info className="w-3 h-3" />
            <span>Inspector</span>
            {isOpen ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
          </button>
        </div>

        {/* Collapsible Design Inspector Detail */}
        {isOpen && (
          <div className="p-4 bg-slate-950/60 border-b border-slate-800 text-xs grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
            <div className="space-y-2">
              <p className="text-slate-400 font-medium">Design Concept</p>
              <p className="text-slate-200">{currentDesign.philosophy}</p>
              <div className="flex items-center gap-2 mt-2">
                <Palette className="w-3.5 h-3.5 text-pink-400" />
                <span className="text-slate-400">Vibe:</span>
                <span className="text-pink-300 font-medium">{currentDesign.vibe}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Type className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-slate-400">Typography:</span>
                <span className="text-slate-200 font-mono text-[10px]">{currentDesign.fonts}</span>
              </div>
              <p className="text-slate-200">
                <span className="text-slate-400 font-medium">Layout Grid:</span> {currentDesign.grid}
              </p>
              <div className="flex items-center gap-1.5 pt-1">
                <span className="text-slate-400 mr-1.5">Colors:</span>
                {currentDesign.palette.map((color, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <span 
                      className="w-3.5 h-3.5 rounded-full border border-slate-700 inline-block"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                    <span className="text-[10px] text-slate-400 font-mono">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Navigation Bar */}
        <div className="p-2 flex justify-between items-center gap-1.5 overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = path === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex-1 text-center ${
                  isActive 
                    ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25 scale-[1.03]" 
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-slate-400"}`} />
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}
