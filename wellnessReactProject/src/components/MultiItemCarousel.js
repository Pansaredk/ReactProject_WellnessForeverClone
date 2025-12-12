import React from 'react';
import '../styles/style.css';
import img1 from '../images/img1.webp';
import img2 from '../images/img2.webp';
import img3 from '../images/img3.webp';
import img4 from '../images/img4.webp';
import img5 from '../images/img5.webp';
import img6 from '../images/img6.webp';

function MultiItemCarousel() {
  return (
    <section className="container mt-4">
      <h4>Featured Products</h4>
      <div id="multiItemCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-4">
                <img src={img1} className="d-block w-100 carousel-img" alt="Product 1" />
              </div>
              <div className="col-md-4">
                <img src={img2} className="d-block w-100 carousel-img" alt="Product 2" />
              </div>
              <div className="col-md-4">
                <img src={img3} className="d-block w-100 carousel-img" alt="Product 3" />
              </div>
            </div>
          </div>
          {/* Second Slide */}
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4">
                <img src={img4} className="d-block w-100 carousel-img" alt="Product 4" />
              </div>
              <div className="col-md-4">
                <img src={img5} className="d-block w-100 carousel-img" alt="Product 5" />
              </div>
              <div className="col-md-4">
                <img src={img6} className="d-block w-100 carousel-img" alt="Product 6" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <button className="carousel-control-prev" type="button" data-bs-target="#multiItemCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#multiItemCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </section>
  );
}

export default MultiItemCarousel;
