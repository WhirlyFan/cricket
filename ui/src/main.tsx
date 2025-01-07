import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

import './index.css';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './api/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </NextUIProvider>
  </React.StrictMode>
);
