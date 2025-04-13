import React, { useContext } from 'react';
import './Feature.css';
import Card from '../Card/Card';
import { Appcontext } from '../../Context/Appcontext';

const Feature = () => {
  const { isLoading, featuredProducts, error } = useContext(Appcontext);

  if (isLoading) {
    return <div className="loading-message">Please wait, loading...</div>;
  }

  if (error) {
    return <div className="error-message">There was an error loading products. Please try again later.</div>;
  }

  return (
    <>
      <div className="f-heading">
        <h1>Featured Products For You!</h1>
      </div>
      <div className="f-main">
        {featuredProducts.length > 0 ? (
          featuredProducts.map((curr) => (
            <Card key={curr.id} {...curr} />
          ))
        ) : (
          <div className="no-products">No featured products available at the moment.</div>
        )}
      </div>
    </>
  );
};

export default Feature;
