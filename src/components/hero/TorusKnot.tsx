"use client";

import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export function TorusKnot() {
  const mesh = useRef<THREE.Mesh>(null);
  const material = useRef<THREE.MeshStandardMaterial>(null);
  const [isHeld, setIsHeld] = useState(false);
  const { mouse } = useThree();

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.2 + mouse.y * 0.3;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.3 + mouse.x * 0.5;
    }
    if (material.current && isHeld) {
      material.current.emissiveIntensity = Math.sin(state.clock.elapsedTime * 4) * 0.3 + 0.7;
      material.current.metalness = 0.9 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    } else if (material.current) {
      material.current.emissiveIntensity = 0.3;
      material.current.metalness = 0.8;
    }
  });

  return (
    <mesh
      ref={mesh}
      onPointerDown={() => setIsHeld(true)}
      onPointerUp={() => setIsHeld(false)}
      onPointerLeave={() => setIsHeld(false)}
    >
      <torusKnotGeometry args={[1.8, 0.6, 128, 16]} />
      <meshStandardMaterial
        ref={material}
        color={isHeld ? "#ff6b9d" : "#f43f8e"}
        emissive="#a855f7"
        emissiveIntensity={0.3}
        roughness={0.2}
        metalness={0.8}
        wireframe={false}
      />
    </mesh>
  );
}
