import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. Імпортуємо роутер
import { App } from './App';
import { CartProvider } from './Context/CartContext';

createRoot(document.getElementById('root') as HTMLElement).render(
  <CartProvider>
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/react_phone-catalog/'}>
      <App />
    </BrowserRouter>
  </CartProvider>,
);
