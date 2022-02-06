import "./Header.scss";
import clockImg from "../../assets/images/header/header_top/clock.svg";
import locationImg from "../../assets/images/header/header_top/location.svg";
import phoneImg from "../../assets/images/header/header_top/phone.svg";
import facebookImg from "../../assets/images/social_network_icon/facebook.svg";
import instagramImg from "../../assets/images/social_network_icon/instagram.svg";
import pinterestImg from "../../assets/images/social_network_icon/pinterest.svg";
import twitterImg from "../../assets/images/social_network_icon/twitter.svg";

import globeImg from "../../assets/images/header/header_nav/globe.svg";
import searchImg from "../../assets/images/header/header_nav/search.svg";
import userImg from "../../assets/images/header/header_nav/user.svg";
import cartImg from "../../assets/images/header/header_nav/shopping_bag.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="top-header _container">
          <div className="top-header__column">
            <div className="header-info">
              <a href="tel:+375291002030" className="header-info__item">
                <img src={phoneImg} alt="phone" />
                <span>+375 29 100 20 30</span>
              </a>
              <a href="#" className="header-info__item">
                <img src={locationImg} alt="location" />
                <span>Belarus, Gomel, Lange 17</span>
              </a>
              <a href="#" className="header-info__item">
                <img src={clockImg} alt="clock" />
                <span>All week 24/7</span>
              </a>
            </div>
          </div>
          <div className="top-header__column header-social">
            <div className="header-social__item">
              <a href="#">
                <img src={facebookImg} alt="" />
              </a>
            </div>
            <div className="header-social__item">
              <a href="#">
                <img src={twitterImg} alt="" />
              </a>
            </div>
            <div className="header-social__item">
              <a href="#">
                <img src={instagramImg} alt="" />
              </a>
            </div>
            <div className="header-social__item">
              <a href="#">
                <img src={pinterestImg} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="header-nav _container">
        <a href="" className="header-nav__logo">
          CleverShop
        </a>
        <div className="header-nav__menu menu">
          <nav className="menu__body">
            <ul className="menu__list">
              <li className="menu__item">
                <a href="" className="menu__link">
                  About Us
                </a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__link">
                  Women
                </a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__link">
                  Men
                </a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__link">
                  Beauty
                </a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__link">
                  Accessories
                </a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__link">
                  Blog
                </a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__link">
                  About Us
                </a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-nav__actions actions-header">
          <div className="action-header__item">
            <img src={searchImg} alt="" />
          </div>
          <div className="action-header__item">
            <img src={globeImg} alt="" />
          </div>
          <div className="action-header__item">
            <img src={userImg} alt="" />
          </div>
          <div className="action-header__item">
            <img src={cartImg} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
