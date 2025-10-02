import "tailwindcss";

import Skills from "./components/Skills";
import Projects from "./components/Projects";

import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/ContactForm.tsx/Contact";

const App = () => {
  return (
    <div className="bg-amber-200 min-h-screen w-full ">
      <NavBar />
      <main>
        <section id="home" className="min-h-screen ">
          <About />
        </section>

        <section id="skills" className="min-h-screen flex  justify-center">
          <Skills />
        </section>
        <section id="projects" className="min-h-screen flex  justify-center">
          <Projects />
        </section>
        <section id="contact" className="min-h-screen flex  justify-center">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
