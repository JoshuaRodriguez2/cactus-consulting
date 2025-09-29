import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Services from './components/Services';
import SocialProof from './components/SocialProof';
import ProcessSection from './components/ProcessSection';
import Guarantee from './components/Guarantee';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudies from './components/CaseStudies';
import CaseStudyDetail from './components/CaseStudyDetail';
import ServicesPage from './components/ServicesPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ValueProposition />
              <Services />
              <SocialProof />
              <ProcessSection />
              <Guarantee />
              <Contact />
            </>
          } />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
