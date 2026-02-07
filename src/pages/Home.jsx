import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section with Hero Image */}
      <section className="home-hero">
        <div className="hero-overlay">
          <p className="sub-tag">LUXURY CARPETS & BESPOKE FLOOR ARTISTRY</p>
          <h1 className="hero-title">Crafting statement floors for the world's most refined interiors.</h1>
          <div className="hero-btns">
            <button className="btn-gold">Explore Collections</button>
            <button className="btn-outline-white">Talk to a Specialist</button>
          </div>
        </div>
      </section>

      {/* Featured Projects with Project Images */}
      <section className="projects-section">
        <h2 className="section-heading">Featured Projects</h2>
        <div className="projects-grid">
          
          <div className="project-card">
            <div className="img-container">
               <img src="/project1.jpg" alt="Skyline Suites" />
            </div>
            <div className="project-info">
              <h3>Skyline Suites</h3>
              <p>MODERN LIVING</p>
            </div>
          </div>

          <div className="project-card">
            <div className="img-container">
               <img src="/project2.jpg" alt="Riviera Residences" />
            </div>
            <div className="project-info">
              <h3>Riviera Residences</h3>
              <p>HERITAGE COLLECTION</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;