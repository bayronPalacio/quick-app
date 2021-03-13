import React, { useState, useEffect } from 'react';
import FormOrder from '../components/FormOrder';
import axios from 'axios';
import ListOrderProducts from '../components/ListOrderProducts'


const AddProduct = () => {
    const initialData = {};
    const [listProducts, setListProducts] = useState([]);
    const [prodAdded, setProdAdded] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataForm = new FormData(e.target);
        const data = Object.fromEntries(dataForm.entries());
        data['products'] = prodAdded;

        console.log(data);

        const toDb = await fetch('/addOrder', {
            method: 'post',
            body: JSON.stringify({ data }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(toDb.response);

        // const response = await toDb.json();
        e.target.reset();
    }

    useEffect(async () => {
        try {
            const response = await axios.get('/products');
            setListProducts(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <>
            <div className="rightSection">
                <FormOrder handleSubmit={handleSubmit}
                    data={initialData}
                    flag={true} 
                    listProducts={listProducts} 
                    prodAdded={prodAdded}
                    setProdAdded={setProdAdded}/>
                <ListOrderProducts 
                    prodAdded={prodAdded}
                    setProdAdded={setProdAdded}/>
            </div>
        </>
    );
}

export default AddProduct