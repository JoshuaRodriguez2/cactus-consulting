import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const aboutRef = useRef();

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  const techStack = [
    'Python', 'TensorFlow', 'React', 'Node.js', 'AWS', 'Docker'
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content" ref={aboutRef}>
          <div className="about-text">
            <h2>Why Choose Cactus Labs AI?</h2>
            <p>
              We're at the forefront of artificial intelligence innovation, helping businesses 
              navigate the complex landscape of AI adoption and implementation.
            </p>
            <div className="stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat">
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="about-visual">
            <div className="tech-stack">
              {techStack.map((tech, index) => (
                <div key={index} className="tech-item">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
