// src/App.jsx
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, PerspectiveCamera, Sparkles } from "@react-three/drei";
import { GameBoard } from "./gameBoard";
import {  useGameContext } from "../helper/context";
// import Model from "../component/backgroundScene";


const GameScreen  = () => {
    const { handleSpin, handleRemove, spinning } = useGameContext()
    return (
      <body className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url('/public/assets/eb.jpg')` }}
        />
        {/* <header className="h-60 w-full bg-red-200 z-10">
            <p>Gate of Gla</p>
        </header> */}
        <Canvas
          camera={{ position: [0, 0, 10], fov: 40 }}
          style={{
            height: "300px",
            width: "100%",
            backgroundColor: "rgba(45,45,45,.9)",
          }}
        >
          <Sparkles
            count={50}
            size={
              ( Array.from(
                { length: 50},
                () => 0.5 + Math.random() * 10
              ))
            }
            position={[10, 10 ,0]}
            scale={[10, 10, 10]}
            speed={0.5}
          />
          <ambientLight intensity={1} />
          {/* <directionalLight position={[10, 10, ]}/> */}
          <pointLight position={[10, 10, 10]} />
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />
          {/* <Model /> */}
          <GameBoard />
        </Canvas>
        <main className="flex justify-center items-center h-100 relative z-10">
          <button
            className="p-5 bg-gray-500 rounded-full"
            disabled={spinning}
            onClick={handleSpin}
          >
            Spin
          </button>
        </main>
      </body>
    );
}
export default GameScreen
