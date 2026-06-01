import { useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Gallery } from "./pages/Gallery";

// Each design is a heavy, self-contained world — code-split so the gallery
// loads instantly and a design's chunk is fetched only when its route opens.
const Design1 = lazy(() =>
  import("./pages/Design1").then((m) => ({ default: m.Design1 })),
);
const Design2 = lazy(() =>
  import("./pages/Design2").then((m) => ({ default: m.Design2 })),
);
const Design3 = lazy(() =>
  import("./pages/Design3").then((m) => ({ default: m.Design3 })),
);
const Design4 = lazy(() =>
  import("./pages/Design4").then((m) => ({ default: m.Design4 })),
);
const Design5 = lazy(() =>
  import("./pages/Design5").then((m) => ({ default: m.Design5 })),
);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Neutral, theme-agnostic placeholder shown only for the instant a design
// chunk is in flight. Kept minimal so it never clashes with the design loading.
function RouteFallback() {
  return <div style={{ minHeight: "100vh", background: "#0b0b0d" }} />;
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Gallery />} />
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
