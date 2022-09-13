import React from "react";
import { Link } from "react-router-dom";
import "./TabBtn.css";

const TabBtn = ({ active, text, i }) => {
  let className = "tabsMenuLi";
  if (i === 0) {
    className = "tabsMenuLi active";
  }
  return (
    <li className={className}>
      <Link onClick={active} to="#tab1">
        {text}
      </Link>
    </li>
  );
};

export default TabBtn;
