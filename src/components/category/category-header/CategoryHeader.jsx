import React from "react";
import { Link } from "react-router-dom";
import "./CategoryHeader.scss";
import arrow from "./../../../assets/images/category_header/arrow.svg";
import share from "./../../../assets/images/category_header/share.svg";

const CategoryHeader = ({ productType }) => {
  return (
    <div className="category__header category-header">
      <div className="category-header__container _container">
        <div className="category-header__top">
          <div className="category-header__breadcrumbs category-breadcrumbs">
            <div className="category-breadcrumbs__back">
              <Link to="/">
                <span>Home</span>
              </Link>
              <img src={arrow} alt="" />
              <span>
                {productType.charAt(0).toUpperCase() + productType.slice(1)}
              </span>
            </div>
          </div>
          <div className="category-header__share">
            <img src={share} alt="" />
            <span>Share</span>
          </div>
        </div>
        <div className="category-header__bottom">
          <h2 className="category-header__title">{productType}</h2>
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;
