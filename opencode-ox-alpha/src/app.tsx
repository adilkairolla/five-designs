import { Navigate, Route, Routes } from "react-router-dom";
import { DesignOne } from "./designs/one";
import { DesignTwo } from "./designs/two";
import { DesignThree } from "./designs/three";
import { DesignFour } from "./designs/four";
import { DesignFive } from "./designs/five";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/1" replace />} />
      <Route path="/1" element={<DesignOne />} />
      <Route path="/2" element={<DesignTwo />} />
      <Route path="/3" element={<DesignThree />} />
      <Route path="/4" element={<DesignFour />} />
      <Route path="/5" element={<DesignFive />} />
      <Route path="*" element={<Navigate to="/1" replace />} />
    </Routes>
  );
}
