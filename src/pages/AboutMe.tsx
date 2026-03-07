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
      className="relative min-h-screen py-20 md:py-28 px-6 overflow-hidden flex items-center"
    >
      {/* Imagen de fondo con ajuste de brillo para modo oscuro */}
      <div
        className="absolute inset-0 z-0 bg-[url('/fondo2.jpg')] bg-cover bg-center bg-no-repeat opacity-100 dark:opacity-30 pointer-events-none transition-opacity duration-700"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
        >
          {/* Imagen de Perfil - Ahora se posiciona arriba en móviles y a la izquierda en desktop */}
          <motion.div 
            variants={item} 
            className="lg:col-span-5 flex justify-center order-1 lg:order-1"
          >
            <div className="relative w-full max-w-[300px] md:max-w-[380px]">
              {/* Efecto de resplandor que cambia según el tema */}
              <div className="absolute inset-0 bg-[#1a4b84]/20 dark:bg-[#FFC661]/15 blur-3xl rounded-full scale-110"></div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl border-4 border-white/40 dark:border-white/10 transition-all">
                <img
                  src="/pato1.jpg"
                  alt="Julián Heit"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                />
              </div>
            </div>
          </motion.div>

          {/* Bloque de Texto */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left order-2">
            <motion.div variants={item}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a4b84] dark:text-white leading-tight uppercase tracking-tight">
                Perfil <span className="text-[#FFC661]">Profesional</span>
              </h2>
              <div className="w-24 h-2 bg-[#FFC661] mt-4 mx-auto lg:mx-0 rounded-full"></div>
            </motion.div>

            <motion.div 
              variants={item} 
              className="space-y-5 text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 dark:text-slate-300 font-medium"
            >
              <p>
                Soy <strong className="text-slate-900 dark:text-white font-black">Julián Heit</strong>, tengo 23 años y me especializo en
                marketing digital para pymes y emprendedores.
              </p>

              <p>
                Mi camino comenzó en la escuela técnica y continuó en la universidad. 
                Ese recorrido me dio una{" "}
                <span className="text-[#1a4b84] dark:text-[#FFC661] font-bold">
                  comprensión real de cómo funciona un negocio desde adentro.
                </span>
              </p>

              <p>
                Hoy ayudo a empresas a comunicar mejor lo que hacen combinando creación de contenido y análisis de mercado.
              </p>

              <p className="pt-4 text-xl md:text-2xl lg:text-3xl font-black text-[#1a4b84] dark:text-[#FFC661] italic">
                No me interesa solo que “se vea bien” —
                <span className="text-slate-900 dark:text-white not-italic"> me interesa que funcione.</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}