import { useEffect, useReducer, useRef } from "react";
import { useSlotVM } from "./slotVM";
// import { gsap } from "gsap";
import {Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls, Sparkles} from "@react-three/drei";
const RotatingCube = () => {
    const meshRef = useRef(null);
    useFrame(()=>{
        if (meshRef.current){
            meshRef.current.rotation.x += 0.01; // Update the rotation of the cube
            meshRef.current.rotation.y += 0.01; // Update the rotation of the cube
        }
    })
    return(
        <mesh ref={meshRef}>
            <cylinderGeometry args={[1, 1.2, 3]} />
            <meshLambertMaterial color="orange" emissive={"orange"}/>
            <Sparkles count={100} scale={2} size={3} speed={0.002} noise={0.2} color={"orange"}/>
        </mesh>
    )
}
export default function SlotScreen () {
  const { screen } = useSlotVM();

  return (
    <Canvas
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} /> */}
      
      
    </Canvas>
  );
};
