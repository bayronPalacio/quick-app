import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import Row from '../components/Row';
import axios from 'axios';

const Inventory = () => {
    const [listProducts, setListProducts] = useState([]);


    useEffect(async () => {
        // const response = await result.json();
        // setListProducts(response);
        // console.log(listProducts);
        axios.get('/products')
            .then(function (response) {
                console.log(response.data);
                setListProducts(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })

    }, []);

    console.log(listProducts);

    return (
        <div className="rightSection">
            {/* <h1>Inventory</h1> */}
            <Table responsive variant="dark">
                <thead>
                    <tr>
                        <th>Barcode</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Min Stock</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {listProducts.map((product) => (
                        <Row 
                            key={product._id} 
                            product={product} 
                            listProducts={listProducts}
                            setListProducts={setListProducts} />
                    ))}
                </tbody>
            </Table>



        </div>
    );
}

export default Inventory;
