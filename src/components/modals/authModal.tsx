import { InputAdornment, Modal, TextField } from "@mui/material";
import { useState } from "react";
import { useAuth } from "src/context/authContext"
import { authLottie_1, authSm } from "src/utils";
import Lottie from "lottie-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AuthModal = () => {
    const {showAuthModal, setShowAuthModal , login , isAlready}  = useAuth();
    const [isLogin, setIsLogin] = useState(isAlready);
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [conPwd, setConPwd] = useState("");
    const [error, setError] = useState({error:null, message:""});
    const [invalid, setInvalid] = useState({line:0, message:""});

    const handleLogin = () => {
        login("John Doe");
    };
    const handleClose = () => setShowAuthModal(false);
    if (!showAuthModal) return null
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
        {/* <div className="fixed inset-0 flex justify-center items-center"> */}
        <div
          className="bg-neutral-800 flex flex-col md:flex-row 
            border-neutral-400 border-1
            relative
            rounded-2xl mx-5 lg:mx-30 xl:mx-40"
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
                className={`mx-4 w-full h-10 items-center justify-center ${
                  isLogin ? "" : "border-amber-500 border-b-2"
                }`}
              >
                Signup
              </button>
              <button
                onClick={() => setIsLogin(true)}
                className={`w-full mx-4 h-10 items-center justify-center ${
                  isLogin ? "border-amber-500 border-b-2" : ""
                }`}
              >
                Login
              </button>
            </div>
            {!isLogin ? (
              <form id="signUp" className="px-5 py-2">
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  type="tel"
                  variant="outlined"
                  outline
                  placeholder="09..."
                  fullWidth
                  color="warning"
                  margin="normal"
                  value={phone}
                  inputMode="tel"
                  style={{
                    borderWidth: 1,
                    borderColor: "#fff",
                  }}
                  onChange={(e) => setPhone(e.target.value)}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon
                            icon="fa-solid fa-phone"
                            color="#d1d1d1"
                          />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  type="password"
                  variant="outlined"
                  placeholder=""
                  color="warning"
                  fullWidth
                  margin="normal"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  helperText="Password must be at least 6 characters"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon
                            icon="fa-solid fa-lock"
                            color="#d1d1d1"
                          />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Confirm Password"
                  variant="outlined"
                  placeholder=""
                  value={conPwd}
                  onChange={(e) => setConPwd(e.target.value)}
                  color="warning"
                  margin="normal"
                  helperText="Re-enter your password"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon
                            icon="fa-solid fa-lock"
                            color="#d1d1d1"
                          />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
                <button className="my-4 h-12 w-full justify-center items-center bg-amber-500 rounded-full">
                  Signup
                </button>
              </form>
            ) : (
              <form id="login" className="px-5 py-2">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Phone Number"
                  type="tel"
                  variant="outlined"
                  placeholder="09..."
                  value={phone}
                  margin="normal"
                  color="warning"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon
                            icon="fa-solid fa-phone"
                            color="#d1d1d1"
                          />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Password"
                  type="password"
                  variant="outlined"
                  placeholder=""
                  margin="normal"
                  value={password}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon
                            icon="fa-solid fa-lock"
                            color="#d1d1d1"
                          />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
                <button className="my-4 h-12 w-full justify-center items-center bg-amber-500 rounded-full">
                  Login
                </button>
              </form>
            )}
            <button
              className="border-neutral-50 border-1 rounded-full p-2 px-3 absolute left-1/2 transform -translate-x-1/2 -bottom-15 hover:border-amber-400 z-20"
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
}
export default AuthModal