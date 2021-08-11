import React from "react";
import "./testimonials-component.css";
import dave from "../../assests/img/customers/dave.jpg";
import ben from "../../assests/img/customers/ben.jpg";
import steve from "../../assests/img/customers/steve.jpg";
import hannah from "../../assests/img/customers/hannah.jpg";
import gallery1 from "../../assests/img/gallery/gallery-1.jpg";
import gallery2 from "../../assests/img/gallery/gallery-2.jpg";
import gallery3 from "../../assests/img/gallery/gallery-3.jpg";
import gallery4 from "../../assests/img/gallery/gallery-4.jpg";
import gallery5 from "../../assests/img/gallery/gallery-5.jpg";
import gallery6 from "../../assests/img/gallery/gallery-6.jpg";
import gallery7 from "../../assests/img/gallery/gallery-7.jpg";
import gallery8 from "../../assests/img/gallery/gallery-8.jpg";
import gallery9 from "../../assests/img/gallery/gallery-9.jpg";
import gallery10 from "../../assests/img/gallery/gallery-10.jpg";
import gallery11 from "../../assests/img/gallery/gallery-11.jpg";
import gallery12 from "../../assests/img/gallery/gallery-12.jpg";

const Testimonials = () => {
  return (
    <section className="section-testimonials" id="Testi">
      <div className="testimonials">
        <div className="testimonial-headings">
          <span className="sub-heading">Testimonials</span>
          <h1 className="secondary-heading">
            Once you try it, you can't go back
          </h1>
        </div>
        <div className="testimonials-container">
          <div className="testimonials-content">
            <img src={dave} className="testimonial-img" alt="Customer" />
            <blockquote className="testimonial-text">
              Inexpensive, healthy and great-tasting meals, without even having
              to order manually! It feels truly magical.
            </blockquote>
            <p className="testimonial-name">&dash; Dave Bryson</p>
          </div>
          <div className="testimonials-content">
            <img src={ben} className="testimonial-img" alt="Customer" />
            <blockquote className="testimonial-text">
              The AI algorithm is crazy good, it chooses the right meals for me
              every time. It's amazing not to worry about food anymore!
            </blockquote>
            <p className="testimonial-name">&dash; Ben Hadley</p>
          </div>
          <div className="testimonials-content">
            <img src={steve} className="testimonial-img" alt="Customer" />
            <blockquote className="testimonial-text">
              Omnifood is a life saver! I just started a company, so there's no
              time for cooking. I couldn't live without my daily meals now!
            </blockquote>
            <p className="testimonial-name">&dash; Steve Miller</p>
          </div>
          <div className="testimonials-content">
            <img src={hannah} className="testimonial-img" alt="Customer" />
            <blockquote className="testimonial-text">
              I got Omnifood for the whole family, and it frees up so much time!
              Plus, everything is organic and vegan and without plastic.
            </blockquote>
            <p className="testimonial-name">&dash; Hannah Smith</p>
          </div>
        </div>
      </div>
      <div className="gallery">
        <figure className="gallery-item">
          <img src={gallery1} alt="Gallery Image1" />
        </figure>
        <figure className="gallery-item">
          <img src={gallery2} alt="Gallery Image2" />
        </figure>
        <figure className="gallery-item">
          <img src={gallery3} alt="Gallery Image3" />
        </figure>
        <figure className="gallery-item">
          <img src={gallery4} alt="Gallery Image4" />
        </figure>
        <figure className="gallery-item">
          <img src={gallery5} alt="Gallery Image5" />
        </figure>
        <figure className="gallery-item">
          <img src={gallery6} alt="Gallery Image6" />
        </figure>
        <figure className="gallery-item">
          <img src={gallery7} alt="Gallery Image7" />
        </figure>
        <figure className="gallery-item">
          <img src={gallery8} alt="Gallery Image8" />
        </figure>
        <figure className="gallery-item">
          <img src={gallery9} alt="Gallery Image9" />
        </figure>
        <figure className="gallery-item">
          <img src={gallery10} alt="Gallery Image10" />
        </figure>
        <figure className="gallery-item">
          <img src={gallery11} alt="Gallery Image11" />
        </figure>
        <figure className="gallery-item">
          <img src={gallery12} alt="Gallery Image12" />
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;
