import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Sun,
  Moon,
  Instagram,
  Linkedin,
  Music2,
} from "lucide-react";

// Definimos la interfaz para que TypeScript reconozca las funciones que vienen de App.tsx
interface NavbarProps {
  toggleTheme: () => void;
  darkMode: boolean;
}

export default function Navbar({ toggleTheme, darkMode }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Efecto para detectar el scroll y cambiar el estilo de la barra
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#home", label: "INICIO" },
    { href: "#about", label: "SOBRE MÍ" },
    { href: "#proyectos", label: "PROYECTOS" },
    { href: "#skills", label: "SKILLS" },
    { href: "#contenido", label: "CONTENIDO" },
    { href: "#contacto", label: "CONTACTO" },
  ];

  const socialLinks = [
    { href: "https://www.instagram.com/julianheitgc/", icon: Instagram },
    { href: "https://www.tiktok.com/@juli.heit12", icon: Music2 },
    { href: "https://www.linkedin.com/in/julian-heit-/", icon: Linkedin },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.nav
        animate={{
          width: scrolled ? "92%" : "100%",
          maxWidth: scrolled ? "1100px" : "100%",
          y: scrolled ? 15 : 0,
          borderRadius: scrolled ? "40px" : "0px",
          padding: scrolled ? "0.65rem 1.5rem" : "1.2rem 2rem",
        }}
        transition={{ duration: 0.35 }}
        className={`
          flex items-center justify-between
          transition-colors duration-300
          ${
            scrolled
              ? "bg-[#1C4E80]/85 dark:bg-[#00396E]/85 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/20"
              : "bg-transparent"
          }
        `}
      >
        {/* LOGO */}
        <a
          href="#home"
          className="text-base md:text-lg font-bold tracking-[0.2em] uppercase text-white"
        >
          JULIAN<span className="text-[#FFC661]">.</span>
        </a>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-3 py-1.5 text-[11px] lg:text-xs font-semibold tracking-[0.15em] text-white/80 transition-colors hover:text-[#FFC661]"
            >
              {hoveredIndex === index && (
                <motion.span
                  layoutId="nav-hover"
                  className="absolute inset-0 bg-[#FFC661]/10 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              {link.label}
            </a>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* SOCIAL ICONS DESKTOP */}
          <div className="hidden md:flex items-center gap-2 mr-2">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-white/60 hover:text-[#FFC661] hover:scale-110 hover:bg-[#FFC661]/10 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>

          {/* THEME BUTTON - Conectado a App.tsx */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-1.5 md:p-2 rounded-full text-white/80 hover:bg-[#FFC661]/10 hover:text-[#FFC661] transition-colors"
          >
            <motion.div
              initial={false}
              animate={{ rotate: darkMode ? 180 : 0 }}
              transition={{ duration: 0.4 }}
            >
              {darkMode ? <Moon size={16} /> : <Sun size={16} />}
            </motion.div>
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="
              absolute top-full left-0 right-0 mt-3 mx-4
              p-5 rounded-2xl
              bg-[#1C4E80]/95 dark:bg-[#00396E]/95 backdrop-blur-xl
              border border-white/10
              shadow-2xl flex flex-col items-center gap-3
              md:hidden
            "
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="w-full text-center py-2 text-white/80 hover:text-[#FFC661] tracking-widest uppercase font-semibold text-xs border-b border-white/10 last:border-0 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}