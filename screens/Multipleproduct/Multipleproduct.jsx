import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';

const fallbackImg =
  'https://img.freepik.com/free-photo/creative-reels-composition_23-2149711507.jpg?t=st=1744534777~exp=1744538377~hmac=bec524386491d8ce81ab428b68a0dca78bc8a6371b2c7eff28b654e25c4e1748&w=1380';

const Multipleproduct = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.pujakaitem.com/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data); // Assuming the API returns an array of products
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures it only runs once on mount

  if (isLoading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!products?.length) {
    return <div>No products available at the moment.</div>;
  }

  return (
    <>
      <div className="f-heading">
        <h1>Checkout Our All Projects</h1>
      </div>
      <div className="f-main">
        {products.map(({ id, image, ...curr }) => {
          
          const img = image || fallbackImg;

          return <Card key={id} {...curr} image={img} />;
        })}
      </div>
    </>
  );
};

export default Multipleproduct;
