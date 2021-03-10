import React from 'react';
import FormProduct from '../components/FormProduct';

const AddProduct = () => {
    const initialData = {};

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataForm = new FormData(e.target);
        const data = Object.fromEntries(dataForm.entries());
        data['alarm'] = false

        const toDb = await fetch('/addProduct', {
            method: 'post',
            body: JSON.stringify({ data }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        // const response = await toDb.json();
        e.target.reset();
        // return(
        //     <div>
        //         <Alert color="primary">
        //             ngngh
        //         </Alert>
        //     </div>
            // <SweetAlert
            //     success
            //     title="Your product has been added."
            //     onConfirm={() => this.hideAlert()}
            //     ></SweetAlert>
        // )
    }

    return (
        <>
        
        <div className="rightSection">
            <FormProduct handleSubmit={handleSubmit} data={initialData} flag={true}/>
        </div>
        </>
    );
}

export default AddProduct