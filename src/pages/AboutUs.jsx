import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page-wrapper">
      <div className="about-content-layer">
        {/* Heritage Section */}
        <div className="about-header">
          <span className="gold-tag">OUR HERITAGE</span>
          <h1>A FAMILY LEGACY</h1>
          <p className="hero-p">
            Founded on a love for rugs that spans generations, AZAL INTERNATIONAL 
            brings over two decades of expert craftsmanship from Bhadohi, India.
          </p>
        </div>

        {/* Mission/Vision */}
        <div className="about-grid">
          <div className="glass-card">
            <h2>OUR MISSION</h2>
            <p>To create exquisite rugs that elevate environments by blending timeless techniques with contemporary styles.</p>
          </div>
          <div className="glass-card">
            <h2>OUR VISION</h2>
            <p>To be a leader in sustainable, innovative flooring solutions that blend style, comfort, and durability.</p>
          </div>
        </div>

        {/* Custom Section */}
        <div className="unique-custom-section">
          <h2 className="glitch-gold">CUSTOM MADE RUGS</h2>
          <p>Your vision, our craftsmanship. Any size, any color, any design.</p>
          <div className="time-frame">
            <span className="label">PRODUCTION WINDOW</span>
            <span className="weeks">4 TO 12 WEEKS</span>
          </div>
        </div>

        {/* PDF Contact Info Section */}
        <div className="pdf-contact-info">
          <h3>GET IN TOUCH</h3>
          <p><strong>Address:</strong> Bhadohi, Uttar Pradesh, India</p>
          <p><strong>Email:</strong> azalinternational1@gmail.com</p>
          <p className="direct-tag">Direct from Manufacturer to your doorstep.</p>
        </div>
      </div>
    </div>
  );
};

export default About;