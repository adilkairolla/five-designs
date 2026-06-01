import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Marginalia } from "@/pages/Marginalia";
import { Synaptic } from "@/pages/Synaptic";
import { ArcadeMode } from "@/pages/ArcadeMode";
import { LiquidDreams } from "@/pages/LiquidDreams";
import { PunkZine } from "@/pages/PunkZine";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/1" replace />} />
        <Route path="/1" element={<Marginalia />} />
        <Route path="/2" element={<Synaptic />} />
        <Route path="/3" element={<ArcadeMode />} />
        <Route path="/4" element={<LiquidDreams />} />
        <Route path="/5" element={<PunkZine />} />
      </Routes>
    </BrowserRouter>
  );
}
