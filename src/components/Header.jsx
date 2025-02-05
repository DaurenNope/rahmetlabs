// Header.js
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaTwitter, FaLinkedinIn, FaGithub, FaDiscord } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('');

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Services', id: 'services' },
    { name: 'Showcase', id: 'showcase' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <motion.div 
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="logo-gradient">Neuro</span>AI
          <div className="logo-glow"></div>
        </motion.div>

        <nav className="desktop-nav">
          {navItems.map((item) => (
            <motion.div 
              key={item.id}
              className="nav-item"
              onHoverStart={() => setActiveNav(item.id)}
              onHoverEnd={() => setActiveNav('')}
            >
              <a href={`#${item.id}`} className="nav-link">
                {item.name}
                {activeNav === item.id && (
                  <motion.div 
                    className="nav-indicator"
                    layoutId="nav-indicator"
                    transition={{ type: 'spring', bounce: 0.25 }}
                  />
                )}
              </a>
            </motion.div>
          ))}
        </nav>

        <div className="header-socials">
          <a href="#" className="social-icon"><FaTwitter /></a>
          <a href="#" className="social-icon"><FaLinkedinIn /></a>
          <a href="#" className="social-icon"><FaGithub /></a>
          <a href="#" className="social-icon"><FaDiscord /></a>
        </div>

        <motion.button 
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
          <div className="button-glow"></div>
        </motion.button>

        <button 
          className="mobile-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        <motion.div 
          className="mobile-menu"
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
        >
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              className="mobile-nav-item"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="mobile-socials">
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaLinkedinIn /></a>
            <a href="#" className="social-icon"><FaGithub /></a>
            <a href="#" className="social-icon"><FaDiscord /></a>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;