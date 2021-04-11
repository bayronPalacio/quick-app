import React, { useState, useEffect } from "react";
import Order from "../components/RowOrder";
import axios from "axios";
import * as FaIcons from "react-icons/fa";
import { CSVLink } from "react-csv";
import { format } from "date-fns";
import FileUpload from "../components/FileUpload";
import Modal from "react-bootstrap/Modal";
import Cookies from "js-cookie";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const headers = [
  { label: "Order ID", key: "orderId" },
  { label: "Status", key: "status" },
  { label: "Customer", key: "customer.company" },
  { label: "Amount", key: "total" },
  { label: "Date", key: "orderDate" },
];

const Orders = () => {
  const [listOrders, setListOrders] = useState([]);
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(async () => {
    const arrayOrders = [];
    try {
      const response = await axios.get("/orders", {
        params: Cookies.get("Company"),
      });
      setListOrders(response.data);
      response.data.map((item) => {
        arrayOrders.push(item.data);
      });
      setData(arrayOrders);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const closeHandler = () => {
    setOpenModal(false);
  };

  const clickHandler = () => {
    setOpenModal(true);
  };
  return (
    <>
      <div className="rightSection">
        <h1>All Orders</h1>
        <h5>
          <CSVLink
            data={data}
            headers={headers}
            filename={
              "Orders" + format(new Date(), "MM-dd-yyyy HH:MM:SS") + ".csv"
            }
          >
            EXPORT
          </CSVLink>
        </h5>
        <MDBTable responsive scrollY maxHeight="85vh" bordered large hover dark>
          <MDBTableHead textWhite style={{ backgroundColor: "black" }}>
            <tr>
              <th className="center-text ">Order Id</th>
              <th className="center-text ">Status</th>
              <th className="center-text ">Customer</th>
              <th className="center-text ">Amount</th>
              <th className="center-text">Date</th>
              <th colSpan="2" className="center-text">
                Remove
              </th>
              <th colSpan="2" className="center-text">
                Create Invoice
              </th>
            </tr>
          </MDBTableHead>
          <MDBTableBody textWhite>
            {listOrders.map((order) => (
              <Order
                key={order._id}
                order={order}
                listOrders={listOrders}
                setListOrders={setListOrders}
              />
            ))}
          </MDBTableBody>
        </MDBTable>
      </div>
    </>
  );
};

export default Orders;
