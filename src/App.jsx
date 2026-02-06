import React, { useState } from 'react';
import Login from './Login';
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
        {['Home', 'Contact'].map((link, index) => (
          <a 
            key={index} 
            href={`#${link}`} 
            onClick={(e) => {
              e.preventDefault();
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
    const navbar = document.querySelector('.navbar');
    
    if (featuresSection) {
      const rect = featuresSection.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const navHeight = navbar ? navbar.offsetHeight : 0;
      
      // The absolute top of the section
      const elementTop = rect.top + scrollTop;
      
      // Calculate available viewport height (total height minus the sticky navbar)
      const availableHeight = window.innerHeight - navHeight;
      
      // Center the element within that available height, then offset by navHeight
      const finalPosition = elementTop - (availableHeight / 2) + (rect.height / 2) - navHeight;

      window.scrollTo({
        top: finalPosition,
        behavior: 'smooth'
      });
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
    { name: "AEScripts", url: "https://freevideoeffect.com/aescripts-deep-glow-2/" },
    { name: "WeLibrary", url: "https://welib.org/" },
    { name: "Cineby", url: "https://www.cineby.gd/" },
    { name: "SteamRip", url: "https://steamrip.com/" }, 
    { name: "FileCR", url: "https://filecr.com/us-en/" },
    { name: "MangaFire", url: "https://mangafire.to/home" },
  ];

  return (
    <section className="features-section" id="features">
      <h2 style={{ marginBottom: '2.5rem', fontSize: '1.1rem', fontWeight: 'bold' }}>
        <span style={{ color: 'var(--primary-orange)' }}>Ahoy, Mateys! </span>
        <span style={{ color: 'white' }}>Be sure to use AdBlock and VPN if needed.</span>
      </h2>
      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index}>
            <a 
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
      <img 
        className="bg-image-fixed" 
        src="https://img.freepik.com/free-vector/black-background-with-wavy-lines_52683-76524.jpg?semt=ais_hybrid&w=740&q=80" 
        alt="Background" 
      />
      <div className="hero-overlay-fixed"></div>

      <NavBar onViewChange={setCurrentView} /> 
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
