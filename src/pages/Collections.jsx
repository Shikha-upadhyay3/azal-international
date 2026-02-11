import React, { useState } from 'react';
import { products } from '../data/products';
import './Collections.css';

const Collections = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter Logic: Search + Category
  const filteredProducts = products.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", "Hand Knotted", "Hand Tufted", "Leather Carpets", "Jute Rugs"];

  return (
    <div className="collections-page">
      <div className="collections-header">
        <h1>Our Exclusive Collections</h1>
        <p>Elevate your space with a rug that is as unique as you are.</p>
        
        {/* Search Bar */}
        <input 
          type="text" 
          placeholder="Search carpets..." 
          className="search-bar"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Filter Buttons */}
        <div className="filter-tabs">
          {categories.map(cat => (
            <button 
              key={cat}
              className={activeCategory === cat ? "btn-active" : "btn-filter"}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="img-holder">
               <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <button className="q-view">Quick View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;