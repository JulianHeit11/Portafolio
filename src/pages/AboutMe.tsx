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

  const emojis = [
    { emoji: "💼", top: "10%", left: "8%", size: 32 },
    { emoji: "📈", top: "25%", left: "85%", size: 40 },
    { emoji: "💻", top: "55%", left: "5%", size: 28 },
    { emoji: "🚀", top: "75%", left: "90%", size: 36 },
    { emoji: "✨", top: "85%", left: "40%", size: 26 },
    { emoji: "❤️", top: "45%", left: "95%", size: 30 },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen py-28 px-6 overflow-hidden bg-[#f8fafc] dark:bg-[#0f172a] transition-colors duration-500"
    >
     {/* BACKGROUND BUBBLES STYLE */}
<div className="absolute inset-0 pointer-events-none overflow-hidden">
  {Array.from({ length: 12 }).map((_, i) => (
    <motion.div
      key={i}
      animate={{
        y: [0, -25, 0],
      }}
      transition={{
        duration: 6 + i,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      className="
        absolute w-14 h-14
        bg-[#1a4b84]/10 dark:bg-blue-400/10
        backdrop-blur-md
        rounded-2xl
        shadow-lg
        flex items-center justify-center
        text-xl
        text-[#1a4b84]/40 dark:text-blue-400/40
      "
    >
      {["💬", "❤️", "📈", "💼"][i % 4]}
    </motion.div>
  ))}
</div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-12 gap-16 items-center"
        >
          {/* Imagen */}
          <motion.div
            variants={item}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[380px]">
              <div className="absolute inset-0 bg-[#1a4b84]/10 dark:bg-blue-400/10 blur-2xl rounded-3xl"></div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl border border-white/20 dark:border-slate-700">
                <img
                  src="/perfil.jpg"
                  alt="Julián Heit"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          {/* Texto */}
          <div className="lg:col-span-7 space-y-8 text-slate-700 dark:text-slate-300">
            <motion.div variants={item}>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                Perfil Profesional
              </h2>
            </motion.div>

            <motion.div
              variants={item}
              className="space-y-6 text-base md:text-lg leading-relaxed"
            >
              <p>
                Soy <strong>Julián Heit</strong>, tengo 23 años y me especializo en
                marketing digital para pymes y emprendedores.
              </p>

              <p>
                Mi camino comenzó en la escuela técnica y continuó en la
                universidad, pasando por distintos trabajos antes de encontrar el
                área donde realmente quiero aportar valor. Ese recorrido me dio
                algo que no se aprende en un curso:{" "}
                <strong>
                  una comprensión real de cómo funciona un negocio desde adentro.
                </strong>
              </p>

              <p>
                Hoy combino esa visión con experiencia en creación de contenido,
                análisis de mercado B2B y gestión de redes sociales para ayudar a
                empresas y emprendedores a comunicar mejor lo que hacen.
              </p>

              <p className="pt-4 text-xl md:text-2xl font-semibold text-slate-900 dark:text-white">
                No me interesa solo que “se vea bien” —{" "}
                <span className="text-[#1a4b84] dark:text-blue-400">
                  me interesa que funcione.
                </span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}