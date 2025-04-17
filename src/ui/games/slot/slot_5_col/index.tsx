import { Sparkles } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function (){
    return (
      <>
        <directionalLight
          position={[1, 1, 1]}
          intensity={10}
          color={0x9cdba6}
        />
        <color attach="background" args={["#f0f0f0"]} />
        <RotatingCube />
      </>
    );
};
const RotatingCube = () => {
  const meshRef = useRef(null);
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01; // Update the rotation of the cube
      meshRef.current.rotation.y += 0.01; // Update the rotation of the cube
    }
  });
  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1.2, 3]} />
      <meshLambertMaterial color="orange" emissive={"orange"} />
      <Sparkles
        count={100}
        scale={2}
        size={3}
        speed={0.002}
        noise={0.2}
        color={"orange"}
      />
    </mesh>
  );
};
