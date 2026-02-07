 import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* --- HERO SECTION --- */}
      <section className="hero-section">
        {/* Is overlay se image thodi dark hogi aur text clear dikhega */}
        <div className="hero-overlay"></div> 
        
        <div className="hero-content">
          <span className="hero-subtitle">LUXURY CARPETS & BESPOKE FLOOR ARTISTRY</span>
          <h1 className="hero-title">
            Crafting statement floors for the world's most refined interiors.
          </h1>
          <p className="hero-description">
            Azal International curates premium carpets, rugs, and tailored floor solutions for 
            hospitality, retail, and residential spaces.
          </p>
          <div className="hero-btns">
            <button className="btn-gold">Explore Collections</button>
            <button className="btn-outline">Talk to a Specialist</button>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="services-section">
        <div className="section-header">
          <span className="subtitle">EXCEPTIONAL CRAFTSMANSHIP</span>
          <h2 className="title">Our Bespoke Services</h2>
          <div className="gold-line"></div>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">✦</div>
            <h3>Bespoke Design</h3>
            <p>Tailored flooring patterns designed exclusively for your space, blending artistic vision with functional elegance.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">✦</div>
            <h3>Premium Installation</h3>
            <p>Expert installation by master craftsmen, ensuring every tile and carpet is laid with millimeter precision.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">✦</div>
            <h3>Global Sourcing</h3>
            <p>Direct access to the world's finest marbles and luxury carpets from exclusive international quarries.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;