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
  // dataFilter,
}) => {
  const [isShow, setIsShow] = useState(false);
  const toggleShow = () => setIsShow(!isShow);
  return (
    <div className="filter">
      <FilterHeader isShow={isShow} toggleShow={toggleShow} />
      {isShow && (
        <div className="filter__body _container">
          <div className="filter__container" >
            <FilterColumn
              data-test-id='filters-color'
              type="color"
              onValueChange={onColorChange}
              values={colors}
              value={color}
              // dataFilter={dataFilter}
            />
            <FilterColumn
            data-test-id='filters-brand'
              type="brand"
              onValueChange={onBrandChange}
              values={brands}
              value={brand}
              // dataFilter={dataFilter}
            />
            <FilterColumn
            data-test-id='filters-size'
              type="size"
              onValueChange={onSizeChange}
              values={sizes}
              value={size}
              // dataFilter={dataFilter}
            />
            <FilterColumn
              type="price"
              onValueChange={onPriceChange}
              values={prices}
              value={price}
              // dataFilter={dataFilter}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBlock;
