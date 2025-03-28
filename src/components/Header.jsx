import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  IconButton,
  Stack,
  Switch,
  Typography,
  styled,
  AppBar,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Instagram as InstagramIcon,
  Telegram as TelegramIcon,
  WhatsApp as WhatsAppIcon,
  X as XIcon,
  Email as EmailIcon,
  GitHub as GitHubIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import ThreadsIcon from './ThreadsIcon';
import { IOSSwitch } from './IOSSwitch';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#00D2FF',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#00D2FF',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: 'rgba(0, 210, 255, 0.2)',
    opacity: 1,
    transition: 'background-color 0.3s ease',
  },
}));

const Header = () => {
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = React.useState(localStorage.getItem('i18nextLng') || 'en');

  useEffect(() => {
    // Initialize with stored language
    const storedLang = localStorage.getItem('i18nextLng');
    if (storedLang) {
      i18n.changeLanguage(storedLang);
      setLanguage(storedLang);
    }
  }, [i18n]);

  const handleLanguageChange = () => {
    const newLang = language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
    localStorage.setItem('i18nextLng', newLang);
  };

  const socialLinks = [
    {
      label: 'Telegram',
      href: 'https://t.me/RahmetLabs',
      icon: TelegramIcon,
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/77088413062',
      icon: WhatsAppIcon,
    },
    {
      label: 'X',
      href: 'https://x.com/rahmetlabs',
      icon: XIcon,
    },
    {
      label: 'Threads',
      href: 'https://threads.net/@rahmetlabs',
      icon: ThreadsIcon,
    },
  ];

  return (
    <Box
      component="header"
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'transparent',
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ 
            minHeight: { xs: '80px', md: '90px' },
            position: 'relative',
            py: { xs: 2, md: 2.5 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              component="img"
              src="/logo/rahmet-logo-white.png"
              alt="Rahmet Labs"
              sx={{
                height: { xs: '48px', sm: '56px', md: '100px' },
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                ml: { xs: 2, sm: 3, md: 10 },
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            />
          </motion.div>

          <Stack
            direction="row"
            alignItems="center"
            spacing={{ xs: 1.5, sm: 2, md: 2.5 }}
            sx={{
              position: { xs: 'static', sm: 'absolute' },
              left: '50%',
              transform: { xs: 'none', sm: 'translateX(-50%)' },
            }}
          >
            {socialLinks.map((social) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <IconButton
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    transition: 'all 0.3s ease',
                    width: { xs: '32px', sm: '36px', md: '40px' },
                    height: { xs: '32px', sm: '36px', md: '40px' },
                    '&:hover': {
                      color: '#fff',
                      transform: 'translateY(-2px)',
                      background: 'rgba(255, 255, 255, 0.1)',
                    },
                    '& svg': {
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                    },
                    '& img': {
                      width: { xs: '20px', sm: '22px', md: '24px' },
                      height: { xs: '20px', sm: '22px', md: '24px' },
                    },
                  }}
                >
                  <social.icon />
                </IconButton>
              </motion.div>
            ))}
          </Stack>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ mr: { xs: 2, sm: 3, md: 10 } }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: language === 'en' ? '#00D2FF' : 'rgba(255, 255, 255, 0.6)',
                  fontWeight: 500,
                }}
              >
                EN
              </Typography>
              <IOSSwitch
                checked={language === 'ru'}
                onChange={handleLanguageChange}
                sx={{ mx: 1 }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: language === 'ru' ? '#00D2FF' : 'rgba(255, 255, 255, 0.6)',
                  fontWeight: 500,
                }}
              >
                RU
              </Typography>
            </Stack>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;