import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";

import axios from "axios";
import { Col, Row } from "antd";
import Item from "../components/Item";

function Homepage() {
  const [itemsData, setItemsData] = useState([]);
  const getAllItems = () => {
    axios
      .get("/api/items/get-all-items")
      .then((res) => setItemsData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllItems();
  });
  return (
    <DefaultLayout>
     <Row gutter={20}>
        {itemsData.map((item) => {
          return (
            <Col span={6} xs={24} lg={6} md={12}>
              <Item item={item} />
            </Col>
          );
        })}
      </Row>
    </DefaultLayout>
  );
}

export default Homepage;
