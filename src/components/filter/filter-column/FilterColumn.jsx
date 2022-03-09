import React from "react";
import "./FilterColumn.scss";

const FilterColumn = ({ values, value, onValueChange, type }) => {
  return (
    <div className="filter__column">
      <div className="filter__title">{type}</div>
      <div className="filter__list"  data-test-id={`filters-${type}`}>
        {values.map((text, ind) => {
          return (
            <div className="filter__item filter-item" key={ind}>
              <label className="filter-item__label">
                <input
                  data-test-id={`filter-${type}-${text}`}
                  type="checkbox"
                  id={ind}
                  value={text}
                  checked={value.includes(text)}
                  onChange={onValueChange}
                />
                <span className="filter-item__name">{text}</span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterColumn;
