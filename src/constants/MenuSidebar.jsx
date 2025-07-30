import {
  DashboardOutlined,
  ProductOutlined,
  WindowsOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
export const menuSidebar = [
  {
    key: "1",
    icon: <DashboardOutlined />,
    label: <Link />,
  },
  {
    key: "2",
    icon: <ProductOutlined />,
    label: "Products",
  },
  {
    key: "3",
    icon: <WindowsOutlined />,
    label: "Brands",
  },
];
