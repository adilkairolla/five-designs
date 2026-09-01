import { Routes, Route, Navigate } from "react-router-dom";
import { DesignSwitcher } from "./components/design-switcher";
import { ScrollToTop } from "./components/scroll-to-top";
import { Editorial } from "./pages/editorial";
import { Blueprint } from "./pages/blueprint";
import { Brutalist } from "./pages/brutalist";
import { Lens } from "./pages/lens";
import { Golden } from "./pages/golden";

export function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/1" replace />} />
        <Route path="/1" element={<Editorial />} />
        <Route path="/2" element={<Blueprint />} />
        <Route path="/3" element={<Brutalist />} />
        <Route path="/4" element={<Lens />} />
        <Route path="/5" element={<Golden />} />
        <Route path="*" element={<Navigate to="/1" replace />} />
      </Routes>
      <DesignSwitcher />
    </>
  );
}
