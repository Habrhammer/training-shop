import React from "react";
import { Link } from "react-router-dom";
import FilterBlock from "../../filter/filter-block/FilterBlock";
import CategoryHeader from "../category-header/CategoryHeader";
import stars from "./../../../assets/images/rating/stars.svg";
import "./CategoryBlock.scss";

const clothesMenu = [
  "NEW ARRIVALS",
  "SPECIALS",
  "BESTSELLERS",
  "MOST VIEWED",
  "FEATURED PRODUCTS",
];

const CategoryBlock = ({ productType, data, dataFilter }) => {
  console.log(data[productType]);
  return (
    <section className="category" data-test-id={`clothes-${productType}`}>
 
      <CategoryHeader productType={productType}/>
      <FilterBlock dataFilter={dataFilter}/>
      <div className="category__body _container">
        <div className="category__cards cards">
          {data[productType].map(({ id, image, title, price, rating }) => {
            return (
              <div className="cards__column" key={id}>
                <Link
                  to={`${productType}/${id}`}
                  className="cards__item cards-item"
                  data-test-id={`clothes-card-${productType}`}
                >
                  <div className="cards-item__image">
                    <img src={image} alt={title} />
                  </div>
                  <div className="cards-item__title">{title}</div>

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
      </div>
      {/* <div className="clothes__footer _container">
        <Link to={`${productType}`} className="clothes__link">
          See all
        </Link>
      </div> */}
    </section>
  );
};

export default CategoryBlock;