import { Suspense, lazy, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Spin from "./components/Spin";
import { useState } from "react";

const Login = lazy(() => import("./pages/Login"));
const Admin = lazy(() => import("./components/Admin"));

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : "")

  useEffect(() => {setToken(token)}, token);
  // 15:25
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
          {token.length > 0 ? <Admin /> : <Login />}
          {/* <Login /> */}
          {/* <Admin /> */}
        </motion.div>
      </Suspense>
    </AnimatePresence>
  );
}

export default App;
