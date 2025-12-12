import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import MultiItemCarousel from './components/MultiItemCarousel';
import OrderWithPrescription from './components/OrderWithPrescription';
import RecommendedProducts from './components/RecommendedProducts';
import Cart from './components/Cart';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <MultiItemCarousel />
            <OrderWithPrescription />
            <RecommendedProducts />
          </>
        } />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
