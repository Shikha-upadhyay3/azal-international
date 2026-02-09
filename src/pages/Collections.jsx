import React, { useState } from 'react';
import { products } from '../data/products'; 
import './Collections.css';

const Collections = () => {
  const [searchTerm, setSearchTerm] = useState(""); 

  
  const filteredProducts = products.filter((val) => {
    if (searchTerm === "") {
      return val;
    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
               val.category.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
  });

  return (
    <div className="collections-container">
      <div className="search-section">
        <h1>Our Premium Collections</h1>
        <input 
          type="text" 
          placeholder="Search carpets by name or material..." 
          onChange={(event) => setSearchTerm(event.target.value)} 
        /> {/* Search Bar [cite: 69, 74] */}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} /> {/* PNG Images  */}
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <button className="view-btn">Quick View</button> {/* Quick View [cite: 72, 164] */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;