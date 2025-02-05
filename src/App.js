import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import VideoShowcase from './components/VideoShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <VideoShowcase />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;