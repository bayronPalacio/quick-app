import React, { useEffect, useState } from "react";
import axios from "axios";
import RowCustomer from "../components/RowCustomer";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const Customers = () => {
  const [listCustomers, setCustomers] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios.get("/customers");
      setCustomers(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="rightSection">
        <h1>Customers</h1>
        <MDBTable
          responsive
          scrollY
          maxHeight="900px"
          bordered
          large
          hover
          dark
        >
          <MDBTableHead textWhite style={{ backgroundColor: "black" }}>
            <tr>
              <th className="center-text">Company Name</th>
              <th className="center-text">Contact Name</th>
              <th className="center-text">Address</th>
              <th className="center-text">City</th>
              <th className="center-text">Province</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody textWhite>
            {listCustomers.map((customer) => (
              <RowCustomer customer={customer} />
            ))}
          </MDBTableBody>
        </MDBTable>
      </div>
    </>
  );
};

export default Customers;
