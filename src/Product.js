import React from "react";

const Product = ({
  title,
  JobName,
  CompanyName,
  Experience,
  Salary,
  Location,
  Description
}) => {
  return (
    <article>
      <h2>{JobName}</h2>
      <h3>{CompanyName}</h3>
      <p>{Description}</p>
      <h4>{title}</h4>
      <h4>{Salary}</h4>
    </article>
  );
};

export default Product;
