import "./MainBlock.scss";

import slide from "./../../assets/images/main_slider/woman.jpg";
import accessories from "./../../assets/images/category_nav/accessories.jpg";
import men from "./../../assets/images/category_nav/men.jpg";
import women from "./../../assets/images/category_nav/women.jpg";

const MainBlock = () => {
  return (
    <section className="mainblock">
      <div className="mainblock__body _container">
        <div className="mainblock__slider slider">
          <div className="slider__body">
            <div className="slider__item">
              <div className="slider__image">
                <img src={slide} alt="" />
              </div>
              <div className="slider__content content-slider">
                <a href="/#" className="content-slider__link">
                  <div className="content-slider__title">BANNER</div>
                  <div className="content-slider__text">your title text</div>
                </a>
              </div>
            </div>
          </div>
          <div className="slider__navigation-prev"></div>
          <div className="slider__navigation-next"></div>
        </div>
        <div className="mainblock__content card-category">
          <div className="card-category__column">
            <div className="card-category__item">
              <img className="card-category__image" src={women} alt="" />
              <div className="card-category__wrapper">
                <a href="/#" className="card-category__link">
                  WOMEN
                </a>
              </div>
            </div>
          </div>
          <div className="card-category__column">
            <div className="card-category__item">
              <img className="card-category__image" src={men} alt="" />
              <div className="card-category__wrapper">
                <a href="/#" className="card-category__link">
                  MEN
                </a>
              </div>
            </div>
          </div>
          <div className="card-category__column">
            <div className="card-category__item">
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
