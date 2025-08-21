import React, { useContext, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Flex,
  Layout,
  Menu,
  Popconfirm,
  Popover,
  theme,
} from "antd";
import { menuSidebar } from "../constants/MenuSidebar";
import { Link, Route, Routes } from "react-router-dom";
import { routes } from "../constants/routes";
import { AuthContext } from "../contexts/AuthContext";
const { Header, Sider, Content } = Layout;
const AdminLayot = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { Logout } = useContext(AuthContext);
  const confirm = (e) => {
    Logout();
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={location.pathname}
          items={menuSidebar.map((item) => ({
            ...item,
            label: <Link to={item.path}>{item.label}</Link>,
          }))}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: "0 24px 0 0", background: colorBgContainer }}>
          <Flex justify="space-between" align="center">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <Popconfirm
              placement="bottomRight"
              title="LogOut"
              description="Are you sure to logout?"
              onConfirm={confirm}
              okText="Yes"
              cancelText="No"
            >
              <Avatar
                size={32}
                icon={<UserOutlined />}
                style={{ cursor: "pointer" }}
              />
            </Popconfirm>
          </Flex>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            {routes.map((item) => (
              <Route path={item.path} element={item.element}></Route>
            ))}
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayot;
