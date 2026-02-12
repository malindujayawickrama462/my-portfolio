import About from './components/About';
import Background from './components/Background';
import Contact from './components/Contact';
import Education from './components/Education';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { RevealOnScroll } from './components/RevealOnScroll';

function App() {
  return (
    <Background>
      <Navbar />
      <RevealOnScroll>
        <Hero />
      </RevealOnScroll>
      <RevealOnScroll>
        <About />
      </RevealOnScroll>
      <RevealOnScroll>
        <Skills />
      </RevealOnScroll>
      <RevealOnScroll>
        <Projects />
      </RevealOnScroll>
      <RevealOnScroll>
        <Education />
      </RevealOnScroll>
      <RevealOnScroll>
        <Contact />
      </RevealOnScroll>
    </Background>
  );
}

export default App;