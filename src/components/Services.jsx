import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import {
  AccountBalance as TaxIcon,
  Gavel as LegalIcon,
  LocalHospital as MedicalIcon,
  OpenInNew as OpenInNewIcon,
} from '@mui/icons-material';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.items.automation.title'),
      description: t('services.items.automation.description'),
      icon: <TaxIcon sx={{ fontSize: 64, color: '#00D2FF' }} />,
      features: t('services.items.automation.features', { returnObjects: true }) || [],
      status: t('services.items.automation.status'),
      isHighlighted: true,
      link: 'https://chat.rahmetlabs.xyz',
    },
    {
      title: t('services.items.ai.title'),
      description: t('services.items.ai.description'),
      icon: <LegalIcon sx={{ fontSize: 64, color: '#00D2FF' }} />,
      features: t('services.items.ai.features', { returnObjects: true }) || [],
      status: t('services.items.ai.status'),
    },
    {
      title: t('services.items.development.title'),
      description: t('services.items.development.description'),
      icon: <MedicalIcon sx={{ fontSize: 64, color: '#00D2FF' }} />,
      features: t('services.items.development.features', { returnObjects: true }) || [],
      status: t('services.items.development.status'),
    },
  ];

  return (
    <Box
      component="section"
      id="services"
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
        {/* Title Section */}
        <Box sx={{ mb: { xs: 6, sm: 8, md: 10 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
              {t('services.title')}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto',
                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.4rem' },
                lineHeight: 1.6,
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
              }}
            >
              {t('services.description')}
            </Typography>
          </motion.div>
        </Box>

        {/* Cards Section */}
        <Grid 
          container 
          spacing={4}
          sx={{ 
            mt: 0,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {services.map((service, index) => (
            <Grid 
              item 
              xs={12}
              md={4}
              key={index}
              sx={{
                display: 'flex'
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                style={{ width: '100%' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '24px',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      '& .MuiSvgIcon-root': {
                        transform: 'scale(1.1)',
                      },
                    },
                  }}
                >
                  <CardContent 
                    sx={{ 
                      p: 4, 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                      '&:last-child': { pb: 4 }
                    }}
                  >
                    <Box sx={{ mb: 3, transition: 'transform 0.3s ease-in-out' }}>
                      {service.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        fontWeight: 700,
                        color: '#00D2FF',
                        fontSize: { xs: '1.25rem', sm: '1.5rem' },
                        minHeight: { md: '3.5rem' },
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        lineHeight: 1.3,
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      sx={{
                        mb: 3,
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: { xs: '0.95rem', sm: '1rem' },
                        lineHeight: 1.5,
                        minHeight: { md: '3rem' },
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {service.description}
                    </Typography>
                    <Box 
                      sx={{ 
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        minHeight: { md: '11rem' }  // Ensure consistent height for features section
                      }}
                    >
                      {Array.isArray(service.features) && service.features.map((feature, featureIndex) => (
                        <Typography
                          key={featureIndex}
                          sx={{
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontSize: '0.9rem',
                            mb: 1.5,  // Increased spacing between features
                            display: 'flex',
                            alignItems: 'flex-start',
                            lineHeight: 1.4,
                            '&:before': {
                              content: '"•"',
                              color: '#00D2FF',
                              mr: 1.5,  // Increased spacing for bullet points
                              fontSize: '1.2rem',
                              lineHeight: 1,
                              mt: '0.2rem',
                              flexShrink: 0,  // Prevent bullet point from shrinking
                            },
                          }}
                        >
                          {feature}
                        </Typography>
                      ))}
                    </Box>
                    <Box 
                      sx={{ 
                        mt: 'auto',  // Push to bottom
                        pt: 2,
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        gap: 2,
                        flexWrap: 'wrap'
                      }}
                    >
                      <Typography
                        sx={{
                          color: service.status === t('services.items.automation.status') ? '#4CAF50' : '#FFA726',
                          fontSize: '0.9rem',
                          fontWeight: 600,
                        }}
                      >
                        {service.status}
                      </Typography>
                      {service.isHighlighted && (
                        <Button
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="outlined"
                          endIcon={<OpenInNewIcon />}
                          sx={{
                            color: '#00D2FF',
                            borderColor: 'rgba(0, 210, 255, 0.5)',
                            borderRadius: '12px',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            py: 0.75,
                            px: 1.5,
                            minWidth: 'auto',
                            marginLeft: 'auto',  // Push button to the right
                            '&:hover': {
                              borderColor: '#00D2FF',
                              background: 'rgba(0, 210, 255, 0.1)',
                            },
                          }}
                        >
                          {t('services.items.automation.tryNow')}
                        </Button>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;