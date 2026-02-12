import About from './components/About';
import Background from './components/Background';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <Background>
      <Navbar />
      <Hero />
      <About />
    </Background>
  );
}

export default App;