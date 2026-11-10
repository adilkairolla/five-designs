import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home.tsx";

const Marginalia = lazy(() =>
  import("./pages/marginalia/marginalia.tsx").then((m) => ({ default: m.Marginalia })),
);
const Proportion = lazy(() =>
  import("./pages/proportion/proportion.tsx").then((m) => ({ default: m.Proportion })),
);
const Lamplight = lazy(() =>
  import("./pages/lamplight/lamplight.tsx").then((m) => ({ default: m.Lamplight })),
);
const Receipt = lazy(() =>
  import("./pages/receipt/receipt.tsx").then((m) => ({ default: m.Receipt })),
);
const Cards = lazy(() => import("./pages/cards/cards.tsx").then((m) => ({ default: m.Cards })));

export function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1" element={<Marginalia />} />
          <Route path="/2" element={<Proportion />} />
          <Route path="/3" element={<Lamplight />} />
          <Route path="/4" element={<Receipt />} />
          <Route path="/5" element={<Cards />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
