import "tailwindcss";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="bg-amber-200 min-h-screen w-full ">
      <NavBar />
      <main>
        <section
          id="home"
          className="min-h-screen flex items-center justify-center"
        >
          <Home />
        </section>
        <section
          id="about"
          className="min-h-screen flex items-center justify-center"
        >
          <About />
        </section>
        <section
          id="skills"
          className="min-h-screen flex items-center justify-center"
        >
          <Skills />
        </section>
        <section
          id="projects"
          className="min-h-screen flex items-center justify-center"
        >
          <Projects />
        </section>
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center"
        >
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
