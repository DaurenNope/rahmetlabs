// Footer.js
import React from 'react';
import { FaTwitter, FaLinkedinIn, FaGithub, FaDiscord } from 'react-icons/fa';

const Footer = () => {
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
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="footer-copyright">
            © {currentYear} All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;