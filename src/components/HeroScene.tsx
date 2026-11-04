"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useDark } from "@/lib/useDark";
import * as THREE from "three";
const cols = ["#2DD4BF", "#FFB547", "#ffffff"];
function Orbit() {
  const g = useRef<THREE.Group>(null);
  useFrame((s, dt) => {
    if (!g.current) return;
    g.current.rotation.y += dt * 0.25;
    g.current.rotation.x = THREE.MathUtils.lerp(g.current.rotation.x, -s.pointer.y * 0.4, 0.05);
  });
  return (
    <group ref={g}>
      <mesh><icosahedronGeometry args={[1.3, 1]} /><meshStandardMaterial color="#4C5BFF" metalness={0.4} roughness={0.2} flatShading /></mesh>
      <mesh rotation={[Math.PI / 2.4, 0, 0]}><torusGeometry args={[2.1, 0.03, 16, 128]} /><meshStandardMaterial color="#FFB547" emissive="#FFB547" emissiveIntensity={0.6} /></mesh>
      {cols.map((c, i) => <mesh key={i} position={[Math.cos(i * 2.09) * 2.1, Math.sin(i * 2.09) * 0.9, Math.sin(i * 2.09) * 1.8]}><sphereGeometry args={[0.2, 24, 24]} /><meshStandardMaterial color={c} /></mesh>)}
    </group>
  );
}
export default function HeroScene() {
  const dark = useDark();
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={dark ? 0.5 : 1} /><directionalLight position={[4, 5, 5]} intensity={dark ? 2 : 2.8} />
      <pointLight position={[-4, -2, 2]} color="#FFB547" intensity={dark ? 25 : 8} /><Orbit />
    </Canvas>
  );
}
