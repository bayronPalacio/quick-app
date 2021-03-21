import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import RowInvoice from "../components/RowInvoice";
import Cookies from "js-cookie";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const Invoices = () => {
  const [listInvoices, setInvoices] = useState([]);

  useEffect(async () => {
    const arrayInvoices = [];
    try {
      const response = await axios.get("/invoices", {
        params: Cookies.get("Company"),
      });
      setInvoices(response.data);
      response.data.map((item) => {
        arrayInvoices.push(item.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="rightSection">
        <h1>Invoices</h1>
        <MDBTable responsive scrollY maxHeight="900px" bordered large dark>
          <MDBTableHead textWhite>
            <tr>
              <th>Invoice Id</th>
              <th>Customer</th>
              <th className="center-text">Order Date</th>
              <th className="center-text">Invoice Date</th>
              <th className="center-text">Amount</th>
              <th colSpan="2" className="center-text">
                See PDF
              </th>
            </tr>
          </MDBTableHead>
          <MDBTableBody textWhite>
            {listInvoices.map((invoice) => (
              <RowInvoice
                key={invoice._id}
                invoice={invoice}
                listInvoices={listInvoices}
              />
            ))}
          </MDBTableBody>
        </MDBTable>
      </div>
    </>
  );
};

export default Invoices;
