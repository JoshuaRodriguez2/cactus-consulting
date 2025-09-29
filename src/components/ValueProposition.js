import React from 'react';
import './ValueProposition.css';

const ValueProposition = () => {
  const benefits = [
    {
      icon: 'fas fa-rocket',
      title: 'Fast Implementation',
      description: 'Get AI solutions deployed efficiently with rapid time-to-value'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Proven ROI',
      description: 'Average 300% ROI within 6 months of implementation'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Enterprise Security',
      description: 'Bank-level security with full compliance guarantee'
    }
  ];

  return (
    <section className="value-proposition">
      <div className="container">
        <div className="value-content">
          <div className="value-header">
            <h2>Why Leading Companies Choose Cactus Labs AI</h2>
            <p>We don't just build AI solutions - we transform businesses with strategic implementation that delivers measurable results.</p>
          </div>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">
                  <i className={benefit.icon}></i>
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
