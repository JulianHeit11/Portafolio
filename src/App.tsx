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
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#eef2f6] text-slate-900 dark:bg-[#0a192f] dark:text-white transition-colors duration-500">

      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />

      <main className="overflow-x-hidden">

        <section id="home">
          <Home />
        </section>

        <section id="about">
          <AboutMe />
        </section>

        <section id="contenido">
          <MiContenido />
        </section>

        <section id="skills">
          <Skill />
        </section>

        <section id="proyectos">
          <Proyectos />
        </section>

        <section id="formulario">
          <Formulario />
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;