import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles, BookOpen, Layers } from "lucide-react";

const EDITIONS = [
  {
    path: "/1",
    number: "01",
    title: "The Golden Codex",
    aesthetic: "Swiss-Renaissance Proportion & Mathematical Editorial",
    tagline: "Read the 1 : 1.618 golden section of every PDF, never the filler.",
    description:
      "Inspired by Josef Müller-Brockmann grids and Renaissance Glossa Ordinaria manuscripts. Features an interactive Golden Spiral SVG decomposition, Compression Ratio Caliper, and a 3-column scholarly folio spread.",
    fonts: "Instrument Serif · JetBrains Mono · Plus Jakarta Sans",
    palette: ["#F6F1E7", "#151311", "#D9381E", "#EFE8DA"],
    bgClass: "bg-[#F6F1E7] text-[#151311] border-[#151311]/20",
    badgeClass: "bg-[#D9381E] text-white"
  },
  {
    path: "/2",
    number: "02",
    title: "Signal / Noise Lab",
    aesthetic: "High-Contrast Oscilloscope & Entropy Telemetry Terminal",
    tagline: "Strip the academic static. Lock onto pure epistemic signal.",
    description:
      "Treats a 100-page PDF like a noisy radio transmission. Includes a live interactive SNR Noise-Gate slider (dB attenuation) that visually filters out boilerplate while locking onto high-entropy claims, inline hints, and SHA-verified quotes.",
    fonts: "Space Grotesk · IBM Plex Mono",
    palette: ["#07090D", "#FFB000", "#00F0FF", "#10B981"],
    bgClass: "bg-[#0B0F17] text-white border-white/15",
    badgeClass: "bg-[#FFB000] text-[#07090D]"
  },
  {
    path: "/3",
    number: "03",
    title: "Herbarium of Ideas",
    aesthetic: "Tactile Risograph Zine Press & Archival Index Card Box",
    tagline: "Clip the wisdom onto collectible index cards. Compost the fluff.",
    description:
      "A vibrant 3-drum Risograph print-shop experience on warm newsprint grain. Separates PDFs into Cobalt Ink (Summary Zine), Fluorescent Coral (Rubber-Stamped Margin Hints), and Citron Highlighter (Pinnable Quote & Insight Cards).",
    fonts: "Fraunces · Space Mono · Plus Jakarta Sans",
    palette: ["#F3EFEA", "#1B32B8", "#FF4F38", "#E8FF3B"],
    bgClass: "bg-[#F3EFEA] text-[#141413] border-[#141413]",
    badgeClass: "bg-[#1B32B8] text-white"
  },
  {
    path: "/4",
    number: "04",
    title: "Spatial Prism",
    aesthetic: "Optical Refraction & 3D Exploded Dichroic Glass Stack",
    tagline: "Refract any opaque PDF slab into four crystalline wavelengths.",
    description:
      "Daylight optical engineering aesthetic. Features an interactive 3D Exploded Layer Deconstructor that separates a dense document into 4 chromatic wavelengths (450nm Summary, 530nm Hints, 590nm Quotes, 660nm Insights) with an f-stop Focal Aperture selector.",
    fonts: "Outfit · Newsreader · JetBrains Mono",
    palette: ["#F5F7FB", "#4F46E5", "#10B981", "#F43F5E"],
    bgClass: "bg-white text-slate-900 border-slate-200",
    badgeClass: "bg-indigo-600 text-white"
  },
  {
    path: "/5",
    number: "05",
    title: "Nocturne Salon",
    aesthetic: "Intimate Velvet Monograph & Candlelit Split-Folio",
    tagline: "Imagine a brilliant friend read your PDF at midnight—and left gold leaf in the margins.",
    description:
      "A contemplative midnight library experience in deep espresso, walnut, and burnished gold leaf. Features an open leather-bound Verso/Recto book spread, a live Candlelight Dimmer, and Socratic marginalia.",
    fonts: "Cormorant Garamond · Newsreader · DM Sans",
    palette: ["#110E0C", "#1E1814", "#D4AF37", "#F4ECE1"],
    bgClass: "bg-[#14100D] text-[#F4ECE1] border-[#D4AF37]/40",
    badgeClass: "bg-[#D4AF37] text-[#110E0C]"
  }
];

