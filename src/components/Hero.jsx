import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <section className="hero">
            <div className="neural-animation">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="neural-node"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`
            }}
          >
            <div className="node-core"></div>
            <div className="node-connection"></div>
          </div>
        ))}
      </div>
      {/* Animated Background */}
      <div className="ai-core-visualization">
        <div className="neural-network"></div>
        <div className="data-stream"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Left Column - Strategic Messaging */}
          <div className="leadership-content">
            <motion.h1 className="gradient-headline">
              <span className="main-headline">
                Automation That Works While You Sleep
              </span>
              <span className="slogan">
                We take care of the work you hate
              </span>
            </motion.h1>

            <motion.p className="value-proposition">
              Our AI bots handle 
              <span className="highlight"> customer service</span>, 
              <span className="highlight"> sales</span>, and 
              <span className="highlight"> operations</span> - 
              so you can focus on what really matters
            </motion.p>

            <div className="cta-group">
              <motion.button 
                className="primary-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Bots in Action
              </motion.button>
              <button className="secondary-cta">
                Get Free Automation Audit →
              </button>
            </div>
          </div>

          {/* Right Column - Technical Proof */}
          <div className="technical-proof">
            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-value">24/7</div>
                <div className="metric-label">Automated Support</div>
                <div className="metric-comparison">No downtime, ever</div>
              </div>
              
              <div className="metric-card">
                <div className="metric-value">95%</div>
                <div className="metric-label">Faster Response Times</div>
                <div className="metric-comparison">vs human teams</div>
              </div>

              <div className="client-logos">
                <div className="logo-wall">
                  <img src="/b2b-icon.svg" alt="B2B Solutions" />
                  <img src="/b2c-icon.svg" alt="B2C Solutions" />
                  <img src="/enterprise-icon.svg" alt="Enterprise Grade" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;