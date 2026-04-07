import React, { Suspense, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF, Stage, Environment, Float, Center, OrbitControls, Text, Html } from '@react-three/drei';
import gsap, { ScrollTrigger } from 'gsap/all';
import HeroShoeModel from './models/HeroShoeModel';


gsap.registerPlugin(ScrollTrigger);



const ShoeModel = ({ primaryColor, secondaryColor, ropeColor, initialPosition,
  initialRotation, initialScale }) => {


  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;



  const onShoeRefReady = (shoeRef) => {
    if (shoeRef) {
      const scrollConfig = {
        trigger: "#canvas-scroll",
        start: "top top",
        end: isMobile ? "+=2000" : "bottom bottom",
        scrub: 1,
      };

      // ── POSITION  P1 → P2 → P3 ──────────────────────────
      const posTimeline = gsap.timeline({ scrollTrigger: scrollConfig });


      posTimeline
        // P1 → P2  (first half of scroll)
        .to(shoeRef.position, {
          x: -0.3,
          y: isMobile ? 0.65 : 0.2,
          z: 0,
          ease: "power3.out",
          duration: 1,
        })
        // P2 → P3  (second half of scroll)
        .to(shoeRef.position, {
          x: 0.25,
          y: isMobile ? 0 : -0.3,
          z: 0.5,
          ease: "power4.out",
          duration: 1,
        })

      // ── ROTATION  P1 → P2 → P3 ──────────────────────────
      const rotTimeline = gsap.timeline({ scrollTrigger: scrollConfig });
      rotTimeline
        .to(shoeRef.rotation, {
          x: 0.2,
          y: -4,
          z: 0.2,
          ease: "power2.inOut",
          duration: 1,
        })
        .to(shoeRef.rotation, {
          x: -0.1,
          y: -6,
          z: -0.1,
          ease: "power2.inOut",
          duration: 1,
        })
      // ── SCALE  P1 → P2 → P3 ─────────────────────────────
      const scaleTimeline = gsap.timeline({ scrollTrigger: scrollConfig });
      scaleTimeline
        .to(shoeRef.scale, {
          x: 1.2,
          y: 1.2,
          z: 1.2,
          ease: "power2.inOut",
          duration: 1,
        })
        .to(shoeRef.scale, {
          x: 1.5,
          y: 1.5,
          z: 1.5,
          ease: "power2.inOut",
          duration: 1,
        })

    }
  };

  return (

    <group ref={onShoeRefReady} position={initialPosition} rotation={initialRotation} scale={initialScale}>
      <Center>


        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <HeroShoeModel

            scale={1}
            rotation={[0.5, -1, 0.5]}
          />
        </Float>
      </Center>
    </group>

  );
};

const ShoeCanvas = () => {
  // Set initial state through props for reliability with Suspense

  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const initialPosition = isMobile ? [0, 1.85, 0] : [0, 1.7, 0];
  const initialRotation = [0.6, -0.2, 0.3];
  const initialScale = isMobile ? [0.4, 0.4, 0.4] : [0.7, 0.7, 0.7];


  return (

    <div id='canvas-scroll' className="absolute w-full h-full ">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >

        {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />


          <ShoeModel

            initialPosition={initialPosition}
            initialRotation={initialRotation}
            initialScale={initialScale}
          />

        </Suspense>
      </Canvas>
    </div>
  );
};

export default ShoeCanvas;
