import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Design1 from "./pages/design1";
import Design2 from "./pages/design2";
import Design3 from "./pages/design3";
import Design4 from "./pages/design4";
import Design5 from "./pages/design5";

function Home() {
  return (
    <div style={{ fontFamily: "monospace", padding: "2rem" }}>
      <h1>Ratio Reader — Design Showcase</h1>
      <ul>
        {[1, 2, 3, 4, 5].map((n) => (
          <li key={n}>
            <Link to={`/${n}`}>Design {n}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<Design1 />} />
        <Route path="/2" element={<Design2 />} />
        <Route path="/3" element={<Design3 />} />
        <Route path="/4" element={<Design4 />} />
        <Route path="/5" element={<Design5 />} />
      </Routes>
    </BrowserRouter>
  );
}
