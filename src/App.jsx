import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import ProductGrid from './components/ProductGrid';
import CategoryGrid from './components/CategoryGrid';
import AboutSection from './components/AboutSection';
import SocialSection from './components/SocialSection';
import Footer from './components/Footer';

import Cursor from './components/Cursor';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPageLayout from './components/ProductPage';
import ShopPage from './components/ShopPage';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import CartSidebar from './components/CartSidebar';
import { CartProvider } from './context/CartContext';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Cursor />
          <CartSidebar />
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <AboutSection />
                <Marquee />
                <ProductGrid />
                <CategoryGrid />
                <SocialSection />
              </>
            } />
            <Route path="/product" element={<ProductPageLayout />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
