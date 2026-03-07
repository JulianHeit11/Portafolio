import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

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

    const subject = encodeURIComponent(
      `Nuevo mensaje de ${formData.name}`
    );

    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nCorreo: ${formData.email}\n\nMensaje:\n${formData.message}`
    );

    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=julianheitgc@gmail.com&su=${subject}&body=${body}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hola Julián! Te contacto desde tu página web.`
    );

    window.open(
      `https://wa.me/5492914073667?text=${message}`,
      "_blank"
    );
  };

  return (
    <section
      id="contacto"
      className="relative py-32 px-8 min-h-screen flex items-center overflow-hidden"
    >
      {/* FONDO */}
      <div
        className="
        absolute inset-0
        bg-[url('/fondo6.jpg')]
        bg-cover bg-center bg-no-repeat
        transition-all duration-700
        dark:brightness-[0.4] dark:contrast-125 dark:saturate-75
        "
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          {/* TEXTO */}
          <div className="space-y-10 text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-[#1a4b84] dark:text-white mb-8 leading-tight uppercase tracking-tighter transition-colors">
                ¿Listo para <br />
                Trabajar Juntos?
              </h2>

              <p className="text-xl md:text-2xl text-[#1a4b84]/80 dark:text-slate-300 font-medium max-w-lg transition-colors leading-relaxed">
                Impulsa y comunica tu Proyecto o Negocio para que más gente conozca lo que vos aportas al mundo.
              </p>
            </motion.div>

            <motion.button
              onClick={handleWhatsApp}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="px-14 py-5 text-lg rounded-full bg-[#82d659] hover:bg-[#6cbc47] text-white font-black tracking-widest uppercase transition-colors shadow-xl shadow-[#82d659]/40"
            >
              WhatsApp
            </motion.button>
          </div>

          {/* FORMULARIO */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#1a4b84] dark:bg-[#0f2f55] p-12 md:p-16 rounded-[3rem] shadow-2xl space-y-8 relative overflow-hidden transition-colors"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-8 py-5 text-lg rounded-full bg-white text-slate-900 border-none focus:ring-4 focus:ring-[#82d659]/50 outline-none transition-all placeholder:text-slate-400 font-medium shadow-inner"
                />

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Correo"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-8 py-5 text-lg rounded-full bg-white text-slate-900 border-none focus:ring-4 focus:ring-[#82d659]/50 outline-none transition-all placeholder:text-slate-400 font-medium shadow-inner"
                />
              </div>

              <textarea
                name="message"
                rows={6}
                required
                placeholder="Mensaje..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-8 py-6 text-lg rounded-[2.5rem] bg-white text-slate-900 border-none focus:ring-4 focus:ring-[#82d659]/50 outline-none transition-all resize-none placeholder:text-slate-400 font-medium shadow-inner"
              />

              <div className="flex justify-end pt-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-16 py-5 text-lg rounded-full bg-white text-[#1a4b84] font-black uppercase tracking-[0.25em] shadow-xl hover:bg-slate-50 transition-colors flex items-center gap-3 group"
                >
                  Enviar
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