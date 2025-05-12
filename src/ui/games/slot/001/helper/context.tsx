import { createContext, useState } from "react";

export const GameContext = createContext();

const ContextProvider = ({children}) => {
    const [spinning, setSpinning] = useState<boolean>(true);

    return (
        <GameContext.Provider value={{
            spinning,
            setSpinning
        }}>
            {children}
        </GameContext.Provider>
    )
};

export default ContextProvider;