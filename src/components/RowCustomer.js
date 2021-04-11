import React from "react";

const RowCustomer = ({ customer }) => {
  return (
    <>
      <tr>
        <td>{customer.data.company}</td>
        <td>{customer.data.name + " " + customer.data.last}</td>
        <td>{customer.data.address}</td>
        <td>{customer.data.city}</td>
        <td>{customer.data.province}</td>
      </tr>
    </>
  );
};

export default RowCustomer;
