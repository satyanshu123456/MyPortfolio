import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Individual animated floating geometric mesh
const FloatingMesh = ({ geometryType, position, rotationSpeed, floatSpeed, color, scale = 1, isWireframe = false }) => {
  const meshRef = useRef();
  const initialY = position[1];

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x += delta * rotationSpeed[0];
    meshRef.current.rotation.y += delta * rotationSpeed[1];
    meshRef.current.rotation.z += delta * rotationSpeed[2];
    meshRef.current.position.y = initialY + Math.sin(t * floatSpeed + position[0]) * 0.2;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {geometryType === 'icosahedron' && <icosahedronGeometry args={[0.5, 0]} />}
      {geometryType === 'octahedron' && <octahedronGeometry args={[0.45, 0]} />}
      {geometryType === 'dodecahedron' && <dodecahedronGeometry args={[0.4, 0]} />}
      {geometryType === 'torus' && <torusGeometry args={[0.4, 0.12, 16, 32]} />}
      {geometryType === 'box' && <boxGeometry args={[0.5, 0.5, 0.5]} />}

      {isWireframe ? (
        <meshBasicMaterial color={color} wireframe={true} transparent opacity={0.6} />
      ) : (
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.8}
          roughness={0.3}
          metalness={0.7}
          wireframe={false}
        />
      )}
    </mesh>
  );
};

// Subtle background cyber particle field
const ParticleField = ({ count = 60 }) => {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color('#22D3EE'),
      new THREE.Color('#6366F1'),
      new THREE.Color('#A855F7'),
      new THREE.Color('#38BDF8'),
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;

      const chosen = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = chosen.r;
      col[i * 3 + 1] = chosen.g;
      col[i * 3 + 2] = chosen.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.03;
    pointsRef.current.rotation.x += delta * 0.015;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export const FloatingObjects = () => {
  return (
    <group>
      <ParticleField count={65} />

      {/* Floating Geometric Elements around the scene */}
      <FloatingMesh
        geometryType="icosahedron"
        position={[-2.8, 1.8, -1]}
        rotationSpeed={[0.3, 0.4, 0.2]}
        floatSpeed={1.2}
        color="#22D3EE"
        scale={0.9}
        isWireframe={true}
      />

      <FloatingMesh
        geometryType="torus"
        position={[2.9, 1.5, -0.8]}
        rotationSpeed={[-0.4, 0.3, 0.1]}
        floatSpeed={1.5}
        color="#6366F1"
        scale={0.8}
        isWireframe={false}
      />

      <FloatingMesh
        geometryType="octahedron"
        position={[-2.5, -1.6, -1.2]}
        rotationSpeed={[0.2, -0.3, 0.4]}
        floatSpeed={1.1}
        color="#A855F7"
        scale={0.85}
        isWireframe={true}
      />

      <FloatingMesh
        geometryType="box"
        position={[2.6, -1.4, -0.5]}
        rotationSpeed={[0.3, 0.2, -0.3]}
        floatSpeed={1.4}
        color="#22D3EE"
        scale={0.75}
        isWireframe={true}
      />

      <FloatingMesh
        geometryType="dodecahedron"
        position={[0, 2.4, -2]}
        rotationSpeed={[0.1, 0.3, 0.2]}
        floatSpeed={0.9}
        color="#6366F1"
        scale={0.65}
        isWireframe={false}
      />
    </group>
  );
};

export default FloatingObjects;

