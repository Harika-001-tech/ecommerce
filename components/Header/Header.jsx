import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="left-header">
        <h1>Grab Upto 50% off on</h1>
        <h1>Selected Products</h1>
        <p>
          We are the world's best e-commerce online store and nominated for the best serving agency across the world. Trust us for better quality!
        </p>
        <p className='check-button'>
          Check Now 🛍️
        </p>
      </div>
      <div className="right-header">
        <img src="/ecommerce-admin/public/image.png" alt="Main Promotion" className="promotion-image" />
      </div>
    </div>
  );
};

export default Header;
