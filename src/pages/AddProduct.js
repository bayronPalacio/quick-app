import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';



const mql = window.matchMedia(`(min-width: 800px)`);

const AddProduct = () => {
    return (
        <>
            <Container>
                <Col>
                    <Sidebar />
                </Col>
                <Col>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mainBack">
                        <div className="table-responsive sizeDiv" id="firstSection">
                            <p className="text-justify">
                            </p>
                            <div className="container">
                                <div className="row">
                                    <div className="col-8">
                                        <form className="row g-3" action="/addProduct" method="post">
                                            <div className="col-12">
                                                <div className="form-row">
                                                    <div className="form-group col-md-5">
                                                        <label for="inputBarcode" className="form-label">Barcode</label>
                                                        <input type="text" className="form-control" name="barcode" />
                                                    </div>
                                                    <div className="form-group col-md-5">
                                                        <label for="inputName" className="form-label">Name</label>
                                                        <input type="text" className="form-control" name="name" />
                                                    </div>
                                                    <div className="form-group col-md-2">
                                                        <label for="inputQuantity" className="form-label">Quantity</label>
                                                        <input type="number" className="form-control" name="quantity" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-row">
                                                    <div className="form-group col-md-4">
                                                        <label for="inputColor" className="form-label">Color</label>
                                                        <input type="text" className="form-control" name="color" />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label for="inputDimension" className="form-label">Dimensions</label>
                                                        <input type="text" className="form-control" name="dimensions" />
                                                    </div>
                                                    <div className="form-group col-md-2">
                                                        <label for="inputMinStock" className="form-label">MinStock</label>
                                                        <input type="number" className="form-control" name="minStock" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <label for="inputDescription" className="form-label">Description</label>
                                                <textarea rows="8" className="form-control" aria-label="With textarea" name="description"></textarea>
                                            </div>

                                            <div className="col-12">
                                                <label for="blank" className="form-label"></label>
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="btn button-color" value="Submit">Add Product</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </Col>
            </Container>
        </>
    );
}

export default AddProduct;