import React, { useState } from 'react';
import Login from './Login';
import ContactSection from './Contact';
import './App.css';

const NavBar = ({ onViewChange, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (currentView === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onViewChange('home');
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand" style={{ cursor: 'pointer' }} onClick={handleHomeClick}>
        WLinks
      </div>
      <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? '✕' : '☰'}
      </button>
      
      {isMenuOpen && <div className="mobile-overlay" onClick={() => setIsMenuOpen(false)}></div>}

      <div className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
        <a 
          href="#home" 
          className={currentView === 'home' ? 'active-link' : ''} 
          onClick={handleHomeClick}
        >
          Home
        </a>
        <a 
          href="#contact" 
          className={currentView === 'contact' ? 'active-link' : ''}
          onClick={(e) => { e.preventDefault(); onViewChange('contact'); setIsMenuOpen(false); }}
        >
          Contact
        </a>
        <button 
          className={`login-button ${currentView === 'login' ? 'active-link' : ''}`} 
          onClick={() => { onViewChange('login'); setIsMenuOpen(false); }}
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
    const navbar = document.querySelector('.navbar');
    if (featuresSection) {
      const rect = featuresSection.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const navHeight = navbar ? navbar.offsetHeight : 0;
      const elementTop = rect.top + scrollTop;
      const availableHeight = window.innerHeight - navHeight;
      const finalPosition = elementTop - (availableHeight / 2) + (rect.height / 2) - navHeight;
      window.scrollTo({ top: finalPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1 className="main-title">WLinks<span className="orange-accent-dot"></span></h1>
        <p className="subtitle">Welcome to the world of PIRACY!!!</p>
        <button className="cta-button" onClick={handleScrollToFeatures}>LINKS</button>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    { name: "AEScripts", url: "https://freevideoeffect.com/aescripts-deep-glow-2/" },
    { name: "WeLibrary", url: "https://welib.org/" },
    { name: "Cineby", url: "https://www.cineby.gd/" },
    { name: "SteamRip", url: "https://steamrip.com/" }, 
    { name: "FileCR", url: "https://filecr.com/us-en/" },
    { name: "MangaFire", url: "https://mangafire.to/home" },
  ];

  return (
    <section className="features-section" id="features">
      <h2 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: 'bold' }}>
        <span style={{ color: 'var(--primary-orange)' }}>Ahoy, Mateys! </span>
        <span style={{ color: 'white' }}>Be sure to use AdBlock and VPN if needed.</span>
      </h2>
      <ul className="features-list">
        {features.map((f, i) => (
          <li key={i}><a href={f.url} target="_blank" rel="noopener noreferrer">{f.name}</a></li>
        ))}
      </ul>
    </section>
  );
};

const AppFooter = () => (
  <footer className="app-footer">
    <p>&copy; {new Date().getFullYear()} WLinks. All rights reserved.</p>
    <p>A pure React demonstration project by DAKSH SHARMA.</p>
  </footer>
);

const App = () => {
  const [currentView, setCurrentView] = useState('home');

  const renderContent = () => {
    if (currentView === 'login') return <Login onBackToHome={() => setCurrentView('home')} />;
    if (currentView === 'contact') return <ContactSection />;
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
      <NavBar onViewChange={setCurrentView} currentView={currentView} /> 
      <main className="main-content">{renderContent()}</main>
    </div>
  );
};

export default App;
