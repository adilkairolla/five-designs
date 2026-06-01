import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Design1 } from "./pages/Design1";
import { Design2 } from "./pages/Design2";
import { Design3 } from "./pages/Design3";
import { Design4 } from "./pages/Design4";
import { Design5 } from "./pages/Design5";
import { motion } from "motion/react";

function Home() {
  const designs = [
    {
      id: 1,
      name: "Literary Noir",
      description: "Dark, editorial, newspaper-inspired with dramatic typography",
      gradient: "from-[#1a1a1a] to-[#c9a959]",
      textColor: "text-[#c9a959]",
    },
    {
      id: 2,
      name: "Neo-Brutalist",
      description: "Raw, bold, unconventional layout with harsh colors",
      gradient: "from-[#ff5722] to-[#2962ff]",
      textColor: "text-[#ff5722]",
    },
    {
      id: 3,
      name: "Organic Flow",
      description: "Soft, nature-inspired, flowing curves with earthy tones",
      gradient: "from-[#6b8f6b] to-[#d4b896]",
      textColor: "text-[#6b8f6b]",
    },
    {
      id: 4,
      name: "Retro-Futurism",
      description: "80s synthwave meets modern minimalism, neon gradients",
      gradient: "from-[#ff00ff] to-[#00ffff]",
      textColor: "text-[#ff00ff]",
    },
    {
      id: 5,
      name: "Swiss Precision",
      description: "Clean grid system, bold typography, International style",
      gradient: "from-[#e63946] to-[#1a1a1a]",
      textColor: "text-[#e63946]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Ratio Reader
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Five unique landing page designs for your PDF reading assistant.
            Each design explores a different aesthetic direction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designs.map((design, i) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/${design.id}`}
                className="block group"
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:border-white/20">
                  <div className={`h-40 bg-gradient-to-br ${design.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-sm font-bold ${design.textColor}`}>
                        Design {design.id}
                      </span>
                      <span className="text-xs text-white/40 group-hover:text-white/60 transition-colors">
                        /{design.id} →
                      </span>
                    </div>
                    <h2 className="text-xl font-bold mb-2">{design.name}</h2>
                    <p className="text-sm text-white/50">{design.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center text-white/40 text-sm"
        >
          Click on any design to view the full landing page
        </motion.div>
      </div>
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
