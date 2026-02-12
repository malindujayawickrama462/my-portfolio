import About from './components/About';
import Background from './components/Background';
import Education from './components/Education';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <Background>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
    </Background>
  );
}

export default App;