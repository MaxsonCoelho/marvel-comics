import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HeroProvider } from './context/Hero';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HeroProvider>
      <App />
    </HeroProvider>
  </React.StrictMode>
);
