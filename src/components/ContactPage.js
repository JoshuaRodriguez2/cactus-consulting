import React, { useState, useEffect, useRef } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    message: '',
    firstName: '',
    lastName: '',
    jobTitle: '',
    companyName: '',
    email: '',
    phone: ''
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
    if (!formData.message || !formData.firstName || !formData.lastName || !formData.jobTitle || !formData.companyName || !formData.email) {
      showNotification('Please fill in all required fields', 'error');
      return;
    }
    
    if (!isValidEmail(formData.email)) {
      showNotification('Please enter a valid email address', 'error');
      return;
    }
    
    // Let Netlify handle the form submission
    // The form will submit to Netlify and redirect to success page
    e.target.submit();
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      details: 'cactusconsulting@outlook.com',
      link: 'mailto:cactusconsulting@outlook.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      details: '(480) 555-0123',
      link: 'tel:+14805550123'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      details: 'Tempe, AZ',
      link: null
    }
  ];

  return (
    <div className="contact-page">
      <div className="container">
        {/* Hero Section */}
        <div className="contact-hero">
          <h1>Get in Touch</h1>
          <p>Ready to transform your business with AI? Let's discuss your project and how we can help you achieve your goals.</p>
        </div>

        <div className="contact-content" ref={contactRef}>
          {/* Contact Information */}
          <div className="contact-info-section">
            <h2>Contact Information</h2>
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    <i className={info.icon}></i>
                  </div>
                  <div className="contact-details">
                    <h3>{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="contact-link">
                        {info.details}
                      </a>
                    ) : (
                      <p>{info.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <form 
              name="contact-page" 
              netlify
              className="contact-form" 
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us how we can help *"
                  rows="6"
                  required
                ></textarea>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name *"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name *"
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    placeholder="Job title *"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Company name *"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Business/work email *"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone number"
                />
              </div>
              
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
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
    </div>
  );
};

export default ContactPage;
