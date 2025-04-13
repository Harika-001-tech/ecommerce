import React, { useEffect, useState } from 'react';
import './Splash.css';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';

const Splash = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('x-auth-token');
    setIsAuthenticated(!!token); 
  }, []);

  return (
    <div className="check">
      {isAuthenticated ? (
        
        <Home />
      ) : (
        
        <div className="main">
          <h1 className="heading">
            Welcome to the <span>E-Bazaar</span>
          </h1>
          
          <Link to="/Auth">
            <h2 className="h2hai">Get Started</h2>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Splash;
