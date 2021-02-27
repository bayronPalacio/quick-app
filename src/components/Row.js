import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import axios from 'axios';
import Modal from "react-bootstrap/Modal";
import FormProduct from './FormProduct';

const Row = ({ product, listProducts, setListProducts }) => {
    const [openModal, setOpenModal] = useState(false)

    const deleteHandler = () => {
        setListProducts(listProducts.filter((el) => el._id !== product._id))

        axios.delete(`/deleteProduct/${product._id}`)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const updateProduct = () => {
        axios.put('/updateProduct/', { payload: product })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const toggleAlarm = () => {
        setListProducts(listProducts.map((item) => {
            if (item.data.barcode === product.data.barcode) {
                item.data.alarm = !item.data.alarm
                return item;
            }
            return item;
        }))
        updateProduct()
    }

    const editHandler = () => {
        setOpenModal(true);
    }

    const closeHandler = () => {
        setOpenModal(false);
    }

    const handleSubmit = async (e) => {
        const dataForm = new FormData(e.target);
        const data = Object.fromEntries(dataForm.entries());
        data['alarm'] = product.data.alarm;
        product.data = data;

        console.log(data.quantity + " " + data.minStock)
        //alarm if quantity match min stock
        if (data.quantity*1 <= data.minStock*1 && data.alarm){
            axios.post('/emailOOS/', { payload: product })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

        axios.put('/updateProduct/', { payload: product })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
        updateProduct()
    }

    return (
        <>
            <tr>
                <td>{product.data.barcode}</td>
                <td>{product.data.name}</td>
                <td className="center-text">{product.data.quantity}</td>
                <td className="center-text">{product.data.minStock}</td>
                <td className="center-text">${product.data.price}</td>
                <td className="center-text"><button className="button-icon" onClick={editHandler}><i><FaIcons.FaEdit /></i></button></td>
                <td className="center-text"><button className="button-icon" onClick={deleteHandler}><i><FaIcons.FaTrashAlt /></i></button></td>
                <td className="center-text" style={{ backgroundColor: product.data.alarm ? 'red' : undefined }}><button className="button-icon" onClick={toggleAlarm}><i><FaIcons.FaBell /></i></button></td>
            </tr>
            <Modal show={openModal} onHide={closeHandler} dialogClassName={"primaryModal"} 
                size="lg"
            >
                <Modal.Body>
                <div className="h1-title mainBackModalSignUp">
                    <FormProduct handleSubmit={handleSubmit} data={product.data} />
                 </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Row;