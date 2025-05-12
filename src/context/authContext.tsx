import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isAlready, setIsAlready] = useState(false);

  const login = (userData) => {
    setUser(userData);
    setShowAuthModal(false);
  };

  const logout = () => setUser(null);

  useEffect(() => {
    
  },[])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAlready,
        showAuthModal,

        login,
        logout,
        setIsAlready,
        setShowAuthModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
