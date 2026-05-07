"use client";

import * as React from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Environment } from "@react-three/drei";

type Node = {
  p: THREE.Vector3;
  v: THREE.Vector3;
};

function NeuralField({ density = 140 }: { density?: number }) {
  const group = React.useRef<THREE.Group>(null);

  const { nodes, positions, colors } = React.useMemo(() => {
    const nodes: Node[] = [];
    for (let i = 0; i < density; i++) {
      const p = new THREE.Vector3(
        THREE.MathUtils.randFloatSpread(5.5),
        THREE.MathUtils.randFloatSpread(3.2),
        THREE.MathUtils.randFloatSpread(5.0),
      );
      const v = new THREE.Vector3(
        THREE.MathUtils.randFloatSpread(0.0035),
        THREE.MathUtils.randFloatSpread(0.003),
        THREE.MathUtils.randFloatSpread(0.0035),
      );
      nodes.push({ p, v });
    }

    const positions = new Float32Array(density * 3);
    const colors = new Float32Array(density * 3);
    for (let i = 0; i < density; i++) {
      const n = nodes[i]!;
      positions[i * 3 + 0] = n.p.x;
      positions[i * 3 + 1] = n.p.y;
      positions[i * 3 + 2] = n.p.z;

      const t = i / density;
      const c = new THREE.Color().setHSL(0.56 + 0.22 * t, 0.95, 0.64);
      colors[i * 3 + 0] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    return { nodes, positions, colors };
  }, [density]);

  const points = React.useRef<THREE.Points>(null);
  const lines = React.useRef<THREE.LineSegments>(null);

  const lineGeom = React.useMemo(() => {
    const maxPairs = Math.floor(density * 2.5);
    const pos = new Float32Array(maxPairs * 2 * 3);
    const col = new Float32Array(maxPairs * 2 * 3);
    return { pos, col };
  }, [density]);

  useFrame(({ clock, camera }) => {
    const t = clock.getElapsedTime();
    if (group.current) group.current.rotation.y = t * 0.06;
    camera.position.lerp(new THREE.Vector3(0, 0.1, 6.2), 0.02);
    camera.lookAt(0, 0, 0);

    const pAttr = points.current?.geometry.attributes.position as THREE.BufferAttribute | undefined;
    if (!pAttr) return;

    // update node positions with soft bounds
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i]!;
      n.p.add(n.v);
      n.v.multiplyScalar(0.999);
      n.v.add(new THREE.Vector3(
        Math.sin(t * 0.22 + i) * 0.000004,
        Math.cos(t * 0.18 + i * 0.7) * 0.000004,
        Math.sin(t * 0.20 + i * 0.4) * 0.000004,
      ));

      const r = 1.0;
      if (Math.abs(n.p.x) > 5.2) n.v.x *= -r;
      if (Math.abs(n.p.y) > 3.0) n.v.y *= -r;
      if (Math.abs(n.p.z) > 4.6) n.v.z *= -r;

      pAttr.setXYZ(i, n.p.x, n.p.y, n.p.z);
    }
    pAttr.needsUpdate = true;

    // rebuild nearest-neighbor-ish line segments (fast heuristic)
    const lPos = lineGeom.pos;
    const lCol = lineGeom.col;
    let k = 0;
    for (let i = 0; i < nodes.length; i += 1) {
      const a = nodes[i]!;
      let bestJ = -1;
      let bestD = 999;
      // sample a small window for performance
      for (let s = 0; s < 10; s++) {
        const j = (i + 1 + ((i * 17 + s * 29) % (nodes.length - 1))) % nodes.length;
        if (j === i) continue;
        const b = nodes[j]!;
        const d = a.p.distanceToSquared(b.p);
        if (d < bestD) {
          bestD = d;
          bestJ = j;
        }
      }
      if (bestJ < 0) continue;
      const b = nodes[bestJ]!;
      const dist = Math.sqrt(bestD);
      if (dist > 1.35) continue;

      const alpha = THREE.MathUtils.clamp(1.0 - dist / 1.35, 0, 1);
      const c = new THREE.Color().setHSL(0.56 + (i / nodes.length) * 0.22, 0.95, 0.62);
      const cr = c.r * alpha;
      const cg = c.g * alpha;
      const cb = c.b * alpha;

      lPos[k * 6 + 0] = a.p.x;
      lPos[k * 6 + 1] = a.p.y;
      lPos[k * 6 + 2] = a.p.z;
      lPos[k * 6 + 3] = b.p.x;
      lPos[k * 6 + 4] = b.p.y;
      lPos[k * 6 + 5] = b.p.z;

      lCol[k * 6 + 0] = cr;
      lCol[k * 6 + 1] = cg;
      lCol[k * 6 + 2] = cb;
      lCol[k * 6 + 3] = cr;
      lCol[k * 6 + 4] = cg;
      lCol[k * 6 + 5] = cb;
      k++;
      if (k * 6 >= lPos.length) break;
    }

    const lGeom = lines.current?.geometry;
    if (lGeom) {
      (lGeom.attributes.position as THREE.BufferAttribute).copyArray(lPos);
      (lGeom.attributes.color as THREE.BufferAttribute).copyArray(lCol);
      lGeom.setDrawRange(0, k * 2);
      lGeom.attributes.position.needsUpdate = true;
      lGeom.attributes.color.needsUpdate = true;
    }
  });

  return (
    <group ref={group}>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.032}
          vertexColors
          opacity={0.85}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <lineSegments ref={lines}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[lineGeom.pos, 3]} />
          <bufferAttribute attach="attributes-color" args={[lineGeom.col, 3]} />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

export function NeuralBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 daifend-grid opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(41,240,255,0.16),transparent_55%),radial-gradient(circle_at_75%_65%,rgba(177,76,255,0.14),transparent_50%),radial-gradient(circle_at_20%_75%,rgba(76,125,255,0.12),transparent_55%)]" />
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[6, 6, 6]} intensity={0.85} />
        <NeuralField density={160} />
        <Environment preset="night" />
        <EffectComposer>
          <Bloom intensity={0.8} luminanceThreshold={0.35} luminanceSmoothing={0.7} />
        </EffectComposer>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/55" />
    </div>
  );
}

