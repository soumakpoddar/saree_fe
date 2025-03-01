// src/components/PurchaseForm.js
import React, { useState } from 'react';
import './styles/PurchaseForm.css';

const PurchaseForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', email: '' });
  };

  return (
    <form className="purchase-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <button type="submit">Send Request</button>
    </form>
  );
};

export default PurchaseForm;
