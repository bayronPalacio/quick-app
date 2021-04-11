import React, { useState } from "react";
import FormCustomer from "../components/FormCustomer";
import Cookies from "js-cookie";
import Message from "../components/Message";

const AddCustomer = () => {
  const initialData = {};
  const [validated, setValidated] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  const [inputAddress, setInputAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      const dataForm = new FormData(e.target);
      const data = Object.fromEntries(dataForm.entries());
      data["address"] = inputAddress;

      const toDb = await fetch("/addCustomer", {
        method: "post",
        body: JSON.stringify({ data, company: Cookies.get("Company") }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (toDb.ok) {
        console.log("customer added");
        showAlert("Customer has been created!");
      }
    }
    e.target.reset();
    setInputAddress("");
  };

  const showAlert = (msg) => {
    setMessage(msg);
    setShowMessage(true);
  };

  return (
    <>
      <div className="rightSection">
        <FormCustomer
          handleSubmit={handleSubmit}
          data={initialData}
          validated={validated}
          setInputAddress={setInputAddress}
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

export default AddCustomer;
