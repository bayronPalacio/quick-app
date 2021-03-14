import React, { useState, useEffect } from "react";
import FormOrder from "../components/FormOrder";
import axios from "axios";

const AddProduct = () => {
  const initialData = {};
  const [listProducts, setListProducts] = useState([]);
  const [prodAdded, setProdAdded] = useState([]);
  const [orderId, setOrderId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataForm = new FormData(e.target);
    const data = Object.fromEntries(dataForm.entries());
    data["status"] = "In Progress";
    data["products"] = prodAdded;
    const total = prodAdded.reduce(
      (total, currValue) => total + parseFloat(currValue.total),
      0
    );
    data["total"] = total.toFixed(2);

    console.log(data);

    const toDb = await fetch("/addOrder", {
      method: "post",
      body: JSON.stringify({ data }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(toDb.response);

    // const response = await toDb.json();
    e.target.reset();
    setProdAdded([]);
    getOrderId();
  };

  useEffect(async () => {
    try {
      const response = await axios.get("/products");
      setListProducts(response.data);
      getOrderId();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getOrderId = async () => {
    try {
      const lastOrderId = await axios.get("/lastOrderId");
      setOrderId(lastOrderId.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="rightSection">
        <FormOrder
          handleSubmit={handleSubmit}
          data={initialData}
          flag={true}
          listProducts={listProducts}
          setListProducts={setListProducts}
          prodAdded={prodAdded}
          setProdAdded={setProdAdded}
          orderId={orderId}
        />
      </div>
    </>
  );
};

export default AddProduct;
