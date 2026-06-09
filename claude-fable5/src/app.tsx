import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Marginalia } from "./designs/marginalia";
import { Machine } from "./designs/machine";
import { Swiss } from "./designs/swiss";
import { NightLibrary } from "./designs/night-library";
import { Pop } from "./designs/pop";

const designs = [
  { to: "/1", name: "Marginalia", note: "An annotated manuscript. Ink, paper, and an editor's red pen." },
  { to: "/2", name: "The Machine", note: "A signal-extraction terminal. Phosphor amber on black glass." },
  { to: "/3", name: "Swiss Ratio", note: "International Typographic Style. The golden ratio, exposed." },
  { to: "/4", name: "Night Library", note: "Dark academia. Ideas charted as constellations." },
  { to: "/5", name: "Pop Reader", note: "Sticker-bomb neo-brutalism. Reading, but loud." },
];

function Gallery() {
  return (
    <main className="min-h-screen bg-[#101013] text-[#E8E6E1] font-plexmono">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-xs tracking-[0.3em] uppercase text-[#8A877F]">Ratio Reader</p>
        <h1 className="mt-3 text-3xl font-medium">Five landing pages, five worlds.</h1>
        <p className="mt-2 text-sm text-[#8A877F]">One product. Pick a door.</p>
        <ul className="mt-12 divide-y divide-[#2A2A2F] border-y border-[#2A2A2F]">
          {designs.map((d, i) => (
            <li key={d.to}>
              <Link
                to={d.to}
                className="group flex items-baseline gap-6 py-6 transition-colors hover:bg-[#17171B] px-4 -mx-4"
              >
                <span className="text-[#5A574F] text-sm">0{i + 1}</span>
                <span className="text-xl group-hover:translate-x-1 transition-transform">{d.name}</span>
                <span className="ml-auto hidden sm:block text-xs text-[#8A877F] max-w-[45%] text-right">
                  {d.note}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/1" element={<Marginalia />} />
        <Route path="/2" element={<Machine />} />
        <Route path="/3" element={<Swiss />} />
        <Route path="/4" element={<NightLibrary />} />
        <Route path="/5" element={<Pop />} />
      </Routes>
    </BrowserRouter>
  );
}
