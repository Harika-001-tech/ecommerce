import React from "react";
import "./Productdata.css";

const Productdata = ({ data = {} }) => {
  const { 
    name = "BAG", 
    description = "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", 
    price = "100.00", 
    stars = 0, 
    stock = "Out of Stock", 
    company = "PUMA" 
  } = data;

  return (
    <div className="pro-text">
      <h1>{name}</h1>
      <p>{description}</p>
      <h2>$ {price}</h2>
      <p>Company: {company}</p>
      <p>Stock: {stock}</p>
      <p>Rating: {"★".repeat(stars)}{"☆".repeat(5 - stars)}</p>

      <div 
        className={`buy ${stock === "Out of Stock" ? "disabled" : ""}`} 
        onClick={() => {
          if (stock !== "Out of Stock") {
            console.log(`Purchased ${name}`);
          }
        }}
      >
        {stock === "Out of Stock" ? "Out of Stock" : "Buy Now"}
      </div>
    </div>
  );
};

export default Productdata;
