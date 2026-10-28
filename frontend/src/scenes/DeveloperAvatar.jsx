import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const DeveloperAvatar = ({ position = [0, 0, 0] }) => {
  const groupRef = useRef();
  const headRef = useRef();
  const visorRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const particlesRef = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Gentle floating levitation
      groupRef.current.position.y = position[1] + Math.sin(t * 1.5) * 0.12;
      groupRef.current.rotation.y = Math.sin(t * 0.4) * 0.2;
    }

    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(t * 0.6) * 0.15;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.5;
      ring1Ref.current.rotation.y = t * 0.8;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -t * 0.4;
      ring2Ref.current.rotation.z = t * 0.6;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Head / Helmet */}
      <group ref={headRef} position={[0, 0.5, 0]}>
        {/* Main Head Geometry */}
        <mesh>
          <octahedronGeometry args={[0.7, 2]} />
          <meshStandardMaterial
            color="#0F172A"
            metalness={0.8}
            roughness={0.2}
            wireframe={false}
          />
        </mesh>

        {/* Futuristic Glowing Visor */}
        <mesh ref={visorRef} position={[0, 0.05, 0.55]}>
          <boxGeometry args={[0.75, 0.22, 0.2]} />
          <meshStandardMaterial
            color="#22D3EE"
            emissive="#22D3EE"
            emissiveIntensity={2.5}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>

        {/* Head Wireframe Overlay for Cyber Aesthetic */}
        <mesh>
          <octahedronGeometry args={[0.71, 2]} />
          <meshBasicMaterial
            color="#6366F1"
            wireframe={true}
            transparent={true}
            opacity={0.35}
          />
        </mesh>
      </group>

      {/* Torso / Core */}
      <group position={[0, -0.6, 0]}>
        <mesh>
          <cylinderGeometry args={[0.45, 0.3, 0.9, 6]} />
          <meshStandardMaterial
            color="#0F172A"
            metalness={0.85}
            roughness={0.25}
          />
        </mesh>

        {/* Chest Reactor Core */}
        <mesh position={[0, 0.1, 0.38]}>
          <circleGeometry args={[0.15, 32]} />
          <meshStandardMaterial
            color="#6366F1"
            emissive="#6366F1"
            emissiveIntensity={3}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>

      {/* Orbiting Cybernetic Rings */}
      <group position={[0, 0, 0]}>
        <mesh ref={ring1Ref}>
          <torusGeometry args={[1.3, 0.02, 16, 64]} />
          <meshStandardMaterial
            color="#22D3EE"
            emissive="#22D3EE"
            emissiveIntensity={1.8}
            roughness={0.2}
          />
        </mesh>

        <mesh ref={ring2Ref}>
          <torusGeometry args={[1.5, 0.015, 16, 64]} />
          <meshStandardMaterial
            color="#A855F7"
            emissive="#A855F7"
            emissiveIntensity={1.5}
            roughness={0.2}
          />
        </mesh>
      </group>
    </group>
  );
};

export default DeveloperAvatar;

