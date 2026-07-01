import { lazy, Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { motion } from "motion/react";
import { staggerContainer, fadeUpItem } from "./components/reveal";

const FieldNotes = lazy(() => import("./designs/field-notes").then((m) => ({ default: m.FieldNotes })));
const Blueprint = lazy(() => import("./designs/blueprint").then((m) => ({ default: m.Blueprint })));
const GoldenSection = lazy(() => import("./designs/golden-section").then((m) => ({ default: m.GoldenSection })));
const DeskScraps = lazy(() => import("./designs/desk-scraps").then((m) => ({ default: m.DeskScraps })));
const Aurora = lazy(() => import("./designs/aurora").then((m) => ({ default: m.Aurora })));

type DesignEntry = {
  to: string;
  index: string;
  name: string;
  note: string;
  swatch: string[];
  typeSample: string;
  font: string;
};

const designs: DesignEntry[] = [
  {
    to: "/1",
    index: "01",
    name: "Field Notes",
    note: "An editorial distillation — set in ink, serif, and the discipline of a good edit.",
    swatch: ["#F5EFE3", "#B23A2E", "#211C17"],
    typeSample: "Aa",
    font: "'Fraunces', serif",
  },
  {
    to: "/2",
    index: "02",
    name: "Blueprint",
    note: "Reading, measured like an instrument. Schematics, ratios, calibration marks.",
    swatch: ["#0B2942", "#5FD4FF", "#FFB454"],
    typeSample: "Aa",
    font: "'IBM Plex Mono', monospace",
  },
  {
    to: "/3",
    index: "03",
    name: "Golden Section",
    note: "Swiss International Style, built on 1.618. One grid. No noise.",
    swatch: ["#FAFAF7", "#E8432A", "#0A0A0A"],
    typeSample: "Aa",
    font: "'Neue Montreal', sans-serif",
  },
  {
    to: "/4",
    index: "04",
    name: "Desk Scraps",
    note: "A scrapbook of highlights — tape, marker, and margin notes on a corkboard.",
    swatch: ["#EFE0BE", "#FF6FA1", "#2B2118"],
    typeSample: "Aa",
    font: "'Bricolage Grotesque', sans-serif",
  },
  {
    to: "/5",
    index: "05",
    name: "Aurora",
    note: "Ambient and immersive — your reading list, rendered as light.",
    swatch: ["#07070B", "#9B7BFF", "#47E0C2"],
    typeSample: "Aa",
    font: "'Clash Display', sans-serif",
  },
];

function Gallery() {
  return (
    <main className="min-h-screen bg-[#111113] text-[#EDEBE6] font-['IBM_Plex_Sans',_sans-serif] selection:bg-[#EDEBE6] selection:text-[#111113]">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs tracking-[0.35em] uppercase text-[#8A867C]">Ratio Reader — Marketing Gallery</p>
          <h1 className="mt-5 text-4xl sm:text-6xl font-['Fraunces',_serif] font-medium leading-[1.05] max-w-3xl">
            One product.
            <br />
            Five ways to say <em className="italic text-[#E8432A]">read less, understand more.</em>
          </h1>
          <p className="mt-6 text-[#ACA89D] max-w-xl text-[15px] leading-relaxed">
            Upload a PDF. Ratio Reader hands back the summary, the hints, the quotes, and the
            insights that actually matter. Here are five independent takes on how to sell that idea.
          </p>
        </motion.div>

        <motion.ul
          className="mt-20 divide-y divide-[#26262A] border-y border-[#26262A]"
          variants={staggerContainer(0.08, 0.15)}
          initial="hidden"
          animate="show"
        >
          {designs.map((d) => (
            <motion.li key={d.to} variants={fadeUpItem}>
              <Link
                to={d.to}
                className="group grid grid-cols-[auto_1fr_auto] sm:grid-cols-[3rem_10rem_1fr_auto] items-center gap-4 sm:gap-8 py-7 px-3 -mx-3 rounded-lg transition-colors hover:bg-[#18181B]"
              >
                <span className="text-sm text-[#5C594F] tabular-nums">{d.index}</span>
                <span
                  className="text-2xl sm:text-3xl group-hover:translate-x-1 transition-transform duration-300"
                  style={{ fontFamily: d.font }}
                >
                  {d.name}
                </span>
                <span className="hidden sm:block text-sm text-[#918D82] max-w-md leading-relaxed">
                  {d.note}
                </span>
                <span className="flex items-center gap-1 ml-auto sm:ml-0">
                  {d.swatch.map((c, i) => (
                    <span
                      key={i}
                      className="block h-6 w-6 rounded-full ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: c, transitionDelay: `${i * 40}ms` }}
                    />
                  ))}
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <p className="mt-16 text-xs text-[#5C594F]">
          Built with React, Tailwind CSS, and Motion — five self-contained explorations of the same brief.
        </p>
      </div>
    </main>
  );
}

function RouteLoader() {
  return <div className="min-h-screen bg-[#111113]" />;
}

export function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteLoader />}>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/1" element={<FieldNotes />} />
          <Route path="/2" element={<Blueprint />} />
          <Route path="/3" element={<GoldenSection />} />
          <Route path="/4" element={<DeskScraps />} />
          <Route path="/5" element={<Aurora />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
