import React from 'react';
import './Guarantee.css';

const Guarantee = () => {
  const guaranteeItems = [
    {
      icon: 'fas fa-chart-line',
      title: 'Results Guarantee',
      description: 'We\'re so confident in our AI solutions that if you don\'t see meaningful improvement in your business metrics, we\'ll work until you do - at no additional cost.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Satisfaction Guarantee',
      description: 'If you\'re not completely satisfied with our AI implementation and the value it brings to your business, we\'ll make it right or refund every penny.'
    },
    {
      icon: 'fas fa-infinity',
      title: 'Ongoing Support Guarantee',
      description: 'We\'ll continue to support, maintain, and evolve your AI solution to ensure it keeps delivering value as your business grows.'
    }
  ];

  return (
    <section className="guarantee-section">
      <div className="container">
        <div className="guarantee-header">
          <div className="guarantee-badge">
            <i className="fas fa-certificate"></i>
            <span>100% Confidence</span>
          </div>
          <h2>Our Unwavering Guarantee</h2>
          <p className="guarantee-subtitle">
            We're so confident in our ability to transform your business with AI that we're willing to
            back our work with our reputation and resources.
          </p>
        </div>

        <div className="guarantee-main">
          <div className="guarantee-promise">
            <div className="promise-content">
              <h3>The "AI Transformation Promise"</h3>
              <div className="promise-text">
                <p>
                  Here's our promise: Your business will be transformed through AI-powered solutions
                  that deliver measurable value. If for any reason our implementation doesn't meet
                  your expectations, we'll either:
                </p>
                <div className="promise-options">
                  <div className="promise-option">
                    <span className="option-number">1</span>
                    <p>Continue working tirelessly until your business sees the transformation it deserves</p>
                  </div>
                  <div className="promise-option">
                    <span className="option-number">2</span>
                    <p>Provide a full refund, no questions asked</p>
                  </div>
                </div>
                <div className="promise-bottom">
                  <p>
                    <strong>You literally cannot lose.</strong> We believe so strongly in our process
                    that we're willing to back it with everything we have.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="guarantee-grid">
            {guaranteeItems.map((item, index) => (
              <div key={index} className="guarantee-card">
                <div className="guarantee-icon">
                  <i className={item.icon}></i>
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="guarantee-proof">
          <div className="proof-content">
            <h3>Why We Can Make This Promise</h3>
            <div className="proof-points">
              <div className="proof-point">
                <i className="fas fa-check-circle"></i>
                <span>We've helped businesses across diverse industries achieve breakthrough results</span>
              </div>
              <div className="proof-point">
                <i className="fas fa-check-circle"></i>
                <span>Our proven methodology has been refined through years of successful implementations</span>
              </div>
              <div className="proof-point">
                <i className="fas fa-check-circle"></i>
                <span>We only partner with businesses where we're confident we can deliver exceptional value</span>
              </div>
            </div>
          </div>
        </div>

        <div className="guarantee-cta">
          <div className="cta-content">
            <h3>Ready to Transform Your Business?</h3>
            <p>
              With our guarantee, you have nothing to lose and everything to gain.
              Your AI-powered future awaits.
            </p>
            <button className="btn btn-primary guarantee-btn" onClick={() => {
              window.location.href = '/contact';
            }}>
              Start Your AI Transformation
            </button>
            <p className="cta-note">
              <i className="fas fa-lock"></i>
              Complete confidence. Guaranteed results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
