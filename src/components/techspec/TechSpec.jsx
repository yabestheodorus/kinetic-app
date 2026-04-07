import React, { useRef } from 'react'
import Tooltips from './Tooltips'
import { useGSAP } from '@gsap/react';
import gsap, { ScrollTrigger } from 'gsap/all';

const TechSpec = () => {

  const contentRef1 = useRef(null);
  const contentRef2 = useRef(null);

  useGSAP(() => {
    const scrollTrigger = {
      trigger: contentRef1.current,
      start: "top 65%",
      toggleActions: "play none none reverse",

    }

    gsap.from(".stagger", {
      x: -50,
      opacity: 0,
      duration: 1.5,
      stagger: 0.4,
      scrollTrigger,
    })

    // gsap.to("#container-scroll", {
    //   scrollTrigger: {
    //     trigger: "#container-scroll",
    //     start: "top top",
    //     end: "+=100%",
    //     pin: true,
    //     pinSpacing: false,
    //     scrub: 1,
    //     refreshPriority: 1,
    //   },
    // });



  })
  return (
    <section id='container-scroll' class="bg-surface relative h-[100vh] flex items-center justify-center
     md:py-[8.5rem] px-6 md:px-[8.5rem] ">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div class="md:col-span-4 order-2 md:order-1 flex flex-col gap-16">
          <div ref={contentRef1} class="space-y-4 stagger z-50">
            <div class="flex items-center gap-4">
              <span class="text-primary font-label text-xs">01.</span>
              <h3 class="font-headline text-2xl font-bold uppercase tracking-tight">Nitro-Plate Core</h3>
            </div>
            <p class="text-on-surface-variant font-body leading-relaxed max-w-sm">
              A proprietary carbon-fiber composite injected with liquid nitrogen for explosive energy return. The vertical axis geometry maximizes propulsion.
            </p>
            <div class="bg-surface-container-high p-4 inline-block font-label text-[0.65rem] uppercase tracking-widest text-primary border-l-2 border-primary">
              Rigidity: 98.4% | Weight: 42g
            </div>
          </div>
          <div ref={contentRef2} class="space-y-4 stagger z-50">
            <div class="flex items-center gap-4">
              <span class="text-primary font-label text-xs">02.</span>
              <h3 class="font-headline text-2xl font-bold uppercase tracking-tight">Hyper-Weave Mesh</h3>
            </div>
            <p class="text-on-surface-variant font-body leading-relaxed max-w-sm">
              Multi-density monofilament upper that adapts to thermal expansion during peak performance. Zero friction, maximum breathability.
            </p>
          </div>
        </div>
        <Tooltips />
      </div>
    </section>
  )
}

export default TechSpec