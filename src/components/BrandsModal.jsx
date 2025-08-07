import { Form, Input, message, Modal } from "antd";
import React from "react";
import { API } from "../api";
import { urls } from "../constants/urls";

function BrandsModal({
  ModalOpen,
  setModalOpen,
  loading,
  setLoading,
  getBrands,
}) {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  function handleCancel() {
    setModalOpen(false);
    form.resetFields();
  }

  const handleOk = () => {
    form.submit();
  };

  const handleSubmit = (value) => {
    // form.submit()
    setLoading(true);
    API.post(urls.brands.post, value)
      .then((res) => {
        if (res.status === 201) {
          messageApi.success("Succes");
          handleCancel();
          getBrands();
        }
      })
      .catch((err) =>
        messageApi.open({
          type: "error",
          content:
            err.response?.status && err.response?.data?.message
              ? `${err.response.status}: ${err.response.data.message}`
              : "Что-то пошло не так при добавлении бренда",
        })
      )
      .finally(() => {
        setLoading(false);
      });
    // console.log(value);
    // setModalOpen(false);
  };

  return (
    <>
      {contextHolder}
      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={ModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={"Add"}
        // loading={loading}
        okButtonProps={{ htmlType: "submit", loading: loading }}
      >
        <Form
          name="product-form"
          form={form}
          onFinish={handleSubmit}
          autoComplete="on"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input brand name!" }]}
          >
            <Input placeholder="Brand Name" />
          </Form.Item>
          <Form.Item
            label="Image"
            name="image"
            rules={[
              { required: true, message: "Please input brand image link!" },
              { type: "url" },
            ]}
          >
            <Input placeholder="Brand Image Link" />
          </Form.Item>
          <Form.Item
            label="Country"
            name="country"
            rules={[{ required: true, message: "Please input brand country!" }]}
          >
            <Input placeholder="Brand Country" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default BrandsModal;
