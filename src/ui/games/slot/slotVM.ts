import { useState } from "react"

export const useSlotVM = () => {
    const [screen, setScreen] = useState<null | string>(null)
    return(
        {
            screen,

            setScreen
        }
    )
};
