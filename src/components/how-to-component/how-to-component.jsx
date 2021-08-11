import React from "react";
import "./how-to-component.css";
import appimg1 from "../../assests/img/app/app-screen-1.png";
import appimg2 from "../../assests/img/app/app-screen-2.png";
import appimg3 from "../../assests/img/app/app-screen-3.png";

const HowTo = () => {
  return (
    <section className="how-to" id="HowItWorks">
      <div className="container">
        <span className="sub-heading">How It Works</span>
        <h2 className="secondary-heading">
          Your daily dose of health in 3 simple steps
        </h2>
      </div>
      <div className="grid grid--2--cols container grid-centre-v">
        <div className="step-text-box">
          <p className="step-number">01</p>
          <h3 className="heading-tertiary">
            Tell us what you like (and what not)
          </h3>
          <p className="step-des">
            Never again waste time thinking about what to eat! Omnifood AI will
            create a 100% personalized weekly meal plan just for you. It makes
            sure you get all the nutrients and vitamins you need, no matter what
            diet you follow!
          </p>
        </div>
        <div className="step-img-box">
          <img src={appimg1} className="step-img" alt="app-img1" />
        </div>
        <div className="step-img-box">
          <img src={appimg2} className="step-img" alt="app-img2" />
        </div>
        <div className="step-text-box">
          <p className="step-number">02</p>
          <h3 className="heading-tertiary">Approve your weekly meal plan</h3>
          <p className="step-des">
            Once per week, approve the meal plan generated for you by Omnifood
            AI. You can change ingredients, swap entire meals, or even add your
            own recipes.
          </p>
        </div>
        <div className="step-text-box">
          <p className="step-number">03</p>
          <h3 className="heading-tertiary">Receive meals at convenient time</h3>
          <p className="step-des">
            Best chefs in town will cook your selected meal every day, and we
            will deliver it to your door whenever works best for you. You can
            change delivery schedule and address daily!
          </p>
        </div>
        <div className="step-img-box">
          <img src={appimg3} className="step-img" alt="app-img3" />
        </div>
      </div>
    </section>
  );
};

export default HowTo;
