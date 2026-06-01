import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Design1 } from "./pages/design-1";
import { Design2 } from "./pages/design-2";
import { Design3 } from "./pages/design-3";
import { Design4 } from "./pages/design-4";
import { Design5 } from "./pages/design-5";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/1" element={<Design1 />} />
        <Route path="/2" element={<Design2 />} />
        <Route path="/3" element={<Design3 />} />
        <Route path="/4" element={<Design4 />} />
        <Route path="/5" element={<Design5 />} />
        <Route path="*" element={<Design1 />} />
      </Routes>
    </BrowserRouter>
  );
}
