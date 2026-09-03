import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./home";
import { DesignOne } from "./designs/design-one";
import { DesignTwo } from "./designs/design-two";
import { DesignThree } from "./designs/design-three";
import { DesignFour } from "./designs/design-four";
import { DesignFive } from "./designs/design-five";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<DesignOne />} />
        <Route path="/2" element={<DesignTwo />} />
        <Route path="/3" element={<DesignThree />} />
        <Route path="/4" element={<DesignFour />} />
        <Route path="/5" element={<DesignFive />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
