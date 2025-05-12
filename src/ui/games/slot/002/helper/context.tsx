import { createContext, useContext, useRef, useState } from "react";
import { symbolTextures } from "./const";

const GameContext = createContext();


const COLORS = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "cyan",
  "magenta",
  "lime",
];

const cols = 6;
const rows = 5;

function getRandomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function generateSymbols() {
  const newSymbols = [];
  const numCols = 6;
  const numRows = 5;
    const spacing = 1.2;
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const id = `${col}-${row}-${Date.now()}-${Math.random()}`;
      const icon =
        symbolTextures[Math.floor(Math.random() * symbolTextures.length)].icon;

      // Center grid in 3D space
        const x = (col - (numCols - 1) / 2) * spacing;
        const y = ((numRows - 1) / 2 - row) * spacing;

      newSymbols.push({
        id,
        x,
        y,
        col,
        row,
        icon,
        animateOut: false,
      });
    }
  }

  return newSymbols;
}




const ContextProvider = ({children}) => {
   const [symbols, setSymbols] = useState(generateSymbols());
   const [spinning, setSpinning] = useState(false);
   const removeCount = useRef(0);

   function handleSpin() {
     // Start exit animation
     setSymbols((prev) => prev.map((s) => ({ ...s, animateOut: true })));
     setSpinning(true);
     removeCount.current = 0;
   }

   function handleRemove(id) {
     removeCount.current += 1;

     setSymbols((prev) => prev.filter((s) => s.id !== id));

     if (removeCount.current >= cols * rows) {
       // All symbols are gone – spawn new ones
       setTimeout(() => {
         setSymbols(generateSymbols());
         setSpinning(false);
       }, 300);
     }
   }

    return(
        <GameContext.Provider value={{
            handleSpin,
            symbols ,
            handleRemove,
            spinning
            }}>
            {children}
        </GameContext.Provider>
    )
}
export default ContextProvider;
export const useGameContext = () => useContext(GameContext);