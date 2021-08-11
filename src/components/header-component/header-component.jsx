import React from "react";
import logo from "../../assests/img/omnifood-logo.png";
import "./header-component.css";

const Header = () => {
  return (
    <header className="header">
      <a href="/#">
        <img className="header-image" src={logo} alt="Header-img" />
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a href="#HowItWorks" className="main-nav-link">
              How It Works
            </a>
          </li>
          <li>
            <a href="#Meals" className="main-nav-link">
              Meals
            </a>
          </li>
          <li>
            <a href="#Testi" className="main-nav-link">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#Price" className="main-nav-link">
              Pricing
            </a>
          </li>
          <li>
            <a href="/#" className="main-nav-link last-link">
              Try For Free
            </a>
          </li>
        </ul>
      </nav>

      <button className="btn-mobile-nav">
        <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>
    </header>
  );
};

export default Header;
