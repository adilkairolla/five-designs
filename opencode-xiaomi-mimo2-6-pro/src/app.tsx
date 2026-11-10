import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "./pages/home";
import { Page1 } from "./pages/page-1";
import { Page2 } from "./pages/page-2";
import { Page3 } from "./pages/page-3";
import { Page4 } from "./pages/page-4";
import { Page5 } from "./pages/page-5";
import { DesignSwitcher } from "./components/design-switcher";

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<Page1 />} />
        <Route path="/2" element={<Page2 />} />
        <Route path="/3" element={<Page3 />} />
        <Route path="/4" element={<Page4 />} />
        <Route path="/5" element={<Page5 />} />
      </Routes>
      <DesignSwitcher />
    </>
  );
}
