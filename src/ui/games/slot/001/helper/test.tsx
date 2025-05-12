// GameContainer.jsx
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";

export default function GameContainer({ children }) {
  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        // position: "fixed",
        // top: 0,
        // left: 0,
        width: isPortrait ? "100vh" : "100vw",
        height: isPortrait ? "100vw" : "100vh",
        transform: isPortrait ? "rotate(90deg)" : "none",
        transformOrigin: "center center",
        overflow: "hidden",
        background: "green", // optional background
        display: "flex",
        maxWidth:"500px",
        justifyContent: "center",
        alignItems: "center",
      
      }}
    >
      {/* {children} */}
      <Canvas camera={{ position: [0, 0, 5] }}>
 
        <mesh>
          <cylinderGeometry />
           <meshStandardMaterial color="orange" />
     
        </mesh>
         <ambientLight />
       
      </Canvas>
    </div>
  );
}

// import React, { useState, useEffect, useRef } from "react";
// import { Canvas } from "@react-three/fiber";
// const GameScreen: React.FC = () => {
//   const [hasStarted, setHasStarted] = useState(false);
//   const [isPortrait, setIsPortrait] = useState(false);

//   useEffect(() => {
//     const checkOrientation = () => {
//       setIsPortrait(window.innerHeight > window.innerWidth);
//     };
//     checkOrientation();
//     window.addEventListener("resize", checkOrientation);
//     return () => window.removeEventListener("resize", checkOrientation);
//   }, []);

//   const startGame = async () => {
//     try {
//       const el = document.documentElement;
//       if (el.requestFullscreen) await el.requestFullscreen();
//       if (screen.orientation?.lock) await screen.orientation.lock("landscape");
//     } catch (err) {
//       console.warn("Fullscreen/orientation lock failed:", err);
//     }
//     setHasStarted(true);
//   };

//   return (
//     <div
//       style={{
//         width: "100vw",
//         height: "100vh",
//         background: "black",
//         overflow: "hidden",
//       }}
//     >
//       {!hasStarted ? (
//         <button
//           onClick={startGame}
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             padding: "1rem 2rem",
//             fontSize: "1.2rem",
//             background: "#007acc",
//             color: "#fff",
//             border: "none",
//             borderRadius: "8px",
//             zIndex: 10,
//           }}
//         >
//           Enter Game
//         </button>
//       ) : (
//         <>
//           {isPortrait && (
//             <div
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "100%",
//                 background: "rgba(0,0,0,0.8)",
//                 color: "#fff",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 fontSize: "1.5rem",
//                 zIndex: 10,
//               }}
//             >
//               Please rotate your device
//             </div>
//           )}
//           <Canvas camera={{ position: [0, 0, 5] }}>
//             <mesh>
//               <boxGeometry />
//               <meshStandardMaterial color="orange" />
//             </mesh>
//             <ambientLight />
//           </Canvas>
//         </>
//       )}
//     </div>
//   );
// };
// export default GameScreen;
// // const GameScreen: React.FC = () => {
// //   const containerRef = useRef<HTMLDivElement>(null);
// //   const [isPortrait, setIsPortrait] = useState(false);

// //   useEffect(() => {
// //     const enterFullscreenAndLock = async () => {
// //       const el = document.documentElement;
// //       try {
// //         if (el.requestFullscreen) await el.requestFullscreen();
// //         if (screen.orientation?.lock)
// //           await screen.orientation.lock("landscape");
// //       } catch (err) {
// //         console.warn("Fullscreen or orientation lock failed:", err);
// //       }
// //     };

// //     enterFullscreenAndLock();

// //     const checkOrientation = () => {
// //       setIsPortrait(window.innerHeight > window.innerWidth);
// //     };
// //     checkOrientation();
// //     window.addEventListener("resize", checkOrientation);
// //     return () => {
// //       if (document.fullscreenElement) document.exitFullscreen();
// //       window.removeEventListener("resize", checkOrientation);
// //     };
// //   }, []);

