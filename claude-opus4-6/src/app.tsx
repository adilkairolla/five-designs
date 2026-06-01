import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

const Page1 = lazy(() => import("@/pages/page1.tsx"));
const Page2 = lazy(() => import("@/pages/page2.tsx"));
const Page3 = lazy(() => import("@/pages/page3.tsx"));
const Page4 = lazy(() => import("@/pages/page4.tsx"));
const Page5 = lazy(() => import("@/pages/page5.tsx"));

export function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white">
            <div className="animate-pulse text-lg tracking-widest uppercase">
              Loading...
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="/1" replace />} />
          <Route path="/1" element={<Page1 />} />
          <Route path="/2" element={<Page2 />} />
          <Route path="/3" element={<Page3 />} />
          <Route path="/4" element={<Page4 />} />
          <Route path="/5" element={<Page5 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
