import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";

const experienceData = [
  {
    image: "/econtainers.jpeg",
    company: "ECONTAINERS SOLUTIONS",
    title: "Redes Sociales y Ventas",
    instagram: "https://www.instagram.com/econtainers_solutions/",
    tasks: ["Rebranding", "Manejo de Redes", "Venta de contenedores"],
  },
  {
    image: "/InnovaByte.jpeg",
    company: "InnovaByte",
    title: "Branding y Redes Sociales",
    instagram: "https://www.instagram.com/innovabyte0/",
    tasks: [
      "Manejo de Redes sociales",
      "Comunicación digital inicial",
    ],
  },
  {
    image: "/365.jpeg",
    company: "365",
    title: "Análisis de Mercado B2B",
    instagram: "https://www.instagram.com/agencia_365/",
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
      className="relative flex flex-col h-full"
    >
      <div
        onClick={() => setOpen(!open)}
        className={`relative overflow-hidden rounded-3xl shadow-2xl group bg-white transition-all duration-300 cursor-pointer ${
          open ? "rounded-b-none" : ""
        }`}
      >
        {/* Contenedor de Imagen */}
        <div className="w-full h-64 md:h-72 flex items-center justify-center p-8">
          <img
            src={item.image}
            alt={item.company}
            className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Overlay gradiente para legibilidad del nombre */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>

        <div className="absolute bottom-4 left-4 right-12 text-white font-bold tracking-wide text-lg drop-shadow-lg uppercase">
          {item.company}
        </div>

        {/* Botón de flecha */}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md rounded-full p-2 shadow-md"
        >
          <ChevronDown size={18} className="text-[#1a4b84]" />
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-white rounded-b-3xl shadow-xl border-t border-slate-100"
          >
            <div className="p-6 space-y-4">
              <h3 className="text-[#1a4b84] font-black text-base uppercase border-l-4 border-[#FFC661] pl-3">
                {item.title}
              </h3>

              <ul className="space-y-2 text-slate-600 text-sm font-medium">
                {item.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#FFC661]">●</span> {task}
                  </li>
                ))}
              </ul>

              <a
                href={item.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#1a4b84] hover:bg-[#FFC661] text-white hover:text-[#1a4b84] rounded-xl font-bold transition-all text-xs uppercase tracking-widest"
              >
                Ver Instagram <ExternalLink size={14} />
              </a>
            </div>
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
      className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden min-h-screen flex flex-col justify-center"
    >
      {/* IMAGEN DE FONDO */}
      <div
        className="absolute inset-0 bg-[url('/fondo5.jpg')] bg-cover bg-center bg-no-repeat opacity-100 dark:opacity-30 transition-opacity duration-700"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-black text-4xl sm:text-5xl md:text-7xl tracking-tighter leading-[0.9] text-white uppercase drop-shadow-2xl"
          >
            TRABAJOS Y <br className="md:hidden" /> <span className="text-[#FFC661]">EXPERIENCIAS</span>
          </motion.h2>
          <div className="w-24 h-2 bg-[#FFC661] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-start">
          {experienceData.map((item, index) => (
            <ExperienceCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}