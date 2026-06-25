import { useScrollReveal } from './hooks/useScrollReveal';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import CodingProfiles from './components/CodingProfiles';
import Internships from './components/Internships';
import AITools from './components/AITools';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <CodingProfiles />
        <Internships />
        <AITools />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
