import React from 'react';
import { motion } from 'framer-motion';

const VideoShowcase = () => {
  const videos = [
    {
      title: "Social Media Automation",
      description: "See how our bots manage multiple platforms",
      placeholder: "/social-placeholder.jpg"
    },
    {
      title: "Workflow Automation",
      description: "End-to-end process automation demo",
      placeholder: "/workflow-placeholder.jpg"
    },
    {
      title: "AI Accounting",
      description: "Real-time bookkeeping automation",
      placeholder: "/accounting-placeholder.jpg"
    }
  ];

  return (
    <section className="video-showcase" id="showcase">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          See Our Bots in Action
        </motion.h2>

        <div className="video-grid">
          {videos.map((video, index) => (
            <motion.div 
              key={index}
              className="video-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="video-placeholder">
                <img 
                  src={video.placeholder} 
                  alt={video.title}
                  className="placeholder-image"
                />
                <div className="play-button">
                  <div className="play-icon"></div>
                </div>
              </div>
              
              <div className="video-info">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default VideoShowcase;