import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {



  const socialLinks = [
    { icon: 'fab fa-linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'fab fa-twitter', href: '#', label: 'Twitter' },
    { icon: 'fab fa-github', href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <Link to="/" className="footer-logo">
              <span>CACTUS AI</span>
            </Link>
            <p>Empowering businesses with AI-driven solutions for the future.</p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Cactus AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
