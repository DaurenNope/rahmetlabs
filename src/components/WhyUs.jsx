import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Typography,
  Card,
} from '@mui/material';
import {
  Speed as SpeedIcon,
  Psychology as InnovationIcon,
  Security as SecurityIcon,
  Groups as TeamIcon,
} from '@mui/icons-material';

const WhyUs = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: '#00D2FF' }} />,
      title: t('whyUs.features.0.title'),
      description: t('whyUs.features.0.description'),
    },
    {
      icon: <InnovationIcon sx={{ fontSize: 40, color: '#00D2FF' }} />,
      title: t('whyUs.features.1.title'),
      description: t('whyUs.features.1.description'),
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#00D2FF' }} />,
      title: t('whyUs.features.2.title'),
      description: t('whyUs.features.2.description'),
    },
    {
      icon: <TeamIcon sx={{ fontSize: 40, color: '#00D2FF' }} />,
      title: t('whyUs.features.3.title'),
      description: t('whyUs.features.3.description'),
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(180deg, rgba(0,12,24,1) 0%, rgba(0,0,0,0.95) 100%)',
        overflow: 'hidden',
        py: { xs: 8, sm: 10, md: 16 },
      }}
    >
      {/* Primary Background Gradient */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(0,210,255,0.15) 0%, rgba(0,0,0,0) 70%)',
          opacity: 0.6,
          animation: 'pulse 8s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': {
              transform: 'scale(1)',
              opacity: 0.6,
            },
            '50%': {
              transform: 'scale(1.2)',
              opacity: 0.8,
            },
          },
        }}
      />

      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2300D2FF" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          animation: 'moveBackground 30s linear infinite',
          '@keyframes moveBackground': {
            from: { backgroundPosition: '0 0' },
            to: { backgroundPosition: '60px 60px' },
          },
        }}
      />

      {/* Top Gradient Transition */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(0deg, rgba(0,12,24,0) 0%, rgba(0,12,24,1) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Bottom Gradient Transition */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(180deg, rgba(0,12,24,0) 0%, rgba(0,12,24,1) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              fontWeight: 800,
              textAlign: 'center',
              mb: 3,
              background: 'linear-gradient(135deg, #00D2FF 0%, #00FFF0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, #00D2FF 0%, #00FFF0 100%)',
                filter: 'blur(40px)',
                opacity: 0.3,
                zIndex: -1,
              },
            }}
          >
            {t('whyUs.title')}
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.8,
              maxWidth: '800px',
              mx: 'auto',
              textAlign: 'center',
              mb: { xs: 6, md: 8 },
            }}
          >
            {t('whyUs.description')}
          </Typography>
        </motion.div>

        {/* Stats Section */}
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 4,
              justifyContent: 'center',
              mb: 6,
            }}
          >
            <Card
              sx={{
                background: 'rgba(2,9,13,0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: '24px',
                p: 4,
                width: '300px',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography
                  sx={{
                    fontSize: '3.5rem',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #00D2FF 0%, #00FFF0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textAlign: 'center',
                    lineHeight: 1,
                    mb: 1,
                  }}
                >
                  {t('whyUs.stats.satisfaction')}
                </Typography>
                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '1rem',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: 500,
                  }}
                >
                  {t('whyUs.stats.clients')}
                </Typography>
              </motion.div>
            </Card>

            <Card
              sx={{
                background: 'rgba(2,9,13,0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: '24px',
                p: 4,
                width: '300px',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Typography
                  sx={{
                    fontSize: '3.5rem',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #00D2FF 0%, #00FFF0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textAlign: 'center',
                    lineHeight: 1,
                    mb: 1,
                  }}
                >
                  {t('whyUs.stats.efficiency')}
                </Typography>
                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '1rem',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: 500,
                  }}
                >
                  {t('whyUs.stats.projects')}
                </Typography>
              </motion.div>
            </Card>
          </Box>
        </Box>

        {/* Feature Cards */}
        <Box 
          sx={{ 
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            justifyContent: 'center',
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ width: '300px' }}
            >
              <Card
                sx={{
                  background: 'rgba(2,9,13,0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '24px',
                  p: 3,
                  height: '100%',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    background: 'rgba(0,210,255,0.1)',
                    borderColor: 'rgba(0,210,255,0.3)',
                    transform: 'translateY(-5px)',
                    '& .feature-icon': {
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                <Box 
                  className="feature-icon"
                  sx={{ 
                    mb: 2,
                    transition: 'transform 0.3s ease',
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#00D2FF',
                    mb: 2,
                    fontWeight: 600,
                    fontSize: '1.25rem',
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                  }}
                >
                  {feature.description}
                </Typography>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WhyUs; 