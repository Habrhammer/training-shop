const HeaderInfo = ({info}) => {
  return (
    <div className="top-header__column">
      <div className="header-info">
        {info.map((el) => {
          return (
            <a href={el.link} className="header-info__item" key={el.id}>
              <img src={el.image} alt={el.alt} />
              <span>{el.text}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderInfo;