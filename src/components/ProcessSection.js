import React from 'react';
import './ProcessSection.css';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We analyze your business needs and identify high-impact AI opportunities.',
      icon: 'fas fa-search'
    },
    {
      number: '02',
      title: 'Proof of Concept',
      description: 'Build and test a working prototype to validate the solution approach.',
      icon: 'fas fa-flask'
    },
    {
      number: '03',
      title: 'Development & Integration',
      description: 'Full-scale development with seamless integration into your existing systems.',
      icon: 'fas fa-code'
    },
    {
      number: '04',
      title: 'Deployment & Training',
      description: 'Launch your AI solution and train your team for maximum adoption.',
      icon: 'fas fa-rocket'
    },
    {
      number: '05',
      title: 'Ongoing Optimization',
      description: 'Continuous monitoring and improvement to maximize performance and ROI.',
      icon: 'fas fa-chart-line',
      duration: 'Ongoing'
    }
  ];

  return (
    <section className="process-section">
      <div className="container">
        <div className="process-header">
          <h2>Our Proven 5-Step Process</h2>
          <p>From concept to deployment with guaranteed results and ongoing support</p>
        </div>
        
        <div className="process-timeline">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">
                <span>{step.number}</span>
              </div>
              
              <div className="step-content">
                <div className="step-header">
                  <div className="step-icon">
                    <i className={step.icon}></i>
                  </div>
                  <div className="step-info">
                    <h3>{step.title}</h3>
                  </div>
                </div>
                <p>{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <div className="connector-line"></div>
                  <div className="connector-arrow">
                    <i className="fas fa-arrow-down"></i>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="process-cta">
          <div className="cta-content">
            <h3>Ready to Get Started?</h3>
            <p>Let's discuss your AI transformation in a free 30-minute consultation</p>
            <button className="btn btn-primary" onClick={() => {
              window.location.href = '/contact';
            }}>
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
