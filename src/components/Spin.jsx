// src/components/LoadingSpinner.jsx
import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";

const LoadingSpinner = () => (
  <Flex
    align="center"
    justify="center"
    style={{ height: "100vh", backgroundColor: "#f0f0f0" }}
  >
    <Spin
      indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
      size="large"
    />
  </Flex>
);

export default LoadingSpinner;
