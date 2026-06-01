import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Portal } from "./pages/Portal";
import { DesignOne } from "./pages/DesignOne";
import { DesignTwo } from "./pages/DesignTwo";
import { DesignThree } from "./pages/DesignThree";
import { DesignFour } from "./pages/DesignFour";
import { DesignFive } from "./pages/DesignFive";
import { DesignSwitcher } from "./components/DesignSwitcher";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="/1" element={<DesignOne />} />
        <Route path="/2" element={<DesignTwo />} />
        <Route path="/3" element={<DesignThree />} />
        <Route path="/4" element={<DesignFour />} />
        <Route path="/5" element={<DesignFive />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <DesignSwitcher />
    </BrowserRouter>
  );
}
