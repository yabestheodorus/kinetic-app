import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

    useEffect(() => {
        // Subtle parallax effect on image
        gsap.to(imageRef.current, {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                scrub: true,
                start: "top bottom",
                end: "bottom top",
            }
        });

        // Entrance animation for content
        gsap.from(contentRef.current, {
            x: 100,
            opacity: 0,
            duration: 1.5,
            scrollTrigger: {
                trigger: contentRef.current,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full min-h-[140vh] bg-surface flex items-center overflow-hidden border-t border-white/5">
            {/* Image Layer */}
            <div className="absolute left-0 top-0 w-full h-full md:w-3/4 z-0 overflow-hidden">
                <img 
                    ref={imageRef}
                    className="w-full h-full object-cover scale-110" 
                    src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=1200" 
                    alt="Vortex Hyper-Lite"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-surface/60 to-surface"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface"></div>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 w-full flex justify-end px-8 md:px-32">
                <div ref={contentRef} className="max-w-2xl text-right md:text-left">
                    <p className="font-label text-primary tracking-[0.4em] mb-8 uppercase text-sm font-bold">FEATURED INNOVATION</p>
                    <h2 className="font-headline text-7xl md:text-[9rem] font-black tracking-tighter uppercase mb-20 leading-[0.85]">
                        VORTEX<br/>HYPER-LITE
                    </h2>
                    
                    <div className="space-y-12 mb-20">
                        <StatItem label="WEIGHT" value="142 GRAMS" />
                        <StatItem label="ENERGY RETURN" value="94% EFFICIENCY" />
                        <StatItem label="TRACTION" value="AEROGRIP POLYMER" />
                    </div>

                    <button className="relative group bg-white text-black font-headline font-black text-xl px-14 py-6 transition-transform hover:scale-105 active:scale-95 text-center">
                        <span className="relative z-10">RESERVE YOUR PAIR</span>
                        <div className="absolute inset-0 bg-primary translate-x-3 translate-y-3 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
                    </button>
                </div>
            </div>

            {/* Large Decorative Text */}
            <div className="absolute bottom-20 left-8 md:left-24 z-10 hidden lg:block opacity-5">
                <span className="font-label text-[250px] leading-none text-white font-black uppercase pointer-events-none select-none tracking-tighter">KINETIC</span>
            </div>
        </section>
    );
};

export default FeaturedProduct;
