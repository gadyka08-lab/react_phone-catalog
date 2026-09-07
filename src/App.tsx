import { useState, useEffect } from 'react';
import './App.scss';
import { BannerSlider } from './components/BannerSlider/BannerSlider';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { BrandNewModels } from './components/BrandNewModels/BrandNewModels';
import { Product } from './types/Product';

export const App = () => {
  // стан для зберігання масиву товарів
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Помилка завантаження товарів:', error));
  }, []);

  return (
    <div className="App">
      <Header />
      <BannerSlider />
      {/* передаємо товари у пропс */}
      <BrandNewModels products={products} />
      <h1>Product Catalog</h1>
      <Footer />
    </div>
  );
};
