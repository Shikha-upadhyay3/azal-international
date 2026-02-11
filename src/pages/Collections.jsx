import React, { useState } from 'react';
import { products } from '../data/products';
import './Collections.css';

const Collections = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter Logic [cite: 13]
  const filteredProducts = products.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", "Hand Knotted", "Hand Tufted", "Leather Carpets", "Jute Rugs"];

  return (
    <div className="collections-container">
      <header className="collections-header">
        <h1>Our Exclusive Collections</h1>
        <p>Elevate your space with a rug that is as unique as you are[cite: 1].</p>
        
        {/* Search Bar [cite: 13] */}
        <input 
          type="text" 
          placeholder="Search by name..." 
          className="search-bar"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Filter Panel [cite: 13] */}
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
      </header>

      {/* Product Grid  */}
      <div className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <button className="quick-view">Quick View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;