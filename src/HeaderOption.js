import React from "react";
import "./HeaderOption.css";

function HeaderOption({ Icon, title }) {
  return (
    <div className="header-option">
      {Icon && <Icon />}
      <h3 className="header-option__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
