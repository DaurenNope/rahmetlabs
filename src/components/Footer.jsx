import React from 'react';
import { FaTwitter, FaLinkedinIn, FaGithub, FaDiscord } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">NeuroAI</div>
          
          <div className="footer-socials">
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaLinkedinIn /></a>
            <a href="#" className="social-icon"><FaGithub /></a>
            <a href="#" className="social-icon"><FaDiscord /></a>
          </div>

          <div className="footer-links">
            {t('footer.links', { returnObjects: true }).map((link, index) => (
              <a key={index} href="#">{link}</a>
            ))}
          </div>
          
          <div className="footer-copyright">
            {t('footer.copyright', { year: currentYear })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;