// //   return (
// //     <div
// //       ref={containerRef}
// //       style={{
// //         width: "100vw",
// //         height: "100vh",
// //         background: "black",
// //         overflow: "hidden",
// //       }}
// //     >
// //       {isPortrait && (
// //         <div
// //           style={{
// //             position: "absolute",
// //             top: 0,
// //             left: 0,
// //             width: "100%",
// //             height: "100%",
// //             background: "rgba(0,0,0,0.8)",
// //             color: "#fff",
// //             display: "flex",
// //             justifyContent: "center",
// //             alignItems: "center",
// //             zIndex: 10,
// //           }}
// //         >
// //           Please rotate your device
// //            <Canvas camera={{ position: [0, 0, 10],rotateZ:10}}  >
// //         <mesh>
// //           <cylinderGeometry />
// //           <meshStandardMaterial color="blue" />
// //         </mesh>
// //         <ambientLight />
// //         </Canvas>
// //         </div>
// //       )}
// //       <Canvas camera={{ position: [0, 0, 5] }}  >
// //         <mesh rotateX={[10,10,10]}>
// //           <cylinderGeometry />
// //           <meshStandardMaterial color="orange" />
// //         </mesh>
// //         <ambientLight />
// //       </Canvas>
// //     </div>
// //   );
// // };

// // // import React, { useEffect, useRef } from "react";
// // // import { Canvas, useFrame } from "@react-three/fiber";
// // // import { OrbitControls } from "@react-three/drei";
// // // import { CylinderGeometry } from "three";

// // // const GameScreen: React.FC = () => {
// // //   const containerRef = useRef<HTMLDivElement>(null);
// // //   const canvasRef = useRef(null);

// // //   // 🔁 Enter fullscreen + landscape on mount
// // //   useEffect(() => {
// // //     const enterFullscreenAndLock = async () => {
// // //       const el = document.documentElement;

// // //       try {
// // //         // Fullscreen request (must come from user gesture — assume wrapped in <button> or navigation)
// // //         if (el.requestFullscreen) await el.requestFullscreen();

// // //         // Orientation lock (supported mostly on Android Chrome)
// // //         if (screen.orientation?.lock)
// // //           await screen.orientation.lock("landscape");
// // //       } catch (err) {
// // //         console.warn("Orientation lock failed or not supported:", err);
// // //       }
// // //     };

// // //     enterFullscreenAndLock();

// // //     // Optional: clean up fullscreen/orientation on exit
// // //     return () => {
// // //       if (document.fullscreenElement) {
// // //         document.exitFullscreen().catch(() => {});
// // //       }
// // //       if (screen.orientation?.unlock) {
// // //         screen.orientation.unlock?.();
// // //       }
// // //     };
// // //   }, []);
// // // //   useFrame(()=>{
// // // //     canvasRef.current.position.x +=10
// // // //   })

// // //   return (
// // //     <div
// // //       ref={containerRef}
// // //       style={{
// // //         width: "100vw",
// // //         height: "100vh",
// // //         backgroundColor: "black",
// // //         overflow: "hidden",
// // //       }}
// // //     >
// // //       <Canvas camera={{ position: [0, 0, 5] }}>
// // //         <ambientLight color={"yellow"} />
// // //         <OrbitControls />
// // //         <mesh ref={canvasRef}>
// // //           <cylinderGeometry args={[1, 1]}/>
// // //           <meshBasicMaterial color={"red"}/>
// // //         </mesh>
// // //       </Canvas>
// // //     </div>
// // //   );
// // // };

// // // export default GameScreen;

// // // // import React, { useEffect, useRef, useState } from "react";
// // // // import * as THREE from "three";

// // // // const LandscapeGame: React.FC = () => {
// // // //   const containerRef = useRef<HTMLDivElement>(null);
// // // //   const [hasStarted, setHasStarted] = useState(false);
// // // //   const [isPortrait, setIsPortrait] = useState(false);

// // // //   const checkOrientation = () => {
// // // //     setIsPortrait(window.innerHeight > window.innerWidth);
// // // //   };

// // // //   useEffect(() => {
// // // //     checkOrientation();
// // // //     window.addEventListener("resize", checkOrientation);
// // // //     return () => window.removeEventListener("resize", checkOrientation);
// // // //   }, []);

// // // //   const startGame = async () => {
// // // //     setHasStarted(true);

// // // //     const container = containerRef.current;
// // // //     if (!container) return;

// // // //     try {
// // // //       if (container.requestFullscreen) {
// // // //         await container.requestFullscreen();
// // // //       }

