import { path } from "framer-motion/client";
import Brands from "../pages/Brands";
import Products from "../pages/Products";
import Dashboard from "../pages/Dashboard";
import Category from "../pages/Category";
import Login from "../pages/Login";

export const routes = [
  { id: 1, path: "/", element: <Dashboard /> },
  { id: 2, path: "/products", element: <Products /> },
  { id: 3, path: "/brands", element: <Brands /> },
  { id: 4, path: "/category", element: <Category /> },
  { id: 5, path: "/login", element: <Login /> },
  { id: 6, path: "*", element: <Dashboard /> },
];
