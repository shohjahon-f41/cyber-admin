import { Button, Drawer, Form, Input, InputNumber, Switch } from "antd";
import React from "react";

function ProductDrawer({onClose, drawerOpen, onFinish}) {
  return (
    <>
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
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              style={{ width: "100%" }}
            >
              Add Product
            </Button>
            {/* 43:08 */}
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}

export default ProductDrawer;
