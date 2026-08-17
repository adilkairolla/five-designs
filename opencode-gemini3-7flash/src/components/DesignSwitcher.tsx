import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Sparkles, 
  Layers, 
  ChevronRight, 
  Compass, 
  Info, 
  X 
} from "lucide-react";
import { DESIGNS } from "../data/designs";

export function DesignSwitcher() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const currentDesign = DESIGNS.find((d) => d.path === currentPath);

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 px-3.5 py-2 bg-slate-900/90 text-white border border-slate-700/80 rounded-full shadow-2xl backdrop-blur-md text-xs font-mono hover:scale-105 transition-all cursor-pointer"
        title="Show 5 Designs Switcher"
      >
        <Layers className="w-4 h-4 text-indigo-400 animate-spin-slow" />
        <span className="font-semibold">Switch Design ({currentDesign ? currentDesign.name.split(" ")[0] : "Hub"})</span>
      </button>
    );
  }

  return (
    <>
      {/* Top / Floating Switcher Bar */}
      <aside aria-label="Design switcher navigation" className="fixed top-3 left-1/2 -translate-x-1/2 z-50 max-w-5xl w-[96%] sm:w-auto">
        <div className="bg-slate-950/85 text-slate-200 border border-slate-700/60 rounded-full px-3 py-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl flex items-center justify-between gap-1 sm:gap-2">
          
          {/* Logo / Hub link */}
          <Link
            to="/"
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide transition-all ${
              currentPath === "/" 
                ? "bg-indigo-600 text-white shadow-sm" 
                : "text-slate-300 hover:text-white hover:bg-slate-800/60"
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-indigo-300" />
            <span className="hidden sm:inline">Design Hub</span>
          </Link>

          <span className="h-4 w-px bg-slate-700/60 mx-0.5" />

          {/* Design Number Links */}
          <div className="flex items-center gap-1">
            {DESIGNS.map((design, idx) => {
              const isActive = currentPath === design.path;
              const Icon = design.icon;
              return (
                <Link
                  key={design.path}
                  to={design.path}
                  className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? `${design.accent} font-bold shadow-md scale-105 ring-2 ring-white/20`
                      : "text-slate-300 hover:text-white hover:bg-slate-800/80"
                  }`}
                  title={`${design.name} — ${design.style}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">{design.name}</span>
                  <span className="md:hidden">#{idx + 1}</span>
                </Link>
              );
            })}
          </div>

          <span className="h-4 w-px bg-slate-700/60 mx-0.5" />

          {/* Info toggle & Minimize */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition"
              title="Design Philosophy & Info"
            >
              <Info className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setIsMinimized(true)}
              className="p-1 rounded-full text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition text-[10px]"
              title="Minimize Bar"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Info Drawer Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 text-slate-100 shadow-2xl animate-in fade-in zoom-in-95 duration-200 relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" /> Ratio Reader Design System
            </div>
            <h3 className="text-xl font-bold font-syne mb-2">5 Unique Creative Visions</h3>
            <p className="text-sm text-slate-300 mb-6">
              Each landing page represents an entirely distinct aesthetic universe, typography system, interactive component stack, and emotional tone tailored for different reading mindsets.
            </p>

            <div className="space-y-3">
              {DESIGNS.map((design, i) => (
                <Link
                  key={design.path}
                  to={design.path}
                  onClick={() => setIsOpen(false)}
                  className={`block p-3.5 rounded-xl border transition-all ${
                    currentPath === design.path 
                      ? "bg-slate-800/90 border-indigo-500 ring-1 ring-indigo-500/50" 
                      : "bg-slate-950/40 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-800 text-xs flex items-center justify-center font-mono font-bold text-slate-300">
                        {i + 1}
                      </span>
                      <span className="font-semibold text-white">{design.name}</span>
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
                        {design.tag}
                      </span>
                    </div>
                    <span className="text-xs text-indigo-400 flex items-center gap-1 font-mono">
                      Visit page {design.path} <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 pl-7">{design.desc}</p>
                </Link>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-xs text-slate-300 hover:text-white flex items-center gap-1"
              >
                <Compass className="w-3.5 h-3.5 text-indigo-400" /> Go to Full Comparison Hub
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
