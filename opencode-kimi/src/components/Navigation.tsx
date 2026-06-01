import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export function Navigation() {
  const links = [
    { to: "/1", label: "01", name: "Brutalist" },
    { to: "/2", label: "02", name: "Glass" },
    { to: "/3", label: "03", name: "Editorial" },
    { to: "/4", label: "04", name: "Cyber" },
    { to: "/5", label: "05", name: "Organic" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4"
    >
      <div className="flex items-center gap-1 px-2 py-2 bg-black/80 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `relative px-4 py-2 text-xs font-medium transition-all duration-300 rounded-full ${
                isActive
                  ? "text-black bg-white"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </motion.nav>
  );
}