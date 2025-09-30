import React from 'react';
import './ServicesPage.css';

const ServicesPage = () => {
  const services = [
    {
      icon: 'fas fa-code',
      title: 'Fullstack AI Development',
      description: 'End-to-end custom AI apps and platforms. We integrate GenAI into your systems with scalable, high-performance, cost-efficient deployment.',
      features: [
        'Custom AI Applications',
        'System Integration', 
        'Scalable Deployment',
        'Performance Optimization',
        'Security Implementation',
        'API Development'
      ]
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'GenAI Consulting',
      description: 'We identify and prioritize AI use cases tailored to your industry, build strategy roadmaps for adoption, and help you go from idea to working prototype.',
      features: [
        'Use Case Identification',
        'Strategy Roadmaps',
        'Prototype Development',
        'Tool Selection',
        'Implementation Planning',
        'ROI Analysis'
      ]
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Workforce Education & Training',
      description: 'Workshops and training programs to upskill teams in GenAI tools. Hands-on sessions for developers, business leaders, and non-technical staff.',
      features: [
        'Team Workshops',
        'Hands-on Training',
        'Practical Use Cases',
        'Custom Curricula',
        'Certification Programs',
        'Ongoing Support'
      ]
    },
    {
      icon: 'fas fa-sitemap',
      title: 'AI Strategy & Architecture',
      description: 'Comprehensive AI strategy development and system architecture design to ensure your AI initiatives align with business objectives.',
      features: [
        'Strategic Planning',
        'Architecture Design',
        'Technology Assessment',
        'Risk Management',
        'Governance Framework',
        'Scalability Planning'
      ]
    },
    /* {
      icon: 'fas fa-chart-line',
      title: 'Data Analytics & Insights',
      description: 'Transform your data into actionable insights with advanced analytics, machine learning models, and interactive dashboards.',
      features: [
        'Data Pipeline Development',
        'ML Model Development',
        'Interactive Dashboards',
        'Predictive Analytics',
        'Data Visualization',
        'Performance Monitoring'
      ]
    }, */
    {
      icon: 'fas fa-robot',
      title: 'AI Process Automation',
      description: 'Streamline business processes with intelligent automation solutions that reduce manual work and improve efficiency.',
      features: [
        'Process Analysis',
        'Workflow Automation',
        'Document Processing',
        'Intelligent Routing',
        'Quality Assurance',
        'Performance Tracking'
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Our Services</h1>
            <p>Professional GenAI solutions to accelerate your business transformation</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-banner">
                <div className="banner-content">
                  <div className="banner-left">
                    <div className="service-icon">
                      <i className={service.icon}></i>
                    </div>
                    <div className="service-info">
                      <h3>{service.title}</h3>
                      <p className="service-description">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="banner-right">
                    <div className="service-features">
                      <ul>
                        {service.features.slice(0, 4).map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="service-cta">
                      <a href="/contact" className="btn btn-outline">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business with AI?</h2>
            <p>Let's discuss how GenAI can accelerate your growth and streamline operations.</p>
            <button className="btn btn-primary" onClick={() => {
              window.location.href = '/contact';
            }}>
              Schedule Free AI Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;