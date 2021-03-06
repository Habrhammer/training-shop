import React from "react";
import { Link } from "react-router-dom";
import "./ProductHeader.scss";

import arrow from "./../../../assets/images/category_header/arrow.svg";
import share from "./../../../assets/images/category_header/share.svg";
import StarRating from "../../rating/StarRating.jsx";

const ProductHeader = ({ productType, product }) => {
  return (
    <div className="product__header product-header">
      <div className="product-header__container _container">
        <div className="product-header__top">
          <div className="product-header__breadcrumbs product-breadcrumbs">
            <div className="product-breadcrumbs__back">
              <Link to="/">
                <span>Home</span>
              </Link>
              <img src={arrow} alt="" />
              <Link to={`/${productType}`}>
                <span>
                  {productType.charAt(0).toUpperCase() + productType.slice(1)}
                </span>
              </Link>
              <img src={arrow} alt="" />
              <span>
                {`${product && product.name}`.charAt(0).toUpperCase() +
                  `${product && product.name}`.slice(1)}
              </span>
            </div>
          </div>
          <div className="product-header__share">
            <img src={share} alt="" />
            <span>Share</span>
          </div>
        </div>
        <div className="product-header__title">
          <h2>{product && product.name}</h2>
        </div>
        <div className="product-header__bottom">
          <div className="product-header__rating product-rating">
            <span>
              <StarRating ratingCount={product && product.rating} isChange={false} />
            </span>
            <span>{product && (product.reviews ? product.reviews.length : "")} Reviews</span>
          </div>
          <div className="product-header__accounting product-accounting">
            <div className="product-accounting__sku">
              <span>SKU:</span>
              <span>777</span>
            </div>
            <div className="product-accounting__availability">
              <span>Availability:</span>
              <span>In Stock</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
