import React from 'react';
import { ThemeProvider } from '@mui/material';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import './i18n';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ProcessAndTech from './components/ProcessAndTech';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Helmet>
            <title>Rahmet Labs - AI Solutions & Automation Services</title>
            <meta name="description" content="Transform your business with Rahmet Labs' AI-powered solutions. We specialize in tax code assistance, legal document analysis, and healthcare AI solutions." />
            <meta name="keywords" content="AI solutions, automation services, tax code assistant, legal AI, medical AI, business automation, Rahmet Labs" />
            <link rel="canonical" href="https://rahmetlabs.xyz" />
          </Helmet>
          <Header />
          <main style={{ background: '#000' }}>
            <Hero />
            <WhyUs />
            <ProcessAndTech />
            <Services />
            <Contact />
          </main>
          <Footer />
        </ThemeProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;