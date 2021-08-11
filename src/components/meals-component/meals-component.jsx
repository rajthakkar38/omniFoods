import React from "react";
import "./meals-component.css";
import meal1 from "../../assests//img//meals/meal-1.jpg";
import meal2 from "../../assests//img//meals/meal-2.jpg";

const Meals = () => {
  return (
    <section className="meals-section" id="Meals">
      <div className="container">
        <span style={{ textAlign: "center" }} className="sub-heading">
          Meals
        </span>
        <h1 style={{ textAlign: "center" }} className="secondary-heading">
          Omnifood AI chooses from 5,000+ recipes
        </h1>
      </div>
      <div className="grid grid--3--cols container">
        <div className="meals">
          <img className="meal-img" src={meal1} alt="meal1" />
          <div className="meal-con">
            <div className="meal-tags">
              <span className="meal-cat">Vegetarian</span>
            </div>
            <p className="meal-title">Japanese Gyozas</p>
            <ul className="meal-list">
              <li className="list-atri">
                <ion-icon className="meal-icon" name="flame-outline"></ion-icon>
                <span>
                  <strong>650</strong> calories
                </span>
              </li>
              <li className="list-atri">
                <ion-icon
                  className="meal-icon"
                  name="restaurant-outline"
                ></ion-icon>
                <span>
                  NutriScore &reg; <strong>74</strong>
                </span>
              </li>
              <li className="list-atri">
                <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                <span>
                  <strong>4.8</strong> rating (537)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="meals" id="Price">
          <img className="meal-img" src={meal2} alt="meal2" />
          <div className="meal-con">
            <div className="meal-tags">
              <span className="meal-cat">Vegetarian</span>
              <span className="meal-cat meal-pal">Paleo</span>
            </div>
            <p className="meal-title">Avocado Salad</p>
            <ul className="meal-list">
              <li className="list-atri">
                <ion-icon className="meal-icon" name="flame-outline"></ion-icon>
                <span>
                  <strong>400</strong> calories
                </span>
              </li>
              <li className="list-atri">
                <ion-icon
                  className="meal-icon"
                  name="restaurant-outline"
                ></ion-icon>
                <span>
                  NutriScore &reg; <strong>92</strong>
                </span>
              </li>
              <li className="list-atri">
                <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                <span>
                  <strong>4.8</strong> rating (441)
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="list">
          <h2 className="list-meal-title">Works with any diet:</h2>
          <ul className="diet-list">
            <li className="diet-list-atri">
              <ion-icon class="diet-icon" name="checkmark-outline"></ion-icon>
              <span>Vegetarian</span>
            </li>
            <li className="diet-list-atri">
              <ion-icon class="diet-icon" name="checkmark-outline"></ion-icon>
              <span>Vegan</span>
            </li>
            <li className="diet-list-atri">
              <ion-icon class="diet-icon" name="checkmark-outline"></ion-icon>
              <span>Pescatarian</span>
            </li>
            <li className="diet-list-atri">
              <ion-icon class="diet-icon" name="checkmark-outline"></ion-icon>
              <span>Gluten-free</span>
            </li>
            <li className="diet-list-atri">
              <ion-icon class="diet-icon" name="checkmark-outline"></ion-icon>
              <span>Lactose-free</span>
            </li>
            <li className="diet-list-atri">
              <ion-icon class="diet-icon" name="checkmark-outline"></ion-icon>
              <span>Keto</span>
            </li>
            <li className="diet-list-atri">
              <ion-icon class="diet-icon" name="checkmark-outline"></ion-icon>
              <span>Paleo</span>
            </li>
            <li className="diet-list-atri">
              <ion-icon class="diet-icon" name="checkmark-outline"></ion-icon>
              <span>Low FODMAP</span>
            </li>
            <li className="diet-list-atri">
              <ion-icon class="diet-icon" name="checkmark-outline"></ion-icon>
              <span>Kid-friendly</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Meals;
