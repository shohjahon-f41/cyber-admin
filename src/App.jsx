import { Suspense, lazy } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Spin from "./components/Spin";

const Login = lazy(() => import("./pages/Login"));
const Admin = lazy(() => import("./components/Admin"));

function App() {
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
          <Login />
          {/* <Admin /> */}
        </motion.div>
      </Suspense>
    </AnimatePresence>
  );
}

export default App;
