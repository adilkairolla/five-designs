import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Design1 from "./pages/Design1";
import Design2 from "./pages/Design2";
import Design3 from "./pages/Design3";
import Design4 from "./pages/Design4";
import Design5 from "./pages/Design5";

function HomePage() {
  const designs = [
    { path: "/1", name: "Editorial Magazine", desc: "Elegant serif typography with asymmetric layouts", color: "bg-amber-100 hover:bg-amber-200" },
    { path: "/2", name: "Brutalist Industrial", desc: "Raw, bold, yellow monochrome chaos", color: "bg-yellow-300 hover:bg-yellow-400" },
    { path: "/3", name: "Soft Organic", desc: "Gentle pastels with flowing blob shapes", color: "bg-rose-100 hover:bg-rose-200" },
    { path: "/4", name: "Cyberpunk Neon", desc: "Futuristic with cyan and magenta glow", color: "bg-slate-900 hover:bg-slate-800 text-white" },
    { path: "/5", name: "Luxury Minimal", desc: "Refined, clean, premium aesthetic", color: "bg-neutral-100 hover:bg-neutral-200" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light tracking-tight text-slate-900 mb-4">
            Ratio<span className="font-semibold">Reader</span>
          </h1>
          <p className="text-lg text-slate-600">Five unique landing page designs</p>
        </div>
        
        <div className="grid gap-4">
          {designs.map((design) => (
            <Link
              key={design.path}
              to={design.path}
              className={`block p-6 rounded-lg transition-all duration-300 group ${design.color}`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xl font-medium group-hover:translate-x-1 transition-transform">
                    {design.name}
                  </div>
                  <div className="text-sm opacity-70 mt-1">{design.desc}</div>
                </div>
                <svg className="w-6 h-6 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/1" element={<Design1 />} />
        <Route path="/2" element={<Design2 />} />
        <Route path="/3" element={<Design3 />} />
        <Route path="/4" element={<Design4 />} />
        <Route path="/5" element={<Design5 />} />
      </Routes>
    </BrowserRouter>
  );
}
