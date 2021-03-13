import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import axios from "axios";
import { format } from "date-fns"; //Library to format date

const OrderProduct = ({ invoice, listInvoices }) => {
  const createPdf = async () => {
    await axios.post(`createPdf/${invoice}`);
  };

  return (
    <>
      <tr>
        <td>{"1"}</td>
        <td>{invoice.data.order.customer}</td>
        <td className="center-text">{invoice.data.order.orderDate}</td>
        <td className="center-text">{invoice.data.company.invoiceDate}</td>
        <td className="center-text">{invoice.data.order.total}</td>
        <td className="center-text">
          <button className="button-icon" onClick={createPdf}>
            <i>
              <FaIcons.FaFilePdf />
            </i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default OrderProduct;
