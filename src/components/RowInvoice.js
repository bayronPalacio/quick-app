import React from "react";
import * as FaIcons from "react-icons/fa";
import axios from "axios";

const OrderProduct = ({ invoice }) => {
  const createPdf = async (e) => {
    e.preventDefault();
    axios
      .get("/createPdf/", { params: invoice, responseType: "blob" })
      .then(function (response) {
        const file = new Blob([response.data], { type: "application/pdf" });
        //Build a URL from the file
        const fileURL = URL.createObjectURL(file);
        //Open the URL on new Window
        window.open(fileURL);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <tr>
        <td>{invoice.data.invoiceId}</td>
        <td>{invoice.data.order.customer}</td>
        <td className="center-text">{invoice.data.order.orderDate}</td>
        <td className="center-text">{invoice.data.company.invoiceDate}</td>
        <td className="center-text">{invoice.data.order.total}</td>
        <td className="center-text">
          <a className="button-icon" onClick={createPdf}>
            <i>
              <FaIcons.FaFilePdf />
            </i>
          </a>  
        </td>
      </tr>
    </>
  );
};

export default OrderProduct;
