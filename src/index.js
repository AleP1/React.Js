import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import { App } from './app';
import { CartProvider } from './context/cartContext'


ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
