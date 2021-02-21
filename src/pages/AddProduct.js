import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddProduct = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataForm = new FormData(e.target);
        const data = Object.fromEntries(dataForm.entries());

        const toDb = await fetch('/addProduct', {
            method: 'post',
            body: JSON.stringify({ data }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const response = await toDb.json();
        console.log(response);
    }

    return (
        <div className="rightSection">
            <Form onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Barcode</Form.Label>
                        <Form.Control type="text" name="barcode" />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control type="number" name="quantity" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" name="price" step={0.01} precision={2} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Weight</Form.Label>
                        <Form.Control type="number" name="weight" step={0.1} precision={2} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Min. Stock</Form.Label>
                        <Form.Control type="number" name="minStock" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" row={3} name="description" />
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default AddProduct