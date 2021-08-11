import React from "react";
import logo from "../../assests/img/omnifood-logo.png";
import "./footer-component.css";

const Footer = () => {
  return (
    <footer>
      <div className="container grid grid--5--cols">
        <div className="logo-col">
          <a className="footer-logo" href="/#">
            <img className="header-image" src={logo} alt="logo-img" />
          </a>
          <ul className="social-links">
            <li>
              <a className="footer-link" href="/#">
                <ion-icon class="social-icon" name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a className="footer-link" href="/#">
                <ion-icon class="social-icon" name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a className="footer-link" href="/#">
                <ion-icon class="social-icon" name="logo-twitter"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-us">
          <p className="footer-heading">Contact US</p>
          <address className="contact-us-info">
            <p className="adr">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p className="contact-us-links">
              <a href="tel:415-201-6370"> 415-201-6370</a>
              <a href="mailto:hello@omnifood.com">hello@omnifood.com</a>
            </p>
          </address>
        </div>
        <div className="footer-nav">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav-list">
            <li className="footer-nav-list-atri">
              <a className="footer-link" href="/#">
                Create account
              </a>
            </li>
            <li className="footer-nav-list-atri">
              <a className="footer-link" href="/#">
                Sign in
              </a>
            </li>
            <li className="footer-nav-list-atri">
              <a className="footer-link" href="/#">
                iOS app
              </a>
            </li>
            <li className="footer-nav-list-atri">
              <a className="footer-link" href="/#">
                Android app
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-nav">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav-list">
            <li className="footer-nav-list-atri">
              <a className="footer-link" href="/#">
                About Omnifood{" "}
              </a>
            </li>
            <li className="footer-nav-list-atri">
              <a className="footer-link" href="/#">
                For Business
              </a>
            </li>
            <li className="footer-nav-list-atri">
              <a className="footer-link" href="/#">
                Cooking partners
              </a>
            </li>
            <li className="footer-nav-list-atri">
              <a className="footer-link" href="/#">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-nav">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav-list">
            <li className="footer-nav-list-atri">
              <a className="footer-link" href="/#">
                Recipe directory
              </a>
            </li>
            <li className="footer-nav-list-atri">
              <a className="footer-link" href="/#">
                Help center
              </a>
            </li>
            <li className="footer-nav-list-atri">
              <a className="footer-link" href="/#">
                Privacy & terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
