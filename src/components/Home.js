// src/components/Home.js
import React from 'react';
import Navbar from './Navbar';
import SareeList from './SareeList';
import { sareeData } from './sareeData';

const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>Bruno's Creations</h1>
        <SareeList sarees={sareeData} />
      </div>
    </>
  );
};

export default Home;