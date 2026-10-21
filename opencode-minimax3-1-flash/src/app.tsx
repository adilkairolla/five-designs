import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Design1 from "@/designs/design1/Design1";
import Design2 from "@/designs/design2/Design2";
import Design3 from "@/designs/design3/Design3";
import Design4 from "@/designs/design4/Design4";
import Design5 from "@/designs/design5/Design5";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/1" replace />} />
        <Route path="/1" element={<Design1 />} />
        <Route path="/2" element={<Design2 />} />
        <Route path="/3" element={<Design3 />} />
        <Route path="/4" element={<Design4 />} />
        <Route path="/5" element={<Design5 />} />
        <Route path="*" element={<Navigate to="/1" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
