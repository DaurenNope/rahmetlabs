import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {t('contact.title')}
        </motion.h2>

        <div className="contact-grid">
          {/* Contact Form */}
          <motion.form 
            className="contact-form"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">{t('contact.labels.name')}</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t('contact.labels.email')}</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t('contact.labels.message')}</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="5"
                required
              />
            </div>

            <button type="submit" className="submit-button">
              {t('contact.submit')}
              <div className="button-glow"></div>
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="info-card">
              <h3>{t('contact.info.title')}</h3>
              
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <div className="info-label">{t('contact.info.headquarters')}</div>
                  <div className="info-value">
                    {t('contact.info.address')}
                  </div>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-content">
                  <div className="info-label">{t('contact.info.phone')}</div>
                  <div className="info-value">
                    {t('contact.info.phoneNumber')}
                  </div>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div className="info-content">
                  <div className="info-label">{t('contact.info.email')}</div>
                  <div className="info-value">
                    {t('contact.info.emailAddress')}
                  </div>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link">{t('contact.social.linkedin')}</a>
              <a href="#" className="social-link">{t('contact.social.twitter')}</a>
              <a href="#" className="social-link">{t('contact.social.github')}</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;