import React, { useContext } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import axios from "axios";
import { urls } from "../constants/urls";
import { useNavigate } from "react-router-dom";
import { API } from "../api";
import { AuthContext } from "../contexts/AuthContext";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function Login() {
  const [messageApi, contextHolder] = message.useMessage();
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const key = "updatable";
  const onFinish = (values) => {
    API.post(urls.auth, values)
      .then((res) => {
        if (res.status === 201) {
          setUser();
          localStorage.setItem("token", res.data.token);
        }
      })
      .catch((err) => {
        if (err.status === 401) {
          messageApi.open({
            key,
            type: "loading",
            content: "Loading...",
          });
          setTimeout(() => {
            messageApi.open({
              key,
              type: "error",
              content: "Wrong Login or Password",
              duration: 2,
            });
          }, 1000);
        }
      });
  };
  return (
    <>
      {contextHolder}
      <div className="login">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
          className="login-form"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input autoComplete="username" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password autoComplete="current-password" />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit" className="login-button">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
export default Login;
