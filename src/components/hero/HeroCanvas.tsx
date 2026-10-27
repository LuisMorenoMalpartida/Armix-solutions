"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { TorusKnot } from "./TorusKnot";
import { Particles } from "./Particles";

export function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#f43f8e" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
      <Suspense fallback={null}>
        <TorusKnot />
        <Particles />
      </Suspense>
    </Canvas>
  );
}
