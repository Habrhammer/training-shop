import { Link } from "react-router-dom";

const Menu = ({ menu, active, setActive }) => {
  console.log(menu);
  return (
    <div className="header-nav__menu menu" data-test-id="menu">
      <nav className={active ? "menu__body active" : "menu__body"}>
        <ul className="menu__list">
          {menu.map(({ id, name, path }) => {
            return (
              <li className="menu__item" key={id}>
                <Link
                  to={`/${path}`}
                  className="menu__link menu-item"
                  data-test-id={`menu-link-${path}`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
          {/* 
          <li className="menu__item">
            <a href="" className="menu__link">
              Women
            </a>
          </li>
          */}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
