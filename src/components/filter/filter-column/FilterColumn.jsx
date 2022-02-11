import React from "react";
import "./FilterColumn.scss";

const FilterColumn = ({ dataFilter, title }) => {
  return (
    <div className="filter__column">
      <div className="filter__title">{title}</div>

      {dataFilter[title].map(({ id, color, hex, size, brand, price }) => {
        return (
          <div className="filter__item filter-item" key={id}>
            <label htmlFor={id} className="filter-item__label">
              {color ? (
                <div
                  className="filter-item__circle"
                  style={{ backgroundColor: hex }}
                ></div>
              ) : (
                <input type="checkbox" id={id} />
              )}
              {color && <span className="filter-item__name">{color}</span>}
              {size && <span className="filter-item__name">{size}</span>}
              {brand && <span className="filter-item__name">{brand}</span>}
              {price && <span className="filter-item__name">{price}</span>}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default FilterColumn;
