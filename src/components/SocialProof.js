import React from 'react';
import './SocialProof.css';

const SocialProof = () => {
  const stats = [
    { number: '50+', label: 'Projects Delivered', icon: 'fas fa-project-diagram' },
    { number: '95%', label: 'Client Satisfaction', icon: 'fas fa-smile' },
    { number: '300%', label: 'Average ROI', icon: 'fas fa-chart-line' },
    { number: '24/7', label: 'Support Available', icon: 'fas fa-clock' }
  ];

  const testimonials = [
    {
      quote: "Cactus Labs transformed our customer service with AI. We saw a 40% reduction in response time and 60% increase in customer satisfaction.",
      author: "Sarah Chen",
      position: "CTO, TechFlow Solutions",
      company: "Fortune 500"
    },
    {
      quote: "Their AI implementation increased our operational efficiency by 300%. The ROI was evident within the first quarter.",
      author: "Michael Rodriguez",
      position: "VP of Operations, DataCorp",
      company: "Series B Startup"
    },
    {
      quote: "The team's expertise in AI strategy helped us identify use cases we never considered. Game-changing results.",
      author: "Emily Johnson",
      position: "Head of Innovation, FinanceFirst",
      company: "Mid-Market"
    }
  ];

  return (
    <section className="social-proof">
      <div className="container">
        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-header">
            <h2>Trusted by Industry Leaders</h2>
            <p>Our track record speaks for itself</p>
          </div>
          
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  <i className={stat.icon}></i>
                </div>
                <div className="stat-content">
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials-section">
          <div className="testimonials-header">
            <h2>What Our Clients Say</h2>
            <p>Real results from real companies</p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>
                <blockquote>"{testimonial.quote}"</blockquote>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.position}</p>
                    <span className="company-badge">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
