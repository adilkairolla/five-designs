import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/home.tsx";

const Design1 = lazy(() =>
  import("./pages/design-1.tsx").then((m) => ({ default: m.Design1 })),
);
const Design2 = lazy(() =>
  import("./pages/design-2.tsx").then((m) => ({ default: m.Design2 })),
);
const Design3 = lazy(() =>
  import("./pages/design-3.tsx").then((m) => ({ default: m.Design3 })),
);
const Design4 = lazy(() =>
  import("./pages/design-4.tsx").then((m) => ({ default: m.Design4 })),
);
const Design5 = lazy(() =>
  import("./pages/design-5.tsx").then((m) => ({ default: m.Design5 })),
);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Fallback() {
  return <div style={{ minHeight: "100vh", background: "#111" }} />;
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1" element={<Design1 />} />
          <Route path="/2" element={<Design2 />} />
          <Route path="/3" element={<Design3 />} />
          <Route path="/4" element={<Design4 />} />
          <Route path="/5" element={<Design5 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
