import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Stack,
  IconButton,
} from '@mui/material';
import {
  Telegram as TelegramIcon,
  WhatsApp as WhatsAppIcon,
  X as XIcon,
} from '@mui/icons-material';
import ThreadsIcon from './ThreadsIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: 'Telegram',
      href: 'https://t.me/RahmetLabs',
      icon: TelegramIcon,
      color: '#0088cc',
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/77088413062',
      icon: WhatsAppIcon,
      color: '#25D366',
    },
    {
      label: 'X',
      href: 'https://x.com/rahmetlabs',
      icon: XIcon,
      color: '#ffffff',
    },
    {
      label: 'Threads',
      href: 'https://threads.net/@rahmetlabs',
      icon: ThreadsIcon,
      color: '#ffffff',
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(0,12,24,1) 0%, rgba(0,0,0,0.95) 100%)',
        py: { xs: 4, md: 5 },
        color: 'white',
      }}
    >
      <Container maxWidth="xl">
        <Stack 
          spacing={3}
          alignItems="center"
        >
          <Stack 
            direction="row" 
            spacing={2}
            sx={{
              '& .MuiIconButton-root': {
                color: 'rgba(255,255,255,0.8)',
                transition: 'all 0.2s ease',
                width: { xs: 36, sm: 40 },
                height: { xs: 36, sm: 40 },
                padding: '8px',
                '&:hover': {
                  transform: 'translateY(-2px)',
                },
                '& svg, & img': {
                  width: { xs: 20, sm: 24 },
                  height: { xs: 20, sm: 24 },
                },
              },
            }}
          >
            {socialLinks.map((social) => (
              <IconButton
                key={social.label}
                component="a"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  '&:hover': {
                    color: social.color,
                  },
                }}
              >
                <social.icon />
              </IconButton>
            ))}
          </Stack>

          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: { xs: '0.875rem', md: '0.95rem' },
            }}
          >
            © {currentYear} Rahmet Labs
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;