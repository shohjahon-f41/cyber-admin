import {
  BarChartOutlined,
  DashboardOutlined,
  ProductOutlined,
  WindowsOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
export const menuSidebar = [
  {
    key: "/",
    icon: <DashboardOutlined />,
    label: "Dashboard",
    path: "/",
  },
  {
    key: "/products",
    icon: <ProductOutlined />,
    label: "Products",
    path: "/products",
  },
  {
    key: "/brands",
    icon: <WindowsOutlined />,
    label: "Brands",
    path: "/brands",
  },
  {
    key: "/categories",
    icon: <BarChartOutlined />,
    label: 'Category',
    path: "/categories"

  },
];
