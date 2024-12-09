import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
import ProductSection from './components/Product/Product';
import ItemDetail from './components/ItemDetail/ItemDetail';
import CartPage from './components/CartPage/CartPage';
import { CartProvider } from './components/CartContext/Cartcontext';
import About from './components/About/About';
import DMCA from './components/DMCA/DMCA';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/DMCA" element={<DMCA />} />
        <Route path="/product/:productId" element={<ItemDetail />} />
        <Route path="/category/:rarity" element={<ProductSection />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;