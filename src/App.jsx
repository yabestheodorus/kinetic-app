import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Philosophy from './components/Philosophy';
import FeaturedProduct from './components/featured-product/FeaturedProduct';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ShoeCanvas from './components/ShoeCanvas';
import TechSpec from './components/techspec/TechSpec';

function App() {


  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  useEffect(() => {
    // Mouse Glow Effect
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-surface text-white selection:bg-primary selection:text-on-primary">
      <div className="glow-overlay" id="mouseGlow"></div>

      <Navbar />

      <main>

        <section className='relative '>
          {/* SHOE (Middle Layer) */}
          <div className={`absolute w-[100vw] ${isMobile ? 'h-[450vh]' : 'h-[350vh]'} inset-0 top-0  z-30 pointer-events-none flex items-center justify-center`}>
            <ShoeCanvas />
          </div>

        </section>


        <Hero />
        <Philosophy />

        <TechSpec />
        <FeaturedProduct />

        <ProductShowcase />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
