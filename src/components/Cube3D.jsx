import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Environment } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function createRoundedBoxGeometry(w, h, d, radius, segments) {
  const geo = new THREE.BoxGeometry(w, h, d, segments, segments, segments);
  const pos = geo.attributes.position;
  const hw = w / 2 - radius, hh = h / 2 - radius, hd = d / 2 - radius;

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const cx = Math.max(-hw, Math.min(hw, x));
    const cy = Math.max(-hh, Math.min(hh, y));
    const cz = Math.max(-hd, Math.min(hd, z));
    const dx = x - cx, dy = y - cy, dz = z - cz;
    const len = Math.sqrt(dx * dx + dy * dy + dz * dz) || 0.0001;
    pos.setXYZ(i, cx + (dx / len) * radius, cy + (dy / len) * radius, cz + (dz / len) * radius);
  }

  geo.computeVertexNormals();

  const uv = geo.attributes.uv;
  const gs = (segments + 1) * (segments + 1);
  for (let face = 0; face < 6; face++) {
    const base = face * gs;
    for (let j = 0; j < gs; j++) {
      uv.setXY(
        base + j,
        (j % (segments + 1)) / segments,
        1 - Math.floor(j / (segments + 1)) / segments
      );
    }
  }
  uv.needsUpdate = true;
  return geo;
}

function makeMaterial(texture) {
  texture.colorSpace  = THREE.SRGBColorSpace;
  texture.anisotropy  = 16;
  texture.minFilter   = THREE.LinearMipmapLinearFilter;
  texture.magFilter   = THREE.LinearFilter;
  texture.wrapS       = THREE.ClampToEdgeWrapping;
  texture.wrapT       = THREE.ClampToEdgeWrapping;
  texture.needsUpdate = true;

  return new THREE.MeshPhysicalMaterial({
    map:                texture,
    metalness:          0.1,
    roughness:          0.25,
    envMapIntensity:    0.7,
    clearcoat:          0.6,
    clearcoatRoughness: 0.15,
    ior:                1.5,
    reflectivity:       0.6,
    specularIntensity:  0.8,
    specularColor:      new THREE.Color("#a78bfa"),
    sheen:              0.0,
  });
}

function RimShell({ geometry }) {
  const mat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color:       new THREE.Color("#7c3aed"),
        transparent: true,
        opacity:     0.12,
        side:        THREE.BackSide,
        depthWrite:  false,
        blending:    THREE.AdditiveBlending,
      }),
    []
  );
  return <mesh geometry={geometry} material={mat} scale={1.018} />;
}

function TechCube() {
  const groupRef = useRef();

  const [react, spring, html, css, tailwind, js] = useLoader(
    THREE.TextureLoader,
    ["/react.png", "/spring.png", "/html.png", "/css.png", "/tailwind.png", "/js.png"]
  );

  const materials = useMemo(
    () => [react, spring, html, css, tailwind, js].map(makeMaterial),
    [react, spring, html, css, tailwind, js]
  );

  const geometry = useMemo(
    () => createRoundedBoxGeometry(3.5, 3.5, 3.5, 0.3, 12),
    []
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!groupRef.current) return;
    groupRef.current.rotation.y = t * 0.16;
    groupRef.current.rotation.x = Math.sin(t * 0.13) * 0.1;
    groupRef.current.position.y = Math.sin(t * 0.9) * 0.18;
  });

  return (
    <group ref={groupRef}>
      <mesh geometry={geometry} material={materials} castShadow receiveShadow />
      <RimShell geometry={geometry} />
    </group>
  );
}

function LightRig() {
  const keyRef = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.35;
    if (keyRef.current) {
      keyRef.current.position.set(Math.sin(t) * 7, 7, Math.cos(t) * 7);
    }
  });

  return (
    <>
      <directionalLight
        ref={keyRef}
        intensity={1.0}
        color="#e8e0ff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0003}
      />
      <directionalLight position={[-6, 2, -5]} intensity={0.5} color="#4338ca" />
      <pointLight position={[0, -4, 3]}  intensity={1.8} color="#7c3aed" distance={12} decay={2} />
      <pointLight position={[0,  7, 1]}  intensity={0.6} color="#a855f7" distance={16} decay={2} />
      <ambientLight intensity={0.4} color="#1e1b4b" />
    </>
  );
}

export default function Cube3D() {
  return (
    <Canvas
      shadows="soft"
      camera={{ position: [5, 3.5, 6], fov: 40 }}
      dpr={[1, 2]}
      gl={{
        antialias:           true,
        toneMapping:         THREE.ACESFilmicToneMapping,
        toneMappingExposure: 0.9,
        outputColorSpace:    THREE.SRGBColorSpace,
        powerPreference:     "high-performance",
      }}
    >
      <Environment preset="apartment" background={false} environmentIntensity={0.4} />
      <LightRig />
      <TechCube />

      <ContactShadows
        position={[0, -2.3, 0]}
        opacity={0.6}
        scale={10}
        blur={2.5}
        far={3.5}
        color="#4c1d95"
        frames={1}
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.05}
        autoRotate
        autoRotateSpeed={0.6}
      />
    </Canvas>
  );
}