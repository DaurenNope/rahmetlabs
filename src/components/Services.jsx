import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';


const ServiceCard = ({ title, description, features, demoComponent }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue(0);
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    radius.set(Math.sqrt(rect.width ** 2 + rect.height ** 2) / 2.5);
  };

  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, 
    rgba(99, 102, 241, 0.4), transparent 80%)`;

  return (
    <motion.div 
      className="service-card"
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.03 }}
    >
      <motion.div className="card-glow" style={{ background }} />
      
      <div className="card-content">
        <div className="bot-preview">
          {demoComponent}
        </div>
        
        <div className="service-details">
          <h3>{title}</h3>
          <p className="description">{description}</p>
          
          <div className="features">
            {features.map((feature, i) => (
              <div key={i} className="feature">
                <div className="feature-indicator"></div>
                {feature}
              </div>
            ))}
          </div>
          
          <button className="cta">
            See Live Demo
            <div className="cta-pulse"></div>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Social Media Autopilot",
      description: "Full-cycle social media management AI",
      features: [
        "Content Creation & Scheduling",
        "Audience Engagement AI",
        "Performance Analytics",
        "Crisis Management"
      ],
      demoComponent: (
        <div className="social-demo">
          <div className="platform-icon">📱</div>
          <div className="engagement-graph"></div>
          <div className="post-calendar"></div>
        </div>
      )
    },
    {
      title: "Workflow Automator PRO",
      description: "End-to-end process automation engine",
      features: [
        "No-code Integration",
        "Cross-platform Automation",
        "Real-time Monitoring",
        "Self-optimizing Workflows"
      ],
      demoComponent: (
        <div className="workflow-demo">
          <div className="node-connection"></div>
          <div className="process-visualizer"></div>
        </div>
      )
    },
    {
      title: "Quantum Ledger AI",
      description: "Autonomous accounting & bookkeeping",
      features: [
        "Real-time Reconciliation",
        "Tax Compliance AI",
        "Expense Forecasting",
        "Fraud Detection"
      ],
      demoComponent: (
        <div className="accounting-demo">
          <div className="ledger-animation"></div>
          <div className="currency-flow"></div>
        </div>
      )
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Enterprise-Grade Automation Solutions
        </motion.h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;