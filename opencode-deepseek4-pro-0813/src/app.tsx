import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Gallery } from "./pages/gallery.tsx";
import { DesignOne } from "./designs/design-one.tsx";
import { DesignTwo } from "./designs/design-two.tsx";
import { DesignThree } from "./designs/design-three.tsx";
import { DesignFour } from "./designs/design-four.tsx";
import { DesignFive } from "./designs/design-five.tsx";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/1" element={<DesignOne />} />
        <Route path="/2" element={<DesignTwo />} />
        <Route path="/3" element={<DesignThree />} />
        <Route path="/4" element={<DesignFour />} />
        <Route path="/5" element={<DesignFive />} />
      </Routes>
    </BrowserRouter>
  );
}
