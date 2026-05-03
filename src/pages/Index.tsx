import LoadingScreen from "../components/LoadingScreen";
import NeonCursor from "../components/NeonCursor";
import ParticleField from "../components/ParticleField";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <LoadingScreen />
      <NeonCursor />
      <ParticleField />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;