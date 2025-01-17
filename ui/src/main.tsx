import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

import './index.css';

import { HeroUIProvider } from "@heroui/react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './api/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeroUIProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </HeroUIProvider>
  </React.StrictMode>
);
