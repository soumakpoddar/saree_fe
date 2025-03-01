// src/components/SareeItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/SareeItem.css';

const SareeItem = ({ saree }) => {
  return (
    <div className="saree-card">
      <div className="saree-card-image">
        <img src={saree.homeImage} alt={saree.name} />
      </div>
      <div className="saree-card-content">
        <h3>{saree.name}</h3>
        <p>Price: ₹{saree.price}</p>
        <Link to={`/saree/${saree.id}`} className="details-button">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SareeItem;
