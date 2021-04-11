import React, { useState } from "react";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SearchAddress from "../components/SearchAddress";

const FormCustomer = ({ handleSubmit, data, validated, setInputAddress }) => {
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="6">
          <Form.Label>Contact Information</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First Name"
            name="name"
            defaultValue={data.name}
          />
          <Form.Control.Feedback type="invalid">
            Please enter name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label> &nbsp;</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last Name"
            name="last"
            defaultValue={data.last}
          />
          <Form.Control.Feedback type="invalid">
            Please enter last name
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Company Name"
            name="company"
            defaultValue={data.company}
          />
          <Form.Control.Feedback type="invalid">
            Please enter Company name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Address</Form.Label>
          <SearchAddress
            setInputAddress={setInputAddress}
            setCity={setCity}
            setProvince={setProvince}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6">
          <Form.Label>City</Form.Label>
          <Form.Control
            disabled
            type="text"
            placeholder="City"
            name="city"
            defaultValue={city}
          />
          <Form.Control.Feedback type="invalid">
            Please enter city
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Province/State</Form.Label>
          <Form.Control
            disabled
            type="text"
            placeholder="Province/State"
            name="province"
            defaultValue={province}
          />
          <Form.Control.Feedback type="invalid">
            Please enter province
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Button
        variant="primary"
        type="submit"
        className="btn button-color marginBtn"
      >
        Create Customer
      </Button>
    </Form>
  );
};

export default FormCustomer;