export function HomeHub() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-neutral-100 font-jakarta selection:bg-amber-400 selection:text-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1 font-jetbrains text-xs text-amber-300">
              <Sparkles className="h-3.5 w-3.5" />
              <span>RATIO READER · FIVE DISTINCT DESIGN ARCHITECTURES</span>
            </div>
            <h1 className="mt-5 font-instrument text-5xl sm:text-7xl tracking-tight text-white leading-[0.95]">
              One Reading Instrument.{" "}
              <span className="italic text-amber-300">Five Unforgettable Worlds.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-neutral-400 leading-relaxed">
              Ratio Reader transforms dense PDFs into structured{" "}
              <strong className="text-neutral-200">Summaries</strong>, proactive{" "}
              <strong className="text-neutral-200">Hints</strong>, verbatim{" "}
              <strong className="text-neutral-200">Quotes</strong>, and counter-intuitive{" "}
              <strong className="text-neutral-200">Insights</strong>. Explore all five bespoke marketing landing pages below—or press keys{" "}
              <kbd className="rounded border border-white/20 bg-white/10 px-1.5 py-0.5 font-jetbrains text-xs text-white">
                1
              </kbd>{" "}
              through{" "}
              <kbd className="rounded border border-white/20 bg-white/10 px-1.5 py-0.5 font-jetbrains text-xs text-white">
                5
              </kbd>{" "}
              at any time.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 shrink-0">
            {EDITIONS.map((ed) => (
              <Link
                key={ed.path}
                to={ed.path}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 font-jetbrains text-xs font-semibold text-white hover:bg-white hover:text-neutral-950 transition"
              >
                <span>{ed.path}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {EDITIONS.map((ed, idx) => (
            <Link
              key={ed.path}
              to={ed.path}
              className={`${
                idx < 2 ? "lg:col-span-6" : "lg:col-span-4"
              } group relative flex flex-col justify-between rounded-3xl border p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${ed.bgClass}`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className={`rounded-full px-3 py-1 font-jetbrains text-xs font-bold ${ed.badgeClass}`}>
                    EDITION {ed.number} · {ed.path}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {ed.palette.map((hex) => (
                      <span
                        key={hex}
                        className="h-4 w-4 rounded-full border border-black/20 shadow-xs"
                        style={{ backgroundColor: hex }}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-6 font-jetbrains text-[11px] uppercase tracking-wider opacity-65">
                  {ed.aesthetic}
                </div>
                <h2 className="mt-1 font-instrument text-4xl sm:text-5xl tracking-tight leading-none">
                  {ed.title}
                </h2>
                <p className="mt-3 text-sm font-semibold opacity-90 italic">
                  “{ed.tagline}”
                </p>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed opacity-75">
                  {ed.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-current/15 flex items-center justify-between">
                <span className="font-jetbrains text-[10px] opacity-60 truncate max-w-[70%]">
                  {ed.fonts}
                </span>
                <span className="inline-flex items-center gap-1 font-jetbrains text-xs font-bold group-hover:translate-x-1 transition">
                  <span>Launch {ed.path}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/15 text-amber-300">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                Interactive PDF Specimens Included in Every Design
              </div>
              <div className="text-xs text-neutral-400">
                Each page features live sample PDFs, adjustable compression ratios, clickable hints, verbatim quotes, and second-order insights.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 font-jetbrains text-xs text-amber-300">
            <Layers className="h-4 w-4" />
            <span>Routes: /1 · /2 · /3 · /4 · /5</span>
          </div>
        </div>
      </div>
    </div>
  );
}
