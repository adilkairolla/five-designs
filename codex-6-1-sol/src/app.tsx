import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ReaderDemoProvider } from "./components/reader-demo";
import { Editorial } from "./pages/editorial";
import { Playground } from "./pages/playground";
import { Observatory } from "./pages/observatory";
import { FieldGuide } from "./pages/field-guide";
import { Poster } from "./pages/poster";

const designs = [
  { path: "/1", name: "The reading room" },
  { path: "/2", name: "A brighter brain" },
  { path: "/3", name: "The observatory" },
  { path: "/4", name: "Room to grow" },
  { path: "/5", name: "Less, but more" },
];

function DesignSwitcher() {
  return (
    <nav className="design-switcher" aria-label="Explore the five designs">
      <span className="switcher-label">
        Explore designs <ArrowUpRight size={12} />
      </span>
      {designs.map((design, index) => (
        <NavLink
          key={design.path}
          to={design.path}
          title={design.name}
          aria-label={`Design ${index + 1}: ${design.name}`}
          onClick={() => window.scrollTo({ top: 0 })}
        >
          {index + 1}
        </NavLink>
      ))}
    </nav>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <ReaderDemoProvider>
        <Routes>
          <Route path="/1" element={<Editorial />} />
          <Route path="/2" element={<Playground />} />
          <Route path="/3" element={<Observatory />} />
          <Route path="/4" element={<FieldGuide />} />
          <Route path="/5" element={<Poster />} />
          <Route path="*" element={<Navigate to="/1" replace />} />
        </Routes>
        <DesignSwitcher />
      </ReaderDemoProvider>
    </BrowserRouter>
  );
}
