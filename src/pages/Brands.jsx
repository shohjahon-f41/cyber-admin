import { Button, Card, Flex, message, Popconfirm } from "antd";
import {
  DeleteColumnOutlined,
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import React, { useEffect, useState } from "react";
import { API } from "../api";
import { urls } from "../constants/urls";
import BrandsModal from "../components/BrandsModal";

function Brands() {
  const [brands, setBrands] = useState([]);
  const [editingData, setEditingData] = useState(null)
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  function getBrands() {
    API.get(urls.brands.get)
      .then((res) => setBrands(res.data))
      .catch((err) => console.log(err));
  }

  function showModal() {
    setIsModalOpen(true);
  }

  useEffect(() => {
    getBrands();
  }, []);

  function handleEdit(el) {
    showModal()
    setEditingData(el)
  }

  function handleDelete(el) {
    API.delete(urls.brands.delete(el.id))
      .then((res) => {
        if ([200, 201].includes(res.status)) {
          messageApi.success("Success");
          getBrands();
        }
      })
      .catch((err) =>
        messageApi.open({
          type: "error",
          content:
            err.response?.status && err.response?.data?.message
              ? `${err.response.status}: ${err.response.data.message}`
              : "Error",
        })
      );
  }

  return (
    <>
      {contextHolder}{" "}
      <Flex justify="end">
        <Button
          className="add-product"
          type="primary"
          onClick={showModal}
          size="large"
          loading={loading}
        >
          + Add Brand
        </Button>
      </Flex>
      <Flex wrap gap={24}>
        {brands.map((item) => (
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt={item.name}
                src={item.image}
                style={{
                  height: 200,
                  objectFit: "contain",
                  width: "100%",
                }}
              />
            }
            actions={[
              <EditOutlined key="edit" onClick={() => handleEdit(item)} />,
              <Popconfirm
                title="Delete the brand"
                description="Are you sure to delete this brand?"
                okText="Yes"
                cancelText="No"
                onConfirm={() => {
                  handleDelete(item);
                }}
              >
                <DeleteOutlined key="delete" />,
              </Popconfirm>,
            ]}
          >
            <Meta title={item.name} description={item.country} />
          </Card>
        ))}
      </Flex>
      <BrandsModal
        ModalOpen={isModalOpen}
        setModalOpen={setIsModalOpen}
        loading={loading}
        setLoading={setLoading}
        getBrands={getBrands}
        editingData={editingData}
        setEditingData={setEditingData}
      />
    </>
  );
}

export default Brands;
