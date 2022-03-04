import React, { useState } from "react";
import FilterColumn from "../filter-column/FilterColumn";
import FilterHeader from "../filter-header/FilterHeader";
import "./FilterBlock.scss";

const FilterBlock = ({
  colors,
  color,
  onColorChange,
  brands,
  brand,
  onBrandChange,
  sizes,
  size,
  onSizeChange,
  prices,
  price,
  onPriceChange,
  dataFilter,
}) => {
  const [isShow, setIsShow] = useState(false);
  const toggleShow = () => setIsShow(!isShow);
  return (
    <div className="filter">
      <FilterHeader isShow={isShow} toggleShow={toggleShow} />
      {isShow && (
        <div className="filter__body _container">
          <div className="filter__container">
            <FilterColumn
              title="color"
              onValueChange={onColorChange}
              values={colors}
              value={color}
              dataFilter={dataFilter}
            />
            <FilterColumn
              title="brand"
              onValueChange={onBrandChange}
              values={brands}
              value={brand}
              dataFilter={dataFilter}
            />
            <FilterColumn
              title="size"
              onValueChange={onSizeChange}
              values={sizes}
              value={size}
              dataFilter={dataFilter}
            />
            <FilterColumn
              title="price"
              onValueChange={onPriceChange}
              values={prices}
              value={price}
              dataFilter={dataFilter}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBlock;
