import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";

const OrderProduct = ({ product, prodAdded, setProdAdded }) => {
  const deleteHandler = () => {
    setProdAdded(prodAdded.filter((el) => el.barcode !== product.barcode));
  };

  const quantityHandler = (e) => {
    const total = (product.price * e.target.value).toFixed(2);
    setProdAdded(
      prodAdded.map((item) => {
        if (item.barcode === product.barcode) {
          return {
            ...item,
            quantity: e.target.value,
            total: total,
          };
        }
        return item;
      })
    );
  };

  return (
    <>
      <tr>
        <td>{product.barcode}</td>
        <td>{product.name}</td>
        <td className="center-text">{product.price}</td>
        <td className="center-text">
          <input
            type="number"
            defaultValue={product.quantity}
            style={{
              backgroundColor: "#1f1f1f",
              width: "20%",
              color: "white",
              textAlign: "center",
            }}
            onChange={quantityHandler}
          />
        </td>
        <td className="center-text">${product.total}</td>
        <td className="center-text">
          <button className="button-icon" onClick={deleteHandler}>
            <i>
              <FaIcons.FaTrashAlt />
            </i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default OrderProduct;
