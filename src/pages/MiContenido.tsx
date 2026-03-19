import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin } from "lucide-react";

const socialContent = [
  {
    id: "youtube",
    name: "Julian Heit",
    platform: "YouTube",
    icon: (
      <img src="/yt.jpg" alt="YouTube" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
    ),
    link: "https://youtube.com/@julianheit",
    embed: null, // ❌ SACAR EMBED
  },
  {
    id: "tiktok",
    name: "julian.heit12",
    platform: "TikTok",
    icon: (
      <img src="/tiktok.jpg" alt="TikTok" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
    ),
    link: "https://www.tiktok.com/@juli.heit12",
    embed: null, // ❌ SACAR EMBED
  },
  {
    id: "instagram",
    name: "julianheitgc",
    platform: "Instagram",
    icon: (
      <img src="/instagram.jpg" alt="Instagram" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
    ),
    link: "https://instagram.com/julianheitgc",
    embed: null, // ❌ SACAR EMBED
  },
  {
    id: "facebook",
    name: "Julian Heit",
    platform: "Facebook",
    icon: (
      <img src="/facebook.jpg" alt="Facebook" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
    ),
    link: "https://facebook.com/julianheit",
    embed: null,
  },
  {
    id: "linkedin",
    name: "Julian Heit",
    platform: "LinkedIn",
    icon: <Linkedin className="w-8 h-8 md:w-10 md:h-10 text-blue-800" />,
    link: "https://www.linkedin.com/",
    embed: null,
  },
];

export default function MiContenido() {
  const [active, setActive] = useState<string | null>("youtube"); // Empezamos con YouTube para que no esté vacío
  const activeItem = socialContent.find((item) => item.id === active);

  return (
    <section
      id="contenido"
      className="relative min-h-screen py-20 px-4 md:px-6 overflow-hidden flex items-center text-white"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-[url('/fondo3.jpg')] bg-cover bg-center bg-no-repeat opacity-100 dark:opacity-40"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <h2 className="font-black text-4xl md:text-7xl tracking-tight leading-[0.9] text-[#F5F6F7] mb-12 md:mb-16 uppercase text-center lg:text-left">
          MI CONTENIDO
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* IZQUIERDA: BOTONES */}
          <div className="flex flex-col gap-4 w-full">
            {socialContent.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setActive(item.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-4 p-4 rounded-2xl shadow-xl w-full transition-all duration-300 border-2 ${
                  active === item.id 
                    ? "bg-[#FFC661] border-[#FFC661] translate-x-2" 
                    : "bg-white border-transparent hover:border-white/50"
                }`}
              >
                <div className="bg-white p-1 rounded-lg">
                  {item.icon}
                </div>
                <span className={`font-bold text-lg md:text-xl ${
                  active === item.id ? "text-[#1a4b84]" : "text-[#1a4b84]"
                }`}>
                  {item.platform}
                </span>
              </motion.button>
            ))}
          </div>

          {/* DERECHA: VISUALIZADOR */}
          <div className="w-full h-full min-h-[400px] md:min-h-[500px]">
            <div className="bg-[#fdf6e9] rounded-[30px] md:rounded-[40px] p-4 md:p-8 aspect-square lg:aspect-auto lg:h-[600px] shadow-2xl border-4 md:border-8 border-white/20 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                {activeItem ? (
                  <motion.div
                    key={activeItem.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full flex flex-col items-center justify-center"
                  >
                    {activeItem.embed ? (
                      <iframe
                        src={activeItem.embed}
                        className="w-full h-full rounded-2xl shadow-inner bg-black"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                        allowFullScreen
                        title={activeItem.platform}
                      />
                    ) : (
                      <div className="bg-white rounded-3xl p-6 md:p-10 text-center shadow-xl max-w-sm">
                        <div className="flex justify-center mb-4">
                            {activeItem.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-[#1a4b84] mb-4">
                          {activeItem.platform}
                        </h3>
                        <p className="text-slate-500 mb-6">
                          Puedes ver mis publicaciones y actualizaciones diarias directamente en mi perfil.
                        </p>
                        <a
                          href={activeItem.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-8 py-4 rounded-full bg-[#1a4b84] text-white font-bold hover:bg-[#FFC661] hover:text-[#1a4b84] transition-all shadow-lg"
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
                    className="text-[#1a4b84]/40 font-bold text-xl uppercase text-center"
                  >
                    Seleccioná una red social para ver el contenido
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