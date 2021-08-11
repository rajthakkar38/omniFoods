import React from "react";
import img1 from "../../assests/img/logos/techcrunch.png";
import img2 from "../../assests/img/logos/forbes.png";
import img3 from "../../assests/img/logos/business-insider.png";
import img4 from "../../assests/img/logos/the-new-york-times.png";
import img5 from "../../assests/img/logos/usa-today.png";
import "./featured-in.css";

const FeaturedIn = () => {
  return (
    <section className="section-logos">
      <div className="container">
        <h2 className="logos-heading">AS FEATURED IN</h2>
        <div className="logo-imgs">
          <img src={img1} className="logo-img" alt="featured-in-img" />
          <img src={img2} className="logo-img" alt="featured-in-img" />
          <img src={img3} className="logo-img" alt="featured-in-img" />
          <img src={img4} className="logo-img" alt="featured-in-img" />
          <img src={img5} className="logo-img" alt="featured-in-img" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
