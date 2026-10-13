import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Compass, Layers, ChevronUp, ChevronDown } from "lucide-react";

export const DESIGN_META = [
  {
    path: "/1",
    num: "01",
    name: "The Golden Codex",
    subtitle: "Swiss-Renaissance Proportion & φ Geometry",
    accent: "#D9381E",
    bg: "#F6F1E7"
  },
  {
    path: "/2",
    num: "02",
    name: "Signal / Noise Lab",
    subtitle: "Oscilloscope Telemetry & Entropy Scanner",
    accent: "#FFB000",
    bg: "#090B0E"
  },
  {
    path: "/3",
    num: "03",
    name: "Herbarium of Ideas",
    subtitle: "Tactile Risograph & Archival Zine Press",
    accent: "#1B32B8",
    bg: "#F3EFEA"
  },
  {
    path: "/4",
    num: "04",
    name: "Spatial Prism",
    subtitle: "Optical Refraction & 3D Layered PDF Deconstruction",
    accent: "#4F46E5",
    bg: "#F8FAFC"
  },
  {
    path: "/5",
    num: "05",
    name: "Nocturne Salon",
    subtitle: "Intimate Velvet Monograph & Candlelit Folio",
    accent: "#D4AF37",
    bg: "#120F0D"
  }
];

export function DesignSwitcher() {
  const location = useLocation();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.metaKey ||
        e.ctrlKey ||
        e.altKey
      ) {
        return;
      }
      if (["1", "2", "3", "4", "5"].includes(e.key)) {
        navigate(`/${e.key}`);
      } else if (e.key === "0") {
        navigate("/");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  const activeDesign = DESIGN_META.find((d) => d.path === location.pathname);

  return (
    <div className="fixed bottom-4 right-4 z-50 font-jakarta select-none">
      {expanded && (
        <div className="mb-2 w-80 rounded-2xl border border-white/15 bg-neutral-950/95 p-3 text-white shadow-2xl backdrop-blur-xl">
          <div className="mb-2 flex items-center justify-between border-b border-white/10 pb-2 px-1">
            <div className="flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-neutral-400">
              <Layers className="h-3.5 w-3.5 text-amber-400" />
              <span>Ratio Reader — 5 Editions</span>
            </div>
            <Link
              to="/"
              onClick={() => setExpanded(false)}
              className="rounded-md bg-white/10 px-2 py-0.5 text-[11px] font-medium text-neutral-200 hover:bg-white/20 transition"
            >
              Index (0)
            </Link>
          </div>
          <div className="space-y-1">
            {DESIGN_META.map((d) => {
              const isActive = location.pathname === d.path;
              return (
                <Link
                  key={d.path}
                  to={d.path}
                  onClick={() => setExpanded(false)}
                  className={`flex items-center justify-between rounded-xl px-2.5 py-2 transition ${
                    isActive
                      ? "bg-white text-neutral-950 font-semibold"
                      : "text-neutral-300 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[11px] font-mono font-bold text-white"
                      style={{ backgroundColor: d.accent }}
                    >
                      {d.num}
                    </span>
                    <div className="truncate">
                      <div className="text-xs leading-tight truncate">{d.name}</div>
                      <div
                        className={`text-[10px] truncate ${
                          isActive ? "text-neutral-600" : "text-neutral-400"
                        }`}
                      >
                        {d.subtitle}
                      </div>
                    </div>
                  </div>
                  <span
                    className={`ml-2 shrink-0 rounded px-1.5 py-0.5 font-mono text-[10px] ${
                      isActive
                        ? "bg-neutral-900 text-white"
                        : "bg-white/5 text-neutral-400"
                    }`}
                  >
                    {d.path}
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="mt-2 pt-1.5 border-t border-white/10 text-[10px] text-neutral-400 flex justify-between px-1">
            <span>Press keys 1–5 to switch fast</span>
            <span>0 for gallery</span>
          </div>
        </div>
      )}

      <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-neutral-950/90 p-1.5 text-white shadow-2xl backdrop-blur-xl">
        <Link
          to="/"
          title="All 5 Designs Gallery"
          className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
            location.pathname === "/"
              ? "bg-white text-neutral-950"
              : "text-neutral-300 hover:bg-white/15"
          }`}
        >
          <Compass className="h-4 w-4" />
        </Link>

        <div className="flex items-center gap-1 px-1">
          {DESIGN_META.map((d) => {
            const isActive = location.pathname === d.path;
            return (
              <Link
                key={d.path}
                to={d.path}
                title={`${d.name} (${d.path})`}
                className={`flex h-7 w-7 items-center justify-center rounded-full font-mono text-xs font-bold transition ${
                  isActive
                    ? "bg-white text-neutral-950 shadow-sm scale-105"
                    : "text-neutral-400 hover:bg-white/15 hover:text-white"
                }`}
              >
                {d.num.replace("0", "")}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-neutral-200 hover:bg-white/20 transition"
        >
          <span className="hidden sm:inline max-w-[115px] truncate">
            {activeDesign ? activeDesign.name : "Select Design"}
          </span>
          {expanded ? (
            <ChevronDown className="h-3.5 w-3.5" />
          ) : (
            <ChevronUp className="h-3.5 w-3.5" />
          )}
        </button>
      </div>
    </div>
  );
}
