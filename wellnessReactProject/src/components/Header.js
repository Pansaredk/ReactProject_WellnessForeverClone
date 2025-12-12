import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // Import Cart Context
import img1 from '../images/LOGO.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const { totalItems } = useContext(CartContext); // Get total items in cart

  return (
    <header className="header-section p-3" style={{ backgroundColor: 'rgb(155, 194, 155)' }}>
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={img1} alt="logo" className="logo" style={{ height: '90px', width: '120px' }} />
        </Link>

        {/* Search Bar */}
        <input type="text" className="form-control w-50 mx-3 my-2 my-md-0" placeholder="Search for 100,000+ products" />

        {/* Navigation Links */}
        <div className="d-flex align-items-center">
          <Link to="/" className="me-3 text-decoration-none text-dark">
            <i className="bi bi-house-door me-1"></i> Home
          </Link>
          <Link to="#" id="locationBtn" className="me-3 text-decoration-none text-dark">
            <i className="bi bi-geo-alt me-1"></i> Share Location
          </Link>
          <Link to="/login" className="me-3 text-decoration-none text-dark">
            <i className="bi bi-person-circle me-1"></i> Login
          </Link>
          <Link to="/cart" className="text-decoration-none text-dark">
            <i className="bi bi-cart me-1"></i> Cart (<span id="cart-count">{totalItems}</span>)
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
