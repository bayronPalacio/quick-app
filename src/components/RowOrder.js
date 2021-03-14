import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import axios from "axios";
import { format } from "date-fns"; //Library to format date

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

  const generateOrder = async () => {
    const orderArray = [];
    const data = Object.fromEntries(orderArray.entries());
    data["order"] = order.data;
    data["company"] = {
      invoiceDate: format(new Date(), "yyyy-MM-dd"),
      Company: "Quick Inventory",
    };

    const toDb = await fetch("/addInvoice", {
      method: "post",
      body: JSON.stringify({ data }),
      headers: {
        "Content-Type": "application/json",
      },
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
        <td colSpan="2" className="center-text">
          <button className="button-icon" onClick={deleteHandler}>
            <i>
              <FaIcons.FaTrashAlt />
            </i>
          </button>
        </td>
        <td colSpan="2" className="center-text">
          <button className="button-icon" onClick={generateOrder}>
            <i>
              <FaIcons.FaTruck />
            </i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default OrderProduct;
