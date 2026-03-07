import { motion } from "framer-motion";
import { Monitor, Lightbulb, Network, PieChart, Cpu } from "lucide-react";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-sans text-white bg-[#020617]"
    >
      {/* ===== Imagen de Fondo ===== */}
      <div
        className="absolute inset-0 bg-[url('/fondo1.jpg')] bg-cover bg-center bg-no-repeat opacity-60 dark:opacity-30"
        aria-hidden="true"
      ></div>

      {/* ===== Contenido Principal ===== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center min-h-screen">
        
        {/* Columna Izquierda: Centrada verticalmente respecto a la imagen */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center h-full pt-32 lg:pt-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-8xl lg:text-[9rem] xl:text-[10rem] font-black tracking-tighter leading-[0.85] text-[#F5F6F7] mb-6 uppercase"
          >
            JULIAN <br /> HEIT
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-lg font-semibold tracking-[0.2em] text-[#F5F6F7]/90 mb-10 max-w-md uppercase"
          >
            Marketing digital para <br className="hidden md:block" /> pymes y emprendedores
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="https://wa.me/5492914073667?text=Hola%20Juli%C3%A1n!%20Te%20contacto%20desde%20tu%20p%C3%A1gina%20web."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full bg-[#84cc54] hover:bg-[#72b845] text-white font-bold tracking-wide transition-all hover:scale-105 shadow-lg outline-none focus-visible:ring-4 focus-visible:ring-white/50"
            >
              ENVÍAME UN MENSAJE
            </a>
          </motion.div>
        </div>

        {/* Columna Derecha: Imagen pegada al borde inferior */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center lg:justify-end items-end h-full relative self-end"
        >
          <img
            src="/pato1.jpg"
            alt="Julian Heit"
            /* Mantener la altura a la base del contenedor */
            className="h-[50vh] md:h-[70vh] lg:h-[85vh] xl:h-[90vh] w-auto object-contain drop-shadow-2xl dark:drop-shadow-[0_20px_25px_rgba(255,255,255,0.1)] align-bottom"
          />
        </motion.div>

      </div>
    </section>
  );
}