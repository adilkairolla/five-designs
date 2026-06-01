import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans p-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Ratio Reader Marketing Concepts</h1>
      <p className="mb-12 text-neutral-400 max-w-lg text-center">
        Five distinct design directions for the Ratio Reader landing page.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <Link 
            key={i} 
            to={`/${i}`}
            className="block p-6 border border-neutral-800 rounded-lg hover:bg-neutral-900 transition-colors group"
          >
            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-400">Concept {i}</h2>
            <p className="text-sm text-neutral-500">
              {i === 1 && "Academic / Minimalist"}
              {i === 2 && "Cyberpunk / High-Tech"}
              {i === 3 && "Brutalist / Bold"}
              {i === 4 && "Soft / Organic"}
              {i === 5 && "Editorial / Magazine"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
