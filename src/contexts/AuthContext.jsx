import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const navigate = useNavigate()
    let locale = localStorage.getItem("token") || ""
    const [auth, setAuth] = useState(!!locale)
}
