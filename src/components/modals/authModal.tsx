import { InputAdornment, Modal, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "src/context/authContext";
import { authLottie_1, authSm } from "src/utils";
import Lottie from "lottie-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const AuthModal = () => {
  const { showAuthModal, setShowAuthModal, login, isAlready } = useAuth();
  const [isLogin, setIsLogin] = useState(isAlready);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [conPwd, setConPwd] = useState("");
  const [error, setError] = useState({ error: null, message: "" });
  const [invalid, setInvalid] = useState({ line: 0, message: "" });

  const signPhoneRef = useRef(null);
  const signPwdRef = useRef(null);
  const signConPwdRef = useRef(null);
  const logPhoneRef = useRef(null);
  const logPwdRef = useRef(null);

  const handleLogin = () => {
    login("John Doe");
  };
  useGSAP(() => {
    if (isLogin) {
      if (!logPhoneRef.current || !logPwdRef.current) return;
      gsap.fromTo(
        logPhoneRef.current,
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, delay: 0, ease: "power3.out" }
      );
      gsap.fromTo(
        logPwdRef.current,
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power3.out" }
      );
    } else {
      if (!signPhoneRef.current || !signPwdRef.current || !signConPwdRef.current) return;
        gsap.fromTo(
          signPhoneRef.current,
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, delay: 0, ease: "power3.out" }
        );
        gsap.fromTo(
          signPwdRef.current,
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power3.out" }
        );
         gsap.fromTo(
           signConPwdRef.current,
           { x: -20, opacity: 0 },
           { x: 0, opacity: 1, duration: 0.8, delay: 0.4, ease: "power3.out" }
         );
    }

  
  }, [isLogin]);

  const handleClose = () => setShowAuthModal(false);
  if (!showAuthModal) return null;
  return (
    <Modal
      open={showAuthModal}
      onClose={handleClose}
      style={{
        display: "flex",
        justifyContent: "center",

        alignItems: "center",
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
   
      <div
        className="bg-neutral-800 flex flex-col md:flex-row 
            border-neutral-400 border-1
            relative
            w-full
            sm:w-2/3
            md:w-4/5
            lg:w-1/2
            min-h-100
            rounded-2xl mx-6"
      >
        <div className="bg-neutral-950 md:h-full lg:h-full md:w-1/3 overflow-hidden relative hidden md:flex items-center justify-center md:p-10 lg:p-5">
          <Lottie
            animationData={authLottie_1}
            loop={true}
            autoPlay={true}
            height={"100%"}
          />
        </div>

        <div className="flex flex-col w-full md:w-2/3">
          <div
            id="toggle"
            className=" my-4 flex w-full flex-row justify-center items-center"
          >
            <button
          
              onClick={() => setIsLogin(false)}
              className={`mx-4 w-full h-10 items-center text-amber-50 transition-colors justify-center ${
                isLogin ? "" : "border-amber-300 border-b-2 text-amber-300"}`}
            >
              Signup
            </button>
            <button
              onClick={() => setIsLogin(true)}
              className={`w-full mx-4 h-10 items-center text-amber-50 transition-colors justify-center ${
                isLogin ? "border-amber-300 border-b-2 text-amber-300" : ""
              }`}
            >
              Login
            </button>
          </div>
          {!isLogin ? (
            <form id="signUp" className="px-5 py-2">
              <div ref={signPhoneRef} className="relative mb-3">
                <FontAwesomeIcon
                  icon="fa-solid fa-phone"
                  color="#d1d1d1"
                  className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full text-amber-50 pl-10 pr-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-1 focus:ring-amber-300 transition duration-200"
                />
              </div>

              <div ref={signPwdRef} className="relative w-full mb-2">
                <FontAwesomeIcon
                  icon="fa-solid fa-lock"
                  color="#d1d1d1"
                  className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full text-amber-50 pl-10 pr-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-1 focus:ring-amber-300 transition duration-200"
                />
              </div>
              <div ref={signConPwdRef} className="relative w-full">
                <FontAwesomeIcon
                  icon="fa-solid fa-lock"
                  color="#d1d1d1"
                  className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full text-amber-50 pl-10 pr-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-1 focus:ring-amber-300 transition duration-200"
                />
              </div>
              <button className="my-4 h-12 w-full justify-center items-center bg-amber-300 rounded-full">
                Signup
              </button>
            </form>
          ) : (
            <form id="login" className="px-5 py-2">
              <div ref={logPhoneRef} className="relative mb-6 w-full">
                <FontAwesomeIcon
                  icon="fa-solid fa-phone"
                  color="#d1d1d1"
                  className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full text-amber-50 pl-10 pr-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-1 focus:ring-amber-300 transition duration-200"
                />
              </div>
              <div ref={logPwdRef} className="relative w-full">
                <FontAwesomeIcon
                  icon="fa-solid fa-lock"
                  color="#d1d1d1"
                  className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full text-amber-50 pl-10 pr-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-1 focus:ring-amber-300 transition duration-200"
                />
              </div>

              <button className="my-4 h-12 w-full justify-center items-center bg-amber-300 rounded-full">
                Login
              </button>
            </form>
          )}
          <button
            className="border-neutral-50 border-3 rounded-full h-10 w-10 absolute left-1/2 transition -translate-x-1/2 -bottom-15 hover:border-amber-400 z-20"
            onClick={handleClose}
          >
            <FontAwesomeIcon
              icon="fa-solid fa-xmark"
              color="#d1d1d1"
              size={"xl"}
            />
          </button>
        </div>
      </div>
      {/* </div> */}
    </Modal>
  );
};
export default AuthModal;
