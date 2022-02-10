import "./Header.scss";
import globeImg from "../../assets/images/header/header_nav/globe.svg";
import searchImg from "../../assets/images/header/header_nav/search.svg";
import userImg from "../../assets/images/header/header_nav/user.svg";
import cartImg from "../../assets/images/header/header_nav/shopping_bag.svg";
import HeaderInfo from "../header-info/HeaderInfo";
import HeaderSocial from "../header-social/HeaderSocial";
import HeaderLogo from "../header-logo/HeaderLogo";
import Menu from "../menu/Menu";

const Header = ({ headerData }) => {
  let { info, socialLinks, menu } = headerData;
  return (
    <header className="header" data-test-id="header">
      <div className="header__top">
        <div className="top-header _container">
          <HeaderInfo info={info} />
          <HeaderSocial socialLinks={socialLinks} />
        </div>
      </div>
      <div className="header-nav _container">
        <HeaderLogo />
        <Menu menu={menu}/>
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
      </div>
    </header>
  );
};

export default Header;
