import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Stack,
} from '@mui/material';
import {
  WhatsApp as WhatsAppIcon,
  Telegram as TelegramIcon,
  Email as EmailIcon,
} from '@mui/icons-material';

const Contact = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const contactMethods = [
    {
      name: 'WhatsApp',
      icon: <WhatsAppIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />,
      link: 'https://wa.me/77088413062',
      color: '#25D366',
    },
    {
      name: 'Telegram',
      icon: <TelegramIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />,
      link: 'https://t.me/RahmetLabs',
      color: '#0088cc',
    },
    {
      name: 'Email',
      icon: <EmailIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />,
      link: 'mailto:rahmetlabs@gmail.com',
      color: '#00D2FF',
    },
  ];

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(180deg, rgba(0,12,24,1) 0%, rgba(0,0,0,0.95) 100%)',
        overflow: 'hidden',
        py: { xs: 6, sm: 8, md: 10 },
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

      <Container 
        maxWidth="xl" 
        sx={{ 
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
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
              color: '#fff',
              mb: { xs: 3, md: 4 },
              '& .highlight': {
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
                  opacity: 0.2,
                  zIndex: -1,
                },
              }
            }}
          >
            {t('contact.title')}
          </Typography>

          <Typography
            sx={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.8,
              maxWidth: '600px',
              mx: 'auto',
              mb: { xs: 6, md: 8 },
            }}
          >
            {t('contact.description')}
          </Typography>
        </motion.div>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 4, sm: 6, md: 8 }}
          alignItems="center"
          justifyContent="center"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Box
                component="a"
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block',
                }}
              >
                <Stack
                  alignItems="center"
                  spacing={2}
                  sx={{
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      '& .contact-icon': {
                        background: `linear-gradient(135deg, ${method.color} 0%, rgba(0,210,255,0.2) 100%)`,
                        boxShadow: `0 0 30px ${method.color}40`,
                      },
                      '& .contact-text': {
                        color: method.color,
                      },
                    },
                  }}
                >
                  <Box
                    className="contact-icon"
                    sx={{
                      width: { xs: 64, sm: 80 },
                      height: { xs: 64, sm: 80 },
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease',
                      color: method.color,
                    }}
                  >
                    {method.icon}
                  </Box>
                  <Typography
                    className="contact-text"
                    sx={{
                      color: 'rgba(255,255,255,0.9)',
                      fontSize: { xs: '1.1rem', sm: '1.25rem' },
                      fontWeight: 600,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {method.name}
                  </Typography>
                </Stack>
              </Box>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Contact;