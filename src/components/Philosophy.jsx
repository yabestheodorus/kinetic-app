import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Philosophy = () => {
  const textRef = useRef(null);
  const contentRef = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Use gsap.context to manage GSAP animations and SplitText cleanup in React
    let ctx = gsap.context(() => {
      const split = SplitText.create(textRef.current, {
        type: "chars",
        mask: "chars",
        charsClass: "splitted"
      });


      gsap.set(split.masks, {
        color: "transparent",
        webkitTextStroke: "1px rgba(243, 255, 202, 0.3)"
      });

      // The mask elements created by SplitText with 'mask: chars' are in 'split.masks'
      gsap.to(split.masks, {
        color: "#f3ffca",
        ease: "none",
        stagger: 0.1,
        scrollTrigger: {
          trigger: split.masks,
          start: "top 70%",
          end: "top 40%",
          scrub: 1,
        }
      });

      if (contentRef.current) {
        // Standard GSAP animation for content
        gsap.to(contentRef.current, {
          y: 50,
          opacity: 1,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 70%",
            end: "top 50%",
            scrub: 1,
          }
        });
      }

    }, sectionRef, contentRef);

  });

  return (
    <section ref={sectionRef} className="py-64 px-8 md:px-24 bg-surface flex flex-col items-center text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-primary to-transparent opacity-50"></div>

      <div className="flex flex-col md:max-w-6xl relative z-40">
        <span className="font-label text-primary tracking-[0.6em] mb-12 block text-sm uppercase">THE PHILOSOPHY</span>

        <h2
          ref={textRef}
          className="font-headline font-black text-5xl md:text-[8rem] leading-[0.9] tracking-tighter uppercase mb-32 "
        >
          WE ARE THE ARCHITECTS OF OUR OWN LIMITS.
        </h2>

        <div
          ref={contentRef}
          className="grid opacity-0 grid-cols-1 md:grid-cols-2 gap-20 text-left items-center"
        >
          {/* <p className="font-body text-2xl text-on-surface-variant leading-relaxed font-light">
            KINETIC was born from the obsession with the 1%. The small margins that separate the <span className="text-white font-medium">good</span> from the <span className="text-primary font-bold">monumental</span>. We don't build gear; we build biological enhancers.
          </p> */}

          <div className=''>&nbsp;</div>

          <div className="p-16 bg-surface-container-high border-r-4 border-primary relative group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h4 className="font-headline font-bold text-3xl mb-6 relative">THE MONOLITH PRINCIPLE</h4>
            <p className="font-body text-base text-on-surface-variant leading-relaxed relative">
              Every thread, every seam, every polymer is engineered to respond to the kinetic energy of the human body. Static gear is dead gear.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
