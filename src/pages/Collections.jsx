import React, { useState } from 'react';
import { products } from '../data/products';
import './Collections.css';

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Hand Knotted", "Hand Tufted", "Leather Carpets", "Jute Rugs", "Flatweaves"];

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="collections-container">
      <div className="collections-header">
        <span className="gold-text">AZAL INTERNATIONAL</span>
        <h1>OUR COLLECTIONS</h1>
        
        <div className="filter-buttons">
          {categories.map(cat => (
            <button 
              key={cat}
              className={activeCategory === cat ? "active" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;