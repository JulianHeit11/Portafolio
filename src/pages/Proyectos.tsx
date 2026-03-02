import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Hexagon,
  Monitor,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const experienceData = [
  {
    image: "/logos/econtainers.png",
    company: "ECONTAINERS SOLUTIONS",
    title: "Redes Sociales y Ventas",
    tasks: ["Rebranding", "Manejo de Redes", "Venta de contenedores"],
  },
  {
    image: "/logos/innovabyte.png",
    company: "InnovaByte",
    title: "Branding y Redes Sociales",
    tasks: [
      "Manejo de Redes sociales",
      "Comunicación digital inicial",
    ],
  },
  {
    image: "/logos/365.png",
    company: "365",
    title: "Análisis de Mercado B2B",
    tasks: [
      "Investigación empresarial",
      "Análisis de mercado en Bahía Blanca",
    ],
  },
];

function ExperienceCard({
  item,
  index,
}: {
  item: typeof experienceData[0];
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* IMAGE CARD */}
      <div
        onClick={() => setOpen(!open)}
        className="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer group bg-white"
      >
        <img
          src={item.image}
          alt={item.company}
          className="w-full h-72 object-contain p-10 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay suave */}
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors"></div>

        {/* Company name */}
        <div className="absolute bottom-4 left-4 text-white font-bold tracking-wide text-lg drop-shadow-lg">
          {item.company}
        </div>

        {/* Flecha */}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-full p-2 shadow-md"
        >
          <ChevronDown size={20} className="text-[#1a4b84]" />
        </motion.div>
      </div>

      {/* EXPANDABLE CONTENT */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden bg-white rounded-b-3xl shadow-xl p-6"
          >
            <h3 className="text-[#1a4b84] font-bold text-lg mb-4 uppercase">
              {item.title}
            </h3>

            <ul className="space-y-2 text-slate-700 text-sm">
              {item.tasks.map((task, i) => (
                <li key={i}>• {task}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Proyectos() {
  return (
    <section
      id="proyectos"
      className="relative py-24 px-6 overflow-hidden bg-[#163863] dark:bg-[#0a192f] transition-colors duration-300 min-h-screen flex flex-col justify-center"
    >
      {/* === TU BACKGROUND ORIGINAL === */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_2px,transparent_2px)] bg-[size:20px_20px]"></div>

        <div className="absolute -left-20 top-20 opacity-10">
          <Hexagon size={300} strokeWidth={0.5} className="text-white" />
        </div>

        <div className="absolute left-10 top-1/4 opacity-20">
          <Monitor size={40} className="text-white/40" />
        </div>

        <div className="absolute -right-10 bottom-10 opacity-10">
          <Hexagon size={250} strokeWidth={0.5} className="text-white" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white font-bold text-4xl md:text-6xl tracking-[0.1em] uppercase"
          >
            TRABAJOS - EXPERIENCIAS
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {experienceData.map((item, index) => (
            <ExperienceCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}