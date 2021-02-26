import React, {useState} from 'react';
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
    const editHandler = () => {
        setOpenModal(true);
    }

    const closeHandler = () => {
        setOpenModal(false);
    }

    const handleSubmit = async (e) => {
        const dataForm = new FormData(e.target);
        const data = Object.fromEntries(dataForm.entries());
        product.data = data;
        axios.put('/updateProduct/', {payload : product})
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
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
            </tr>
            <Modal show={openModal} onHide={closeHandler} 
                size="lg"
            >
                <Modal.Body>
                    <FormProduct handleSubmit={handleSubmit} data={product.data}/>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Row;