import React from "react";
import "./SubscribeLoader.scss";

const SubscribeLoader = () => {
  return (
    <div className="LoadingMessage">
      <div className="LoadingMessage__ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default SubscribeLoader;
