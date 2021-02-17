import React from 'react';

const AddProduct = () => {
    return (       
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 mainBack">
            <div class="table-responsive sizeDiv" id="firstSection">
                <p class="text-justify">
                </p>
                <div class="container">
                    <div class="row">
                        <div class="col-8">
                            <form class="row g-3" action="/addProduct" method="post">
                                <div class="col-12">
                                    <div class="form-row">
                                        <div class="form-group col-md-5">
                                            <label for="inputBarcode" class="form-label">Barcode</label>
                                            <input type="text" class="form-control" name="barcode" />
                                        </div>
                                        <div class="form-group col-md-5">
                                            <label for="inputName" class="form-label">Name</label>
                                            <input type="text" class="form-control" name="name" />
                                        </div>
                                        <div class="form-group col-md-2">
                                            <label for="inputQuantity" class="form-label">Quantity</label>
                                            <input type="number" class="form-control" name="quantity" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label for="inputColor" class="form-label">Color</label>
                                            <input type="text" class="form-control" name="color" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputDimension" class="form-label">Dimensions</label>
                                            <input type="text" class="form-control" name="dimensions" />
                                        </div>
                                        <div class="form-group col-md-2">
                                            <label for="inputMinStock" class="form-label">MinStock</label>
                                            <input type="number" class="form-control" name="minStock" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <label for="inputDescription" class="form-label">Description</label>
                                    <textarea rows="8" class="form-control" aria-label="With textarea" name="description"></textarea>
                                </div>

                                <div class="col-12">
                                    <label for="blank" class="form-label"></label>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn button-color" value="Submit">Add Product</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default AddProduct;