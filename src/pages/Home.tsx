import { motion } from "framer-motion";

import { Github, Linkedin, Mail, Monitor, Lightbulb, Network, PieChart, Cpu } from "lucide-react";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#163863] dark:bg-[#0a192f] transition-colors duration-300 font-sans text-white"
    >
  
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
   
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff25_2px,transparent_2px)] bg-[size:20px_20px]"></div>
      </div>

    

    
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none max-w-7xl mx-auto overflow-hidden">
        <HexagonIcon icon={Monitor} className="top-[20%] left-[5%] md:left-[10%]" delay={0} />
        <HexagonIcon icon={Lightbulb} className="top-[50%] left-[10%] md:left-[15%]" delay={1} />
        <HexagonIcon icon={Cpu} className="bottom-[15%] left-[5%] md:left-[8%]" delay={2} />
        <HexagonIcon icon={Network} className="top-[45%] left-[30%] md:left-[35%] opacity-20 scale-75" delay={0.5} />
        <HexagonIcon icon={PieChart} className="bottom-[20%] left-[25%] md:left-[22%] scale-90" delay={1.5} />
      </div>

  
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center min-h-[80vh] pt-24 lg:pt-0">
        
        {/* Left Column: Text & Button */}
        <div className="flex flex-col items-center lg:items-center text-center">
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-7xl md:text-[11rem] font-black tracking-tight leading-[0.9] text-white mb-6 uppercase"
          >
            JULIAN <br /> HEIT
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base font-semibold tracking-widest text-white/90 mb-10 max-w-md uppercase"
          >
            Marketing digital para  <br className="hidden md:block" /> pymes y emprendedores
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
   <a
  href="https://wa.me/5492914073667?text=Hola%20Juli%C3%A1n!%20Te%20contacto%20desde%20tu%20p%C3%A1gina%20web."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-10 py-4 rounded-full bg-[#84cc54] hover:bg-[#72b845] text-white font-bold tracking-wide transition-all hover:scale-105 shadow-[0_4px_14px_0_rgba(132,204,84,0.39)] outline-none focus-visible:ring-4 focus-visible:ring-white/50"
>
  ENVÍAME UN MENSAJE
</a>
          </motion.div>
        </div>

        {/* Right Column: Profile Image */}
  <motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="flex justify-end items-end h-full relative"
>
  <img
    src="/perfil.jpg"
    alt="Fausto Desch"
    className="max-h-[60vh] lg:max-h-[80vh] object-contain drop-shadow-2xl"
  />
</motion.div>

      </div>
    </section>
  );
}

/* === HELPER COMPONENTS === */

function SocialIcon({
  href,
  icon,
  color,
}: {
  href: string;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-2 rounded-md text-white transition-transform hover:scale-110 shadow-md ${color}`}
    >
      {icon}
    </a>
  );
}

function HexagonIcon({ icon: Icon, className, delay = 0 }: { icon: any, className: string, delay: number }) {
  return (
    <motion.div
      animate={{ y: [-15, 15, -15] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute flex items-center justify-center opacity-30 text-white/70 ${className}`}
    >
      <svg width="140" height="140" viewBox="0 0 120 120" className="absolute">
        {/* Outer Hexagon */}
        <polygon points="60,5 115,32 115,88 60,115 5,88 5,32" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        {/* Inner Hexagon */}
        <polygon points="60,15 105,40 105,80 60,105 15,80 15,40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      </svg>
      <Icon size={40} strokeWidth={1.5} />
    </motion.div>
  );
}