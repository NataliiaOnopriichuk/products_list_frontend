import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'stylesheet/theme';
import { GlobalStyles } from 'stylesheet/globalStyles';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
