import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Index } from "./pages/Index";
import { One } from "./pages/One";
import { Two } from "./pages/Two";
import { Three } from "./pages/Three";
import { Four } from "./pages/Four";
import { Five } from "./pages/Five";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/1" element={<One />} />
        <Route path="/2" element={<Two />} />
        <Route path="/3" element={<Three />} />
        <Route path="/4" element={<Four />} />
        <Route path="/5" element={<Five />} />
        <Route path="*" element={<Index />} />
      </Routes>
    </>
  );
}
