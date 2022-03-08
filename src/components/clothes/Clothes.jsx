import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import stars from "./../../assets/images/rating/stars.svg";
import ClothesBody from "./clothes-body/ClothesBody";
import "./Clothes.scss";

// const clothesMenu = [
//   "NEW ARRIVALS",
//   "SPECIALS",
//   "BESTSELLERS",
//   "MOST VIEWED",
//   "FEATURED PRODUCTS",
// ];

const clothesMenu = [
  { particularName: "isNewArrivals", name: "NEW ARRIVALS" },
  { particularName: "isSpecial", name: "SPECIALS" },
  { particularName: "isBestseller", name: "BESTSELLERS" },
  { particularName: "isMostViewed", name: "MOST VIEWED" },
  { particularName: "isFeatured", name: "FEATURED PRODUCTS" },
];

const Clothes = ({ productType, goods, data }) => {
  const [particular, setParticular] = useState("isNewArrivals");

  const onParticularChange = ({ target: { checked, value } }) => {
    setParticular(value);
  };

  const particularGoods = goods[productType].filter((n) => {
    return n.particulars[particular];
  });

  return (
    <section className="clothes" data-test-id={`clothes-${productType}`}>
      <div className="clothes__header _container">
        <h2 className="clothes__maintitle">{`${productType}'s`}</h2>
        <div className="clothes__menu clothes-menu">
          {clothesMenu.map((e, index) => {
            return (
              <label className="clothes-menu__item" key={index}>
                <input
                  defaultChecked={index === 0}
                  type="radio"
                  name={`particular-${productType}`}
                  onChange={onParticularChange}
                  value={e.particularName}
                  id={e.particularName}
                />
                <span>{e.name}</span>
              </label>
            );
          })}
        </div>
      </div>
      <ClothesBody
        particularGoods={particularGoods}
        productType={productType}
      />
      {/* <div className="clothes__body _container">
        <div className="clothes__cards cards">
          {particularGoods.map(({ id, images, name, price, rating }) => {
            return (
              <div className="cards__column" key={id}>
                <Link
                  to={`${productType}/${id}`}
                  className="cards__item cards-item"
                  data-test-id={`clothes-card-${productType}`}
                >
                  <div className="cards-item__image">
                    <img
                      src={`https://training.cleverland.by/shop${images[0].url}`}
                      alt={name}
                    />
                  </div>
                  <div className="cards-item__title">{name}</div>

                  <div className="cards-item__info">
                    <div className="cards-item__price">{`${price} $`}</div>
                    <div className="cards-item__rating">
                      <img src={stars} alt="" />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div> */}
      <div className="clothes__footer _container">
        <Link to={`${productType}`} className="clothes__link">
          See all
        </Link>
      </div>
    </section>
  );
};

export default Clothes;
