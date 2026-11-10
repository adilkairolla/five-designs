import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DesignIndex } from "@/pages/design-index";

const BracketsPage = lazy(() =>
  import("@/pages/brackets/brackets-page").then((module) => ({ default: module.BracketsPage })),
);
const JacketPage = lazy(() =>
  import("@/pages/jacket/jacket-page").then((module) => ({ default: module.JacketPage })),
);
const ClockPage = lazy(() =>
  import("@/pages/clock/clock-page").then((module) => ({ default: module.ClockPage })),
);
const AxisPage = lazy(() =>
  import("@/pages/axis/axis-page").then((module) => ({ default: module.AxisPage })),
);
const PrimerPage = lazy(() =>
  import("@/pages/primer/primer-page").then((module) => ({ default: module.PrimerPage })),
);

export function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<title>Ratio Reader</title>}>
        <Routes>
          <Route path="/" element={<DesignIndex />} />
          <Route path="/1" element={<BracketsPage />} />
          <Route path="/2" element={<JacketPage />} />
          <Route path="/3" element={<ClockPage />} />
          <Route path="/4" element={<AxisPage />} />
          <Route path="/5" element={<PrimerPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
