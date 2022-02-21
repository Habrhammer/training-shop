import { Link } from "react-router-dom";

const Menu = ({ menu, active, setActive }) => {

  return (
    <div className="header-nav__menu menu" data-test-id="menu">
      <nav className={active ? "menu__body active" : "menu__body"} 
      data-test-id="burger-menu"
      onClick={(e)=>{
        e.stopPropagation()
      }}
      >
        <ul className="menu__list">
          {menu.map(({ id, name, path }) => {
            return (
              <li className="menu__item" key={id}>
                <Link
                  onClick={() => {
                    setActive(false);
                  }}
                  to={`/${path}`}
                  className="menu__link menu-item"
                  data-test-id={`menu-link-${path}`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
