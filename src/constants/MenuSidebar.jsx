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
    label: <Link to="/">Dashboard</Link>,
  },
  {
    key: "2",
    icon: <ProductOutlined />,
    label: <Link to="/products">Products</Link>,

  },
  {
    key: "3",
    icon: <WindowsOutlined />,
    label: <Link to="/category">Category</Link>,

  },
];
