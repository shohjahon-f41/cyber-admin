import {
  Button,
  Drawer,
  Flex,
  Form,
  Image,
  Input,
  InputNumber,
  Popconfirm,
  Space,
  Spin,
  Switch,
  Table,
} from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { API } from "../api";
import { urls } from "../constants/urls";
import TextArea from "antd/es/input/TextArea";
import ProductDrawer from "../components/ProductDrawer";

function Products() {
  const [products, setProducts] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [editingData, setEditingData] = useState(null);

  const showDrawer = () => {
    setDrawerOpen(true);
  };
  const onClose = () => {
    setDrawerOpen(false);
  };

  function getProducts() {
    setLoading(true);
    onClose();
    API.get(urls.products.get)
      .then((res) => setProducts(res.data))
      .finally(() => setLoading(false));
  }
  useEffect(() => getProducts(), []);

  const columns = [
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
      render: (item) => (
        <Space>
          <Button onClick={() => handleEdit(item)}>Edit</Button>
          <Popconfirm
            title="Delete the product"
            description="Are you sure to delete this product?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => {
              handleDelete(item);
            }}
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  function handleEdit(el) {
    setEditingData(el);
    setDrawerOpen(true);
  }

  const handleDelete = (element) => {
    API.delete(urls.products.delete(element.id))
      .then((res) => {
        if (res.status === 200) {
          getProducts();
        }
      })
      .catch((err) => console.log(err))
  };

  const onFinish = (value) => {
    console.log(value);
    API.post(urls.products.post, value)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    onClose();
    getProducts();
    // 17:58
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
      {loading ? (
        <Flex justify="center" align="center" style={{ height: 200 }}>
          <Spin indicator={<LoadingOutlined spin />} size="large" />
        </Flex>
      ) : (
        <Table dataSource={products} columns={columns} rowKey="id" />
      )}
      <ProductDrawer
        setDrawerOpen={setDrawerOpen}
        drawerOpen={drawerOpen}
        getProducts={getProducts}
        editingData={editingData}
        setEditingData={setEditingData}
      />
    </>
  );
}

export default Products;
