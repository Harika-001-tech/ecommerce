import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  const isAuthenticated = localStorage.getItem('x-auth-token');

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Product", path: "/product" },
  ];

  const authenticatedNav = (
    <>
      <div className="left-nav">
        <h1>Bazaar🛒</h1>
      </div>
      <div className="mid-nav">
        {navItems.map((item, index) => (
          <p key={index}><Link to={item.path}>{item.name}</Link></p>
        ))}
      </div>
      <div className="right-nav">
        <Link to='/cart'>
          <p>Go To Cart</p>
        </Link>
        <Link to='/Auth' onClick={() => {
          localStorage.removeItem('x-auth-token');
        }}>
          <p>Logout</p>
        </Link>
      </div>
    </>
  );

  const unauthenticatedNav = (
    <>
      <div className="left-nav">
        <h1>Bazaar</h1>
      </div>
      <div className="mid-nav">
        {navItems.map((item, index) => (
          <p key={index}><Link to={item.path}>{item.name}</Link></p>
        ))}
      </div>
      <div className="right-nav">
        <Link to='/Auth'>
          <p>Get Started</p>
        </Link>
      </div>
    </>
  );

  return (
    <div className="nav-parent">
      {isAuthenticated ? authenticatedNav : unauthenticatedNav}
    </div>
  );
};

export default Nav;
