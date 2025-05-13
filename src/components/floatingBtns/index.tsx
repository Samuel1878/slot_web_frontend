import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const CustomerService = () => {
    // const [isOpen, setIsOpen] = useState(true);
    // if(isOpen){
        return (
          <button className="fixed bottom-8 flex-center right-5 h-12 w-12 lg:h-14 lg:w-14 bg-amber-300 rounded-full">
            <FontAwesomeIcon icon="fa-solid fa-headset" color="#171717" size="40px" style={{width:"25px", height:"25px"}}/>
            {/* <button
              onClick={() => setIsOpen(false)}
              className="z-10 absolute h-6 w-6 -top-2 -right-2 bg-neutral-500 opacity-50 hover:opacity-100 rounded-full"
            > */}
              {/* <FontAwesomeIcon
                icon="fa-solid fa-xmark"
                size="sm"
                color="white"
              />
            </button> */}
          </button>
        );
    // }
    // return null
};
export const ReferalInvitation = () => {
    const [isOpen, setIsOpen] = useState(true);
    if(isOpen){
    return (
      <button className="fixed bottom-5 right-5 p-1 hidden rounded-md">
        {/* <p>Get Bonus</p> */}
        <button
          onClick={() => setIsOpen(false)}
          className="z-10 absolute h-6 w-6 -top-3 -right-3 bg-neutral-500 opacity-50 hover:opacity-100 rounded-full"
        >
          <FontAwesomeIcon icon="fa-solid fa-xmark" size="sm" color="white" />
        </button>
      </button>
    );}
    return null
};
