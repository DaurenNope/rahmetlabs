import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { ArrowForward as ArrowIcon } from '@mui/icons-material';

const Hero = () => {
  const { t } = useTranslation();
  const canvasRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      const scale = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * scale;
      canvas.height = window.innerHeight * scale;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(scale, scale);
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
        this.color = `rgba(0, 210, 255, ${Math.random() * 0.3 + 0.1})`;
        this.connections = [];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        this.connections = [];
        particles.forEach(particle => {
          if (particle === this) return;
          const dx = this.x - particle.x;
          const dy = this.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            this.connections.push({
              particle,
              distance,
              opacity: 1 - (distance / 120)
            });
          }
        });
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        this.connections.forEach(connection => {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 210, 255, ${connection.opacity * 0.15})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(connection.particle.x, connection.particle.y);
          ctx.stroke();
        });
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < 80; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    init();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      init();
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        pt: { xs: 10, sm: 12, md: 14 },
        pb: { xs: 8, sm: 10, md: 12 },
        background: 'linear-gradient(180deg, rgba(0,12,24,1) 0%, rgba(0,0,0,0.95) 100%)',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.4,
          zIndex: 0,
        }}
      />
      
      {/* Primary Background Gradient */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 0%, rgba(0,210,255,0.15) 0%, rgba(0,0,0,0) 70%)',
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
          zIndex: 0,
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
          zIndex: 0,
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
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid 
          container 
          spacing={{ xs: 3, sm: 4, md: 6 }} 
          alignItems="center"
          sx={{
            minHeight: { md: '600px' },
            maxWidth: '1800px',
            mx: 'auto',
            position: 'relative',
          }}
        >
          <Grid item xs={12} lg={7} sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', lg: 'flex-start' },
          }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ width: '100%' }}
            >
              <Stack spacing={4} alignItems={{ xs: 'center', lg: 'flex-start' }}>
                <Box sx={{ position: 'relative', width: '100%' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    <Typography
                      sx={{
                        color: '#00D2FF',
                        fontSize: { xs: '1.1rem', sm: '1.2rem' },
                        fontWeight: 600,
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        mb: 2,
                        textAlign: { xs: 'center', lg: 'left' },
                        pl: { lg: '10%' },
                        textShadow: '0 0 20px rgba(0, 210, 255, 0.5)',
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          left: { lg: 0 },
                          top: '50%',
                          width: { lg: '8%' },
                          height: '2px',
                          background: 'linear-gradient(90deg, #00D2FF 0%, rgba(0,210,255,0) 100%)',
                          display: { xs: 'none', lg: 'block' },
                        }
                      }}
                    >
                      {t('hero.title')}
                    </Typography>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <Typography
                      variant="h1"
                      sx={{
                        color: '#fff',
                        fontSize: { xs: '3.5rem', sm: '5rem', md: '6rem', lg: '8rem' },
                        fontWeight: 800,
                        lineHeight: 0.9,
                        letterSpacing: '-0.03em',
                        textTransform: 'uppercase',
                        textShadow: '0 0 40px rgba(0, 210, 255, 0.3)',
                        textAlign: { xs: 'center', lg: 'left' },
                        position: 'relative',
                        mb: { xs: 1, md: 0 },
                      }}
                    >
                      {t('hero.subtitle')}
                    </Typography>
                  </motion.div>
                </Box>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.95)',
                      fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem', lg: '1.85rem' },
                      fontWeight: 500,
                      lineHeight: 1.5,
                      maxWidth: '800px',
                      textAlign: { xs: 'center', lg: 'left' },
                      mb: { xs: 3, sm: 4 },
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    {t('hero.description')}
                  </Typography>
                </motion.div>

                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={{ xs: 2, sm: 3 }}
                  alignItems="center"
                  justifyContent={{ xs: 'center', sm: 'flex-start' }}
                  sx={{ 
                    width: '100%',
                    maxWidth: { xs: '300px', sm: '100%' }
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ width: 'auto' }}
                  >
                    <Button
                      component={RouterLink}
                      to="/contact"
                      variant="contained"
                      sx={{
                        background: 'linear-gradient(135deg, #00D2FF 0%, #00FFF0 100%)',
                        color: '#000',
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                        fontWeight: 600,
                        padding: { xs: '12px 24px', sm: '14px 32px', md: '16px 40px' },
                        borderRadius: '12px',
                        textTransform: 'none',
                        whiteSpace: 'nowrap',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #00FFF0 0%, #00D2FF 100%)',
                          boxShadow: '0 0 20px rgba(0, 210, 255, 0.4)',
                        },
                      }}
                    >
                      {t('hero.cta.talk')}
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ width: 'auto' }}
                  >
                    <Button
                      component={RouterLink}
                      to="/projects"
                      variant="outlined"
                      endIcon={<ArrowIcon />}
                      sx={{
                        borderColor: 'rgba(0, 210, 255, 0.5)',
                        color: '#fff',
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                        fontWeight: 600,
                        padding: { xs: '12px 24px', sm: '14px 32px', md: '16px 40px' },
                        borderRadius: '12px',
                        textTransform: 'none',
                        whiteSpace: 'nowrap',
                        borderWidth: '2px',
                        background: 'rgba(0, 210, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        '&:hover': {
                          borderColor: '#00D2FF',
                          borderWidth: '2px',
                          background: 'rgba(0, 210, 255, 0.1)',
                          boxShadow: '0 0 20px rgba(0, 210, 255, 0.2)',
                        },
                      }}
                    >
                      {t('hero.cta.work')}
                    </Button>
                  </motion.div>
                </Stack>
              </Stack>
            </motion.div>
          </Grid>

          <Grid item xs={12} lg={5} sx={{ display: { xs: 'none', lg: 'block' } }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '500px',
                  background: 'radial-gradient(circle at center, rgba(0, 210, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
                  borderRadius: '30px',
                  overflow: 'hidden',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(45deg, rgba(0, 210, 255, 0.1) 0%, rgba(0, 255, 240, 0.1) 100%)',
                    opacity: 0.5,
                  }
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at center, rgba(0, 210, 255, 0.2) 0%, transparent 70%)',
                    animation: 'pulse 4s ease-in-out infinite',
                    '@keyframes pulse': {
                      '0%, 100%': {
                        opacity: 0.5,
                        transform: 'scale(1)',
                      },
                      '50%': {
                        opacity: 0.8,
                        transform: 'scale(1.1)',
                      },
                    },
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;