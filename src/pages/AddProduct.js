import React from "react";
import FormProduct from "../components/FormProduct";
import Cookies from "js-cookie";

const AddProduct = () => {
  const initialData = {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataForm = new FormData(e.target);
    const data = Object.fromEntries(dataForm.entries());
    data["alarm"] = false;

    const toDb = await fetch("/addProduct", {
      method: "post",
      body: JSON.stringify({ data, company: Cookies.get("Company") }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    e.target.reset();
  };

  return (
    <>
      <div className="rightSection">
        <FormProduct
          handleSubmit={handleSubmit}
          data={initialData}
          flag={true}
        />
      </div>
    </>
  );
};

export default AddProduct;