// // // //       if (screen.orientation?.lock) {
// // // //         await screen.orientation.lock("landscape");
// // // //       }
// // // //     } catch (err) {
// // // //       console.warn("Orientation lock failed or unsupported:", err);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     if (!hasStarted || !containerRef.current) return;

// // // //     const scene = new THREE.Scene();
// // // //     const camera = new THREE.PerspectiveCamera(75, 16 / 9, 0.1, 1000);
// // // //     camera.position.z = 5;

// // // //     const renderer = new THREE.WebGLRenderer({ antialias: true });
// // // //     containerRef.current.appendChild(renderer.domElement);

// // // //     const resize = () => {
// // // //       let width = window.innerWidth;
// // // //       let height = window.innerHeight;

// // // //       // If portrait, we simulate landscape using height as width
// // // //       if (isPortrait) {
// // // //         width = window.innerHeight;
// // // //         height = window.innerWidth;
// // // //       }

// // // //       const aspect = width / height;
// // // //       renderer.setSize(width, height);
// // // //       camera.aspect = aspect;
// // // //       camera.updateProjectionMatrix();
// // // //     };

// // // //     resize();
// // // //     window.addEventListener("resize", resize);

// // // //     const cube = new THREE.Mesh(
// // // //       new THREE.BoxGeometry(),
// // // //       new THREE.MeshBasicMaterial({ color: 0x33ccff })
// // // //     );
// // // //     scene.add(cube);

// // // //     const animate = () => {
// // // //       requestAnimationFrame(animate);
// // // //       cube.rotation.x += 0.01;
// // // //     //   cube.rotation.y += 0.01;
// // // //       renderer.render(scene, camera);
// // // //     };

// // // //     animate();

// // // //     return () => {
// // // //       window.removeEventListener("resize", resize);
// // // //       renderer.dispose();
// // // //       if (containerRef.current) containerRef.current.innerHTML = "";
// // // //     };
// // // //   }, [hasStarted, isPortrait]);

// // // //   return (
// // // //     <div
// // // //       style={{
// // // //         width: "100vw",
// // // //         height: "100vh",
// // // //         position: "relative",
// // // //         overflow: "hidden",
// // // //         background: "#000",
// // // //       }}
// // // //     >
// // // //       {!hasStarted && (
// // // //         <button
// // // //           onClick={startGame}
// // // //           style={{
// // // //             position: "absolute",
// // // //             zIndex: 5,
// // // //             top: "50%",
// // // //             left: "50%",
// // // //             transform: "translate(-50%, -50%)",
// // // //             fontSize: "1.2rem",
// // // //             padding: "1rem 2rem",
// // // //             borderRadius: "1rem",
// // // //             border: "none",
// // // //             background: "#007acc",
// // // //             color: "#fff",
// // // //             cursor: "pointer",
// // // //           }}
// // // //         >
// // // //           Start Game
// // // //         </button>
// // // //       )}

// // // //       <div
// // // //         ref={containerRef}
// // // //         style={{
// // // //           position: "absolute",
// // // //           top: isPortrait ? "50%" : "0",
// // // //           left: isPortrait ? "50%" : "0",
// // // //           transform: isPortrait
// // // //             ? "translate(-50%, -50%) rotate(-90deg)"
// // // //             : "none",
// // // //           transformOrigin: "center center",
// // // //           width: isPortrait ? `${window.innerHeight}px` : "100%",
// // // //           height: isPortrait ? `${window.innerWidth}px` : "100%",
// // // //         }}
// // // //       />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default LandscapeGame;

// // // // // import React, { useEffect, useRef, useState } from 'react';
// // // // // import * as THREE from 'three';

// // // // // const LandscapeGame: React.FC = () => {
// // // // //   const containerRef = useRef<HTMLDivElement>(null);
// // // // //   const [hasStarted, setHasStarted] = useState(false);
// // // // //   const [isPortrait, setIsPortrait] = useState(false);

// // // // //   const checkOrientation = () => {
// // // // //     setIsPortrait(window.innerHeight > window.innerWidth);
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     checkOrientation();
// // // // //     window.addEventListener('resize', checkOrientation);
// // // // //     return () => window.removeEventListener('resize', checkOrientation);
// // // // //   }, []);

// // // // //   const startGame = async () => {
// // // // //     setHasStarted(true);

