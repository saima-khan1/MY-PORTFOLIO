import "tailwindcss";

import Skills from "./components/Skills";
import Projects from "./components/Projects";

import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/ContactForm.tsx/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    // <div className="bg-amber-100 min-h-screen w-full">
    //   <main className="container mx-auto  bg-amber-200 min-h-screen ">
    //     <NavBar />

    //     <section id="home" className="py-16 md:py-24 flex justify-center">
    //       <About />
    //     </section>

    //     <section id="skills" className="py-16 md:py-24 flex justify-center">
    //       <Skills />
    //     </section>

    //     <section id="projects" className="py-16 md:py-24 flex justify-center">
    //       <Projects />
    //     </section>

    //     <section id="contact" className="py-16 md:py-24 flex justify-center">
    //       <Contact />
    //     </section>
    //   </main>
    // </div>
    <div className="bg-amber-100 w-full">
      <main className="container mx-auto bg-amber-200">
        <NavBar />

        <section
          id="home"
          className="py-10 sm:py-0 lg:py-10 flex justify-center"
        >
          <About />
        </section>

        <section
          id="skills"
          className="py-14 sm:py-12 lg:py-0 flex justify-center"
        >
          <Skills />
        </section>

        <section
          id="projects"
          className="py-14 sm:py-12 lg:py-0  flex justify-center"
        >
          <Projects />
        </section>

        <section
          id="contact"
          className="py-0 sm:py-12 lg:py-0 flex justify-center"
        >
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
