import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Col, Button } from "react-bootstrap";

const Registration = () => {
  const [validated, setValidated] = useState(false);
  const history = useHistory();

  const initialData = {};
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const dataForm = new FormData(event.target);
      const data = Object.fromEntries(dataForm.entries());
      const result = await fetch("/registration", {
        method: "post",
        body: JSON.stringify({
          data,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (result.ok) {
        history.push("/login");
      } else {
        console.log("User was not added");
      }
    }
    setValidated(true);
  };

  return (
    <>
      <Modal
        show={true}
        dialogClassName={"primaryModal"}
        className="mx-auto"
        centered
        size="lg"
      >
        <Modal.Body>
          <div className="mx-auto">
            <h1 className="h1-title">Create your account</h1>
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="p-text"
            >
              <Form.Row className="formPadding">
                <Form.Group as={Col} md="6">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First Name"
                    name="name"
                    defaultValue={initialData.name}
                  />
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last Name"
                    name="last"
                    defaultValue={initialData.last}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row className="formPadding">
                <Form.Group as={Col} md="6">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Quick Inventory"
                    name="company"
                    defaultValue={initialData.company}
                  />
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="123 Street Ave"
                    name="address"
                    defaultValue={initialData.address}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row className="formPadding">
                <Form.Group as={Col} md="6">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="City"
                    name="city"
                    defaultValue={initialData.city}
                  />
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>Province/State</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Province/State"
                    name="province"
                    defaultValue={initialData.province}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row className="formPadding">
                <Form.Group as={Col} md="6">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="email@service.com"
                    name="email"
                    defaultValue={initialData.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    name="password"
                    defaultValue={initialData.password}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row className="formPadding">
                <Form.Group>
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row className="formPadding">
                <Button
                  className="btn button-color marginBtn"
                  type="submit"
                  justify
                >
                  Create an Account
                </Button>
              </Form.Row>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Registration;
