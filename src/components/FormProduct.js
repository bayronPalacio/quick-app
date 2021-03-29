import React, { useState } from "react";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SearchAddress from "../components/SearchAddress";

const FormProduct = ({ handleSubmit, data, validated }) => {
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Barcode</Form.Label>
          <Form.Control
            required
            type="text"
            name="barcode"
            value={data.barcode}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a barcode
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            defaultValue={data.name}
          />
          <Form.Control.Feedback type="invalid">
            Please enter product name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            required
            type="number"
            name="quantity"
            defaultValue={data.quantity}
          />
          <Form.Control.Feedback type="invalid">
            Please enter quantity
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <SearchAddress />
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Price</Form.Label>
          <Form.Control
            required
            type="number"
            name="price"
            step={0.01}
            precision={2}
            defaultValue={data.price}
          />
          <Form.Control.Feedback type="invalid">
            Please enter price
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Weight</Form.Label>
          <Form.Control
            type="number"
            name="weight"
            step={0.1}
            precision={2}
            defaultValue={data.weight}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Min. Stock</Form.Label>
          <Form.Control
            required
            type="number"
            name="minStock"
            defaultValue={data.minStock}
          />
          <Form.Control.Feedback type="invalid">
            Please enter min. stock
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            as="textarea"
            row={3}
            name="description"
            defaultValue={data.description}
          />
          <Form.Control.Feedback type="invalid">
            Please enter description
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Button
        // onClick={successMessage}
        variant="primary"
        type="submit"
        className="btn button-color marginBtn"
      >
        Submit
      </Button>
    </Form>
  );
};

export default FormProduct;
