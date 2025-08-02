import { Button, Drawer, Form, Input, InputNumber, Switch } from "antd";
import React, { useEffect } from "react";
import { API } from "../api";
import { urls } from "../constants/urls";
import { tr } from "framer-motion/client";

function ProductDrawer({
  setDrawerOpen,
  drawerOpen,
  getProducts,
  editingData,
  setEditingData,
}) {
  const [form] = Form.useForm();

  const onClose = () => {
    form.resetFields();
    setDrawerOpen(false);
    getProducts();
    setEditingData(null);
  };

  useEffect(() => {
    form.setFieldsValue(editingData);
  }, [editingData]);

  const onFinish = (value) => {
    // value === null ? value
    value ={
      ...value,
      is_popular: value.is_popular && false
    }
    value
    if (editingData === null) {
      API.post(urls.products.post, value)
        .then((res) => {
          console.log(res);

          if (res.status === 201) {
            onClose();
          }
        })
        .catch((err) => console.error(err));
    } else {
      API.patch(urls.products.patch(editingData.id), value)
        .then((res) => {
          if (res.status === 200) {
            onClose();
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <Drawer
        title={`${editingData === null ? "Add" : "Edit"} Product`}
        onClose={onClose}
        width={500}
        open={drawerOpen}
      >
        <Form
          name="product-form"
          form={form}
          onFinish={onFinish}
          autoComplete="on"
        >
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
            rules={[{ required: false }]}
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
              {editingData === null ? "Add" : "Edit"} Product
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}

export default ProductDrawer;
