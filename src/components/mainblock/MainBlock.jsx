import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";

import "./MainBlock.scss";

import slide from "./../../assets/images/main_slider/woman.jpg";
import arrow_left from "../../assets/images/main_slider/arrow_left.svg";
import arrow_right from "../../assets/images/main_slider/arrow_right.svg";

import accessories from "./../../assets/images/category_nav/accessories.jpg";
import men from "./../../assets/images/category_nav/men.jpg";
import women from "./../../assets/images/category_nav/women.jpg";

const MainBlock = () => {
  return (
    <section className="mainblock">
      <div className="mainblock__body _container">
        <div className="mainblock__slider mainblock-slider">
          <div className="mainblock-slider__arrow-left">
            <img src={arrow_left} alt="" />
          </div>
          <div className="mainblock-slider__arrow-right">
            <img src={arrow_right} alt="" />
          </div>
          <Swiper
            slidesPerView={1}
            navigation={{
              nextEl: ".mainblock-slider__arrow-right",
              prevEl: ".mainblock-slider__arrow-left",
            }}
            modules={[Navigation]}
            className="mainblock-slider__body"
          >
            <SwiperSlide className="mainblock-slider__item">
              {/* <div className="mainblock-slider__item"> */}
              <div className="mainblock-slider__image">
                <img src={slide} alt="" />
              </div>
              <div className="mainblock-slider__content content-slider">
                <a href="/#" className="content-slider__link">
                  <div className="content-slider__title">BANNER</div>
                  <div className="content-slider__text">your title text</div>
                </a>
              </div>
              {/* </div> */}
            </SwiperSlide>
            <SwiperSlide className="mainblock-slider__item">
              {/* <div className="mainblock-slider__item"> */}
              <div className="mainblock-slider__image">
                <img src={slide} alt="" />
              </div>
              <div className="mainblock-slider__content content-slider">
                <a href="/#" className="content-slider__link">
                  <div className="content-slider__title">BANNER</div>
                  <div className="content-slider__text">your title text</div>
                </a>
              </div>
              {/* </div> */}
            </SwiperSlide>
            <SwiperSlide className="mainblock-slider__item">
              {/* <div className="mainblock-slider__item"> */}
              <div className="mainblock-slider__image">
                <img src={slide} alt="" />
              </div>
              <div className="mainblock-slider__content content-slider">
                <a href="/#" className="content-slider__link">
                  <div className="content-slider__title">BANNER</div>
                  <div className="content-slider__text">your title text</div>
                </a>
              </div>
              {/* </div> */}
            </SwiperSlide>
          </Swiper>
          {/* <div className="mainblock-slider__body">

            <div className="mainblock-slider__item">
              <div className="mainblock-slider__image">
                <img src={slide} alt="" />
              </div>
              <div className="mainblock-slider__content content-slider">
                <a href="/#" className="content-slider__link">
                  <div className="content-slider__title">BANNER</div>
                  <div className="content-slider__text">your title text</div>
                </a>
              </div>
            </div>

          </div> */}

          {/* <div className="slider__navigation-prev"></div>
          <div className="slider__navigation-next"></div> */}
        </div>
        <div className="mainblock__content card-category">
          <div className="card-category__column">
            <div className="card-category__item _ibg">
              <img className="card-category__image" src={women} alt="" />
              <div className="card-category__wrapper">
                <a href="/#" className="card-category__link">
                  WOMEN
                </a>
              </div>
            </div>
          </div>
          <div className="card-category__column">
            <div className="card-category__item _ibg">
              <img className="card-category__image" src={men} alt="" />
              <div className="card-category__wrapper">
                <a href="/#" className="card-category__link">
                  MEN
                </a>
              </div>
            </div>
          </div>
          <div className="card-category__column">
            <div className="card-category__item _ibg">
              <img className="card-category__image" src={accessories} alt="" />
              <div className="card-category__wrapper">
                <a href="/#" className="card-category__link">
                  ACCESSORIES
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBlock;
