import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import Design1Brutalist from "./pages/Design1Brutalist";
import Design2Glassmorphism from "./pages/Design2Glassmorphism";
import Design3Editorial from "./pages/Design3Editorial";
import Design4Cyberpunk from "./pages/Design4Cyberpunk";
import Design5Organic from "./pages/Design5Organic";

export function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/1" replace />} />
        <Route path="/1" element={<Design1Brutalist />} />
        <Route path="/2" element={<Design2Glassmorphism />} />
        <Route path="/3" element={<Design3Editorial />} />
        <Route path="/4" element={<Design4Cyberpunk />} />
        <Route path="/5" element={<Design5Organic />} />
      </Routes>
    </BrowserRouter>
  );
}