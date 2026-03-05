import { motion } from "framer-motion";

export default function AboutMe() {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section
      id="about"
      // Light: Blanco hueso (#F5F6F7) | Dark: Azul profundo (#00396E)
      className="relative min-h-screen py-28 px-6 overflow-hidden bg-[#F5F6F7] dark:bg-[#00396E] transition-colors duration-500"
    >
      {/* Imagen de fondo (image_2.png) con ajuste de visibilidad según el modo */}
      <div 
        className="absolute inset-0 z-0 bg-[url('/fondo2.jpg')] bg-cover bg-no-repeat bg-center opacity-60 dark:opacity-20 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Burbujas decorativas */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden z-1">
        {Array.from({ length: 20 }).map((_, i) => {
          let top, left, emoji;
          const genericEmojis = ["💬", "❤️", "📈", "💼", "📢", "📱", "💻"];
          
          if (i < 7) { 
            top = `${Math.random() * 40}%`;
            left = `${Math.random() * 30}%`;
            emoji = "❤️";
          } else {
            top = `${Math.random() * 100}%`;
            left = `${Math.random() * 100}%`;
            emoji = genericEmojis[i % genericEmojis.length];
          }

          return (
            <motion.div
              key={i}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
              style={{ top, left }}
              className="absolute w-12 h-12 bg-white/20 dark:bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center text-xl text-[#1a4b84]/20 dark:text-white/10"
            >
              {emoji}
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-12 gap-16 items-center"
        >
          {/* Imagen de Perfil */}
          <motion.div variants={item} className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px]">
              {/* Glow que resalta más en Dark Mode con el amarillo #FFC661 */}
              <div className="absolute inset-0 bg-[#1a4b84]/10 dark:bg-[#FFC661]/15 blur-3xl rounded-full"></div>
              
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl border border-white/40 dark:border-white/10">
                <img
                  src="/pato1.jpg"
                  alt="Julián Heit"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          {/* Texto dinámico */}
          <div className="lg:col-span-7 space-y-8 text-slate-700 dark:text-white/90">
            <motion.div variants={item}>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                Perfil Profesional
              </h2>
              {/* Línea decorativa Amarilla fija */}
              <div className="w-20 h-1 bg-[#FFC661] mt-4"></div>
            </motion.div>

            <motion.div variants={item} className="space-y-6 text-base md:text-lg leading-relaxed">
              <p>
                Soy <strong className="text-slate-900 dark:text-white">Julián Heit</strong>, tengo 23 años y me especializo en
                marketing digital para pymes y emprendedores.
              </p>

              <p>
                Mi camino comenzó en la escuela técnica y continuó en la
                universidad. Ese recorrido me dio una <strong className="text-[#1a4b84] dark:text-[#FFC661]">comprensión real de cómo funciona un negocio desde adentro.</strong>
              </p>

              <p>
                Hoy ayudo a empresas a comunicar mejor lo que hacen combinando creación de contenido y análisis de mercado.
              </p>

              <p className="pt-4 text-xl md:text-2xl font-semibold text-slate-900 dark:text-[#FFC661]">
                No me interesa solo que “se vea bien” — 
                <span className="text-[#1a4b84] dark:text-white"> me interesa que funcione.</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}