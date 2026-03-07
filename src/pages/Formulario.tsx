import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react"; // Agregamos MessageCircle para un toque extra

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Nuevo mensaje de ${formData.name}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nCorreo: ${formData.email}\n\nMensaje:\n${formData.message}`
    );
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=julianheitgc@gmail.com&su=${subject}&body=${body}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hola Julián! Te contacto desde tu página web.`);
    window.open(`https://wa.me/5492914073667?text=${message}`, "_blank");
  };

  return (
    <section
      id="contacto"
      className="relative py-20 md:py-32 px-4 md:px-8 min-h-screen flex items-center overflow-hidden"
    >
      {/* FONDO */}
      <div
        className="absolute inset-0 bg-[url('/fondo6.jpg')] bg-cover bg-center bg-no-repeat transition-all duration-700 dark:brightness-[0.3] dark:contrast-125"
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* TEXTO INFORMATIVO */}
          <div className="space-y-6 md:space-y-10 text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 md:space-y-6"
            >
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-[#1a4b84] dark:text-white leading-[1.1] md:leading-tight uppercase tracking-tighter transition-colors">
                ¿Listo para <br className="hidden sm:block" />
                <span className="text-[#82d659]">Trabajar</span> Juntos?
              </h2>

              <p className="text-lg md:text-2xl text-[#1a4b84]/80 dark:text-slate-300 font-medium max-w-lg transition-colors leading-relaxed mx-auto lg:mx-0">
                Impulsa y comunica tu Proyecto o Negocio para que más gente conozca lo que vos aportas al mundo.
              </p>
            </motion.div>

            <motion.button
              onClick={handleWhatsApp}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-10 py-4 md:px-14 md:py-5 text-base md:text-lg rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-black tracking-widest uppercase transition-all shadow-xl shadow-green-500/20"
            >
              <MessageCircle size={24} />
              WhatsApp
            </motion.button>
          </div>

          {/* FORMULARIO */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#1a4b84] dark:bg-[#0a192f] p-8 md:p-12 lg:p-16 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl space-y-6 md:space-y-8 relative overflow-hidden transition-all border border-white/5"
            >
              {/* Línea decorativa superior */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#82d659] to-transparent opacity-50" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Tu Nombre"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 md:px-8 md:py-5 text-base md:text-lg rounded-full bg-white text-slate-900 border-2 border-transparent focus:border-[#82d659] outline-none transition-all placeholder:text-slate-400 font-medium shadow-lg"
                />

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Tu Correo"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 md:px-8 md:py-5 text-base md:text-lg rounded-full bg-white text-slate-900 border-2 border-transparent focus:border-[#82d659] outline-none transition-all placeholder:text-slate-400 font-medium shadow-lg"
                />
              </div>

              <textarea
                name="message"
                rows={4}
                required
                placeholder="¿En qué puedo ayudarte?"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-6 py-5 md:px-8 md:py-6 text-base md:text-lg rounded-[1.5rem] md:rounded-[2rem] bg-white text-slate-900 border-2 border-transparent focus:border-[#82d659] outline-none transition-all resize-none placeholder:text-slate-400 font-medium shadow-lg"
              />

              <div className="flex justify-center md:justify-end">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full md:w-auto px-12 py-4 md:px-16 md:py-5 text-base md:text-lg rounded-full bg-[#FFC661] text-[#1a4b84] font-black uppercase tracking-[0.15em] shadow-xl hover:bg-white transition-all flex items-center justify-center gap-3 group"
                >
                  Enviar Mensaje
                  <Send
                    size={20}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </motion.button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}