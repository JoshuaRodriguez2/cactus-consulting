import React from 'react';
import { Link } from 'react-router-dom';
import './CaseStudies.css';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 'ehr-system',
      title: 'Patient EHR System for Preventative Health Community',
      client: 'Preventative Health Community',
      industry: 'Healthcare',
      challenge: 'Need for a comprehensive electronic health record system that supports preventative care, patient engagement, and community health initiatives.',
      solution: 'Developed a full-stack EHR platform with AI-powered health insights, patient portals, and community health tracking features.',
      results: [
        'Improved patient engagement by 75%',
        'Reduced administrative overhead by 40%',
        'Enhanced preventative care outcomes'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AI/ML', 'HIPAA Compliance', 'AWS'],
      image: '/optimized.png',
      shortDescription: 'A comprehensive electronic health record system designed for preventative health communities, featuring AI-powered insights and patient engagement tools.'
    },
    {
      id: 'librarian-ai-app',
      title: 'Librarian AI Recommendation App',
      client: 'Educational Library Systems',
      industry: 'Education',
      challenge: 'Need for intelligent book recommendations based on child-generated reviews to improve reading engagement.',
      solution: 'Developed an AI-powered recommendation system using LangChain that analyzes previous book reviews created by children to suggest personalized reading materials for librarians.',
      results: [
        'Improved book recommendation accuracy by 40%',
        'Reduced time librarians spend on book selection by 60%',
        'Increased child engagement with recommended books by 35%'
      ],
      technologies: ['LangChain', 'React', 'HTML', 'CSS', 'PostgreSQL', 'Neon'],
      image: '/3.png',
      shortDescription: 'AI-powered book recommendation system for librarians, leveraging child review data to suggest personalized reading materials.'
    },
    {
      id: 'financial-trading-agent',
      title: 'AI Trading Agent System',
      client: 'Investment Management Firm',
      industry: 'Financial Services',
      challenge: 'Need for intelligent algorithmic trading system that can analyze market data, execute trades autonomously, and manage risk in real-time.',
      solution: 'Developed an AI agentic system that autonomously analyzes market trends, executes trades based on predefined strategies, and implements dynamic risk management protocols.',
      results: [
        'Increased portfolio returns by 35% through optimized trade timing',
        'Reduced trading costs by 60% with automated execution',
        'Improved risk management with real-time loss prevention',
        'Achieved 40% faster market response time'
      ],
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
      image: '/assets/marketech.png',
      shortDescription: 'Autonomous AI trading system that analyzes market data, executes trades, and manages risk in real-time for investment firms.'
    },
    {
      id: 'retail-personalization-agent',
      title: 'Smart Retail Personalization Platform',
      client: 'E-commerce Retail Chain',
      industry: 'Retail & E-commerce',
      challenge: 'Need for intelligent customer personalization system that can predict preferences, optimize inventory, and enhance shopping experiences across multiple channels.',
      solution: 'Built an AI agentic platform that analyzes customer behavior, predicts preferences, manages inventory autonomously, and delivers personalized shopping experiences.',
      results: [
        'Increased conversion rates by 45% through personalized recommendations',
        'Reduced inventory costs by 30% with predictive stock management',
        'Improved customer satisfaction scores by 55%',
        'Enhanced cross-selling revenue by 40%'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Machine Learning', 'Redis', 'Kubernetes'],
      image: '/assets/retailtech.png',
      shortDescription: 'AI-powered personalization platform that predicts customer preferences, optimizes inventory, and delivers seamless shopping experiences.'
    },
    {
      id: 'real-estate-valuation-agent',
      title: 'AI Real Estate Intelligence Platform',
      client: 'Property Investment Group',
      industry: 'Real Estate',
      challenge: 'Need for intelligent property valuation system that can analyze market trends, predict property values, and identify investment opportunities autonomously.',
      solution: 'Developed an AI agentic platform that analyzes market data, predicts property valuations, identifies investment opportunities, and generates automated market reports.',
      results: [
        'Improved valuation accuracy by 60% with AI-driven predictions',
        'Reduced research time by 75% for investment decisions',
        'Increased ROI by 40% through better opportunity identification',
        'Enhanced market analysis speed by 80%'
      ],
      technologies: ['Python', 'scikit-learn', 'React', 'FastAPI', 'PostgreSQL', 'GIS Integration'],
      image: '/assets/realestatetech.png',
      shortDescription: 'Intelligent real estate platform that predicts property values, identifies investment opportunities, and generates market insights autonomously.'
    },
    {
      id: 'agricultural-optimization-agent',
      title: 'Smart Agriculture Optimization System',
      client: 'Agricultural Cooperative',
      industry: 'Agriculture',
      challenge: 'Need for intelligent farming system that can monitor crop health, optimize irrigation, predict yields, and manage resources autonomously.',
      solution: 'Created an AI agentic system that monitors crop conditions, optimizes resource usage, predicts yields, and provides automated farming recommendations.',
      results: [
        'Increased crop yields by 35% through optimized resource management',
        'Reduced water usage by 40% with intelligent irrigation',
        'Improved harvest prediction accuracy by 85%',
        'Decreased operational costs by 25% through automation'
      ],
      technologies: ['Python', 'Computer Vision', 'IoT Integration', 'React', 'PostgreSQL', 'AWS IoT'],
      image: '/assets/agtech.jpg',
      shortDescription: 'AI-powered agricultural system that monitors crops, optimizes resources, predicts yields, and provides autonomous farming recommendations.'
    }
    /*
    {
      id: 'predictive-analytics',
      title: 'Predictive Analytics Dashboard',
      client: 'Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Difficulty predicting equipment failures and optimizing maintenance schedules.',
      solution: 'Built a machine learning model that analyzes sensor data to predict equipment failures and recommend optimal maintenance timing.',
      results: [
        'Reduced unplanned downtime by 45%',
        'Increased equipment efficiency by 25%',
        'Improved predictive accuracy by 90%'
      ],
      technologies: ['TensorFlow', 'Python', 'React', 'FastAPI', 'PostgreSQL'],
      image: '/optimized.png',
      shortDescription: 'ML-powered predictive maintenance system that optimizes equipment performance and reduces downtime.'
    }
      */
  ];

  return (
    <div className="case-studies-page">
      {/* Hero Section */}
      <section className="case-studies-hero">
        <div className="container">
          <h1>Case Studies</h1>
          <p>Real results from real clients. See how we've transformed businesses with GenAI solutions.</p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="case-studies-grid">
        <div className="container">
          <div className="case-studies-list">
            {caseStudies.map((study) => (
              <Link key={study.id} to={`/case-studies/${study.id}`} className="case-study-card">
                <div className="case-study-thumbnail">
                  <img src={study.image} alt={study.title} />
                  <div className="case-study-overlay">
                    <span className="view-details">View Details →</span>
                  </div>
                </div>
                
                <div className="case-study-content" style={{ padding: '3.5rem' }}>
                  <div className="case-study-meta" style={{ marginBottom: '2rem' }}>

                    <span className="industry-tag">{study.industry}</span>
                    <span className="client-name">{study.client}</span>
                  </div>
                  
                  <h3 className="case-study-title" style={{ marginBottom: '2rem' }}>{study.title}</h3>
                  <p className="case-study-description" style={{ marginBottom: '2rem' }}>{study.shortDescription}</p>

                  
                  <div className="case-study-tech-preview">
                    <div className="tech-tags">
                      {study.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                      {study.technologies.length > 3 && (
                        <span className="tech-tag more">+{study.technologies.length - 3} more</span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="case-studies-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to See Similar Results?</h2>
            <p>Let's discuss how we can transform your business with AI solutions.</p>
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

export default CaseStudies;
