import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, Environment, Float, Center, OrbitControls, Text } from '@react-three/drei';
import HeroShoe from './models/HeroShoe';
import gsap, { ScrollTrigger } from 'gsap/all';


gsap.registerPlugin(ScrollTrigger);



const ShoeModel = ({ primaryColor, secondaryColor, ropeColor, initialPosition, initialRotation, initialScale }) => {


  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  const onShoeRefReady = (shoeRef) => {
    if (shoeRef) {
      gsap.to(shoeRef.position, {
        y: -0.15,
        x: -0.3,
        ease: "power4.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: "#canvas-scroll",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,

        }
      });

      gsap.to(shoeRef.rotation, {
        x: 0.2,
        y: -4,
        z: 0.2,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: "#canvas-scroll",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        }
      })

      gsap.to(shoeRef.scale, {
        x: 1.2,
        y: 1.2,
        z: 1.2,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: "#canvas-scroll",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        }
      })
    }
  };

  return (

    <group ref={onShoeRefReady} position={initialPosition} rotation={initialRotation} scale={initialScale}>
      <Center>


        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <HeroShoe
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            ropeColor={ropeColor}
            scale={1}
            rotation={[0.5, -1, 0.5]}
          />
        </Float>
      </Center>
    </group>

  );
};

const ShoeCanvas = ({ primaryColor = "#000000", secondaryColor = "#ffffff", ropeColor = "#ffffff" }) => {
  // Set initial state through props for reliability with Suspense

  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const initialPosition = isMobile ? [0, 1.65, 0] : [0, 1.5, 0];
  const initialRotation = [0.6, -0.2, 0.3];
  const initialScale = isMobile ? [0.5, 0.5, 0.5] : [0.7, 0.7, 0.7];


  return (
    <div id='canvas-scroll' className="absolute w-full h-full">
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
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            ropeColor={ropeColor}
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
