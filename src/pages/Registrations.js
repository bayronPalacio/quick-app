import React from "react";

const Registration = () => {
    return (
        <>
            <h1 class="h1-title">Create your account</h1>
            <form action="/signUp" method="post" class="needs-validation" novalidate>
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <label for="validationCustom01">First name</label>
                        <input type="text" class="form-control" id="validationCustom01" placeholder="Mark" name="first" required />
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="validationCustom02">Last name</label>
                        <input type="text" class="form-control" id="validationCustom02" placeholder="Otto" required />
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <label for="validationCustom03">Company Name</label>
                        <input type="text" class="form-control" id="validationCustom03" placeholder="Quick Inventory" required />
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="validationCustom05">Address</label>
                        <input type="text" class="form-control" id="validationCustom05" placeholder="123 Street Ave" required />
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <label for="validationCustom03">City</label>
                        <input type="text" class="form-control" id="validationCustom03" placeholder="City" required />
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="validationCustom05">Province/State</label>
                        <input type="text" class="form-control" id="validationCustom05" placeholder="Province/State" required />
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <label for="validationCustom03">Email</label>
                        <input type="text" class="form-control" id="validationCustom03" placeholder="email@service.com" required />
                        <div class="invalid-feedback">
                            Please provide a valid email.
                </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="validationCustom05">Password</label>
                        <input type="password" class="form-control" id="validationCustom05" placeholder="Password" required />
                        <small id="passwordHelpBlock" class="form-text text-muted">
                            Your password must be 8-20 characters long, contain letters and numbers.
                  </small>
                        <div class="invalid-feedback">
                            Please provide a valid password
                </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                            <label class="form-check-label" for="invalidCheck">
                                Agree to terms and conditions
                        </label>
                            <div class="invalid-feedback">
                                You must agree before submitting.
                        </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <button class="btn button-color" type="submit" value="Submit">Create an Account</button>
                </div>
            </form>
        </>
    );
}

export default Registration;