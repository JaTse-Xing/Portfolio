import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, OrbitControls } from "@react-three/drei";
import gsap from "gsap";

const Hero = () => {
    useEffect(() => {
        gsap.to('#hero', { opacity: 1, delay: 1.5 });
    }, []);

    return (
        <section className="w-full h-screen bg-black relative">
            <Canvas className="absolute inset-0 z-0" camera={{ position: [0, 0, 20], fov: 50 }}>
                <color attach="background" args={["#2C2C2A"]} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={1.5} />
                <Float floatIntensity={2}>
                    <RotatingCube />
                </Float>
                <OrbitControls enableZoom={false} />
            </Canvas>
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <p id="hero" className="hero-title text-white text-2xl md:text-4xl lg:text-6xl">
                    HI I'M JASPREET SINGH
                </p>
            </div>
        </section>
    );
};

const RotatingCube = React.memo(() => {
    const meshRef = useRef();

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[10, 10, 10]} />
            <MeshTransmissionMaterial 
                backside
                backsideThickness={5}
                thickness={2}
                transmission={1}
                roughness={0.2}
                ior={1.5}
                chromaticAberration={0.03}
                anisotropy={0.1}
                distortion={0.1}
                distortionScale={0.5}
                temporalDistortion={0.2}
                color="#ffffff"
                toneMapped={true}
            />
        </mesh>
    );
});

export default Hero;
