import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
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
          Let's Build Your AI Solution
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
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="5"
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Send Message
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
              <h3>Contact Information</h3>
              
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <div className="info-label">Headquarters</div>
                  <div className="info-value">
                    123 AI Boulevard<br />
                    Silicon Valley, CA 94025
                  </div>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-content">
                  <div className="info-label">Phone</div>
                  <div className="info-value">
                    +1 (555) 123-4567
                  </div>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div className="info-content">
                  <div className="info-label">Email</div>
                  <div className="info-value">
                    contact@neuroai.com
                  </div>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">GitHub</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Contact;