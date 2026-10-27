"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export function Particles() {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const light = useRef<THREE.PointLight>(null);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const particles = useMemo(() => {
    const temp = new THREE.Object3D();
    const count = 300;
    const positions: number[] = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 50;
      positions.push(x, y, z);
    }
    return { count, positions };
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      for (let i = 0; i < particles.count; i++) {
        const i3 = i * 3;
        mesh.current.getMatrixAt(i, new THREE.Matrix4());
        const matrix = new THREE.Matrix4();
        matrix.setPosition(
          particles.positions[i3],
          particles.positions[i3 + 1] + Math.sin(state.clock.elapsedTime * 0.1 + i) * 0.01,
          particles.positions[i3 + 2]
        );
        mesh.current.setMatrixAt(i, matrix);
      }
      mesh.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <>
      <pointLight ref={light} position={[0, 0, 0]} intensity={0.1} />
      <instancedMesh ref={mesh} args={[undefined, undefined, particles.count]}>
        <sphereGeometry args={[0.005, 8, 8]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.15} />
      </instancedMesh>
    </>
  );
}
