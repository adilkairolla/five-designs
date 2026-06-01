import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Design1 from "./pages/Design1";
import Design2 from "./pages/Design2";
import Design3 from "./pages/Design3";
import Design4 from "./pages/Design4";
import Design5 from "./pages/Design5";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-900 text-white font-mono gap-6">
      <h1 className="text-3xl font-bold">Ratio Reader - Marketing Designs</h1>
      <div className="flex flex-col gap-4">
        {[1, 2, 3, 4, 5].map((num) => (
          <Link
            key={num}
            to={`/${num}`}
            className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors border border-neutral-700 flex items-center justify-between min-w-48"
          >
            <span>Design {num}</span>
            <span className="text-neutral-500">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<Design1 />} />
        <Route path="/2" element={<Design2 />} />
        <Route path="/3" element={<Design3 />} />
        <Route path="/4" element={<Design4 />} />
        <Route path="/5" element={<Design5 />} />
      </Routes>
    </BrowserRouter>
  );
}
