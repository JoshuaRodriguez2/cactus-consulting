import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const servicesRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-in');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const servicesData = [
    {
      icon: 'fas fa-code',
      title: 'Fullstack AI Development',
      description: 'End-to-end custom AI apps and platforms. We integrate GenAI into your systems with scalable, high-performance, cost-efficient deployment.',
      features: ['Custom AI Applications', 'System Integration', 'Scalable Deployment']
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'GenAI Consulting',
      description: 'We identify and prioritize AI use cases tailored to your industry, build strategy roadmaps for adoption, and help you go from idea to working prototype.',
      features: ['Use Case Identification', 'Strategy Roadmaps', 'Prototype Development']
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Workforce Education & Training',
      description: 'Workshops and training programs to upskill teams in GenAI tools. Hands-on sessions for developers, business leaders, and non-technical staff.',
      features: ['Team Workshops', 'Hands-on Training', 'Practical Use Cases']
    }
  ];

  return (
    <section id="services" className="services" ref={servicesRef}>
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Professional GenAI solutions to accelerate your business transformation</p>
        </div>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* View All Services Button */}
        <div className="view-all-services">
          <Link to="/services" className="btn btn-outline">
            View All Services
          </Link>
        </div>
        
        {/* CTA Section */}
        <div className="services-cta">
          <div className="cta-content">
            <h3>Ready to Transform Your Business with AI?</h3>
            <p>Let's discuss how GenAI can accelerate your growth and streamline operations.</p>
            <button className="btn btn-primary" onClick={() => {
              window.location.href = '/#contact';
            }}>
              Schedule Free AI Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
