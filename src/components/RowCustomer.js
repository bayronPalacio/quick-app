import React from "react";

const RowCustomer = ({ customer }) => {
  return (
    <>
      <tr>
        <td>{customer.Company}</td>
        <td>{customer.Name + " " + customer.Last}</td>
        <td>{customer.Address}</td>
        <td>{customer.City}</td>
        <td>{customer.Province}</td>
      </tr>
    </>
  );
};

export default RowCustomer;
