import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ColorPallete from './ColorPallete';
import useColorStore from '../../store/useColorStore';

gsap.registerPlugin(ScrollTrigger);

const StatItem = ({ label, value }) => (
  <div className="group cursor-default">
    <div className="flex items-center space-x-8">
      <div className="h-16 w-[1.5px] bg-white/20 group-hover:bg-primary group-hover:h-20 transition-all duration-500"></div>
      <div>
        <span className="font-label text-[10px] text-on-surface-variant tracking-[0.3em] block mb-3 uppercase">{label}</span>
        <span className="font-headline text-4xl font-bold tracking-tighter uppercase">{value}</span>
      </div>
    </div>
  </div>
);

const FeaturedProduct = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  //global state
  const { primaryColor, secondaryColor, ropeColor, setPrimaryColor, setSecondaryColor, setRopeColor } = useColorStore();



  useGSAP(() => {

    if (!imageRef.current || !contentRef.current) {
      return;
    }

    // Subtle parallax effect on image
    gsap.to(imageRef.current, {
      yPercent: 25,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5
      }
    });

    // Entrance animation for content
    gsap.from(contentRef.current, {
      x: 100,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
        markers: true
      }
    });
  });

  return (
    <section ref={sectionRef} className=" w-full min-h-[140vh] bg-surface flex-col md:flex-row flex items-center overflow-hidden border-t border-white/5">

      <div className="w-1/2 h-[50vh] invisible md:visible">&nbsp;</div>


      {/* Content Layer */}
      <div className="md:w-1/2 w-full flex items-stretch px-8 md:px-12 z-50">
        <div ref={contentRef} className="relative text-center md:text-left">
          <p className="font-label text-primary tracking-[0.4em] mb-8 uppercase text-sm font-bold">CUSTOMIZE YOUR SHOES</p>
          <h2 className="font-headline text-6xl md:text-[7rem] font-black tracking-tighter uppercase mb-20 leading-[0.85]">
            KINETIC<br />FLOWRUN
          </h2>
          <div className="w-full h-[50vh] md:sr-only">&nbsp;</div>

          {/* <div className="space-y-12 mb-20">
            <StatItem label="WEIGHT" value="142 GRAMS" />
            <StatItem label="ENERGY RETURN" value="94% EFFICIENCY" />
            <StatItem label="TRACTION" value="AEROGRIP POLYMER" />
          </div> */}

          <div className='flex items-center gap-x-3'>
            <span>{primaryColor}</span>
            <span>{secondaryColor}</span>
            <span>{ropeColor}</span>
          </div>
          <ColorPallete onColorChange={(colors) => {
            setPrimaryColor(colors.primaryColor);
            setSecondaryColor(colors.secondaryColor);
            setRopeColor(colors.ropeColor);
          }} />
          <button className="relative group bg-white text-black font-headline font-black text-xl px-14 py-6 transition-transform hover:scale-105 active:scale-95 text-center">
            <span className="relative z-10">RESERVE YOUR PAIR</span>
            <div className="absolute inset-0 bg-primary translate-x-3 translate-y-3 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
          </button>
        </div>
      </div>

    </section>
  );
};

export default FeaturedProduct;
