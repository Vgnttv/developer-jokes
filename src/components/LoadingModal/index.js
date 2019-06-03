import React from "react";
import logo from "./lol.png";

export default () => {
  return (
    <div className="loading-container">
      <div className="loading-square">
        <img className="loading-modal" src={logo} alt="logo" />
      </div>
    </div>
  );
};
