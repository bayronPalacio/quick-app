import React from 'react';

const Row = ({product, listProducts, setListProducts}) => {
    return (
        <tr>
            <td>{product.data.barcode}</td>
            <td>{product.data.name}</td>
            <td>{product.data.quantity}</td>
            <td>{product.data.minStock}</td>
            <td>{product.data.price}</td>
        </tr>
    );
}

export default Row;