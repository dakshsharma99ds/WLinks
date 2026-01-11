import React, { useState } from 'react';
import Login from './Login';
import AboutSection from './About';
import ContactSection from './Contact';
import './App.css';

const NavBar = ({ onViewChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">WLinks</div>
      <button 
        className="mobile-menu-button" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>
      <div className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
        {['Home', 'Contact', 'About'].map((link, index) => (
          <a 
            key={index} 
            href={`#${link}`} 
            onClick={() => {
              onViewChange(link.toLowerCase());
              setIsMenuOpen(false); 
            }}
          >
            {link}
          </a>
        ))}
        <button 
          className="login-button" 
          aria-label="Login or sign up"
          onClick={() => {
            onViewChange('login');
            setIsMenuOpen(false); 
          }}
        >
          Login
        </button>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  const handleScrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1 className="main-title">
          WLinks
          <span className="orange-accent-dot" aria-hidden="true"></span>
        </h1>
        <p className="subtitle">Welcome to the world of PIRACY!!!</p>
        <button className="cta-button" onClick={handleScrollToFeatures}>
          LINKS
        </button>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    { name: "Yarrlist", url: "https://yarrlist.com/" }, 
    { name: "Cineby", url: "https://www.cineby.gd/" }, 
    { name: "SteamRip", url: "https://steamrip.com/" }, 
    { name: "ToxicGames", url: "https://toxicgames.in/" },
    { name: "FileCR", url: "https://filecr.com/us-en/" },
  ];

  return (
    <section className="features-section" id="features">
      <h2>Our Core Piracy Links</h2>
      <p className="section-motto">
        WLinks main motive is to provide the best, curated Piracy sites for EVERYTHING!
      </p>
      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index}>
            🔗 <a 
              href={feature.url} 
              target="_blank" 
              rel="noopener noreferrer" 
            >
              {feature.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

const AppFooter = () => {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} WLinks. All rights reserved.</p>
      <p>A pure React demonstration project by DAKSH SHARMA.</p>
    </footer>
  );
};

const App = () => {
  const [currentView, setCurrentView] = useState('home');

  const renderContent = () => {
    if (currentView === 'login') {
      return <Login onBackToHome={() => setCurrentView('home')} />;
    }
    if (currentView === 'about') { 
      return <AboutSection />;
    }
    if (currentView === 'contact') { 
      return <ContactSection />;
    }

    return (
      <>
        <HeroSection />
        <FeaturesSection />
        <AppFooter />
      </>
    );
  };

  return (
    <div className="App">
      <NavBar onViewChange={setCurrentView} /> 
      {renderContent()}
    </div>
  );
};

export default App;
