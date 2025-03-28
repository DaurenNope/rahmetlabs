import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  AutoAwesome as AutomationIcon,
  Cloud as CloudIcon,
  Code as CodeIcon,
  Shield as SecurityIcon,
  Analytics as AnalyticsIcon,
  Settings as IntegrationIcon,
  Rocket as LaunchIcon,
  Support as SupportIcon,
} from '@mui/icons-material';

const ProcessAndTech = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const processes = [
    {
      icon: <AnalyticsIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: '#00D2FF' }} />,
      title: t('process.steps.discovery.title'),
      description: t('process.steps.discovery.description'),
      step: '01',
    },
    {
      icon: <IntegrationIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: '#00D2FF' }} />,
      title: t('process.steps.planning.title'),
      description: t('process.steps.planning.description'),
      step: '02',
    },
    {
      icon: <LaunchIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: '#00D2FF' }} />,
      title: t('process.steps.execution.title'),
      description: t('process.steps.execution.description'),
      step: '03',
    },
    {
      icon: <SupportIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: '#00D2FF' }} />,
      title: t('process.steps.support.title'),
      description: t('process.steps.support.description'),
      step: '04',
    },
  ];

  const techStack = [
    {
      icon: <AutomationIcon sx={{ fontSize: 40, color: '#00D2FF' }} />,
      title: 'Automation Tools',
      items: ['n8n', 'defy', 'elizaOS', 'Make.com', 'Zapier'],
    },
    {
      icon: <CloudIcon sx={{ fontSize: 40, color: '#00D2FF' }} />,
      title: 'Cloud Infrastructure',
      items: ['AWS', 'Google Cloud', 'Azure', 'Digital Ocean'],
    },
    {
      icon: <CodeIcon sx={{ fontSize: 40, color: '#00D2FF' }} />,
      title: 'Development',
      items: ['Python', 'Node.js', 'React', 'Next.js', 'FastAPI'],
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#00D2FF' }} />,
      title: 'Security',
      items: ['OAuth 2.0', 'JWT', 'End-to-end Encryption', 'SOC 2'],
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

      <Container 
        maxWidth="xl" 
        sx={{ 
          position: 'relative', 
          zIndex: 2,
          px: { xs: 2, sm: 4, md: 6 },
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
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
              fontWeight: 800,
              color: '#fff',
              textAlign: 'center',
              mb: { xs: 2, sm: 3, md: 4 },
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
            {t('process.title')}
          </Typography>

          <Typography
            sx={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              lineHeight: 1.8,
              textAlign: 'center',
              mb: { xs: 6, sm: 8, md: 10 },
              maxWidth: '800px',
              mx: 'auto',
              px: { xs: 2, sm: 4 },
            }}
          >
            {t('process.description')}
          </Typography>
        </motion.div>

        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: { 
              xs: '1fr',
              sm: 'repeat(auto-fit, minmax(280px, 1fr))',
              md: 'repeat(2, 1fr)',
            },
            gap: { xs: 3, sm: 4, md: 5 },
            position: 'relative',
            maxWidth: '1400px',
            mx: 'auto',
          }}
        >
          {/* Connecting Lines - Responsive */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              display: { xs: 'none', md: 'block' },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '25%',
                left: '20%',
                right: '20%',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, rgba(0,210,255,0.2), transparent)',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '25%',
                left: '20%',
                right: '20%',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, rgba(0,210,255,0.2), transparent)',
              },
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              display: { xs: 'none', md: 'block' },
              '&::before': {
                content: '""',
                position: 'absolute',
                left: '50%',
                top: '15%',
                bottom: '15%',
                width: '2px',
                background: 'linear-gradient(180deg, transparent, rgba(0,210,255,0.2), transparent)',
              },
            }}
          />

          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card
                sx={{
                  background: 'rgba(2,9,13,0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: { xs: '20px', md: '24px' },
                  p: { xs: 3, sm: 3.5, md: 4 },
                  height: '100%',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    background: 'rgba(0,210,255,0.1)',
                    borderColor: 'rgba(0,210,255,0.3)',
                    transform: 'translateY(-5px)',
                    '& .process-icon': {
                      transform: 'scale(1.1) rotate(10deg)',
                    },
                    '& .step-number': {
                      color: '#00D2FF',
                    }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: -1,
                    borderRadius: { xs: '20px', md: '24px' },
                    padding: '1px',
                    background: 'linear-gradient(135deg, rgba(0,210,255,0.5), rgba(0,255,240,0.5))',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  },
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <Typography
                    className="step-number"
                    sx={{
                      position: 'absolute',
                      top: { xs: -4, sm: 0 },
                      right: { xs: -4, sm: 0 },
                      fontSize: { xs: '2.5rem', sm: '2.75rem', md: '3rem' },
                      fontWeight: 800,
                      color: 'rgba(255,255,255,0.1)',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {process.step}
                  </Typography>

                  <Box 
                    className="process-icon"
                    sx={{ 
                      mb: { xs: 2, sm: 2.5, md: 3 },
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    {process.icon}
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{
                      color: '#00D2FF',
                      mb: { xs: 1.5, sm: 2 },
                      fontWeight: 600,
                      fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                    }}
                  >
                    {process.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                      lineHeight: 1.6,
                    }}
                  >
                    {process.description}
                  </Typography>
                </Box>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ProcessAndTech; 