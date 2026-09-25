import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { CartProvider } from './Context/CartContext';
import { FavoritesProvider } from './Context/FavoritesContext';

createRoot(document.getElementById('root') as HTMLElement).render(
  <CartProvider>
    <FavoritesProvider>
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/react_phone-catalog/'}>
        <App />
      </BrowserRouter>
    </FavoritesProvider>
  </CartProvider>,
);
