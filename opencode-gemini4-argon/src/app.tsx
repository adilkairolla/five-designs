import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { DesignOne } from "./pages/DesignOne";
import { DesignTwo } from "./pages/DesignTwo";
import { DesignThree } from "./pages/DesignThree";
import { DesignFour } from "./pages/DesignFour";
import { DesignFive } from "./pages/DesignFive";
import { HomeHub } from "./pages/HomeHub";
import { DesignSwitcher } from "./components/DesignSwitcher";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeHub />} />
        <Route path="/1" element={<DesignOne />} />
        <Route path="/2" element={<DesignTwo />} />
        <Route path="/3" element={<DesignThree />} />
        <Route path="/4" element={<DesignFour />} />
        <Route path="/5" element={<DesignFive />} />
        <Route path="*" element={<Navigate to="/1" replace />} />
      </Routes>
      <DesignSwitcher />
    </BrowserRouter>
  );
}
