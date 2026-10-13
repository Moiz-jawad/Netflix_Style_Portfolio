import { useState } from 'react';
import SmoothScroll from './components/SmoothScroll';
import NetflixPreloader from './components/NetflixPreloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <SmoothScroll enabled={!loading}>
      <div className="page-shell bg-[#050505] min-h-screen text-white relative cursor-auto md:cursor-none selection:bg-red-600 selection:text-white">
        {loading && <NetflixPreloader onComplete={() => setLoading(false)} />}
        <CustomCursor />
        {/* Scrolls away with the page — not fixed */}
        <Navbar />
        <Hero />
        <About />
        <Expertise />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
