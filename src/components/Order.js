import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import axios from "axios";

const OrderProduct = ({ order, listOrders, setListOrders }) => {
  const deleteHandler = () => {
    setListOrders(listOrders.filter((el) => el._id !== order._id));
    axios
      .delete(`/deleteOrder/${order._id}`)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <tr>
        <td>{order.data.orderId}</td>
        <td>{order.data.status}</td>
        <td>{order.data.customer}</td>
        <td className="center-text">{order.data.total}</td>
        <td className="center-text">{order.data.orderDate}</td>
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
