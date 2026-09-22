import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "./designs/index-page";

const Folio = lazy(() => import("./designs/folio"));
const Compressor = lazy(() => import("./designs/compressor"));
const StudyDesk = lazy(() => import("./designs/study-desk"));
const Terrain = lazy(() => import("./designs/terrain"));
const Instrument = lazy(() => import("./designs/instrument"));

export function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-neutral-100" />}>
        <Routes>
          <Route path="/1" element={<Folio />} />
          <Route path="/2" element={<Compressor />} />
          <Route path="/3" element={<StudyDesk />} />
          <Route path="/4" element={<Terrain />} />
          <Route path="/5" element={<Instrument />} />
          <Route path="*" element={<Index />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
