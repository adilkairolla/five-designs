import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { App } from "./app.tsx";
import { DesignOne } from "./designs/design-1.tsx";
import { DesignTwo } from "./designs/design-2.tsx";
import { DesignThree } from "./designs/design-3.tsx";
import { DesignFour } from "./designs/design-4.tsx";
import { DesignFive } from "./designs/design-5.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/1" element={<DesignOne />} />
        <Route path="/2" element={<DesignTwo />} />
        <Route path="/3" element={<DesignThree />} />
        <Route path="/4" element={<DesignFour />} />
        <Route path="/5" element={<DesignFive />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
