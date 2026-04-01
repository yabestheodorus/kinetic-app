import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

const ProductCard = ({ image, title, price, tag, delayed = false }) => (
  <div className={`flex-none w-[350px] md:w-[400px] group cursor-pointer transition-transform duration-500 hover:-translate-y-4 ${delayed ? 'mt-16' : ''}`}>
    <div className="aspect-[3/4] bg-surface-container-low overflow-hidden relative mb-8 border border-white/5">
      <img 
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
        src={image} 
        alt={title}
      />
      {tag && (
        <div className="absolute top-8 left-8">
          <span className="font-label bg-primary text-on-primary px-4 py-1.5 text-[10px] tracking-widest font-bold uppercase">{tag}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
        <p className="text-white text-xs font-bold tracking-widest uppercase">VIEW SPECIFICATIONS</p>
      </div>
    </div>
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-headline font-bold text-2xl mb-1 tracking-tight">{title}</h3>
        <p className="font-label text-on-surface-variant text-sm uppercase tracking-wider">NEON / OBSIDIAN</p>
      </div>
      <p className="font-headline text-primary font-black text-xl">${price}</p>
    </div>
  </div>
);

const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);

  useEffect(() => {
    const split1 = SplitText.create(title1Ref.current, { type: "chars" });
    const split2 = SplitText.create(title2Ref.current, { type: "chars" });

    gsap.from(split1.chars, {
      scrollTrigger: {
        trigger: title1Ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power4.out"
    });

    gsap.from(split2.chars, {
      scrollTrigger: {
        trigger: title2Ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      y: 80,
      opacity: 0,
      stagger: 0.03,
      duration: 1.2,
      ease: "power4.out"
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-surface overflow-hidden relative border-t border-white/5">
      <div className="px-8 md:px-24 mb-20 flex flex-col md:flex-row justify-between items-end">
        <div className="w-full md:w-auto">
          <span 
            ref={title1Ref} 
            className="font-label text-primary text-xs tracking-[0.3em] uppercase mb-4 block"
          >
            COLLECTION 001
          </span>
          <h2 
            ref={title2Ref} 
            className="font-headline text-5xl md:text-7xl font-black tracking-tighter uppercase"
          >
            TECHNICAL ARTIFACTS
          </h2>
          <div className="h-1 w-32 bg-primary mt-8"></div>
        </div>
        
        <div className="hidden md:flex space-x-4 mt-8 md:mt-0">
          <button className="p-5 border border-outline-variant/20 text-white hover:bg-white hover:text-black transition-all">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button className="p-5 border border-outline-variant/20 text-white hover:bg-white hover:text-black transition-all">
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      <div className="flex space-x-12 px-8 md:px-24 overflow-x-auto hide-scrollbar pb-16">
        <ProductCard 
          image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800"
          title="K-1 ALPHA SHIFT"
          price="240"
          tag="NEW DROP"
        />
        <ProductCard 
          image="https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=800"
          title="THERMAL SHELL V2"
          price="185"
          delayed={true}
        />
        <ProductCard 
          image="https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=800"
          title="MONO TRAINER"
          price="210"
        />
      </div>
    </section>
  );
};

export default ProductShowcase;
