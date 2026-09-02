import { useState } from "react";
import { Link } from "react-router-dom";
import { SAMPLE_DOCUMENTS } from "../data/samplePdfs";
import {
  BookOpen,
  Terminal,
  Sparkles,
  Wind,
  Layers,
  ArrowRight,
  Upload,
  CheckCircle2,
  Quote,
  Lightbulb,
  Sliders,
  ChevronRight,
  Zap,
  Star,
  ExternalLink,
} from "lucide-react";
import confetti from "canvas-confetti";

export function ShowcaseHome() {
  const [selectedSample, setSelectedSample] = useState(SAMPLE_DOCUMENTS[0]);
  const [demoRatio, setDemoRatio] = useState<number>(20);

  const designVariants = [
    {
      id: "1",
      path: "/1",
      title: "The Literary Salon",
      genre: "Modernist Academic Press / Archival Editorial",
      vibe: "Criterion Collection meets Stripe Press and vintage book typography.",
      palette: ["#FBF8F3", "#8B2626", "#D97706", "#1C1917"],
      fontStyle: "Editorial Serif (Newsreader)",
      icon: BookOpen,
      highlights: [
        "Dual-page illuminated book spread",
        "Marginalia and footnote ribbons",
        "Classic scholarly compression slider",
        "Verbatim golden citations with folio page provenance",
      ],
      themeColor: "from-amber-900/40 to-stone-900/40 border-amber-800/40",
      accentText: "text-amber-300",
      badge: "Editorial & Scholarly",
    },
    {
      id: "2",
      path: "/2",
      title: "Cyber Synthesizer",
      genre: "High-Density OLED HUD & Terminal",
      vibe: "Bloomberg Terminal meets Raycast and sci-fi intelligence dossier.",
      palette: ["#05080E", "#10B981", "#06B6D4", "#F59E0B"],
      fontStyle: "Monospace (JetBrains Mono)",
      icon: Terminal,
      highlights: [
        "Live token deconstruction stream & OCR log",
        "Signal-to-noise ratio telemetry gauge",
        "Keyboard shortcut command line interaction",
        "Threat matrix & semantic trap alerts",
      ],
      themeColor: "from-emerald-950/40 to-cyan-950/40 border-emerald-800/40",
      accentText: "text-emerald-400",
      badge: "Cyberpunk & High-Density",
    },
    {
      id: "3",
      path: "/3",
      title: "Bauhaus Neo-Brutal",
      genre: "Tactile Neo-Brutalist Studio & Figma Craft",
      vibe: "High-voltage Bauhaus, chunky solid borders, tactile offset shadows.",
      palette: ["#FDE047", "#2563EB", "#EF4444", "#000000"],
      fontStyle: "Punchy Display (Space Grotesk)",
      icon: Sparkles,
      highlights: [
        "Chunky tactile 'Fluff Slicer' slider knob",
        "Modular colorful Bento Cards",
        "Direct receipt quotes & cheat-code hints",
        "Playful stickers and contrast comparison",
      ],
      themeColor: "from-yellow-950/40 to-blue-950/40 border-yellow-500/40",
      accentText: "text-yellow-400",
      badge: "Bold & Tactile Neo-Brutal",
    },
    {
      id: "4",
      path: "/4",
      title: "Zen Sanctuary",
      genre: "E-Ink Simplicity & Calming Paper",
      vibe: "Kindle Paperwhite meets Muji and Superhuman for mental calm.",
      palette: ["#FBFBFA", "#1C1D20", "#2D5A3C", "#E8E8E4"],
      fontStyle: "Breathy Clean Modern Sans (Outfit)",
      icon: Wind,
      highlights: [
        "Ambient sound simulator (Rain / Silence)",
        "Gentle breathing cadence rhythm",
        "Quiet expandable hints drawer",
        "Zero sensory overload or distraction",
      ],
      themeColor: "from-stone-900/40 to-emerald-950/30 border-stone-700/40",
      accentText: "text-emerald-300",
      badge: "Calm & Mindful E-Ink",
    },
    {
      id: "5",
      path: "/5",
      title: "Spatial Glass Prism",
      genre: "Next-Gen Spatial Intelligence & VisionOS",
      vibe: "Apple VisionOS glassmorphism, iridescent neon glows, 3D refraction.",
      palette: ["#070913", "#8B5CF6", "#06B6D4", "#F43F5E"],
      fontStyle: "Modern Spatial Sans (Plus Jakarta)",
      icon: Layers,
      highlights: [
        "Interactive 4-Layer Document Prism explorer",
        "3D perspective card tilt tracking",
        "Iridescent floating ambient lighting",
        "Holographic citations & action matrix",
      ],
      themeColor: "from-violet-950/40 to-cyan-950/40 border-violet-700/40",
      accentText: "text-cyan-300",
      badge: "Spatial & Iridescent Glass",
    },
  ];

  const triggerCelebrate = () => {
    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-amber-400 selection:text-black pb-32">
      {/* Hero Showcase Masthead */}
      <div className="relative border-b border-neutral-800 bg-gradient-to-b from-neutral-900 to-neutral-950 px-6 pt-16 pb-20 overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-72 bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-violet-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-800/80 border border-neutral-700 text-xs font-mono text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Ratio Reader • 5 Distinct Design Explorations</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Read Smarter. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-300 to-cyan-300">
              Distill Any PDF at Any Ratio.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-400 leading-relaxed">
            Upload dense PDFs, academic papers, and books. Ratio Reader delivers the core thesis, 
            contextual hints, verbatim golden quotes, and actionable insights.
          </p>

          <p className="text-xs sm:text-sm text-neutral-400 font-mono">
            Explore 5 unique creative design directions, each reimagined from scratch:
          </p>

          {/* Quick Jump Buttons */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {designVariants.map((d) => (
              <Link
                key={d.id}
                to={d.path}
                className="px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-neutral-400 text-xs font-medium text-neutral-200 hover:text-white transition-all flex items-center gap-2 group hover:scale-105"
              >
                <span className="font-mono font-bold text-amber-400">/{d.id}</span>
                <span>{d.title}</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* The 5 Designs Exhibition Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-1">
              Curated Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Five Radical Design Philosophies
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-sm">
            Each page (/1 to /5) has been crafted with distinct typography, interaction mechanics, color theory, and personality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designVariants.map((design) => {
            const Icon = design.icon;
            return (
              <div
                key={design.id}
                className={`rounded-2xl border p-6 flex flex-col justify-between transition-all hover:scale-[1.02] bg-gradient-to-b ${design.themeColor} shadow-xl hover:shadow-2xl group`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-black/50 border border-white/10 text-white flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5" />
                      Page /{design.id}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                      {design.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-amber-200 transition-colors">
                      {design.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-mono mt-1">{design.genre}</p>
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {design.vibe}
                  </p>

                  {/* Palette Swatches */}
                  <div className="flex items-center gap-2 pt-2">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase">Palette:</span>
                    <div className="flex items-center gap-1.5">
                      {design.palette.map((color, i) => (
                        <div
                          key={i}
                          className="w-4 h-4 rounded-full border border-white/20 shadow-sm"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="pt-2 border-t border-white/10 space-y-1.5">
                    {design.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <span className={`font-bold ${design.accentText}`}>•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <Link
                    to={design.path}
                    className="w-full py-2.5 px-4 rounded-xl bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-md group-hover:shadow-lg"
                  >
                    <span>Explore /{design.id} Landing Page</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Feature Sampler Playground */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider">
              Ratio Reader Core Engine
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Try the Core Distillation Engine
            </h3>
            <p className="text-sm text-neutral-400">
              Pick a landmark document below and see how Ratio synthesizes summaries, quotes, and hints.
            </p>
          </div>

          {/* Document Picker */}
          <div className="flex flex-wrap justify-center gap-2">
            {SAMPLE_DOCUMENTS.map((doc) => (
              <button
                key={doc.id}
                onClick={() => setSelectedSample(doc)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  selectedSample.id === doc.id
                    ? "bg-amber-400 text-black font-bold shadow-md"
                    : "bg-neutral-800 text-neutral-300 hover:text-white"
                }`}
              >
                {doc.title.split("(")[0]}
              </button>
            ))}
          </div>

          {/* Interactive Compression Slider */}
          <div className="bg-neutral-950 p-5 rounded-2xl border border-neutral-800 space-y-3">
            <div className="flex flex-wrap items-center justify-between text-xs">
              <span className="text-neutral-400 font-mono">
                COMPRESSION RATIO: <strong className="text-amber-400">{demoRatio}% OF ORIGINAL TEXT</strong>
              </span>
              <span className="text-neutral-400 font-mono">
                ESTIMATED TIME: <strong className="text-emerald-400">{Math.max(2, Math.round((parseInt(selectedSample.readTimeOriginal) || 30) * (demoRatio / 100)))} MINS</strong> (ORIGINAL: {selectedSample.readTimeOriginal})
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="50"
              step="5"
              value={demoRatio}
              onChange={(e) => setDemoRatio(Number(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer"
            />
          </div>

          {/* Preview of the Summary, Quotes & Hints */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            {/* Summary */}
            <div className="md:col-span-2 bg-neutral-950 p-6 rounded-2xl border border-neutral-800 space-y-3">
              <span className="text-xs font-mono uppercase text-amber-400 block">
                Executive Synthesis
              </span>
              <p className="text-neutral-200 leading-relaxed">
                {selectedSample.executiveSummary}
              </p>
              {demoRatio > 25 && (
                <p className="text-neutral-400 text-xs leading-relaxed pt-2 border-t border-neutral-800">
                  {selectedSample.deepSummary}
                </p>
              )}
            </div>

            {/* Context Hints */}
            <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 space-y-3">
              <span className="text-xs font-mono uppercase text-emerald-400 block">
                Contextual Hints
              </span>
              <div className="space-y-3">
                {selectedSample.hints.slice(0, 2).map((h, i) => (
                  <div key={i} className="text-xs space-y-1">
                    <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 font-mono text-[10px]">
                      {h.tag}
                    </span>
                    <p className="text-neutral-300">{h.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          Design Variants Comparison Matrix
        </h3>

        <div className="overflow-x-auto rounded-2xl border border-neutral-800 bg-neutral-900/60">
          <table className="w-full text-left text-xs">
            <thead className="bg-neutral-900 border-b border-neutral-800 text-neutral-400 font-mono uppercase text-[11px]">
              <tr>
                <th className="p-4">Design</th>
                <th className="p-4">Core Philosophy</th>
                <th className="p-4">Primary Typography</th>
                <th className="p-4">Target Personality</th>
                <th className="p-4 text-right">Route</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800 text-neutral-300">
              {designVariants.map((d) => (
                <tr key={d.id} className="hover:bg-neutral-800/40 transition-colors">
                  <td className="p-4 font-bold text-white flex items-center gap-2">
                    <d.icon className="w-4 h-4 text-amber-400" />
                    <span>{d.title}</span>
                  </td>
                  <td className="p-4 text-neutral-400">{d.genre}</td>
                  <td className="p-4 font-mono text-neutral-300">{d.fontStyle}</td>
                  <td className="p-4 text-neutral-400">{d.vibe.slice(0, 45)}...</td>
                  <td className="p-4 text-right">
                    <Link
                      to={d.path}
                      className="px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-white font-mono"
                    >
                      /{d.id} →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Global Footer */}
      <footer className="max-w-6xl mx-auto px-6 pt-12 border-t border-neutral-800 text-xs text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>RATIO READER • 5 CREATIVE MARKETING DESIGNS</span>
        <div className="flex items-center gap-4 font-mono">
          <Link to="/1" className="hover:text-white">/1</Link>
          <Link to="/2" className="hover:text-white">/2</Link>
          <Link to="/3" className="hover:text-white">/3</Link>
          <Link to="/4" className="hover:text-white">/4</Link>
          <Link to="/5" className="hover:text-white">/5</Link>
        </div>
      </footer>
    </div>
  );
}
