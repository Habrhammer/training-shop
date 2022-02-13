import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./ProductBody.scss";
import ProductHeader from "../product-header/ProductHeader";
import up from "../../../assets/images/product-slider/arrow_up.svg";
import down from "../../../assets/images/product-slider/arrow_down.svg";
import prev from "../../../assets/images/product-slider/arrow_prev.svg";
import next from "../../../assets/images/product-slider/arrow_next.svg";

const ProductBody = ({ productType, data }) => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    setProduct(
      ...data[productType].filter((prod) => {
        return prod.id === +id;
      })
    );
  }, [data, id, productType]);
  const [imagesNavSlider, setImagesNavSlider] = useState(null);
  return (
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
                  <div className="images-navslider__up ">
                    <img src={up} alt="up" />
                  </div>
                  <div className="images-navslider__down">
                    <img src={down} alt="down" />
                  </div>
                </div>
                <Swiper
                  onSwiper={setImagesNavSlider}
                  spaceBetween={18}
                  slidesPerView={4}
                  direction="vertical"
                  loop={true}
                  navigation={{
                    nextEl: ".images-navslider__down",
                    prevEl: ".images-navslider__up ",
                  }}
                  className="images-navslider__slides"
                  modules={[FreeMode, Navigation, Thumbs]}
                >
                  <SwiperSlide>
                    <div className="images-navslider__slide _ibg">
                      <img src={product.image} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="images-navslider__slide _ibg">
                      <img src={product.image} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="images-navslider__slide _ibg">
                      <img src={product.image} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="images-navslider__slide _ibg">
                      <img src={product.image} alt="" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="product-images__mainslider images-mainslider">
                <Swiper
                  slidesPerView={1}
                  direction="horizontal"
                  loop={true}
                  thumbs={{ swiper: imagesNavSlider }}
                  navigation={{
                    nextEl: ".images-mainslider__next",
                    prevEl: ".images-mainslider__prev ",
                  }}
                  className="images-mainslider__slides"
                  modules={[FreeMode, Navigation, Thumbs]}
                >
                  <div className="images-mainslider__prev">
                    <img src={prev} alt="prev" />
                  </div>
                  <div className="images-mainslider__next">
                    <img src={next} alt="next" />
                  </div>

                  <SwiperSlide>
                    <div className="images-mainslider__slide">
                      <img src={product.image} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="images-mainslider__slide">
                      <img src={product.image} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="images-mainslider__slide">
                      <img src={product.image} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="images-mainslider__slide">
                      <img src={product.image} alt="" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="product__actions product-actions">
              <div className="product-actions__color"></div>
              <div className="product-actions__size"></div>
              <hr />
              <div className="product-actions__pay"></div>
              <div className="product-actions__inclide"></div>
              <div className="product-actions__checkout"></div>
              <div className="product-actions__description"></div>
              <div className="product-actions__reviews"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBody;
