import React from "react";
import Product from "./Product";

const ProductList = (props) => {
  const { products } = props;

  const renderProducts = products.map(
    ({ id, title, JobName, CompanyName, Description, Salary }) => {
      return (
        <li key={id}>
          <Product
            title={title}
            JobName={JobName}
            CompanyName={CompanyName}
            Description={Description}
            Salary={Salary}
          />
        </li>
      );
    }
  );

  return <ul>{renderProducts}</ul>;
};

export default ProductList;
