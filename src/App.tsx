import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Process from './components/Process';
import Services from './components/Services';
import Technologies from './components/Technologies';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Process />
        <Services />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;