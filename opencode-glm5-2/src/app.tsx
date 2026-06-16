import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { DesignOne } from "./pages/DesignOne";
import { DesignTwo } from "./pages/DesignTwo";
import { DesignThree } from "./pages/DesignThree";
import { DesignFour } from "./pages/DesignFour";
import { DesignFive } from "./pages/DesignFive";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/1" element={<DesignOne />} />
        <Route path="/2" element={<DesignTwo />} />
        <Route path="/3" element={<DesignThree />} />
        <Route path="/4" element={<DesignFour />} />
        <Route path="/5" element={<DesignFive />} />
      </Routes>
    </BrowserRouter>
  );
}
