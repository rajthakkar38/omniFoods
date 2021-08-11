import React from "react";
import "./price-component.css";

const Price = () => {
  return (
    <section className="price" id="Price">
      <div className="container">
        <div className="price-headings">
          <span className="sub-heading">PRICING</span>
          <h1 className="secondary-heading">
            Eating well without breaking the bank
          </h1>
        </div>
      </div>
      <div className="container grid grid--2--cols">
        <div className="price-card starter">
          <div className="price-card-containre">
            <span className="sub-heading">STARTER</span>
            <h1 className="price-list-heading">$ 399</h1>
            <p className="price-list-sub">
              per month. That's just $13 per meal!
            </p>
          </div>
          <ul className="price-list">
            <li className="price-list-atribute">
              <ion-icon class="price-icon" name="checkmark-outline"></ion-icon>
              <span>1 meal per day</span>
            </li>
            <li className="price-list-atribute">
              <ion-icon class="price-icon" name="checkmark-outline"></ion-icon>
              <span>Order times are between 11am and 9pm</span>
            </li>
            <li className="price-list-atribute">
              <ion-icon class="price-icon" name="checkmark-outline"></ion-icon>
              <span>Delivery is free</span>
            </li>
            <li className="price-list-atribute">
              <ion-icon class="price-icon" name="close-outline"></ion-icon>
              <span></span>
            </li>
          </ul>
          <a href="/#" className="btn btn-full margin-right-sm">
            Start Eating Well
          </a>
        </div>
        <div className="price-card extra">
          <div className="price-card-containre">
            <span className="sub-heading">Complete</span>
            <h1 className="price-list-heading">$ 649</h1>
            <p className="price-list-sub">
              per month. That's just $13 per meal!
            </p>
          </div>
          <ul className="price-list">
            <li class="price-list-atribute">
              <ion-icon class="price-icon" name="checkmark-outline"></ion-icon>
              <span>2 meals per day</span>
            </li>
            <li className="price-list-atribute">
              <ion-icon class="price-icon" name="checkmark-outline"></ion-icon>
              <span>Order 24/7</span>
            </li>
            <li className="price-list-atribute">
              <ion-icon class="price-icon" name="checkmark-outline"></ion-icon>
              <span>Delivery is free</span>
            </li>
            <li className="price-list-atribute">
              <ion-icon class="price-icon" name="close-outline"></ion-icon>
              <span>Get access to latest recipes</span>
            </li>
          </ul>
          <a href="/#" class="btn btn-full margin-right-sm">
            Start Eating Well
          </a>
        </div>
      </div>
    </section>
  );
};

export default Price;
