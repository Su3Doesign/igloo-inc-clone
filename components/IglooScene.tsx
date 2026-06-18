"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";

function IglooBlocks() {
  const groupRef = useRef<THREE.Group>(null);

  const { blockMeshes, edgeMeshes } = useMemo(() => {
    const blocks: {
      pos: THREE.Vector3;
      rot: THREE.Euler;
      scale: [number, number, number];
    }[] = [];
    const R = 2.2;
    const ringCount = 8;

    for (let ring = 0; ring < ringCount; ring++) {
      const t = ring / ringCount;
      const phi = t * (Math.PI * 0.48);
      const y = Math.sin(phi) * R;
      const ringRadius = Math.cos(phi) * R;

      if (ringRadius < 0.2) continue;

      const circumference = 2 * Math.PI * ringRadius;
      const desiredWidth = 0.55 + (ring * 0.02);
      const count = Math.max(5, Math.round(circumference / desiredWidth));
      const offset = ring % 2 === 0 ? 0 : Math.PI / count;

      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2 + offset;

        const isEntrance = ring < 3 && angle > 4.3 && angle < 5.2;
        if (isEntrance) continue;

        const x = Math.cos(angle) * ringRadius;
        const z = Math.sin(angle) * ringRadius;

        const arcWidth = (circumference / count) * 0.88;
        const blockH = (R * Math.PI * 0.48) / ringCount * 0.88;
        const blockD = 0.22 + Math.random() * 0.06;

        const normal = new THREE.Vector3(x, y * 0.3, z).normalize();
        const up = new THREE.Vector3(0, 1, 0);
        const quat = new THREE.Quaternion();
        const mat4 = new THREE.Matrix4();
        const forward = new THREE.Vector3().crossVectors(up, normal).normalize();
        const correctedUp = new THREE.Vector3().crossVectors(normal, forward).normalize();
        mat4.makeBasis(forward, correctedUp, normal);
        quat.setFromRotationMatrix(mat4);

        const euler = new THREE.Euler().setFromQuaternion(quat);

        blocks.push({
          pos: new THREE.Vector3(x, y, z),
          rot: euler,
          scale: [arcWidth, blockH, blockD],
        });
      }
    }

    // Top cap blocks
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2;
      const r = 0.3;
      blocks.push({
        pos: new THREE.Vector3(
          Math.cos(angle) * r,
          R * 0.97,
          Math.sin(angle) * r
        ),
        rot: new THREE.Euler(0.1, angle, 0),
        scale: [0.35, 0.3, 0.2],
      });
    }

    const bm = blocks.map((b) => ({
      position: b.pos.toArray() as [number, number, number],
      rotation: [b.rot.x, b.rot.y, b.rot.z] as [number, number, number],
      scale: b.scale,
    }));

    const em = bm.map((b) => ({
      ...b,
      geometry: new THREE.EdgesGeometry(new THREE.BoxGeometry(...b.scale), 15),
    }));

    return { blockMeshes: bm, edgeMeshes: em };
  }, []);

  return (
    <group ref={groupRef} position={[0, -1.8, 0]}>
      {blockMeshes.map((block, i) => (
        <mesh key={i} position={block.position} rotation={block.rotation}>
          <boxGeometry args={block.scale} />
          <meshStandardMaterial
            color="#c0c5d2"
            roughness={0.35}
            metalness={0.08}
            envMapIntensity={0.4}
          />
        </mesh>
      ))}

      {edgeMeshes.map((edge, i) => (
        <lineSegments key={`e${i}`} position={edge.position} rotation={edge.rotation}>
          <primitive object={edge.geometry} attach="geometry" />
          <lineBasicMaterial
            color="#e8f0ff"
            transparent
            opacity={0.9}
          />
        </lineSegments>
      ))}

      {/* Entrance arch */}
      <mesh position={[0.2, -0.3, -2.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.55, 0.65, 0.9, 8, 1, true, 0, Math.PI]} />
        <meshStandardMaterial
          color="#bcc1d0"
          roughness={0.35}
          metalness={0.08}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Base ring for grounding */}
      <mesh position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.0, 2.35, 32]} />
        <meshStandardMaterial
          color="#9a9fb0"
          roughness={0.7}
          transparent
          opacity={0.5}
        />
      </mesh>
    </group>
  );
}

function Mountains() {
  return (
    <group>
      {[
        { p: [-10, -1.8, -14], s: [6, 7, 5], r: 0.1 },
        { p: [-5, -1.8, -18], s: [8, 10, 7], r: -0.05 },
        { p: [3, -1.8, -20], s: [10, 12, 8], r: 0.08 },
        { p: [12, -1.8, -16], s: [7, 8, 6], r: -0.1 },
        { p: [18, -1.8, -22], s: [9, 9, 7], r: 0.03 },
        { p: [-16, -1.8, -20], s: [5, 6, 4], r: 0.15 },
        { p: [8, -1.8, -25], s: [12, 11, 9], r: -0.07 },
      ].map((m, i) => (
        <mesh
          key={i}
          position={m.p as [number, number, number]}
          scale={m.s as [number, number, number]}
          rotation={[0, m.r, 0]}
        >
          <coneGeometry args={[1, 1.5, 5 + (i % 3)]} />
          <meshStandardMaterial
            color="#b0b5c0"
            roughness={0.8}
            metalness={0}
            flatShading
          />
        </mesh>
      ))}
    </group>
  );
}

function SnowParticles() {
  const ref = useRef<THREE.Points>(null);
  const count = 600;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = Math.random() * 12 - 2;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    const arr = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] -= delta * 0.3;
      arr[i * 3] += Math.sin(Date.now() * 0.0005 + i * 0.7) * delta * 0.03;
      if (arr[i * 3 + 1] < -2) arr[i * 3 + 1] = 10;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#dde0e8"
        size={0.035}
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.82, 0]}>
      <planeGeometry args={[80, 80, 1, 1]} />
      <meshStandardMaterial color="#a8adba" roughness={0.9} metalness={0} />
    </mesh>
  );
}

function CameraController({ scrollProgress }: { scrollProgress: number }) {
  useFrame(({ camera }) => {
    const angle = scrollProgress * Math.PI * 0.5 - 0.2;
    const distance = 6.5 - scrollProgress * 1.2;
    const height = 1.2 + scrollProgress * 0.8;

    camera.position.x += (Math.sin(angle) * distance - camera.position.x) * 0.05;
    camera.position.z += (Math.cos(angle) * distance - camera.position.z) * 0.05;
    camera.position.y += (height - camera.position.y) * 0.05;
    camera.lookAt(0, -0.2, 0);
  });

  return null;
}

interface IglooSceneProps {
  scrollProgress: number;
}

export default function IglooScene({ scrollProgress }: IglooSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 1.2, 6.5], fov: 48 }}
      style={{ width: "100%", height: "100%" }}
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.2,
      }}
    >
      <color attach="background" args={["#a8adb8"]} />
      <fog attach="fog" args={["#a8adb8", 10, 32]} />

      <ambientLight intensity={1.2} color="#d0d5e0" />
      <directionalLight position={[5, 10, 3]} intensity={1.0} color="#e0e5f0" />
      <directionalLight position={[-4, 5, -6]} intensity={0.4} color="#c5cad5" />
      <hemisphereLight args={["#d5dae5", "#a0a5b0", 0.5]} />

      <Suspense fallback={null}>
        <CameraController scrollProgress={scrollProgress} />
        <IglooBlocks />
        <Mountains />
        <Ground />
        <SnowParticles />
      </Suspense>
    </Canvas>
  );
}
