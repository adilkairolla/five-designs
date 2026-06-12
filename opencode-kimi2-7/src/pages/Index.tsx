import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Sparkles } from "lucide-react";

const designs = [
  { path: "/1", title: "Editorial", subtitle: "Magazine-style sophistication" },
  { path: "/2", title: "Brutalist", subtitle: "Raw, high-contrast impact" },
  { path: "/3", title: "Organic", subtitle: "Soft, breathing nature" },
  { path: "/4", title: "Terminal", subtitle: "Retro-futuristic machine" },
  { path: "/5", title: "Art Deco", subtitle: "Luxury & geometric glamour" },
];

export function Index() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-(--font-organic-body) selection:bg-stone-900 selection:text-stone-50">
      <header className="px-6 md:px-12 py-8 flex items-center justify-between border-b border-stone-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center">
            <FileText className="w-5 h-5 text-stone-50" />
          </div>
          <span className="text-xl font-semibold tracking-tight font-(--font-organic-display)">Ratio Reader</span>
        </div>
        <Sparkles className="w-5 h-5 text-stone-400" />
      </header>

      <main className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-(--font-organic-display) leading-[0.95] mb-6">
            Five ways to
            <br />
            <span className="italic font-normal">reimagine reading.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl leading-relaxed">
            Ratio Reader turns dense PDFs into clear summaries, key quotes, and
            smart hints. Below are five distinct marketing landing-page
            directions — each with its own voice, aesthetic, and personality.
          </p>
        </motion.div>

        <nav className="grid gap-4">
          {designs.map((design, i) => (
            <motion.div
              key={design.path}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
            >
              <Link
                to={design.path}
                className="group flex items-center justify-between p-6 md:p-8 bg-white border border-stone-200 rounded-2xl hover:border-stone-900 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-baseline gap-4 md:gap-8">
                  <span className="text-sm text-stone-400 font-mono">0{i + 1}</span>
                  <div>
                    <h2 className="text-2xl md:text-4xl font-bold font-(--font-organic-display) group-hover:italic transition-all">
                      {design.title}
                    </h2>
                    <p className="text-stone-500 mt-1">{design.subtitle}</p>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-stone-300 group-hover:text-stone-900 group-hover:translate-x-2 transition-all" />
              </Link>
            </motion.div>
          ))}
        </nav>
      </main>

      <footer className="px-6 md:px-12 py-8 border-t border-stone-200 text-stone-500 text-sm">
        Ratio Reader · Built for curious minds.
      </footer>
    </div>
  );
}
