import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PageOne } from "./pages/PageOne";
import { PageTwo } from "./pages/PageTwo";
import { PageThree } from "./pages/PageThree";
import { PageFour } from "./pages/PageFour";
import { PageFive } from "./pages/PageFive";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/1" />} />
        <Route path="/1" element={<PageOne />} />
        <Route path="/2" element={<PageTwo />} />
        <Route path="/3" element={<PageThree />} />
        <Route path="/4" element={<PageFour />} />
        <Route path="/5" element={<PageFive />} />
        <Route path="*" element={<Navigate replace to="/1" />} />
      </Routes>
    </BrowserRouter>
  );
}
