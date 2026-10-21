import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ZinePage } from "./designs/zine/ZinePage";
import { TransitPage } from "./designs/transit/TransitPage";
import { ReceiptPage } from "./designs/receipt/ReceiptPage";
import { MarginPage } from "./designs/margin/MarginPage";
import { ConstellationPage } from "./designs/constellation/ConstellationPage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/1" replace />} />
        <Route path="/1" element={<ZinePage />} />
        <Route path="/2" element={<TransitPage />} />
        <Route path="/3" element={<ReceiptPage />} />
        <Route path="/4" element={<MarginPage />} />
        <Route path="/5" element={<ConstellationPage />} />
      </Routes>
    </BrowserRouter>
  );
}
