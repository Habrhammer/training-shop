import React from "react";
import { Link } from "react-router-dom";

import "./Clothes.scss";

const clothesMenu = [
  "NEW ARRIVALS",
  "SPECIALS",
  "BESTSELLERS",
  "MOST VIEWED",
  "FEATURED PRODUCTS",
];

const Clothes = ({ productType, data }) => {
  console.log(data[productType]);
  return (
    <section className="clothes" data-test-id={`clothes-${productType}`}>
      <div className="clothes__header _container">
        <h2 className="clothes__maintitle">{`${productType}'s`}</h2>
        <div className="clothes__menu clothes-menu">
          {clothesMenu.map((title, index) => {
            return (
              <div className="clothes-menu__item" key={index}>
                {title}
              </div>
            );
          })}
        </div>
      </div>
      <div className="clothes__body _container">
        <div className="clothes__cards cards">
          {data[productType].map(({ id, image, title, price, rating }) => {
            return (
              <div className="cards__column" key={id}>
                <Link
                  to={`${productType}/${id}`}
                  className="cards__item cards-item"
                  data-test-id={`clothes-card-${productType}`}
                >
              <div className="cards-item__image">
                 <img src={image} alt={title}/>
              </div>
              <div className="cards-item__title">{title}</div>
              
              <div className="cards-item__info">
                 <div className="cards-item__price">{`${price} $`}</div>
                 <div className="cards-item__rating">{rating}</div>
              </div>
                </Link>
              </div>
            );
          })}
          <div className="cards__column">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clothes;
