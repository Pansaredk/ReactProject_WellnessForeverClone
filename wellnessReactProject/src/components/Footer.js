// components/Footer.js
import React from 'react';
import '../styles/style.css' 


function Footer() {
  return (
    <footer className="footer bg-dark text-white mt-4">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-3">
            <h5>Follow us</h5>
            <div className="social-icons">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-youtube"></i>
            </div>
          </div>
          <div className="col-md-3">
            <h5>Categories</h5>
            <ul className="list-unstyled">
              <li>Mom & Baby</li>
              <li>Personal Care</li>
              <li>Health & Fitness</li>
              <li>Elderly Care</li>
              <li>Food & Beverages</li>
              <li>Self Medication</li>
              <li>Paper & Wipes</li>
              <li>Pet Supplies</li>
              <li>Home Care</li>
              <li>Ortho Belts & Supports</li>
              <li>Mobility & Rehab</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Medicines</h5>
            <ul className="list-unstyled">
              <li>Buy Medicines</li>
              <li>Upload Doctor's Note</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Others</h5>
            <ul className="list-unstyled">
              <li>Offers</li>
              <li>Blogs</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Store Locator</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Download the Mobile App</h5>
            <div className="app-icons">
              <img src="Images/gplay.jpeg" alt="Google Play" className="img-fluid mb-2" />
              <img src="Images/appstore.jpeg" alt="App Store" className="img-fluid" />
            </div>
            <h5>Email us</h5>
            <p>info@wellnessforever.in</p>
            <h5>Give us a missed call</h5>
            <p>1800 266 2247</p>
          </div>
        </div>
        <hr />
        <div className="trust-section text-center">
          <h5>16 Years of Trust</h5>
          <p>Over the last 16 years, we have touched the lives of lakhs of Indian families by serving them with only the best quality and genuine healthcare products. With over 400+ stores, a comprehensive website, and an easy-to-use app, it is only true to say that Wellness Forever is the one-stop destination for your wellness needs, be it online or offline.</p>
          <p>Copyright Wellness Forever 2025.</p>
          <p style={{ margin: 0, fontSize: '14px', color: '#ffffff' }}>
            &copy; 2023, Wellness.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;