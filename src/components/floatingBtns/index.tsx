import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const CustomerService = () => {
    const [isOpen, setIsOpen] = useState(true);
    if(isOpen){
        return (
          <footer className="fixed bottom-20 right-5 p-2 bg-sky-500 rounded-md md:p-3 lg:p-4">
            <p>Contact Us</p>
            <button onClick={() => setIsOpen(false)} className="z-10 absolute h-6 w-6 -top-3 -right-3 bg-neutral-500 opacity-50 hover:opacity-100 rounded-full">
 <FontAwesomeIcon icon="fa-solid fa-xmark" size="sm" color="white"/>
         
             
            </button>
          </footer>
        );
    }
    return null
};
export const ReferalInvitation = () => {
    const [isOpen, setIsOpen] = useState(true);
    if(isOpen){
    return (
      <button className="fixed bottom-5 right-5 p-1 bg-green-300 rounded-md">
        <p>Get Bonus</p>
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
