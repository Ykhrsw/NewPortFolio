import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './assets/css/base.css';
import './assets/css/theme.css';
import './assets/css/layout.css';
import './assets/css/components.css';
import './assets/css/pages.css';
import './i18n/index';
 
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
