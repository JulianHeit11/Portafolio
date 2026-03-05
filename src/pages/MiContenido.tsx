import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Hexagon, Globe } from "lucide-react";

const socialContent = [
  {
    id: "youtube",
    name: "Julian Heit",
    platform: "YouTube",
    icon: (
      <img
        src="/yt.jpg"
        alt="YouTube"
        className="w-10 h-10 object-contain"
      />
    ),
    link: "https://youtube.com/@julianheit",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "tiktok",
    name: "julian.heit12",
    platform: "TikTok",
    icon: (
      <img
        src="/tiktok.jpg"
        alt="TikTok"
        className="w-10 h-10 object-contain"
      />
    ),
    link: "https://www.tiktok.com/@juli.heit12",
    embed: "https://www.tiktok.com/embed/v2/7592603030600666369",
  },
  {
    id: "instagram",
    name: "julianheitgc",
    platform: "Instagram",
    icon: (
      <img
        src="/instagram.jpg"
        alt="Instagram"
        className="w-10 h-10 object-contain"
      />
    ),
    link: "https://instagram.com/julianheitgc",
    embed: "https://www.instagram.com/reel/DQnLeC4CWEE/embed",
  },
  {
    id: "facebook",
    name: "Julian Heit",
    platform: "Facebook",
    icon: (
      <img
        src="/facebook.jpg"
        alt="Facebook"
        className="w-10 h-10 object-contain"
      />
    ),
    link: "https://facebook.com/julianheit",
    embed: "",
  },
  {
    id: "linkedin",
    name: "Julian Heit",
    platform: "LinkedIn",
    icon: <Linkedin size={40} className="text-blue-800" />,
    link: "https://www.linkedin.com/",
    embed: null,
  },
];

export default function MiContenido() {
  const [active, setActive] = useState<string | null>(null);
  const activeItem = socialContent.find((item) => item.id === active);

  return (
    <section
      id="contenido"
      className="relative min-h-screen py-20 px-6 overflow-hidden flex items-center text-white"
    >
      {/* ===== Imagen de Fondo ===== */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/fondo3.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-[#163863]/85 dark:bg-[#0a192f]/90"></div>
      </div>

      {/* ===== Elementos decorativos ===== */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
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
        <h2 className="font-bold text-5xl mb-16 uppercase">
          MI CONTENIDO
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* IZQUIERDA */}
          <div className="flex flex-col gap-6">
            {socialContent.map((item) => (
              <motion.button
                key={item.id}
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
            ))}
          </div>

          {/* DERECHA */}
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
                    className="w-full h-full flex items-center justify-center"
                  >
                    {activeItem.embed ? (
                      <iframe
                        src={activeItem.embed}
                        className="w-full h-full rounded-2xl"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div className="bg-white rounded-3xl p-10 text-center shadow-xl max-w-md">
                        <h3 className="text-2xl font-bold text-[#1a4b84] mb-4">
                          {activeItem.platform}
                        </h3>
                        <p className="text-slate-500 mb-6">
                          Ver publicación completa en la plataforma.
                        </p>
                        <a
                          href={activeItem.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-8 py-4 rounded-full bg-[#1a4b84] text-white font-bold hover:scale-105 transition-all"
                        >
                          Ir a {activeItem.platform}
                        </a>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.p
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-slate-300 font-bold text-xl uppercase"
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