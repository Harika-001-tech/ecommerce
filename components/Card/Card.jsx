import React from 'react';
import './Card.css';
import { NavLink } from 'react-router-dom';

const Card = ({ id, name, image, category, price }) => {
  return (
    <NavLink to={`singleproduct/${id}`}>
      <div className="card">
        <div className="card-image">
          <img src={image?.[0] || 'fallback-image.jpg'} alt={name} />
        </div>
        <div className="card-text">
          <div className="up-text">
            <h1>{name}</h1>
            <h2>₹{price}</h2>
          </div>
          <p className="detail">{category}</p>
          <button className="cart-button">Add To Cart 👉</button>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
