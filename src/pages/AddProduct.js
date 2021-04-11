import React, { useState } from "react";
import FormProduct from "../components/FormProduct";
import Cookies from "js-cookie";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const AddProduct = () => {
  const initialData = {};
  const [validated, setValidated] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const history = useHistory();

  const successMessage = () => {
    setShowMessage(true);
  };

  const closeMsg = () => {
    setShowMessage(false);
    history.push("/inventory");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      const dataForm = new FormData(e.target);
      const data = Object.fromEntries(dataForm.entries());
      data["alarm"] = false;

      await fetch("/addProduct", {
        method: "post",
        body: JSON.stringify({ data, company: Cookies.get("Company") }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      successMessage();
    }
    setValidated(true);
  };

  return (
    <>
      <div className="rightSection">
        <FormProduct
          handleSubmit={handleSubmit}
          data={initialData}
          validated={validated}
        />
        <Modal show={showMessage} onHide={closeMsg} size="sm">
          <Modal.Body>
            <div className="mainBackModalProduct">
              <p>Product has been added!</p>
              <Button
                variant="primary"
                className="btn button-color marginBtn"
                onClick={closeMsg}
              >
                Ok
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default AddProduct;
