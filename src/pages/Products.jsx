import { Space, Table } from "antd";
import axios from "axios";
import { title } from "framer-motion/client";
import React, { useState } from "react";

function Products() {
  const [products, setProducts] = useState()
  // 33:54
  axios
    .get("https://302d37aacffa4da5.mokky.dev/products")
    .then((res) => console.log(res.data));

  const colums = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Image", dataIndex: "image", key: "image" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Price", dataIndex: "price", key: "price" },
    {title:"Action",key:"action", render: ()=>(
      <Space></Space>
    )}
  ];

  return (
    <Table dataSource={} columns={colums}/>
  );
}

export default Products;
