import React from "react";
import { Link } from "react-router-dom";
import StarRating from "../../rating/StarRating";

const ClothesBody = ({ particularGoods, productType }) => {
  // console.log(particularGoods);
  return (
    <div className="clothes__body _container">
      <div className="clothes__cards cards">
        {particularGoods && particularGoods.map(
          ({ id, images, name, price, rating, discount }) => {
            return (
              <div className="cards__column" key={id}>
                <Link
                  to={`${productType}/${id}`}
                  className="cards__item cards-item"
                  data-test-id={`clothes-card-${productType}`}
                >
                  <div className="cards-item__image">
                    {discount && <span>{discount}</span>}
                    <img
                      src={`https://training.cleverland.by/shop${images[0].url}`}
                      alt={name}
                    />
                  </div>
                  <div className="cards-item__title">{name}</div>

                  <div className="cards-item__info">
                    <div className="cards-item__price">{`${price} $`}</div>
                    <div className="cards-item__rating">
                     
                      <StarRating ratingCount={rating}/>
                    </div>
                  </div>
                </Link>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ClothesBody;
