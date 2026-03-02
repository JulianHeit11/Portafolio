import { useEffect, useState } from "react";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Proyectos from "./pages/Proyectos";
import Skill from "./pages/Skill";
import Formulario from "./pages/Formulario";
import MiContenido from "./pages/MiContenido";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.style.backgroundColor = "#0a192f";
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.style.backgroundColor = "#eef2f6";
    }
  }, [darkMode]);

  return (
    <div className="bg-[#eef2f6] text-slate-900 dark:bg-[#0a192f] dark:text-white min-h-screen transition-colors duration-500">
      
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />

      <main className="overflow-x-hidden">
        
        <section id="home">
          <Home />
        </section>

        <section id="about" className="pt-20">
          <AboutMe />
        </section>

              <section id="contenido" className="pt-20">
          <MiContenido />
        </section>

          <section id="skills" className="pt-20">
          <Skill />
        </section>

        <section id="proyectos" className="pt-20">
          <Proyectos />
        </section>

      

        <section id="Formulario" className="pt-20 bg-transparent">
          <Formulario />
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;