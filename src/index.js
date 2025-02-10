import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import './i18n'; // Import i18n configuration
import App from './App';

// Move viewport meta tag to public/index.html instead
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);