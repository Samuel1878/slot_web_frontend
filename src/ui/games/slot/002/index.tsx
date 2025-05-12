import { useEffect } from "react";
import GameScreen from "./game";
import ContextProvider from "./helper/context";

export default function () {

    
 

    return (
        <ContextProvider>
            <GameScreen/>
        </ContextProvider>
    )
}