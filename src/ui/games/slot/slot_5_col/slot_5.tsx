import { CameraControls } from "@react-three/drei"
import {Canvas, useFrame} from "@react-three/fiber"
// import { Camera, CameraHelper } from "three";
import Slot_5_Screen from "./index";
export default function Slot_5 (){
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
        <Slot_5_Screen />
      </Canvas>
    );
}