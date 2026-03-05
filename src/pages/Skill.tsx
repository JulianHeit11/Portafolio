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
      className="relative min-h-screen w-full py-20 px-6 lg:px-16 overflow-hidden 
                 flex items-center transition-colors duration-500"
    >
      {/* ===== IMAGEN DE FONDO ===== */}
      <div className="absolute inset-0">
        {/* Imagen */}
        <div className="absolute inset-0 bg-[url('/fondo4.jpg')] bg-cover bg-center bg-no-repeat"></div>

        {/* Overlay claro / oscuro automático */}
        <div className="absolute inset-0 bg-white/85 dark:bg-[#0f172a]/90"></div>
      </div>

      {/* Fondo decorativo blur */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-100 dark:bg-slate-800 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-50 dark:bg-slate-900 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-[1800px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* TÍTULO VERTICAL */}
        <div className="hidden lg:flex items-center h-full">
          <h2
            className="text-[#114376] dark:text-blue-500 
                       font-black text-[10vw] xl:text-[180px]
                       tracking-tighter uppercase leading-[0.8] 
                       [writing-mode:vertical-lr] rotate-180
                       transition-colors duration-500 select-none"
          >
            FORMACIÓN
          </h2>
        </div>

        {/* CONTENEDOR PRINCIPAL */}
        <div className="flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* COLUMNA IZQUIERDA */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-12">
            {leftColumn.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#114376] dark:bg-slate-800 
                           text-white py-5 px-10 rounded-full 
                           text-center text-lg xl:text-xl font-bold
                           shadow-xl hover:scale-105 transition-all duration-300"
              >
                {skill.name}
              </motion.div>
            ))}
          </div>

          {/* COLUMNA CENTRAL */}
          <div className="lg:col-span-4 relative flex flex-col items-center justify-center min-h-[900px]">
            
            <motion.img
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: -40 }}
              src="/pato4.jpg"
              className="w-52 h-72 xl:w-60 xl:h-80 object-cover rounded-xl shadow-xl z-10 -mb-12 xl:-mb-16"
              alt="Formación Superior"
            />

            <motion.img
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 40 }}
              src="/pato2.jpg"
              className="w-52 h-72 xl:w-60 xl:h-80 object-cover rounded-xl shadow-2xl z-30 border-4 border-white dark:border-slate-800"
              alt="Formación Central"
            />

            <motion.img
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: -40 }}
              src="/pato3.jpg"
              className="w-52 h-72 xl:w-60 xl:h-80 object-cover rounded-xl shadow-xl z-20 -mt-12 xl:-mt-16"
              alt="Formación Inferior"
            />
          </div>

          {/* COLUMNA DERECHA */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-12">
            {rightColumn.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#114376] dark:bg-slate-800 
                           text-white py-5 px-10 rounded-full 
                           text-center text-lg xl:text-xl font-bold
                           shadow-xl hover:scale-105 transition-all duration-300"
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