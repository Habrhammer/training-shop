import React from "react";
import "./FilterHeader.scss";
import adjustments from "./../../../assets/images/filter/adjustments.svg";
import list from "./../../../assets/images/filter/view-list.svg";
import grid from "./../../../assets/images/filter/view-grid.svg";
import close from "./../../../assets/images/filter/close.svg";

const FilterHeader = ({ isShow, toggleShow }) => {
  let toggleShowHandler = () => {
    toggleShow();
  };
  return (
    <div className="filter__header filter-header">
      <div className="filter-header__container _container">
        <div className="filter-header__column filter-adjustments">
          <button
            data-test-id="filter-button"
            onClick={toggleShowHandler}
            className="filter-adjusments__btn"
          >
            {isShow ? (
              <img src={close} alt="close" />
            ) : (
              <img src={adjustments} alt="" />
            )}
            <span>FILTER</span>
          </button>
        </div>
        <div className="filter-header__column filter-view">
          <button className="filter-view__list">
            <img src={list} alt="list-icon" />
          </button>
          <button className="filter-view__grid">
            <img src={grid} alt="list-grid" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterHeader;
