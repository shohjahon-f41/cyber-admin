import { Button, Card, Flex } from "antd";
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
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function getBrands() {
    API.get(urls.brands.get)
      .then((res) => setBrands(res.data))
      .catch((err) => console.log(err));
  }

function showModal() {
  setIsModalOpen(true)
}

  useEffect(() => {
    getBrands();
  }, []);

  return (
    <>
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
              <EditOutlined key="edit" />,
              <DeleteOutlined key="delete" />,
            ]}
          >
            <Meta title={item.name} description={item.country} />
          </Card>
        ))}
      </Flex>
      <BrandsModal ModalOpen={isModalOpen} setModalOpen={setIsModalOpen} loading={loading} setLoading={setLoading} getBrands={getBrands} />
    </>
  );
}

export default Brands;
