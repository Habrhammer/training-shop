import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import up from "../../../assets/images/product-slider/arrow_up.svg";
import down from "../../../assets/images/product-slider/arrow_down.svg";
import prev from "../../../assets/images/product-slider/arrow_prev.svg";
import next from "../../../assets/images/product-slider/arrow_next.svg";

const ProductSliders = ({product}) => {

   const [imagesNavSlider, setImagesNavSlider] = useState(null);

   
   const [productMainSlider, setProductMainSlider] = useState({});
   

   const [isBeginning, setBeginning] = useState();
  const [isEnd, setEnd] = useState();

 

  useEffect(() => {
   setBeginning(productMainSlider.isBeginning);
   setEnd(productMainSlider.isEnd);
 }, [productMainSlider.isBeginning, productMainSlider.isEnd]);

   return (
      <div className="product__images product-images">
      <div className="product-images__navslider images-navslider">
        <div className="images-navslider__control">
          <div
            className="images-navslider__up "
            onClick={() => {
              productNavSlider.slidePrev();
              setBeginning(productMainSlider.isBeginning);
              setEnd(productMainSlider.isEnd);
            }}
          >
            <img src={up} alt="up" />
          </div>
          <div
            className="images-navslider__down"
            onClick={() => {
              productNavSlider.slideNext();
              setBeginning(productMainSlider.isBeginning);
              setEnd(productMainSlider.isEnd);
            }}
          >
            <img src={down} alt="down" />
          </div>
        </div>

        <Swiper
          onSwiper={setImagesNavSlider}
          onInit={(ev) => {
            setProductNavSlider(ev);
          }}
          rebuildOnUpdate = {true}
          spaceBetween={18}
          slidesPerView={4}
          direction="vertical"
          className="images-navslider__slides"
          modules={[Navigation, Thumbs]}
        >
          {product.images.map((e) => {
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
          })}
        </Swiper>
      </div>
      <div className="product-images__mainslider images-mainslider">
        <Swiper
          data-test-id="product-slider"
          className="images-mainslider__slides"
          rebuildOnUpdate = {true}
          slidesPerView={1}
          direction="horizontal"
          thumbs={{ swiper: imagesNavSlider }}
          onInit={(ev) => {
            setProductMainSlider(ev);
          }}
          navigation={{
            nextEl: ".images-navslider__down",
            prevEl: ".images-navslider__up ",
          }}
          modules={[Navigation, Thumbs]}
        >
          <div
            className={
              isBeginning
                ? `images-mainslider__prev swiper-button-disabled`
                : `images-mainslider__prev `
            }
            onClick={() => {
              productMainSlider.slidePrev();
              productNavSlider.slidePrev();
              setBeginning(productMainSlider.isBeginning);
              setEnd(productMainSlider.isEnd);
            }}
          >
            <img src={prev} alt="prev" />
          </div>
          <div
            className={
              isEnd
                ? `images-mainslider__next swiper-button-disabled`
                : `images-mainslider__next `
            }
            onClick={() => {
              productMainSlider.slideNext();
              productNavSlider.slideNext();
              setBeginning(productMainSlider.isBeginning);
              setEnd(productMainSlider.isEnd);
            }}
          >
            <img src={next} alt="next" />
          </div>
          {product.images.map((e) => {
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
          })}
        </Swiper>
      </div>
    </div>
   );
};

export default ProductSliders;