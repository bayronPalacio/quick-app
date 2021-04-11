import React, { useState, useEffect } from "react";
import FormOrder from "../components/FormOrder";
import axios from "axios";
import Cookies from "js-cookie";
import Message from "../components/Message";

const AddProduct = () => {
  const initialData = {};
  const [listProducts, setListProducts] = useState([]);
  const [listCustomers, setListCustomers] = useState([]);
  const [prodAdded, setProdAdded] = useState([]);
  const [orderId, setOrderId] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [customer, setCustomer] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataForm = new FormData(e.target);
    const data = Object.fromEntries(dataForm.entries());
    data["status"] = "In Progress";
    if (prodAdded.length === 0) {
      showAlert("Please add at least one product");
    } else {
      data["customer"] = customer;
      data["products"] = prodAdded;
      const total = prodAdded.reduce(
        (total, currValue) => parseFloat(total) + parseFloat(currValue.total),
        0
      );
      data["total"] = total.toFixed(2);

      const toDb = await fetch("/addOrder", {
        method: "post",
        body: JSON.stringify({ data, company: Cookies.get("Company") }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (toDb.ok) {
        console.log("order added");
        showAlert("Order has been created!");
      }

      e.target.reset();
      setProdAdded([]);
      getOrderId();
    }
  };

  useEffect(async () => {
    try {
      let response = await axios.get("/products", {
        params: Cookies.get("Company"),
      });
      setListProducts(response.data);
      getOrderId();

      response = await axios.get("/customers", {
        params: Cookies.get("Company"),
      });
      setListCustomers(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getOrderId = async () => {
    try {
      const lastOrderId = await axios.get("/lastOrderId", {
        params: Cookies.get("Company"),
      });
      setOrderId(lastOrderId.data);
    } catch (error) {
      console.log(error);
    }
  };

  const showAlert = (msg) => {
    setMessage(msg);
    setShowMessage(true);
  };

  return (
    <>
      <div className="rightSection">
        <FormOrder
          handleSubmit={handleSubmit}
          data={initialData}
          listProducts={listProducts}
          setListProducts={setListProducts}
          listCustomers={listCustomers}
          prodAdded={prodAdded}
          setProdAdded={setProdAdded}
          orderId={orderId}
          message={message}
          showMessage={showMessage}
          setShowMessage={setShowMessage}
          setCustomer={setCustomer}
        />
        <Message
          message={message}
          showMessage={showMessage}
          setShowMessage={setShowMessage}
        ></Message>
      </div>
    </>
  );
};

export default AddProduct;
