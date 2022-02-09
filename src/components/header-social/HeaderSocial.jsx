const HeaderSocial = ({socialLinks}) => {
   return (
      <div className="top-header__column header-social">
      {socialLinks.map(({ id, name, image, link }) => {
        return (
          <div className="header-social__item" key={id}>
            <a href={link}>
              <img src={image} alt={name} />
            </a>
          </div>
        );
      })}
    </div>
   )
}

export default HeaderSocial;