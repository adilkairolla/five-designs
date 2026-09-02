import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ShowcaseHome } from "./pages/ShowcaseHome";
import { Design1Editorial } from "./pages/Design1Editorial";
import { Design2Cyber } from "./pages/Design2Cyber";
import { Design3Bauhaus } from "./pages/Design3Bauhaus";
import { Design4Zen } from "./pages/Design4Zen";
import { Design5Spatial } from "./pages/Design5Spatial";
import { DesignSwitcher } from "./components/DesignSwitcher";

export function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        <Routes>
          <Route path="/" element={<ShowcaseHome />} />
          <Route path="/1" element={<Design1Editorial />} />
          <Route path="/2" element={<Design2Cyber />} />
          <Route path="/3" element={<Design3Bauhaus />} />
          <Route path="/4" element={<Design4Zen />} />
          <Route path="/5" element={<Design5Spatial />} />
          {/* Catch-all route redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <DesignSwitcher />
      </div>
    </BrowserRouter>
  );
}
export default App;
