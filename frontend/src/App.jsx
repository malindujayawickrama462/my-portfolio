import About from './components/About';
import Background from './components/Background';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <Background>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </Background>
  );
}

export default App;