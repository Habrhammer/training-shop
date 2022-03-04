import React from "react";
import "./FilterColumn.scss";

const FilterColumn = ({ values, value, onValueChange, dataFilter, title }) => {
  return (
    <div className="filter__column">
      <div className="filter__title">{title}</div>
      <div className="filter__list">
        {values.map((e, ind) => {
          return (
            <div className="filter__item filter-item" key={ind}>
              <label className="filter-item__label">
                <input
                  type="checkbox"
                  id={ind}
                  value={e}
                  checked={value.includes(e)}
                  onChange={onValueChange}
                />
                <span className="filter-item__name">{e}</span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterColumn;
