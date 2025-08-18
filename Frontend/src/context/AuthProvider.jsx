import React, { createContext, useState, useContext } from "react";

// ✅ Create context outside the component
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");

  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

// ✅ Custom hook for using AuthContext
export const useAuth = () => useContext(AuthContext);
