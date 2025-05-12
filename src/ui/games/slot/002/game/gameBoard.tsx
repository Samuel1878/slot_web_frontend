
import { Symbol } from "../component/symbol";
import { useContext, useState } from "react";
import { useGameContext } from "../helper/context";
// const cols = 6;
// const rows = 5;

export function GameBoard () {
    const { handleSpin, handleRemove, symbols } = useGameContext()

  return (
    <>
      {symbols.map((s, i) => (
        <Symbol
          key={s.id}
          x={s.x}
          y={s.y}
          icon={s.icon}
          animateOut={s.animateOut}
          onRemove={() => handleRemove(s.id)}
          colIndex={s.col}
          rowIndex={s.row}
        />
      ))}
    </>
  );
}
