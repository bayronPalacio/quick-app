import Modal from "react-bootstrap/Modal";
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Registration = () => {

    // const { name, last, company, address, city, province, email, password } = req.body;

    const [name, setName] = useState('');
    const [last, setLast] = useState('');
    const [company, setCompany] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const AddNewUser = async () => {
        const result = await fetch('/registration', {
            method: 'post',
            body: JSON.stringify({ name, last, company, address, city, province, email, password: name, last, company, address, city, province, email, password }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const response = await result.json();
        console.log(response);
    }

    return (
        <>
            <Modal show={true} dialogClassName={"primaryModal"}>
                <Modal.Body>
                    <h1 className="h1-title">Create your account</h1>
                    {/* <form action="/registration" method="post"> */}
                    <form>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label for="validationCustom01">First name</label>
                                <input type="text" value={name} onChange={(event) => setName(event.target.value)} className="form-control" id="validationCustom01" placeholder="Mark" required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="validationCustom02">Last name</label>
                                <input type="text" value={last} onChange={(event) => setLast(event.target.value)} className="form-control" id="validationCustom02" placeholder="Otto" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label for="validationCustom03">Company Name</label>
                                <input type="text" value={company} onChange={(event) => setCompany(event.target.value)} className="form-control" id="validationCustom03" placeholder="Quick Inventory" required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="validationCustom05">Address</label>
                                <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} className="form-control" id="validationCustom05" placeholder="123 Street Ave" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label for="validationCustom03">City</label>
                                <input type="text" value={city} onChange={(event) => setCity(event.target.value)} className="form-control" id="validationCustom03" placeholder="City" required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="validationCustom05">Province/State</label>
                                <input type="text" value={province} onChange={(event) => setProvince(event.target.value)} className="form-control" id="validationCustom05" placeholder="Province/State" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label for="validationCustom03">Email</label>
                                <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control" id="validationCustom03" placeholder="email@service.com" required />
                                <div className="invalid-feedback">
                                    Please provide a valid email.
                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="validationCustom05">Password</label>
                                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="form-control" id="validationCustom05" placeholder="Password" required />
                                <small id="passwordHelpBlock" className="form-text text-muted">
                                    Your password must be 8-20 characters long, contain letters and numbers.
                  </small>
                                <div className="invalid-feedback">
                                    Please provide a valid password
                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="form-group">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label" for="invalidCheck">
                                        Agree to terms and conditions
                        </label>
                                    <div className="invalid-feedback">
                                        You must agree before submitting.
                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" onClick={() => AddNewUser()} className="btn button-color">Create an Account</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Registration;