// // // // //     const container = containerRef.current;
// // // // //     if (!container) return;

// // // // //     try {
// // // // //       if (container.requestFullscreen) {
// // // // //         await container.requestFullscreen();
// // // // //       }

// // // // //       if (screen.orientation?.lock) {
// // // // //         await screen.orientation.lock('landscape');
// // // // //       }
// // // // //     } catch (err) {
// // // // //       console.warn('Orientation lock failed or unsupported:', err);
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     if (!hasStarted || !containerRef.current) return;

// // // // //     const scene = new THREE.Scene();
// // // // //     const camera = new THREE.PerspectiveCamera(75, 16 / 9, 0.1, 1000);
// // // // //     camera.position.z = 5;

// // // // //     const renderer = new THREE.WebGLRenderer({ antialias: true });
// // // // //     containerRef.current.appendChild(renderer.domElement);

// // // // //     const resize = () => {
// // // // //       let width = window.innerWidth;
// // // // //       let height = window.innerHeight;

// // // // //       // If portrait, we simulate landscape using height as width
// // // // //       if (isPortrait) {
// // // // //         width = window.innerHeight;
// // // // //         height = window.innerWidth;
// // // // //       }

// // // // //       const aspect = width / height;
// // // // //       renderer.setSize(width, height);
// // // // //       camera.aspect = aspect;
// // // // //       camera.updateProjectionMatrix();
// // // // //     };

// // // // //     resize();
// // // // //     window.addEventListener('resize', resize);

// // // // //     const cube = new THREE.Mesh(
// // // // //       new THREE.BoxGeometry(),
// // // // //       new THREE.MeshBasicMaterial({ color: 0x33ccff })
// // // // //     );
// // // // //     scene.add(cube);

// // // // //     const animate = () => {
// // // // //       requestAnimationFrame(animate);
// // // // //       cube.rotation.x += 0.01;
// // // // //       cube.rotation.y += 0.01;
// // // // //       renderer.render(scene, camera);
// // // // //     };

// // // // //     animate();

// // // // //     return () => {
// // // // //       window.removeEventListener('resize', resize);
// // // // //       renderer.dispose();
// // // // //       if (containerRef.current) containerRef.current.innerHTML = '';
// // // // //     };
// // // // //   }, [hasStarted, isPortrait]);

// // // // //   return (
// // // // //     <div
// // // // //       style={{
// // // // //         width: '100vw',
// // // // //         height: '100vh',
// // // // //         position: 'relative',
// // // // //         overflow: 'hidden',
// // // // //         background: '#000',
// // // // //       }}
// // // // //     >
// // // // //       {!hasStarted && (
// // // // //         <button
// // // // //           onClick={startGame}
// // // // //           style={{
// // // // //             position: 'absolute',
// // // // //             zIndex: 5,
// // // // //             top: '50%',
// // // // //             left: '50%',
// // // // //             transform: 'translate(-50%, -50%)',
// // // // //             fontSize: '1.2rem',
// // // // //             padding: '1rem 2rem',
// // // // //             borderRadius: '1rem',
// // // // //             border: 'none',
// // // // //             background: '#007acc',
// // // // //             color: '#fff',
// // // // //             cursor: 'pointer',
// // // // //           }}
// // // // //         >
// // // // //           Start Game
// // // // //         </button>
// // // // //       )}

// // // // //       <div
// // // // //         ref={containerRef}
// // // // //         style={{
// // // // //           position: 'absolute',
// // // // //           top: isPortrait ? '50%' : '0',
// // // // //           left: isPortrait ? '50%' : '0',
// // // // //           transform: isPortrait
// // // // //             ? 'translate(-50%, -50%) rotate(-90deg)'
// // // // //             : 'none',
// // // // //           transformOrigin: 'center center',
// // // // //           width: isPortrait ? `${window.innerHeight}px` : '100%',

// // // // // // import React, { useEffect, useRef, useState } from "react";
// // // // // // import * as THREE from "three";

// // // // // // const LandscapeGame: React.FC = () => {
// // // // // //   const containerRef = useRef<HTMLDivElement>(null);
// // // // // //   const [hasStarted, setHasStarted] = useState(false);

// // // // // //   const startGame = async () => {
// // // // // //     setHasStarted(true);

