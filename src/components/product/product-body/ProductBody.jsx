import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./ProductBody.scss";
import ProductHeader from "../product-header/ProductHeader";
import up from "../../../assets/images/product-slider/arrow_up.svg";
import down from "../../../assets/images/product-slider/arrow_down.svg";
import prev from "../../../assets/images/product-slider/arrow_prev.svg";
import next from "../../../assets/images/product-slider/arrow_next.svg";

import clothes_hanger from "../../../assets/images/product-options/clothes-hanger.svg";
import heart from "../../../assets/images/product-options/heart.svg";
import scales from "../../../assets/images/product-options/scales.svg";

import truck from "../../../assets/images/product-options/truck.svg";
import refresh from "../../../assets/images/product-options/refresh.svg";
import mail from "../../../assets/images/product-options/mail.svg";

import stripe from "../../../assets/images/product-options/checkout/stripe.svg";
import aes from "../../../assets/images/product-options/checkout/aes.svg";
import paypal from "../../../assets/images/product-options/checkout/paypal.svg";
import visa from "../../../assets/images/product-options/checkout/visa.svg";
import mastercard from "../../../assets/images/product-options/checkout/mastercard.svg";
import discover from "../../../assets/images/product-options/checkout/discover.svg";
import american_express from "../../../assets/images/product-options/checkout/american-express.svg";

import annotation from "../../../assets/images/product-options/checkout/annotation.svg";

import StarRating from "../../rating/StarRating";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/reducers/cartReducer";
import { getProduct } from "../../../redux/reducers/productReducer";
import Loader from "../../loader/Loader";
import ErrorBlock from "../../error/ErrorBlock";

const checkout = [
  {
    id: "1",
    image: stripe,
  },
  {
    id: "2",
    image: aes,
  },
  {
    id: "3",
    image: paypal,
  },
  {
    id: "4",
    image: visa,
  },
  {
    id: "5",
    image: mastercard,
  },
  {
    id: "6",
    image: discover,
  },
  {
    id: "7",
    image: american_express,
  },
];

