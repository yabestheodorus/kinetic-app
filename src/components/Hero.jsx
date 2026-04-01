import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const kineticRef = useRef(null);
  const monolithRef = useRef(null);
  const subtitleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animations
      const tl = gsap.timeline({ defaults: { ease: "back.out(1.7)", duration: 1.5 } });

      tl.from(kineticRef.current, { xPercent: -100, opacity: 0 }, 0.5)
        .from(monolithRef.current, { xPercent: 100, opacity: 0 }, 0.5)
        .from(subtitleRef.current, { y: 20, opacity: 0, ease: "power2.out" }, 1.2)
        .from(contentRef.current, { y: 30, opacity: 0, ease: "power2.out" }, 1.5);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header ref={containerRef} className="relative h-[110vh] w-full flex items-center overflow-hidden bg-surface py-24">

      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,transparent_0%,rgba(14,14,14,0.8)_100%)]"></div>
      </div>

      <div className="relative z-10 px-8 md:px-24 w-full flex flex-col items-center justify-center text-center">
        <div className="max-w-full relative">
          <p ref={subtitleRef} className="font-label text-primary tracking-[0.4em] uppercase mb-12 text-xs md:text-sm">
            PERFORMANCE WITHOUT LIMITS
          </p>



          <div className="relative flex flex-col items-center justify-center w-full">
            {/* KINETIC (Back Layer) */}
            <h1
              ref={kineticRef}
              className="font-headline font-black
               -translate-x-8 md:-translate-x-1/4 text-7xl
                md:text-[min(12vw,10rem)] leading-none tracking-tighter 
                uppercase z-0 text-white select-none 
                translate-y-4 md:translate-y-8"
            >
              KINETIC
            </h1>

            {/* MONOLITH (Front Layer) */}
            <h1
              ref={monolithRef}
              className="font-headline font-black 
              translate-x-3 md:translate-x-1/4 text-7xl 
              md:text-[min(12vw,10rem)] leading-none 
              tracking-tighter uppercase z-20  text-stroke select-none 
              translate-y-4 md:translate-y-8 relative"
            >
              FLOWRUN
              <span className="absolute -bottom-4 left-0 w-full h-[2px] bg-primary/50"></span>
            </h1>
          </div>

          <div ref={contentRef} className="mt-20 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16 max-w-4xl mx-auto">
            <button className="group relative overflow-hidden bg-primary text-on-primary font-headline font-bold text-xl px-16 py-6 transition-all hover:pr-20">
              <span className="relative z-10">EXPLORE</span>
              <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all material-symbols-outlined">arrow_forward</span>
            </button>
            <div className="max-w-sm text-left">
              <p className="text-on-surface-variant font-body text-lg leading-relaxed text-center md:text-left mt-16 md:mt-0 pt-8 md:pt-0 border-t-2 md:border-l-2 border-primary/30 pl-6">
                Engineered for the elite. The new collection represents a fusion of raw biological potential and precision technical fabrics.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-[-5%] top-[20%] w-[400px] h-[600px] border border-primary/10 rotate-12 hidden lg:block pointer-events-none"></div>
      <div className="absolute left-[-5%] bottom-[15%] w-[300px] h-[300px] border border-primary/5 -rotate-6 hidden lg:block pointer-events-none"></div>

    </header>
  );
};

export default Hero;
