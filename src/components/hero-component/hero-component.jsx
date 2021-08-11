import React from "react";
import customer1 from "../../assests/img/customers/customer-1.jpg";
import mainimg from "../../assests/img/hero.png";
import customer2 from "../../assests/img/customers/customer-2.jpg";
import customer3 from "../../assests/img/customers/customer-3.jpg";
import customer4 from "../../assests/img/customers/customer-4.jpg";
import customer5 from "../../assests/img/customers/customer-5.jpg";
import customer6 from "../../assests/img/customers/customer-6.jpg";

import "./hero-component.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-div">
        <div className="hero-text-box">
          <h1 className="primary-heading">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="summary">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs. We have delivered 250,000+ meals last year!
          </p>
          <a href="/#" className="btn btn-full margin-right-sm">
            Start Eating Well
          </a>
          <a href="/#" className="btn btn-normal">
            Learn More &darr;
          </a>
          <div className="delivered-meals">
            <div className="delivered-meals-images">
              <img src={customer1} alt="meal-images1" />
              <img src={customer2} alt="meal-images2" />
              <img src={customer3} alt="meal-images3" />
              <img src={customer4} alt="meal-images4" />
              <img src={customer5} alt="meal-images5" />
              <img src={customer6} alt="meal-images6" />
            </div>
            <p>
              <span>250,000+ </span>meals delivered last year!
            </p>
          </div>
        </div>
        <div className="hero-img-box">
          <img src={mainimg} alt="heroimg" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
