import { motion } from "framer-motion";
import { 
  Github, Linkedin, Mail, ArrowUp, Heart, Globe, 
  Terminal, Instagram, Code2, Facebook 
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { href: "#home", label: "Inicio" },
    { href: "#about", label: "Sobre Mí" },
    { href: "#proyectos", label: "Experiencias" },
    { href: "#skills", label: "Formación" },
    { href: "#contenido", label: "Contenido" },
  ];

  const socialLinks = [
    { href: "https://www.linkedin.com/in/julian-heit-/", icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
    { href: "https://www.instagram.com/julianheitgc/", icon: Instagram, label: "Instagram", color: "hover:text-pink-400" },
    { href: "mailto:julianheitgc@gmail.com", icon: Mail, label: "Email", color: "hover:text-red-400" },
  ];

  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0a192f] text-slate-300 pt-20 pb-10 px-6 overflow-hidden">
      
      {/* Línea divisoria con gradiente */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      {/* Decoración de fondo sutil */}
      <div aria-hidden="true" className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* SECCIÓN BRANDING */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-2 group cursor-default">
              <div className="p-2 bg-[#1a4b84] rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                <Terminal size={20} className="text-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase">
                JULIÁN<span className="text-blue-400">HEIT</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed text-sm">
              Especialista en Marketing Digital para PYMES y emprendedores. 
              Ayudando a marcas a comunicar mejor y escalar sus negocios en la era digital.
            </p>
            
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-blue-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Abierto a nuevas consultorías
            </div>
          </div>

          {/* NAVEGACIÓN RÁPIDA */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6">Mapa del Sitio</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 group w-fit">
                    <span className="h-[1px] w-0 group-hover:w-3 bg-blue-400 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* REDES & SUBIR */}
          <div className="flex flex-col items-center md:items-end gap-8">
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl bg-white/5 border border-white/10 transition-all ${link.color} hover:bg-white/10`}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="p-4 rounded-full bg-[#1a4b84] text-white shadow-lg shadow-blue-900/40 group-hover:bg-blue-600 transition-colors">
                <ArrowUp size={24} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Volver</span>
            </motion.button>
          </div>
        </div>

        {/* BARRA INFERIOR FINAL */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <div className="flex items-center gap-1.5">
               <Globe size={14} className="text-blue-500" />
               <span>AR - Bahía Blanca</span>
            </div>
            <span>•</span>
            <span>{currentYear} © Julián Heit</span>
          </div>
          
          {/* Badge Innovabyte Premium */}
          <a 
            href="https://beacons.ai/innovabyte" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#EFB041]/50 hover:bg-[#EFB041]/5 transition-all duration-500"
          >
            <span className="absolute inset-0 rounded-full bg-[#EFB041]/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Code2 size={16} className="text-[#EFB041] relative z-10 group-hover:rotate-12 transition-transform" />
            <div className="flex flex-col relative z-10">
              <span className="text-[8px] leading-none text-slate-500 font-bold uppercase tracking-tighter group-hover:text-slate-300">Powered by</span>
              <span className="text-[11px] font-black tracking-[0.2em] uppercase text-[#EFB041]">Innovabyte</span>
            </div>
          </a>

          <div className="flex gap-4 text-[9px] font-mono text-slate-600 uppercase tracking-tighter">
             <span>V.2026.03</span>
             <span className="text-slate-800">|</span>
             <span>Portfolio Profesional</span>
          </div>
        </div>
      </div>
    </footer>
  );
}