const ProductBody = ({ productType, goods }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [productNavSlider, setProductNavSlider] = useState(null);
  const [productMainSlider, setProductMainSlider] = useState(null);

  const {product, isLoading, isError} = useSelector(({ product }) => {
    return product;
  });
  console.log(product,isError);

  const filteredColors = (array = [], propertyName) => {
    return array.filter(
      (e, i) =>
        array.findIndex((a) => a[propertyName] === e[propertyName]) === i
    );
  };

  let [color, setColor] = useState();
  let [urlImage, setUrlImage] = useState();
  let [size, setSize] = useState();

  const productsInCart = useSelector(({ cart }) => {
    return cart.order;
  });

  let orderId = `${product && product.id}_${color}_${size}`;

  const addOrder = (order) => {
    dispatch(addToCart(order));
  };

  const removeOrder = (id) => {
    dispatch(removeFromCart(id));
  };

  useEffect(() => {
    dispatch(getProduct(id));
    console.log('1');
  }, [dispatch, id]);

  const isProductInCart = productsInCart
    .map((e) => {
      return e.id;
    })
    .includes(`${product && product.id}_${color}_${size}`);

  useEffect(() => {
    product && (product.images &&
      setColor(filteredColors(product.images, "color")[0].color));
    product && (product.sizes && setSize(product.sizes[0]));
    product && (product.images &&
      setUrlImage(filteredColors(product.images, "color")[0].url));
  }, [product, product?.images, product?.sizes]);


  return (
    <>
      {(isLoading && <Loader data-test-id="loader"/>)}
      {isError && <ErrorBlock data-test-id="error" statusError={isError}/>}
      <section
        className="product product-page"
        data-test-id={`product-page-${productType}`}
      >
        <ProductHeader product={product} productType={productType} />
        <div className="product__body">
          <div className="product__container _container">
            <div className="product__content">
              <div className="product__images product-images">
                <div className="product-images__navslider images-navslider">
                  <div className="images-navslider__control">
                    <div
                      className="images-navslider__up"
                      onClick={() => {
                        productMainSlider.slidePrev();
                      }}
                    >
                      <img src={up} alt="up" />
                    </div>
                    <div
                      className="images-navslider__down"
                      onClick={() => {
                        productMainSlider.slideNext();
                      }}
                    >
                      <img src={down} alt="down" />
                    </div>
                  </div>

                  <Swiper
                    onSwiper={setProductNavSlider}
                    direction="vertical"
                    spaceBetween={18}
                    slidesPerView={4}
                    navigation={{
                      nextEl: ".images-navslider__down",
                      prevEl: ".images-navslider__up",
                    }}
                    className="images-navslider__slides"
                    modules={[Navigation, Thumbs]}
                  >
                    {product && (product.images &&
                      product.images.map((e) => {
                        return (
                          <SwiperSlide key={e.id}>
                            <div className="images-navslider__slide _ibg">
                              <img
                                src={`https://training.cleverland.by/shop${e.url}`}
                                alt={""}
                              />
                            </div>
                          </SwiperSlide>
                        );
                      }))}
                  </Swiper>
                </div>
                <div className="product-images__mainslider images-mainslider">
                  <Swiper
                    onSwiper={setProductMainSlider}
                    thumbs={{ swiper: productNavSlider }}
                    observer={true}
                    direction="horizontal"
                    slidesPerView={1}
                    data-test-id="product-slider"
                    className="images-mainslider__slides"
                    navigation={{
                      nextEl: ".images-mainslider__next",
                      prevEl: ".images-mainslider__prev",
                    }}
                    modules={[Navigation, Thumbs]}
                  >
                    <div className="images-mainslider__prev">
                      <img src={prev} alt="prev" />
                    </div>
                    <div className="images-mainslider__next">
                      <img src={next} alt="next" />
                    </div>
                    {product && (product.images &&
                      product.images.map((e) => {
                        return (
                          <SwiperSlide key={e.id}>
                            <div className="images-mainslider__slide">
                              <img
                                src={`https://training.cleverland.by/shop${e.url}`}
                                alt={""}
                              />
                            </div>
                          </SwiperSlide>
                        );
                      }))}
                  </Swiper>
                </div>
              </div>
              <div className="product__actions product-actions">
                <div className="product-actions__container">
                  <div className="product-actions__color product-color">
                    <div className="product-color__header">
                      <span>COLOR: </span>
                      <span>{color}</span>
                    </div>
                    <div className="product-color__body color-option">
                      {product && filteredColors(product.images, "color").map((e, i) => {
                        return (
                          <label className="color-option__item _ibg" key={e.id}>
                            <input
                              type="radio"
                              name="color"
                              defaultChecked={i === 0}
                              value={e.color}
                              id={e.id}
                              onClick={() => {
                                setColor(e.color);
                                setUrlImage(e.url);
                              }}
                            />
                            <img
                              src={`https://training.cleverland.by/shop${e.url}`}
                              alt=""
                            />
                          </label>
                        );
                      })}
                    </div>
                  </div>
                  <div className="product-actions__size product-size">
                    <div className="product-size__header">
                      <span>SIZE: </span>
                      <span>{size}</span>
                    </div>
                    <div className="product-size__body size-option">
                      {product && (product.sizes &&
                        product.sizes.map((e, i) => {
                          return (
                            <label className="size-option__item" key={i + id}>
                              <input
                                type="radio"
                                defaultChecked={i === 0}
                                value={e}
                                name="size"
                                onClick={() => {
                                  setSize(e);
                                }}
                              />

                              <span>{e}</span>
                            </label>
                          );
                        }))}
                    </div>
                    <div className="product-size__guide">
                      <img src={clothes_hanger} alt="" />
                      <span>Size guide</span>
                    </div>
                  </div>

                  <hr />
                  <div className="product-actions__pay product-pay">
                    <div className="product-pay__price">$ {product && product.price}</div>
                    <button
                      data-test-id="add-cart-button"
                      className="product-pay__btn"
                      onClick={() => {
                        isProductInCart
                          ? removeOrder(orderId)
                          : addOrder({
                              id: orderId,
                              name: product.name,
                              color: color,
                              image: urlImage,
                              size: size,
                              price: product.price,
                              quantity: 1,
                            });
                      }}
                    >
                      {isProductInCart ? "REMOVE TO CARD" : "ADD TO CARD"}
                    </button>
                    <button className="product-pay__favorite">
                      <img src={heart} alt="heart" />
                    </button>
                    <button className="product-pay__compare">
                      <img src={scales} alt="scales" />
                    </button>
                  </div>
                  <hr />
                  <div className="product-actions__include product-include">
                    <div className="product-include__body">
                      <div className="product-iclude__item">
                        <img src={truck} alt="truck" />
                        <span>Shipping & Delivery</span>
                      </div>
                      <div className="product-iclude__item">
                        <img src={refresh} alt="refresh" />
                        <span>Returns & Exchanges</span>
                      </div>
                      <div className="product-iclude__item">
                        <img src={mail} alt="mail" />
                        <span>Ask a question</span>
                      </div>
                    </div>
                  </div>
                  <div className="product-actions__checkout product-checkout">
                    <div className="product-checkout__header">
                      <div className="product-checkout__title">
                        guaranteed safe checkout
                      </div>
                      <hr />
                    </div>
                    <div className="product-checkout__body">
                      {checkout.map(({ id, image }) => {
                        return (
                          <div className="product-checkout__item" key={id}>
                            <img src={image} alt="" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <hr />
                  <div className="product-actions__description product-description">
                    <div className="product-description__header">
                      <div className="product-description__title">
                        DESCRIPTION
                      </div>
                    </div>
                    <hr />
                    <div className="product-description__body">
                      <div className="product-description__item description-item">
                        <div className="description-item__title">
                          ADDITIONAL INFORMATION
                        </div>
                        <div className="description-item__content">
                          <p>
                            <span>Color: </span>
                            <span>
                              {
                                new Set(
                                  product && (product.images &&
                                    product.images.map((e) => `${e.color}, `))
                                )
                              }
                            </span>
                          </p>
                          <p>
                            <span>Size: </span>
                            <span>
                              {product && (product.sizes &&
                                product.sizes.map((e) => `${e}, `))}
                            </span>
                          </p>
                          <p>
                            <span>Material: </span>
                            <span>{product && product.material}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="product-actions__reviews product-reviews">
                    <div className="product-reviews__header">
                      <div className="product-reviews__title">Reviews</div>

                      <div className="product-reviews__action">
                        <div className="product-reviews__rating">
                          <span>
                            <StarRating
                              ratingCount={product && product.rating}
                              isChange={false}
                            />
                          </span>

                          <span>
                            {product && (product.reviews && product.reviews.length)} Reviews
                          </span>
                        </div>
                        <button className="product-reviews__write">
                          <img src={annotation} alt="" />
                          <span>Write a review</span>
                        </button>
                      </div>
                    </div>
                    <div className="product-reviews__body">
                      {product && (product.reviews &&
                        product.reviews.map((e) => {
                          return (
                            <div
                              className="product-reviews__item reviews-item"
                              key={e.id}
                            >
                              <div className="reviews-item__header">
                                <div className="reviews-item__author">
                                  {e.name}
                                </div>
                                <div className="reviews-item__info">
                                  <div className="reviews-item__date">
                                    3 months ago
                                  </div>
                                  <div className="reviews-item__rating">
                                    <StarRating
                                      ratingCount={e.rating}
                                      isChange={false}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="reviews-item__text">{e.text}</div>
                            </div>
                          );
                        }))}
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
            <div className="product__related related-product">
              <div className="related-product__header">
                <div className="related-product__title">RELATED PRODUCTS</div>
                <div className="related-product__control">
                  <div className="slider-related__prev">
                    <img src={prev} alt="prev" />
                  </div>
                  <div className="slider-related__next">
                    <img src={next} alt="next" />
                  </div>
                </div>
              </div>
              <div className="category__body">
                <div className="category__cards cards">
                  <Swiper
                    data-test-id="related-slider"
                    slidesPerView={4}
                    direction="horizontal"
                    loop={true}
                    slidesPerGroup={1}
                    navigation={{
                      nextEl: ".slider-related__next",
                      prevEl: ".slider-related__prev ",
                    }}
                    className="slider-related__slides"
                    modules={[Navigation]}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      480: {
                        slidesPerView: 2,
                      },
                      768: {
                        slidesPerView: 3,
                      },
                      992: {
                        slidesPerView: 4,
                      },
                    }}
                  >
                    {goods.products[productType] &&
                      goods.products[productType].map(
                        ({ id, images, name, price, rating }) => {
                          return (
                            <SwiperSlide key={id}>
                              <div className="cards__column">
                                <Link
                                  to={`${id}`}
                                  onClick={() => {
                                    productMainSlider.slideTo(0, false);
                                    productNavSlider.slideTo(0, false);
                                  }}
                                  className="cards__item cards-item"
                                  data-test-id={`clothes-card-${productType}`}
                                >
                                  <div className="cards-item__image">
                                    <img
                                      src={`https://training.cleverland.by/shop${images[0].url}`}
                                      alt={name}
                                    />
                                  </div>
                                  <div className="cards-item__title">
                                    {name}
                                  </div>

                                  <div className="cards-item__info">
                                    <div className="cards-item__price">{`${price} $`}</div>
                                    <div className="cards-item__rating">
                                      <StarRating
                                        ratingCount={rating}
                                        isChange={false}
                                      />
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </SwiperSlide>
                          );
                        }
                      )}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductBody;
