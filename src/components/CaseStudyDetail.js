import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './CaseStudyDetail.css';

const CaseStudyDetail = () => {
  const { id } = useParams();

  // This would typically come from an API or database
  const caseStudies = {
    'ehr-system': {
      id: 'ehr-system',
      title: 'Patient EHR System for Preventative Health Community',
      client: 'Preventative Health Community',
      industry: 'Healthcare',
      challenge: 'The client needed a comprehensive electronic health record system that could support preventative care initiatives, patient engagement, and community health tracking. Their existing paper-based system was inefficient, error-prone, and couldn\'t provide the insights needed for proactive health management.',
      solution: 'We developed a full-stack EHR platform with AI-powered health insights, patient portals, and community health tracking features. The system includes secure patient data management, automated health risk assessments, and predictive analytics for preventative care recommendations.',
      results: [
        'Improved patient engagement by 75% through intuitive patient portals',
        'Reduced administrative overhead by 40% with automated workflows',
        'Enhanced preventative care outcomes with AI-powered risk assessments',
        'Achieved 99.9% HIPAA compliance and data security',
        'Reduced patient wait times by 60%'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AI/ML', 'HIPAA Compliance', 'AWS', 'Redis', 'Docker'],
      image: '/optimized.png',
      fullDescription: 'This comprehensive EHR system was designed specifically for preventative health communities, focusing on proactive health management rather than reactive treatment. The platform integrates advanced AI algorithms to analyze patient data and provide personalized health recommendations.',
      implementation: 'The project was implemented over 8 months using an agile methodology, with regular stakeholder feedback and iterative development. We prioritized security and compliance from the start, ensuring all HIPAA requirements were met.',
      impact: 'The system has transformed how the community approaches healthcare, shifting from reactive treatment to proactive prevention. Patients are more engaged in their health journey, and healthcare providers have better insights for personalized care planning.'
    },
    'financial-trading-agent': {
      id: 'financial-trading-agent',
      title: 'AI Trading Agent System',
      client: 'Investment Management Firm',
      industry: 'Financial Services',
      challenge: 'The client needed an intelligent algorithmic trading system capable of analyzing vast amounts of market data in real-time, executing trades autonomously based on predefined risk parameters, and adapting to market conditions without human intervention. Their existing manual trading process was slow, prone to emotional decision-making, and couldn\'t capitalize on microsecond market opportunities.',
      solution: 'We developed a sophisticated AI agentic system that employs advanced machine learning algorithms to analyze market trends, sentiment data, economic indicators, and historical patterns. The system autonomously executes trades based on multiple predefined strategies while implementing dynamic risk management protocols, position sizing algorithms, and real-time loss prevention mechanisms.',
      results: [
        'Increased portfolio returns by 35% through optimized trade timing and strategy execution',
        'Reduced trading costs by 60% with automated execution eliminating emotional trading decisions',
        'Improved risk management with real-time loss prevention and dynamic position sizing',
        'Achieved 40% faster market response time compared to manual trading',
        'Enhanced portfolio diversification through algorithmic strategy optimization',
        'Reduced operational overhead by 70% through automation'
      ],
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Apache Kafka'],
      image: '/assets/marketech.png',
      fullDescription: 'A cutting-edge AI trading agent system that revolutionizes algorithmic trading through autonomous decision-making, real-time market analysis, and sophisticated risk management. The system processes millions of data points per second to identify optimal trading opportunities while maintaining strict risk controls.',
      implementation: 'The project was implemented over 6 months using advanced distributed computing architecture. We integrated multiple data sources including real-time market feeds, news sentiment analysis, and economic indicators. The system underwent rigorous backtesting and paper trading before live deployment.',
      impact: 'The AI trading system has transformed the firm\'s investment approach, delivering consistent returns while significantly reducing risk exposure. The autonomous nature of the system allows for 24/7 market monitoring and instant response to trading opportunities that human traders might miss.'
    },
    'librarian-ai-app': {
      id: 'librarian-ai-app',
      title: 'Librarian AI Recommendation App',
      client: 'Educational Library Systems',
      industry: 'Education',
      challenge: 'Need for intelligent book recommendations based on child-generated reviews to improve reading engagement and help librarians make data-driven suggestions.',
      solution: 'Developed an AI-powered recommendation system using LangChain that analyzes previous book reviews created by children to suggest personalized reading materials for librarians.',
      results: [
        'Improved book recommendation accuracy by 40%',
        'Reduced time librarians spend on book selection by 60%',
        'Increased child engagement with recommended books by 35%'
      ],
      technologies: ['LangChain', 'React', 'HTML', 'CSS', 'PostgreSQL', 'Neon'],
      image: '/assets/3.png',
      fullDescription: 'An intelligent AI recommendation system that empowers librarians to make data-driven book suggestions for children. The application analyzes previous book reviews created by children to generate personalized reading recommendations, making the library experience more engaging and effective.',
      implementation: 'The project was implemented over 4 months using modern web technologies. We built a responsive React frontend with intuitive librarian UI, integrated LangChain for AI-powered recommendations, and set up a PostgreSQL database hosted on Neon for scalable data management.',
      impact: 'The system has transformed how librarians approach book recommendations, shifting from intuition-based selection to data-driven insights. Children are more engaged with their reading materials, and librarians can provide more personalized and effective suggestions.'
    },
    'retail-personalization-agent': {
      id: 'retail-personalization-agent',
      title: 'Smart Retail Personalization Platform',
      client: 'E-commerce Retail Chain',
      industry: 'Retail & E-commerce',
      challenge: 'The client needed an intelligent customer personalization system that could predict individual preferences across multiple channels, optimize inventory management autonomously, and deliver seamless omnichannel shopping experiences. Their existing systems were fragmented, data-siloed, and couldn\'t provide real-time personalization at scale.',
      solution: 'We built a comprehensive AI agentic platform that integrates customer behavior analysis, predictive modeling, autonomous inventory optimization, and cross-channel personalization. The system uses advanced machine learning algorithms to analyze purchase patterns, browsing behavior, social media sentiment, and external market data to deliver hyper-personalized shopping experiences.',
      results: [
        'Increased conversion rates by 45% through AI-powered personalized recommendations',
        'Reduced inventory costs by 30% with predictive stock management and automated reordering',
        'Improved customer satisfaction scores by 55% through seamless personalization',
        'Enhanced cross-selling revenue by 40% with intelligent product suggestions',
        'Reduced cart abandonment by 35% through targeted retargeting campaigns',
        'Increased average order value by 25% through optimized product bundling'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Machine Learning', 'Redis', 'Kubernetes', 'TensorFlow', 'Apache Spark'],
      image: '/assets/retailtech.png',
      fullDescription: 'An intelligent retail personalization platform that revolutionizes e-commerce through AI-driven customer insights, autonomous inventory management, and seamless omnichannel experiences. The system creates personalized shopping journeys for millions of customers while optimizing inventory and supply chain operations.',
      implementation: 'The project was implemented over 9 months using microservices architecture and cloud-native technologies. We integrated data from multiple sources including e-commerce platforms, POS systems, social media, and third-party market data. The platform underwent extensive A/B testing and gradual rollout to ensure optimal performance.',
      impact: 'The personalization platform has transformed the retail chain\'s customer experience, creating highly engaged, loyal customers while significantly improving operational efficiency. The autonomous nature of the system allows for continuous optimization without human intervention.'
    },
    'real-estate-valuation-agent': {
      id: 'real-estate-valuation-agent',
      title: 'AI Real Estate Intelligence Platform',
      client: 'Property Investment Group',
      industry: 'Real Estate',
      challenge: 'The client needed an intelligent property valuation system that could analyze complex market trends, predict property values with high accuracy, and identify investment opportunities autonomously. Their existing manual valuation process was time-consuming, subjective, and couldn\'t scale to handle large portfolios or market-wide analysis.',
      solution: 'We developed an AI agentic platform that combines machine learning algorithms, GIS integration, market data analysis, and automated reporting. The system analyzes property characteristics, neighborhood trends, economic indicators, comparable sales, and external factors to generate accurate valuations and investment recommendations.',
      results: [
        'Improved valuation accuracy by 60% with AI-driven predictions compared to traditional methods',
        'Reduced research time by 75% for investment decisions through automated analysis',
        'Increased ROI by 40% through better opportunity identification and timing',
        'Enhanced market analysis speed by 80% enabling real-time portfolio optimization',
        'Reduced valuation costs by 50% through automation and efficiency gains',
        'Improved risk assessment accuracy by 65% through comprehensive market analysis'
      ],
      technologies: ['Python', 'scikit-learn', 'React', 'FastAPI', 'PostgreSQL', 'GIS Integration', 'TensorFlow', 'AWS'],
      image: '/assets/realestatetech.png',
      fullDescription: 'An intelligent real estate intelligence platform that revolutionizes property valuation and investment analysis through autonomous market analysis, predictive modeling, and automated reporting. The system processes vast amounts of property data, market trends, and economic indicators to provide actionable investment insights.',
      implementation: 'The project was implemented over 7 months using advanced geospatial technologies and machine learning frameworks. We integrated multiple data sources including MLS data, economic indicators, demographic information, and satellite imagery. The system includes sophisticated validation mechanisms to ensure accuracy and reliability.',
      impact: 'The AI real estate platform has transformed the investment group\'s decision-making process, enabling data-driven investments with significantly improved returns. The autonomous nature of the system allows for continuous market monitoring and instant response to emerging opportunities.'
    },
    'agricultural-optimization-agent': {
      id: 'agricultural-optimization-agent',
      title: 'Smart Agriculture Optimization System',
      client: 'Agricultural Cooperative',
      industry: 'Agriculture',
      challenge: 'The client needed an intelligent farming system that could monitor crop health in real-time, optimize resource usage autonomously, predict yields accurately, and provide actionable insights for sustainable farming. Their traditional farming methods were inefficient, resource-intensive, and vulnerable to unpredictable weather patterns.',
      solution: 'We created a comprehensive AI agentic system that integrates IoT sensors, computer vision, satellite imagery, and predictive analytics. The system autonomously monitors crop conditions, optimizes irrigation and fertilization schedules, predicts yields, and provides real-time recommendations for pest management and harvest timing.',
      results: [
        'Increased crop yields by 35% through optimized resource management and precise timing',
        'Reduced water usage by 40% with intelligent irrigation based on soil moisture sensors',
        'Improved harvest prediction accuracy by 85% enabling better planning and logistics',
        'Decreased operational costs by 25% through automation and efficiency improvements',
        'Reduced pesticide usage by 30% through targeted pest management',
        'Enhanced sustainability with 45% reduction in environmental impact'
      ],
      technologies: ['Python', 'Computer Vision', 'IoT Integration', 'React', 'PostgreSQL', 'AWS IoT', 'TensorFlow', 'OpenCV'],
      image: '/assets/agtech.jpg',
      fullDescription: 'An intelligent agricultural optimization system that revolutionizes farming through autonomous crop monitoring, resource optimization, and predictive analytics. The system creates sustainable farming practices while maximizing yields and minimizing environmental impact.',
      implementation: 'The project was implemented over 8 months using IoT infrastructure and edge computing technologies. We deployed sensors across multiple farm locations, integrated satellite imagery for large-scale monitoring, and built a user-friendly dashboard for farm managers. The system underwent extensive field testing before full deployment.',
      impact: 'The smart agriculture system has transformed the cooperative\'s farming operations, creating more sustainable and profitable agricultural practices. The autonomous nature of the system allows for 24/7 crop monitoring and instant response to changing conditions, significantly improving both yields and environmental stewardship.'
    },
    'predictive-analytics': {
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
      technologies: ['TensorFlo', 'Python', 'React', 'FastAPI', 'PostgreSQL'],
      image: 'https://via.placeholder.com/400x250/64748b/ffffff?text=Predictive+Analytics',
      fullDescription: 'ML-powered predictive maintenance system that optimizes equipment performance and reduces downtime.',
      implementation: 'The system processes real-time sensor data and provides actionable insights through an intuitive dashboard.',
      impact: 'Significant cost savings through reduced maintenance costs and improved operational efficiency.'
    }
  };

  const study = caseStudies[id];

  if (!study) {
    return (
      <div className="case-study-detail-page">
        <div className="container">
          <div className="not-found">
            <h1>Case Study Not Found</h1>
            <p>The case study you're looking for doesn't exist.</p>
            <Link to="/case-studies" className="btn btn-primary">Back to Case Studies</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="case-study-detail-page">
      {/* Hero Section */}
      <section className="case-study-hero">
        <div className="container">
          <Link to="/case-studies" className="back-link">
            ← Back to Case Studies
          </Link>
          <div className="hero-content">
            <div className="hero-text">
              <span className="industry-tag">{study.industry}</span>
              <h1>{study.title}</h1>
              <p className="client-name">{study.client}</p>
            </div>
            <div className="hero-image">
              <img src={study.image} alt={study.title} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="case-study-content">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              <div className="section">
                <h2>Overview</h2>
                <p>{study.fullDescription}</p>
              </div>

              <div className="section">
                <h2>The Challenge</h2>
                <p>{study.challenge}</p>
              </div>

              <div className="section">
                <h2>Our Solution</h2>
                <p>{study.solution}</p>
                
{study.id === 'librarian-ai-app' && (
                <div className="solution-screenshots">
                  <h3>Application Interface</h3>
                  <div className="screenshots-grid">
                    <div className="screenshot-item">
                      <img src="/1.png" alt="AI Recommendations Home Screen" />
                      <h4>AI Recommendations Dashboard</h4>
                      <p>Main interface where librarians can view AI-powered book suggestions based on child review analysis.</p>
                    </div>
                    <div className="screenshot-item">
                      <img src="/2.png" alt="Student Management Tab" />
                      <h4>Student Management</h4>
                      <p>Comprehensive student database management system for tracking reading preferences and review history.</p>
                    </div>
                    <div className="screenshot-item">
                      <img src="/3.png" alt="Catalog Management Tab" />
                      <h4>Catalog Management</h4>
                      <p>Advanced book catalog system with AI-enhanced search and recommendation algorithms.</p>
                    </div>
                  </div>
                </div>
              )}
                
                <div className="implementation-details">
                  <h3>Implementation</h3>
                  <p>{study.implementation}</p>
                </div>
              </div>

              <div className="section">
                <h2>Results & Impact</h2>
                <ul className="results-list">
                  {study.results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
                <div className="impact-summary">
                  <h3>Overall Impact</h3>
                  <p>{study.impact}</p>
                </div>
              </div>
            </div>

            <div className="sidebar">
              <div className="sidebar-section">
                <h3>Technologies Used</h3>
                <div className="tech-tags">
                  {study.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="sidebar-section">
                <h3>Project Details</h3>
                <div className="project-meta">
                  <div className="meta-item">
                    <span className="meta-label">Industry:</span>
                    <span className="meta-value">{study.industry}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Client:</span>
                    <span className="meta-value">{study.client}</span>
                  </div>
                </div>
              </div>

              <div className="sidebar-section">
                <h3>Ready to Start Your Project?</h3>
                <p>Let's discuss how we can help transform your business with AI solutions.</p>
                <Link to="/" className="btn btn-primary">Schedule Free AI Consultation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