// // // // // //     const container = containerRef.current;
// // // // // //     if (!container) return;

// // // // // //     try {
// // // // // //       // Request fullscreen
// // // // // //       if (container.requestFullscreen) {
// // // // // //         await container.requestFullscreen();
// // // // // //       }

// // // // // //       // Lock screen to landscape (works only on supported browsers)
// // // // // //       if (screen.orientation?.lock) {
// // // // // //         await screen.orientation.lock("landscape");
// // // // // //         console.log("Orientation locked to landscape");
// // // // // //       }
// // // // // //     } catch (err) {
// // // // // //       console.warn("Orientation lock failed:", err);
// // // // // //     }
// // // // // //   };
// // // // // //   useEffect(()=>{
// // // // // //     hasStarted || startGame();
// // // // // //   }, [])
// // // // // //   // Init Three.js
// // // // // //   useEffect(() => {
// // // // // //     if (!hasStarted || !containerRef.current) return;

// // // // // //     const scene = new THREE.Scene();
// // // // // //     const camera = new THREE.PerspectiveCamera(75, 16 / 9, 0.1, 1000);
// // // // // //     camera.position.z = 5;

// // // // // //     const renderer = new THREE.WebGLRenderer({ antialias: true });
// // // // // //     containerRef.current.appendChild(renderer.domElement);

// // // // // //     const resize = () => {
// // // // // //       // Always render a landscape canvas
// // // // // //       const height = window.innerHeight;
// // // // // //       const width = height * (16 / 9); // base on height to force landscape layout
// // // // // //       renderer.setSize(width, height);
// // // // // //       camera.aspect = width / height;
// // // // // //       camera.updateProjectionMatrix();

// // // // // //       // Center horizontally
// // // // // //       containerRef.current!.style.marginLeft = `${
// // // // // //         (window.innerWidth - width) / 2
// // // // // //       }px`;
// // // // // //     };

// // // // // //     resize();
// // // // // //     window.addEventListener("resize", resize);

// // // // // //     const cube = new THREE.Mesh(
// // // // // //       new THREE.BoxGeometry(),
// // // // // //       new THREE.MeshBasicMaterial({ color: 0x3399ff })
// // // // // //     );
// // // // // //     scene.add(cube);

// // // // // //     const animate = () => {
// // // // // //       requestAnimationFrame(animate);
// // // // // //       cube.rotation.x += 0.01;
// // // // // //     //   cube.rotation.y += 0.01;
// // // // // //       renderer.render(scene, camera);
// // // // // //     };

// // // // // //     animate();

// // // // // //     return () => {
// // // // // //       window.removeEventListener("resize", resize);
// // // // // //       renderer.dispose();
// // // // // //       if (containerRef.current) containerRef.current.innerHTML = "";
// // // // // //     };
// // // // // //   }, [hasStarted]);

// // // // // //   return (
// // // // // //     <div
// // // // // //       style={{
// // // // // //         width: "100vw",
// // // // // //         height: "100vh",
// // // // // //         position: "relative",
// // // // // //         overflow: "hidden",
// // // // // //       }}
// // // // // //     >
// // // // // //       {!hasStarted && (
// // // // // //         <button
// // // // // //           onClick={startGame}
// // // // // //           style={{
// // // // // //             position: "absolute",
// // // // // //             zIndex: 5,
// // // // // //             top: "50%",
// // // // // //             left: "50%",
// // // // // //             transform: "translate(-50%, -50%)",
// // // // // //             fontSize: "1.2rem",
// // // // // //             padding: "1rem 2rem",
// // // // // //             borderRadius: "1rem",
// // // // // //             border: "none",
// // // // // //             background: "#007acc",
// // // // // //             color: "#fff",
// // // // // //             cursor: "pointer",
// // // // // //           }}
// // // // // //         >
// // // // // //           Start Game
// // // // // //         </button>
// // // // // //       )}
// // // // // //       <div ref={containerRef} style={{ position: "absolute", top: 0 }} />
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default LandscapeGame;

// // // // // // // // import React, { useEffect, useRef, useState } from "react";
// // // // // // // // import * as THREE from "three";

// // // // // // // // const LandscapeGame: React.FC = () => {
// // // // // // // //   const containerRef = useRef<HTMLDivElement>(null);
// // // // // // // //   const [isLandscape, setIsLandscape] = useState(true);

