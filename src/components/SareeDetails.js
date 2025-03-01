// src/components/SareeDetails.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { sareeData } from './sareeData';
import Navbar from './Navbar';
import PurchaseForm from './PurchaseForm';
import SareeCarousel from './SareeCarousel';
import './styles/SareeDetails.css';

const SareeDetails = () => {
  const { id } = useParams();
  const saree = sareeData.find(item => item.id === parseInt(id));
  const [showForm, setShowForm] = useState(false);

  const handleRequestClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (userInfo) => {
    console.log('Purchase Request:', { saree, userInfo });
    alert(`Request sent for ${saree.name}!`);
    setShowForm(false);
  };

  if (!saree) {
    return (
      <>
        <Navbar />
        <div style={{ padding: '20px' }}>
          <h2>Saree not found.</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="saree-details-container">
        <div className="saree-details-image">
          {saree.images && saree.images.length > 1 ? (
            <SareeCarousel images={saree.images} />
          ) : (
            <img src={saree.homeImage} alt={saree.name} />
          )}
        </div>
        <div className="saree-details-info">
          <h1>{saree.name}</h1>
          <p className="saree-price">Price: ₹{saree.price}</p>
          <p className="saree-description">{saree.description}</p>
          {!showForm && (
            <button className="request-button" onClick={handleRequestClick}>
              Request to Buy
            </button>
          )}
          {showForm && <PurchaseForm onSubmit={handleSubmit} />}
        </div>
      </div>
    </>
  );
};

export default SareeDetails;
