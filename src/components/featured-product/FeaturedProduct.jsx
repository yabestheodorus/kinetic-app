import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ColorPallete from './ColorPallete';
import useColorStore from '../../store/useColorStore';
import ShoeCanvasCustom from './ShoeCanvasCustom';

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
      }
    });
  });

  return (
    <section ref={sectionRef} d='featured-product-anchor' className="py-24 w-full  bg-surface flex-col md:flex-row flex items-center overflow-hidden border-t border-white/5 ">



      {/* Content Layer */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-50">



        {/* Title big typhography */}
        <div ref={contentRef} className="relative order-1 md:order-2 md:col-start-2 md:row-start-1 text-center md:text-left">
          <p className="font-label text-primary tracking-[0.4em] mb-8 uppercase text-sm font-bold">CUSTOMIZE YOUR SHOES</p>
          <h2 className="font-headline text-6xl md:text-[7rem] font-black tracking-tighter uppercase mb-6 leading-[0.85]">
            KINETIC<br />FLOWRUN
          </h2>

        </div>


        {/* canvas */}
        <div className=" w-full h-[350px] md:h-full order-2 md:order-1 md:col-start-1 md:row-span-2 flex justify-center " >
          <ShoeCanvasCustom />
        </div>



        {/* <div className="space-y-12 mb-20">
            <StatItem label="WEIGHT" value="142 GRAMS" />
            <StatItem label="ENERGY RETURN" value="94% EFFICIENCY" />
            <StatItem label="TRACTION" value="AEROGRIP POLYMER" />
          </div> */}

        <div className='order-3 md:order-2 md:col-start-2 md:row-start-2 text-center md:text-left px-6 md:px-0'>
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
