// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="navbar-logo-link">
          <img src="https://png.pngtree.com/png-vector/20250211/ourmid/pngtree-traditional-saree-logo-vector-png-image_15448784.png" alt="Company Logo" />
          <span>Bruno's Sarees</span>
        </Link>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/" className="navbar-link">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
