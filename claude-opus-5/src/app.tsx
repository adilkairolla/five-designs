import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contents } from "./pages/contents";

const Proofsheet = lazy(() => import("./designs/proofsheet"));
const Blueprint = lazy(() => import("./designs/blueprint"));
const Risograph = lazy(() => import("./designs/risograph"));
const Atlas = lazy(() => import("./designs/atlas"));
const Nocturne = lazy(() => import("./designs/nocturne"));

function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-[#101216] font-plexmono text-xs tracking-[0.3em] text-[#8b93a5] uppercase">
      Loading
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Contents />} />
          <Route path="/1" element={<Proofsheet />} />
          <Route path="/2" element={<Blueprint />} />
          <Route path="/3" element={<Risograph />} />
          <Route path="/4" element={<Atlas />} />
          <Route path="/5" element={<Nocturne />} />
          <Route path="*" element={<Contents />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
