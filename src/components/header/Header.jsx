import "./Header.scss";
import globeImg from "../../assets/images/header/header_nav/globe.svg";
import searchImg from "../../assets/images/header/header_nav/search.svg";
import userImg from "../../assets/images/header/header_nav/user.svg";
import cartImg from "../../assets/images/header/header_nav/shopping_bag.svg";
import HeaderInfo from "../header-info/HeaderInfo";
import HeaderSocial from "../header-social/HeaderSocial";
import HeaderLogo from "../header-logo/HeaderLogo";
import Menu from "../menu/Menu";
import { useEffect, useState } from "react";
import useScrollBlock from "../../hooks/useScrollBlock";
import ProductCart from "../product-cart/ProductCart";
import { useSelector } from "react-redux";

const Header = ({ headerData }) => {
  const productsInCart = useSelector(({ cart }) => {
    return cart.order;
  });

  console.log(productsInCart.length);

  const [isShow, setShow] = useState(false);

  const [blockScroll, allowScroll] = useScrollBlock();
  let { info, socialLinks, menu } = headerData;
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    menuActive ? blockScroll() : allowScroll();
  });

  return (
    <>
      <header
        className="header"
        onClick={() => {
          setMenuActive(false);
        }}
        data-test-id="header"
      >
        <div className="header__top">
          <div className="top-header _container">
            <HeaderInfo info={info} />
            <HeaderSocial socialLinks={socialLinks} />
          </div>
        </div>
        <div className="header-nav _container">
          <HeaderLogo />
          <Menu menu={menu} active={menuActive} setActive={setMenuActive} />
          <div className="header-nav__actions actions-header">
            <div className="action-header__item _ibg">
              <img src={searchImg} alt="" />
            </div>
            <div className="action-header__item _ibg">
              <img src={globeImg} alt="" />
            </div>
            <div className="action-header__item _ibg">
              <img src={userImg} alt="" />
            </div>
            <button
              data-test-id='cart-button'
              onClick={() => {
                setShow(true);
              }}
              className="action-header__item _ibg"
            >
              {productsInCart.length > 0 && (
                <span>{productsInCart.length}</span>
              )}
              <img src={cartImg} alt="" />
            </button>
          </div>
          <button
            className={menuActive ? "burger-btn active" : "burger-btn"}
            data-test-id="burger-menu-btn"
            onClick={(e) => {
              e.stopPropagation();
              setMenuActive(!menuActive);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <ProductCart isShow={isShow} setShow={setShow} />
    </>
  );
};

export default Header;
