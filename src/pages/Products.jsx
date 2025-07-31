import {
  Button,
  Drawer,
  Flex,
  Form,
  Image,
  Input,
  InputNumber,
  Space,
  Switch,
  Table,
} from "antd";
// import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../api";
import { urls } from "../constants/urls";
import TextArea from "antd/es/input/TextArea";

function Products() {
  const [products, setProducts] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const showDrawer = () => {
    setDrawerOpen(true);
  };
  const onClose = () => {
    setDrawerOpen(false);
  };

  function getProducts() {
    API.get(urls.products.get).then((res) => setProducts(res.data));
  }
  useEffect(() => getProducts(), []);
  const colums = [
    { title: "ID", dataIndex: "id", key: "id" },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (item) => <Image width={100} src={item} />,
    },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Price", dataIndex: "price", key: "price" },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space>
          <Button>Edit</Button>
          <Button danger>Remove</Button>
        </Space>
      ),
    },
  ];

  const onFinish = (value) => {
    console.log(value);
  };

  return (
    <>
      <Flex justify="end">
        <Button
          className="add-product"
          type="primary"
          onClick={showDrawer}
          size="large"
        >
          + Add Product
        </Button>
      </Flex>
      <Table dataSource={products} columns={colums} />
      <Drawer
        title="Add Product"
        onClose={onClose}
        width={500}
        open={drawerOpen}
      >
        <Form name="product-form" onFinish={onFinish} autoComplete="on">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input product name!" }]}
          >
            <Input placeholder="Enter Name of Product" />
          </Form.Item>
          <Form.Item
            label="Image"
            name="image"
            rules={[
              { required: true, message: "Please input product image link!" },
              { type: "url" },
            ]}
          >
            <Input placeholder="Enter Product Image Link" />
          </Form.Item>
          <Form.Item
            label="Description"
            name="desc"
            rules={[
              { required: true, message: "Please input product description!" },
            ]}
          >
            <Input.TextArea placeholder="Enter Product Description" />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              { required: true, message: "Please input product price!" },
              { type: "number" },
            ]}
          >
            <InputNumber
              min={0}
              placeholder="Enter Product Price"
              style={{ width: "100%" }}
            />
          </Form.Item>
          <Form.Item
            label="Old Price"
            name="old_price"
            rules={[
              { required: true, message: "Please input product old price!" },
            ]}
          >
            <InputNumber
              min={0}
              placeholder="Enter Product Old Price"
              style={{ width: "100%" }}
            />
          </Form.Item>
          <Form.Item
            label="Is Popular"
            name="is_popular"
            rules={[{ required: true }]}
          >
            <Switch />
          </Form.Item>
          <Form.Item>
            <Button type="primary" size="large" style={{ width: "100%" }}>
              Add Product
            </Button>
            {/* 43:08 */}
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}

export default Products;
