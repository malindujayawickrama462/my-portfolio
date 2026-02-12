import Background from './components/Background';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <Background>
      <Navbar />
      <Hero />
    </Background>
  );
}

export default App;