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

interface NavbarProps {
  toggleTheme: () => void;
  darkMode: boolean;
}

export default function Navbar({ toggleTheme, darkMode }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#home", label: "INICIO" },
    { href: "#about", label: "SOBRE MÍ" },
    { href: "#proyectos", label: "EXPERIENCIAS" }, // Actualizado para coincidir con tu sección
    { href: "#skills", label: "FORMACIÓN" },      // Actualizado para coincidir con tu sección
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
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 md:px-0"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.nav
        animate={{
          width: scrolled ? "100%" : "100%",
          maxWidth: scrolled ? "1000px" : "100%",
          y: scrolled ? 20 : 0,
          borderRadius: scrolled ? "100px" : "0px",
          padding: scrolled ? "0.6rem 1.2rem" : "1.5rem 2.5rem",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`
          flex items-center justify-between w-full
          transition-all duration-500
          ${
            scrolled
              ? "bg-white/10 dark:bg-[#0a192f]/80 backdrop-blur-2xl border border-white/20 shadow-2xl"
              : "bg-transparent"
          }
        `}
      >
        {/* LOGO */}
        <a
          href="#home"
          className="text-lg md:text-xl font-black tracking-tighter uppercase text-white group"
        >
          JULIÁN<span className="text-[#FFC661] group-hover:animate-pulse">.</span>
        </a>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-4 py-2 text-[10px] lg:text-xs font-black tracking-[0.1em] text-white/90 transition-colors hover:text-[#FFC661]"
            >
              <span className="relative z-10">{link.label}</span>
              {hoveredIndex === index && (
                <motion.span
                  layoutId="nav-hover"
                  className="absolute inset-0 bg-white/10 dark:bg-[#FFC661]/20 rounded-full"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-1 md:gap-3">
          {/* SOCIAL ICONS DESKTOP */}
          <div className="hidden lg:flex items-center gap-1 mr-2 border-r border-white/10 pr-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-white/70 hover:text-[#FFC661] hover:bg-white/10 transition-all"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>

          {/* THEME BUTTON */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-white/10 text-[#FFC661] border border-white/10 hover:bg-[#FFC661] hover:text-[#1a4b84] transition-all duration-300"
            title="Cambiar tema"
          >
            <motion.div
              initial={false}
              animate={{ rotate: darkMode ? 180 : 0, scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5 }}
            >
              {darkMode ? <Moon size={18} fill="currentColor" /> : <Sun size={18} fill="currentColor" />}
            </motion.div>
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="md:hidden p-2.5 bg-white/10 rounded-full text-white border border-white/10 active:scale-90 transition-transform"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="
              absolute top-full left-4 right-4 mt-4
              p-6 rounded-[2rem]
              bg-[#1a4b84]/95 dark:bg-[#0a192f]/98 backdrop-blur-2xl
              border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)]
              flex flex-col items-center gap-4
              md:hidden z-[60]
            "
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="w-full text-center py-3 text-white/90 hover:text-[#FFC661] tracking-[0.2em] uppercase font-black text-xs border-b border-white/5 last:border-0 transition-all active:bg-white/5 rounded-xl"
              >
                {link.label}
              </a>
            ))}
            
            <div className="flex gap-6 mt-4 pt-4 border-t border-white/10 w-full justify-center">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a key={index} href={social.href} className="text-white/60 hover:text-[#FFC661]">
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}