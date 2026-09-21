import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Missing } from "./pages/home.tsx";
import { DesignOne } from "./pages/one.tsx";
import { DesignTwo } from "./pages/two.tsx";
import { DesignThree } from "./pages/three.tsx";
import { DesignFour } from "./pages/four.tsx";
import { DesignFive } from "./pages/five.tsx";

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
        <Route path="*" element={<Missing />} />
      </Routes>
    </BrowserRouter>
  );
}
