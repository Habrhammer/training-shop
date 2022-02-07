import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <>
      <Link
        to="/"
        className="header-nav__logo header-nav-logo"
        data-test-id="header-logo-link"
      >
        CleverShop
      </Link>
    </>
  );
};


export default HeaderLogo;