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

const Header = ({ headerData }) => {
  let { info, socialLinks, menu } = headerData;
  const [menuActive, setMenuActive] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <header
      className={scroll ? "header _scroll" : "header"}
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
        <Menu menu={menu} active={menuActive} setActive={setMenuActive}  />
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
          <div className="action-header__item _ibg">
            <img src={cartImg} alt="" />
          </div>
        </div>
        <button
          className={menuActive ? "burger-btn active" : "burger-btn"}
          onClick={() => {
            setMenuActive(!menuActive);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
