// // App.jsx

import React, {
  memo,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

import { GameContext } from "../helper/context";
import { possible_1_Reel, symbolTextures } from "../helper/reels";

const SYMBOL_SPACING = 1.5;     // distance between symbols
const VISIBLE_SYMBOLS = 5;      // number of symbols shown at once
const TOTAL_SYMBOLS = 30;       // total symbols in the reel group (buffer + visible)


export function Symbol({ textureUrl, position }) {
  const texture = useLoader(TextureLoader, textureUrl);

  return (

    <mesh position={position}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}
// Reel.js
// export function Reel({ xPosition, delay = 0 }) {
//   const groupRef = useRef();
//   const [symbols, setSymbols] = useState(generateSymbols());
//   const { spinning, setSpinning } = useContext(GameContext);
//   const speed = useRef(0);
//   const maxSpeed = 1.5;
//   const deceleration = 0.02;

//  function generateSymbols() {
//    return Array.from({ length: 45 }, () => {
//      const randomTex =
//        possible_1_Reel[Math.floor(Math.random() * possible_1_Reel.length)];
//      return randomTex;
//    });
//  }
// //   useEffect(() => {
// //     if (spinning) {
// //       speed.current = maxSpeed;
// //       groupRef.current.position.y = 0;
// //       setSymbols(generateSymbols());
// //     }
// //   }, [spinning]);

// // useEffect(() => {
// //     setSymbols(generateSymbols());
// //   }, []);

//   useEffect(() => {
//     spinning && spin();
//     setTimeout(() => {
//       setSpinning(false);
//     }, 3000);
//   }, [spinning]);

//   function spin() {
//     setTimeout(() => {
//       //   setSymbols(generateSymbols());
//       //   setSpinning(true);
//       speed.current = maxSpeed;
//     }, delay); // Delay to stagger reels
//   }

//  useFrame(() => {
//    if (!spinning) return;

//    // Move reel down
//    groupRef.current.position.y -= speed.current;

//    // Loop reel when passed full height
//    const fullReelHeight = SYMBOL_SPACING * TOTAL_SYMBOLS;
//    if (groupRef.current.position.y <= -fullReelHeight) {
//      groupRef.current.position.y += fullReelHeight;
//    }

//    // Decelerate
//    if (speed.current > 0) {
//      speed.current -= deceleration;
//    }

//    // Snap when stop
//    if (speed.current <= 0.01) {
//      speed.current = 0;

//      // Snap to exact aligned symbol row
//      const currentY = groupRef.current.position.y;
//      const snappedY = Math.round(currentY / SYMBOL_SPACING) * SYMBOL_SPACING;
//      groupRef.current.position.y = snappedY;

//      setSpinning(false);
//    }
//  });

//   return (
//     <group ref={groupRef} position={[xPosition, 0, 0]}>
//       {symbols.map((symbol, i) => {
//        const y = -i * SYMBOL_SPACING;
//         return <Symbol key={i} textureUrl={symbol.icon} position={[0, y, 0]} />;
//       })}
//     </group>
//   );
// }
export function Reel({ xPosition, delay }) {
  const groupRef = useRef();
  const [symbols, setSymbols] = useState(generateSymbols());
  const { spinning, setSpinning } = useContext(GameContext);

  const speed = useRef(0);
  const maxSpeed = 4; // Fast speed
  const deceleration = 0.02;

  function generateSymbols() {
    return Array(45)
      .fill(0)
      .map(() => {
        const randomTex =
          possible_1_Reel[Math.floor(Math.random() * possible_1_Reel.length)];
        return randomTex;
      });
  }
  useEffect(() => {
    setSymbols(generateSymbols());
  }, []);

  useEffect(() => {
    spinning && spin();
    setTimeout(() => {
      setSpinning(false);
    }, 3000);
  }, [spinning]);

  function spin() {
    setTimeout(() => {
      //   setSymbols(generateSymbols());
      //   setSpinning(true);
      speed.current = maxSpeed;
    }, delay); // Delay to stagger reels
  }
  useFrame(() => {
    if (!spinning) return;

    groupRef.current.position.y -= speed.current;

    if (groupRef.current.position.y <= -5) {
      groupRef.current.position.y += 10; // Wrap-around
      setSymbols(generateSymbols());
    }

    if (speed.current > 0) {
      speed.current -= deceleration;
    }
    // if (speed.current <= 1.5){
    //     speed.current -= 0.0005 ;
    // }

    if (speed.current <= 0.01) {
      speed.current = 0;
       const currentY = groupRef.current.position.y;
       const snapped = Math.round(currentY / SYMBOL_SPACING) * SYMBOL_SPACING;
       groupRef.current.position.y = snapped;
      setSpinning(false);

      // Snap reel to nearest row nicely
    //   const rowHeight = 1.5;
    //   const snappedY =
    //     Math.round(groupRef.current.position.y / rowHeight) * rowHeight;
    //   groupRef.current.position.y = snappedY;
    }
    

  });

 

  return (
    <group ref={groupRef} position={[xPosition, 0, 0]}>
      {symbols.map((e , i) => {
         const y = (TOTAL_SYMBOLS / 2 - i) * SYMBOL_SPACING;
        //  const centerOffset = (VISIBLE_SYMBOLS - 1) / 2;
        //  const y = (centerOffset - i) * SYMBOL_SPACING;
        return (
          <Symbol
            key={i}
            textureUrl={e.icon}
            position={[0, y, 0]} // (centered 5 symbols)
          />
        );
      }
      )}
      
    </group>
  );
}
// const REEL_COUNT = 6;
// const REEL_SPACING = 1.5;

// const reels = Array.from({ length: REEL_COUNT }, (_, i) => {
//   const centeredOffset = (REEL_COUNT - 1) / 2; // For 6, this is 2.5
//   const xPos = (i - centeredOffset) * REEL_SPACING;

//   return (
//     <Reel
//       key={i}
//       xPosition={xPos}
//       delay={i * 200} // optional staggered spin delay
//     />
//   );
// });

