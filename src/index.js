import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter  } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter > 
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </HashRouter >
  </React.StrictMode>
);

