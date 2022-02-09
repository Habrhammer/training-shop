import NavColumn from "../footer-nav/NavColumn";
import "./Footer.scss";

const Footer = ({ data }) => {
  let { navigation, socialLinks, payments } = data;
  console.log(socialLinks);
  return (
    <footer className="footer" data-test-id="footer">
      <div className="footer__top footer-top">
        <div className="footer-top__body _container">
          <form action="#" className="footer-top__form">
            <div className="footer-top__title">BE IN TOUCH WITH US:</div>
            <input
              type="text"
              className="footer-top__input"
              placeholder="Enter your email"
            />
            <button className="footer-top__btn">Join Us</button>
          </form>
          <div className="footer-top__social">
            {socialLinks.map(({ id, name, image, link }) => {
              return (
                <a href={link} key={id}>
                  <img src={image} alt={name} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer__body">
        <div className="footer__container _container">
          <div className="footer__menu footer-menu">
            <NavColumn navigation={navigation} categoryName="Categories" />
            <NavColumn navigation={navigation} categoryName="Information" />
            <NavColumn navigation={navigation} categoryName="Useful links" />
            <NavColumn navigation={navigation} categoryName="Contact us" />
          </div>
        </div>
      </div>
      <div className="footer__bottom footer-bottom">
        <div className="footer-bottom__body _container">
          <div className="footer-bottom__copyright">
            Copyright © 2032 all rights reserved
          </div>
          <div className="footer-bottom__payments">
            {payments.map(({ name, image }, ind) => {
              return <img src={image} alt={name} key={ind} />;
            })}
          </div>
          <div className="footer-bottom__link">
            <a href="https://Clevertec.ru/training">Clevertec.ru/training</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