// // // // // // // //   useEffect(() => {
// // // // // // // //     const checkOrientation = () => {
// // // // // // // //       setIsLandscape(window.innerWidth >= window.innerHeight);
// // // // // // // //     };

// // // // // // // //     checkOrientation();
// // // // // // // //     window.addEventListener("resize", checkOrientation);
// // // // // // // //     return () => window.removeEventListener("resize", checkOrientation);
// // // // // // // //   }, []);

// // // // // // // //   useEffect(() => {
// // // // // // // //     if (!isLandscape || !containerRef.current) return;

// // // // // // // //     const scene = new THREE.Scene();
// // // // // // // //     const camera = new THREE.PerspectiveCamera(75, 16 / 9, 0.1, 1000);
// // // // // // // //     camera.position.z = 5;

// // // // // // // //     const renderer = new THREE.WebGLRenderer({ antialias: true });
// // // // // // // //     containerRef.current.appendChild(renderer.domElement);

// // // // // // // //     const resize = () => {
// // // // // // // //       const width = window.innerWidth;
// // // // // // // //       const height = width * (9 / 16); // maintain 16:9
// // // // // // // //       renderer.setSize(width, height);
// // // // // // // //       camera.aspect = width / height;
// // // // // // // //       camera.updateProjectionMatrix();
// // // // // // // //     };

// // // // // // // //     resize();
// // // // // // // //     window.addEventListener("resize", resize);

// // // // // // // //     const geometry = new THREE.BoxGeometry();
// // // // // // // //     const material = new THREE.MeshBasicMaterial({ color: 0x00ffcc });
// // // // // // // //     const cube = new THREE.Mesh(geometry, material);
// // // // // // // //     scene.add(cube);

// // // // // // // //     const animate = () => {
// // // // // // // //       requestAnimationFrame(animate);
// // // // // // // //       cube.rotation.x += 0.01;
// // // // // // // //       cube.rotation.y += 0.01;
// // // // // // // //       renderer.render(scene, camera);
// // // // // // // //     };

// // // // // // // //     animate();

// // // // // // // //     return () => {
// // // // // // // //       window.removeEventListener("resize", resize);
// // // // // // // //       renderer.dispose();
// // // // // // // //       if (containerRef.current) containerRef.current.innerHTML = "";
// // // // // // // //     };
// // // // // // // //   }, [isLandscape]);

// // // // // // // //   return (
// // // // // // // //     <div style={{ width: "100vw", height: "100vh", position: "relative" }} id={isLandscape ?"none": "game-container"}>
// // // // // // // //       {!isLandscape && (
// // // // // // // //         <div
// // // // // // // //           style={{
// // // // // // // //             position: "absolute",
// // // // // // // //             top: 0,
// // // // // // // //             left: 0,
// // // // // // // //             width: "100%",
// // // // // // // //             height: "100%",
// // // // // // // //             background: "#111",
// // // // // // // //             color: "#fff",
// // // // // // // //             display: "flex",
// // // // // // // //             alignItems: "center",
// // // // // // // //             justifyContent: "center",
// // // // // // // //             fontSize: "1.5rem",
// // // // // // // //             zIndex: 10,
// // // // // // // //           }}
// // // // // // // //         >
// // // // // // // //           Please rotate your device to landscape mode.
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //       <div ref={containerRef} style={{ margin: "0 auto" }} />
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default LandscapeGame;
// // // // // // // import React, { useEffect, useRef, useState } from "react";
// // // // // // // import * as THREE from "three";

// // // // // // // const LandscapeGame: React.FC = () => {
// // // // // // //   const containerRef = useRef<HTMLDivElement>(null);
// // // // // // //   const [isLandscape, setIsLandscape] = useState(true);
// // // // // // //   const [hasStarted, setHasStarted] = useState(false);

// // // // // // //   // Orientation detection
// // // // // // //   useEffect(() => {
// // // // // // //     const checkOrientation = () => {
// // // // // // //       setIsLandscape(window.innerWidth >= window.innerHeight);
// // // // // // //     };

// // // // // // //     checkOrientation();
// // // // // // //     window.addEventListener("resize", checkOrientation);
// // // // // // //     return () => window.removeEventListener("resize", checkOrientation);
// // // // // // //   }, []);

