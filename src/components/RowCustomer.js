import React from "react";

const RowCustomer = ({ customer }) => {
  return (
    <>
      <tr>
        <td>{customer.data.company}</td>
        <td>{customer.data.name + " " + customer.data.last}</td>
        <td>{customer.data.address}</td>
        <td className="center-text">{customer.data.city}</td>
        <td className="center-text">{customer.data.province}</td>
        <td className="center-text">{customer.data.country}</td>
      </tr>
    </>
  );
};

export default RowCustomer;
