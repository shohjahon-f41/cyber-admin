import { Suspense, lazy, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Spin from "./components/Spin";
import { BrowserRouter } from "react-router-dom";
import AuthProvider, { AuthContext } from "./contexts/AuthContext";

const Login = lazy(() => import("./pages/Login"));
const Admin = lazy(() => import("./components/Admin"));

function App() {
  const { auth } = useContext(AuthContext);
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Spin />}>
        <motion.div
          key="admin"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          style={{ height: "100%" }}
        >
          {auth ? <Admin /> : <Login />}
        </motion.div>
      </Suspense>
    </AnimatePresence>
  );
}

export default App;
