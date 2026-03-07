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
      className="relative min-h-screen py-28 px-6 overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 z-0 bg-[url('/fondo2.jpg')] bg-cover bg-center bg-no-repeat opacity-100 dark:opacity-40 pointer-events-none"
        aria-hidden="true"
      />

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

          {/* Texto */}
          <div className="lg:col-span-7 space-y-8 text-slate-700 dark:text-white/90">
            <motion.div variants={item}>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                Perfil Profesional
              </h2>
              <div className="w-20 h-1 bg-[#FFC661] mt-4"></div>
            </motion.div>

            <motion.div variants={item} className="space-y-6 text-base md:text-lg leading-relaxed">
              <p>
                Soy <strong className="text-slate-900 dark:text-white">Julián Heit</strong>, tengo 23 años y me especializo en
                marketing digital para pymes y emprendedores.
              </p>

              <p>
                Mi camino comenzó en la escuela técnica y continuó en la universidad. 
                Ese recorrido me dio una{" "}
                <strong className="text-[#1a4b84] dark:text-[#FFC661]">
                  comprensión real de cómo funciona un negocio desde adentro.
                </strong>
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