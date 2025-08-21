import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const navigate = useNavigate();
  let locale = localStorage.getItem("token") || "";
  const [auth, setAuth] = useState(!!locale);

  function setUser() {
    navigate("/");
    setAuth(true);
  }

  function Logout() {
    navigate("/login");
    localStorage.clear();
    setAuth(false);
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth, setUser, Logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
