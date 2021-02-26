import React from 'react';
import FormProduct from '../components/FormProduct';

const AddProduct = () => {
    const initialData = {};

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataForm = new FormData(e.target);
        const data = Object.fromEntries(dataForm.entries());
        console.log(JSON.stringify(data));

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
            <FormProduct handleSubmit={handleSubmit} data={initialData}/>
        </div> 
    );
} 

export default AddProduct