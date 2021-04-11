import React, { useState } from "react";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListOrderProducts from "../components/ListOrderProducts";
import { format } from "date-fns";
import Message from "../components/Message";
// import ReactHTMLDatalist from "react-html-datalist";

const FormOrder = ({
  handleSubmit,
  data,
  listProducts,
  setListProducts,
  listCustomers,
  prodAdded,
  setProdAdded,
  orderId,
  setCustomer,
}) => {
  const [option, setOption] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  const customerHandler = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    setCustomer(listCustomers[index - 1].data);
  };

  const optionHandler = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index].text;
    let value = e.target.value.split(",");
    setOption({
      name: label,
      barcode: value[0],
      price: value[1],
      quantity: 1,
      total: value[1],
    });
    setListProducts(listProducts.filter((el) => el.barcode !== value[0]));
  };

  const addHandler = () => {
    if (option === "" || option.name === "Select product") {
      showAlert("Please select a product");
    } else if (prodAdded.some((item) => item.barcode === option.barcode)) {
      showAlert("Product has been already added!");
    } else {
      setProdAdded([...prodAdded, option]);
    }
    // console.log(prodAdded);
  };

  const showAlert = (msg) => {
    setMessage(msg);
    setShowMessage(true);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Order ID</Form.Label>
            <Form.Control
              type="text"
              name="orderId"
              defaultValue={orderId}
              // value={data.orderId}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="orderDate"
              value={
                data.orderDate === undefined
                  ? format(new Date(), "yyyy-MM-dd")
                  : data.orderDate
              }
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Customer</Form.Label>
            {/* <Form.Control
              type="text"
              name="customer"
              defaultValue={data.customer}
            /> */}
            <Form.Control
              as="select"
              placeholder={data.customer}
              className="mr-sm-2"
              onChange={customerHandler}
            >
              <option key="090909" value="0">
                {data.customer}
              </option>
              {listCustomers.map((customer, index) => {
                return (
                  <option key={index} value={customer.data}>
                    {customer.data.company}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Note (Optional)</Form.Label>
            <Form.Control
              as="textarea"
              row={3}
              name="note"
              defaultValue={data.note}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row className="align-items-center">
          <Col xs="md" className="my-1">
            <Form.Control
              as="select"
              placeholder="Select"
              className="mr-sm-2"
              onChange={optionHandler}
            >
              <option key="090909" value="0">
                Select product{""}
              </option>
              {listProducts.map((product, index) => {
                return (
                  <option
                    key={index}
                    value={[product.data.barcode, product.data.price]}
                  >
                    {product.data.name}
                  </option>
                );
              })}
            </Form.Control>
          </Col>
          <Col xs="auto" className="my-1">
            <Button
              className="btn button-color marginBtn"
              variant="outline-secondary"
              onClick={addHandler}
            >
              Add
            </Button>
          </Col>
        </Form.Row>
        <hr className="hrStyling"></hr>
        <div style={{ marginTop: "1%" }}>
          <ListOrderProducts
            prodAdded={prodAdded}
            setProdAdded={setProdAdded}
          />
        </div>

        <Button
          // onClick={showAlert()}
          variant="primary"
          type="submit"
          className="btn button-color marginBtn"
        >
          Create Order
        </Button>
      </Form>
      <Message
        message={message}
        showMessage={showMessage}
        setShowMessage={setShowMessage}
      ></Message>
    </>
  );
};

export default FormOrder;
