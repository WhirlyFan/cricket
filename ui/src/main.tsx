import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

import './index.css';

import { HeroUIProvider } from '@heroui/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import store from './api/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeroUIProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </HeroUIProvider>
  </React.StrictMode>
);
