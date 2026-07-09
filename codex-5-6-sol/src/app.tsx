import { Navigate, Route, Routes } from "react-router-dom";
import { DesignOne } from "./pages/design-one";
import { DesignTwo } from "./pages/design-two";
import { DesignThree } from "./pages/design-three";
import { DesignFour } from "./pages/design-four";
import { DesignFive } from "./pages/design-five";

export function App() {
  return (
    <Routes>
      <Route path="/1" element={<DesignOne />} />
      <Route path="/2" element={<DesignTwo />} />
      <Route path="/3" element={<DesignThree />} />
      <Route path="/4" element={<DesignFour />} />
      <Route path="/5" element={<DesignFive />} />
      <Route path="*" element={<Navigate to="/1" replace />} />
    </Routes>
  );
}
