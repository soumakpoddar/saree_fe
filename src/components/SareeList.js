// src/components/SareeList.js
import React from 'react';
import SareeItem from './SareeItem';
import './styles/SareeList.css';

const SareeList = ({ sarees }) => {
  return (
    <div className="saree-list">
      {sarees.map((saree) => (
        <SareeItem key={saree.id} saree={saree} />
      ))}
    </div>
  );
};

export default SareeList;
