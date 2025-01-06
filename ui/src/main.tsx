import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import './index.css';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '@/app/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* TODO: Look into replacing Provider with ApiProvider from rtk query if it makes sense */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
