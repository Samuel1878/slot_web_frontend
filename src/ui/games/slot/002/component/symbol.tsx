import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { TextureLoader } from "three";

// Incoming bounce easing
function easeOutBounce(x) {
  const n1 = 7.5625,
    d1 = 2.75;
  if (x < 1 / d1) return n1 * x * x;
   if (x < 2 / d1) return n1 * (x -= 1.5 / d1) * x + 0.75;
  else if (x < 2.5 / d1) return n1 * (x -= 2.25 / d1) * x + 0.9375;
  else return n1 * (x -= 2.625 / d1) * x + 0.984375;
}

export function Symbol({
  x,
  y,
  icon,
  animateOut,
  onRemove,
  colIndex,
  rowIndex,
}) {
  const ref = useRef();
  const [start, setStart] = useState(false);
  const [phase, setPhase] = useState("idle"); // idle, bounceOut, fallOff
  const animationStart = useRef(null);
 const texture = useLoader(TextureLoader, icon);
  // Total animation durations
  const bounceDuration = 0.1;
  const fallDuration = 0.1;
  const incomingDuration = 0.3;

  // Each symbol has a delay based on its position
  const delay = colIndex * 0.1 + rowIndex * 0.07; // tweak to taste

  useEffect(() => {
    const timer = setTimeout(() => {
      setStart(true);
      animationStart.current = performance.now();
      if (animateOut) setPhase("bounceOut");
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [delay, animateOut]);

  useFrame(() => {
    if (!ref.current || !start) return;

    const now = performance.now();
    const elapsed = (now - animationStart.current) / 1000;

    if (animateOut) {
      if (phase === "bounceOut") {
        const t = Math.min(elapsed / bounceDuration, 1);
        const bounceY = y - Math.sin(t * Math.PI) * 0.2; // simple bounce arch
        ref.current.position.set(x, bounceY, 0);
        if (t >= 1) {
          setPhase("fallOff");
          animationStart.current = performance.now(); // restart time
        }
      } else if (phase === "fallOff") {
        const t = Math.min((elapsed - bounceDuration) / fallDuration, 1);
        const fallY = y - 1 - t * 12; // fall off screen
        ref.current.position.set(x, fallY, 0);
        if (t >= 1) {
          onRemove?.();
        }
      }
    } else {
      // Animate in: bounce down from above
      const t = Math.min(elapsed / incomingDuration, 1);
      const eased = easeOutBounce(t);
      const fromY = y + 10;
      const toY = y ;
      const posY = fromY + (toY - fromY) * eased;
      ref.current.position.set(x, posY, 0);
    }
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[.9, .9, 0]}/>
      <meshStandardMaterial map={texture}/>
    </mesh>
  );
}

// import { useFrame } from "@react-three/fiber";
// import { useRef, useState, useEffect } from "react";

// // Easing for incoming symbols
// function easeOutBounce(x) {
//   const n1 = 7.5625,
//     d1 = 2.75;
//   if (x < 1 / d1) return n1 * x * x;
//   else if (x < 2 / d1) return n1 * (x -= 1.5 / d1) * x + 0.75;
//   else if (x < 2.5 / d1) return n1 * (x -= 2.25 / d1) * x + 0.9375;
//   else return n1 * (x -= 2.625 / d1) * x + 0.984375;
// }

// export function Symbol({
//   x,
//   y,
//   color,
//   animateOut,
//   onRemove,
//   colIndex,
//   rowIndex,
// }) {
//   const ref = useRef();
//   const animationStart = useRef(null);
//   const [shouldAnimate, setShouldAnimate] = useState(false);

//   const incomingDuration = 1;
//   const outgoingDuration = 1;

//   const delay = (colIndex + rowIndex * 0.3) * 0.15;

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShouldAnimate(true);
//       animationStart.current = performance.now();
//     }, delay * 1000);
//     return () => clearTimeout(timer);
//   }, [delay]);

//   useFrame(() => {
//     console.log("USE FRAME")
//     if (!ref.current || !shouldAnimate) return;

//     const now = performance.now();
//     const elapsed = (now - animationStart.current) / 1000;

//     if (animateOut) {
//         console.log("BOUNCE OUT")
//       // Outgoing bounce-off animation
//       const t = Math.min(elapsed / outgoingDuration, 1);
//       let currentY;

//       if (t < 0.3) {
//         // Phase 1: fall to floor
//         const p = t / 0.3;
//         currentY = y - p * 1.5;
//       } else if (t < 0.5) {
//         // Phase 2: bounce up
//         const p = (t - 0.3) / 0.2;
//         currentY = y - 1.5 + p * 1.0;
//       } else {
//         // Phase 3: fall off screen
//         const p = (t - 0.5) / 0.5;
//         currentY = y - 0.5 - p * 9.5;
//       }

//       ref.current.position.set(x, currentY, 0);
//       if (t >= 1) onRemove?.();

//     } else {
//              console.log("BOUNCE IN");
//       // Incoming bounce-down animation
//       const t = Math.min(elapsed / incomingDuration, 1);
//       const eased = easeOutBounce(t);
//       const startY = y + 10;
//       const endY = y;
//       const currentY = startY + (endY - startY) * eased;
//       ref.current.position.set(x, currentY, 0);
//     }
//   });

//   return (
//     <mesh ref={ref}>
//       <boxGeometry args={[0.9, 0.9, 0.2]} />
//       <meshStandardMaterial color={color} />
//     </mesh>
//   );
// }

// import { useFrame } from "@react-three/fiber";
// import { useRef, useState, useEffect } from "react";

// export function Symbol({
//   x,
//   y,
//   color,
//   animateOut,
//   onRemove,
//   colIndex,
//   rowIndex,
// }) {
//   const ref = useRef();
//   const [start, setStart] = useState(false);
//   const startTimeRef = useRef(null);

//   const totalDuration = 1.2;
//   const delay = (colIndex + rowIndex * 0.3) * 0.15;

//   useEffect(() => {
//     const timer = setTimeout(() => setStart(true), delay * 1000);
//     return () => clearTimeout(timer);
//   }, [delay]);

//   useFrame(() => {
//     if (!ref.current || !start) return;

//     if (startTimeRef.current === null) {
//       startTimeRef.current = performance.now();
//     }

//     const elapsed = (performance.now() - startTimeRef.current) / 1000;
//     const t = Math.min(elapsed / totalDuration, 1);

//     let currentY = y;

//     if (animateOut) {
//         console.log("BOUNCE OUT")
//       // Outgoing bounce: 3 phases
//       if (t < 0.3) {
//         // Phase 1: fall to floor
//         const p = t / 0.3;
//         currentY = y - p * 1.5;
//       } else if (t < 0.5) {
//         // Phase 2: bounce up slightly
//         const p = (t - 0.3) / 0.2;
//         currentY = y - 1.5 + p * 1.0; // back up to y - 0.5
//       } else {
//         // Phase 3: fall off screen
//         const p = (t - 0.5) / 0.5;
//         currentY = y - 0.5 - p * 9.5; // down to y - 10
//       }

//       ref.current.position.set(x, currentY, 0);

//       if (t >= 1) onRemove?.();
//     } else {
//       // Incoming: bounce into place (same as before)
//       const bounceT = Math.min(elapsed / 1, 1);
//       const eased = easeOutBounce(bounceT);
//       const startY = y + 10;
//       currentY = startY + (y - startY) * eased;
//       ref.current.position.set(x, currentY, 0);
//     }
//   });

//   return (
//     <mesh ref={ref}>
//       <boxGeometry args={[0.9, 0.9, 0.2]} />
//       <meshStandardMaterial color={color} />
//     </mesh>
//   );
// }

// // Reuse bounce easing
// function easeOutBounce(x) {
//   const n1 = 7.5625,
//     d1 = 2.75;
//   if (x < 1 / d1) return n1 * x * x;
//   else if (x < 2 / d1) return n1 * (x -= 1.5 / d1) * x + 0.75;
//   else if (x < 2.5 / d1) return n1 * (x -= 2.25 / d1) * x + 0.9375;
//   else return n1 * (x -= 2.625 / d1) * x + 0.984375;
// }

// // import { useFrame } from "@react-three/fiber";
// // import { useRef, useState, useEffect } from "react";

// // // Bounce easing approximation
// // function easeOutBounce(x) {
// //   const n1 = 7.5625,
// //     d1 = 2.75;
// //   if (x < 1 / d1) return n1 * x * x;
// //   else if (x < 2 / d1) return n1 * (x -= 1.5 / d1) * x + 0.75;
// //   else if (x < 2.5 / d1) return n1 * (x -= 2.25 / d1) * x + 0.9375;
// //   else return n1 * (x -= 2.625 / d1) * x + 0.984375;
// // }

// // export function Symbol({
// //   x,
// //   y,
// //   color,
// //   animateOut,
// //   onRemove,
// //   colIndex,
// //   rowIndex,
// // }) {
// //   const ref = useRef();
// //   const startTimeRef = useRef(null);
// //   const [start, setStart] = useState(false);

// //   const duration = 1; // seconds
// //   const delay = (colIndex + rowIndex * 0.3) * 0.15; // stagger based on position

// //   useEffect(() => {
// //     const timer = setTimeout(() => setStart(true), delay * 1000);
// //     return () => clearTimeout(timer);
// //   }, [delay]);

// //   useFrame((_, delta) => {
// //     if (!ref.current || !start) return;

// //     if (animateOut) {
// //       ref.current.position.y -= 0.2;
// //       if (ref.current.position.y < -10) {
// //         onRemove?.();
// //       }
// //       return;
// //     }

// //     if (startTimeRef.current === null) {
// //       startTimeRef.current = performance.now();
// //     }

// //     const elapsed = (performance.now() - startTimeRef.current) / 1000;
// //     const t = Math.min(elapsed / duration, 1); // normalized 0 to 1
// //     const eased = easeOutBounce(t);
// //     const startY = y + 10;
// //     const endY = y;

// //     ref.current.position.set(x, startY + (endY - startY) * eased, 0);
// //   });

// //   return (
// //     <mesh ref={ref}>
// //       <boxGeometry args={[0.9, 0.9, 0.2]} />
// //       <meshStandardMaterial color={color} />
// //     </mesh>
// //   );
// // }

// import { useFrame } from "@react-three/fiber";
// import { useRef, useState, useEffect } from "react";

// // Bounce easing
// function easeOutBounce(x) {
//   const n1 = 7.5625,
//     d1 = 2.75;
//   if (x < 1 / d1) return n1 * x * x;
//   else if (x < 2 / d1) return n1 * (x -= 1.5 / d1) * x + 0.75;
//   else if (x < 2.5 / d1) return n1 * (x -= 2.25 / d1) * x + 0.9375;
//   else return n1 * (x -= 2.625 / d1) * x + 0.984375;
// }

// function easeInBounce(x) {
//   return 1 - easeOutBounce(1 - x);
// }

// export const Symbol = ({
//   x,
//   y,
//   color,
//   animateOut,
//   onRemove,
//   colIndex,
//   rowIndex,
// }) => {
//   const ref = useRef();
//   const [start, setStart] = useState(false);
//   const startTimeRef = useRef(null);

//   const duration = 1; // seconds
//   const delay = (colIndex + rowIndex * 0.3) * 0.15;

//   useEffect(() => {
//     const timer = setTimeout(() => setStart(true), delay * 1000);
//     return () => clearTimeout(timer);
//   }, [delay]);

//   useFrame(() => {
//     if (!ref.current || !start) return;

//     if (startTimeRef.current === null) {
//       startTimeRef.current = performance.now();
//     }

//     const elapsed = (performance.now() - startTimeRef.current) / 1000;
//     const t = Math.min(elapsed / duration, 1);

//     if (animateOut) {
//       // Ease-in-bounce as it drops off screen
//       const eased = easeInBounce(t);
//       const startY = y;
//       const endY = y - 1;
//       const currentY = startY + (endY - startY) * eased;
//       ref.current.position.set(x, currentY, 0);

//       if (t >= 1) onRemove?.();
//     } else {
//       // Ease-out-bounce as it falls into place
//       const eased = easeOutBounce(t);
//       const startY = y + 10;
//       const endY = y;
//       const currentY = startY + (endY - startY) * eased;
//       ref.current.position.set(x, currentY, 0);
//     }
//   });

//   return (
//     <mesh ref={ref}>
//       <boxGeometry args={[0.9, 0.9, 0.2]} />
//       <meshStandardMaterial color={color} />
//     </mesh>
//   );
// }
