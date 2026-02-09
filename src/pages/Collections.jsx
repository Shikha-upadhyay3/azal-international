import React, { useState } from 'react';
import { products } from '../data/products'; // Ensure ye file bani ho
import './Collections.css';

const Collections = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="collections-page">
      <div className="collections-header">
        <span className="gold-subtitle">OUR CATALOGUE</span>
        <h1>Luxury Collections</h1>
        <input 
          type="text" 
          placeholder="Search by name, material or category..." 
          className="search-input"
          onChange={(e) => setSearchTerm(e.target.value)}
        /> [cite: 69, 74-78]
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="img-container">
              <img src={product.image} alt={product.name} /> [cite: 41-43]
              <div className="overlay">
                <button className="quick-view">Quick View</button> [cite: 72]
              </div>
            </div>
            <div className="info">
              <h3>{product.name}</h3>
              <p>{product.category} | {product.material}</p>
              <span className="price">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;