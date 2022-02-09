import React from "react";
import { Link } from "react-router-dom";

const NavColumn = ({ navigation, categoryName }) => {
  return (
    <ul className="footer-menu__column">
      <div className="footer-menu__title">{categoryName}</div>
      {navigation
        .filter((e) => {
          return e.category === categoryName;
        })
        .map(({ id, category, path, title, image }) => {
          return (
            <li key={id}>
              {image && <img src={image} alt={title} />}
              <Link
                to={`/${path}`}
               //  key={id}
                className="footer-menu__link"
                data-test-id={`footer-nav-link-${path}`}
              >
                {title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default NavColumn;
