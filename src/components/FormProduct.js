import React, {useState} from 'react';
import { Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";

const FormProduct = ({handleSubmit, data, flag}) => {
    const [showMessage, setShowMessage] = useState(false)


    const successMessage = () => {
        if (flag) {
            setShowMessage(true)
        }
    }

    const closeMsg = () => {
        setShowMessage(false)
    }

    return(
    <Form onSubmit={handleSubmit}>
        <Form.Row>
            <Form.Group as={Col}>
                <Form.Label >Barcode</Form.Label>
                <Form.Control type="text" name="barcode" value={data.barcode}/>
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" defaultValue={data.name}/>
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="number" name="quantity" defaultValue={data.quantity} />
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group as={Col}>
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" name="price" step={0.01} precision={2} defaultValue={data.price}/>
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>Weight</Form.Label>
                <Form.Control type="number" name="weight" step={0.1} precision={2} defaultValue={data.weight}/>
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>Min. Stock</Form.Label>
                <Form.Control type="number" name="minStock" defaultValue={data.minStock} />
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group as={Col}>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" row={3} name="description" defaultValue={data.description} />
            </Form.Group>
        </Form.Row>
        <Button onClick={successMessage} variant="primary" type="submit" className="btn button-color marginBtn">
            Submit
    </Button>
    <Modal show={showMessage} onHide={closeMsg}
                size="sm"
            >
                <Modal.Body>
                    <div className="mainBackModalProduct">
                        <p>Product has been added!</p>
                        <Button variant="primary" className="btn button-color marginBtn" onClick={closeMsg}>
                            Ok
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </Form>
    );
}

export default FormProduct;