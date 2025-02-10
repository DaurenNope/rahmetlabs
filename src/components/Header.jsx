import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaTwitter, FaLinkedinIn, FaGithub, FaDiscord } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation(); // Destructure i18n and t

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Use i18n.changeLanguage
  };

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

        <div className="header-socials">
          <a href="#" className="social-icon"><FaTwitter /></a>
          <a href="#" className="social-icon"><FaLinkedinIn /></a>
          <a href="#" className="social-icon"><FaGithub /></a>
          <a href="#" className="social-icon"><FaDiscord /></a>
        </div>

        <div className="language-switcher">
          <button 
            onClick={() => changeLanguage('en')}
            className={i18n.language === 'en' ? 'active' : ''}
          >
            EN
          </button>
          <span className="divider">|</span>
          <button 
            onClick={() => changeLanguage('ru')}
            className={i18n.language === 'ru' ? 'active' : ''}
          >
            RU
          </button>
        </div>

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