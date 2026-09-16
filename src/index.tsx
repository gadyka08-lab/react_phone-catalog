import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. Імпортуємо роутер
import { App } from './App';
import { CartProvider } from './Context/CartContext';

createRoot(document.getElementById('root') as HTMLElement).render(
  <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartProvider>,
);
