import React, { useState, useEffect } from "react";
import FormOrder from "../components/FormOrder";
import axios from "axios";

const AddProduct = () => {
  const initialData = {};
  const [listProducts, setListProducts] = useState([]);
  const [prodAdded, setProdAdded] = useState([]);

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
    data["total"] = total;

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
  };

  useEffect(async () => {
    try {
      const response = await axios.get("/products");
      setListProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="rightSection">
        <FormOrder
          handleSubmit={handleSubmit}
          data={initialData}
          flag={true}
          listProducts={listProducts}
          prodAdded={prodAdded}
          setProdAdded={setProdAdded}
        />
      </div>
    </>
  );
};

export default AddProduct;
