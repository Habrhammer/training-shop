import React from "react";
import "./Subscribe.scss";
import man from "./../../assets/images/subscribe_section/man.png";
import woman from "./../../assets/images/subscribe_section/woman.png";

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="subscribe__body _container">
        <div className="subscribe__content">
          <h2 className="subscribe__title">Special Offer</h2>
          <div className="subscribe__text">
            Subscribe
            <br /> And <span>Get 10% Off</span>
          </div>
          <form action="#" className="subscribe__form subscribe-form">
            <input
              type="text"
              className="subscribe-form__input"
              placeholder="Enter your email"
            />
            <button className="subscribe-form__btn">Subscribe</button>
          </form>
        </div>
        <img src={woman} alt="women" className="subscribe__img1" />
        <img src={man} alt="men" className="subscribe__img2" />
      </div>
    </section>
  );
};

export default Subscribe;
