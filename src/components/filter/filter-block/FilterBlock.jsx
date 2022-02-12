import React, { useState } from "react";
import FilterColumn from "../filter-column/FilterColumn";
import FilterHeader from "../filter-header/FilterHeader";
import "./FilterBlock.scss";

const FilterBlock = ({ dataFilter }) => {
  const [isShow, setIsShow] = useState(false);
  const toggleShow = () => setIsShow(!isShow);
  return (
    <div className="filter">
      <FilterHeader isShow={isShow} toggleShow={toggleShow} />
      {isShow && (
        <div className="filter__body _container">
          <div className="filter__container">
             <FilterColumn title="color" dataFilter={dataFilter}/>
             <FilterColumn title="size" dataFilter={dataFilter}/>
             <FilterColumn title="brand" dataFilter={dataFilter}/>
             <FilterColumn title="price" dataFilter={dataFilter}/>
    
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBlock;
