import { motion } from "framer-motion";

const skillsData = [
  { name: "Licenciatura en Organización Industrial" },
  { name: "Marketing Digital" },
  { name: "Psicología del Consumidor" },
  { name: "Oratoria" },
  { name: "Habilidades Blandas" },
  { name: "Técnico Electromecánico" },
  { name: "Ventas" },
  { name: "Canva" },
  { name: "IA para Creación de Contenido" },
  { name: "Tramo Pedagógico Nivel Medio" },
];

export default function Skills() {
  const half = Math.ceil(skillsData.length / 2);
  const leftColumn = skillsData.slice(0, half);
  const rightColumn = skillsData.slice(half);

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full py-20 px-4 md:px-10 lg:px-16 overflow-hidden flex items-center"
    >
      {/* IMAGEN DE FONDO */}
      <div
        className="absolute inset-0 bg-[url('/fondo4.jpg')] bg-cover bg-center bg-no-repeat opacity-100 dark:opacity-30 transition-opacity duration-700"
        aria-hidden="true"
      />

      <div className="w-full max-w-[1800px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 relative z-10">
        
        {/* TÍTULO - Vertical en Desktop, Horizontal en Mobile */}
        <div className="flex items-center justify-center lg:h-full w-full lg:w-auto">
          <h2
            className="text-[#1a4b84] dark:text-[#FFC661] 
                       font-black text-5xl md:text-7xl lg:text-[10vw] xl:text-[150px]
                       tracking-tighter uppercase leading-[0.8] 
                       lg:[writing-mode:vertical-lr] lg:rotate-180
                       select-none drop-shadow-2xl mb-8 lg:mb-0"
          >
            FORMACIÓN
          </h2>
        </div>

        {/* CONTENEDOR PRINCIPAL */}
        <div className="flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
          
          {/* COLUMNA IZQUIERDA (Skills) */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-4 md:space-y-8 order-2 lg:order-1">
            {leftColumn.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1a4b84] dark:bg-slate-900/80 backdrop-blur-md
                           text-white py-4 md:py-5 px-6 md:px-10 rounded-full 
                           text-center text-sm md:text-lg xl:text-xl font-bold
                           shadow-xl border border-white/10 hover:bg-[#FFC661] hover:text-[#1a4b84] transition-all duration-300"
              >
                {skill.name}
              </motion.div>
            ))}
          </div>

          {/* COLUMNA CENTRAL (Fotos encimadas - Ajustadas para Mobile) */}
          <div className="lg:col-span-4 relative flex flex-col items-center justify-center min-h-[500px] md:min-h-[700px] lg:min-h-[900px] order-1 lg:order-2 scale-75 md:scale-100">
            
            <motion.img
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: -30 }}
              src="/pato4.jpg"
              className="w-40 h-56 md:w-52 md:h-72 xl:w-60 xl:h-80 object-cover rounded-2xl shadow-xl z-10 -mb-16 md:-mb-20"
              alt="Formación Superior"
            />

            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              src="/pato2.jpg"
              className="w-44 h-60 md:w-56 md:h-80 xl:w-64 xl:h-96 object-cover rounded-2xl shadow-2xl z-30 border-4 md:border-8 border-white dark:border-slate-900"
              alt="Formación Central"
            />

            <motion.img
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 30 }}
              src="/pato3.jpg"
              className="w-40 h-56 md:w-52 md:h-72 xl:w-60 xl:h-80 object-cover rounded-2xl shadow-xl z-20 -mt-16 md:-mt-20"
              alt="Formación Inferior"
            />
          </div>

          {/* COLUMNA DERECHA (Skills) */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-4 md:space-y-8 order-3">
            {rightColumn.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1a4b84] dark:bg-slate-900/80 backdrop-blur-md
                           text-white py-4 md:py-5 px-6 md:px-10 rounded-full 
                           text-center text-sm md:text-lg xl:text-xl font-bold
                           shadow-xl border border-white/10 hover:bg-[#FFC661] hover:text-[#1a4b84] transition-all duration-300"
              >
                {skill.name}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}