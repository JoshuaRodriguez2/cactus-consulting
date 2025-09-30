import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [notification, setNotification] = useState(null);
  const contactRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      showNotification('Please fill in all fields', 'error');
      return;
    }
    
    if (!isValidEmail(formData.email)) {
      showNotification('Please enter a valid email address', 'error');
      return;
    }
    
    // Show success message and reset form
    showNotification('Thank you! We\'ll get back to you soon.', 'success');
    setFormData({ name: '', email: '', service: '', message: '' });
    
    // Submit to Netlify (this will happen in the background)
    const form = e.target;
    const netlifyFormData = new FormData(form);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(netlifyFormData).toString()
    }).catch(error => {
      console.error('Form submission error:', error);
    });
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      details: 'cactusconsulting@outlook.com'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      details: 'Tempe, AZ'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss how AI can transform your business</p>
        </div>
        <div className="contact-content" ref={contactRef}>
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-item">
                <i className={info.icon}></i>
                <div>
                  <h4>{info.title}</h4>
                  <p>{info.details}</p>
                </div>
              </div>
            ))}
          </div>
          <form 
            name="contact" 
            netlify
            className="contact-form" 
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a Service</option>
                <option value="prototyping">Fullstack Prototyping</option>
                <option value="consulting">Strategic Consulting</option>
                <option value="education">Workforce Education</option>
                <option value="architecture">Architecture Design</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your project"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      {notification && (
        <div className={`notification notification-${notification.type}`}>
          <div className="notification-content">
            <span className="notification-message">{notification.message}</span>
            <button 
              className="notification-close"
              onClick={() => setNotification(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
