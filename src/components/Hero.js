import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.floating-element');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 2}s`;
    });
  }, []);

  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="title-container">
            <h1 className="hero-title">
              <span className="gradient-text">Scale Your Business</span>
              <span className="title-line-two">with AI Solutions</span>
            </h1>
          </div>
          <div className="subtitle-container">
            <p className="hero-subtitle">
              Stop losing to competitors who use AI. Get custom AI solutions that deliver 300% ROI
              with our proven implementation process tailored to your business needs.
            </p>
          </div>
          
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={handleContactClick}>
              Get Started
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-elements">
            <div className="floating-element element-1">
              <i className="fas fa-robot"></i>
            </div>
            <div className="floating-element element-2">
              <i className="fas fa-code"></i>
            </div>
            <div className="floating-element element-3">
              <i className="fas fa-chart-line"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
