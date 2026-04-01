import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Philosophy from './components/Philosophy';
import FeaturedProduct from './components/FeaturedProduct';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ShoeCanvas from './components/ShoeCanvas';

function App() {
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
          <div className="absolute w-[100vw] h-[350vh] inset-0 top-0  z-50 pointer-events-none flex items-center justify-center">
            <ShoeCanvas primaryColor="#F3FFCA" secondaryColor="#ffffff" ropeColor="#ffffff" />
          </div>

        </section>


        <Hero />
        <Philosophy />

        <ProductShowcase />
        <FeaturedProduct />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
