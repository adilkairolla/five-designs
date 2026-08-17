import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { DesignSwitcher } from "./components/DesignSwitcher";
import { DesignHub } from "./pages/DesignHub";
import { Design1Editorial } from "./pages/Design1Editorial";
import { Design2CyberCodex } from "./pages/Design2CyberCodex";
import { Design3ZenRatio } from "./pages/Design3ZenRatio";
import { Design4ExecutiveVault } from "./pages/Design4ExecutiveVault";
import { Design5NeoPopArcade } from "./pages/Design5NeoPopArcade";

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
      {/* Global Design Switcher available across all routes */}
      <DesignSwitcher />
      
      <Routes>
        <Route path="/" element={<DesignHub />} />
        <Route path="/1" element={<Design1Editorial />} />
        <Route path="/2" element={<Design2CyberCodex />} />
        <Route path="/3" element={<Design3ZenRatio />} />
        <Route path="/4" element={<Design4ExecutiveVault />} />
        <Route path="/5" element={<Design5NeoPopArcade />} />
        {/* Fallback */}
        <Route path="*" element={<DesignHub />} />
      </Routes>
    </BrowserRouter>
  );
}
