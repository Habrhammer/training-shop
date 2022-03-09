import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import FilterBlock from "../../filter/filter-block/FilterBlock";
import StarRating from "../../rating/StarRating";
import CategoryHeader from "../category-header/CategoryHeader";
import "./CategoryBlock.scss";

const CategoryBlock = ({ productType, goods }) => {
  const colors = useMemo(
    () => [
      ...new Set(
        goods[productType]
          .map((n) => {
            return n.images.map((e) => {
              return e.color;
            });
          })
          .flat()
      ),
    ],
    [goods, productType]
  );

  const sizes = useMemo(
    () => [
      ...new Set(
        goods[productType]
          .map((n) => {
            return n.sizes;
          })
          .flat()
      ),
    ],
    [goods, productType]
  );

  const brands = useMemo(
    () => [
      ...new Set(
        goods[productType].map((n, i) => {
          return n.brand;
        })
      ),
    ],
    [goods, productType]
  );
  const prices = ["$500+", "$200-500", "$100-200", "$50-100", "$0-50"];
  // const dataFilter = {
  //   brand: brands,
  //   color: colors,
  //   price: prices,
  //   size: sizes,
  // };

  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState([]);

  const isShowCounter =
    color.length !== 0 ||
    brand.length !== 0 ||
    size.length !== 0 ||
    price.length !== 0;

  const onColorChange = ({ target: { checked, value } }) => {
    setColor(
      !color.includes(value) && checked
        ? [...color, value]
        : color.filter((n) => n !== value)
    );
  };
  const onSizeChange = ({ target: { checked, value } }) => {
    setSize(
      !size.includes(value) && checked
        ? [...size, value]
        : size.filter((n) => n !== value)
    );
  };

  const onBrandChange = ({ target: { checked, value } }) => {
    setBrand(
      !brand.includes(value) && checked
        ? [...brand, value]
        : brand.filter((n) => n !== value)
    );
  };

  const onPriceChange = ({ target: { checked, value } }) => {
    let modValue = [value, ...value.replace(/[^-\d]/g, "").split("-")].map(
      (e, i) => (i === 0 ? e : +e)
    );
    setPrice(
      !price.includes(value) && checked
        ? [...price, value, modValue]
        : price.filter((n) => {
            return n !== value && n[0] !== modValue[0];
          })
    );
  };

  const filteredGoods = goods[productType].filter((n) => {
    return (
      (!color.length ||
        n.images
          .map((e) => {
            return color.includes(e.color);
          })
          .includes(true)) &&
      (!brand.length || brand.includes(n.brand)) &&
      (!size.length ||
        n.sizes
          .map((e) => {
            return size.includes(e);
          })
          .includes(true)) &&
      (!price.length ||
        price
          .map((e, i) => {
            return (!e[1] || e[1] <= n.price) && (!e[2] || e[2] >= n.price);
          })
          .includes(true))
    );
  });

  return (
    <section
      className="category products-page"
      data-test-id={`products-page-${productType}`}
    >
      <CategoryHeader productType={productType} />
      <FilterBlock data-test-id={`filters-${productType}`}
        // dataFilter={dataFilter}
        onColorChange={onColorChange}
        colors={colors}
        color={color}
        onBrandChange={onBrandChange}
        brands={brands}
        brand={brand}
        onSizeChange={onSizeChange}
        sizes={sizes}
        size={size}
        onPriceChange={onPriceChange}
        prices={prices}
        price={price}
      />

      {isShowCounter && (
        <div className="category__counter goods-counter">
          <div className="goods-counter__container _container">
            <div className="goods-counter__body">
              {isShowCounter && (
                <div className="goods-counter__column">
                  <div className="goods-counter__found">
                    {filteredGoods.length} items Found
                  </div>
                </div>
              )}
              {color.length !== 0 && (
                <div className="goods-counter__column">
                  <span className="goods-counter__title">Color: </span>
                  {color.map((e, i) => {
                    return (
                      <span className="goods-counter__item" key={i}>
                        {e}
                      </span>
                    );
                  })}
                </div>
              )}
              {brand.length !== 0 && (
                <div className="goods-counter__column">
                  <span className="goods-counter__title">Brand:</span>
                  {brand.map((e, i) => {
                    return (
                      <span className="goods-counter__item" key={i}>
                        {e}
                      </span>
                    );
                  })}
                </div>
              )}
              {size.length !== 0 && (
                <div className="goods-counter__column">
                  <span className="goods-counter__title">Size: </span>
                  {size.map((e, i) => {
                    return (
                      <span className="goods-counter__item" key={i}>
                        {e}
                      </span>
                    );
                  })}
                </div>
              )}
              {price.length !== 0 && (
                <div className="goods-counter__column">
                  <span className="goods-counter__title">Price:</span>
                  {price.map((e, i) => {
                    return (
                      Array.isArray(e) && (
                        <span className="goods-counter__item" key={i}>
                          {e[0]}
                        </span>
                      )
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="category__body _container">
        <div className="category__cards cards">
          {filteredGoods.map(({ id, images, name, price, rating, discount }) => {
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
