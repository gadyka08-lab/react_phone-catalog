import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

export const App = () => (
  <div className="App">
    <Header />
    <h1>Product Catalog</h1>
    <Footer />
  </div>
);
