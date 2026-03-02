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
      className="relative min-h-screen py-32 px-10 overflow-hidden 
                 bg-[#eef1f4] dark:bg-[#0f172a] 
                 transition-colors duration-500"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-5">
        <div className="absolute top-10 right-20 w-96 h-96 bg-white dark:bg-slate-800 rounded-3xl rotate-12 shadow-lg" />
        <div className="absolute bottom-20 left-10 w-[420px] h-[420px] bg-white dark:bg-slate-800 rounded-3xl -rotate-12 shadow-lg" />
        <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-white dark:bg-slate-800 rounded-3xl rotate-6 shadow-md" />
      </div>

      <div className="max-w-[1600px] mx-auto flex gap-24 relative z-10">

        {/* TÍTULO VERTICAL MÁS GRANDE */}
        <div className="hidden lg:flex items-center">
          <h2
            className="text-[#2c5a86] dark:text-blue-400 
                       font-extrabold text-[160px] xl:text-[200px]
                       tracking-tight uppercase leading-none 
                       [writing-mode:vertical-lr] rotate-180
                       transition-colors duration-500"
          >
            FORMACIÓN
          </h2>
        </div>

        <div className="flex-1">

          {/* Layout principal más amplio */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-center">

            {/* IZQUIERDA */}
            <div className="space-y-8">
              {leftColumn.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-[#2c5a86] dark:bg-slate-800 
                             text-white 
                             py-6 px-10 
                             rounded-full 
                             text-center 
                             text-lg
                             font-medium 
                             shadow-lg 
                             hover:scale-105 
                             transition-all duration-300"
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>

            {/* CENTRO IMÁGENES MÁS GRANDES */}
            <div className="relative hidden lg:flex justify-center items-center h-[550px]">
              <img
                src="/perfil.jpg"
                className="w-52 h-72 object-cover rounded-xl shadow-2xl absolute -top-10 rotate-3"
                alt=""
              />
              <img
                src="/perfil.jpg"
                className="w-52 h-72 object-cover rounded-xl shadow-2xl rotate-[-3deg]"
                alt=""
              />
              <img
                src="/perfil.jpg"
                className="w-52 h-72 object-cover rounded-xl shadow-2xl absolute bottom-0 rotate-6"
                alt=""
              />
            </div>

            {/* DERECHA */}
            <div className="space-y-8">
              {rightColumn.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-[#2c5a86] dark:bg-slate-800 
                             text-white 
                             py-6 px-10 
                             rounded-full 
                             text-center 
                             text-lg
                             font-medium 
                             shadow-lg 
                             hover:scale-105 
                             transition-all duration-300"
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}