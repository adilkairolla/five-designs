import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Design1 from './pages/Design1';
import Design2 from './pages/Design2';
import Design3 from './pages/Design3';
import Design4 from './pages/Design4';
import Design5 from './pages/Design5';

function Home() {
  return (
    <div className="p-10 flex flex-col items-center justify-center min-h-screen font-sans bg-gray-50 text-gray-900">
      <h1 className="text-5xl font-extrabold mb-12 tracking-tight">Ratio Reader Designs</h1>
      <div className="grid gap-6 max-w-md w-full">
        <Link to="/1" className="group relative px-6 py-4 bg-white border rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-between overflow-hidden">
            <div className="absolute inset-0 bg-gray-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            <span className="relative z-10 font-medium text-lg">Design 1: Minimalist / Swiss</span>
            <span className="relative z-10 text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
        <Link to="/2" className="group relative px-6 py-4 bg-black text-white border border-gray-800 rounded-xl shadow-sm hover:shadow-lg hover:shadow-purple-500/20 transition-all flex items-center justify-between overflow-hidden">
             <div className="absolute inset-0 bg-gray-900 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            <span className="relative z-10 font-medium text-lg text-purple-400">Design 2: Cyberpunk</span>
            <span className="relative z-10 text-gray-500 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
        <Link to="/3" className="group relative px-6 py-4 bg-[#FDFBF7] border border-[#E6D5B8] rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-between overflow-hidden">
             <div className="absolute inset-0 bg-[#F0EBE0] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            <span className="relative z-10 font-medium text-lg font-serif text-[#2C5F2D]">Design 3: Organic</span>
            <span className="relative z-10 text-[#2C5F2D] group-hover:translate-x-1 transition-transform">→</span>
        </Link>
        <Link to="/4" className="group relative px-6 py-4 bg-[#FFF44F] border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-between">
            <span className="font-bold text-lg font-mono">Design 4: Brutalist</span>
            <span className="font-bold">→</span>
        </Link>
        <Link to="/5" className="group relative px-6 py-4 bg-gradient-to-r from-blue-900 to-slate-900 text-white border border-white/10 rounded-xl shadow-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-between overflow-hidden">
             <div className="absolute inset-0 bg-white/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            <span className="relative z-10 font-medium text-lg">Design 5: Glassmorphism</span>
            <span className="relative z-10 text-white/50 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
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
