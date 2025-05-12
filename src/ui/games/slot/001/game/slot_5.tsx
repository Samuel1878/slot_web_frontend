import { CameraControls, OrbitControls } from "@react-three/drei"
import {Canvas, useFrame} from "@react-three/fiber"
// import { Camera, CameraHelper } from "three";
import  { Reel } from "../component/game";
import { COLUMNS } from "../helper/consts";
import { Suspense, useContext, useRef, useState } from "react";
import ContextProvider, { GameContext } from "../helper/context";
import Model from "../component/test";
function SlotMachine_5() {
  const reelsRef = useRef([]);
  const {spinning, setSpinning} = useContext(GameContext);

  function handleSpin() {
    // reelsRef.current.forEach((reel) => reel.spin());
    setSpinning(true);
    
  }

  return (
    <div className="flex-col bg-black-100">
      <div style={{ height: "100px" }}>
        <h1 className="center">Gate of Atlas</h1>
      </div>
      <section id="gameEngine" className="flex">
      <Canvas camera={{ position: [0, 0, 10], fov: 40 }}>
        <ambientLight color={"yellow"} />
       
        {/* <Suspense fallback={null}>
          {Array.from({ length: 6 }).map((_, i) => {
            const xPos = (i - (6 - 1) / 2) * 1.5;
            return <Reel key={i} xPosition={xPos} delay={i * 200} />;
          })}
        </Suspense> */}
      </Canvas>
      </section>
     
      <div className="flex justify-center items-center flex-col w-dvw p-10 bg-black-300" >
        <button
          onClick={handleSpin}
          style={{
            padding:"20px",
            width:"auto",
            backgroundColor: "red",
            zIndex: 111,
            borderRadius:"100%"
            // transform: "translateX(-50%)",
          }}
        >
          Spin!
        </button>
      </div>
    </div>
  );
}

export default SlotMachine_5;