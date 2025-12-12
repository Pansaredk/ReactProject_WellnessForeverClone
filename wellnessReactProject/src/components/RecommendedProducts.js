import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/style.css';

import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';
import p5 from '../images/p5.png';
import p6 from '../images/p6.png';
import p7 from '../images/p7.png';
import p8 from '../images/p8.png';

const RecommendedProducts = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: 'Dabur Honitus Syrup 100ml', price: 100, image: p1 },
    { id: 2, name: 'Otrivin oxy fast relief Nasel Spray 10ml', price: 150, image: p2 },
    { id: 3, name: 'Crosin Advance 20 Tablets', price: 20, image: p3 },
    { id: 4, name: 'Pediasure Nutrition Drink For Kids - 400gm', price: 250, image: p4 },
    { id: 5, name: 'VLCC Aurveda Face Wash 100ml', price: 100, image: p6 },
    { id: 6, name: 'Clinic Plus Shampoo 175 ml', price: 116, image: p5 },
    { id: 7, name: 'Accu-Check Active test Strip 50 strip', price: 1190, image: p7 },
    { id: 8, name: 'ARA gel 10 g', price: 390, image: p8 },
  ];

  return (
    <section className="container mt-4">
      <h4>Recommended Products</h4>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 col-sm-6 col-12 text-center mb-4" key={product.id}>
            <div className="card h-100">
              <img src={product.image} alt={product.name} className="card-img-top" />
              <div className="card-body">
                <p className="card-title">{product.name}</p>
                <p className="card-text">
                  <strong>₹{product.price}</strong>
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    console.log("Adding to cart:", product); // Debugging log
                    addToCart(product);
                  }}
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedProducts;
