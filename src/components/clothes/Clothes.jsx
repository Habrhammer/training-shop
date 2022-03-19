import React, { useState } from "react";
import { Link } from "react-router-dom";

import ClothesBody from "./clothes-body/ClothesBody";
import "./Clothes.scss";



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

  const particularGoods = goods.products && goods.products[productType].filter((n) => {
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
                  data-test-id={`clothes-${productType}-${e.particularName}`}
                  defaultChecked={index === 0}
                  type="radio"
                  name={`particular-${productType}`}
                  onClick={onParticularChange}
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

      <div className="clothes__footer _container">
        <Link to={`${productType}`} className="clothes__link">
          See all
        </Link>
      </div>
    </section>
  );
};

export default Clothes;
