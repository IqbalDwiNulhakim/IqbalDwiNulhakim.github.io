import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Resume from "../components/Resume";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Resume />
      <Contact />
    </main>
  );
};

export default Home;