// // // // // // //   // Start game (with orientation lock)
// // // // // // //   const startGame = async () => {
// // // // // // //     setHasStarted(true);

// // // // // // //     const container = containerRef.current;
// // // // // // //     if (!container) return;

// // // // // // //     try {
// // // // // // //       // Request fullscreen
// // // // // // //       if (container.requestFullscreen) {
// // // // // // //         await container.requestFullscreen();
// // // // // // //       }

// // // // // // //       // Try to lock orientation
// // // // // // //       if (screen.orientation && screen.orientation.lock) {
// // // // // // //         await screen.orientation.lock("landscape");
// // // // // // //         console.log("Orientation locked to landscape");
// // // // // // //       }
// // // // // // //     } catch (err) {
// // // // // // //       console.warn("Orientation lock failed:", err);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Init Three.js after "Start"
// // // // // // //   useEffect(() => {
// // // // // // //     if (!hasStarted || !isLandscape || !containerRef.current) return;

// // // // // // //     const scene = new THREE.Scene();
// // // // // // //     const camera = new THREE.PerspectiveCamera(75, 16 / 9, 0.1, 1000);
// // // // // // //     camera.position.z = 5;

// // // // // // //     const renderer = new THREE.WebGLRenderer({ antialias: true });
// // // // // // //     containerRef.current.appendChild(renderer.domElement);

// // // // // // //     const resize = () => {
// // // // // // //       const width = window.innerWidth;
// // // // // // //       const height = width * (9 / 16);
// // // // // // //       renderer.setSize(width, height);
// // // // // // //       camera.aspect = width / height;
// // // // // // //       camera.updateProjectionMatrix();
// // // // // // //     };

// // // // // // //     resize();
// // // // // // //     window.addEventListener("resize", resize);

// // // // // // //     const cube = new THREE.Mesh(
// // // // // // //       new THREE.BoxGeometry(),
// // // // // // //       new THREE.MeshBasicMaterial({ color: 0xff6600 })
// // // // // // //     );
// // // // // // //     scene.add(cube);

// // // // // // //     const animate = () => {
// // // // // // //       requestAnimationFrame(animate);
// // // // // // //       cube.rotation.x += 0.01;
// // // // // // //       cube.rotation.y += 0.01;
// // // // // // //       renderer.render(scene, camera);
// // // // // // //     };

// // // // // // //     animate();

// // // // // // //     return () => {
// // // // // // //       window.removeEventListener("resize", resize);
// // // // // // //       renderer.dispose();
// // // // // // //       if (containerRef.current) containerRef.current.innerHTML = "";
// // // // // // //     };
// // // // // // //   }, [hasStarted, isLandscape]);

// // // // // // //   return (
// // // // // // //     <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
// // // // // // //       {!isLandscape && (
// // // // // // //         <div
// // // // // // //           style={{
// // // // // // //             position: "absolute",
// // // // // // //             zIndex: 10,
// // // // // // //             top: 0,
// // // // // // //             left: 0,
// // // // // // //             width: "100%",
// // // // // // //             height: "100%",
// // // // // // //             background: "#000",
// // // // // // //             color: "#fff",
// // // // // // //             display: "flex",
// // // // // // //             justifyContent: "center",
// // // // // // //             alignItems: "center",
// // // // // // //             fontSize: "1.5rem",
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           Please rotate your device to landscape mode.
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {!hasStarted && (
// // // // // // //         <button
// // // // // // //           onClick={startGame}
// // // // // // //           style={{
// // // // // // //             position: "absolute",
// // // // // // //             zIndex: 5,
// // // // // // //             top: "50%",
// // // // // // //             left: "50%",
// // // // // // //             transform: "translate(-50%, -50%)",
// // // // // // //             fontSize: "1.2rem",
// // // // // // //             padding: "1rem 2rem",
// // // // // // //             borderRadius: "1rem",
// // // // // // //             border: "none",
// // // // // // //             background: "#0088ff",
// // // // // // //             color: "#fff",
// // // // // // //             cursor: "pointer",
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           Start Game
// // // // // // //         </button>
// // // // // // //       )}

// // // // // // //       <div ref={containerRef} style={{ margin: "0 auto" }} />
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default LandscapeGame;
