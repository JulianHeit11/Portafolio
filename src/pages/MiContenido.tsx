import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Youtube,
  Instagram,
  Facebook,
  Linkedin,
  Hexagon,
  Globe,
} from "lucide-react";

const socialContent = [
  {
    id: "youtube",
    name: "Julian Heit",
    platform: "YouTube",
    icon: <Youtube size={40} className="text-red-600" />,
    link: "https://youtube.com/@julianheit",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ", // reemplazá por tu video real
  },
  {
    id: "tiktok",
    name: "julian.heit12",
    platform: "TikTok",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-black dark:text-white">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V18c0 1.94-.66 3.81-1.91 5.27c-1.42 1.64-3.48 2.64-5.61 2.73c-2.13.09-4.23-.74-5.74-2.22c-1.51-1.48-2.39-3.53-2.42-5.66c-.03-2.12.82-4.19 2.32-5.7c1.5-1.51 3.56-2.41 5.68-2.43V14.1c-1.14.01-2.26.51-3.03 1.35c-.77.85-1.16 1.99-1.1 3.13c.06 1.14.59 2.22 1.46 2.95c.88.74 2.05 1.11 3.2 1.04c1.14-.07 2.22-.63 2.95-1.5c.73-.87 1.11-2.02 1.04-3.17V.02z" />
      </svg>
    ),
    link: "https://tiktok.com/@julian.heit12",
    embed: "", // TikTok requiere embed especial, podemos hacerlo después
  },
  {
    id: "instagram",
    name: "julianheitgc",
    platform: "Instagram",
    icon: <Instagram size={40} className="text-pink-600" />,
    link: "https://instagram.com/julianheitgc",
    embed: "https://www.instagram.com/reel/DQnLeC4CWEE/embed",
  },
  {
    id: "facebook",
    name: "Julian Heit",
    platform: "Facebook",
    icon: <Facebook size={40} className="text-blue-600" />,
    link: "https://facebook.com/julianheit",
    embed: "",
  },
  {
    id: "linkedin",
    name: "Julian Heit",
    platform: "LinkedIn",
    icon: <Linkedin size={40} className="text-blue-800" />,
    link: "https://linkedin.com/in/julianheit",
    embed: "",
  },
];

export default function MiContenido() {
  const [active, setActive] = useState<string | null>(null);

  const activeItem = socialContent.find((item) => item.id === active);

  return (
    <section
      id="contenido"
      className="relative min-h-screen py-20 px-6 overflow-hidden bg-[#163863] dark:bg-[#0a192f] transition-colors duration-300 flex items-center"
    >
      {/* === BACKGROUND BASE === */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_2px,transparent_2px)] bg-[size:25px_25px]" />
        <Globe
          size={600}
          className="absolute -right-40 top-1/2 -translate-y-1/2 text-white/10"
        />
        <Hexagon
          size={300}
          className="absolute left-10 top-20 text-white/5"
          strokeWidth={1}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <h2 className="text-white font-bold text-5xl mb-16 uppercase">
          MI CONTENIDO
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* IZQUIERDA */}
          <div className="flex flex-col gap-6">
            {socialContent.map((item) => (
              <div key={item.id}>
                <motion.button
                  onClick={() =>
                    setActive(active === item.id ? null : item.id)
                  }
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-xl w-full"
                >
                  {item.icon}
                  <span className="text-[#1a4b84] font-bold text-lg">
                    {item.platform}
                  </span>
                </motion.button>

                <AnimatePresence>
                  {active === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-white/90 backdrop-blur-md rounded-b-2xl p-4 text-[#1a4b84]"
                    >
                      <p className="font-bold">{item.name}</p>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm underline"
                      >
                        {item.link}
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* DERECHA PREVIEW */}
          <div className="hidden lg:block relative">
            <div className="bg-[#fdf6e9] rounded-[40px] p-6 aspect-square shadow-2xl border-8 border-white/20 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                {activeItem ? (
                  <motion.div
                    key={activeItem.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    {activeItem.embed ? (
                      <iframe
                        src={activeItem.embed}
                        className="w-full h-full rounded-2xl"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-slate-400 font-bold text-center">
                        Próximamente contenido en {activeItem.platform}
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.p
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-slate-400 font-bold text-xl uppercase"
                  >
                    Seleccioná una red social
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}