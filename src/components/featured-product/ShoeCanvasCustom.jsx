import React, { Suspense, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF, Stage, Environment, Float, Center, OrbitControls, Text, Html } from '@react-three/drei';
import gsap, { ScrollTrigger } from 'gsap/all';
import useColorStore from '../../store/useColorStore';
import HeroShoeModel from '../models/HeroShoeModel';
import HeroShoeModelCustom from '../models/HeroShoeModelCustom';


gsap.registerPlugin(ScrollTrigger);


const ShoeCanvasCustom = () => {
  // Set initial state through props for reliability with Suspense

  const { primaryColor, secondaryColor, ropeColor } = useColorStore();
  const isMobile = window.innerWidth < 768

  return (

    <Canvas
      shadows
      camera={{ position: [0, 0, 3], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >

      <OrbitControls enableZoom={false} enablePan={true} />
      <Suspense fallback={null}>
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />


        <group >
          <Center>

            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
              <HeroShoeModelCustom
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
                ropeColor={ropeColor}
                scale={isMobile ? 4 : 2}
                position={[0.5, 0, 0]}
                rotation={[0.5, -1, 0.5]}
              />
            </Float>
          </Center>
        </group>


      </Suspense>
    </Canvas>
  );
};

export default ShoeCanvasCustom;
