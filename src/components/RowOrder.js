import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import axios from "axios";
import { format } from "date-fns"; //Library to format date
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Cookies from "js-cookie";

const OrderProduct = ({ order, listOrders, setListOrders }) => {
  const [showMessage, setShowMessage] = useState(false);

  const closeMsg = () => {
    setShowMessage(false);
  };

  const genAlert = () => {
    setShowMessage(true);
  };

  const info = JSON.stringify({
    id: order._id,
    company: Cookies.get("Company"),
  });

  const deleteHandler = () => {
    setListOrders(listOrders.filter((el) => el._id !== order._id));
    axios
      .delete(`/deleteOrder/${info}`)
      .then(function (response) {})
      .catch(function (error) {});
  };

  const generateInvoice = async () => {
    // Update order status to COMPLETED
    setListOrders(
      listOrders.map((item) => {
        if (item.data.orderId === order.data.orderId) {
          item.data.status = "Completed";
          return item;
        }
        return item;
      })
    );
    updateOrder();

    // Create Invoice Object to insert into DB
    const orderArray = [];
    const data = Object.fromEntries(orderArray.entries());
    const invoiceId = await axios.get("lastInvoiceId", {
      params: Cookies.get("Company"),
    });
    data["invoiceId"] = invoiceId.data;
    data["order"] = order.data;
    data["company"] = {
      invoiceDate: format(new Date(), "yyyy-MM-dd"),
      Company: Cookies.get("Company"),
    };

    await fetch("/addInvoice", {
      method: "post",
      body: JSON.stringify({ data }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const updateOrder = () => {
    axios
      .put("/updateOrder/", { payload: order, company: Cookies.get("Company") })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <tr
        style={{
          backgroundColor: order.data.status === "Completed" ? "green" : "",
        }}
      >
        <td>{order.data.orderId}</td>
        <td>{order.data.status}</td>
        <td>{order.data.customer.company}</td>
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
          <button
            className="button-icon"
            onClick={
              order.data.status === "Completed" ? genAlert : generateInvoice
            }
          >
            <i>
              <FaIcons.FaTruck />
            </i>
          </button>
        </td>
      </tr>
      <Modal show={showMessage} onHide={closeMsg} size="sm">
        <Modal.Body>
          <div className="mainBackModalProduct">
            <p>Invoice has been already created</p>
            <Button
              variant="primary"
              className="btn button-color marginBtn"
              onClick={closeMsg}
            >
              Ok
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default OrderProduct;
