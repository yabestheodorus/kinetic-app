import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const PageTransition = ({ children }) => {

  const sectionRef = useRef(null)
  const maskRef = useRef(null)
  const isMobile = window.innerWidth < 768


  useGSAP(() => {

    gsap.set(maskRef.current, {
      willChange: "clip-path"
    });


    if (isMobile) {
      gsap.fromTo(maskRef.current, { clipPath: "circle(0% at 50% 50%)" }, {
        clipPath: "circle(150% at 50% 50%)",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true
        }
      });

      return;
    }
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true
      }
    });

    // 1. Point → Small Diamond
    tl.fromTo(maskRef.current,
      {
        clipPath: "polygon(50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%)"
      },
      {
        clipPath: "polygon(50% 45%,55% 50%,50% 55%,45% 50%,50% 45%,55% 50%,50% 55%,45% 50%)",
        ease: "none",
        duration: 1
      }
    )

      // 2. Small Diamond → Big Diamond
      .to(maskRef.current, {
        clipPath: "polygon(50% 0%,100% 50%,50% 100%,0% 50%,50% 0%,100% 50%,50% 100%,0% 50%)",
        ease: "none",
        duration: 1
      })

      // 3. Big Diamond → Full Screen
      .to(maskRef.current, {
        clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,100% 0%,100% 100%,0% 100%)",
        ease: "none",
        duration: 1
      });

  }, [])

  return (
    <section ref={sectionRef} className='relative w-full h-screen overflow-hidden'>
      <div ref={maskRef} className='w-full h-full'>
        {children}
      </div>
    </section>
  )
}

export default PageTransition