import React from "react";
import OrderProduct from "./OrderProduct";
import Table from "react-bootstrap/Table";

const ListOrderProducts = ({ prodAdded, setProdAdded }) => {
  return (
    <>
      <Table
        responsive="sm"
        style={{ backgroundColor: "#1f1f1f" }}
        className="p-text"
      >
        <thead>
          <tr>
            <th>Barcode</th>
            <th>Name</th>
            <th className="center-text">Cost</th>
            <th className="center-text ">Quantity</th>
            <th className="center-text">Total</th>
            <th colSpan="2" className="center-text">
              Remove
            </th>
          </tr>
        </thead>
        <tbody>
          {prodAdded.map((product) => (
            <OrderProduct
              key={product._id}
              product={product}
              prodAdded={prodAdded}
              setProdAdded={setProdAdded}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ListOrderProducts;
