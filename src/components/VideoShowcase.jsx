import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const VideoShowcase = () => {
  const { t } = useTranslation();

  // Get translated videos
  const videos = t('showcase.videos', { returnObjects: true });

  return (
    <section className="video-showcase" id="showcase">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {t('showcase.title')}
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