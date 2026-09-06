import './App.scss';
import { BannerSlider } from './components/BannerSlider/BannerSlider';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

export const App = () => (
  <div className="App">
    <Header />
    <BannerSlider />
    <h1>Product Catalog</h1>
    <Footer />
  </div>
);
