import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Product } from './types/Product';
import { ProductDetails } from './types/productsDetails';
// Сторінки
import { HomePage } from './pages/HomePage/HomePage'; // Винесемо головну сторінку в окремий компонент
import { ProductDetailsPage } from './pages/ProductDetailsPage/ProductDetailsPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
// import { PhonesPage } from './pages/PhonesPage/PhonesPage';
// import { CartPage } from './pages/CartPage/CartPage';
// import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage';
// import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

export const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productDetails, setProductDetails] = useState<ProductDetails[]>([]);

  useEffect(() => {
    // Завантаження загального списку для головної сторінки
    fetch('/api/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Помилка завантаження товарів:', error));

    // Завантаження детальних даних з усіх категорій
    Promise.all([
      fetch('/api/phones.json').then(res => res.json()),
      fetch('/api/tablets.json').then(res => res.json()),
      fetch('/api/accessories.json').then(res => res.json()),
    ])
      .then(([phones, tablets, accessories]) => {
        setProductDetails([...phones, ...tablets, ...accessories]);
      })
      .catch(error => console.error('Помилка завантаження детальних товарів:', error));
  }, []);
console.log(productDetails)
  return (
    <div className="App">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage products={products} />} />
          <Route
            path="/product/:productId"
            element={<ProductDetailsPage products={productDetails} baseProducts={products}/>}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};
